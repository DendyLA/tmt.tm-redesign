import cn from "@/lib/utils/cn";
import getTours from "@/services/tours/tours.service";
import RichText from "@/component/ui/RichText/RichText";
import Image from "next/image";
import { mediaUrl } from "@/constants/constants";
import InfoCard from "@/component/ui/InfoCard/InfoCard";
import { getApiLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";

type ToursProps = {
    className?: string;
};

export default async function Tours({ className }: ToursProps) {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);
    const res = await getTours({
        page: 1,
        limit: 5,
        lang: getApiLocale(locale),
    });
    const tours = res?.data;
    const meta = res?.meta;

    const sortedTours = tours
        ? [...tours].sort((a, b) => a.sortOrder - b.sortOrder)
        : [];

    return (
        <section className={cn("", className)}>
            <h3 className="text-primary font-main text-center text-[26px] font-bold sm:text-[32px]">
                {dictionary.sections.tourism.toursTitle}
            </h3>

            <div className="mt-10 flex flex-col gap-8 sm:mt-15 sm:gap-15 xl:gap-18 min-[1800px]:gap-23">
                {sortedTours.map((item, index) => {
                    const isReversed = index % 2 === 1;

                    return (
                        <div
                            key={index}
                            className={cn(
                                "relative flex flex-col gap-4 xl:min-h-[330px] xl:flex-row xl:gap-0 min-[1800px]:min-h-[405px] overflow-hidden",
                                isReversed && "xl:justify-end",
                            )}
                        >
                            <InfoCard
                                style="orange"
                                title={item?.translation?.title}
                                descr={item?.translation?.description}
                                index={index}
                                className="w-full max-w-full xl:w-[50%] xl:max-w-none min-[1800px]:w-[900px] min-[1800px]:max-w-225 "
                            />
                            <div
                                className={cn(
                                    "relative z-0 overflow-hidden rounded-[10px] xl:absolute xl:-top-7 xl:w-[55%] xl:overflow-visible min-[1800px]:w-[994px] ",
                                    isReversed
                                        ? "xl:left-0"
                                        : "xl:right-0 min-[1800px]:right-30",
                                )}
                            >
                                <Image
                                    width={994}
                                    height={405}
                                    alt={item?.translation?.title}
                                    src={`${mediaUrl}${item?.image}`}
                                    className="h-auto w-full rounded-[10px] object-cover xl:rounded-none"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
