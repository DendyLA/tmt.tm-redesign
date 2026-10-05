"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { ForumRegistrationError, registerForumDelegate } from "@/services/forums/forum-registration.service";
import { getDelegateCountryName } from "./delegate-registration.countries";
import {
    delegateDraftKey,
    delegateDraftMaxAge,
    delegateFileFields,
    delegateTextFields,
    emptyDelegateFiles,
    emptyDelegateText,
    type DelegateFileField,
    type DelegateFiles,
    type DelegateTextField,
    type DelegateTextValues,
} from "./delegate-registration.constants";
import {
    validateDelegateFile,
    validateDelegateText,
    type DelegateValidationError,
} from "./delegate-registration.validation";
import ForumDelegateFileField from "./ForumDelegateFileField";
import ForumDelegateCountryField from "./ForumDelegateCountryField";
import ForumDelegateSuccessDialog from "./ForumDelegateSuccessDialog";

type ForumDelegateFormProps = {
    forumSlug: string;
    locale: Locale;
    copy: Dictionary["forums"]["registration"];
};

type FieldErrors = Partial<Record<DelegateTextField | DelegateFileField, DelegateValidationError>>;

type StandardTextField = Exclude<DelegateTextField, "country">;

const textInputTypes: Record<StandardTextField, string> = {
    firstName: "text",
    lastName: "text",
    organization: "text",
    position: "text",
    email: "email",
    phone: "tel",
};

const autoCompleteValues: Record<StandardTextField, string> = {
    firstName: "given-name",
    lastName: "family-name",
    organization: "organization",
    position: "organization-title",
    email: "email",
    phone: "tel",
};

const maxLengths: Record<DelegateTextField, number> = {
    firstName: 120,
    lastName: 120,
    organization: 180,
    position: 180,
    email: 180,
    phone: 25,
    country: 2,
};

