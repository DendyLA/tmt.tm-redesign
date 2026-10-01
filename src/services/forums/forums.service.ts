import { apiClient } from "../api/api-client";
import type { Forum, ForumProgramDay } from "./forums.types";
import { getApiLocaleCandidates } from "@/lib/i18n/config";



export async function getForum(slug: string, locale: string): Promise<Forum | null> {
	try{
		return await apiClient<Forum>(`/forums/public/${slug}?locale=${locale}`, {
			next: { revalidate: 300, tags: ["forums"] },
		});
	}catch(error){
		console.log(error);
		return null;
	}
}

export async function getForumProgram(slug: string, locale: string): Promise<ForumProgramDay[]> {
    try {
        const days = await apiClient<ForumProgramDay[]>(`/forums/public/${slug}/program`, {
            next: { revalidate: 300, tags: ["forums"] },
        });
        const locales = [...getApiLocaleCandidates(locale), "EN", "TK"];

        return days.map((day) => {
            const dayTranslation = locales
                .map((candidate) => day.translations?.find((translation) => translation.locale === candidate))
                .find(Boolean);

            return {
                ...day,
                title: dayTranslation?.title || day.title,
                items: day.items.map((item) => {
                    const translation = locales
                        .map((candidate) => item.translations?.find((entry) => entry.locale === candidate))
                        .find(Boolean);

                    return {
                        ...item,
                        title: translation?.title || item.title,
                        description: translation?.description ?? item.description,
                    };
                }),
            };
        });
    } catch (error) {
        console.error(error);
        return [];
    }
}
