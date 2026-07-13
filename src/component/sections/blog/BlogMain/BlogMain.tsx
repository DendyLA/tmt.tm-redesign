import cn from "@/lib/utils/cn";
import { getPostBySlug } from "@/services/posts/posts.service";
import RichText from "@/component/ui/RichText/RichText";
import Link from "next/link";

type BlogMainProps = {
	slug: string
	className?: string;
}

export default async function BlogMain({ className, slug }: BlogMainProps){
	const data = await getPostBySlug({ slug: slug, lang: 'RU' })


	const title = data?.translation?.title || 'Нет заголовка';
	const descr = data?.translation?.content || 'Нет текста';
	const date = new Date(data.createdAt).toLocaleDateString("ru-RU");;


	return(
		<>
			<Link href='/blog'><div className={cn("max-w-89.75 h-12.5 px-9.25 py-3 rounded-[10px] bg-[linear-gradient(90deg,rgba(197,205,235,.2)_0%,rgba(254,247,242,.2)_100%)] shadow-[0_2px_2px_rgba(0,0,0,.25)] font-main font-semibold text-[20px] flex items-center transition-opacity duration-300 ease-in-out cursor-pointer hover:opacity-60", className)}>Вернуться в Блог</div></Link>
			
			<div className="flex gap-20 mt-3.75 ">
				<div className="py-13.5 px-15.5 rounded-[10px] bg-white w-[65%] mt-5 relative">
					<div className="text-[20px] font-main font-semibold text-primary/50 absolute top-6 right-9.5">{date}</div>
					<div className="font-main text-[30px] font-bold text-dark">{title}</div>
					<div className="text-[20px] font-main font-medium mt-8">
						<RichText content={descr}/>
					</div>
				</div>
			</div>
		</>
	)
}