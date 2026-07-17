type TagTranslation = {
	locale: string;
	name: string;
}

export type Tag = {
	scope: 'VACANCY' | 'GENERAL' | 'POST' | 'PROJECT';
	name: string;
	slug: string;
	translation: TagTranslation;
}