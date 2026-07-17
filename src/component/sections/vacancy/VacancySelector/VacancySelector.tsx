"use client";
import cn from "@/lib/utils/cn";
import { Dispatch, SetStateAction } from "react";

type Tab = "Вакансии" | "Тендеры";

type VacancySelectorProps = {
	setBtn: Dispatch<SetStateAction<Tab>>;
	btn: Tab;
	className?: string;
}



export default function VacancySelector({className, btn, setBtn}: VacancySelectorProps){
	const btnList: Tab[] = ['Вакансии', 'Тендеры']

	return(
		<div className={cn("flex w-full flex-wrap items-center justify-center gap-3 sm:gap-5.5", className)}>
			{
				btnList.map((item, index) => {
					
					return(
						<div key={index} className={cn("min-w-34 cursor-pointer rounded-[10px] px-5 py-2.5 text-center font-main text-sm font-bold uppercase transition-colors duration-300 ease-in-out sm:px-9 sm:py-2.75 sm:text-[18px]",
							btn === item ? btn === 'Вакансии'? 'bg-primary text-white' : 'bg-[#C5CDEB] text-dark' : 'text-dark border border-dark ' ,
							btn === 'Вакансии' ? 'hover:bg-primary hover:text-white' : 'hover:bg-[#C5CDEB] hover:text-dark',
						)} onClick={() => setBtn(item)}>{item}</div>
					)
				})
			}
			
		</div>
	)
}
