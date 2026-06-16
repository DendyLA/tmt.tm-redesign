import { apiClient } from "../api/api-client";
import type { Promo } from "./promo.types";

export async function getPublicPromos() {
    return apiClient<Promo[]>("/promos/public");
}

export async function getPromoSettings(settings: string){
	return apiClient<Promo[]>(`/promos/public?${settings}`)
}