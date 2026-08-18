"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import {
    getApiLocale,
    type Locale,
    withLocalePath,
} from "@/lib/i18n/config";
import { getRequestLocale } from "@/lib/i18n/server";
import { getAuthAccessToken } from "@/services/auth/auth.cookies";
import {
    createMyVacancy,
    deleteMyVacancy,
    updateMyVacancy,
    type VacancyMutationPayload,
} from "@/services/vacancy/vacancy.service";

type VacancyFormError = "fields" | "email" | "failed";

function getProfilePath(locale: Locale, params: Record<string, string> = {}) {
    const query = new URLSearchParams(params).toString();
    return withLocalePath(query ? `/profile?${query}` : "/profile", locale);
}

function getNewVacancyPath(
    locale: Locale,
    params: Record<string, string> = {},
) {
    const query = new URLSearchParams(params).toString();
    return withLocalePath(
        query ? `/profile/vacancies/new?${query}` : "/profile/vacancies/new",
        locale,
    );
}

function getEditVacancyPath(
    locale: Locale,
    id: string,
    params: Record<string, string> = {},
) {
    const query = new URLSearchParams(params).toString();
    return withLocalePath(
        query
            ? `/profile/vacancies/${id}/edit?${query}`
            : `/profile/vacancies/${id}/edit`,
        locale,
    );
}

function redirectToLogin(locale: Locale): never {
    redirect(withLocalePath("/vacancy/login", locale));
}

function redirectNewWithError(locale: Locale, error: VacancyFormError): never {
    redirect(getNewVacancyPath(locale, { error }));
}

function redirectEditWithError(
    locale: Locale,
    id: string,
    error: VacancyFormError,
): never {
    redirect(getEditVacancyPath(locale, id, { error }));
}

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getStringField(formData: FormData, name: string) {
    return String(formData.get(name) ?? "").trim();
}

function parseVacancyPayload(
    formData: FormData,
    locale: Locale,
): VacancyMutationPayload | VacancyFormError {
    const title = getStringField(formData, "title");
    const description = getStringField(formData, "description");
    const requirements = getStringField(formData, "requirements");
    const location = getStringField(formData, "location");
    const contactEmail = getStringField(formData, "contactEmail").toLowerCase();
    const salary = getStringField(formData, "salary");
    const tagId = getStringField(formData, "tagId");

    if (!title || !description || !requirements || !location || !contactEmail) {
        return "fields";
    }

    if (!isValidEmail(contactEmail)) {
        return "email";
    }

    return {
        title,
        description,
        requirements,
        location,
        contactEmail,
        ...(salary ? { salary } : {}),
        ...(tagId ? { tagIds: [tagId] } : {}),
        translations: [
            {
                locale: getApiLocale(locale),
                title,
                description,
                requirements,
                location,
            },
        ],
    };
}

export async function createProfileVacancy(formData: FormData) {
    const locale = await getRequestLocale();
    const accessToken = await getAuthAccessToken();

    if (!accessToken) {
        redirectToLogin(locale);
    }

    const payload = parseVacancyPayload(formData, locale);

    if (typeof payload === "string") {
        redirectNewWithError(locale, payload);
    }

    try {
        await createMyVacancy(payload, accessToken);
    } catch {
        redirectNewWithError(locale, "failed");
    }

    revalidatePath(getProfilePath(locale));
    redirect(getProfilePath(locale, { status: "vacancy-created" }));
}

export async function updateProfileVacancy(id: string, formData: FormData) {
    const locale = await getRequestLocale();
    const accessToken = await getAuthAccessToken();

    if (!accessToken) {
        redirectToLogin(locale);
    }

    const payload = parseVacancyPayload(formData, locale);

    if (typeof payload === "string") {
        redirectEditWithError(locale, id, payload);
    }

    try {
        await updateMyVacancy(id, payload, accessToken);
    } catch {
        redirectEditWithError(locale, id, "failed");
    }

    revalidatePath(getProfilePath(locale));
    redirect(getProfilePath(locale, { status: "vacancy-updated" }));
}

export async function deleteProfileVacancy(formData: FormData) {
    const locale = await getRequestLocale();
    const accessToken = await getAuthAccessToken();
    const id = getStringField(formData, "id");

    if (!accessToken) {
        redirectToLogin(locale);
    }

    if (!id) {
        redirect(getProfilePath(locale, { error: "vacancy-delete" }));
    }

    try {
        await deleteMyVacancy(id, accessToken);
    } catch {
        redirect(getProfilePath(locale, { error: "vacancy-delete" }));
    }

    revalidatePath(getProfilePath(locale));
    redirect(getProfilePath(locale, { status: "vacancy-deleted" }));
}
