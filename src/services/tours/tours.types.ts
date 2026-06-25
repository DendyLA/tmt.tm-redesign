export type Tour ={
	title: string;
	description: string;
	image: string | null;
	isActive: boolean;
	sortOrder: number;
	translation: TourTranslation;
}

export type TourTranslation = {
	locale: string;
	title: string;
	description: string;
}


export type Tours = {
	data: Tour[];
	meta: {
		total: number;
		page: number;
		pages: number;
	}
}