import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import NewsAll from "@/component/sections/news/NewsAll/NewsAll";

type NewsPageProps = {
    searchParams: Promise<{
        page?: string;
    }>;
};

export default async function Home({ searchParams }: NewsPageProps) {
    const { page } = await searchParams;

    return (
        <div className="py-12.5 bg-second-gradient-bottom">
            <Container>
                <div className="flex">
                    <Logo />
                </div>
                <SectionTop />
                <NewsAll page={Number(page) || 1} />
            </Container>
        </div>
    );
}
