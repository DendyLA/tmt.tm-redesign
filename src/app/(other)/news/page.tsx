import type { Metadata } from "next";

import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import PostAll from "@/component/features/PostAll/PostAll";
import { createPageMetadata } from "@/lib/seo/metadata";
import { seoRoutes } from "@/lib/seo/site";

type NewsPageProps = {
    searchParams: Promise<{
        page?: string;
    }>;
};

const newsRoute = seoRoutes.find((route) => route.path === "/news")!;

export const metadata: Metadata = createPageMetadata(newsRoute);

export default async function News({ searchParams }: NewsPageProps) {
    const { page } = await searchParams;

    return (
        <div className="bg-second-gradient-bottom py-12.5">
            <Container>
                <div className="flex">
                    <Logo />
                </div>
                <SectionTop
                    titleTop="НОВОСТИ"
                    titleBottom="Будьте в курсе последних событий в Туркменистане."
                />
                <PostAll page={Number(page) || 1} type="NEWS" link="news" className="mt-10"/>
            </Container>
        </div>
    );
}
