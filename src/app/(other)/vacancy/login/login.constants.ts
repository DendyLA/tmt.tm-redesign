export const loginErrorCodes = [
    "fields",
    "password",
    "credentials",
    "banned",
    "failed",
    "network",
] as const;

export type LoginErrorCode = (typeof loginErrorCodes)[number];

export function isLoginErrorCode(
    value: string | undefined,
): value is LoginErrorCode {
    return loginErrorCodes.includes(value as LoginErrorCode);
}
