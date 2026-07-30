import type { Metadata } from "next";

import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Container from "@/component/layout/Container/Container";
import Logo from "@/component/ui/Logo/Logo";
import ServicesList from "@/component/sections/services/ServicesList/ServicesList";
import { ServicesPageJsonLd } from "@/component/seo/PageStructuredData";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getSeoRoute } from "@/lib/seo/site";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getRequestLocale();
    const servicesRoute = getSeoRoute("/services", locale)!;

    return createPageMetadata({ ...servicesRoute, locale });
}

export default async function Services() {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);

    return (
        <div className="relative bg-[linear-gradient(to_bottom,rgba(232,101,10,.1),rgba(232,101,10,.1),rgba(255,255,255,1)_35%,rgba(255,255,255,1)_65%,rgba(23,54,166,.3))] py-8 sm:py-12.5">
            <ServicesPageJsonLd />
            <Container>
                <div className="flex justify-center sm:justify-start">
                    <Logo />
                </div>
                <SectionTop
                    titleTop={dictionary.sections.services.title}
                    titleBottom={dictionary.sections.services.subtitle}
                    className="mt-6 max-w-full text-center sm:mt-0 sm:w-195"
                />
                <ServicesList className="mt-10 sm:mt-16 lg:mt-40" />
            </Container>
        </div>
    );
}
