export const verifyEmailStatuses = [
    "sent",
    "resent",
    "verified",
    "failed",
] as const;

export type VerifyEmailStatus = (typeof verifyEmailStatuses)[number];

export const resendVerificationErrorCodes = [
    "unauthorized",
    "failed",
    "network",
] as const;

export type ResendVerificationErrorCode =
    (typeof resendVerificationErrorCodes)[number];

export function isVerifyEmailStatus(
    value: string | undefined,
): value is VerifyEmailStatus {
    return verifyEmailStatuses.includes(value as VerifyEmailStatus);
}

export function isResendVerificationErrorCode(
    value: string | undefined,
): value is ResendVerificationErrorCode {
    return resendVerificationErrorCodes.includes(
        value as ResendVerificationErrorCode,
    );
}
