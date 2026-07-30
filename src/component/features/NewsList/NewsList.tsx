import NewsCard from "./NewsCard";
import { getPosts } from "@/services/posts/posts.service";
import cn from "@/lib/utils/cn";
import { getRequestLocale } from "@/lib/i18n/server";
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
    const locale = await getRequestLocale();
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
                "grid w-full grid-cols-1 justify-items-center gap-8 md:grid-cols-2 md:gap-10 2xl:grid-cols-4 2xl:gap-14",
                className,
            )}
        >
            {news.map((item) => (
                <NewsCard
                    key={item.id}
                    item={item}
                    link={link}
                    locale={locale}
                />
            ))}
        </div>
    );
}
