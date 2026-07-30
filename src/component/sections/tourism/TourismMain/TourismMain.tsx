import cn from "@/lib/utils/cn";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";

import Image from "next/image";

type TourismMainProps = {
    className?: string;
};

export default async function TourismMain({ className }: TourismMainProps) {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);
    const tourismPoints = dictionary.tourism.points;
    const tourismText = dictionary.tourism.text.split("\n");

    return (
        <section
            className={cn(
                "flex flex-col gap-8 xl:flex-row xl:items-center xl:gap-10 min-[1800px]:gap-17",
                className,
            )}
        >
            <div className="flex w-full flex-col gap-6 xl:max-w-[58%] min-[1800px]:max-w-[60%] min-[1800px]:gap-11">
                <h1 className="font-main text-primary text-[26px] leading-tight font-bold sm:text-[30px] xl:text-[32px]">
                    {dictionary.tourism.heading}
                </h1>
                <p className="font-main text-dark text-base leading-7 font-medium sm:text-[20px] sm:leading-8 lg:text-[24px] xl:text-[22px] min-[1800px]:text-[28px] min-[1800px]:leading-normal">
                    {tourismText.map((line, index) => (
                        <span key={line || index}>
                            {line}
                            {index < tourismText.length - 1 && (
                                <>
                                    <br />
                                    <br />
                                </>
                            )}
                        </span>
                    ))}
                </p>
                <div className="flex w-full max-w-237.5 flex-col items-center gap-6 rounded-[20px] bg-white px-5 py-6 sm:px-8 sm:py-7 lg:flex-row lg:justify-center lg:gap-10 xl:px-8 min-[1800px]:gap-28.75 min-[1800px]:px-12.5">
                    <Image
                        width={250}
                        height={223}
                        src={"/images/tmtTravel.svg"}
                        alt="TMT Travel Logo"
                        className="h-auto w-40 sm:w-52 xl:w-44 min-[1800px]:w-auto"
                    />
                    <ul className="text-primary font-main flex w-full flex-col gap-4 text-base font-semibold sm:text-[20px] lg:w-auto lg:text-[22px] xl:text-[20px] min-[1800px]:gap-7 min-[1800px]:text-[24px]">
                        {tourismPoints.map((item, index) => {
                            return (
                                <li
                                    className="flex min-w-0 items-center gap-4 sm:gap-5 min-[1800px]:gap-7.5"
                                    key={index}
                                >
                                    <Image
                                        src={"/icons/right-arrow-primary.svg"}
                                        width={35}
                                        height={37}
                                        alt="TMT right arrow primary"
                                        className="h-6 w-6 shrink-0 sm:h-8 sm:w-8 min-[1800px]:h-auto min-[1800px]:w-auto"
                                    />
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 xl:relative xl:block xl:h-[560px] xl:w-[520px] xl:max-w-[38%] min-[1800px]:h-175 min-[1800px]:w-175 min-[1800px]:max-w-[40%]">
                <Image
                    src="/images/tourism/darvaza.png"
                    alt={dictionary.tourism.imageAlt[0]}
                    width={363}
                    height={324}
                    className="h-52 w-full rounded-3xl object-cover sm:h-60 xl:absolute xl:-top-6 xl:right-0 xl:h-auto xl:w-[300px] min-[1800px]:-top-10 min-[1800px]:w-auto"
                />

                <Image
                    src="/images/tourism/mausoleum.png"
                    alt={dictionary.tourism.imageAlt[1]}
                    width={316}
                    height={312}
                    className="h-52 w-full rounded-3xl object-cover sm:h-60 xl:absolute xl:top-40 xl:left-0 xl:z-10 xl:h-auto xl:w-[280px] min-[1800px]:top-50 min-[1800px]:w-auto"
                />

                <Image
                    src="/images/tourism/kutlug.png"
                    alt={dictionary.tourism.imageAlt[2]}
                    width={363}
                    height={324}
                    className="h-52 w-full rounded-3xl object-cover sm:h-60 xl:absolute xl:right-0 xl:bottom-0 xl:h-auto xl:w-[300px] min-[1800px]:w-auto"
                />
            </div>
        </section>
    );
}
