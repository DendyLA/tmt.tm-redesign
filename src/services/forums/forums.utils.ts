import type { Forum } from "./forums.types";
import { mediaUrl } from "@/constants/constants";
import { withLocalePath, type Locale } from "@/lib/i18n/config";

export function getForumSignupHref(slug: string, locale: Locale) {
    return withLocalePath(`/forums/signup?forum=${encodeURIComponent(slug)}`, locale);
}

export function hasForumEnded(endDate: string | null | undefined, now = new Date()) {
    if (!endDate) return false;

    const endDay = endDate.slice(0, 10);
    return !Number.isNaN(Date.parse(endDay)) && now.toISOString().slice(0, 10) > endDay;
}

export function getForumTitle(forum: Forum | null | undefined) {
    const title = forum?.translation?.title ?? forum?.title ?? "";
    return title.replace(/^Turkmenistan[–-]China Business Forum(?=,|$)/, "Turkmen-Chinese Business Forum");
}

export function getForumDescription(forum: Forum | null | undefined) {
    return forum?.translation?.description ?? forum?.description ?? "";
}

export function getForumVenue(forum: Forum | null | undefined) {
    return forum?.translation?.venue ?? forum?.venue ?? "";
}

export function getForumMediaUrl(path: string | null | undefined) {
    if (!path) return null;
    if (/^https?:\/\//i.test(path)) return path;
    return `${mediaUrl}${path.startsWith("/") ? "" : "/"}${path}`;
}
