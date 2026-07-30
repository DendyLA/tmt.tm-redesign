import type { Vacancy, VacancyData } from "./vacancy.types";
import { apiClient } from "../api/api-client";
import { getApiLocaleCandidates } from "@/lib/i18n/config";

type GetVacanciesProps = {
    page: number;
    locale: string;
    tag?: string;
    location?: string;
};

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
