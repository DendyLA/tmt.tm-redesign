import { apiClient } from "../api/api-client";
import type { Project } from "./projects.types";
import { getApiLocaleCandidates } from "@/lib/i18n/config";

export async function getProject(
    company: string,
    lang: string,
): Promise<Project[]> {
    for (const locale of getApiLocaleCandidates(lang)) {
        try {
            const projects = await apiClient<Project[]>(
                `/companies/${company}/projects?page=1&limit=20&locale=${locale}`,
                {
                    next: { revalidate: 300, tags: ["projects"] },
                },
            );

            if (projects.length || locale === "RU") {
                return projects;
            }
        } catch {
            if (locale === "RU") {
                return [];
            }
        }
    }

    return [];
}

export async function getProjectBySlug(
    company: string,
    lang: string,
    project: string,
): Promise<Project[]> {
    for (const locale of getApiLocaleCandidates(lang)) {
        try {
            const projectData = await apiClient<Project[]>(
                `/companies/${company}/projects/${project}?locale=${locale}&deleted=false`,
                {
                    next: { revalidate: 300, tags: ["projects"] },
                },
            );

            if (projectData.length || locale === "RU") {
                return projectData;
            }
        } catch {
            if (locale === "RU") {
                return [];
            }
        }
    }

    return [];
}
