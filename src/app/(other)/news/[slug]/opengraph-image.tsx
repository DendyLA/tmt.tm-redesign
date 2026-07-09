import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { stripHtml, truncateText } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/seo/site";
import { getPostBySlug } from "@/services/posts/posts.service";

export const runtime = "nodejs";

export const alt = "Новость TMT Consulting Group";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

type ImageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function Image({ params }: ImageProps) {
    const { slug } = await params;
    const fontData = await readFile(
        join(process.cwd(), "public/fonts/Manrope-VariableFont.ttf"),
    );

    let title = "Новости TMT Consulting Group";
    let description = siteConfig.description;

    try {
        const post = await getPostBySlug({ slug, lang: "RU" });

        title = post.translation?.title || post.title || title;
        description = truncateText(
            stripHtml(
                post.translation?.excerpt ||
                    post.excerpt ||
                    post.translation?.content ||
                    post.content ||
                    description,
            ),
            180,
        );
    } catch {
        description =
            "Новости бизнеса, инвестиций и мероприятий в Туркменистане.";
    }

    return new ImageResponse(
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "#f8f9fa",
                color: "#1e2f5a",
                fontFamily: "Manrope",
                padding: "64px 72px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 26,
                    fontWeight: 700,
                    color: "#51618f",
                }}
            >
                <span>{siteConfig.name}</span>
                <span>Новости</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                    style={{
                        fontSize: 66,
                        lineHeight: 1.08,
                        fontWeight: 800,
                        letterSpacing: 0,
                        maxWidth: 1040,
                    }}
                >
                    {title}
                </div>
                <div
                    style={{
                        marginTop: 28,
                        fontSize: 30,
                        lineHeight: 1.35,
                        color: "#26324f",
                        maxWidth: 980,
                    }}
                >
                    {description}
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 24,
                    color: "#51618f",
                }}
            >
                <span>Консалтинг в Туркменистане</span>
                <span>tmt.tm</span>
            </div>
        </div>,
        {
            ...size,
            fonts: [
                {
                    name: "Manrope",
                    data: fontData,
                    style: "normal",
                    weight: 400,
                },
            ],
        },
    );
}
