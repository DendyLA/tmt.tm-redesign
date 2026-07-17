import cn from "@/lib/utils/cn";

import Image from "next/image";

type TourismMainProps = {
    className?: string;
};

export default function TourismMain({ className }: TourismMainProps) {
    const tourismPoints = [
        "Авиабилеты и проживание",
        "Гастрономические приключения",
        "Местные туры и гиды",
        "Индивидуальные путешествия",
        "Туристическая фотосъемка",
    ];

    return (
        <section
            className={cn(
                "flex flex-col gap-8 xl:flex-row xl:items-center xl:gap-10 min-[1800px]:gap-17",
                className,
            )}
        >
            <div className="flex w-full flex-col gap-6 xl:max-w-[58%] min-[1800px]:max-w-[60%] min-[1800px]:gap-11">
                <h1 className="font-main text-primary text-[26px] leading-tight font-bold sm:text-[30px] xl:text-[32px]">
                    ТУРЫ ПО ТУРКМЕНИСТАНУ:
                </h1>
                <p className="font-main text-dark text-base leading-7 font-medium sm:text-[20px] sm:leading-8 lg:text-[24px] xl:text-[22px] min-[1800px]:text-[28px] min-[1800px]:leading-normal">
                    TMT Travel — это надежный и профессиональный партнер в сфере
                    путешествий с высококвалифицированной командой, стремящейся
                    к совершенству. Мы специализируемся на создании безупречных,
                    хорошо организованных и незабываемых путешествий. <br />
                    <br />
                    Благодаря сильной страсти к гостеприимству и вниманию к
                    каждой детали, мы гарантируем, что каждое путешествие будет
                    уникальным, вдохновляющим и по-настоящему запоминающимся для
                    наших гостей.
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
                    alt=""
                    width={363}
                    height={324}
                    className="h-52 w-full rounded-3xl object-cover sm:h-60 xl:absolute xl:-top-6 xl:right-0 xl:h-auto xl:w-[300px] min-[1800px]:-top-10 min-[1800px]:w-auto"
                />

                <Image
                    src="/images/tourism/mausoleum.png"
                    alt=""
                    width={316}
                    height={312}
                    className="h-52 w-full rounded-3xl object-cover sm:h-60 xl:absolute xl:top-40 xl:left-0 xl:z-10 xl:h-auto xl:w-[280px] min-[1800px]:top-50 min-[1800px]:w-auto"
                />

                <Image
                    src="/images/tourism/kutlug.png"
                    alt=""
                    width={363}
                    height={324}
                    className="h-52 w-full rounded-3xl object-cover sm:h-60 xl:absolute xl:right-0 xl:bottom-0 xl:h-auto xl:w-[300px] min-[1800px]:w-auto"
                />
            </div>
        </section>
    );
}
