import Image from "next/image";
import Link from "next/link";
import Button from "@/component/ui/Button/Button";
import { mediaUrl } from "@/constants/constants";
import type { Post } from "@/services/posts/posts.types";
import cn from "@/lib/utils/cn";

type NewsCardProps = {
    item: Post;
    className?: string;
};

export default function NewsCard({ item, className }: NewsCardProps) {
    const imageSrc = item.coverMedia?.url
        ? `${mediaUrl}${item.coverMedia.url}`
        : item.translation?.coverMedia?.url
          ? `${mediaUrl}${item.translation.coverMedia.url}`
          : "/images/news-placeholder.png";

    const title = item.translation?.title || item.title;
    const date = item.publishedAt
        ? new Date(item.publishedAt).toLocaleDateString("ru-RU")
        : "";

    return (
        <div
            className={cn(
                "h-143.75 max-w-131.25 overflow-hidden rounded-xl",
                className,
            )}
        >
            <Link href={`/news/${item.slug}`} className="relative flex h-[60%]">
                <Image
                    src={imageSrc}
                    fill
                    alt={title}
                    className="object-cover transition-all duration-300 ease-in-out hover:scale-110"
                />
            </Link>

            <div className="flex h-[40%] flex-col justify-between gap-6 bg-[#EEF2FF] px-5 py-8">
                <Link
                    href={`/news/${item.slug}`}
                    className="font-main text-dark hover:text-primary text-[20px] font-semibold transition-colors duration-300 ease-in-out"
                >
                    <h3 className="wrap-break-word">{title}</h3>
                </Link>

                <div className="flex items-center justify-between">
                    <Link href={`/news/${item.slug}`}>
                        <Button className="text-primary hover:bg-primary h-6 bg-white px-2.75 py-4 text-base hover:text-white">
                            Подробнее...
                        </Button>
                    </Link>

                    <div className="font-main text-primary text-sm">{date}</div>
                </div>
            </div>
        </div>
    );
}
