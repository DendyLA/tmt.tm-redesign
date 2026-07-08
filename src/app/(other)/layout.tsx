import Header from "@/component/layout/Header/Header";
import Footer from "@/component/layout/Footer/Footer";
import SiteStructuredData from "@/component/seo/SiteStructuredData";

import type { Metadata } from "next";
import Script from "next/script";
import { avenir, manrope } from "@/lib/fonts/fonts";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/seo/site";
import "../globals.css";

export const metadata: Metadata = createPageMetadata({
    title: siteConfig.title,
    description: siteConfig.description,
    path: "/",
});

export default function OtherLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="ru"
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
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
