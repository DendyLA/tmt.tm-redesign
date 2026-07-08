import cn from "@/lib/utils/cn"
import getTours from "@/services/tours/tours.service"
import RichText from "@/component/ui/RichText/RichText";
import Image from "next/image";	
import { mediaUrl } from "@/constants/constants";
import InfoCard from "@/component/ui/InfoCard/InfoCard";

type ToursProps = {
	className?: string;
}


export default async function Tours({className}: ToursProps){
	const res = await getTours({page: 1, limit: 5, lang: 'RU'});
	const tours = res?.data;
	const meta = res?.meta;

	const sortedTours = tours? [...tours].sort(
		(a, b) => a.sortOrder - b.sortOrder
	): [];


	return(
		<section className={cn('', className)}>
			<h3 className="text-primary font-main font-bold text-[32px] text-center">НАШИ ТУРЫ:</h3>

			<div className="flex flex-col gap-23 mt-10">
				{
					sortedTours.map((item,index) => {
						return(
							<div key={index} className="flex relative">
								<InfoCard style='orange' title={item?.translation?.title} descr={item?.translation?.description} index={index}/>
								<div className="rounded-[10px] z-0 absolute -top-7 right-30">
									<Image width={994} height={405} alt={item?.translation?.title} src={`${mediaUrl}${item?.image}`}/>
								</div>
							</div>
							
						)
					})
				}
			</div>
		</section>
		
	)
}