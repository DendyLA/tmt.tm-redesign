"use server";

import { redirect } from "next/navigation";

import { type Locale, withLocalePath } from "@/lib/i18n/config";
import { getRequestLocale } from "@/lib/i18n/server";
import {
    confirmPasswordReset,
    requestPasswordResetEmail,
} from "@/services/auth/auth.service";
import type { ResetErrorCode } from "./reset.constants";

function getResetRedirectPath(locale: Locale, params: Record<string, string>) {
    return withLocalePath(
        `/vacancy/reset?${new URLSearchParams(params).toString()}`,
        locale,
    );
}

function redirectWithError(
    locale: Locale,
    error: ResetErrorCode,
    params: Record<string, string> = {},
): never {
    redirect(getResetRedirectPath(locale, { ...params, error }));
}

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function requestPasswordReset(formData: FormData) {
    const locale = await getRequestLocale();
    const email = String(formData.get("email") ?? "")
        .trim()
        .toLowerCase();

    if (!isValidEmail(email)) {
        redirectWithError(locale, "email");
    }

    const result = await requestPasswordResetEmail({ email });

    if (!result.ok) {
        redirectWithError(locale, result.code);
    }

    redirect(getResetRedirectPath(locale, { status: "sent" }));
}

export async function createResetPassword(formData: FormData) {
    const locale = await getRequestLocale();
    const token = String(formData.get("token") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    const confirmPassword = String(formData.get("confirmPassword") ?? "");

    if (!token) {
        redirectWithError(locale, "token");
    }

    if (password.length < 6) {
        redirectWithError(locale, "password", { token });
    }

    if (password !== confirmPassword) {
        redirectWithError(locale, "match", { token });
    }

    const result = await confirmPasswordReset({ token, password });

    if (!result.ok) {
        redirectWithError(locale, result.code, { token });
    }

    redirect(
        getResetRedirectPath(locale, {
            status: "password-created",
        }),
    );
}
