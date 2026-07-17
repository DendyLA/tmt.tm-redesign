import { apiClient } from "../api/api-client";

import type { Tag } from "./tags.types";


type getTagsProps = {
	exact: boolean;
	scope?: 'VACANCY' | 'GENERAL' | 'POST' | 'PROJECT';
}

export async function getTags({ scope, exact = false }: getTagsProps): Promise<Tag[] | null>{


	try{
		const params = new URLSearchParams({
			exact: exact.toString(),
		});

		if(scope) {
			params.set('scope', scope)
		}

		return await apiClient(`/tags?${params.toString()}`)
	}catch(error){
		console.log(error);
		return null;
	}
}