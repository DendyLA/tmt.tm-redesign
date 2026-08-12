import type { Project } from "./projects.types";

export function getProjectTitle(project: Project | null | undefined) {
    return project?.translation?.title || project?.title || "";
}

export function getProjectDescription(project: Project | null | undefined) {
    return project?.translation?.description || project?.description || "";
}
