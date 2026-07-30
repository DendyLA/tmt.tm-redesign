import Link from "next/link";
import type { Metadata } from "next";

import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import NewsInfo from "@/component/sections/news/NewsInfo/NewsInfo";
import NewsExtra from "@/component/sections/news/NewsExtra/NewsExtra";
import NewsArticleJsonLd from "@/component/seo/NewsArticleJsonLd";
import { getPostBySlug } from "@/services/posts/posts.service";
import { getApiLocale, withLocalePath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";
import { absoluteMediaUrl, getSiteConfig } from "@/lib/seo/site";
import {
    createPageMetadata,
    stripHtml,
    truncateText,
} from "@/lib/seo/metadata";

type NewsPageProps = {
    searchParams: Promise<{
        page?: string;
    }>;
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata({
    params,
}: NewsPageProps): Promise<Metadata> {
    const { slug } = await params;
    const locale = await getRequestLocale();
    const apiLocale = getApiLocale(locale);
    const dictionary = getDictionary(locale);
    const siteConfig = getSiteConfig(locale);

    try {
        const post = await getPostBySlug({ slug, lang: apiLocale });
        const title = post.translation?.title || post.title;
        const description = truncateText(
            stripHtml(
                post.translation?.excerpt ||
                    post.excerpt ||
                    post.translation?.content ||
                    post.content ||
                    siteConfig.description,
            ),
        );
        const image = absoluteMediaUrl(
            post.translation?.coverMedia?.url ||
                post.coverMedia?.url ||
                post.translation?.coverImageUrl ||
                post.coverImageUrl,
        );

        return createPageMetadata({
            title: `${title} | ${siteConfig.name}`,
            description,
            path: `/news/${slug}`,
            type: "article",
            publishedTime: post.publishedAt,
            modifiedTime: post.updatedAt,
            images: image
                ? [
                      {
                          url: image,
                          width: 1200,
                          height: 630,
                          alt:
                              post.translation?.coverAltText ||
                              post.coverAltText ||
                              title,
                      },
                  ]
                : undefined,
            keywords: [title, dictionary.seo.newsKeyword],
            locale,
        });
    } catch {
        return createPageMetadata({
            title: `${dictionary.sections.news.title} | ${siteConfig.name}`,
            description: siteConfig.description,
            path: `/news/${slug}`,
            locale,
        });
    }
}

export default async function NewsCurrent({ params }: NewsPageProps) {
    const { slug } = await params;
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);

    return (
        <div className="bg-second-gradient-bottom py-12.5">
            <NewsArticleJsonLd slug={slug} />
            <Container>
                <div className="flex">
                    <Logo />
                </div>
                <SectionTop
                    titleTop={dictionary.sections.news.title}
                    titleBottom={dictionary.sections.news.subtitle}
                />
                <Link href={withLocalePath("/news", locale)} className="mt-9 block">
                    <button className="bg-button-gradient text-primary font-main flex h-12.25 w-90 items-center justify-start rounded-[10px] px-[37px] py-3.25 text-[20px] shadow-[0px_2px_2px_rgba(0,0,0,0.25)]">
                        {dictionary.common.backToNews}
                    </button>
                </Link>
                <div className="mt-9.5 flex gap-10">
                    <NewsInfo slug={slug} className="w-[60%]" />
                    <NewsExtra className="h-max w-[40%]" />
                </div>
            </Container>
        </div>
    );
}
