import type { MetadataRoute } from "next";

import { getPosts } from "@/services/posts/posts.service";
import {
    absoluteMediaUrl,
    absoluteUrl,
    seoRoutes,
} from "@/lib/seo/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const lastModified = new Date();
    const staticRoutes = seoRoutes.map((route) => ({
        url: absoluteUrl(route.path),
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));

    try {
        const posts = await getPosts({
            page: 1,
            limit: 100,
            lang: "RU",
            type: "NEWS",
        });

        const newsRoutes = posts.data
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
                        post.updatedAt || post.publishedAt || lastModified,
                    changeFrequency: "weekly" as const,
                    priority: 0.65,
                    images: image ? [image] : undefined,
                };
            });

        return [...staticRoutes, ...newsRoutes];
    } catch {
        return staticRoutes;
    }
}
