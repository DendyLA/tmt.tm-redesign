import type { Metadata } from "next";
import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import VacancyMain from "@/component/sections/vacancy/VacancyMain/VacancyMain";
import { getVacancies } from "@/services/vacancy/vacancy.service";
import { getTenders } from "@/services/tenders/tenders.service";
import { getTags } from "@/services/tags/tags.service";
import { createPageMetadata } from "@/lib/seo/metadata";
import { seoRoutes } from "@/lib/seo/site";

const vacancyRoute = seoRoutes.find((route) => route.path === "/vacancy")!;

export const metadata: Metadata = createPageMetadata(vacancyRoute);

type PageProps = {
    searchParams: Promise<{
        tag?: string;
		location?: string;
    }>;
};


export default async function Vacancy({ searchParams }: PageProps) {
	const { tag, location } = await searchParams;

	const vacancies =  await getVacancies({ page: 1, locale: 'RU', tag, location});
	const tenders = await getTenders({ page: 1, locale: 'RU' });
	const tags = await getTags({ scope: 'VACANCY', exact: true })

    return (
        <div className="py-8 sm:py-12.5">
            <Container>
                <div className="flex justify-center sm:justify-start">
                    <Logo />
                </div>
                <SectionTop
                    titleTop="ВАКАНСИИ и тендеры"
                    titleBottom="Открытые вакансии, тендеры и новые возможности для развития."
                    className="mt-6 sm:mt-0"
                />
            </Container>
			<VacancyMain vacancies={vacancies} tenders={tenders} tags={tags}/>
        </div>
    );
}
