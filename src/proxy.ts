import { NextResponse, type NextRequest } from "next/server";

import {
    defaultLocale,
    isLocale,
    stripLocaleFromPathname,
    withLocalePath,
} from "@/lib/i18n/config";
import {
    ACCESS_TOKEN_COOKIE,
    AUTH_COOKIE_MAX_AGE,
    EMAIL_VERIFIED_COOKIE,
    REFRESH_TOKEN_COOKIE,
} from "@/services/auth/auth.constants";

const PUBLIC_FILE = /\.(.*)$/;
const ACCESS_TOKEN_REFRESH_WINDOW_MS = 30 * 1000;

type AuthTokens = {
    access_token: string;
    refresh_token: string;
    emailVerified: boolean;
};

type AuthTokenPayload = {
    exp?: number;
};

function getCookieSecure() {
    return process.env.NODE_ENV === "production";
}

function decodeJwtPayload(token: string): AuthTokenPayload | null {
    try {
        const [, payload] = token.split(".");

        if (!payload) {
            return null;
        }

        const normalizedPayload = payload.replace(/-/g, "+").replace(/_/g, "/");
        const paddedPayload = normalizedPayload.padEnd(
            Math.ceil(normalizedPayload.length / 4) * 4,
            "=",
        );

        return JSON.parse(atob(paddedPayload)) as AuthTokenPayload;
    } catch {
        return null;
    }
}

function shouldRefreshAccessToken(accessToken: string | undefined) {
    if (!accessToken) {
        return true;
    }

    const payload = decodeJwtPayload(accessToken);

    if (!payload?.exp) {
        return true;
    }

    return payload.exp * 1000 <= Date.now() + ACCESS_TOKEN_REFRESH_WINDOW_MS;
}

function isPrefetchRequest(request: NextRequest) {
    return (
        request.headers.has("next-router-prefetch") ||
        request.headers.get("purpose") === "prefetch"
    );
}

async function getRefreshedAuthTokens(
    request: NextRequest,
): Promise<AuthTokens | null> {
    if (isPrefetchRequest(request)) {
        return null;
    }

    const refreshToken = request.cookies.get(REFRESH_TOKEN_COOKIE)?.value;

    if (
        !refreshToken ||
        !shouldRefreshAccessToken(
            request.cookies.get(ACCESS_TOKEN_COOKIE)?.value,
        )
    ) {
        return null;
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
        return null;
    }

    try {
        const response = await fetch(`${apiUrl}/auth/refresh`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ refreshToken }),
            cache: "no-store",
        });

        if (!response.ok) {
            return null;
        }

        return (await response.json()) as AuthTokens;
    } catch {
        return null;
    }
}

function getCookieHeaderWithAuthTokens(request: NextRequest, tokens: AuthTokens) {
    const authCookieNames = new Set([
        ACCESS_TOKEN_COOKIE,
        REFRESH_TOKEN_COOKIE,
        EMAIL_VERIFIED_COOKIE,
    ]);
    const cookies = request.cookies
        .getAll()
        .filter((cookie) => !authCookieNames.has(cookie.name))
        .map((cookie) => `${cookie.name}=${cookie.value}`);

    cookies.push(`${ACCESS_TOKEN_COOKIE}=${tokens.access_token}`);
    cookies.push(`${REFRESH_TOKEN_COOKIE}=${tokens.refresh_token}`);
    cookies.push(`${EMAIL_VERIFIED_COOKIE}=${String(tokens.emailVerified)}`);

    return cookies.join("; ");
}

function applyAuthCookies(response: NextResponse, tokens: AuthTokens | null) {
    if (!tokens) {
        return response;
    }

    response.cookies.set(ACCESS_TOKEN_COOKIE, tokens.access_token, {
        httpOnly: true,
        sameSite: "lax",
        secure: getCookieSecure(),
        path: "/",
        maxAge: AUTH_COOKIE_MAX_AGE.access,
    });
    response.cookies.set(REFRESH_TOKEN_COOKIE, tokens.refresh_token, {
        httpOnly: true,
        sameSite: "lax",
        secure: getCookieSecure(),
        path: "/",
        maxAge: AUTH_COOKIE_MAX_AGE.refresh,
    });
    response.cookies.set(EMAIL_VERIFIED_COOKIE, String(tokens.emailVerified), {
        httpOnly: false,
        sameSite: "lax",
        secure: getCookieSecure(),
        path: "/",
        maxAge: AUTH_COOKIE_MAX_AGE.emailVerified,
    });

    return response;
}

export async function proxy(request: NextRequest) {
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
    const refreshedAuthTokens = await getRefreshedAuthTokens(request);

    if (!isLocale(firstSegment)) {
        const redirectUrl = nextUrl.clone();
        redirectUrl.pathname = withLocalePath(pathname, defaultLocale);
        return applyAuthCookies(
            NextResponse.redirect(redirectUrl),
            refreshedAuthTokens,
        );
    }

    const requestHeaders = new Headers(request.headers);
    const internalPathname = stripLocaleFromPathname(pathname);
    const localizedPathname = pathname.replace(/\/+$/, "") || `/${firstSegment}`;

    requestHeaders.set("x-locale", firstSegment);
    requestHeaders.set(
        "x-pathname",
        `${localizedPathname}${nextUrl.search || ""}`,
    );

    if (refreshedAuthTokens) {
        requestHeaders.set(
            "cookie",
            getCookieHeaderWithAuthTokens(request, refreshedAuthTokens),
        );
    }

    const rewriteUrl = nextUrl.clone();
    rewriteUrl.pathname = internalPathname;

    return applyAuthCookies(
        NextResponse.rewrite(rewriteUrl, {
            request: {
                headers: requestHeaders,
            },
        }),
        refreshedAuthTokens,
    );
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
