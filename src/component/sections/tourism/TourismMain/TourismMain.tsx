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
        <section className={cn("flex items-center gap-17", className)}>
            <div className="flex max-w-[60%] flex-col gap-11">
                <h1 className="font-main text-primary text-[32px] font-bold">
                    ТУРЫ ПО ТУРКМЕНИСТАНУ:
                </h1>
                <p className="font-main text-dark text-[28px] font-medium">
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
                <div className="flex max-w-237.5 gap-28.75 rounded-[20px] bg-white px-12.5 py-7">
                    <Image
                        width={250}
                        height={223}
                        src={"/images/tmtTravel.svg"}
                        alt="TMT Travel Logo"
                    />
                    <ul className="text-primary font-main flex flex-col gap-7 text-[24px] font-semibold">
                        {tourismPoints.map((item, index) => {
                            return (
                                <li
                                    className="flex items-center gap-7.5"
                                    key={index}
                                >
                                    <Image
                                        src={"/icons/right-arrow-primary.svg"}
                                        width={35}
                                        height={37}
                                        alt="TMT right arrow primary"
                                    />
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className="relative h-175 w-175 max-w-[40%]">
                <Image
                    src="/images/tourism/darvaza.png"
                    alt=""
                    width={363}
                    height={324}
                    className="absolute -top-10 right-0 rounded-3xl"
                />

                <Image
                    src="/images/tourism/mausoleum.png"
                    alt=""
                    width={316}
                    height={312}
                    className="absolute top-50 left-0 z-10 rounded-3xl"
                />

                <Image
                    src="/images/tourism/kutlug.png"
                    alt=""
                    width={363}
                    height={324}
                    className="absolute right-0 bottom-0 rounded-3xl"
                />
            </div>
        </section>
    );
}
