import { getPostBySlug } from "@/services/posts/posts.service";
import { absoluteMediaUrl, absoluteUrl, siteConfig } from "@/lib/seo/site";
import { stripHtml, truncateText } from "@/lib/seo/metadata";

import { JsonLdScript } from "./SiteStructuredData";

type NewsArticleJsonLdProps = {
    slug: string;
    postType?: "NEWS" | "BLOG";
};

export default async function NewsArticleJsonLd({
    slug,
    postType = "NEWS",
}: NewsArticleJsonLdProps) {
    let jsonLd: Record<string, unknown>;
    const basePath = postType === "BLOG" ? "/blog" : "/news";
    const schemaType = postType === "BLOG" ? "BlogPosting" : "NewsArticle";

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
        const image =
            absoluteMediaUrl(
                post.translation?.coverMedia?.url ||
                    post.coverMedia?.url ||
                    post.translation?.coverImageUrl ||
                    post.coverImageUrl,
            ) || absoluteUrl("/images/news-placeholder.png");

        jsonLd = {
            "@context": "https://schema.org",
            "@type": schemaType,
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": absoluteUrl(`${basePath}/${slug}`),
            },
            headline: title,
            description,
            image: [image],
            datePublished: post.publishedAt || post.createdAt,
            dateModified: post.updatedAt || post.publishedAt,
            inLanguage: siteConfig.language,
            author: {
                "@type": "Organization",
                name: siteConfig.name,
                url: siteConfig.url,
            },
            publisher: {
                "@id": `${siteConfig.url}/#organization`,
            },
        };
    } catch {
        return null;
    }

    return (
        <JsonLdScript
            id={`${postType.toLowerCase()}-article-json-ld`}
            data={jsonLd}
        />
    );
}
