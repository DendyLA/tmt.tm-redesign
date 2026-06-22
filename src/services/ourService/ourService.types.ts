export type OurServiceTranslation = {
    id: string;
    serviceId: string;
    locale: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
};

export type OurServiceCategoryTranslation = {
    id: string;
    categoryId: string;
    locale: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
};

export type OurServiceCategory = {
    id: string;
    companyId: string;
    name: string;
    slug: string;
    description: string;
    sortOrder: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    translations: OurServiceCategoryTranslation[];
    translation: OurServiceCategoryTranslation | null;
};

export type OurService = {
    id: string;
    companyId: string;
    categoryId: string;
    title: string;
    description: string;
    image: string;
    sortOrder: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    translations: OurServiceTranslation[];
    translation: OurServiceTranslation | null;
    category: OurServiceCategory;
};
