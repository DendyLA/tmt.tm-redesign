import { apiClient } from "../api/api-client";
import type { Tenders, TendersData } from "./tenders.types";
import { getApiLocaleCandidates } from "@/lib/i18n/config";


type getTendersProps = {
	page: number;
	locale: string;
}

type getTenderBySlugProps = {
	slug: string;
	locale: string;
}

export async function getTenders({ page, locale }: getTendersProps): Promise<Tenders | null> {
	for (const candidateLocale of getApiLocaleCandidates(locale)) {
		try{
			const response = await apiClient<Tenders>(`/tenders/public?page=${page}&limit=5&locale=${candidateLocale}&deleted=false`)

            if (response?.data?.length || candidateLocale === "RU") {
                return response;
            }
		}catch(error){
            if (candidateLocale === "RU") {
			    console.log(error)
            }
		}
    }

    return null;
}


export async function getTenderBySlug({ slug, locale }: getTenderBySlugProps): Promise<TendersData | null> {

	for (const candidateLocale of getApiLocaleCandidates(locale)) {
		try{
			const tender = await apiClient<TendersData>(`/tenders/public/slug/${slug}?locale=${candidateLocale}`)

            if (tender?.translation || candidateLocale === "RU") {
                return tender;
            }
		}catch(error){
            if (candidateLocale === "RU") {
			    console.log(error)
            }
		}
    }

    return null;
}
