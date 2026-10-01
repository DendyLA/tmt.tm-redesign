import { FileText, Upload } from "lucide-react";

import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { DelegateFileField } from "./delegate-registration.constants";
import type { DelegateValidationError } from "./delegate-registration.validation";

type ForumDelegateFileFieldProps = {
    field: DelegateFileField;
    file: File | null;
    error?: DelegateValidationError;
    required: boolean;
    copy: Dictionary["forums"]["registration"];
    onChange: (file: File | null) => boolean;
};

export default function ForumDelegateFileField({
    field,
    file,
    error,
    required,
    copy,
    onChange,
}: ForumDelegateFileFieldProps) {
    const isPassport = field === "internalPassport" || field === "foreignPassport";
    const accept = isPassport
        ? ".pdf,.jpg,.jpeg,.png,.webp"
        : ".jpg,.jpeg,.png,.webp";

    return (
        <div className="flex h-full min-w-0 flex-col">
            <label htmlFor={field} className="font-main text-[14px] font-semibold text-[#163d2b]">
                {copy[field]}{required ? " *" : field === "companyLogo" ? ` (${copy.optional})` : ""}
            </label>
            <label
                htmlFor={field}
                className={`mt-2 flex min-h-24 flex-1 cursor-pointer flex-col items-start justify-center rounded-[6px] border border-dashed bg-white px-4 py-3 transition-colors focus-within:ring-2 focus-within:ring-[#087541]/20 ${error ? "border-red-500" : "border-[#afc8b2] hover:border-[#087541]"}`}
            >
                <input
                    id={field}
                    type="file"
                    accept={accept}
                    required={required}
                    aria-invalid={Boolean(error)}
                    aria-describedby={`${field}-hint${field === "internalPassport" ? ` ${field}-visa-hint` : ""}${error ? ` ${field}-error` : ""}`}
                    className="sr-only"
                    onChange={(event) => {
                        if (!onChange(event.currentTarget.files?.[0] || null)) {
                            event.currentTarget.value = "";
                        }
                    }}
                />
                <span className="inline-flex max-w-full items-center gap-2 font-main text-[14px] font-semibold text-[#087541]">
                    {file ? <FileText size={18} aria-hidden="true" /> : <Upload size={18} aria-hidden="true" />}
                    <span className="truncate">{file?.name || copy.chooseFile}</span>
                </span>
                <span id={`${field}-hint`} className="mt-1 font-main text-[12px] text-[#5e7062]">
                    {isPassport ? copy.passportHint : copy.imageHint}
                </span>
                {field === "internalPassport" && (
                    <span id={`${field}-visa-hint`} className="mt-1 font-main text-[12px] text-[#5e7062]">
                        {copy.internalPassportVisaHint}
                    </span>
                )}
            </label>
            {error && (
                <p id={`${field}-error`} className="mt-1 font-main text-[12px] text-red-600">
                    {copy[error]}
                </p>
            )}
        </div>
    );
}
