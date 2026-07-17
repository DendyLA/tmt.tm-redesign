import type { Metadata } from "next";

import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import PostAll from "@/component/features/PostAll/PostAll";
import { createPageMetadata } from "@/lib/seo/metadata";
import { seoRoutes } from "@/lib/seo/site";

const blogRoute = seoRoutes.find((route) => route.path === "/blog")!;

export const metadata: Metadata = createPageMetadata(blogRoute);

type BlogPageProps = {
    searchParams: Promise<{
        page?: string;
    }>;
};

export default async function Blog({ searchParams }: BlogPageProps) {
    const { page } = await searchParams;

    return (
        <div className="bg-second-gradient-bottom py-8 sm:py-12.5">
            <Container>
                <div className="flex justify-center sm:justify-start">
                    <Logo />
                </div>
                <SectionTop
                    titleTop="БЛОГ"
                    titleBottom="Материалы о бизнесе, консалтинге и событиях в Туркменистане."
                    className="mt-6 sm:mt-0"
                />
                <div className="mt-8 sm:mt-10">
                    <PostAll
                        page={Number(page) || 1}
                        type="BLOG"
                        link="blog"
                    />
                </div>
            </Container>
        </div>
    );
}
