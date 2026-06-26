import Footer from "@/component/layout/Footer/Footer";
import SiteStructuredData from "@/component/seo/SiteStructuredData";

import type { Metadata } from "next";
import { avenir, manrope } from "@/lib/fonts/fonts";
import { createPageMetadata } from "@/lib/seo/metadata";
import { seoRoutes } from "@/lib/seo/site";
import "../globals.css";

const homeRoute = seoRoutes[0];

export const metadata: Metadata = createPageMetadata(homeRoute);

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
                <SiteStructuredData />
                {children}
                <Footer />
            </body>
        </html>
    );
}
