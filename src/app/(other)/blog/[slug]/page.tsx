import type { Metadata } from "next";

import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import BlogMain from "@/component/sections/blog/BlogMain/BlogMain";

type BlogDetailProps = {
	params : Promise<{ slug: string }>
}

export default async function BlogDetail({ params }: BlogDetailProps) {
	const {slug} = await params;

    return (
        <div className="bg-main-gradient-bottom py-12.5">
            <Container>
                <div className="flex">
                    <Logo />
                </div>
                <SectionTop
                    titleTop="БЛОГ"
                    titleBottom="Делимся опытом, идеями и актуальными новостями."
                />
				<BlogMain slug={slug}/>
            </Container>
        </div>
    );
}
