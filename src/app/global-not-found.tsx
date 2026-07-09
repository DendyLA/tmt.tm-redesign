import type { Metadata } from "next";
import Image from "next/image";

import Container from "@/component/layout/Container/Container";
import Footer from "@/component/layout/Footer/Footer";
import Header from "@/component/layout/Header/Header";
import Logo from "@/component/ui/Logo/Logo";
import { avenir, manrope } from "@/lib/fonts/fonts";
import { siteConfig } from "@/lib/seo/site";

import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: "Страница не найдена | TMT Consulting Group",
    description: "Запрошенная страница TMT Consulting Group не найдена.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function GlobalNotFound() {
    return (
        <html
            lang="ru"
            className={`${manrope.variable} ${avenir.variable} h-full antialiased`}
        >
            <body className="flex min-h-full flex-col">
                <div className="flex min-h-screen flex-col py-12.5">
                    <Header />
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
                                        alt="404 image"
                                        priority
                                    />
                                    <div className="text-dark font-main text-[36px] font-bold">
                                        Мяу! Мы не смогли найти эту страницу.
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
