import { apiClient } from "../api/api-client";
import type { Project } from "./projects.types";

export async function getProject(
    company: string,
    lang: string,
): Promise<Project[]> {
    try {
        return await apiClient(
            `/companies/${company}/projects?page=1&limit=20&locale=${lang.toUpperCase()}`,
            {
                next: { revalidate: 300, tags: ["projects"] },
            },
        );
    } catch {
        return [];
    }
}

export async function getProjectBySlug(
    company: string,
    lang: string,
    project: string,
): Promise<Project[]> {
    try {
        return await apiClient(
            `/companies/${company}/projects/${project}?locale=${lang.toUpperCase()}&deleted=false`,
            {
                next: { revalidate: 300, tags: ["projects"] },
            },
        );
    } catch {
        return [];
    }
}
