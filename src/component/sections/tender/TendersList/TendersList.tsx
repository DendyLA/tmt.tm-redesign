import cn from "@/lib/utils/cn";
import TenderCard from "../TenderCard/TenderCard";
import type { Tenders } from "@/services/tenders/tenders.types";

type TenderListProps = {
	tenders: Tenders | null;
	className?: string;
}


export default function TenderList({className, tenders}: TenderListProps){
	const data = tenders?.data;
	const meta = tenders?.meta;


	return(
		<div className={cn("flex w-full flex-col gap-6 sm:gap-10 lg:gap-15", className)}>
			{data && data.length > 0 ? (
				data.map((item) => {
					const title = item.translation.title;
					const descr = item.translation.description;
					const date = new Date(item.createdAt).toLocaleDateString("ru-RU");

					return (
						<TenderCard
							key={item.id}
							title={title}
							descr={descr}
							date={date}
						/>
					);
				})
			) : (
				<div className="py-12 text-center font-main text-[18px] font-semibold text-dark/60 sm:py-20 sm:text-[24px]">
					На данный момент нет тендеров.
				</div>
			)}
		</div>
	)
}
