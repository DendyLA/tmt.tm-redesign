import { headers } from "next/headers";

import {
    defaultLocale,
    getApiLocale,
    normalizeLocale,
    type Locale,
} from "./config";

export async function getRequestLocale(): Promise<Locale> {
    try {
        const requestHeaders = await headers();
        return normalizeLocale(requestHeaders.get("x-locale"));
    } catch {
        return defaultLocale;
    }
}

export async function getRequestApiLocale() {
    return getApiLocale(await getRequestLocale());
}

export async function getRequestPathname() {
    try {
        const requestHeaders = await headers();
        return requestHeaders.get("x-pathname") || "/";
    } catch {
        return "/";
    }
}
