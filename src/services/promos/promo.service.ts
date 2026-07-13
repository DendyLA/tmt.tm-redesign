import { apiClient } from "../api/api-client";
import type { Promo } from "./promo.types";

export async function getPublicPromos() {
    try {
        return await apiClient<Promo[]>("/promos/public", {
            next: { revalidate: 300, tags: ["promos"] },
        });
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getPromoSettings(settings: string) {
    try {
        return await apiClient<Promo[]>(`/promos/public?${settings}`, {
            next: { revalidate: 300, tags: ["promos"] },
        });
    } catch (error) {
        console.log(error);
        return [];
    }
}
