import Image from "next/image";

import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { ForumParticipant } from "@/services/forums/forums.types";
import { getForumMediaUrl } from "@/services/forums/forums.utils";

type ForumDelegatesProps = {
    participants: ForumParticipant[];
    copy: Dictionary["forums"];
};

export default function ForumDelegates({ participants, copy }: ForumDelegatesProps) {
    const companiesByName = new Map<string, ForumParticipant>();

    for (const participant of participants) {
        if (participant.type !== "DELEGATE" || !participant.companyLogoUrl?.trim()) continue;

        const key = participant.organization?.trim().toLocaleLowerCase() || participant.companyLogoUrl;
        if (!companiesByName.has(key)) companiesByName.set(key, participant);
    }

    const companies = Array.from(companiesByName.values());

    if (!companies.length) return null;

    return (
        <section className="mt-20">
            <h2 className="border-b border-[#cfddcf] pb-5 font-second text-[30px] font-semibold text-[#087541] uppercase sm:text-[40px]">
                {copy.delegatesTitle}
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {companies.map((company) => {
                    const logo = getForumMediaUrl(company.companyLogoUrl);
                    return (
                        <article
                            key={company.id}
                            className="flex aspect-[4/3] min-w-0 items-center justify-center rounded-[6px] border border-[#d4e2d3] bg-white p-5"
                        >
                            {logo && (
                                <Image
                                    src={logo}
                                    alt={company.organization || ""}
                                    width={180}
                                    height={100}
                                    className="max-h-full w-full object-contain"
                                    unoptimized
                                />
                            )}
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
