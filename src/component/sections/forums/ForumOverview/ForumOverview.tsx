import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Forum } from "@/services/forums/forums.types";
import { getForumDescription } from "@/services/forums/forums.utils";

type ForumOverviewProps = {
    forum: Forum;
    copy: Dictionary["forums"];
};

export default function ForumOverview({ forum, copy }: ForumOverviewProps) {
    const description = getForumDescription(forum) || copy.aboutText;

    return (
        <section className="mt-14 grid gap-10 border-t border-[#cfddcf] pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
                <h2 className="font-second text-[28px] font-semibold text-[#087541] uppercase sm:text-[36px]">
                    {copy.aboutTitle}
                </h2>
                <p className="mt-5 font-main text-[16px] leading-7 font-medium text-[#3b5548] sm:text-[18px]">
                    {description}
                </p>
            </div>

            <div>
                <h3 className="font-main text-[20px] font-bold text-[#163d2b] uppercase">
                    {copy.highlightsTitle}
                </h3>
                <ul className="mt-5 grid gap-4">
                    {copy.highlights.map((item) => (
                        <li
                            key={item}
                            className="flex gap-3 font-main text-[15px] leading-6 font-semibold text-[#3b5548]"
                        >
                            <span className="mt-2 size-2 shrink-0 rounded-full bg-[#c9a66c]" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
