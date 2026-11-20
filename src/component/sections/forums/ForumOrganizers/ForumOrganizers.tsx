import Image from "next/image";

import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { ForumOrganizer } from "@/services/forums/forums.types";
import { getForumMediaUrl } from "@/services/forums/forums.utils";

type ForumOrganizersProps = {
    organizers: ForumOrganizer[];
    copy: Dictionary["forums"];
};

export default function ForumOrganizers({ organizers, copy }: ForumOrganizersProps) {
    if (!organizers.length) return null;

    const orderedOrganizers = [...organizers].sort(
        (a, b) => (a.sortOrder ?? Number.MAX_SAFE_INTEGER) - (b.sortOrder ?? Number.MAX_SAFE_INTEGER),
    );

    return (
        <section className="mt-20">
            <h2 className="border-b border-[#cfddcf] pb-5 font-second text-[30px] font-semibold text-[#087541] uppercase sm:text-[40px]">
                {copy.organizersTitle}
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {orderedOrganizers.map((organizer) => {
                    const logo = getForumMediaUrl(organizer.logoUrl);
                    const website = organizer.website?.trim();
                    const href = website && /^https?:\/\//i.test(website) ? website : null;
                    const className = "flex min-h-44 min-w-0 flex-col items-center justify-center rounded-[6px] border border-[#d4e2d3] bg-white px-4 py-5 text-center";
                    const content = (
                        <>
                            {logo && (
                                <Image
                                    src={logo}
                                    alt={organizer.name}
                                    width={180}
                                    height={100}
                                    className="h-24 w-full object-contain"
                                    unoptimized
                                />
                            )}
                            <span className="mt-4 font-main text-[15px] font-semibold text-[#163d2b]">
                                {organizer.name}
                            </span>
                        </>
                    );

                    return href ? (
                        <a
                            key={organizer.id}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${className} transition-colors hover:border-[#087541] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087541]`}
                        >
                            {content}
                        </a>
                    ) : (
                        <div key={organizer.id} className={className}>
                            {content}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
