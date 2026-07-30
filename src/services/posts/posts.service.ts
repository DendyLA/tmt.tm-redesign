import { apiClient } from "../api/api-client";
import type { PostResponse, Post } from "./posts.types";
import { getApiLocaleCandidates } from "@/lib/i18n/config";

type GetPostsProps = {
    page?: number;
    limit?: number;
    lang?: string;
    type?: "NEWS" | "BLOG";
};

export async function getPosts({
    page = 1,
    limit = 20,
    lang = "RU",
    type,
}: GetPostsProps = {}): Promise<PostResponse | null> {
    for (const locale of getApiLocaleCandidates(lang)) {
        const params = new URLSearchParams({
            page: String(page),
            limit: String(limit),
            locale,
            deleted: "false",
        });

        if (type) {
            params.append("type", type);
        }

        try {
            const response = await apiClient<PostResponse>(
                `/posts/public?${params.toString()}`,
                {
                    next: { revalidate: 300, tags: ["posts"] },
                },
            );

            if (response?.data?.length || locale === "RU") {
                return response;
            }
        } catch (error) {
            if (locale === "RU") {
                console.log(error);
            }
        }
    }

    return null;
}

type GetPostBySlugProps = {
    slug: string;
    lang?: string;
    deleted?: boolean;
};

export async function getPostBySlug({
    slug,
    lang = "RU",
    deleted = false,
}: GetPostBySlugProps): Promise<Post> {
    let fallbackPost: Post | null = null;
    let lastError: unknown;

    for (const locale of getApiLocaleCandidates(lang)) {
        try {
            const post = await apiClient<Post>(
                `/posts/public/${slug}?locale=${locale}&deleted=${deleted}`,
                {
                    next: { revalidate: 300, tags: ["posts"] },
                },
            );

            if (post.translation || locale === "RU") {
                return post;
            }

            fallbackPost = post;
        } catch (error) {
            lastError = error;
        }
    }

    if (fallbackPost) {
        return fallbackPost;
    }

    throw lastError;
}
