import type { Analytic } from "./analytics.types";

import { apiClient } from "../api/api-client";


type getAnalyticProps = {
	company: string;
	place: string;
}

export default async function getAnalytic({ company, place }: getAnalyticProps): Promise<Analytic[] | null>{
	const params = new URLSearchParams({
		companySlug: company,
		placeKey: place,
	})

	try{
		return await apiClient(`/tracking/buttons/public?${params.toString()}`)
	}catch(error){
		console.log(error)
		return null
	}

	
}