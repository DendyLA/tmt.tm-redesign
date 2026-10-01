import type { MetadataRoute } from "next";

import { getPosts } from "@/services/posts/posts.service";
import {
    defaultLocale,
    getApiLocale,
    locales,
    type Locale,
    withLocalePath,
} from "@/lib/i18n/config";
import { absoluteMediaUrl, absoluteUrl, getSeoRoutes } from "@/lib/seo/site";
import type { Post } from "@/services/posts/posts.types";
import { getProject } from "@/services/projects/projects.service";
import type { Project } from "@/services/projects/projects.types";
import { getTenders } from "@/services/tenders/tenders.service";
import type { TendersData } from "@/services/tenders/tenders.types";
import { getVacancies } from "@/services/vacancy/vacancy.service";
import type { VacancyData } from "@/services/vacancy/vacancy.types";
import { featuredForumSlug } from "@/services/forums/forums.constants";

const POST_SITEMAP_PAGE_SIZE = 20;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const lastModified = new Date();
    const staticRoutes = locales.flatMap((locale) =>
        [
            ...getSeoRoutes(locale).map((route) => ({
                url: absoluteUrl(withLocalePath(route.path, locale)),
                lastModified,
                changeFrequency: route.changeFrequency,
                priority: route.priority,
            })),
            {
                url: absoluteUrl(
                    withLocalePath(`/forums/${featuredForumSlug}`, locale),
                ),
                lastModified,
                changeFrequency: "weekly" as const,
                priority: 0.72,
            },
        ],
    );

    try {
        const [
            newsRoutes,
            blogRoutes,
            projectRoutes,
            vacancyRoutes,
            tenderRoutes,
        ] = await Promise.all([
            getLocalizedRoutes((locale) =>
                getPostRoutesForSitemap(
                    "NEWS",
                    "/news",
                    0.65,
                    lastModified,
                    locale,
                ),
            ),
            getLocalizedRoutes((locale) =>
                getPostRoutesForSitemap(
                    "BLOG",
                    "/blog",
                    0.6,
                    lastModified,
                    locale,
                ),
            ),
            getLocalizedRoutes((locale) =>
                getProjectRoutesForSitemap(lastModified, locale),
            ),
            getLocalizedRoutes((locale) =>
                getVacancyRoutesForSitemap(lastModified, locale),
            ),
            getLocalizedRoutes((locale) =>
                getTenderRoutesForSitemap(lastModified, locale),
            ),
        ]);

        return [
            ...staticRoutes,
            ...newsRoutes,
            ...blogRoutes,
            ...projectRoutes,
            ...vacancyRoutes,
            ...tenderRoutes,
        ];
    } catch {
        return staticRoutes;
    }
}

async function getLocalizedRoutes(
    getRoutes: (locale: Locale) => Promise<MetadataRoute.Sitemap>,
) {
    const routes = await Promise.all(locales.map((locale) => getRoutes(locale)));
    return routes.flat();
}

async function getVacancyRoutesForSitemap(
    fallbackLastModified: Date,
    locale: Locale,
): Promise<MetadataRoute.Sitemap> {
    const vacancies = await getAllVacanciesForSitemap(locale);

    return vacancies
        .filter(
            (vacancy) =>
                vacancy.slug &&
                hasRequestedLocale(vacancy.translation?.locale, locale),
        )
        .map((vacancy) => ({
            url: absoluteUrl(withLocalePath(`/vacancy/${vacancy.slug}`, locale)),
            lastModified: vacancy.createdAt || fallbackLastModified,
            changeFrequency: "weekly" as const,
            priority: 0.55,
        }));
}

