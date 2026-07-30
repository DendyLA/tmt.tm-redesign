import type { Metadata } from "next";

import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import TourismMain from "@/component/sections/tourism/TourismMain/TourismMain";
import Tours from "@/component/sections/tourism/Tours/Tours";
import WhatsappBtn from "@/component/features/WhatsappBtn/WhatsappBtn";
import { TourismPageJsonLd } from "@/component/seo/PageStructuredData";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getSeoRoute } from "@/lib/seo/site";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getRequestLocale();
    const tourismRoute = getSeoRoute("/tourism", locale)!;

    return createPageMetadata({ ...tourismRoute, locale });
}

export default async function Tourism() {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);

    return (
        <div className="bg-second-gradient-bottom relative py-8 sm:py-12.5">
            <TourismPageJsonLd />
            <Container>
                <div className="flex justify-center sm:justify-start">
                    <Logo />
                </div>
                <SectionTop
                    titleTop={dictionary.sections.tourism.title}
                    titleBottom={dictionary.sections.tourism.subtitle}
                    className="mt-6 sm:mt-0"
                />

                <TourismMain className="mt-10 sm:mt-16 xl:mt-24.5" />
                <Tours className="mt-10 sm:mt-12.5" />
                <WhatsappBtn className="right-4 bottom-4 h-14 w-14 sm:right-8 sm:bottom-8 sm:h-16 sm:w-16 lg:right-20 lg:bottom-10 lg:h-20 lg:w-20" />
            </Container>
        </div>
    );
}
