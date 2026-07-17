import type { Metadata } from "next";

import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Container from "@/component/layout/Container/Container";
import Logo from "@/component/ui/Logo/Logo";
import ServicesList from "@/component/sections/services/ServicesList/ServicesList";
import { createPageMetadata } from "@/lib/seo/metadata";
import { seoRoutes } from "@/lib/seo/site";

const servicesRoute = seoRoutes.find((route) => route.path === "/services")!;

export const metadata: Metadata = createPageMetadata(servicesRoute);

export default function Services() {
    return (
        <div className="relative bg-[linear-gradient(to_bottom,rgba(232,101,10,.1),rgba(232,101,10,.1),rgba(255,255,255,1)_35%,rgba(255,255,255,1)_65%,rgba(23,54,166,.3))] py-8 sm:py-12.5">
            <Container>
                <div className="flex justify-center sm:justify-start">
                    <Logo />
                </div>
                <SectionTop
                    titleTop="УСЛУГИ ДИЗАЙНА И IT"
                    titleBottom="От брендинга до запуска веб-платформ: разрабатываем дизайн, создаём сайты и цифровые продукты, которые привлекают клиентов и усиливают ваш бизнес."
                    className="mt-6 max-w-full text-center sm:mt-0 sm:w-195"
                />
                <ServicesList className="mt-10 sm:mt-16 lg:mt-40" />
            </Container>
        </div>
    );
}
