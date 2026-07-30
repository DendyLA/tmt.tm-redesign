import Image from "next/image";
import Link from "next/link";
import Button from "@/component/ui/Button/Button";
import { mediaUrl } from "@/constants/constants";
import type { Post } from "@/services/posts/posts.types";
import cn from "@/lib/utils/cn";
import {
    defaultLocale,
    hreflangByLocale,
    type Locale,
    withLocalePath,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

type NewsCardProps = {
    item: Post;
    link: "blog" | "news";
    className?: string;
    locale?: Locale;
};

export default function NewsCard({
    item,
    link,
    className,
    locale = defaultLocale,
}: NewsCardProps) {
    const dictionary = getDictionary(locale);
    const disableOptimization = process.env.NODE_ENV === "development";
    const imageSrc = item.coverMedia?.url
        ? `${mediaUrl}${item.coverMedia.url}`
        : item.translation?.coverMedia?.url
          ? `${mediaUrl}${item.translation.coverMedia.url}`
          : "/images/news-placeholder.png";

    const title = item.translation?.title || item.title;
    const date = item.publishedAt
        ? new Date(item.publishedAt).toLocaleDateString(
              hreflangByLocale[locale],
          )
        : "";


    return (
        <div
            className={cn(
                "h-[430px] w-full max-w-131.25 overflow-hidden rounded-xl sm:h-143.75",
                className,
            )}
        >
            <Link
                href={withLocalePath(`/${link}/${item.slug}`, locale)}
                className="relative flex h-[55%] sm:h-[60%]"
            >
                <Image
                    src={imageSrc}
                    fill
                    alt={title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 525px"
                    unoptimized={disableOptimization}
                    className="object-cover transition-all duration-300 ease-in-out hover:scale-110"
                />
            </Link>

            <div className="flex h-[45%] flex-col justify-between gap-4 bg-[#EEF2FF] px-4 py-5 sm:h-[40%] sm:gap-6 sm:px-5 sm:py-8">
                <Link
                    href={withLocalePath(`/${link}/${item.slug}`, locale)}
                    className="font-main text-dark hover:text-primary text-[17px] leading-6 font-semibold transition-colors duration-300 ease-in-out sm:text-[20px] sm:leading-normal"
                >
                    <h3 className="wrap-break-word">{title.length > 80
						? `${title.slice(0, 80)}...`
						: title}</h3>
                </Link>

                <div className="flex flex-wrap items-center justify-between gap-3">
                    <Link href={withLocalePath(`/${link}/${item.slug}`, locale)}>
                        <Button className="text-primary hover:bg-primary h-auto bg-white px-2.75 py-2 text-sm hover:text-white sm:h-6 sm:py-4 sm:text-base">
                            {dictionary.common.readMore}
                        </Button>
                    </Link>

                    <div className="font-main text-primary text-sm">{date}</div>
                </div>
            </div>
        </div>
    );
}
