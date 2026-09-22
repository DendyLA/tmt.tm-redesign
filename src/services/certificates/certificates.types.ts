export type CertificateMedia = {
    id?: string;
    url: string;
    altText?: string | null;
    title?: string | null;
};

export type Certificate = {
    id: string;
    title: string;
    description?: string | null;
    issuer?: string | null;
    issuedAt?: string | null;
    fileUrl?: string | null;
    image?: string | CertificateMedia | null;
    media?: CertificateMedia | null;
    isActive?: boolean;
    sortOrder?: number;
};
