export const registerErrorCodes = [
    "fields",
    "terms",
    "password",
    "exists",
    "failed",
    "network",
] as const;

export type RegisterErrorCode = (typeof registerErrorCodes)[number];

export function isRegisterErrorCode(
    value: string | undefined,
): value is RegisterErrorCode {
    return registerErrorCodes.includes(value as RegisterErrorCode);
}
