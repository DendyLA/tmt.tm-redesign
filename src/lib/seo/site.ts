import { defaultLocale, type Locale, withLocalePath } from "@/lib/i18n/config";

export const siteUrl = normalizeUrl(
    process.env.NEXT_PUBLIC_SITE_URL || "https://tmt.tm",
);

export const mediaBaseUrl = normalizeUrl(
    process.env.NEXT_PUBLIC_MEDIA_URL ||
        process.env.NEXT_PUBLIC_ORIGIN_URL ||
        process.env.ORIGIN_URL ||
        siteUrl,
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
    "новости Туркменистана",
    "новости в Туркменистане",
    "бизнес новости в Туркменистане",
    "туризм в Туркменистане",
    "путешествие в Туркменистан",
    "путешествия в Туркменистан",
    "туристическое агентство Туркменистан",
    "туристическое агентство в Туркменистане",
    "B2G консалтинг",
    "Ashgabat consulting",
    "Turkmenistan consulting",
    "Turkmenistan news",
    "news in Turkmenistan",
    "travel to Turkmenistan",
    "tourism agency Turkmenistan",
    "business consulting Turkmenistan",
    "foreign business representation Turkmenistan",
];

export type SeoRoute = {
    path: string;
    title: string;
    description: string;
    priority: number;
    changeFrequency: "weekly" | "monthly";
    keywords: readonly string[];
};

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
        title: "Туризм в Туркменистане и путешествия | TMT Travel",
        description:
            "TMT Travel — туристическое агентство в Туркменистане: путешествия в Туркменистан, туры, маршруты, сопровождение гостей и профессиональная организация поездок.",
        priority: 0.8,
        changeFrequency: "monthly",
        keywords: [
            "туризм в Туркменистане",
            "TMT Travel",
            "путешествие в Туркменистан",
            "путешествия в Туркменистан",
            "туристическое агентство Туркменистан",
            "туристическое агентство в Туркменистане",
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
        title: "Новости Туркменистана | бизнес, события и форумы",
        description:
            "Новости Туркменистана от TMT Consulting Group: бизнес-новости, события в Ашхабаде, форумы, инвестиции, консалтинг и возможности для компаний.",
        priority: 0.85,
        changeFrequency: "weekly",
        keywords: [
            "новости Туркменистана",
            "новости в Туркменистане",
            "бизнес новости Туркменистан",
            "бизнес новости в Туркменистане",
            "новости Ашхабада",
            "мероприятия Туркменистан",
            "события в Ашхабаде",
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
] satisfies readonly SeoRoute[];

const siteConfigByLocale: Record<Locale, typeof siteConfig> = {
    ru: siteConfig,
    en: {
        ...siteConfig,
        locale: "en_US",
        language: "en-US",
        title: "TMT Consulting Group — business support in Ashgabat and Turkmenistan",
        description:
            "Consulting and business support in Ashgabat and Turkmenistan: foreign company representation, investments, forum and event organization, web development and design.",
    },
    tm: {
        ...siteConfig,
        locale: "tk_TM",
        language: "tk-TM",
        title: "TMT Consulting Group — Aşgabatda we Türkmenistanda biznes goldawy",
        description:
            "Aşgabatda we Türkmenistanda konsalting we biznes goldawy: daşary ýurt kompaniýalarynyň wekilçiligi, maýa goýumlar, forum we çäre guramak, web saýtlary we dizaýn.",
    },
};

const seoKeywordsByLocale: Record<Locale, readonly string[]> = {
    ru: seoKeywords,
    en: [
        "TMT Consulting Group",
        "TMT",
        "TMT Turkmenistan",
        "TMT Ashgabat",
        "consulting",
        "consulting in Turkmenistan",
        "consulting in Ashgabat",
        "business consulting Turkmenistan",
        "investment consulting",
        "foreign business representation in Turkmenistan",
        "market entry Turkmenistan",
        "business support in Turkmenistan",
        "business support in Ashgabat",
        "forum organization Ashgabat",
        "forum organization Turkmenistan",
        "event organization Turkmenistan",
        "Turkmenistan news",
        "news in Turkmenistan",
        "business news in Turkmenistan",
        "Ashgabat news",
        "travel to Turkmenistan",
        "tourism in Turkmenistan",
        "tourism agency Turkmenistan",
        "tourism agency in Turkmenistan",
        "Turkmenistan travel agency",
        "web development in Turkmenistan",
        "design services in Ashgabat",
        "B2G consulting",
    ],
    tm: [
        "TMT Consulting Group",
        "TMT",
        "TMT Türkmenistan",
        "TMT Aşgabat",
        "konsalting",
        "Türkmenistanda konsalting",
        "Aşgabatda konsalting",
        "Türkmenistanda biznes konsalting",
        "maýa goýum konsaltingi",
        "Türkmenistanda daşary ýurt biznesiniň wekilçiligi",
        "Türkmenistan bazaryna çykmak",
        "Türkmenistanda biznes goldawy",
        "Aşgabatda biznes goldawy",
        "Aşgabatda forum guramak",
        "Türkmenistanda forum guramak",
        "Türkmenistanda çäre guramak",
        "Türkmenistan täzelikleri",
        "Türkmenistanda täzelikler",
        "Aşgabat täzelikleri",
        "Türkmenistana syýahat",
        "Türkmenistanda syýahatçylyk",
        "Türkmenistanda syýahatçylyk agentligi",
        "Türkmenistanda web saýt döretmek",
        "Aşgabatda dizaýn hyzmatlary",
        "B2G konsalting",
    ],
};

const seoRoutesByLocale: Record<Locale, readonly SeoRoute[]> = {
    ru: seoRoutes,
    en: [
        {
            path: "/",
            title: siteConfigByLocale.en.title,
            description: siteConfigByLocale.en.description,
            priority: 1,
            changeFrequency: "weekly",
            keywords: [
                "consulting",
                "consulting in Turkmenistan",
                "consulting in Ashgabat",
                "business support in Ashgabat and Turkmenistan",
                "foreign business representation in Turkmenistan",
                "forum organization Ashgabat",
                "forum organization Turkmenistan",
            ],
        },
        {
            path: "/about-us",
            title: "Business support in Ashgabat and Turkmenistan | TMT Consulting Group",
            description:
                "TMT Consulting Group helps foreign companies, investors and partners enter the Turkmenistan market, build representation and receive business support in Ashgabat and across Turkmenistan.",
            priority: 0.9,
            changeFrequency: "monthly",
            keywords: [
                "about TMT Consulting Group",
                "consulting company in Turkmenistan",
                "business support",
                "business support in Ashgabat",
                "foreign business in Turkmenistan",
            ],
        },
        {
            path: "/tourism",
            title: "Travel to Turkmenistan | TMT Travel Tourism Agency",
            description:
                "TMT Travel is a tourism agency in Turkmenistan for travel to Turkmenistan, tours, routes, guest support and professional trip organization.",
            priority: 0.8,
            changeFrequency: "monthly",
            keywords: [
                "travel to Turkmenistan",
                "tourism in Turkmenistan",
                "tourism agency Turkmenistan",
                "tourism agency in Turkmenistan",
                "Turkmenistan tourism agency",
                "TMT Travel",
                "tours to Turkmenistan",
                "travel in Turkmenistan",
                "Turkmenistan travel agency",
                "Ashgabat tours",
            ],
        },
        {
            path: "/services",
            title: "Web development and design in Turkmenistan | TMT Consulting Group",
            description:
                "Design and IT services in Turkmenistan: website development, web platforms, branding, interfaces and digital products for business.",
            priority: 0.85,
            changeFrequency: "monthly",
            keywords: [
                "web development",
                "web development in Turkmenistan",
                "order website development",
                "order design services",
                "design services in Ashgabat",
            ],
        },
        {
            path: "/contacts",
            title: "TMT Consulting Group contacts in Ashgabat",
            description:
                "Contact TMT Consulting Group in Ashgabat for consulting, business support, company representation, forum organization and business events.",
            priority: 0.75,
            changeFrequency: "monthly",
            keywords: [
                "TMT Consulting Group contacts",
                "consulting Ashgabat contacts",
                "consulting company Ashgabat",
                "TMT Consulting Group Ashgabat",
            ],
        },
        {
            path: "/news",
            title: "Turkmenistan News | Business, Events and Consulting Updates",
            description:
                "News in Turkmenistan from TMT Consulting Group: business news, events in Ashgabat, forums, investments, consulting updates and company opportunities.",
            priority: 0.85,
            changeFrequency: "weekly",
            keywords: [
                "Turkmenistan news",
                "news in Turkmenistan",
                "Turkmenistan latest news",
                "Ashgabat news",
                "business news in Turkmenistan",
                "business news Turkmenistan",
                "events Turkmenistan",
                "events in Ashgabat",
                "forum organization Turkmenistan",
                "investments Turkmenistan",
                "consulting news Turkmenistan",
            ],
        },
        {
            path: "/blog",
            title: "Blog about consulting and forum organization in Turkmenistan | TMT Consulting Group",
            description:
                "TMT Consulting Group blog about consulting, business support in Ashgabat and Turkmenistan, foreign company representation, forum organization and digital solutions.",
            priority: 0.7,
            changeFrequency: "weekly",
            keywords: [
                "TMT Consulting Group blog",
                "consulting blog",
                "business in Turkmenistan",
                "forum organization Turkmenistan",
                "business representation in Turkmenistan",
            ],
        },
        {
            path: "/vacancy",
            title: "Vacancies and tenders in Turkmenistan | TMT Consulting Group",
            description:
                "Current vacancies, tenders and business opportunities from TMT Consulting Group in Ashgabat and Turkmenistan for professionals, companies and partners.",
            priority: 0.65,
            changeFrequency: "weekly",
            keywords: [
                "TMT Consulting Group vacancies",
                "vacancies in Turkmenistan",
                "vacancies in Ashgabat",
                "tenders in Turkmenistan",
                "tenders Ashgabat",
            ],
        },
    ],
    tm: [
        {
            path: "/",
            title: siteConfigByLocale.tm.title,
            description: siteConfigByLocale.tm.description,
            priority: 1,
            changeFrequency: "weekly",
            keywords: [
                "konsalting",
                "Türkmenistanda konsalting",
                "Aşgabatda konsalting",
                "Aşgabatda we Türkmenistanda biznes goldawy",
                "Türkmenistanda daşary ýurt biznesiniň wekilçiligi",
                "Aşgabatda forum guramak",
                "Türkmenistanda forum guramak",
            ],
        },
        {
            path: "/about-us",
            title: "Aşgabatda we Türkmenistanda biznes goldawy | TMT Consulting Group",
            description:
                "TMT Consulting Group daşary ýurt kompaniýalaryna, maýadarlara we hyzmatdaşlara Türkmenistan bazaryna çykmaga, wekilçilik gurmaga we biznes goldawyny almaga kömek edýär.",
            priority: 0.9,
            changeFrequency: "monthly",
            keywords: [
                "TMT Consulting Group barada",
                "Türkmenistanda konsalting kompaniýasy",
                "biznes goldawy",
                "Aşgabatda biznes goldawy",
                "Türkmenistanda daşary ýurt biznesi",
            ],
        },
        {
            path: "/tourism",
            title: "Türkmenistana syýahat we syýahatçylyk | TMT Travel",
            description:
                "TMT Travel Türkmenistana syýahat, ugurlar, turlar, myhmanlary goldamak we professional syýahat guramak boýunça Türkmenistandaky syýahatçylyk agentligidir.",
            priority: 0.8,
            changeFrequency: "monthly",
            keywords: [
                "Türkmenistana syýahat",
                "Türkmenistanda syýahatçylyk",
                "Türkmenistanda syýahatçylyk agentligi",
                "Türkmenistan syýahatçylyk agentligi",
                "TMT Travel",
                "Türkmenistana syýahatlar",
                "Türkmenistan boýunça gezelençler",
                "Aşgabat turlary",
            ],
        },
        {
            path: "/services",
            title: "Türkmenistanda web saýt döretmek we dizaýn | TMT Consulting Group",
            description:
                "Türkmenistanda dizaýn we IT hyzmatlary: web saýtlar, web-platformalar, brending, interfeýsler we biznes üçin sanly önümler.",
            priority: 0.85,
            changeFrequency: "monthly",
            keywords: [
                "web saýt döretmek",
                "Türkmenistanda web saýt döretmek",
                "saýt taýýarlatmak",
                "dizaýn hyzmatlaryny sargyt etmek",
                "Aşgabatda dizaýn hyzmatlary",
            ],
        },
        {
            path: "/contacts",
            title: "Aşgabatdaky TMT Consulting Group habarlaşmak",
            description:
                "Konsalting, biznes goldawy, kompaniýa wekilçiligi, forum we işewürlik çärelerini guramak boýunça TMT Consulting Group bilen habarlaşyň.",
            priority: 0.75,
            changeFrequency: "monthly",
            keywords: [
                "TMT Consulting Group habarlaşmak",
                "Aşgabat konsalting habarlaşmak",
                "Aşgabat konsalting kompaniýasy",
                "TMT Consulting Group Aşgabat",
            ],
        },
        {
            path: "/news",
            title: "Türkmenistan täzelikleri | biznes, wakalar we forumlar",
            description:
                "TMT Consulting Group tarapyndan Türkmenistan täzelikleri: biznes täzelikleri, Aşgabatdaky wakalar, forumlar, maýa goýumlar, konsalting we kompaniýalar üçin mümkinçilikler.",
            priority: 0.85,
            changeFrequency: "weekly",
            keywords: [
                "Türkmenistan täzelikleri",
                "Türkmenistanda täzelikler",
                "Aşgabat täzelikleri",
                "Türkmenistan biznes täzelikleri",
                "Türkmenistanda çäreler",
                "Aşgabatdaky çäreler",
                "Türkmenistanda forum guramak",
                "Türkmenistan maýa goýumlar",
                "Türkmenistanda konsalting täzelikleri",
            ],
        },
        {
            path: "/blog",
            title: "Türkmenistanda konsalting we forum guramak barada blog | TMT Consulting Group",
            description:
                "TMT Consulting Group blogy: konsalting, Aşgabatda we Türkmenistanda biznes goldawy, daşary ýurt kompaniýalarynyň wekilçiligi, forum guramak we sanly çözgütler.",
            priority: 0.7,
            changeFrequency: "weekly",
            keywords: [
                "TMT Consulting Group blog",
                "konsalting blogy",
                "Türkmenistanda biznes",
                "Türkmenistanda forum guramak",
                "Türkmenistanda biznes wekilçiligi",
            ],
        },
        {
            path: "/vacancy",
            title: "Türkmenistanda iş orunlary we tenderler | TMT Consulting Group",
            description:
                "Aşgabatda we Türkmenistanda TMT Consulting Group tarapyndan hünärmenler, kompaniýalar we hyzmatdaşlar üçin iş orunlary, tenderler we biznes mümkinçilikleri.",
            priority: 0.65,
            changeFrequency: "weekly",
            keywords: [
                "TMT Consulting Group iş orunlary",
                "Türkmenistanda iş orunlary",
                "Aşgabatda iş orunlary",
                "Türkmenistanda tenderler",
                "Aşgabat tenderler",
            ],
        },
    ],
};

export function getSiteConfig(locale: Locale = defaultLocale) {
    return siteConfigByLocale[locale];
}

export function getSeoKeywords(locale: Locale = defaultLocale) {
    return seoKeywordsByLocale[locale];
}

export function getSeoRoutes(locale: Locale = defaultLocale) {
    return seoRoutesByLocale[locale];
}

export function getSeoRoute(path: string, locale: Locale = defaultLocale) {
    return getSeoRoutes(locale).find((route) => route.path === path);
}

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

export function getSiteJsonLd(locale: Locale = defaultLocale) {
    const config = getSiteConfig(locale);
    const routes = getSeoRoutes(locale);
    const keywords = getSeoKeywords(locale);

    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": ["Organization", "ProfessionalService"],
                "@id": `${config.url}/#organization`,
                name: config.name,
                legalName: config.name,
                alternateName: config.shortName,
                slogan:
                    locale === "en"
                        ? "A bridge between capital and opportunity"
                        : locale === "tm"
                          ? "Maýa bilen mümkinçilikleriň arasyndaky köpri"
                          : "Мост между капиталом и возможностью",
                url: config.url,
                logo: absoluteUrl("/images/logo.png"),
                image: absoluteUrl("/images/logo.png"),
                description: config.description,
                email: config.email,
                telephone: config.phone,
                address: {
                    "@type": "PostalAddress",
                    ...config.address,
                },
                geo: {
                    "@type": "GeoCoordinates",
                    latitude: config.geo.latitude,
                    longitude: config.geo.longitude,
                },
                sameAs: config.socialLinks,
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
                knowsAbout: keywords,
                contactPoint: [
                    {
                        "@type": "ContactPoint",
                        telephone: config.phone,
                        email: config.email,
                        contactType: "customer service",
                        areaServed: "TM",
                        availableLanguage: ["Russian", "English", "Turkmen"],
                    },
                ],
            },
            {
                "@type": "WebSite",
                "@id": `${config.url}/#website`,
                url: config.url,
                name: config.name,
                description: config.description,
                inLanguage: config.language,
                publisher: {
                    "@id": `${config.url}/#organization`,
                },
                hasPart: routes.map((route) => ({
                    "@id": `${absoluteUrl(withLocalePath(route.path, locale))}#webpage`,
                })),
            },
            ...routes.map((route) => ({
                "@type": "WebPage",
                "@id": `${absoluteUrl(withLocalePath(route.path, locale))}#webpage`,
                url: absoluteUrl(withLocalePath(route.path, locale)),
                name: route.title,
                description: route.description,
                inLanguage: config.language,
                isPartOf: {
                    "@id": `${config.url}/#website`,
                },
                about: {
                    "@id": `${config.url}/#organization`,
                },
                primaryImageOfPage: {
                    "@type": "ImageObject",
                    url: absoluteUrl("/images/logo.png"),
                },
            })),
        ],
    };
}

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
