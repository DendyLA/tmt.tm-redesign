type VacancyTranslation = {
	locale: string;
	title: string;
	description: string;
	requirements: string;
	location: string
}

export type VacancyTag = {
	tagId: string;
	tag: {
		name: string;
		slug: string;
	}
}

export type VacancyData = {
	id: string;
	contactEmail: string;
	salary?: string;
	status: string;
	createdAt: string;
	translation: VacancyTranslation;
	tags: VacancyTag[];
	slug: string;
}

export type Vacancy = {
	data: VacancyData[];
	meta: {
		total: number;
		page: number;
		limit: number;
		pages: number;
	}
}