async function getTenderRoutesForSitemap(
    fallbackLastModified: Date,
    locale: Locale,
): Promise<MetadataRoute.Sitemap> {
    const tenders = await getAllTendersForSitemap(locale);

    return tenders
        .filter(
            (tender) =>
                tender.slug &&
                hasRequestedLocale(tender.translation?.locale, locale),
        )
        .map((tender) => ({
            url: absoluteUrl(withLocalePath(`/tender/${tender.slug}`, locale)),
            lastModified: tender.createdAt || fallbackLastModified,
            changeFrequency: "weekly" as const,
            priority: 0.55,
        }));
}

async function getPostRoutesForSitemap(
    type: "NEWS" | "BLOG",
    basePath: "/news" | "/blog",
    priority: number,
    fallbackLastModified: Date,
    locale: Locale,
): Promise<MetadataRoute.Sitemap> {
    const posts = await getAllPostsForSitemap(type, locale);

    return posts
        .filter(
            (post) =>
                post.slug &&
                post.status === "PUBLISHED" &&
                hasRequestedLocale(post.translation?.locale, locale),
        )
        .map((post) => {
            const image = absoluteMediaUrl(
                post.translation?.coverMedia?.url ||
                    post.coverMedia?.url ||
                    post.translation?.coverImageUrl ||
                    post.coverImageUrl,
            );

            return {
                url: absoluteUrl(withLocalePath(`${basePath}/${post.slug}`, locale)),
                lastModified:
                    post.updatedAt || post.publishedAt || fallbackLastModified,
                changeFrequency: "weekly" as const,
                priority,
                images: image ? [image] : undefined,
            };
        });
}

async function getProjectRoutesForSitemap(
    fallbackLastModified: Date,
    locale: Locale,
): Promise<MetadataRoute.Sitemap> {
    const projects = await getProject(
        "tmt-consulting-group",
        getApiLocale(locale),
    );

    return projects
        .filter(
            (project) =>
                project.slug &&
                project.status === "PUBLISHED" &&
                hasRequestedLocale(project.translation?.locale, locale),
        )
        .map((project: Project) => {
            const image = absoluteMediaUrl(project.coverImage);

            return {
                url: absoluteUrl(
                    withLocalePath(`/about-us/projects/${project.slug}`, locale),
                ),
                lastModified: fallbackLastModified,
                changeFrequency: "monthly" as const,
                priority: 0.7,
                images: image ? [image] : undefined,
            };
        });
}

async function getAllPostsForSitemap(
    type: "NEWS" | "BLOG",
    locale: Locale,
): Promise<Post[]> {
    const posts: Post[] = [];
    let page = 1;
    let pages = 1;

    do {
        const response = await getPosts({
            page,
            limit: POST_SITEMAP_PAGE_SIZE,
            lang: getApiLocale(locale),
            type,
        });

        if (!response?.data?.length) {
            break;
        }

        posts.push(...response.data);
        pages = response.meta?.pages ?? page;
        page += 1;
    } while (page <= pages);

    return posts;
}

async function getAllVacanciesForSitemap(
    locale: Locale,
): Promise<VacancyData[]> {
    const vacancies: VacancyData[] = [];
    let page = 1;
    let pages = 1;

    do {
        const response = await getVacancies({
            page,
            locale: getApiLocale(locale),
        });

        if (!response?.data?.length) {
            break;
        }

        vacancies.push(...response.data);
        pages = response.meta?.pages ?? page;
        page += 1;
    } while (page <= pages);

    return vacancies;
}

async function getAllTendersForSitemap(locale: Locale): Promise<TendersData[]> {
    const tenders: TendersData[] = [];
    let page = 1;
    let pages = 1;

    do {
        const response = await getTenders({
            page,
            locale: getApiLocale(locale),
        });

        if (!response?.data?.length) {
            break;
        }

        tenders.push(...response.data);
        pages = response.meta?.pages ?? page;
        page += 1;
    } while (page <= pages);

    return tenders;
}

function hasRequestedLocale(
    translationLocale: string | null | undefined,
    locale: Locale,
) {
    return (
        locale === defaultLocale ||
        translationLocale?.toUpperCase() === getApiLocale(locale)
    );
}
