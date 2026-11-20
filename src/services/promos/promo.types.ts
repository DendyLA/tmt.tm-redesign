export type Promo = {
    id: string;
    title: string;
    sortOrder: number;
    subtitle?: string;
    ButtonURL?: string;
    ButtonLabelL?: string;
    media?: {
        id: string;
        url: string;
        type: string;
    };
};
