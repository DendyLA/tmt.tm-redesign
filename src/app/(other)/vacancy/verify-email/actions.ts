"use server";

import { redirect } from "next/navigation";

import { type Locale, withLocalePath } from "@/lib/i18n/config";
import { getRequestLocale } from "@/lib/i18n/server";
import { getAuthAccessToken } from "@/services/auth/auth.cookies";
import { resendEmailVerification } from "@/services/auth/auth.service";
import type { ResendVerificationErrorCode } from "./verify-email.constants";

function getVerifyEmailRedirectPath(
    locale: Locale,
    params: Record<string, string>,
) {
    return withLocalePath(
        `/vacancy/verify-email?${new URLSearchParams(params).toString()}`,
        locale,
    );
}

function redirectWithError(
    locale: Locale,
    error: ResendVerificationErrorCode,
): never {
    redirect(getVerifyEmailRedirectPath(locale, { error }));
}

export async function resendVerificationEmail() {
    const locale = await getRequestLocale();
    const accessToken = await getAuthAccessToken();
    const result = await resendEmailVerification(accessToken);

    if (!result.ok) {
        redirectWithError(locale, result.code);
    }

    redirect(
        getVerifyEmailRedirectPath(locale, {
            status: result.alreadyVerified ? "verified" : "resent",
        }),
    );
}
