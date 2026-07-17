import type { Metadata } from "next";

import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import BlogMain from "@/component/sections/blog/BlogMain/BlogMain";
import NewsArticleJsonLd from "@/component/seo/NewsArticleJsonLd";
import { getPostBySlug } from "@/services/posts/posts.service";
import { absoluteMediaUrl, siteConfig } from "@/lib/seo/site";
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

    try {
        const post = await getPostBySlug({ slug, lang: "RU" });
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
            title: `${title} | Блог ${siteConfig.name}`,
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
            keywords: [
                title,
                "блог TMT Consulting Group",
                "консалтинг в Туркменистане",
                "сопровождение бизнеса в Ашхабаде",
            ],
        });
    } catch {
        return createPageMetadata({
            title: `Блог | ${siteConfig.name}`,
            description: siteConfig.description,
            path: `/blog/${slug}`,
        });
    }
}

export default async function BlogDetail({ params }: BlogDetailProps) {
	const {slug} = await params;

    return (
        <div className="bg-main-gradient-bottom py-8 sm:py-12.5">
            <NewsArticleJsonLd slug={slug} postType="BLOG" />
            <Container>
                <div className="flex justify-center sm:justify-start">
                    <Logo />
                </div>
                <SectionTop
                    titleTop="БЛОГ"
                    titleBottom="Делимся опытом, идеями и актуальными новостями."
                    className="mt-6 sm:mt-0"
                />
                <div className="mt-8 sm:mt-10">
				    <BlogMain slug={slug}/>
                </div>
            </Container>
        </div>
    );
}
