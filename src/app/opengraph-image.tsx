/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { siteConfig } from "@/lib/seo/site";

export const runtime = "nodejs";

export const alt = "TMT Consulting Group — консалтинг в Туркменистане";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    const fontData = await readFile(
        join(process.cwd(), "public/fonts/Manrope-VariableFont.ttf"),
    );
    const logoData = await readFile(
        join(process.cwd(), "public/images/logo.png"),
        "base64",
    );
    const logoSrc = `data:image/png;base64,${logoData}`;

    return new ImageResponse(
        (
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
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <img src={logoSrc} width="245" height="56" alt="" />
                    <div
                        style={{
                            border: "1px solid rgba(30, 47, 90, 0.24)",
                            borderRadius: "999px",
                            padding: "12px 22px",
                            fontSize: 24,
                            fontWeight: 600,
                        }}
                    >
                        Ashgabat · Turkmenistan
                    </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                        style={{
                            fontSize: 28,
                            fontWeight: 700,
                            color: "#51618f",
                            marginBottom: 24,
                        }}
                    >
                        Консалтинг · Представительство бизнеса · Мероприятия
                    </div>
                    <div
                        style={{
                            fontSize: 78,
                            lineHeight: 1.04,
                            fontWeight: 800,
                            maxWidth: 1000,
                            letterSpacing: 0,
                        }}
                    >
                        {siteConfig.name}
                    </div>
                    <div
                        style={{
                            marginTop: 28,
                            fontSize: 34,
                            lineHeight: 1.35,
                            color: "#26324f",
                            maxWidth: 980,
                        }}
                    >
                        Консалтинг в Туркменистане, разработка сайтов и
                        дизайна, организация деловых мероприятий.
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: 25,
                        color: "#51618f",
                    }}
                >
                    <span>info@tmt.tm</span>
                    <span>tmt.tm</span>
                </div>
            </div>
        ),
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
