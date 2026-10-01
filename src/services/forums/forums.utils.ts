import type { Forum } from "./forums.types";
import { mediaUrl } from "@/constants/constants";
import { withLocalePath, type Locale } from "@/lib/i18n/config";

export function getForumSignupHref(slug: string, locale: Locale) {
    return withLocalePath(`/forums/signup?forum=${encodeURIComponent(slug)}`, locale);
}

export function getForumTitle(forum: Forum | null | undefined) {
    return forum?.translation?.title ?? forum?.title ?? "";
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
