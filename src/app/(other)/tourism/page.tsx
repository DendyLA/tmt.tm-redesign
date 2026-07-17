import type { Metadata } from "next";

import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import TourismMain from "@/component/sections/tourism/TourismMain/TourismMain";
import Tours from "@/component/sections/tourism/Tours/Tours";
import WhatsappBtn from "@/component/features/WhatsappBtn/WhatsappBtn";
import { createPageMetadata } from "@/lib/seo/metadata";
import { seoRoutes } from "@/lib/seo/site";

const tourismRoute = seoRoutes.find((route) => route.path === "/tourism")!;

export const metadata: Metadata = createPageMetadata(tourismRoute);

export default async function Tourism() {
    return (
        <div className="bg-second-gradient-bottom relative py-8 sm:py-12.5">
            <Container>
                <div className="flex justify-center sm:justify-start">
                    <Logo />
                </div>
                <SectionTop
                    titleTop="ТУРИЗМ"
                    titleBottom="Исследуйте Туркменистан с нами."
                    className="mt-6 sm:mt-0"
                />

                <TourismMain className="mt-10 sm:mt-16 xl:mt-24.5" />
                <Tours className="mt-10 sm:mt-12.5" />
                <WhatsappBtn className="right-4 bottom-4 h-14 w-14 sm:right-8 sm:bottom-8 sm:h-16 sm:w-16 lg:right-20 lg:bottom-10 lg:h-20 lg:w-20" />
            </Container>
        </div>
    );
}
