import type { Metadata } from "next";

import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import AboutMain from "@/component/sections/aboutUs/AboutMain";
import CertificatesSection from "@/component/sections/aboutUs/CertificatesSection";
import ProjectList from "@/component/features/ProjectList/ProjectList";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getSeoRoute } from "@/lib/seo/site";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getRequestLocale();
    const aboutRoute = getSeoRoute("/about-us", locale)!;

    return createPageMetadata({ ...aboutRoute, locale });
}

export default async function AboutUs() {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);

    return (
        <div className="bg-main-gradient-top py-10 sm:py-12.5">
            <Container>
                <div className="flex justify-center sm:justify-start">
                    <Logo />
                </div>
                <SectionTop
                    titleTop={dictionary.sections.about.title}
                    titleBottom={dictionary.sections.about.subtitle}
                    className="mt-6 sm:mt-0"
                />
                <AboutMain className="mt-8 sm:mt-10" />
                <SectionTop
                    titleTop={dictionary.sections.about.projectsTitle}
                    titleBottom={dictionary.sections.about.projectsSubtitle}
                    className="mt-10 sm:mt-46"
                />
                <div className="mt-8 sm:mt-10">
                    <ProjectList />
                </div>
                <CertificatesSection
                    titleTop={dictionary.sections.about.certificatesTitle}
                    titleBottom={dictionary.sections.about.certificatesSubtitle}
                />


            </Container>
        </div>
    );
}
