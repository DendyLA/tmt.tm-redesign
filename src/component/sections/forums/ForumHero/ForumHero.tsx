import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Forum } from "@/services/forums/forums.types";
import {
    getForumMediaUrl,
    getForumSignupHref,
    getForumTitle,
    getForumVenue,
} from "@/services/forums/forums.utils";
import { formatForumDateRange } from "../forum-format";

type ForumHeroProps = {
    forum: Forum;
    locale: Locale;
    copy: Dictionary["forums"];
};

export default function ForumHero({ forum, locale, copy }: ForumHeroProps) {
    const title = getForumTitle(forum);
    const venue = getForumVenue(forum);
    const dates = formatForumDateRange(forum.startDate, forum.endDate, locale);
    const logoUrl = getForumMediaUrl(forum.logoUrl);

    return (
        <section className="grid items-center gap-8 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:pt-20">
            <div className="min-w-0">
                <p className="font-main text-[13px] font-bold text-[#a27c42] uppercase">
                    {copy.heroKicker}
                </p>
                <h1 className="mt-4 max-w-[980px] font-second text-[29px] leading-tight font-semibold text-[#163d2b] uppercase sm:text-[36px] lg:text-[36px] xl:text-[40px]">
                    {title}
                </h1>
                <p className="mt-5 max-w-[760px] font-main text-[17px] leading-7 font-medium text-[#4a6155] sm:text-[20px] sm:leading-8">
                    {copy.heroText}
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {dates && (
                        <div className="border-l-2 border-[#c9a66c] pl-4">
                            <p className="font-main text-[12px] font-bold text-[#087541] uppercase">
                                {copy.dateLabel}
                            </p>
                            <p className="mt-2 font-main text-[17px] font-bold text-[#163d2b]">
                                {dates}
                            </p>
                        </div>
                    )}
                    {venue && (
                        <div className="border-l-2 border-[#c9a66c] pl-4">
                            <p className="font-main text-[12px] font-bold text-[#087541] uppercase">
                                {copy.venueLabel}
                            </p>
                            <p className="mt-2 font-main text-[17px] font-bold text-[#163d2b]">
                                {venue}
                            </p>
                        </div>
                    )}
                </div>

                <Link
                    href={getForumSignupHref(forum.slug, locale)}
                    className="mt-6 inline-flex rounded-[4px] bg-[#087541] px-7 py-4 font-main text-[14px] font-bold text-white uppercase transition-colors duration-300 hover:bg-[#075a34]"
                >
                    {copy.delegateCta}
                </Link>
            </div>

            <div className="flex justify-center lg:justify-end">
                <div className="flex aspect-square w-full max-w-[420px] items-center justify-center rounded-full p-5 ">
                    {logoUrl ? (
                        <Image
                            src={logoUrl}
                            alt={title}
                            width={340}
                            height={340}
                            className="h-full w-full object-contain"
                            priority
                        />
                    ) : (
                        <span className="font-second text-[72px] font-semibold text-[#087541]">
                            TMT
                        </span>
                    )}
                </div>
            </div>
        </section>
    );
}
