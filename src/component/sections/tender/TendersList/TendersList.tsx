import cn from "@/lib/utils/cn";
import TenderCard from "../TenderCard/TenderCard";
import type { Tenders } from "@/services/tenders/tenders.types";
import type { Locale } from "@/lib/i18n/config";
import { hreflangByLocale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type TenderListProps = {
	tenders: Tenders | null;
    dictionary: Dictionary;
    locale: Locale;
	className?: string;
}


export default function TenderList({className, tenders, dictionary, locale}: TenderListProps){
	const data = tenders?.data;
	const meta = tenders?.meta;


	return(
		<div className={cn("flex w-full flex-col gap-6 sm:gap-10 lg:gap-15", className)}>
			{data && data.length > 0 ? (
				data.map((item) => {
					const title = item.translation?.title ?? dictionary.common.tender;
					const descr = item.translation?.description ?? "";
					const date = new Date(item.createdAt).toLocaleDateString(hreflangByLocale[locale]);
					const slug = item.slug

					return (
						<TenderCard
							key={item.id}
							title={title}
							descr={descr}
							slug={slug}
							date={date}
                            locale={locale}
						/>
					);
				})
			) : (
				<div className="py-12 text-center font-main text-[18px] font-semibold text-dark/60 sm:py-20 sm:text-[24px]">
					{dictionary.vacancy.noTenders}
				</div>
			)}
		</div>
	)
}
