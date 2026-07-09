import type { Metadata } from "next";

import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import ProjectsGallery from "@/component/sections/aboutUs/projects/ProjectsGallery";
import { getProjectBySlug } from "@/services/projects/projects.service";
import ProjectContent from "@/component/sections/aboutUs/projects/ProjectContent";
import { absoluteMediaUrl, siteConfig } from "@/lib/seo/site";
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

    try {
        const project = (await getProjectBySlug(
            "tmt-consulting-group",
            "RU",
            slug,
        )) as unknown as ProjectSeoData;

        const title =
            project.translation?.title ||
            project.title ||
            "Проект TMT Consulting Group";
        const description = truncateText(
            stripHtml(
                project.translation?.description ||
                    project.description ||
                    "Проекты TMT Consulting Group в сфере консалтинга, мероприятий, бизнеса, дизайна и цифровых решений в Туркменистане.",
            ),
        );
        const image = absoluteMediaUrl(project.coverImage);

        return createPageMetadata({
            title: `${title} | Проекты TMT Consulting Group`,
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
            keywords: [
                title,
                "проекты TMT Consulting Group",
                "реализованные проекты в Туркменистане",
            ],
        });
    } catch {
        return createPageMetadata({
            title: `Проект TMT Consulting Group | ${siteConfig.name}`,
            description:
                "Реализованные проекты TMT Consulting Group в Туркменистане.",
            path: `/about-us/projects/${slug}`,
        });
    }
}

export default async function AboutUs({ params }: AboutUsProps) {
    const { slug } = await params;

    const project = await getProjectBySlug("tmt-consulting-group", "RU", slug);

    return (
        <div className="bg-main-gradient-top py-12.5">
            <Container>
                <div className="flex">
                    <Logo />
                </div>
                <SectionTop
                    titleTop="НАШИ ПРОЕКТЫ"
                    titleBottom="Реализованные проекты, которыми мы гордимся."
                />
                <ProjectsGallery project={project} />
                <ProjectContent project={project} />
            </Container>
        </div>
    );
}
