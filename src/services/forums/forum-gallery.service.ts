import { getProjectBySlug } from "@/services/projects/projects.service";
import { forumGalleryProjectSlug } from "./forums.constants";

export type ForumGalleryPhoto = {
    id: string;
    url: string;
    previewUrl?: string | null;
    altText?: string | null;
};

export async function getForumGallery(): Promise<ForumGalleryPhoto[]> {
    const project = await getProjectBySlug(
        "tmt-consulting-group",
        "RU",
        forumGalleryProjectSlug,
    );

    return (project?.gallery || [])
        .filter((photo) => photo.url.startsWith("/uploads/media/"))
        .map((photo) => ({
            id: photo.id,
            url: photo.url,
            previewUrl: photo.previewUrl,
            altText: photo.altText,
        }));
}
