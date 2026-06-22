import { apiClient } from "../api/api-client";
import type { Company } from "./company.types";

export default async function getCompany(
    company: string,
    lang: string,
): Promise<Company> {
    try {
        return await apiClient(
            `/companies/${company}?locale=${lang.toUpperCase()}`,
        );
    } catch {
        return {};
    }
}
