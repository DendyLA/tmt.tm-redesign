import { API_URL } from "../api/api.config";
import type {
    ConfirmPasswordResetPayload,
    ConfirmPasswordResetResult,
    LoginDefaultUserPayload,
    LoginDefaultUserResult,
    LoginUserPayload,
    LoginUserResult,
    RefreshAuthTokensResult,
    RequestPasswordResetPayload,
    RequestPasswordResetResult,
    RegisterDefaultUserPayload,
    RegisterDefaultUserResult,
    RegisterUserPayload,
    RegisterUserResult,
    ResendEmailVerificationResult,
    VerifyEmailPayload,
    VerifyEmailResult,
} from "./auth.types";

function isEmailConflict(status: number, message: string) {
    return status === 409 || message.toLowerCase().includes("email");
}

export async function registerUser(
    payload: RegisterUserPayload,
): Promise<RegisterUserResult> {
    return registerDefaultUser(payload);
}

export async function registerDefaultUser(
    payload: RegisterDefaultUserPayload,
): Promise<RegisterDefaultUserResult> {
    try {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
            cache: "no-store",
        });

        if (!response.ok) {
            const message = await response.text();

            return {
                ok: false,
                code: isEmailConflict(response.status, message)
                    ? "exists"
                    : "failed",
                status: response.status,
                message,
            };
        }

        return {
            ok: true,
            tokens: await response.json(),
        };
    } catch {
        return {
            ok: false,
            code: "network",
        };
    }
}

export async function verifyEmail(
    payload: VerifyEmailPayload,
): Promise<VerifyEmailResult> {
    const token = payload.token.trim();

    if (!token) {
        return {
            ok: false,
            code: "token",
        };
    }

    try {
        const response = await fetch(`${API_URL}/auth/verify-email`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
            cache: "no-store",
        });

        if (!response.ok) {
            const message = await response.text();

            return {
                ok: false,
                code: response.status === 400 ? "token" : "failed",
                status: response.status,
                message,
            };
        }

        return { ok: true };
    } catch {
        return {
            ok: false,
            code: "network",
        };
    }
}

export async function resendEmailVerification(
    accessToken: string | null,
): Promise<ResendEmailVerificationResult> {
    if (!accessToken) {
        return {
            ok: false,
            code: "unauthorized",
        };
    }

    try {
        const response = await fetch(`${API_URL}/auth/resend-verification`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            cache: "no-store",
        });

        if (!response.ok) {
            const message = await response.text();

            return {
                ok: false,
                code: response.status === 401 ? "unauthorized" : "failed",
                status: response.status,
                message,
            };
        }

        const data = (await response.json()) as {
            alreadyVerified?: boolean;
        };

        return {
            ok: true,
            alreadyVerified: data.alreadyVerified,
        };
    } catch {
        return {
            ok: false,
            code: "network",
        };
    }
}

function getLoginErrorCode(status: number, message: string) {
    const normalizedMessage = message.toLowerCase();

    if (normalizedMessage.includes("banned")) {
        return "banned";
    }

    if (status === 401 || normalizedMessage.includes("credentials")) {
        return "credentials";
    }

    return "failed";
}

export async function loginUser(
    payload: LoginUserPayload,
): Promise<LoginUserResult> {
    return loginDefaultUser(payload);
}

export async function loginDefaultUser(
    payload: LoginDefaultUserPayload,
): Promise<LoginDefaultUserResult> {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
            cache: "no-store",
        });

        if (!response.ok) {
            const message = await response.text();

            return {
                ok: false,
                code: getLoginErrorCode(response.status, message),
                status: response.status,
                message,
            };
        }

        return {
            ok: true,
            tokens: await response.json(),
        };
    } catch {
        return {
            ok: false,
            code: "network",
        };
    }
}

export async function refreshAuthTokens(
    refreshToken: string | null,
): Promise<RefreshAuthTokensResult> {
    if (!refreshToken) {
        return {
            ok: false,
            code: "missing",
        };
    }

    try {
        const response = await fetch(`${API_URL}/auth/refresh`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ refreshToken }),
            cache: "no-store",
        });

        if (!response.ok) {
            return {
                ok: false,
                code: "failed",
                status: response.status,
                message: await response.text(),
            };
        }

        return {
            ok: true,
            tokens: await response.json(),
        };
    } catch {
        return {
            ok: false,
            code: "network",
        };
    }
}

export async function requestPasswordResetEmail(
    payload: RequestPasswordResetPayload,
): Promise<RequestPasswordResetResult> {
    try {
        const response = await fetch(`${API_URL}/auth/password-reset/request`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
            cache: "no-store",
        });

        if (!response.ok) {
            const message = await response.text();

            return {
                ok: false,
                code: response.status === 400 ? "email" : "failed",
                status: response.status,
                message,
            };
        }

        return { ok: true };
    } catch {
        return {
            ok: false,
            code: "failed",
        };
    }
}

export async function confirmPasswordReset(
    payload: ConfirmPasswordResetPayload,
): Promise<ConfirmPasswordResetResult> {
    try {
        const response = await fetch(`${API_URL}/auth/password-reset/confirm`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
            cache: "no-store",
        });

        if (!response.ok) {
            const message = await response.text();

            return {
                ok: false,
                code: response.status === 400 ? "token" : "failed",
                status: response.status,
                message,
            };
        }

        return { ok: true };
    } catch {
        return {
            ok: false,
            code: "failed",
        };
    }
}
