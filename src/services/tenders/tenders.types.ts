type TendersTranslation = {
	locale: string;
	title: string;
	description: string;	
}


export type TendersData = {
	id: string;
	sortOrder: number;
	createdAt: string;
	translation: TendersTranslation;	
	slug:string;
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