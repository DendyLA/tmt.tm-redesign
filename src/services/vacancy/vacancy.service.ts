import type { Vacancy } from "./vacancy.types";
import { apiClient } from "../api/api-client";

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
    try {
        const params = new URLSearchParams({
            page: String(page),
            limit: "6",
            locale,
            deleted: "false",
            status: "APPROVED",
        });

        if (tag) {
            params.set("tag", tag);
        }

        if (location) {
            params.set("location", location);
        }

        return await apiClient(`/vacancies?${params.toString()}`);
    } catch (error) {
        console.error(error);
        return null;
    }
}