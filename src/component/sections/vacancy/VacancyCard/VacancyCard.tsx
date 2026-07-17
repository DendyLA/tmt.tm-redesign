import cn from "@/lib/utils/cn";
import Tag from "@/component/ui/Tag/Tag";
import { MapPin, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { VacancyTag } from "@/services/vacancy/vacancy.types";

type VacancyCardProps = {
	title: string;
	tag: VacancyTag[];
	location: string;
	salary?: string;
	descr: string;
	date: string;
	className?: string;
}


export default function VacancyCard({className, title, tag, location, salary, descr, date}: VacancyCardProps){

	return(
		<Link href='' className="block">
			<div className={cn("h-auto rounded-xl bg-white px-5 py-5 sm:px-10 sm:py-6.5 lg:h-55", className)}>
				
					<div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
						<div className="flex min-w-0 flex-col gap-2.75">
							<div className="font-second text-[22px] leading-7 font-semibold break-words text-dark sm:text-[26px] sm:leading-normal">{title}</div>
							<div className="text-primary font-main text-sm font-semibold break-words">{tag.map((item) => item.tag.name).join(", ")}</div>
						</div>
						<div className="flex flex-wrap items-start gap-2.5 sm:gap-4.25 lg:justify-end">
							<Tag className="flex max-h-none items-center gap-2"><MapPin color="#E95F28" className="w-4 shrink-0"/>{location}</Tag>
							<Tag className="max-h-none">{salary}</Tag>
							<ChevronRight color="#E95F28" className="hidden shrink-0 lg:block" />
						</div>
					</div>
					<div className="font-main mt-4 text-base font-medium leading-6 text-dark sm:mt-5 sm:text-[18px] sm:leading-normal"> {descr.length > 150
						? `${descr.slice(0, 150).split(" ").slice(0, -1).join(" ")}...`
						: descr}</div>
					<div className="font-main text-primary mt-4.5 flex justify-start text-sm font-semibold sm:justify-end">{date}</div>
			</div>
		</Link>
	)
}
