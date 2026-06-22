import NewsCard from "./NewsCard";
import { getPosts } from "@/services/posts/posts.service";
import cn from "@/lib/utils/cn";
type NewsListProps = {
    className?: string;
};

export default async function NewsList({ className }: NewsListProps) {
    const { data: news } = await getPosts({
        page: 1,
        limit: 5,
        lang: "RU",
		type: "NEWS"
    });

    if (!news.length) return null;

    return (
        <div
            className={cn(
                "grid grid-cols-1 gap-14 md:grid-cols-2 2xl:grid-cols-5",
                className,
            )}
        >
            {news.map((item) => (
                <NewsCard key={item.id} item={item} />
            ))}
        </div>
    );
}
