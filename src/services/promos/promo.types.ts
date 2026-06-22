export type Promo = {
    id: string;
    title: string;
    subtitle?: string;
    ButtonURL?: string;
    ButtonLabelL?: string;
    media?: {
        id: string;
        url: string;
        type: string;
    };
};
