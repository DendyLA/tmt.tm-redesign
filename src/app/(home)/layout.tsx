import Footer from "@/component/layout/Footer/Footer";
import SiteStructuredData from "@/component/seo/SiteStructuredData";

import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { avenir, manrope } from "@/lib/fonts/fonts";
import { createPageMetadata } from "@/lib/seo/metadata";
import { seoRoutes } from "@/lib/seo/site";
import "../globals.css";

const homeRoute = seoRoutes[0];

export const metadata: Metadata = createPageMetadata(homeRoute);

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
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
                {children}
                <Footer />
            </body>
        </html>
    );
}
