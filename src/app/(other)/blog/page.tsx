import type { Metadata } from "next";

import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import PostAll from "@/component/features/PostAll/PostAll";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getSeoRoute } from "@/lib/seo/site";

type BlogPageProps = {
    searchParams: Promise<{
        page?: string;
    }>;
};

export async function generateMetadata({
    searchParams,
}: BlogPageProps): Promise<Metadata> {
    const { page } = await searchParams;
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);
    const blogRoute = getSeoRoute("/blog", locale)!;
    const pageNumber = Number(page) || 1;

    if (pageNumber <= 1) {
        return createPageMetadata({ ...blogRoute, locale });
    }

    return createPageMetadata({
        ...blogRoute,
        title: `${blogRoute.title} | ${dictionary.common.page} ${pageNumber}`,
        description: `${blogRoute.description} ${dictionary.common.page} ${pageNumber}.`,
        path: `/blog?page=${pageNumber}`,
        locale,
    });
}

export default async function Blog({ searchParams }: BlogPageProps) {
    const { page } = await searchParams;
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);

    return (
        <div className="bg-second-gradient-bottom py-8 sm:py-12.5">
            <Container>
                <div className="flex justify-center sm:justify-start">
                    <Logo />
                </div>
                <SectionTop
                    titleTop={dictionary.sections.blog.title}
                    titleBottom={dictionary.sections.blog.subtitle}
                    className="mt-6 sm:mt-0"
                />
                <div className="mt-8 sm:mt-10">
                    <PostAll
                        page={Number(page) || 1}
                        type="BLOG"
                        link="blog"
                    />
                </div>
            </Container>
        </div>
    );
}
