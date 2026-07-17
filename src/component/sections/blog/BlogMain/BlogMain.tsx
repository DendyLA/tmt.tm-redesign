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
			<Link href='/blog'><div className={cn("flex min-h-11 w-full max-w-89.75 cursor-pointer items-center justify-center rounded-[10px] bg-[linear-gradient(90deg,rgba(197,205,235,.2)_0%,rgba(254,247,242,.2)_100%)] px-4 py-3 text-center font-main text-base font-semibold shadow-[0_2px_2px_rgba(0,0,0,.25)] transition-opacity duration-300 ease-in-out hover:opacity-60 sm:h-12.5 sm:px-9.25 sm:text-[20px]", className)}>Вернуться в Блог</div></Link>
			
			<div className="mt-5 flex flex-col gap-6 lg:mt-3.75 lg:gap-20">
				<div className="relative w-full rounded-[10px] bg-white px-5 py-8 sm:mt-5 sm:px-8 sm:py-10 lg:w-[65%] lg:px-15.5 lg:py-13.5">
					<div className="font-main text-sm font-semibold text-primary/50 sm:absolute sm:top-6 sm:right-9.5 sm:text-[20px]">{date}</div>
					<div className="font-main mt-3 text-[24px] leading-tight font-bold text-dark sm:mt-0 sm:text-[30px] sm:text-justify">{title}</div>
					<div className="font-main mt-6 text-base leading-7 font-medium sm:mt-8 sm:text-[20px] sm:leading-normal sm:text-justify">
						<RichText content={descr}/>
					</div>
				</div>
			</div>
		</>
	)
}
