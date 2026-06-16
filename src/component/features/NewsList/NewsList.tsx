import Link from "next/link";
import Image from "next/image";
import cn from "@/lib/utils/cn";
import Button from "@/component/ui/Button/Button";
import type { News } from "@/types/news";

type NewsListProps = {
    allNews: News[];
    className?: string;
};

export default function NewsList({ allNews, className }: NewsListProps) {
    return (
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 2xl:grid-cols-5">
            {allNews.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={cn(
                            "flex min-w-[280px] flex-col overflow-hidden rounded-[10px]",
                            className,
                        )}
                    >
                        <div className="relative flex h-62.5 min-w-80">
                            <Image
                                src={item.imgSrc}
                                fill
                                alt="news_image"
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col gap-6 bg-[#EEF2FF] px-5 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                            <Link
                                href=""
                                className="font-main text-dark hover:text-primary text-start text-[13px] font-semibold transition-colors duration-300 ease-in-out"
                            >
                                В Ашхабаде прошёл инженерно-технический конкурс
                                «Молодой инженер 2026»
                            </Link>
                            <div className="flex items-center justify-between">
                                <Button className="text-primary hover:bg-primary h-6 bg-white px-2.75 py-1 text-[11px] transition-colors duration-300 ease-in-out hover:text-white">
                                    Подробнее...
                                </Button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
