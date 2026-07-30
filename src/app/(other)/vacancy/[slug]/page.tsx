
import type { Metadata } from "next";

import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import VacancyInfo from "@/component/sections/vacancy/VacancyInfo/VacancyInfo";
import { VacancyJsonLd } from "@/component/seo/PageStructuredData";
import { getVacancyBySlug } from "@/services/vacancy/vacancy.service";
import { getApiLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";
import {
    createPageMetadata,
    stripHtml,
    truncateText,
} from "@/lib/seo/metadata";
import { getSiteConfig } from "@/lib/seo/site";

type PageProps = {
	params: Promise<{
		slug: string;
	}>;
};

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const locale = await getRequestLocale();
    const apiLocale = getApiLocale(locale);
    const dictionary = getDictionary(locale);
    const siteConfig = getSiteConfig(locale);

    try {
        const vacancy = await getVacancyBySlug(apiLocale, slug);
        const title = vacancy?.translation?.title || dictionary.common.vacancy;
        const description = truncateText(
            stripHtml(
                [
                    vacancy?.translation?.description,
                    vacancy?.translation?.requirements,
                    vacancy?.translation?.location,
                    vacancy?.tags?.map((item) => item.tag.name).join(", "),
                ]
                    .filter(Boolean)
                    .join(" "),
            ),
        );

        return createPageMetadata({
            title: `${title} | ${dictionary.vacancy.vacancies} TMT Consulting Group`,
            description:
                description ||
                `${dictionary.common.vacancy} TMT Consulting Group`,
            path: `/vacancy/${slug}`,
            keywords: [
                title,
                ...dictionary.seo.vacancyKeywords,
                vacancy?.translation?.location || "",
                ...(vacancy?.tags?.map((item) => item.tag.name) ?? []),
            ].filter(Boolean),
            locale,
        });
    } catch {
        return createPageMetadata({
            title: `${dictionary.common.vacancy} | ${siteConfig.name}`,
            description: `${dictionary.common.vacancy} TMT Consulting Group`,
            path: `/vacancy/${slug}`,
            locale,
        });
    }
}

export default async function VacancyDetail({ params }: PageProps) {
	const { slug } = await params;
    const locale = await getRequestLocale();
    const apiLocale = getApiLocale(locale);
    const dictionary = getDictionary(locale);
	const vacancy = await getVacancyBySlug(apiLocale, slug);
	
    return (
        <div className="py-8 sm:py-12.5">
            <VacancyJsonLd vacancy={vacancy} slug={slug} locale={locale} />
            <Container>
                <div className="flex justify-center sm:justify-start">
                    <Logo />
                </div>
                <SectionTop
                    titleTop={dictionary.sections.vacancy.title}
                    titleBottom={dictionary.sections.vacancy.subtitle}
                    className="mt-6 sm:mt-0"
                />
				<VacancyInfo slug={slug} className="mt-17.5 px-50"/>
				
            </Container>

        </div>
    );
}
