type TagTranslation = {
	locale: string;
	name: string;
}

export type Tag = {
	id: string;
	scope: 'VACANCY' | 'GENERAL' | 'POST' | 'PROJECT';
	name: string;
	slug: string;
	translation?: TagTranslation | null;
}
