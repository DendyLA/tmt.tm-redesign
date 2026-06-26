export const siteUrl = normalizeUrl(
    process.env.NEXT_PUBLIC_SITE_URL || "https://tmt.tm",
);

export const mediaBaseUrl = normalizeUrl(
    process.env.NEXT_PUBLIC_MEDIA_URL || process.env.ORIGIN_URL || siteUrl,
);

export const siteConfig = {
    name: "TMT Consulting Group",
    shortName: "TMT",
    url: siteUrl,
    locale: "ru_TM",
    language: "ru-RU",
    title: "TMT Consulting Group — консалтинг в Туркменистане и Ашхабаде",
    description:
        "Консалтинг в Туркменистане и Ашхабаде: сопровождение иностранных компаний, представительство бизнеса, инвестиции, организация мероприятий, разработка сайтов и дизайна.",
    address: {
        streetAddress: "2127, G. Gulyyev St. 38, Building Ojar Aziya",
        addressLocality: "Ashgabat",
        postalCode: "744000",
        addressCountry: "TM",
    },
    geo: {
        latitude: 37.958977,
        longitude: 58.419568,
    },
    phone: "+99312753644",
    email: "info@tmt.tm",
    socialLinks: [
        "https://www.linkedin.com/company/tmt-consulting-group",
        "https://www.facebook.com/profile.php?id=61572642102689",
        "https://www.instagram.com/turkmen_maslahatchylar_topary/",
    ],
};

export const seoKeywords = [
    "TMT Consulting Group",
    "TMT",
    "консалтинг",
    "консалтинг в Туркменистане",
    "консалтинг в Ашхабаде",
    "бизнес консалтинг Туркменистан",
    "инвестиционный консалтинг",
    "представительство иностранного бизнеса в Туркменистане",
    "выход на рынок Туркменистана",
    "сопровождение бизнеса в Туркменистане",
    "заказать разработку дизайна",
    "разработка дизайна",
    "разработка сайтов",
    "разработка сайтов в Туркменистане",
    "организация мероприятий",
    "организация деловых мероприятий",
    "деловые форумы",
    "B2G консалтинг",
    "Ashgabat consulting",
    "Turkmenistan consulting",
];

export const seoRoutes = [
    {
        path: "/",
        title: siteConfig.title,
        description: siteConfig.description,
        priority: 1,
        changeFrequency: "weekly",
        keywords: [
            "консалтинг",
            "консалтинг в Туркменистане",
            "консалтинг в Ашхабаде",
            "представительство иностранного бизнеса в Туркменистане",
        ],
    },
    {
        path: "/about-us",
        title: "О TMT Consulting Group — консалтинг и сопровождение бизнеса в Туркменистане",
        description:
            "TMT Consulting Group помогает иностранным компаниям, инвесторам и партнерам выходить на рынок Туркменистана и Центральной Азии.",
        priority: 0.9,
        changeFrequency: "monthly",
        keywords: [
            "о TMT Consulting Group",
            "консалтинговая компания в Туркменистане",
            "сопровождение бизнеса",
            "иностранный бизнес в Туркменистане",
        ],
    },
    {
        path: "/tourism",
        title: "Туризм в Туркменистане — TMT Travel | TMT Consulting Group",
        description:
            "TMT Travel организует профессиональные поездки и туры по Туркменистану с вниманием к маршрутам, гостеприимству и деталям.",
        priority: 0.7,
        changeFrequency: "monthly",
        keywords: [
            "туризм в Туркменистане",
            "TMT Travel",
            "туры в Туркменистан",
            "поездки по Туркменистану",
        ],
    },
    {
        path: "/news",
        title: "Новости бизнеса и событий Туркменистана | TMT Consulting Group",
        description:
            "Новости TMT Consulting Group о бизнесе, инвестициях, деловых мероприятиях и возможностях в Туркменистане.",
        priority: 0.8,
        changeFrequency: "weekly",
        keywords: [
            "новости Туркменистана",
            "бизнес новости Туркменистан",
            "мероприятия Туркменистан",
            "инвестиции Туркменистан",
        ],
    },
] as const;

export const siteJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": ["Organization", "ProfessionalService"],
            "@id": `${siteConfig.url}/#organization`,
            name: siteConfig.name,
            alternateName: siteConfig.shortName,
            url: siteConfig.url,
            logo: absoluteUrl("/images/logo.png"),
            image: absoluteUrl("/images/logo.png"),
            description: siteConfig.description,
            email: siteConfig.email,
            telephone: siteConfig.phone,
            address: {
                "@type": "PostalAddress",
                ...siteConfig.address,
            },
            geo: {
                "@type": "GeoCoordinates",
                latitude: siteConfig.geo.latitude,
                longitude: siteConfig.geo.longitude,
            },
            sameAs: siteConfig.socialLinks,
            areaServed: [
                {
                    "@type": "Country",
                    name: "Turkmenistan",
                },
                {
                    "@type": "City",
                    name: "Ashgabat",
                },
                {
                    "@type": "Place",
                    name: "Central Asia",
                },
            ],
            knowsAbout: seoKeywords,
            contactPoint: [
                {
                    "@type": "ContactPoint",
                    telephone: siteConfig.phone,
                    email: siteConfig.email,
                    contactType: "customer service",
                    areaServed: "TM",
                    availableLanguage: ["Russian", "English", "Turkmen"],
                },
            ],
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Услуги TMT Consulting Group",
                itemListElement: [
                    "Консалтинг в Туркменистане",
                    "Представительство иностранного бизнеса в Туркменистане",
                    "Инвестиционный консалтинг",
                    "Организация мероприятий и деловых форумов",
                    "Разработка сайтов",
                    "Разработка дизайна",
                    "Поддержка стартапов",
                    "B2G сопровождение",
                ].map((name) => ({
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name,
                        areaServed: "Turkmenistan",
                        provider: {
                            "@id": `${siteConfig.url}/#organization`,
                        },
                    },
                })),
            },
        },
        {
            "@type": "WebSite",
            "@id": `${siteConfig.url}/#website`,
            url: siteConfig.url,
            name: siteConfig.name,
            description: siteConfig.description,
            inLanguage: siteConfig.language,
            publisher: {
                "@id": `${siteConfig.url}/#organization`,
            },
        },
    ],
};

export function absoluteUrl(path = "/") {
    return new URL(path, siteConfig.url).toString();
}

export function absoluteMediaUrl(path?: string | null) {
    if (!path) {
        return null;
    }

    if (/^https?:\/\//i.test(path)) {
        return path;
    }

    return new URL(path, mediaBaseUrl).toString();
}

function normalizeUrl(url: string) {
    return url.replace(/\/+$/, "");
}
