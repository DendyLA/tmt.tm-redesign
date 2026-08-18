export const ACCESS_TOKEN_COOKIE = "tmt.auth.accessToken";
export const REFRESH_TOKEN_COOKIE = "tmt.auth.refreshToken";
export const EMAIL_VERIFIED_COOKIE = "tmt.auth.emailVerified";

export const AUTH_COOKIE_MAX_AGE = {
    access: 60 * 60,
    refresh: 60 * 60 * 24 * 30,
    emailVerified: 60 * 60 * 24 * 30,
} as const;
