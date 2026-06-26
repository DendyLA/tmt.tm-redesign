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
		<div className="py-12.5 bg-second-gradient-bottom">
			<NewsArticleJsonLd slug={slug} />
			<Container>
				<div className="flex">
					<Logo />
				</div>
				<SectionTop titleTop="НОВОСТИ" titleBottom="Будьте в курсе последних событий в Туркменистане."/>
				<Link href='/news' className="mt-9 block"><button className="flex justify-start items-center bg-button-gradient h-12.25 w-90 rounded-[10px] shadow-[0px_2px_2px_rgba(0,0,0,0.25)] text-primary font-main text-[20px] px-[37px] py-3.25">Вернуться к Новостям</button></Link>
				<div className="flex gap-10 mt-9.5 ">
					<NewsInfo slug={slug} className="w-[60%]"/>
					<NewsExtra className="w-[40%] h-max"/>
				</div>

			</Container>
		</div>
	);
}
