import getServices from "@/services/service/service.service";
import getTours from "@/services/tours/tours.service";
import type { Project } from "@/services/projects/projects.types";
import {
    getProjectDescription,
    getProjectTitle,
} from "@/services/projects/projects.utils";
import type { Tenders, TendersData } from "@/services/tenders/tenders.types";
import type { Vacancy, VacancyData } from "@/services/vacancy/vacancy.types";
import {
    defaultLocale,
    getApiLocale,
    type Locale,
    withLocalePath,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";
import { stripHtml, truncateText } from "@/lib/seo/metadata";
import {
    absoluteMediaUrl,
    absoluteUrl,
    getSeoRoute,
    getSiteConfig,
    siteConfig,
} from "@/lib/seo/site";

import { JsonLdScript } from "./SiteStructuredData";

type ProjectJsonLdProps = {
    project: Project | Project[] | null;
    slug: string;
    locale?: Locale;
};

type ProjectLike = Project & {
    translation?: {
        title?: string | null;
        description?: string | null;
    } | null;
};

type VacancyJsonLdProps = {
    vacancy: VacancyData | null;
    slug: string;
    locale?: Locale;
};

type VacancyListingsJsonLdProps = {
    vacancies: Vacancy | null;
    tenders: Tenders | null;
    locale?: Locale;
};

type TenderJsonLdProps = {
    tender: TendersData | null;
    slug: string;
    locale?: Locale;
};

const organizationRef = {
    "@id": `${siteConfig.url}/#organization`,
};

export async function ContactPageJsonLd() {
    const locale = await getRequestLocale();
    const config = getSiteConfig(locale);
    const dictionary = getDictionary(locale);
    const newsRoute = getSeoRoute("/news", locale);

    return (
        <JsonLdScript
            id="contact-page-json-ld"
            data={{
                "@context": "https://schema.org",
                "@type": "ContactPage",
                "@id": `${absoluteUrl(withLocalePath("/contacts", locale))}#contact-page`,
                url: absoluteUrl(withLocalePath("/contacts", locale)),
                name: `${dictionary.sections.contacts.title} TMT Consulting Group`,
                description: config.description,
                inLanguage: config.language,
                isPartOf: {
                    "@id": `${config.url}/#website`,
                },
                about: organizationRef,
                mainEntity: organizationRef,
            }}
        />
    );
}

export async function ServicesPageJsonLd() {
    try {
        const locale = await getRequestLocale();
        const config = getSiteConfig(locale);
        const dictionary = getDictionary(locale);
        const categories = await getServices({
            company: "tmt-consulting-group",
            lang: getApiLocale(locale),
        });

        const services =
            categories?.flatMap((category) =>
                category.services.map((service) => {
                    const name = service.translation?.title ?? service.title;
                    const description =
                        service.translation?.description ??
                        service.description;

                    return {
                        "@type": "Offer",
                        itemOffered: {
                            "@type": "Service",
                            name,
                            description: stripHtml(description),
                            image: absoluteMediaUrl(service.image) ?? undefined,
                            areaServed: "Turkmenistan",
                            provider: organizationRef,
                            serviceType:
                                category.translation?.name ?? category.name,
                        },
                    };
                }),
            ) ?? [];

        return (
            <JsonLdScript
                id="services-page-json-ld"
                data={{
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "@id": `${absoluteUrl(withLocalePath("/services", locale))}#services-page`,
                    url: absoluteUrl(withLocalePath("/services", locale)),
                    name: `${dictionary.sections.services.title} TMT Consulting Group`,
                    description: dictionary.sections.services.subtitle,
                    inLanguage: config.language,
                    isPartOf: {
                        "@id": `${config.url}/#website`,
                    },
                    about: organizationRef,
                    mainEntity: {
                        "@type": "OfferCatalog",
                        name: `${dictionary.menu.services} TMT Consulting Group`,
                        itemListElement: services,
                    },
                }}
            />
        );
    } catch {
        return null;
    }
}

export async function NewsPageJsonLd() {
    const locale = await getRequestLocale();
    const config = getSiteConfig(locale);
    const dictionary = getDictionary(locale);
    const newsRoute = getSeoRoute("/news", locale);

    return (
        <JsonLdScript
            id="news-page-json-ld"
            data={{
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                "@id": `${absoluteUrl(withLocalePath("/news", locale))}#news-page`,
                url: absoluteUrl(withLocalePath("/news", locale)),
                name: dictionary.sections.news.title,
                description: dictionary.sections.news.subtitle,
                inLanguage: config.language,
                isPartOf: {
                    "@id": `${config.url}/#website`,
                },
                about: newsRoute?.keywords ?? [],
                publisher: organizationRef,
                mainEntity: {
                    "@type": "ItemList",
                    name: dictionary.sections.news.latest,
                },
            }}
        />
    );
}

export async function TourismPageJsonLd() {
    try {
        const locale = await getRequestLocale();
        const config = getSiteConfig(locale);
        const dictionary = getDictionary(locale);
        const tourismRoute = getSeoRoute("/tourism", locale);
        const response = await getTours({
            page: 1,
            limit: 20,
            lang: getApiLocale(locale),
        });

        const tours =
            response?.data
                ?.filter((tour) => tour.isActive !== false)
                .sort((a, b) => a.sortOrder - b.sortOrder)
                .map((tour, index) => ({
                    "@type": "ListItem",
                    position: index + 1,
                    item: {
                        "@type": "TouristTrip",
                        name: tour.translation?.title ?? tour.title,
                        description: stripHtml(
                            tour.translation?.description ?? tour.description,
                        ),
                        image: absoluteMediaUrl(tour.image) ?? undefined,
                        provider: organizationRef,
                        touristType: "Business and leisure travelers",
                    },
                })) ?? [];

        return (
            <JsonLdScript
                id="tourism-page-json-ld"
                data={{
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "@id": `${absoluteUrl(withLocalePath("/tourism", locale))}#tourism-page`,
                    url: absoluteUrl(withLocalePath("/tourism", locale)),
                    name: dictionary.sections.tourism.title,
                    description: dictionary.sections.tourism.subtitle,
                    inLanguage: config.language,
                    isPartOf: {
                        "@id": `${config.url}/#website`,
                    },
                    about: {
                        "@type": "TravelAgency",
                        name: "TMT Travel",
                        description: dictionary.sections.tourism.subtitle,
                        url: absoluteUrl(withLocalePath("/tourism", locale)),
                        areaServed: {
                            "@type": "Country",
                            name: "Turkmenistan",
                        },
                        knowsAbout: tourismRoute?.keywords ?? [],
                        parentOrganization: organizationRef,
                    },
                    mainEntity: {
                        "@type": "ItemList",
                        itemListElement: tours,
                    },
                }}
            />
        );
    } catch {
        return null;
    }
}

export function ProjectJsonLd({
    project,
    slug,
    locale = defaultLocale,
}: ProjectJsonLdProps) {
    const projectData = Array.isArray(project) ? project[0] : project;

    if (!projectData) {
        return null;
    }

    const typedProject = projectData as ProjectLike;
    const title = getProjectTitle(typedProject);
    const description = truncateText(
        stripHtml(getProjectDescription(typedProject)),
        220,
    );

    return (
        <JsonLdScript
            id="project-json-ld"
            data={{
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                "@id": `${absoluteUrl(withLocalePath(`/about-us/projects/${slug}`, locale))}#project`,
                url: absoluteUrl(withLocalePath(`/about-us/projects/${slug}`, locale)),
                name: title,
                headline: title,
                description,
                image: absoluteMediaUrl(typedProject.coverImage) ?? undefined,
                inLanguage: getSiteConfig(locale).language,
                creator: organizationRef,
                publisher: organizationRef,
                about: organizationRef,
            }}
        />
    );
}

export function VacancyJsonLd({
    vacancy,
    slug,
    locale = defaultLocale,
}: VacancyJsonLdProps) {
    if (!vacancy) {
        return null;
    }

    const dictionary = getDictionary(locale);
    const title = vacancy.translation?.title || dictionary.common.vacancy;
    const description = stripHtml(
        [vacancy.translation?.description, vacancy.translation?.requirements]
            .filter(Boolean)
            .join(" "),
    );

    return (
        <JsonLdScript
            id="vacancy-json-ld"
            data={{
                "@context": "https://schema.org",
                "@type": "JobPosting",
                "@id": `${absoluteUrl(withLocalePath(`/vacancy/${slug}`, locale))}#job-posting`,
                title,
                description,
                datePosted: vacancy.createdAt,
                validThrough: undefined,
                employmentType: "FULL_TIME",
                directApply: true,
                url: absoluteUrl(withLocalePath(`/vacancy/${slug}`, locale)),
                hiringOrganization: {
                    "@type": "Organization",
                    name: siteConfig.name,
                    sameAs: siteConfig.url,
                    logo: absoluteUrl("/images/logo.png"),
                },
                jobLocation: {
                    "@type": "Place",
                    address: {
                        "@type": "PostalAddress",
                        addressLocality:
                            vacancy.translation?.location || "Ashgabat",
                        addressCountry: "TM",
                    },
                },
                applicantLocationRequirements: {
                    "@type": "Country",
                    name: "Turkmenistan",
                },
                industry: "Business consulting",
                occupationalCategory: vacancy.tags
                    ?.map((item) => item.tag.name)
                    .join(", "),
            }}
        />
    );
}

export function VacancyListingsJsonLd({
    vacancies,
    tenders,
    locale = defaultLocale,
}: VacancyListingsJsonLdProps) {
    const dictionary = getDictionary(locale);
    const items = [
        ...(vacancies?.data?.map((vacancy) => ({
            "@type": "ListItem",
            item: {
                "@type": "JobPosting",
                "@id": `${absoluteUrl(withLocalePath(`/vacancy/${vacancy.slug}`, locale))}#job-posting`,
                title: vacancy.translation?.title || dictionary.common.vacancy,
                description: truncateText(
                    stripHtml(
                        [
                            vacancy.translation?.description,
                            vacancy.translation?.requirements,
                        ]
                            .filter(Boolean)
                            .join(" "),
                    ),
                    220,
                ),
                datePosted: vacancy.createdAt,
                employmentType: "FULL_TIME",
                url: absoluteUrl(withLocalePath(`/vacancy/${vacancy.slug}`, locale)),
                hiringOrganization: organizationRef,
                jobLocation: {
                    "@type": "Place",
                    address: {
                        "@type": "PostalAddress",
                        addressLocality:
                            vacancy.translation?.location || "Ashgabat",
                        addressCountry: "TM",
                    },
                },
            },
        })) ?? []),
        ...(tenders?.data?.map((tender) => ({
            "@type": "ListItem",
            item: {
                "@type": "CreativeWork",
                "@id": `${absoluteUrl(withLocalePath(`/tender/${tender.slug}`, locale))}#tender`,
                name: tender.translation?.title || dictionary.common.tender,
                description: truncateText(
                    stripHtml(tender.translation?.description),
                    220,
                ),
                datePublished: tender.createdAt,
                url: absoluteUrl(withLocalePath(`/tender/${tender.slug}`, locale)),
                publisher: organizationRef,
            },
        })) ?? []),
    ].map((item, index) => ({
        ...item,
        position: index + 1,
    }));

    if (!items.length) {
        return null;
    }

    return (
        <JsonLdScript
            id="vacancy-listings-json-ld"
            data={{
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                "@id": `${absoluteUrl(withLocalePath("/vacancy", locale))}#vacancy-listings`,
                url: absoluteUrl(withLocalePath("/vacancy", locale)),
                name: `${dictionary.sections.vacancy.title} TMT Consulting Group`,
                description: dictionary.sections.vacancy.subtitle,
                inLanguage: getSiteConfig(locale).language,
                isPartOf: {
                    "@id": `${siteConfig.url}/#website`,
                },
                about: organizationRef,
                mainEntity: {
                    "@type": "ItemList",
                    itemListElement: items,
                },
            }}
        />
    );
}

export function TenderJsonLd({
    tender,
    slug,
    locale = defaultLocale,
}: TenderJsonLdProps) {
    if (!tender) {
        return null;
    }

    const dictionary = getDictionary(locale);
    const title = tender.translation?.title || dictionary.common.tender;
    const description = truncateText(
        stripHtml(tender.translation?.description),
        220,
    );

    return (
        <JsonLdScript
            id="tender-json-ld"
            data={{
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                "@id": `${absoluteUrl(withLocalePath(`/tender/${slug}`, locale))}#tender`,
                url: absoluteUrl(withLocalePath(`/tender/${slug}`, locale)),
                name: title,
                headline: title,
                description,
                datePublished: tender.createdAt,
                inLanguage: getSiteConfig(locale).language,
                publisher: organizationRef,
                about: {
                    "@type": "Thing",
                    name: `${dictionary.common.tender} TMT Consulting Group`,
                },
            }}
        />
    );
}
