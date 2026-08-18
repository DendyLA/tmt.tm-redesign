import Link from "next/link";

import type { Locale } from "@/lib/i18n/config";
import { withLocalePath } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Tag } from "@/services/tags/tags.types";
import type { VacancyData } from "@/services/vacancy/vacancy.types";
import cn from "@/lib/utils/cn";
type VacancyFormProps = {
    action: (formData: FormData) => void | Promise<void>;
    categories?: Tag[] | null;
    copy: Dictionary["profile"]["vacancies"];
    locale: Locale;
    mode: "create" | "edit";
    vacancy?: VacancyData | null;
    defaultContactEmail?: string;
    error?: string;
	className?: string;
};

const vacancyLocationValues = [
    "Ашхабад",
    "Ахал",
    "Мары",
    "Лебап",
    "Дашогуз",
    "Балкан",
] as const;

function getVacancyValue(
    vacancy: VacancyData | null | undefined,
    key: "title" | "description" | "requirements" | "location",
) {
    return vacancy?.translation?.[key] ?? vacancy?.[key] ?? "";
}

export default function VacancyForm({
    action,
    categories,
    copy,
    locale,
    mode,
    vacancy,
    defaultContactEmail = "",
    error,
	className,
}: VacancyFormProps) {
    const formCopy = copy.form;
    const categoryItems = categories ?? [];
    const selectedCategoryId = vacancy?.tags?.[0]?.tagId ?? "";
    const errorMessage =
        error && error in formCopy.errors
            ? formCopy.errors[error as keyof typeof formCopy.errors]
            : null;

    return (
        <form
            action={action}
            className={cn("mx-auto mt-12 w-full max-w-[760px] rounded-[8px] border border-primary bg-white px-5 py-6 sm:px-8 sm:py-8", className)}
        >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <h1 className="font-second text-[24px] font-semibold tracking-[0.12em] text-primary uppercase">
                        {mode === "create"
                            ? formCopy.createTitle
                            : formCopy.editTitle}
                    </h1>
                    <p className="mt-2 font-main text-[13px] leading-5 font-medium text-dark">
                        {formCopy.subtitle}
                    </p>
                </div>

                <Link
                    href={withLocalePath("/profile", locale)}
                    className="font-main text-[13px] font-bold text-primary transition-opacity duration-300 hover:opacity-70"
                >
                    {formCopy.back}
                </Link>
            </div>

            {errorMessage && (
                <p className="mt-5 rounded-[4px] bg-red-50 px-4 py-3 font-main text-[13px] font-semibold text-red-600">
                    {errorMessage}
                </p>
            )}

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 font-main text-[14px] font-semibold text-dark sm:col-span-2">
                    {formCopy.title}
                    <input
                        type="text"
                        name="title"
                        defaultValue={getVacancyValue(vacancy, "title")}
                        required
                        className="h-10 w-full border border-primary/50 bg-white px-3 font-main text-[13px] font-medium text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                    />
                </label>

                <label className="flex flex-col gap-2 font-main text-[14px] font-semibold text-dark">
                    {formCopy.category}
                    <select
                        name="tagId"
                        defaultValue={selectedCategoryId}
                        disabled={!categoryItems.length}
                        required={categoryItems.length > 0}
                        className="h-10 w-full border border-primary/50 bg-white px-3 font-main text-[13px] font-medium text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15 disabled:opacity-60"
                    >
                        <option value="">{formCopy.selectCategory}</option>
                        {categoryItems.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.translation?.name ?? item.name}
                            </option>
                        ))}
                    </select>
                </label>

                <label className="flex flex-col gap-2 font-main text-[14px] font-semibold text-dark">
                    {formCopy.location}
                    <select
                        name="location"
                        defaultValue={getVacancyValue(vacancy, "location")}
                        required
                        className="h-10 w-full border border-primary/50 bg-white px-3 font-main text-[13px] font-medium text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                    >
                        <option value="">{formCopy.selectLocation}</option>
                        {vacancyLocationValues.map((value, index) => (
                            <option key={value} value={value}>
                                {copy.regions[index]}
                            </option>
                        ))}
                    </select>
                </label>

                <label className="flex flex-col gap-2 font-main text-[14px] font-semibold text-dark">
                    {formCopy.contactEmail}
                    <input
                        type="email"
                        name="contactEmail"
                        defaultValue={vacancy?.contactEmail ?? defaultContactEmail}
                        required
                        className="h-10 w-full border border-primary/50 bg-white px-3 font-main text-[13px] font-medium text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                    />
                </label>

                <label className="flex flex-col gap-2 font-main text-[14px] font-semibold text-dark sm:col-span-2">
                    {formCopy.salary}
                    <input
                        type="text"
                        name="salary"
                        defaultValue={vacancy?.salary ?? ""}
                        className="h-10 w-full border border-primary/50 bg-white px-3 font-main text-[13px] font-medium text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                    />
                </label>

                <label className="flex flex-col gap-2 font-main text-[14px] font-semibold text-dark sm:col-span-2">
                    {formCopy.description}
                    <textarea
                        name="description"
                        defaultValue={getVacancyValue(vacancy, "description")}
                        required
                        rows={5}
                        className="w-full resize-y border border-primary/50 bg-white px-3 py-3 font-main text-[13px] font-medium text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                    />
                </label>

                <label className="flex flex-col gap-2 font-main text-[14px] font-semibold text-dark sm:col-span-2">
                    {formCopy.requirements}
                    <textarea
                        name="requirements"
                        defaultValue={getVacancyValue(vacancy, "requirements")}
                        required
                        rows={5}
                        className="w-full resize-y border border-primary/50 bg-white px-3 py-3 font-main text-[13px] font-medium text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                    />
                </label>
            </div>

            <button
                type="submit"
                className="mt-8 rounded-[4px] bg-primary px-6 py-3 font-main text-[13px] font-bold text-white transition-colors duration-300 hover:bg-primary-hover"
            >
                {mode === "create" ? formCopy.createSubmit : formCopy.editSubmit}
            </button>
        </form>
    );
}
