import type { Metadata } from "next";

import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import AboutMain from "@/component/sections/aboutUs/AboutMain";
import ProjectList from "@/component/features/ProjectList/ProjectList";
import { createPageMetadata } from "@/lib/seo/metadata";
import { seoRoutes } from "@/lib/seo/site";

const aboutRoute = seoRoutes.find((route) => route.path === "/about-us")!;

export const metadata: Metadata = createPageMetadata(aboutRoute);

export default async function AboutUs() {
    return (
        <div className="bg-main-gradient-top py-10 sm:py-12.5">
            <Container>
                <div className="flex justify-center sm:justify-start">
                    <Logo />
                </div>
                <SectionTop
                    titleTop="О НАС"
                    titleBottom="Мост между капиталом и возможностью"
                    className="mt-6 sm:mt-0"
                />
                <AboutMain className="mt-8 sm:mt-10" />
                <SectionTop
                    titleTop="НАШИ ПРОЕКТЫ"
                    titleBottom="Реализованные проекты, которыми мы гордимся."
                    className="mt-10 sm:mt-46"
                />
                <div className="mt-8 sm:mt-10">
                    <ProjectList />
                </div>
            </Container>
        </div>
    );
}
