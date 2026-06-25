import type { Analytic } from "./analytics.types";

import { apiClient } from "../api/api-client";


type getAnalyticProps = {
	company: string;
	place: string;
}

export default async function getAnalytic({ company, place }: getAnalyticProps): Promise<Analytic[]>{
	const params = new URLSearchParams({
		companySlug: company,
		placeKey: place,
	})

	return await apiClient(`/tracking/buttons/public?${params.toString()}`)
}