import { NextResponse, type NextRequest } from "next/server";

import {
    defaultLocale,
    isLocale,
    stripLocaleFromPathname,
    withLocalePath,
} from "@/lib/i18n/config";

const PUBLIC_FILE = /\.(.*)$/;

export function proxy(request: NextRequest) {
    const { nextUrl } = request;
    const { pathname } = nextUrl;

    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname === "/favicon.ico" ||
        pathname === "/robots.txt" ||
        pathname === "/sitemap.xml" ||
        pathname === "/manifest.webmanifest" ||
        PUBLIC_FILE.test(pathname)
    ) {
        return NextResponse.next();
    }

    const firstSegment = pathname.split("/")[1];

    if (!isLocale(firstSegment)) {
        const redirectUrl = nextUrl.clone();
        redirectUrl.pathname = withLocalePath(pathname, defaultLocale);
        return NextResponse.redirect(redirectUrl);
    }

    const requestHeaders = new Headers(request.headers);
    const internalPathname = stripLocaleFromPathname(pathname);
    const localizedPathname = pathname.replace(/\/+$/, "") || `/${firstSegment}`;

    requestHeaders.set("x-locale", firstSegment);
    requestHeaders.set(
        "x-pathname",
        `${localizedPathname}${nextUrl.search || ""}`,
    );

    const rewriteUrl = nextUrl.clone();
    rewriteUrl.pathname = internalPathname;

    return NextResponse.rewrite(rewriteUrl, {
        request: {
            headers: requestHeaders,
        },
    });
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
