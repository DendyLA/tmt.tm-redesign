import { apiClient } from "../api/api-client";
import type { Tenders } from "./tenders.types";


type getTendersProps = {
	page: number;
	locale: string;
}

export async function getTenders({ page, locale }: getTendersProps): Promise<Tenders | null> {
	try{
		return await apiClient(`/tenders/public?page=${page}&limit=5&locale=${locale}&deleted=false`)
	}catch(error){
		console.log(error)
		return null
	}
}