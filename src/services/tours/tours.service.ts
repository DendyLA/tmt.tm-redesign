import { apiClient } from "../api/api-client";
import type { Tours } from "./tours.types";

type GetToursProps = {
	page?: number;
	limit?: number;
	lang?: string;
}

export default async function getTours({page = 1, limit = 10, lang = 'RU'}: GetToursProps): Promise<Tours>{
	const params = new URLSearchParams({
		page: String(page),
		limit: String(limit),
		locale: lang.toUpperCase(),
	});

	return await apiClient(`/tours/public?${params.toString()}&show=true`)
}