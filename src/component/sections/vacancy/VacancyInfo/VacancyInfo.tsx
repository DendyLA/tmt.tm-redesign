import cn from "@/lib/utils/cn"
import Image from "next/image";
import { getVacancyBySlug } from "@/services/vacancy/vacancy.service"
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

export default async function VacancyInfo({ className, slug }: VacancyInfoProps){
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);
	const vacancy = await getVacancyBySlug(getApiLocale(locale), `${slug}`)
	const date = vacancy?.createdAt
		? new Date(vacancy.createdAt).toLocaleDateString(hreflangByLocale[locale])
		: "";

	return(
		<div className={cn("flex flex-col gap-3", className)}>
			<h1 className="text-primary font-bold font-main text-[30px]">{vacancy?.translation?.title ?? dictionary.common.vacancy}</h1>
			<h2 className="font-main font-semibold text-dark text-[18px]">{vacancy?.tags.map((item) => item.tag.name).join(", ")}</h2>
			<div className="border border-primary bg-white rounded-xl shadow-[0_6px_4px_rgba(0,0,0,0.15)] py-9 px-11.5">
				<div className="flex justify-between items-center">
					<div className="flex gap-4">
						<Tag className="flex max-h-none items-center gap-2 font-main font-semibold text-sm font-primary capitalize"><MapPin color="#E95F28" className="w-4 shrink-0"/>{vacancy?.translation?.location}</Tag>
						<Tag className="max-h-none font-main font-semibold text-base text-primary">{vacancy?.salary}</Tag>
					</div>
					<div className="font-main text-primary mt-4.5 flex justify-start text-sm font-semibold sm:justify-end">{date}</div>
				</div>
				<div className="px-7 mt-18.5 uppercase flex items-center gap-5.5 text-[26px] font-second text-primary font-semibold"><Minus color="#E95F28"/> {dictionary.vacancy.description}</div>
				<div className="mt-6 font-main font-medium text-[18px] px-20 text-justify">{ vacancy?.translation?.description }</div>
				<div className="px-7 mt-18.5 uppercase flex items-center gap-5.5 text-[26px] font-second text-primary font-semibold"><Minus color="#E95F28"/> {dictionary.vacancy.requirements}</div>
				<div className="mt-6 font-main font-medium text-[18px] px-20 text-justify">{ vacancy?.translation?.requirements }</div>
				<div className="flex justify-end mt-25">
					<a href={`mailto:${vacancy?.contactEmail}`} className=" text-primaryfont-main text-[20px] font-semibold text-primary ease-in-out transition-colors duration-300 hover:text-primary/50">{vacancy?.contactEmail}</a>
				</div>
				
			</div>
			<div className="flex justify-end "><a href={`mailto:${vacancy?.contactEmail}`} className="flex items-center gap-3 bg-primary px-4.75 py-4 mt-11.75 text-white font-bold font-main text-[18px] duration-300 ease-in-out transition-colors hover:bg-primary/90">{dictionary.common.apply}<Image src="/icons/right-white.svg" alt="arrow-right" width={23} height={29}/></a></div>
		</div>
	)
}
