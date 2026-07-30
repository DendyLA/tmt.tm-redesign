import type { Metadata } from "next";

import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import PostAll from "@/component/features/PostAll/PostAll";
import { NewsPageJsonLd } from "@/component/seo/PageStructuredData";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getSeoRoute } from "@/lib/seo/site";

type NewsPageProps = {
    searchParams: Promise<{
        page?: string;
    }>;
};

export async function generateMetadata({
    searchParams,
}: NewsPageProps): Promise<Metadata> {
    const { page } = await searchParams;
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);
    const newsRoute = getSeoRoute("/news", locale)!;
    const pageNumber = Number(page) || 1;

    if (pageNumber <= 1) {
        return createPageMetadata({ ...newsRoute, locale });
    }

    return createPageMetadata({
        ...newsRoute,
        title: `${newsRoute.title} | ${dictionary.common.page} ${pageNumber}`,
        description: `${newsRoute.description} ${dictionary.common.page} ${pageNumber}.`,
        path: `/news?page=${pageNumber}`,
        locale,
    });
}

export default async function News({ searchParams }: NewsPageProps) {
    const { page } = await searchParams;
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);

    return (
        <div className="bg-second-gradient-bottom py-12.5">
            <NewsPageJsonLd />
            <Container>
                <div className="flex">
                    <Logo />
                </div>
                <SectionTop
                    titleTop={dictionary.sections.news.title}
                    titleBottom={dictionary.sections.news.subtitle}
                />
                <PostAll page={Number(page) || 1} type="NEWS" link="news" className="mt-10"/>
            </Container>
        </div>
    );
}
