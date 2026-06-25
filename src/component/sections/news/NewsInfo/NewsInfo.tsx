import Image from "next/image"
import cn from "@/lib/utils/cn"
import { getPostBySlug } from "@/services/posts/posts.service"
import { mediaUrl } from "@/constants/constants"
import RichText from "@/component/ui/RichText/RichText"

type NewsInfoProps = {
	slug: string;
	className?: string;

}

export default async function NewsInfo({ slug, className}: NewsInfoProps){
	const post = await getPostBySlug({slug, lang: 'RU'});

	const postImage = post.coverMedia?.url || post.translation?.coverMedia?.url || null;
	const date = post.publishedAt
	? new Date(post.publishedAt).toLocaleDateString("ru-RU")
	: "";
	console.log(JSON.stringify(post?.translation?.content));


	return(
		<section className={cn("flex gap-11 overflow-hidden rounded-[10px]", className)}>
			<div className="flex flex-col">
				<div className="flex max-h-157"><Image src={`${mediaUrl}${postImage}`} width={1055} height={628} alt='photo' className="w-full h-full object-cover"/></div>
				<div className="py-7 px-9.25 bg-white">
					<div className="flex justify-end font-main text-primary/50">{date}</div>
					<div className="font-main font-bold text-[30px] mt-7">{ post?.translation?.title }</div>
					<div className="mt-7"><RichText content={ post?.translation?.content || ""}/></div>
				</div>
			</div>
		</section>
	)
}