"use client";
import cn from "@/lib/utils/cn";
import { Dispatch, SetStateAction } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { VacancyTab } from "../VacancyMain/VacancyMain";

type VacancySelectorProps = {
	setBtn: Dispatch<SetStateAction<VacancyTab>>;
	btn: VacancyTab;
    dictionary: Dictionary;
	className?: string;
}



export default function VacancySelector({className, btn, setBtn, dictionary}: VacancySelectorProps){
	const btnList: Array<{ label: string; value: VacancyTab }> = [
        { label: dictionary.vacancy.vacancies, value: "vacancies" },
        { label: dictionary.vacancy.tenders, value: "tenders" },
    ];

	return(
		<div className={cn("flex w-full flex-wrap items-center justify-center gap-3 sm:gap-5.5", className)}>
			{
				btnList.map((item, index) => {
					
					return(
						<div key={index} className={cn("min-w-34 cursor-pointer rounded-[10px] px-5 py-2.5 text-center font-main text-sm font-bold uppercase transition-colors duration-300 ease-in-out sm:px-9 sm:py-2.75 sm:text-[18px]",
							btn === item.value ? btn === 'vacancies'? 'bg-primary text-white' : 'bg-[#C5CDEB] text-dark' : 'text-dark border border-dark ' ,
							btn === 'vacancies' ? 'hover:bg-primary hover:text-white' : 'hover:bg-[#C5CDEB] hover:text-dark',
						)} onClick={() => setBtn(item.value)}>{item.label}</div>
					)
				})
			}
			
		</div>
	)
}
