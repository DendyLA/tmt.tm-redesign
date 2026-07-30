import type { Metadata } from "next";

import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import ProjectsGallery from "@/component/sections/aboutUs/projects/ProjectsGallery";
import { getProjectBySlug } from "@/services/projects/projects.service";
import ProjectContent from "@/component/sections/aboutUs/projects/ProjectContent";
import { ProjectJsonLd } from "@/component/seo/PageStructuredData";
import { getApiLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";
import { absoluteMediaUrl, getSiteConfig } from "@/lib/seo/site";
import {
    createPageMetadata,
    stripHtml,
    truncateText,
} from "@/lib/seo/metadata";

type AboutUsProps = {
    params: Promise<{
        slug: string;
    }>;
};

type ProjectSeoData = {
    title?: string;
    description?: string | null;
    coverImage?: string | null;
    translation?: {
        title?: string | null;
        description?: string | null;
    } | null;
};

export async function generateMetadata({
    params,
}: AboutUsProps): Promise<Metadata> {
    const { slug } = await params;
    const locale = await getRequestLocale();
    const apiLocale = getApiLocale(locale);
    const dictionary = getDictionary(locale);
    const siteConfig = getSiteConfig(locale);

    try {
        const project = (await getProjectBySlug(
            "tmt-consulting-group",
            apiLocale,
            slug,
        )) as unknown as ProjectSeoData;

        const title =
            project.translation?.title ||
            project.title ||
            `${dictionary.sections.about.projectsTitle} TMT Consulting Group`;
        const description = truncateText(
            stripHtml(
                project.translation?.description ||
                    project.description ||
                    dictionary.sections.about.projectsSubtitle,
            ),
        );
        const image = absoluteMediaUrl(project.coverImage);

        return createPageMetadata({
            title: `${title} | ${dictionary.seo.projectsLabel} TMT Consulting Group`,
            description,
            path: `/about-us/projects/${slug}`,
            images: image
                ? [
                      {
                          url: image,
                          width: 1200,
                          height: 630,
                          alt: title,
                      },
                  ]
                : undefined,
            keywords: [title, ...dictionary.seo.projectKeywords],
            locale,
        });
    } catch {
        return createPageMetadata({
            title: `${dictionary.sections.about.projectsTitle} | ${siteConfig.name}`,
            description: dictionary.sections.about.projectsSubtitle,
            path: `/about-us/projects/${slug}`,
            locale,
        });
    }
}

export default async function AboutUs({ params }: AboutUsProps) {
    const { slug } = await params;
    const locale = await getRequestLocale();
    const apiLocale = getApiLocale(locale);
    const dictionary = getDictionary(locale);

    const project = await getProjectBySlug(
        "tmt-consulting-group",
        apiLocale,
        slug,
    );

    return (
        <div className="bg-main-gradient-top py-12.5">
            <ProjectJsonLd project={project} slug={slug} locale={locale} />
            <Container>
                <div className="flex">
                    <Logo />
                </div>
                <SectionTop
                    titleTop={dictionary.sections.about.projectsTitle}
                    titleBottom={dictionary.sections.about.projectsSubtitle}
                />
                <ProjectsGallery project={project} locale={locale} />
                <ProjectContent project={project} />
            </Container>
        </div>
    );
}
