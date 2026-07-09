type ProjectsTranslation = {
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
    translations: ProjectsTranslation;
    tags: ProjectsTags[];
    slug: string;
};
