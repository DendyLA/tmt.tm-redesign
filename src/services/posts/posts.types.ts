export type PostMedia = {
    id: string;
    companyId: string | null;
    createdBy: string;
    url: string;
    type: "IMAGE" | "VIDEO" | "DOCUMENT";
    locale: string | null;
    mimeType: string;
    fileName: string;
    originalName: string;
    size: number;
    storage: string;
    entityType: string | null;
    entityId: string | null;
    isGlobal: boolean;
    altText: string | null;
    title: string | null;
    sortOrder: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
};

export type PostTranslation = {
    id: string;
    postId: string;
    locale: string;
    title: string;
    excerpt: string | null;
    content: string;
    coverMediaId: string | null;
    coverImageUrl: string | null;
    coverAltText: string | null;
    createdAt: string;
    updatedAt: string;
    coverMedia: PostMedia | null;
};

export type Post = {
    id: string;
    companyId: string | null;
    createdBy: string;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string;
    coverMediaId: string | null;
    coverImageUrl: string | null;
    coverAltText: string | null;
    type: "NEWS" | "BLOG" | "ARTICLE" | "ANNOUNCEMENT";
    status: "DRAFT" | "PUBLISHED";
    isGlobal: boolean;
    sortOrder: number;
    publishedAt: string | null;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    coverMedia: PostMedia | null;
    translations: PostTranslation[];
    translation: PostTranslation | null;
    tags: unknown[];
};

export type PostResponse = {
    data: Post[];
    meta: {
        total: number;
        page: number;
        limit: number;
        pages: number;
    };
};
