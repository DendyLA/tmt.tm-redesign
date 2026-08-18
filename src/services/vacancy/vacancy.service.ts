import type { Vacancy, VacancyData } from "./vacancy.types";
import { apiClient } from "../api/api-client";
import { getApiLocaleCandidates } from "@/lib/i18n/config";

type GetVacanciesProps = {
    page: number;
    locale: string;
    tag?: string;
    location?: string;
};

type GetMyVacanciesProps = {
    page: number;
    locale: string;
    accessToken: string;
};

export type VacancyMutationPayload = {
    title: string;
    description: string;
    requirements: string;
    location: string;
    contactEmail: string;
    salary?: string;
    tagIds?: string[];
    translations?: {
        locale: string;
        title: string;
        description: string;
        requirements: string;
        location: string;
    }[];
};

function getAuthHeaders(accessToken: string) {
    return {
        Authorization: `Bearer ${accessToken}`,
    };
}

export async function getVacancies({
    page,
    locale,
    tag,
    location,
}: GetVacanciesProps): Promise<Vacancy | null> {
    for (const candidateLocale of getApiLocaleCandidates(locale)) {
        const params = new URLSearchParams({
            page: String(page),
            limit: "6",
            locale: candidateLocale,
            deleted: "false",
            status: "APPROVED",
        });

        if (tag) {
            params.set("tag", tag);
        }

        if (location) {
            params.set("location", location);
        }

        try {
            const response = await apiClient<Vacancy>(
                `/vacancies?${params.toString()}`,
            );

            if (response?.data?.length || candidateLocale === "RU") {
                return response;
            }
        } catch (error) {
            if (candidateLocale === "RU") {
                console.error(error);
            }
        }
    }

    return null;
}

export async function getVacancyBySlug( locale:string, slug:string): Promise<VacancyData | null>{
	
	for (const candidateLocale of getApiLocaleCandidates(locale)) {
		try{
			const vacancy = await apiClient<VacancyData>(`/vacancies/slug/${slug}?locale=${candidateLocale}`)

            if (vacancy?.translation || candidateLocale === "RU") {
                return vacancy;
            }
		}catch(error){
            if (candidateLocale === "RU") {
			    console.log(error)
            }
		}
    }

    return null;
}

export async function getMyVacancies({
    page,
    locale,
    accessToken,
}: GetMyVacanciesProps): Promise<Vacancy | null> {
    for (const candidateLocale of getApiLocaleCandidates(locale)) {
        const params = new URLSearchParams({
            page: String(page),
            limit: "4",
            locale: candidateLocale,
        });

        try {
            const response = await apiClient<Vacancy>(
                `/vacancies/me?${params.toString()}`,
                {
                    headers: getAuthHeaders(accessToken),
                    cache: "no-store",
                },
            );

            if (response?.data?.length || candidateLocale === "RU") {
                return response;
            }
        } catch (error) {
            if (candidateLocale === "RU") {
                console.error(error);
            }
        }
    }

    return null;
}

export async function getMyVacancyById(
    id: string,
    locale: string,
    accessToken: string,
): Promise<VacancyData | null> {
    for (const candidateLocale of getApiLocaleCandidates(locale)) {
        try {
            const vacancy = await apiClient<VacancyData>(
                `/vacancies/me/${id}?locale=${candidateLocale}`,
                {
                    headers: getAuthHeaders(accessToken),
                    cache: "no-store",
                },
            );

            if (vacancy?.translation || candidateLocale === "RU") {
                return vacancy;
            }
        } catch (error) {
            if (candidateLocale === "RU") {
                console.error(error);
            }
        }
    }

    return null;
}

export async function createMyVacancy(
    payload: VacancyMutationPayload,
    accessToken: string,
) {
    return apiClient<VacancyData>("/vacancies", {
        method: "POST",
        headers: getAuthHeaders(accessToken),
        body: JSON.stringify(payload),
        cache: "no-store",
    });
}

export async function updateMyVacancy(
    id: string,
    payload: VacancyMutationPayload,
    accessToken: string,
) {
    return apiClient<VacancyData>(`/vacancies/${id}`, {
        method: "PATCH",
        headers: getAuthHeaders(accessToken),
        body: JSON.stringify(payload),
        cache: "no-store",
    });
}

export async function deleteMyVacancy(id: string, accessToken: string) {
    return apiClient<{ success: true }>(`/vacancies/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(accessToken),
        cache: "no-store",
    });
}
