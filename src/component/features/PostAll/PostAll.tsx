import cn from "@/lib/utils/cn";
import { getPosts } from "@/services/posts/posts.service";
import Link from "next/link";
import NewsCard from "@/component/features/NewsList/NewsCard";

type NewsAllProps = {
    className?: string;
    page: number;
    type: "NEWS" | "BLOG";
    link: 'news' | 'blog';
};

export default async function PostAll({
    className,
    page,
    type,
    link,
}: NewsAllProps) {
    const posts = await getPosts({
        page,
        limit: 9,
        lang: "RU",
        type,
    });

    const news = posts?.data ?? [];
    const totalPages = posts?.meta?.pages ?? 1;

    const pages: (number | "...")[] = [];

    const visiblePages = Math.min(7, totalPages);

    for (let i = 1; i <= visiblePages; i++) {
        pages.push(i);
    }

    if (totalPages > 7) {
        pages.push("...");
        pages.push(totalPages);
    }

    return (
        <section className="flex flex-col gap-8 sm:gap-12 lg:gap-18">
            <div
                className={cn(
                    "grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3",
                    className,
                )}
            >
                {news.map((item) => (
                    <NewsCard
                        key={item.id}
                        item={item}
                        className="sm:mt-8 lg:mt-20"
                        link={link}
                    />
                ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-7">
                {page > 1 && (
                    <Link href={`/${link}?page=${page - 1}`} className="h-10">
                        <img
                            src="/icons/left-arrow-primary.svg"
                            alt="left-arrow-primary"
                            className="h-full"
                        />
                    </Link>
                )}

                {pages.map((item, index) =>
                    item === "..." ? (
                        <span
                            key={`dots-${index}`}
                            className="text-primary px-3 py-1.5"
                        >
                            ...
                        </span>
                    ) : (
                        <Link
                            key={item}
                            href={`/${link}?page=${item}`}
                            className={
                                page === item
                                    ? "bg-primary font-main flex h-7.25 w-6.75 items-center justify-center rounded-sm px-2 text-base font-semibold text-white"
                                    : "border-primary text-primary font-main hover:bg-primary flex h-7.25 items-center justify-center rounded-sm border px-2 text-base font-semibold transition hover:text-white"
                            }
                        >
                            {item}
                        </Link>
                    ),
                )}

                {page < totalPages && (
                    <Link href={`/${link}?page=${page + 1}`} className="h-10">
                        <img
                            src="/icons/right-arrow-primary.svg"
                            alt="right-arrow-primary"
                            className="h-full"
                        />
                    </Link>
                )}
            </div>
        </section>
    );
}
