import { apiClient } from "../api/api-client";
import type { PostResponse } from "./posts.types";

type GetPostsProps = {
    page?: number;
    limit?: number;
    lang?: string;
    type?: "NEWS" | "BLOG";
};

export function getPosts({
    page = 1,
    limit = 20,
    lang = "RU",
    type,
}: GetPostsProps = {}): Promise<PostResponse> {
    const params = new URLSearchParams({
        page: String(page),
        limit: String(limit),
        locale: lang.toUpperCase(),
        deleted: "false",
    });

    if (type) {
        params.append("type", type);
    }

    return apiClient<PostResponse>(
        `/posts/public?${params.toString()}`
    );
}