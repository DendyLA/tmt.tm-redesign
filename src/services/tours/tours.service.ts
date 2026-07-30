import { apiClient } from "../api/api-client";
import type { Tours } from "./tours.types";
import { getApiLocaleCandidates } from "@/lib/i18n/config";

type GetToursProps = {
    page?: number;
    limit?: number;
    lang?: string;
};

export default async function getTours({
    page = 1,
    limit = 10,
    lang = "RU",
}: GetToursProps): Promise<Tours | null> {
    for (const locale of getApiLocaleCandidates(lang)) {
        const params = new URLSearchParams({
            page: String(page),
            limit: String(limit),
            locale,
        });

        try {
            const response = await apiClient<Tours>(
                `/tours/public?${params.toString()}&show=true`,
                {
                    next: { revalidate: 300, tags: ["tours"] },
                },
            );

            if (response?.data?.length || locale === "RU") {
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
