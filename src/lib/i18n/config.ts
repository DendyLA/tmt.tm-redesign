export const locales = ["ru", "en", "tm"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ru";

export type ApiLocale = "RU" | "EN" | "TK";

export const apiLocaleByLocale: Record<Locale, ApiLocale> = {
    ru: "RU",
    en: "EN",
    tm: "TK",
};

export const htmlLangByLocale: Record<Locale, string> = {
    ru: "ru",
    en: "en",
    tm: "tk",
};

export const metadataLocaleByLocale: Record<Locale, string> = {
    ru: "ru_TM",
    en: "en_US",
    tm: "tk_TM",
};

export const hreflangByLocale: Record<Locale, string> = {
    ru: "ru-RU",
    en: "en-US",
    tm: "tk-TM",
};

export const languageLabels: Record<Locale, string> = {
    ru: "RU",
    en: "EN",
    tm: "TM",
};

export function isLocale(value: string | null | undefined): value is Locale {
    return locales.includes(value as Locale);
}

export function normalizeLocale(value: string | null | undefined): Locale {
    return isLocale(value) ? value : defaultLocale;
}

export function getApiLocale(locale: Locale) {
    return apiLocaleByLocale[locale];
}

export function normalizeApiLocale(
    locale: string | null | undefined,
): ApiLocale {
    const normalizedLocale = (locale || apiLocaleByLocale[defaultLocale])
        .toUpperCase()
        .trim();

    if (normalizedLocale === "TM") {
        return "TK";
    }

    if (normalizedLocale === "EN" || normalizedLocale === "TK") {
        return normalizedLocale;
    }

    return apiLocaleByLocale[defaultLocale];
}

export function getApiLocaleCandidates(locale: string | null | undefined) {
    const requestedLocale = normalizeApiLocale(locale);

    return Array.from(
        new Set([requestedLocale, apiLocaleByLocale[defaultLocale]]),
    );
}

export function stripLocaleFromPathname(pathname: string) {
    const segments = pathname.split("/");
    const firstSegment = segments[1];

    if (!isLocale(firstSegment)) {
        return pathname || "/";
    }

    const nextPathname = `/${segments.slice(2).join("/")}`;
    return nextPathname === "/" ? "/" : nextPathname.replace(/\/+$/, "");
}

export function getLocaleFromPathname(pathname: string): Locale {
    return normalizeLocale(pathname.split("/")[1]);
}

export function withLocalePath(path: string, locale: Locale) {
    const [pathname, query = ""] = path.startsWith("/")
        ? path.split("?")
        : `/${path}`.split("?");
    const cleanPathname = stripLocaleFromPathname(pathname || "/");
    const localizedPath =
        cleanPathname === "/" ? `/${locale}` : `/${locale}${cleanPathname}`;

    return query ? `${localizedPath}?${query}` : localizedPath;
}

export function getLocaleAlternates(path: string) {
    return Object.fromEntries(
        locales.map((locale) => [
            hreflangByLocale[locale],
            withLocalePath(path, locale),
        ]),
    ) as Record<string, string>;
}
