export type ProjectsTranslation = {
    locale: string;
    title: string;
    description: string | null;
};

type ProjectsTags = {
    tag: {
        name: string;
        slug: string;
        scope: string;
    };
};

export type Project = {
    title: string;
    description: string | null;
    coverImage: string;
    status: string;
    translations?: ProjectsTranslation[];
    translation?: ProjectsTranslation | null;
    tags: ProjectsTags[];
    slug: string;
    gallery?: {
        id: string;
        url: string;
        altText: string | null;
        title: string | null;
    }[];
};
