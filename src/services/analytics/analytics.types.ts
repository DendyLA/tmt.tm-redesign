export type AnalyticPlace = {
    key: string;
    name: string;
};

export type Analytic = {
    place: AnalyticPlace;
    targetUrl: string;
    trackingUrl: string;
};
