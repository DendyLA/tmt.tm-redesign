import Link from "next/link";

import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { getForumSignupHref } from "@/services/forums/forums.utils";

type ForumSupportProps = {
    copy: Dictionary["forums"];
    locale: Locale;
    forumSlug: string;
};

export default function ForumSupport({ copy, locale, forumSlug }: ForumSupportProps) {
    return (
        <section className="mt-20 bg-[#087541] px-5 py-8 text-white sm:px-8 lg:px-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-[820px]">
                    <h2 className="font-second text-[26px] font-semibold uppercase sm:text-[34px]">
                        {copy.travelTitle}
                    </h2>
                    <p className="mt-4 font-main text-[16px] leading-7 font-medium sm:text-[18px]">
                        {copy.travelText}
                    </p>
                </div>

                <Link
                    href={getForumSignupHref(forumSlug, locale)}
                    className="inline-flex w-max shrink-0 rounded-[4px] bg-white px-7 py-4 font-main text-[16px] font-bold text-[#087541] uppercase transition-opacity duration-300 hover:opacity-85"
                >
                    {copy.delegateCta}
                </Link>
            </div>
        </section>
    );
}
