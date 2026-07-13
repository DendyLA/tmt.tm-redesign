import NewsCard from "./NewsCard";
import { getPosts } from "@/services/posts/posts.service";
import cn from "@/lib/utils/cn";
type NewsListProps = {
    page: number;
    limit: number;
    lang: string;
    type: "NEWS" | "BLOG";
    className?: string;
};

export default async function NewsList({
    page,
    limit,
    lang,
    type,
    className,
}: NewsListProps) {
    const response = await getPosts({
        page: page,
        limit: limit,
        lang: lang,
        type: type,
    });

    const news = response?.data ?? [];
    const link = type === "BLOG" ? "blog" : "news";

    if (!news.length) return null;

    return (
        <div
            className={cn(
                "grid w-full grid-cols-1 gap-14 md:grid-cols-2 2xl:grid-cols-4",
                className,
            )}
        >
            {news.map((item) => (
                <NewsCard key={item.id} item={item} link={link} />
            ))}
        </div>
    );
}
