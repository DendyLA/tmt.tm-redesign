import { apiClient } from "../api/api-client";
import type { Company } from "./company.types";
import type { Contacts } from "./company.types";
import { getApiLocaleCandidates } from "@/lib/i18n/config";

export default async function getCompany(
    company: string,
    lang: string,
): Promise<Company | null> {
    for (const locale of getApiLocaleCandidates(lang)) {
        try {
            const response = await apiClient<Company>(
                `/companies/${company}?locale=${locale}`,
            );

            if (response || locale === "RU") {
                return response;
            }
        } catch {
            if (locale === "RU") {
                return null;
            }
        }
    }

    return null;
}

export async function getCompanyContacts(
    company: string,
): Promise<Contacts | null> {
    try {
        return await apiClient(`/companies/${company}/contact`, {
            next: { revalidate: 300, tags: ["company-contacts"] },
        });
    } catch (error) {
        console.log(error);
        return null;
    }
}
