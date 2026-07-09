import cn from "@/lib/utils/cn";
import { getPosts } from "@/services/posts/posts.service";
import Image from "next/image";
import { mediaUrl } from "@/constants/constants";
import Advertising from "@/component/ui/Advertising/Advertising";

type NewsExtraProps = {
    className?: string;
};

export default async function NewsExtra({ className }: NewsExtraProps) {
    const posts = await getPosts({
        page: 1,
        limit: 4,
        lang: "RU",
        type: "NEWS",
    });

    const news = posts?.data ?? [];

    return (
        <div className={cn("flex flex-col gap-29", className)}>
            <div className="rounded-[10px] bg-[linear-gradient(90deg,rgba(254,247,242,0.2)_0%,rgba(232,101,10,0.2)_100%)] px-4 py-6 shadow-[0px_2px_2px_rgba(0,0,0,0.25)]">
                <div className="font-main text-primary flex justify-center text-[24px] font-semibold">
                    Последние Новости
                </div>
                <div className="mt-10 flex flex-col gap-11">
                    {news.map((item, index) => {
                        const imageSrc = item.coverMedia?.url
                            ? `${mediaUrl}${item.coverMedia.url}`
                            : item.translation?.coverMedia?.url
                              ? `${mediaUrl}${item.translation.coverMedia.url}`
                              : "/images/news-placeholder.png";
                        return (
                            <div
                                className="flex h-40.5 w-full overflow-hidden rounded-[10px] bg-[#FEF4EE]"
                                key={index}
                            >
                                <Image
                                    src={imageSrc}
                                    width={250}
                                    height={163}
                                    alt="Image"
                                    className="w-[30%] object-cover"
                                />
                                <div className="font-main text-primary flex w-[70%] items-center justify-start px-15 py-10 text-left text-[20px] font-semibold">
                                    {item?.translation?.title}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
