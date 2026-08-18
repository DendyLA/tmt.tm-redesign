import type { Metadata } from "next";
import { Suspense } from "react";
import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import VacancyMain from "@/component/sections/vacancy/VacancyMain/VacancyMain";
import { getVacancies } from "@/services/vacancy/vacancy.service";
import { getTenders } from "@/services/tenders/tenders.service";
import { getTags } from "@/services/tags/tags.service";
import { VacancyListingsJsonLd } from "@/component/seo/PageStructuredData";
import { getApiLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getSeoRoute } from "@/lib/seo/site";
import VacancyRegisterBtn from "@/component/ui/VacancyRegisterBtn/VacancyRegisterBtn";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getRequestLocale();
    const vacancyRoute = getSeoRoute("/vacancy", locale)!;

    return createPageMetadata({ ...vacancyRoute, locale });
}

type PageProps = {
    searchParams: Promise<{
        tag?: string;
		location?: string;
    }>;
};


export default async function Vacancy({ searchParams }: PageProps) {
	const { tag, location } = await searchParams;
    const locale = await getRequestLocale();
    const apiLocale = getApiLocale(locale);
    const dictionary = getDictionary(locale);

	const vacancies =  await getVacancies({ page: 1, locale: apiLocale, tag, location});
	const tenders = await getTenders({ page: 1, locale: apiLocale });
	const tags = await getTags({ scope: 'VACANCY', exact: true })

    return (
        <div className="py-8 sm:py-12.5">
            <VacancyListingsJsonLd
                vacancies={vacancies}
                tenders={tenders}
                locale={locale}
            />
            <Container>
                <div className="flex justify-between items-center sm:justify-between">
                    <Logo />
					<VacancyRegisterBtn/>
                </div>
                <SectionTop
                    titleTop={dictionary.sections.vacancy.title}
                    titleBottom={dictionary.sections.vacancy.subtitle}
                    className="mt-6 sm:mt-0"
                />
				
				
            </Container>
            <Suspense fallback={null}>
                <VacancyMain
                    vacancies={vacancies}
                    tenders={tenders}
                    tags={tags}
                    activeTagSlug={tag}
                    activeLocation={location}
                />
            </Suspense>
        </div>
    );
}
