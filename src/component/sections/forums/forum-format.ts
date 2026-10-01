import type { Locale } from "@/lib/i18n/config";

export function formatForumDateRange(
    startDate: string,
    endDate: string,
    locale: Locale,
) {
    const localeCode =
        locale === "en" ? "en-US" : locale === "tm" ? "tk-TM" : "ru-RU";
    const formatter = new Intl.DateTimeFormat(localeCode, {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (Number.isNaN(start.getTime())) {
        return "";
    }

    if (Number.isNaN(end.getTime()) || start.toDateString() === end.toDateString()) {
        return formatter.format(start);
    }

    return `${formatter.format(start)} - ${formatter.format(end)}`;
}

export function formatForumDayDate(date: string, locale: Locale) {
    const parsed = new Date(`${date.slice(0, 10)}T12:00:00Z`);
    if (Number.isNaN(parsed.getTime())) return "";

    return new Intl.DateTimeFormat(
        locale === "en" ? "en-US" : locale === "tm" ? "tk-TM" : "ru-RU",
        { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" },
    ).format(parsed);
}
