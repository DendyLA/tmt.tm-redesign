import Container from "@/component/layout/Container/Container";
import SectionLabel from "@/component/ui/SectionLabel/SectionLabel";
import SectionTitle from "@/component/ui/SectionTitle/SectionTitle";
import NewsList from "@/component/features/NewsList/NewsList";
import Button from "@/component/ui/Button/Button";
import type { News } from "@/types/news";
import Link from "next/link";

export default function News() {
    return (
        <section className="py-25">
            <Container>
                <div className="flex flex-col items-center">
                    <SectionLabel>НОВОСТИ</SectionLabel>
                    <SectionTitle
                        darkText="Что"
                        primaryText="Нового"
                        className="mt-4.5"
                    />
                    <NewsList className="mt-16" />
					<Link href={'/news'}>
						<Button className="bg-dark mt-20.5 px-10 hover:bg-[#1E2F5A]">
							Все новости
						</Button>
					</Link>
                    
                </div>
            </Container>
        </section>
    );
}
