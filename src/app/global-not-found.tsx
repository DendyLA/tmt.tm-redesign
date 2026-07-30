import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";

import Container from "@/component/layout/Container/Container";
import Footer from "@/component/layout/Footer/Footer";
import Header from "@/component/layout/Header/Header";
import Logo from "@/component/ui/Logo/Logo";
import { avenir, manrope } from "@/lib/fonts/fonts";
import { htmlLangByLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";
import { siteConfig } from "@/lib/seo/site";

import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: "Page not found | TMT Consulting Group",
    description: "The requested TMT Consulting Group page was not found.",
    robots: {
        index: false,
        follow: false,
    },
};

export default async function GlobalNotFound() {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);

    return (
        <html
            lang={htmlLangByLocale[locale]}
            className={`${manrope.variable} ${avenir.variable} h-full antialiased`}
        >
            <body className="flex min-h-full flex-col">
                <div className="flex min-h-screen flex-col py-12.5">
                    <Suspense fallback={null}>
                        <Header />
                    </Suspense>
                    <main className="flex flex-1">
                        <div className="bg-main-gradient-white-bottom flex flex-1">
                            <Container>
                                <div className="flex">
                                    <Logo />
                                </div>
                                <div className="flex flex-col items-center justify-center gap-19.75 py-30">
                                    <Image
                                        src="/images/404.png"
                                        width={1006}
                                        height={429}
                                        alt={dictionary.notFound.title}
                                        priority
                                    />
                                    <div className="text-dark font-main text-[36px] font-bold">
                                        {dictionary.notFound.message}
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
