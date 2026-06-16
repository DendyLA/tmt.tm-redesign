import { API_URL } from "./api.config";

type RequestOptions = RequestInit & {
    auth?: boolean;
};

export async function apiClient<T>(
    endpoint: string,
    options: RequestOptions = {},
): Promise<T> {

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
    });

    if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
    }

    return response.json();
}