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
	title: string;
	description: string;
	requirements: string;
	location: string;
	contactEmail: string;
	salary?: string;
	status: string;
	createdAt: string;
	updatedAt?: string;
	translation?: VacancyTranslation | null;
	translations?: VacancyTranslation[];
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

