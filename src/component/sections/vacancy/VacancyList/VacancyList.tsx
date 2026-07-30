import cn from "@/lib/utils/cn";
import VacancyCard from "../VacancyCard/VacancyCard";
import type { Vacancy } from "@/services/vacancy/vacancy.types";
import type { Locale } from "@/lib/i18n/config";
import { hreflangByLocale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type VacancyListProps = {
	vacancies: Vacancy | null;
    dictionary: Dictionary;
    locale: Locale;
	className?: string;
}


export default function VacancyList({className, vacancies, dictionary, locale}: VacancyListProps){
	const data = vacancies?.data;
	const meta = vacancies?.meta;


	return(
		<div className={cn("flex w-full flex-col gap-6 sm:gap-10 lg:gap-15", className)}>
			{data && data.length > 0 ? (
				data.map((item) => {
					const title = item.translation?.title ?? dictionary.common.vacancy;
					const tags = item.tags;
					const location = item.translation?.location ?? "";
					const salary = item.salary || "";
					const descr = item.translation?.description ?? "";
					const date = new Date(item.createdAt).toLocaleDateString(hreflangByLocale[locale]);
					const slug = item.slug;

					return (
						<VacancyCard
							key={item.id}
							title={title}
							tag={tags}
							location={location}
							salary={salary}
							descr={descr}
							date={date}
							slug={slug}
                            locale={locale}
						/>
					);
				})
			) : (
				<div className="py-12 text-center font-main text-[18px] font-semibold text-dark/60 sm:py-20 sm:text-[24px]">
					{dictionary.vacancy.noVacancies}
				</div>
			)}
		</div>
	)
}
