import { API_URL } from "@/services/api/api.config";

export class ForumRegistrationError extends Error {
    constructor(public readonly status: number) {
        super(`Forum registration failed: ${status}`);
    }
}

export async function registerForumDelegate(slug: string, data: FormData) {
    const response = await fetch(
        `${API_URL}/forums/public/${encodeURIComponent(slug)}/register`,
        { method: "POST", body: data },
    );

    if (!response.ok) {
        throw new ForumRegistrationError(response.status);
    }

    return response.json() as Promise<{ id: string }>;
}
