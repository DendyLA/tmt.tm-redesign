import Link from 'next/link';
import Image from 'next/image';
import cn from '@/lib/utils/cn'
import Button from '@/component/ui/Button/Button';
import type { News } from '@/types/news'


type NewsListProps = {
	allNews: News[];
	className?: string;
}


export default function NewsList({ allNews, className }: NewsListProps){

	return(
		<div className="flex gap-19.5 justify-between">
			{
				allNews.map((item, index) => {
					return(
						<div key={index} className={cn('flex flex-col overflow-hidden rounded-[10px]', className)}>
							<div className="flex min-w-80 h-62.5 relative"><Image src={item.imgSrc} fill alt='news_image' className='object-cover'/></div>
							
							<div className="flex flex-col gap-6 py-8 px-5 bg-[#EEF2FF] shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
								<Link href='' className="text-start font-main text-[13px] font-semibold text-dark transition-colors duration-300 ease-in-out hover:text-primary">В Ашхабаде прошёл инженерно-технический конкурс «Молодой инженер 2026»</Link>
								<div className="flex items-center justify-between">
									<Button className='h-6 px-2.75 py-1 bg-white text-primary text-[11px] transition-colors duration-300 ease-in-out hover:bg-primary hover:text-white'>Подробнее...</Button>
								</div>
							</div>
						</div>
					)
				})
			}
		</div>
	)
}