import { apiClient } from "../api/api-client";
import { Ad } from "./ads.types";
import { getApiLocaleCandidates } from "@/lib/i18n/config";

type GetAdsProps = {
    company: string;
    location: string;
    lang: string;
};

export async function getAds({
    company,
    location,
    lang,
}: GetAdsProps): Promise<Ad[]> {
    for (const locale of getApiLocaleCandidates(lang)) {
        try {
            const response = await apiClient<Ad[]>(
                `/companies/${company}/ads?locationKey=${location}&locale=${locale}`,
            );

            if (response.length || locale === "RU") {
                return response;
            }
        } catch {
            if (locale === "RU") {
                return [];
            }
        }
    }

    return [];
}
