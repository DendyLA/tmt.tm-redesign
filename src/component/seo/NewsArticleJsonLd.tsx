import { getPostBySlug } from "@/services/posts/posts.service";
import {
    getApiLocale,
    type Locale,
    withLocalePath,
} from "@/lib/i18n/config";
import { getRequestLocale } from "@/lib/i18n/server";
import {
    absoluteMediaUrl,
    absoluteUrl,
    getSiteConfig,
} from "@/lib/seo/site";
import { stripHtml, truncateText } from "@/lib/seo/metadata";

import { JsonLdScript } from "./SiteStructuredData";

type NewsArticleJsonLdProps = {
    slug: string;
    postType?: "NEWS" | "BLOG";
    locale?: Locale;
};

export default async function NewsArticleJsonLd({
    slug,
    postType = "NEWS",
    locale: localeProp,
}: NewsArticleJsonLdProps) {
    const locale = localeProp ?? (await getRequestLocale());
    const localizedSiteConfig = getSiteConfig(locale);
    let jsonLd: Record<string, unknown>;
    const basePath = postType === "BLOG" ? "/blog" : "/news";
    const schemaType = postType === "BLOG" ? "BlogPosting" : "NewsArticle";

    try {
        const post = await getPostBySlug({
            slug,
            lang: getApiLocale(locale),
        });
        const title = post.translation?.title || post.title;
        const description = truncateText(
            stripHtml(
                post.translation?.excerpt ||
                    post.excerpt ||
                    post.translation?.content ||
                    post.content ||
                    localizedSiteConfig.description,
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
                "@id": absoluteUrl(withLocalePath(`${basePath}/${slug}`, locale)),
            },
            headline: title,
            description,
            image: [image],
            datePublished: post.publishedAt || post.createdAt,
            dateModified: post.updatedAt || post.publishedAt,
            inLanguage: localizedSiteConfig.language,
            author: {
                "@type": "Organization",
                name: localizedSiteConfig.name,
                url: localizedSiteConfig.url,
            },
            publisher: {
                "@id": `${localizedSiteConfig.url}/#organization`,
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
