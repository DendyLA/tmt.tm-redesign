"use server";

import { redirect } from "next/navigation";

import { withLocalePath } from "@/lib/i18n/config";
import { getRequestLocale } from "@/lib/i18n/server";
import { clearAuthCookies } from "./auth.cookies";

export async function logoutAuthAccount() {
    const locale = await getRequestLocale();

    await clearAuthCookies();

    redirect(withLocalePath("/vacancy/login", locale));
}
