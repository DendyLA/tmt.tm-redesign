import type { DelegateFileField, DelegateTextField } from "./delegate-registration.constants";
import { maxDelegateImageSize, maxDelegatePassportSize } from "./delegate-registration.constants";
import { isDelegateCountry } from "./delegate-registration.countries";

export type DelegateValidationError =
    | "requiredError"
    | "nameError"
    | "latinError"
    | "emailError"
    | "phoneError"
    | "countryError"
    | "fileRequiredError"
    | "fileTypeError"
    | "fileSizeError";

export function validateDelegateText(
    field: DelegateTextField,
    value: string,
): DelegateValidationError | null {
    const trimmed = value.trim();
    if (!trimmed) return "requiredError";

    if (field === "country") return isDelegateCountry(trimmed) ? null : "countryError";

    if (field === "firstName" || field === "lastName") {
        if (trimmed.length < 2) return "nameError";
        return /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/.test(trimmed) ? null : "latinError";
    }
    if (field === "email") {
        return /^[\x21-\x7e]+$/.test(trimmed) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)
            ? null
            : "emailError";
    }
    if (field === "phone") {
        const digits = trimmed.replace(/\D/g, "");
        return /^\+?[0-9()\s-]+$/.test(trimmed) && digits.length >= 7 && digits.length <= 15
            ? null
            : "phoneError";
    }
    if (trimmed.length < 2) return "nameError";
    return /^[\x20-\x7e]+$/.test(trimmed) && /[A-Za-z]/.test(trimmed) ? null : "latinError";
}

export function validateDelegateFile(
    field: DelegateFileField,
    file: File | null,
    country?: string,
): DelegateValidationError | null {
    if (!file) {
        return field === "companyLogo" || (field === "internalPassport" && country !== "TM")
            ? null
            : "fileRequiredError";
    }

    const isPassport = field === "internalPassport" || field === "foreignPassport";
    const allowed = isPassport
        ? ["application/pdf", "image/jpeg", "image/png", "image/webp"]
        : ["image/jpeg", "image/png", "image/webp"];
    if (!allowed.includes(file.type)) return "fileTypeError";
    if (file.size > (isPassport ? maxDelegatePassportSize : maxDelegateImageSize)) {
        return "fileSizeError";
    }
    return null;
}
