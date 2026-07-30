import cn from "@/lib/utils/cn"
import Image from "next/image";
import { getTenderBySlug } from "@/services/tenders/tenders.service";
import Tag from "@/component/ui/Tag/Tag"
import { MapPin, Minus } from "lucide-react"
import {
    getApiLocale,
    hreflangByLocale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";


type VacancyInfoProps = {
	slug: string;
	className?: string;
} 

export default async function TenderInfo({ className, slug }: VacancyInfoProps){
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);
	const tender = await getTenderBySlug({slug, locale: getApiLocale(locale)} )
	const date = tender?.createdAt
		? new Date(tender.createdAt).toLocaleDateString(hreflangByLocale[locale])
		: "";

	return(
		<div className={cn("flex flex-col gap-3", className)}>
			<div className="border border-dark bg-white rounded-xl shadow-[0_6px_4px_rgba(0,0,0,0.15)] py-9 px-11.5">
				<div className="flex justify-end items-center">
					<div className="font-main text-dark mt-4.5 flex justify-start text-sm font-semibold sm:justify-end">{date}</div>
				</div>
				<h1 className="text-dark font-bold font-main text-[30px]">{tender?.translation?.title ?? dictionary.common.tender}</h1>
				
				<div className="mt-6 font-main font-medium text-[18px] text-justify">{ tender?.translation?.description }</div>
			</div>
		</div>
	)
}
