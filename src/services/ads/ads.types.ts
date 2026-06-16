export type Ad = {
    id: string;
    ad: {
        id: string;
        title: string;
        type: "IMAGE" | "VIDEO" | "HTML";
		translation: {
			imageUrl: string;
		};
        imageUrl: string;
        targetUrl: string | null;
    };
};