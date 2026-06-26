import type { Metadata } from "next";

import { absoluteUrl, seoKeywords, siteConfig } from "./site";

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
}: PageMetadataOptions): Metadata {
    const canonical = absoluteUrl(path);
    const openGraphImages = images ?? [
        {
            url: "/opengraph-image",
            width: 1200,
            height: 630,
            alt: `${siteConfig.name} — консалтинг в Туркменистане`,
        },
    ];

    const openGraph: NonNullable<Metadata["openGraph"]> =
        type === "article"
            ? {
                  title,
                  description,
                  url: canonical,
                  siteName: siteConfig.name,
                  locale: siteConfig.locale,
                  type: "article",
                  publishedTime: publishedTime ?? undefined,
                  modifiedTime: modifiedTime ?? undefined,
                  authors: [siteConfig.name],
                  images: openGraphImages,
              }
            : {
                  title,
                  description,
                  url: canonical,
                  siteName: siteConfig.name,
                  locale: siteConfig.locale,
                  type: "website",
                  images: openGraphImages,
              };

    return {
        metadataBase: new URL(siteConfig.url),
        title,
        description,
        applicationName: siteConfig.name,
        generator: "Next.js",
        referrer: "origin-when-cross-origin",
        keywords: [...seoKeywords, ...keywords],
        authors: [{ name: siteConfig.name, url: siteConfig.url }],
        creator: siteConfig.name,
        publisher: siteConfig.name,
        category: "business consulting",
        classification:
            "Consulting, investment consulting, web development, design, events, foreign business representation in Turkmenistan",
        alternates: {
            canonical,
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
            images: openGraphImages.map((image) => image.url),
        },
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        other: {
            "geo.region": "TM-S",
            "geo.placename": "Ashgabat, Turkmenistan",
            ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
            "business:contact_data:country_name": "Turkmenistan",
            "business:contact_data:locality": "Ashgabat",
            "business:contact_data:email": siteConfig.email,
            "business:contact_data:phone_number": siteConfig.phone,
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
