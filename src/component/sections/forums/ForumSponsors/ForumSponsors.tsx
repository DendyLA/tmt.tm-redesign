import Image from "next/image";

import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { ForumSponsorLevel } from "@/services/forums/forums.types";
import { getForumMediaUrl } from "@/services/forums/forums.utils";

type ForumSponsorsProps = {
    levels: ForumSponsorLevel[];
    copy: Dictionary["forums"];
};

export default function ForumSponsors({ levels, copy }: ForumSponsorsProps) {
    const visibleLevels = levels
        .map((level) => ({
            ...level,
            sponsors: level.sponsors.filter((sponsor) => sponsor.logoUrl?.trim()),
        }))
        .filter((level) => level.sponsors.length > 0);

    if (!visibleLevels.length) return null;

    return (
        <section className="mt-20">
            <h2 className="border-b border-[#cfddcf] pb-5 font-second text-[30px] font-semibold text-[#087541] uppercase sm:text-[40px]">
                {copy.sponsorsTitle}
            </h2>
            <div className="mt-8 space-y-10">
                {visibleLevels.map((level) => (
                    <div key={level.id}>
                        <h3 className="font-second text-[22px] font-semibold text-[#a27c42] sm:text-[26px]">
                            {level.name}
                        </h3>
                        <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                            {level.sponsors.map((sponsor) => {
                                const logo = getForumMediaUrl(sponsor.logoUrl);
                                const website = sponsor.website?.trim();
                                const href = website && /^https?:\/\//i.test(website) ? website : null;
                                const content = (
                                    <>
                                        {logo && (
                                            <Image
                                                src={logo}
                                                alt={sponsor.name}
                                                width={180}
                                                height={100}
                                                className="h-24 w-full object-contain"
                                                unoptimized
                                            />
                                        )}
                                        <span className="mt-4 font-main text-[15px] font-semibold text-[#163d2b]">
                                            {sponsor.name}
                                        </span>
                                        <span className="mt-1 font-main text-[12px] text-[#6a795d]">
                                            {level.name}
                                        </span>
                                    </>
                                );
                                const className = "flex min-h-44 min-w-0 flex-col items-center justify-center rounded-[6px] border border-[#d4e2d3] bg-white px-4 py-5 text-center";

                                return href ? (
                                    <a
                                        key={sponsor.id}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${className} transition-colors hover:border-[#087541] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087541]`}
                                    >
                                        {content}
                                    </a>
                                ) : (
                                    <div key={sponsor.id} className={className}>
                                        {content}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
