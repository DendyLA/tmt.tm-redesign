import cn from "@/lib/utils/cn";
import { getPosts } from "@/services/posts/posts.service";
import Link from "next/link";
import NewsCard from "@/component/features/NewsList/NewsCard";

type NewsAllProps = {
    className?: string;
    page: number;
};

export default async function NewsAll({ className, page }: NewsAllProps) {
    const { data: news, meta } = await getPosts({
        page,
        limit: 9,
        lang: "RU",
		type: "NEWS",
    });

    return (
        <section className="flex flex-col gap-25">
            <div
                className={cn(
                    "grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3",
                    className,
                )}
            >
				{news.map((item, index) => {
					return(
						<>
							<NewsCard item={item} className="mt-20"/>
						</>
					)
				})}
                
            </div>
			<div className="mt-10 flex justify-center gap-2">
				{Array.from({ length: meta.pages }, (_, index) => (
					<Link
						key={index}
						href={`/news?page=${index + 1}`}
						className={
							page === index + 1
								? "bg-primary font-main rounded-sm px-3 py-1.5 text-base font-semibold text-white"
								: "border-primary text-primary font-main rounded-sm border px-3 py-1.5 text-base font-semibold"
						}
					>
						{index + 1}
					</Link>
				))}
			</div>
        </section>
    );
}
