import cn from "@/lib/utils/cn"
import { getPosts } from "@/services/posts/posts.service"
import Image from "next/image"
import { mediaUrl } from "@/constants/constants"
import Advertising from "@/component/ui/Advertising/Advertising"


type NewsExtraProps = {
	className?: string;
}


export default async function NewsExtra({className}: NewsExtraProps){
	const { data: news, meta }= await getPosts({ page: 1, limit: 4, lang: 'RU', type: 'NEWS' })


	return(
		<div className={cn("flex flex-col gap-29", className)}>
			<div className="rounded-[10px] bg-[linear-gradient(90deg,rgba(254,247,242,0.2)_0%,rgba(232,101,10,0.2)_100%)] shadow-[0px_2px_2px_rgba(0,0,0,0.25)] py-6 px-4">
				<div className="text-[24px] font-main font-semibold text-primary flex justify-center">Последние Новости</div>
				<div className="flex flex-col gap-11 mt-10">
					{news.map((item, index) => {
							const imageSrc = item.coverMedia?.url
								? `${mediaUrl}${item.coverMedia.url}`
								: item.translation?.coverMedia?.url
								? `${mediaUrl}${item.translation.coverMedia.url}`
								: "/images/news-placeholder.png";
						return(
							<div className="flex bg-[#FEF4EE] rounded-[10px] overflow-hidden w-full h-40.5 " key={index}>
								<Image src={imageSrc} width={250} height={163} alt="Image" className="object-cover w-[30%]"/>
								<div className="flex justify-start items-center py-10 px-15 font-main font-semibold text-[20px] w-[70%] text-primary text-left">{item?.translation?.title}</div>

							</div>
						)
					})}
				</div>
				
			</div>
		</div>
		
	)
}