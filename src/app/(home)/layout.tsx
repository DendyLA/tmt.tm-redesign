import Footer from "@/component/layout/Footer/Footer";
import SiteStructuredData from "@/component/seo/SiteStructuredData";

import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { avenir, manrope } from "@/lib/fonts/fonts";
import { createPageMetadata } from "@/lib/seo/metadata";
import { htmlLangByLocale } from "@/lib/i18n/config";
import { getRequestLocale } from "@/lib/i18n/server";
import { getSeoRoutes } from "@/lib/seo/site";
import "../globals.css";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getRequestLocale();
    const homeRoute = getSeoRoutes(locale)[0];

    return createPageMetadata({ ...homeRoute, locale });
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getRequestLocale();

    return (
        <html
            lang={htmlLangByLocale[locale]}
            className={`${manrope.variable} ${avenir.variable} h-full antialiased`}
        >
            <body className="flex min-h-full flex-col">
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-G1TKRNQ12Z"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-G1TKRNQ12Z');
                    `}
                </Script>
                <SiteStructuredData />
                {children}
                <Footer />
            </body>
        </html>
    );
}
