import Image from "next/image";

import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { ForumParticipant } from "@/services/forums/forums.types";
import { getForumMediaUrl } from "@/services/forums/forums.utils";

type ForumSpeakersProps = {
    participants: ForumParticipant[];
    copy: Dictionary["forums"];
};

export default function ForumSpeakers({ participants, copy }: ForumSpeakersProps) {
    const speakers = participants.filter((item) => item.type === "SPEAKER");
    if (!speakers.length) return null;

    return (
        <section className="mt-20">
            <h2 className="border-b border-[#cfddcf] pb-5 font-second text-[30px] font-semibold text-[#087541] uppercase sm:text-[40px]">
                {copy.speakersTitle}
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {speakers.map((speaker) => {
                    const photo = getForumMediaUrl(speaker.photoUrl);
                    const logo = getForumMediaUrl(speaker.companyLogoUrl);
                    return (
                        <article key={speaker.id} className="min-w-0 overflow-hidden rounded-[6px] border border-[#d4e2d3] bg-white">
                            {photo ? (
                                <Image
                                    src={photo}
                                    alt={`${speaker.firstName} ${speaker.lastName}`}
                                    width={560}
                                    height={560}
                                    className="aspect-square w-full object-cover"
                                    unoptimized
                                />
                            ) : (
                                <div className="flex aspect-square items-center justify-center bg-[#eaf2e9] font-second text-[56px] font-semibold text-[#087541]">
                                    {speaker.firstName.charAt(0)}{speaker.lastName.charAt(0)}
                                </div>
                            )}
                            <div className="flex items-start justify-between gap-3 px-5 py-5">
                                <div className="min-w-0">
                                    <h3 className="font-main text-[18px] font-bold text-[#163d2b]">
                                        {speaker.firstName} {speaker.lastName}
                                    </h3>
                                    {speaker.position && (
                                        <p className="mt-2 font-main text-[14px] text-[#4a6155]">
                                            {speaker.position}
                                        </p>
                                    )}
                                    {speaker.organization && (
                                        <p className="mt-1 font-main text-[13px] font-semibold text-[#087541]">
                                            {speaker.organization}
                                        </p>
                                    )}
                                </div>
                                {logo && (
                                    <Image
                                        src={logo}
                                        alt={speaker.organization || ""}
                                        width={72}
                                        height={56}
                                        className="h-14 w-[72px] shrink-0 object-contain"
                                        unoptimized
                                    />
                                )}
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
