
import type { Metadata } from "next";

import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import TenderInfo from "@/component/sections/tender/TenderInfo/TenderInfo";
import { TenderJsonLd } from "@/component/seo/PageStructuredData";
import { getTenderBySlug } from "@/services/tenders/tenders.service";
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
		const tender = await getTenderBySlug({ slug, locale: apiLocale });
		const title = tender?.translation?.title || dictionary.common.tender;
		const description = truncateText(
			stripHtml(tender?.translation?.description),
		);

		return createPageMetadata({
			title: `${title} | ${dictionary.vacancy.tenders} TMT Consulting Group`,
			description:
				description ||
				`${dictionary.common.tender} TMT Consulting Group`,
			path: `/tender/${slug}`,
			keywords: [
				title,
				...dictionary.seo.tenderKeywords,
			],
            locale,
		});
	} catch {
		return createPageMetadata({
			title: `${dictionary.common.tender} | ${siteConfig.name}`,
			description: `${dictionary.common.tender} TMT Consulting Group`,
			path: `/tender/${slug}`,
            locale,
		});
	}
}

export default async function TenderDetail({ params }: PageProps) {
	const { slug } = await params;
    const locale = await getRequestLocale();
    const apiLocale = getApiLocale(locale);
    const dictionary = getDictionary(locale);
	const tender = await getTenderBySlug({ slug, locale: apiLocale });
	
	return (
		<div className="py-8 sm:py-12.5 bg-main-gradient-white-bottom">
			<TenderJsonLd tender={tender} slug={slug} locale={locale} />
			<Container>
				<div className="flex justify-center sm:justify-start">
					<Logo />
				</div>
				<SectionTop
					titleTop={dictionary.sections.vacancy.title}
					titleBottom={dictionary.sections.vacancy.subtitle}
					className="mt-6 sm:mt-0"
				/>
				<TenderInfo slug={slug} className="mt-8"/>
			</Container>

		</div>
	);
}
