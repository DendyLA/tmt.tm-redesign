import { getCountries } from "react-phone-number-input";

// The phone metadata includes three non-ISO regions rejected by the API validator.
const countries = [
    ...getCountries().filter((code) => !["AC", "TA", "XK"].includes(code)),
    "AQ", "BV", "GS", "HM", "PN", "TF", "UM",
];
const countryCodes = new Set<string>(countries);

export function isDelegateCountry(value: string): boolean {
    return countryCodes.has(value);
}

export function getDelegateCountries(): { code: string; name: string }[] {
    const displayNames = new Intl.DisplayNames("en", { type: "region" });
    return countries
        .map((code) => ({ code, name: displayNames.of(code) || code }))
        .sort((a, b) => a.name.localeCompare(b.name, "en"));
}
