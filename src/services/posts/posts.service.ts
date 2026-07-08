import { apiClient } from "../api/api-client";
import type { PostResponse, Post } from "./posts.types";

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
    const params = new URLSearchParams({
        page: String(page),
        limit: String(limit),
        locale: lang.toUpperCase(),
        deleted: "false",
    });

    if (type) {
        params.append("type", type);
    }

	try{
		return await apiClient<PostResponse>(
        `/posts/public?${params.toString()}`, {
            cache: "no-store",
        }
    );
	}catch(error){
		console.log(error)
		return null
	}

    
}

type GetPostBySlugProps = {
    slug: string;
    lang?: string;
    deleted?: boolean;
};

export function getPostBySlug({
    slug,
    lang = "RU",
    deleted = false,
}: GetPostBySlugProps): Promise<Post> {
    return apiClient<Post>(
        `/posts/public/${slug}?locale=${lang.toUpperCase()}&deleted=${deleted}`
    );
}