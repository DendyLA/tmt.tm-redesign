type ServiceCategoryTranslation = {
    locale: string;
    name: string;
};

type ServiceTranslation = {
    locale: string;
    title: string;
    description: string;
};

type Service = {
    id: string;
    title: string;
    description: string;
    image: string;
    sortOrder: number;
    translation: ServiceTranslation | null;
};

export type ServiceCategory = {
    id: string;
    sortOrder: number;
    translation: ServiceCategoryTranslation | null;
    services: Service[];
	showOnHomePage: boolean;
	name: string;
};

export type ServiceList = ServiceCategory[];