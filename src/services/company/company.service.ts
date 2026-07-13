import { apiClient } from "../api/api-client";
import type { Company } from "./company.types";
import type { Contacts } from "./company.types";

export default async function getCompany(
    company: string,
    lang: string,
): Promise<Company | null> {
    try {
        return await apiClient(
            `/companies/${company}?locale=${lang.toUpperCase()}`,
        );
    } catch {
        return null;
    }
}

export async function getCompanyContacts(
    company: string,
): Promise<Contacts | null> {
    try {
        return await apiClient(`/companies/${company}/contact`, {cache: "no-store",});
    } catch (error) {
        console.log(error);
        return null;
    }
}
