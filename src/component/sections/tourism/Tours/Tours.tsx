import cn from "@/lib/utils/cn"
import getTours from "@/services/tours/tours.service"
import RichText from "@/component/ui/RichText/RichText";
import Image from "next/image";	
import { mediaUrl } from "@/constants/constants";


type ToursProps = {
	className?: string;
}


export default async function Tours({className}: ToursProps){
	const res = await getTours({page: 1, limit: 5, lang: 'RU'});
	const tours = res.data;
	const meta = res.meta;

	const sortedTours = [...tours].sort(
		(a, b) => a.sortOrder - b.sortOrder
	);


	return(
		<section className={cn('', className)}>
			<h3 className="text-primary font-main font-bold text-[32px] text-center">НАШИ ТУРЫ:</h3>

			<div className="flex flex-col gap-23 mt-10">
				{
					sortedTours.map((item,index) => {
						return(
							<div key={index} className="flex relative">
								<div  className="py-10.5 px-10 bg-white shadow-[0px_5px_6px_0px_rgba(0,0,0,0.1)] border border-primary rounded-xl relative max-w-225 z-10">
									<div className="text-primary font-second text-[33px] flex gap-3.75 items-center max-w-150"><span className="bg-primary h-0.5 w-8.75"></span>{item?.translation?.title}</div>
									<div className="text-dark font-main text-base font-medium mt-6.25 max-w-187.5"><RichText content={item?.translation?.description}/></div>

									<div className="absolute top-0 right-6.5 font-second text-[96px] text-primary/10 font-black">{String(index + 1).padStart(2, "0")}</div>
								</div>
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