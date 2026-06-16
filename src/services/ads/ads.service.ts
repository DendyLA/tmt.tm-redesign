import { apiClient } from "../api/api-client";
import { Ad } from "./ads.types";

type GetAdsProps = {
	company: string;
	location: string;
	lang: string;
}

export async function getAds({company, location, lang}: GetAdsProps):Promise<Ad[]>{
	try {
        return await apiClient<Ad[]>(
            `/companies/${company}/ads?locationKey=${location}${lang ? `&locale=${lang}` : ""}`,
        );
    } catch (error) {
        return [];
    }

}