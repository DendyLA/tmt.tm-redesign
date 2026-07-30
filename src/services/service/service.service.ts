import { apiClient } from "../api/api-client";
import type { ServiceList } from "./service.types";
import { getApiLocaleCandidates } from "@/lib/i18n/config";

type getServicesProps = {
    company: string;
    lang: string;
};

export default async function getServices({
    company,
    lang,
}: getServicesProps): Promise<ServiceList | null> {
    for (const locale of getApiLocaleCandidates(lang)) {
        try {
            const response = await apiClient<ServiceList>(
                `/companies/${company}/service-categories?locale=${locale}`,
                {
                    next: { revalidate: 300, tags: ["services"] },
                },
            );

            if (response?.length || locale === "RU") {
                return response;
            }
        } catch (error) {
            if (locale === "RU") {
                console.log(error);
            }
        }
    }

    return null;
}
