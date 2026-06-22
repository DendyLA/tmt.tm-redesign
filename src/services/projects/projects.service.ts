import { apiClient } from "../api/api-client";
import type { Project } from "./projects.types";

export default async function getProject(
    company: string,
    lang: string,
): Promise<Project[]> {
    try {
        return await apiClient(
            `/companies/${company}/projects?page=1&limit=20&locale=${lang.toUpperCase()}`,
        );
    } catch {
        return [];
    }
}
