import Image from "next/image";

import type { Dictionary } from "@/lib/i18n/dictionaries";

const hotelUrl =
    "https://www.radissonhotels.com/en-us/hotels/radisson-blu-shanghai-hongqiao-forest-manor";
const hotelImageUrl =
    "https://media.radissonhotels.net/image/radisson-blu-hotel-forest-manor-shanghai-hongqiao/exterior/16256-122232-f66953274_4K.jpg?impolicy=HomeHero";

type ForumVenueProps = {
    copy: Dictionary["forums"];
};

export default function ForumVenue({ copy }: ForumVenueProps) {
    return (
        <section className="mt-20 grid overflow-hidden bg-[#eaf2e9] lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col justify-center px-6 py-9 sm:px-10 lg:px-14 lg:py-14">
                <p className="font-main text-[12px] font-bold text-[#a27c42] uppercase">
                    {copy.venueLabel}
                </p>
                <h2 className="mt-3 max-w-[520px] font-second text-[27px] font-semibold leading-tight text-[#087541] sm:text-[36px]">
                    Radisson Blu Forest Manor Shanghai Hongqiao
                </h2>
                <p className="mt-4 max-w-[500px] font-main text-[16px] leading-7 text-[#3b5548]">
                    {copy.hotelDescription}
                </p>
                <a
                    href={hotelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-fit border-b border-[#087541] pb-1 font-main text-[14px] font-bold text-[#087541] transition-colors hover:text-[#075a34]"
                >
                    {copy.hotelLink} ↗
                </a>
            </div>
            <Image
                src={hotelImageUrl}
                alt={copy.hotelImageAlt}
                width={1200}
                height={720}
                className="h-[250px] w-full object-cover sm:h-[340px] lg:h-full lg:min-h-[430px]"
                unoptimized
            />
        </section>
    );
}
