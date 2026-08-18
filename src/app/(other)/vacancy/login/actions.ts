"use server";

import { redirect } from "next/navigation";

import { type Locale, withLocalePath } from "@/lib/i18n/config";
import { getRequestLocale } from "@/lib/i18n/server";
import { saveAuthCookies } from "@/services/auth/auth.cookies";
import { loginDefaultUser } from "@/services/auth/auth.service";
import type { LoginErrorCode } from "./login.constants";

function getLoginRedirectPath(locale: Locale, params: Record<string, string>) {
    return withLocalePath(
        `/vacancy/login?${new URLSearchParams(params).toString()}`,
        locale,
    );
}

function getProfileRedirectPath(locale: Locale) {
    return withLocalePath("/profile", locale);
}

function redirectWithError(locale: Locale, error: LoginErrorCode): never {
    redirect(getLoginRedirectPath(locale, { error }));
}

export async function loginVacancyAccount(formData: FormData) {
    const locale = await getRequestLocale();
    const email = String(formData.get("email") ?? "")
        .trim()
        .toLowerCase();
    const password = String(formData.get("password") ?? "");

    if (!email || !password) {
        redirectWithError(locale, "fields");
    }

    if (password.length < 6) {
        redirectWithError(locale, "password");
    }

    const result = await loginDefaultUser({
        email,
        password,
    });

    if (!result.ok) {
        redirectWithError(locale, result.code);
    }

    await saveAuthCookies(result.tokens);

    redirect(getProfileRedirectPath(locale));
}
