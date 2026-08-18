"use server";

import { redirect } from "next/navigation";

import { type Locale, withLocalePath } from "@/lib/i18n/config";
import { getRequestLocale } from "@/lib/i18n/server";
import { saveAuthCookies } from "@/services/auth/auth.cookies";
import { registerDefaultUser } from "@/services/auth/auth.service";
import type { RegisterErrorCode } from "./register.constants";

function createNameFromEmail(email: string) {
    const localPart = email.split("@")[0]?.replace(/[._-]+/g, " ").trim();

    return localPart || email;
}

function getRegisterRedirectPath(
    locale: Locale,
    params: Record<string, string>,
) {
    return withLocalePath(
        `/vacancy/signup?${new URLSearchParams(params).toString()}`,
        locale,
    );
}

function redirectWithError(locale: Locale, error: RegisterErrorCode): never {
    redirect(getRegisterRedirectPath(locale, { error }));
}

function getProfileRedirectPath(locale: Locale) {
    return withLocalePath("/profile?status=registered", locale);
}

export async function registerVacancyAccount(formData: FormData) {
    const locale = await getRequestLocale();
    const email = String(formData.get("email") ?? "")
        .trim()
        .toLowerCase();
    const password = String(formData.get("password") ?? "");
    const acceptedTerms = formData.get("terms") === "on";

    if (!email || !password) {
        redirectWithError(locale, "fields");
    }

    if (password.length < 6) {
        redirectWithError(locale, "password");
    }

    if (!acceptedTerms) {
        redirectWithError(locale, "terms");
    }

    const result = await registerDefaultUser({
        name: createNameFromEmail(email),
        email,
        password,
    });

    if (!result.ok) {
        redirectWithError(locale, result.code);
    }

    await saveAuthCookies(result.tokens);

    redirect(getProfileRedirectPath(locale));
}
