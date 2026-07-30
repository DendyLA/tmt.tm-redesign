import type { Metadata } from "next";

import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import BlogMain from "@/component/sections/blog/BlogMain/BlogMain";
import NewsArticleJsonLd from "@/component/seo/NewsArticleJsonLd";
import { getPostBySlug } from "@/services/posts/posts.service";
import { getApiLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";
import { absoluteMediaUrl, getSiteConfig } from "@/lib/seo/site";
import {
    createPageMetadata,
    stripHtml,
    truncateText,
} from "@/lib/seo/metadata";

type BlogDetailProps = {
	params : Promise<{ slug: string }>
}

export async function generateMetadata({
    params,
}: BlogDetailProps): Promise<Metadata> {
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
            title: `${title} | ${dictionary.seo.blogLabel} ${siteConfig.name}`,
            description,
            path: `/blog/${slug}`,
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
            keywords: [title, ...dictionary.seo.blogKeywords],
            locale,
        });
    } catch {
        return createPageMetadata({
            title: `${dictionary.sections.blog.title} | ${siteConfig.name}`,
            description: siteConfig.description,
            path: `/blog/${slug}`,
            locale,
        });
    }
}

export default async function BlogDetail({ params }: BlogDetailProps) {
	const {slug} = await params;
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);

    return (
        <div className="bg-main-gradient-bottom py-8 sm:py-12.5">
            <NewsArticleJsonLd slug={slug} postType="BLOG" />
            <Container>
                <div className="flex justify-center sm:justify-start">
                    <Logo />
                </div>
                <SectionTop
                    titleTop={dictionary.sections.blog.title}
                    titleBottom={dictionary.sections.blog.detailSubtitle}
                    className="mt-6 sm:mt-0"
                />
                <div className="mt-8 sm:mt-10">
				    <BlogMain slug={slug}/>
                </div>
            </Container>
        </div>
    );
}
