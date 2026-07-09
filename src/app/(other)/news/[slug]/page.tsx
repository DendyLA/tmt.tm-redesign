import Link from "next/link";
import type { Metadata } from "next";

import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import NewsInfo from "@/component/sections/news/NewsInfo/NewsInfo";
import NewsExtra from "@/component/sections/news/NewsExtra/NewsExtra";
import NewsArticleJsonLd from "@/component/seo/NewsArticleJsonLd";
import { getPostBySlug } from "@/services/posts/posts.service";
import { absoluteMediaUrl, siteConfig } from "@/lib/seo/site";
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
            keywords: [title, "новости TMT Consulting Group"],
        });
    } catch {
        return createPageMetadata({
            title: `Новости | ${siteConfig.name}`,
            description: siteConfig.description,
            path: `/news/${slug}`,
        });
    }
}

export default async function NewsCurrent({ params }: NewsPageProps) {
    const { slug } = await params;

    return (
        <div className="bg-second-gradient-bottom py-12.5">
            <NewsArticleJsonLd slug={slug} />
            <Container>
                <div className="flex">
                    <Logo />
                </div>
                <SectionTop
                    titleTop="НОВОСТИ"
                    titleBottom="Будьте в курсе последних событий в Туркменистане."
                />
                <Link href="/news" className="mt-9 block">
                    <button className="bg-button-gradient text-primary font-main flex h-12.25 w-90 items-center justify-start rounded-[10px] px-[37px] py-3.25 text-[20px] shadow-[0px_2px_2px_rgba(0,0,0,0.25)]">
                        Вернуться к Новостям
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
