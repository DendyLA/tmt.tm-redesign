type TendersTranslation = {
	locale: string;
	title: string;
	description: string;	
}


type TendersData = {
	id: string;
	sortOrder: number;
	createdAt: string;
	translation: TendersTranslation;	
}

type TendersMeta = {
	total: number;
    page: number;
    limit: number;
    pages: number;
}

export type Tenders = {
	data: TendersData[];
	meta: TendersMeta;
}