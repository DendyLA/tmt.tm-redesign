import Link from "next/link";

import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import NewsInfo from "@/component/sections/news/NewsInfo/NewsInfo";
import NewsExtra from "@/component/sections/news/NewsExtra/NewsExtra";

type NewsPageProps = {
	searchParams: Promise<{
		page?: string;
	}>;
	params: Promise<{
        slug: string;
    }>;
};

export default async function NewsCurrent({ searchParams, params }: NewsPageProps) {
	const { slug } = await params;

	return (
		<div className="py-12.5 bg-second-gradient-bottom">
			<Container>
				<div className="flex">
					<Logo />
				</div>
				<SectionTop titleTop="НОВОСТИ" titleBottom="Будьте в курсе последних событий в Туркменистане."/>
				<Link href='/news' className="mt-9 block"><button className="flex justify-start items-center bg-button-gradient h-12.25 w-90 rounded-[10px] shadow-[0px_2px_2px_rgba(0,0,0,0.25)] text-primary font-main text-[20px] px-[37px] py-3.25">Вернуться к Новостям</button></Link>
				<div className="flex gap-10 mt-9.5 ">
					<NewsInfo slug={slug} className="w-[60%]"/>
					<NewsExtra className="w-[40%] h-max"/>
				</div>

			</Container>
		</div>
	);
}
