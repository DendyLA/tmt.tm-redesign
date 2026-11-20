import { API_URL } from "@/services/api/api.config";

export type ForumMeetingRequestInput = {
    type: "B2B_B2G";
    message: string;
};

export class ForumMeetingRequestError extends Error {
    constructor(public readonly status: number) {
        super(`Forum meeting request failed: ${status}`);
    }
}

export async function createForumMeetingRequest(slug: string, input: ForumMeetingRequestInput) {
    const response = await fetch(
        `${API_URL}/forums/public/${encodeURIComponent(slug)}/meeting-requests`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(input),
        },
    );

    if (!response.ok) throw new ForumMeetingRequestError(response.status);

    return response.json() as Promise<{ id: string }>;
}
