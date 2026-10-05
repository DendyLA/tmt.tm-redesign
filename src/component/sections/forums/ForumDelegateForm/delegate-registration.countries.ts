import { getCountries } from "react-phone-number-input";

// The phone metadata includes three non-ISO regions.
const countries = [
    ...getCountries().filter((code) => !["AC", "TA", "XK"].includes(code)),
    "AQ", "BV", "GS", "HM", "PN", "TF", "UM",
];
const countryCodes = new Set<string>(countries);
const displayNames = new Intl.DisplayNames("en", { type: "region" });

export function isDelegateCountry(value: string): boolean {
    return countryCodes.has(value);
}

export function getDelegateCountryName(code: string): string {
    return displayNames.of(code) || code;
}

export function getDelegateCountries(): { code: string; name: string }[] {
    return countries
        .map((code) => ({ code, name: getDelegateCountryName(code) }))
        .sort((a, b) => a.name.localeCompare(b.name, "en"));
}
