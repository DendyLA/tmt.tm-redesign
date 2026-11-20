import Image from "next/image";

import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { ForumParticipant } from "@/services/forums/forums.types";
import { getForumMediaUrl } from "@/services/forums/forums.utils";
import styles from "./ForumDelegates.module.css";

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

    const repeatCount = Math.max(1, Math.ceil(12 / companies.length));
    const logos = Array.from({ length: repeatCount }, () => companies).flat();
    const duration = `${logos.length * 3}s`;

    return (
        <section className="mt-20">
            <h2 className="border-b border-[#cfddcf] pb-5 font-second text-[30px] font-semibold text-[#087541] uppercase sm:text-[40px]">
                {copy.delegatesTitle}
            </h2>
            <div className={`${styles.viewport} mt-8`}>
                <div className={styles.track} style={{ animationDuration: duration }}>
                    {[false, true].map((duplicate) => (
                        <ul
                            key={String(duplicate)}
                            aria-hidden={duplicate ? "true" : undefined}
                            className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12"
                        >
                            {logos.map((company, index) => {
                                const logo = getForumMediaUrl(company.companyLogoUrl);
                                return (
                                    <li key={`${company.id}-${index}`} className="flex h-24 w-36 shrink-0 items-center justify-center sm:h-28 sm:w-44">
                                        {logo && (
                                            <Image
                                                src={logo}
                                                alt={duplicate ? "" : company.organization || ""}
                                                width={176}
                                                height={112}
                                                className="max-h-full max-w-full object-contain"
                                                unoptimized
                                            />
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    ))}
                </div>
            </div>
        </section>
    );
}