export default function ForumDelegateForm({ forumSlug, locale, copy }: ForumDelegateFormProps) {
    const [values, setValues] = useState<DelegateTextValues>(emptyDelegateText);
    const [files, setFiles] = useState<DelegateFiles>(emptyDelegateFiles);
    const [errors, setErrors] = useState<FieldErrors>({});
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [requestError, setRequestError] = useState<string | null>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const storageKey = `${delegateDraftKey}:${forumSlug}`;

    useEffect(() => {
        const frame = window.requestAnimationFrame(() => {
            try {
                const saved = window.localStorage.getItem(storageKey);
                if (saved) {
                    const draft = JSON.parse(saved) as { savedAt?: number; values?: Partial<DelegateTextValues> };
                    if (draft.savedAt && Date.now() - draft.savedAt < delegateDraftMaxAge && draft.values) {
                        const restored = { ...emptyDelegateText };
                        for (const field of delegateTextFields) {
                            const value = draft.values[field];
                            if (typeof value === "string") restored[field] = value.slice(0, maxLengths[field]);
                        }
                        setValues(restored);
                    } else {
                        window.localStorage.removeItem(storageKey);
                    }
                }
            } catch {
                // Storage may be disabled; registration still works without a saved draft.
            }
        });
        return () => window.cancelAnimationFrame(frame);
    }, [storageKey]);

    const updateText = (field: DelegateTextField, value: string) => {
        const nextValues = { ...values, [field]: value };
        setValues(nextValues);
        try {
            window.localStorage.setItem(storageKey, JSON.stringify({ savedAt: Date.now(), values: nextValues }));
        } catch {
            // Private browsing and storage quotas must not block the form.
        }
        setErrors((current) => ({
            ...current,
            [field]: field === "country" && !value ? undefined : validateDelegateText(field, value) || undefined,
            ...(field === "country" && value !== "TM" ? { internalPassport: undefined } : {}),
        }));
        setRequestError(null);
    };

    const updateFile = (field: DelegateFileField, file: File | null) => {
        const error = validateDelegateFile(field, file, values.country);
        setFiles((current) => ({ ...current, [field]: error ? null : file }));
        setErrors((current) => ({ ...current, [field]: error || undefined }));
        setRequestError(null);
        return !error;
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (submitting) return;

        const nextErrors: FieldErrors = {};
        for (const field of delegateTextFields) {
            const error = validateDelegateText(field, values[field]);
            if (error) nextErrors[field] = error;
        }
        for (const field of delegateFileFields) {
            const error = validateDelegateFile(field, files[field], values.country);
            if (error) nextErrors[field] = error;
        }
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length) {
            const firstField = [...delegateTextFields, ...delegateFileFields].find((field) => nextErrors[field]);
            if (firstField) document.getElementById(firstField)?.focus();
            return;
        }

        const data = new FormData();
        for (const field of delegateTextFields) {
            data.append(field, field === "country" ? getDelegateCountryName(values.country) : values[field].trim());
        }
        for (const field of delegateFileFields) {
            const file = files[field];
            if (file) data.append(field, file);
        }

        setSubmitting(true);
        setRequestError(null);
        try {
            await registerForumDelegate(forumSlug, data);
            try {
                window.localStorage.removeItem(storageKey);
            } catch {
                // A successful registration must not depend on browser storage.
            }
            setValues({ ...emptyDelegateText });
            setFiles({ ...emptyDelegateFiles });
            formRef.current?.reset();
            setSuccess(true);
        } catch (error) {
            if (error instanceof ForumRegistrationError) {
                setRequestError(
                    error.status === 429
                        ? copy.rateLimitError
                        : error.status === 413
                          ? copy.fileSizeError
                          : error.status === 404 || error.status === 503
                            ? copy.unavailableError
                            : copy.requestError,
                );
            } else {
                setRequestError(copy.requestError);
            }
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <form
                ref={formRef}
                noValidate
                onSubmit={handleSubmit}
                className="mx-auto mt-10 w-full max-w-[900px] rounded-[8px] border border-[#c9d9c9] bg-white px-5 py-7 shadow-sm sm:px-9 sm:py-10"
            >
                <fieldset disabled={submitting}>
                    <legend className="font-second text-[21px] font-semibold text-[#087541]">
                        {copy.detailsTitle}
                    </legend>
                    <p className="mt-4 font-main text-[13px] text-[#4a6155]">{copy.latinHint}</p>
                    <div className="mt-6 grid gap-x-6 gap-y-5 sm:grid-cols-2">
                        {delegateTextFields.filter((field) => field !== "country").map((field) => (
                            <div key={field} className="min-w-0">
                                <label htmlFor={field} className="font-main text-[14px] font-semibold text-[#163d2b]">
                                    {copy[field]} *
                                </label>
                                <input
                                    id={field}
                                    name={field}
                                    type={textInputTypes[field]}
                                    autoComplete={autoCompleteValues[field]}
                                    value={values[field]}
                                    maxLength={maxLengths[field]}
                                    required
                                    aria-invalid={Boolean(errors[field])}
                                    aria-describedby={errors[field] ? `${field}-error` : undefined}
                                    onChange={(event) => updateText(field, event.target.value)}
                                    onBlur={() => setErrors((current) => ({ ...current, [field]: validateDelegateText(field, values[field]) || undefined }))}
                                    className={`mt-2 h-11 w-full rounded-[4px] border bg-white px-3 font-main text-[15px] text-[#163d2b] outline-none focus:ring-2 focus:ring-[#087541]/15 ${errors[field] ? "border-red-500" : "border-[#afc8b2] focus:border-[#087541]"}`}
                                />
                                {errors[field] && (
                                    <p id={`${field}-error`} className="mt-1 font-main text-[12px] text-red-600">
                                        {copy[errors[field]]}
                                    </p>
                                )}
                            </div>
                        ))}
                        <ForumDelegateCountryField
                            copy={copy}
                            value={values.country}
                            error={errors.country}
                            onChange={(value) => updateText("country", value)}
                            onBlur={() => setErrors((current) => ({ ...current, country: validateDelegateText("country", values.country) || undefined }))}
                        />
                    </div>
                </fieldset>

                <fieldset disabled={submitting} className="mt-9 border-t border-[#dbe5db] pt-8">
                    <legend className="font-second text-[21px] font-semibold text-[#087541]">
                        {copy.documentsTitle}
                    </legend>
                    <div className="mt-6 grid gap-x-6 gap-y-5 sm:grid-cols-2">
                        {delegateFileFields.map((field) => (
                            <ForumDelegateFileField
                                key={field}
                                field={field}
                                file={files[field]}
                                error={errors[field]}
                                required={field !== "companyLogo" && (field !== "internalPassport" || values.country === "TM")}
                                copy={copy}
                                onChange={(file) => updateFile(field, file)}
                            />
                        ))}
                    </div>
                </fieldset>

                {requestError && (
                    <p role="alert" className="mt-7 rounded-[4px] bg-red-50 px-4 py-3 font-main text-[14px] text-red-700">
                        {requestError}
                    </p>
                )}
                <div className="mt-8 flex justify-end">
                    <button
                        type="submit"
                        disabled={submitting}
                        className="min-h-12 w-full rounded-[4px] bg-[#087541] px-7 font-main text-[14px] font-bold text-white transition-colors hover:bg-[#075a34] disabled:cursor-wait disabled:opacity-60 sm:w-auto"
                    >
                        {submitting ? copy.submitting : copy.submit}
                    </button>
                </div>
            </form>
            {success && (
                <ForumDelegateSuccessDialog
                    locale={locale}
                    copy={copy}
                    onClose={() => setSuccess(false)}
                />
            )}
        </>
    );
}
