import type { Metadata } from "next";

import {
    defaultLocale,
    getLocaleAlternates,
    hreflangByLocale,
    type Locale,
    withLocalePath,
} from "@/lib/i18n/config";
import {
    absoluteUrl,
    getSeoKeywords,
    getSiteConfig,
    siteConfig,
} from "./site";

type PageMetadataOptions = {
    title: string;
    description: string;
    path?: string;
    keywords?: readonly string[];
    images?: Array<{
        url: string;
        width?: number;
        height?: number;
        alt?: string;
    }>;
    type?: "website" | "article";
    publishedTime?: string | null;
    modifiedTime?: string | null;
    locale?: Locale;
};

export function createPageMetadata({
    title,
    description,
    path = "/",
    keywords = [],
    images,
    type = "website",
    publishedTime,
    modifiedTime,
    locale = defaultLocale,
}: PageMetadataOptions): Metadata {
    const localizedPath = withLocalePath(path, locale);
    const canonical = absoluteUrl(localizedPath);
    const openGraphImages = images;
    const localizedSiteConfig = getSiteConfig(locale);
    const metadataKeywords = Array.from(
        new Set([...getSeoKeywords(locale), ...keywords]),
    );
    const languageAlternates = Object.fromEntries(
        Object.entries(getLocaleAlternates(path)).map(([key, value]) => [
            key,
            absoluteUrl(value),
        ]),
    );

    const openGraph: NonNullable<Metadata["openGraph"]> =
        type === "article"
            ? {
                  title,
                  description,
                  url: canonical,
                  siteName: localizedSiteConfig.name,
                  locale: localizedSiteConfig.locale,
                  type: "article",
                  publishedTime: publishedTime ?? undefined,
                  modifiedTime: modifiedTime ?? undefined,
                  authors: [localizedSiteConfig.name],
                  ...(openGraphImages ? { images: openGraphImages } : {}),
              }
            : {
                  title,
                  description,
                  url: canonical,
                  siteName: localizedSiteConfig.name,
                  locale: localizedSiteConfig.locale,
                  type: "website",
                  ...(openGraphImages ? { images: openGraphImages } : {}),
              };

    return {
        metadataBase: new URL(localizedSiteConfig.url),
        title,
        description,
        applicationName: localizedSiteConfig.name,
        generator: "Next.js",
        referrer: "origin-when-cross-origin",
        keywords: metadataKeywords,
        authors: [
            { name: localizedSiteConfig.name, url: localizedSiteConfig.url },
        ],
        creator: localizedSiteConfig.name,
        publisher: localizedSiteConfig.name,
        category: "business consulting",
        classification:
            "Consulting, investment consulting, web development, design, events, foreign business representation in Turkmenistan",
        alternates: {
            canonical,
            languages: {
                ...languageAlternates,
                "x-default": canonical,
            },
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        icons: {
            icon: [
                { url: "/favicon.ico", sizes: "any" },
                {
                    url: "/seo-icons/favicon-16x16.png",
                    sizes: "16x16",
                    type: "image/png",
                },
                {
                    url: "/seo-icons/favicon-32x32.png",
                    sizes: "32x32",
                    type: "image/png",
                },
                {
                    url: "/seo-icons/favicon-48x48.png",
                    sizes: "48x48",
                    type: "image/png",
                },
            ],
            shortcut: "/favicon.ico",
            apple: [
                {
                    url: "/seo-icons/apple-touch-icon.png",
                    sizes: "180x180",
                    type: "image/png",
                },
            ],
        },
        manifest: "/manifest.webmanifest",
        openGraph,
        twitter: {
            card: "summary_large_image",
            title,
            description,
            ...(openGraphImages
                ? { images: openGraphImages.map((image) => image.url) }
                : {}),
        },
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        other: {
            "geo.region": "TM-S",
            "geo.placename": "Ashgabat, Turkmenistan",
            ICBM: `${localizedSiteConfig.geo.latitude}, ${localizedSiteConfig.geo.longitude}`,
            "business:contact_data:country_name": "Turkmenistan",
            "business:contact_data:locality": "Ashgabat",
            "business:contact_data:email": localizedSiteConfig.email,
            "business:contact_data:phone_number": localizedSiteConfig.phone,
            "content-language": hreflangByLocale[locale],
        },
    };
}

export function stripHtml(value?: string | null) {
    return (value ?? "")
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

export function truncateText(value: string, maxLength = 155) {
    if (value.length <= maxLength) {
        return value;
    }

    return `${value.slice(0, maxLength - 1).trim()}…`;
}
