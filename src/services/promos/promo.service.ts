import { apiClient } from "../api/api-client";
import type { Promo } from "./promo.types";

export async function getPublicPromos() {
	try{
		return await apiClient<Promo[]>("/promos/public", {
            cache: "no-store",
        });
	}catch(error){
		console.log(error)
		return [];
	}
    
}

export async function getPromoSettings(settings: string) {
    try{
		return await apiClient<Promo[]>(`/promos/public?${settings}`, {
            cache: "no-store",
        });
	}catch(error){
		console.log(error)
		return []
	}
}
