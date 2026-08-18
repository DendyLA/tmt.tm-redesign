import { NextResponse, type NextRequest } from "next/server";

import { normalizeLocale, withLocalePath } from "@/lib/i18n/config";
import { absoluteUrl } from "@/lib/seo/site";
import {
    EMAIL_VERIFIED_COOKIE,
    getEmailVerifiedCookieOptions,
} from "@/services/auth/auth.cookies";
import { verifyEmail } from "@/services/auth/auth.service";

function createVerifyEmailRedirect(path: string) {
    return new URL(absoluteUrl(path));
}

export async function GET(request: NextRequest) {
    const locale = normalizeLocale(request.headers.get("x-locale"));
    const token = request.nextUrl.searchParams.get("token") ?? "";

    if (!token) {
        return NextResponse.redirect(
            createVerifyEmailRedirect(
                withLocalePath("/vacancy/verify-email?status=failed", locale),
            ),
        );
    }

    const result = await verifyEmail({ token });
    const response = NextResponse.redirect(
        createVerifyEmailRedirect(
            result.ok
                ? withLocalePath("/profile?status=email-verified", locale)
                : withLocalePath("/vacancy/verify-email?status=failed", locale),
        ),
    );

    if (result.ok) {
        response.cookies.set(
            EMAIL_VERIFIED_COOKIE,
            "true",
            getEmailVerifiedCookieOptions(),
        );
    }

    return response;
}
