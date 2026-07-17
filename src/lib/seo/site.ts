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
    title: "TMT Consulting Group — сопровождение бизнеса в Ашхабаде и Туркменистане",
    description:
        "Консалтинг и сопровождение бизнеса в Ашхабаде и Туркменистане: представительство иностранных компаний, инвестиции, организация форумов, мероприятий, разработка сайтов и дизайна.",
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
    "TMT Turkmenistan",
    "TMT Ashgabat",
    "консалтинг",
    "консалтинговые услуги",
    "консалтинг в Туркменистане",
    "консалтинг в Ашхабаде",
    "бизнес консалтинг Туркменистан",
    "инвестиционный консалтинг",
    "представительство иностранного бизнеса в Туркменистане",
    "выход на рынок Туркменистана",
    "сопровождение бизнеса в Туркменистане",
    "сопровождение бизнеса в Ашхабаде",
    "сопровождение бизнеса в Ашхабаде и Туркменистане",
    "заказать разработку дизайна",
    "заказать разработку сайта",
    "разработка дизайна",
    "разработка сайтов",
    "разработка сайтов в Туркменистане",
    "веб разработка Туркменистан",
    "дизайн в Ашхабаде",
    "организация форумов",
    "организация форумов Ашхабад",
    "организация форумов Туркменистан",
    "организация форумов в Ашхабаде",
    "организация форумов в Туркменистане",
    "организация мероприятий",
    "организация деловых мероприятий",
    "мероприятия в Ашхабаде",
    "форумы в Ашхабаде",
    "форумы в Туркменистане",
    "деловые форумы",
    "B2G консалтинг",
    "Ashgabat consulting",
    "Turkmenistan consulting",
    "business consulting Turkmenistan",
    "foreign business representation Turkmenistan",
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
            "сопровождение бизнеса в Ашхабаде и Туркменистане",
            "представительство иностранного бизнеса в Туркменистане",
            "организация форумов Ашхабад",
            "организация форумов Туркменистан",
        ],
    },
    {
        path: "/about-us",
        title: "Сопровождение бизнеса в Ашхабаде и Туркменистане | TMT Consulting Group",
        description:
            "TMT Consulting Group помогает иностранным компаниям, инвесторам и партнерам выходить на рынок Туркменистана, выстраивать представительство и получать сопровождение бизнеса в Ашхабаде и Туркменистане.",
        priority: 0.9,
        changeFrequency: "monthly",
        keywords: [
            "о TMT Consulting Group",
            "консалтинговая компания в Туркменистане",
            "сопровождение бизнеса",
            "сопровождение бизнеса в Ашхабаде",
            "сопровождение бизнеса в Ашхабаде и Туркменистане",
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
        path: "/services",
        title: "Разработка сайтов и дизайна в Туркменистане | TMT Consulting Group",
        description:
            "Услуги дизайна и IT в Туркменистане: разработка сайтов, веб-платформ, брендинга, интерфейсов и цифровых продуктов для бизнеса.",
        priority: 0.85,
        changeFrequency: "monthly",
        keywords: [
            "разработка сайтов",
            "разработка сайтов в Туркменистане",
            "заказать разработку сайта",
            "заказать разработку дизайна",
            "услуги дизайна в Ашхабаде",
        ],
    },
    {
        path: "/contacts",
        title: "Контакты TMT Consulting Group в Ашхабаде",
        description:
            "Свяжитесь с TMT Consulting Group в Ашхабаде по вопросам консалтинга, сопровождения бизнеса, представительства компаний, организации форумов и деловых мероприятий.",
        priority: 0.75,
        changeFrequency: "monthly",
        keywords: [
            "контакты TMT Consulting Group",
            "консалтинг Ашхабад контакты",
            "консалтинговая компания Ашхабад",
            "TMT Consulting Group Ашхабад",
            "организация форумов Ашхабад",
            "сопровождение бизнеса в Ашхабаде",
        ],
    },
    {
        path: "/news",
        title: "Новости бизнеса и организация форумов в Туркменистане | TMT Consulting Group",
        description:
            "Новости TMT Consulting Group о бизнесе, инвестициях, организации форумов в Ашхабаде и Туркменистане, деловых мероприятиях и возможностях для компаний.",
        priority: 0.8,
        changeFrequency: "weekly",
        keywords: [
            "новости Туркменистана",
            "бизнес новости Туркменистан",
            "мероприятия Туркменистан",
            "организация форумов Туркменистан",
            "организация форумов Ашхабад",
            "инвестиции Туркменистан",
        ],
    },
    {
        path: "/blog",
        title: "Блог о консалтинге и организации форумов в Туркменистане | TMT Consulting Group",
        description:
            "Блог TMT Consulting Group о консалтинге, сопровождении бизнеса в Ашхабаде и Туркменистане, представительстве иностранных компаний, организации форумов и цифровых решениях.",
        priority: 0.7,
        changeFrequency: "weekly",
        keywords: [
            "блог TMT Consulting Group",
            "блог о консалтинге",
            "бизнес в Туркменистане",
            "организация форумов Туркменистан",
            "сопровождение бизнеса в Ашхабаде и Туркменистане",
            "представительство бизнеса в Туркменистане",
        ],
    },
    {
        path: "/vacancy",
        title: "Вакансии и тендеры в Туркменистане | TMT Consulting Group",
        description:
            "Актуальные вакансии, тендеры и деловые возможности TMT Consulting Group в Ашхабаде и Туркменистане для специалистов, компаний и партнеров.",
        priority: 0.65,
        changeFrequency: "weekly",
        keywords: [
            "вакансии TMT Consulting Group",
            "вакансии в Туркменистане",
            "вакансии в Ашхабаде",
            "тендеры в Туркменистане",
            "тендеры Ашхабад",
            "деловые возможности Туркменистан",
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
            legalName: siteConfig.name,
            alternateName: siteConfig.shortName,
            slogan: "Мост между капиталом и возможностью",
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
            knowsLanguage: ["ru", "en", "tk"],
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
                    "Сопровождение бизнеса в Ашхабаде и Туркменистане",
                    "Организация форумов в Ашхабаде",
                    "Организация форумов в Туркменистане",
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
            hasPart: seoRoutes.map((route) => ({
                "@id": `${absoluteUrl(route.path)}#webpage`,
            })),
        },
        ...seoRoutes.map((route) => ({
            "@type": "WebPage",
            "@id": `${absoluteUrl(route.path)}#webpage`,
            url: absoluteUrl(route.path),
            name: route.title,
            description: route.description,
            inLanguage: siteConfig.language,
            isPartOf: {
                "@id": `${siteConfig.url}/#website`,
            },
            about: {
                "@id": `${siteConfig.url}/#organization`,
            },
            primaryImageOfPage: {
                "@type": "ImageObject",
                url: absoluteUrl("/images/logo.png"),
            },
        })),
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
