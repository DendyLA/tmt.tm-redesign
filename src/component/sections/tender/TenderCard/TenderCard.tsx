import cn from "@/lib/utils/cn";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type TenderCardProps = {
	title: string;
	descr: string;
	date: string;
	className?: string;
}


export default function TenderCard({className, title, descr, date}: TenderCardProps){

	return(
		<Link href='' className="block">
			<div className={cn("h-auto rounded-xl bg-white px-5 py-5 sm:px-10 sm:py-6.5 lg:h-55", className)}>
				
					<div className="flex justify-between gap-4">
						<div className="flex min-w-0 flex-col gap-2.75">
							<div className="font-second text-[22px] leading-7 font-semibold break-words text-dark sm:text-[26px] sm:leading-normal">{title}</div>
						</div>
						<div className="hidden gap-4.25 lg:flex">
							<ChevronRight color="#091540" className="shrink-0" />
						</div>
					</div>
					<div className="font-main mt-4 text-base font-medium leading-6 text-dark sm:mt-5 sm:text-[18px] sm:leading-normal"> {descr.length > 150
						? `${descr.slice(0, 150).split(" ").slice(0, -1).join(" ")}...`
						: descr}</div>
					<div className="font-main mt-4.5 flex w-fit justify-start rounded-[20px] border border-[#C5CDEB] bg-[#C5CDEB]/30 px-3.25 py-1.5 text-sm font-semibold text-dark">{date}</div>
				
			</div>
		</Link>
			
	)
}
