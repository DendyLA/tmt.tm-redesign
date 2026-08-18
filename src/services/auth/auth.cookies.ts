import { cookies } from "next/headers";

import {
    ACCESS_TOKEN_COOKIE,
    AUTH_COOKIE_MAX_AGE,
    EMAIL_VERIFIED_COOKIE,
    REFRESH_TOKEN_COOKIE,
} from "./auth.constants";
import type { AuthTokens } from "./auth.types";

export {
    ACCESS_TOKEN_COOKIE,
    AUTH_COOKIE_MAX_AGE,
    EMAIL_VERIFIED_COOKIE,
    REFRESH_TOKEN_COOKIE,
} from "./auth.constants";

function getCookieSecure() {
    return process.env.NODE_ENV === "production";
}

export function getAuthCookieOptions(maxAge: number, httpOnly = true) {
    return {
        httpOnly,
        sameSite: "lax" as const,
        secure: getCookieSecure(),
        path: "/",
        maxAge,
    };
}

export function getEmailVerifiedCookieOptions() {
    return getAuthCookieOptions(AUTH_COOKIE_MAX_AGE.emailVerified, false);
}

export async function saveAuthCookies(tokens: AuthTokens) {
    const cookieStore = await cookies();

    cookieStore.set(
        ACCESS_TOKEN_COOKIE,
        tokens.access_token,
        getAuthCookieOptions(AUTH_COOKIE_MAX_AGE.access),
    );

    cookieStore.set(
        REFRESH_TOKEN_COOKIE,
        tokens.refresh_token,
        getAuthCookieOptions(AUTH_COOKIE_MAX_AGE.refresh),
    );

    cookieStore.set(
        EMAIL_VERIFIED_COOKIE,
        String(tokens.emailVerified),
        getEmailVerifiedCookieOptions(),
    );
}

export async function clearAuthCookies() {
    const cookieStore = await cookies();

    cookieStore.delete(ACCESS_TOKEN_COOKIE);
    cookieStore.delete(REFRESH_TOKEN_COOKIE);
    cookieStore.delete(EMAIL_VERIFIED_COOKIE);
}

export async function getAuthAccessToken() {
    const cookieStore = await cookies();

    return cookieStore.get(ACCESS_TOKEN_COOKIE)?.value ?? null;
}

type AuthTokenPayload = {
    email?: string;
    emailVerified?: boolean;
    role?: string | null;
    exp?: number;
};

export type AuthSession = {
    email: string;
    emailVerified: boolean;
    role: string | null;
};

function parseAuthToken(token: string): AuthTokenPayload | null {
    try {
        const [, payload] = token.split(".");

        if (!payload) {
            return null;
        }

        return JSON.parse(
            Buffer.from(payload, "base64url").toString("utf8"),
        ) as AuthTokenPayload;
    } catch {
        return null;
    }
}

export async function getAuthSession(): Promise<AuthSession | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get(ACCESS_TOKEN_COOKIE)?.value ?? null;

    if (!token) {
        return null;
    }

    const payload = parseAuthToken(token);

    if (!payload?.email) {
        return null;
    }

    if (payload.exp && payload.exp * 1000 < Date.now()) {
        return null;
    }

    return {
        email: payload.email,
        emailVerified:
            cookieStore.get(EMAIL_VERIFIED_COOKIE)?.value === "true" ||
            Boolean(payload.emailVerified),
        role: payload.role ?? null,
    };
}
