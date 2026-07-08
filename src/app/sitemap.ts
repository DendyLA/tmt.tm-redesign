import type { MetadataRoute } from "next";

import { getPosts } from "@/services/posts/posts.service";
import {
    absoluteMediaUrl,
    absoluteUrl,
    seoRoutes,
} from "@/lib/seo/site";
import type { Post } from "@/services/posts/posts.types";
import { getProject } from "@/services/projects/projects.service";
import type { Project } from "@/services/projects/projects.types";

const NEWS_SITEMAP_PAGE_SIZE = 100;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const lastModified = new Date();
    const staticRoutes = seoRoutes.map((route) => ({
        url: absoluteUrl(route.path),
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));

    try {
        const [newsRoutes, projectRoutes] = await Promise.all([
            getNewsRoutesForSitemap(lastModified),
            getProjectRoutesForSitemap(lastModified),
        ]);

        return [...staticRoutes, ...newsRoutes, ...projectRoutes];
    } catch {
        return staticRoutes;
    }
}

async function getNewsRoutesForSitemap(
    fallbackLastModified: Date,
): Promise<MetadataRoute.Sitemap> {
    const news = await getAllNewsForSitemap();

    return news
        .filter((post) => post.slug && post.status === "PUBLISHED")
        .map((post) => {
            const image = absoluteMediaUrl(
                post.translation?.coverMedia?.url ||
                    post.coverMedia?.url ||
                    post.translation?.coverImageUrl ||
                    post.coverImageUrl,
            );

            return {
                url: absoluteUrl(`/news/${post.slug}`),
                lastModified:
                    post.updatedAt || post.publishedAt || fallbackLastModified,
                changeFrequency: "weekly" as const,
                priority: 0.65,
                images: image ? [image] : undefined,
            };
        });
}

async function getProjectRoutesForSitemap(
    fallbackLastModified: Date,
): Promise<MetadataRoute.Sitemap> {
    const projects = await getProject("tmt-consulting-group", "RU");

    return projects
        .filter((project) => project.slug && project.status === "PUBLISHED")
        .map((project: Project) => {
            const image = absoluteMediaUrl(project.coverImage);

            return {
                url: absoluteUrl(`/about-us/projects/${project.slug}`),
                lastModified: fallbackLastModified,
                changeFrequency: "monthly" as const,
                priority: 0.7,
                images: image ? [image] : undefined,
            };
        });
}

async function getAllNewsForSitemap(): Promise<Post[]> {
    const posts: Post[] = [];
    let page = 1;
    let pages = 1;

    do {
        const response = await getPosts({
            page,
            limit: NEWS_SITEMAP_PAGE_SIZE,
            lang: "RU",
            type: "NEWS",
        });

        if (!response?.data?.length) {
            break;
        }

        posts.push(...response.data);
        pages = response.meta?.pages ?? page;
        page += 1;
    } while (page <= pages);

    return posts;
}
