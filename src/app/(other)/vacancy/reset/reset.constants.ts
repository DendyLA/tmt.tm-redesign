export const resetErrorCodes = [
    "email",
    "token",
    "password",
    "match",
    "failed",
] as const;

export type ResetErrorCode = (typeof resetErrorCodes)[number];

export function isResetErrorCode(
    value: string | undefined,
): value is ResetErrorCode {
    return resetErrorCodes.includes(value as ResetErrorCode);
}
