import { apiClient } from "../api/api-client";
import { getApiLocaleCandidates } from "@/lib/i18n/config";

import type { Tag } from "./tags.types";


type getTagsProps = {
	exact?: boolean;
	locale?: string;
	scope?: 'VACANCY' | 'GENERAL' | 'POST' | 'PROJECT';
}

export async function getTags({ scope, exact = false, locale }: getTagsProps): Promise<Tag[] | null>{


	const localeCandidates = locale ? getApiLocaleCandidates(locale) : [null];

	for (const candidateLocale of localeCandidates) {
		try{
			const params = new URLSearchParams({
				exact: exact.toString(),
			});

			if(scope) {
				params.set('scope', scope)
			}

			if(candidateLocale) {
				params.set('locale', candidateLocale)
			}

			const tags = await apiClient<Tag[]>(`/tags?${params.toString()}`)

			if (tags.length || candidateLocale === "RU" || !candidateLocale) {
				return tags;
			}
		}catch(error){
			if (candidateLocale === "RU" || !candidateLocale) {
				console.log(error);
			}
		}
	}

	return null;
}
