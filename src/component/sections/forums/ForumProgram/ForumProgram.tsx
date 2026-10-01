"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";

import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { ForumProgramDay } from "@/services/forums/forums.types";
import { getForumMediaUrl } from "@/services/forums/forums.utils";
import { formatForumDayDate } from "../forum-format";

type ForumProgramProps = {
    days: ForumProgramDay[];
    locale: Locale;
    copy: Dictionary["forums"];
};

export default function ForumProgram({
    days,
    locale,
    copy,
}: ForumProgramProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    if (!days.length) return null;

    const selectedIndex = Math.min(activeIndex, days.length - 1);

    const handleTabKeyDown = (
        event: KeyboardEvent<HTMLButtonElement>,
        index: number,
    ) => {
        let nextIndex: number;

        switch (event.key) {
            case "ArrowRight":
                nextIndex = (index + 1) % days.length;
                break;
            case "ArrowLeft":
                nextIndex = (index - 1 + days.length) % days.length;
                break;
            case "Home":
                nextIndex = 0;
                break;
            case "End":
                nextIndex = days.length - 1;
                break;
            default:
                return;
        }

        event.preventDefault();
        setActiveIndex(nextIndex);
        tabRefs.current[nextIndex]?.focus();
    };

    return (
        <section id="program" className="mt-20 scroll-mt-28">
            <div className="border-b border-[#cfddcf] pb-6 md:flex md:flex-row-reverse md:items-center md:justify-between md:gap-6">
                <h2 className="font-second text-[30px] font-semibold text-[#087541] uppercase sm:text-[40px]">
                    {copy.programTitle}
                </h2>
                <div
                    role="tablist"
                    aria-label={copy.programTitle}
                    className="mt-5 grid w-full grid-cols-2 gap-2.5 rounded-md border border-[#b8d0bc] bg-[#edf4ed] md:mt-0 md:w-auto"
                >
                    {days.map((day, index) => (
                        <button
                            key={day.id}
                            ref={(element) => {
                                tabRefs.current[index] = element;
                            }}
                            type="button"
                            role="tab"
                            id={`program-tab-${day.id}`}
                            aria-controls={`program-panel-${day.id}`}
                            aria-selected={index === selectedIndex}
                            tabIndex={index === selectedIndex ? 0 : -1}
                            onClick={() => setActiveIndex(index)}
                            onKeyDown={(event) =>
                                handleTabKeyDown(event, index)
                            }
                            className={`font-main flex min-h-16 min-w-0 flex-col items-center justify-center rounded-sm px-2 py-2 text-center transition-colors md:min-w-40 md:px-4 ${
                                index === selectedIndex
                                    ? "bg-[#087541] text-white shadow-sm"
                                    : "bg-white/80 text-[#2c4b39] hover:bg-white"
                            }`}
                        >
                            <span className="text-[14px] font-bold">
                                {day.title || `${copy.dayLabel} ${index + 1}`}
                            </span>
                            <span className="mt-0.5 text-[11px] font-semibold leading-4">
                                {formatForumDayDate(day.date, locale)}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {days.map((day, index) => (
                <div
                    key={day.id}
                    role="tabpanel"
                    id={`program-panel-${day.id}`}
                    aria-labelledby={`program-tab-${day.id}`}
                    tabIndex={index === selectedIndex ? 0 : -1}
                    hidden={index !== selectedIndex}
                    className={
                        index === selectedIndex
                            ? "py-8 sm:py-10"
                            : "hidden"
                    }
                >
                    <ol className="divide-y divide-[#dbe5db]">
                        {day.items.map((item) => {
                            const speakers = item.speakers?.length
                                ? item.speakers.map(
                                      ({ participant }) => participant,
                                  )
                                : item.speaker
                                  ? [item.speaker]
                                  : [];

                            return (
                                <li
                                    key={item.id}
                                    className="grid gap-3 py-6 items-center sm:grid-cols-[220px_1fr] sm:gap-10"
                                >
                                    <time
                                        dateTime={`${day.date.slice(0, 10)}T${item.startsAt}`}
                                        className="font-second flex flex-wrap items-baseline gap-x-2 text-[36px] leading-none font-semibold text-[#c9a66c] tabular-nums sm:text-[44px]"
                                    >
                                        {item.startsAt}
                                        {item.endsAt && (
                                            <span className="font-main text-[16px] font-medium text-[#4a6155]">
                                                – {item.endsAt}
                                            </span>
                                        )}
                                    </time>
                                    <div>
                                        <h4 className="font-main text-[18px] leading-7 font-bold text-[#163d2b] sm:text-[21px]">
                                            {item.title}
                                        </h4>
                                        {item.description && (
                                            <p className="font-main mt-2 max-w-[800px] text-[15px] leading-6 whitespace-pre-line text-[#4a6155]">
                                                {item.description}
                                            </p>
                                        )}
                                        {speakers.length > 0 && (
                                            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                                                {speakers.map((speaker) => {
                                                    const photo =
                                                        getForumMediaUrl(
                                                            speaker.photoUrl,
                                                        );
                                                    return (
                                                        <div
                                                            key={speaker.id}
                                                            className="flex items-center gap-3"
                                                        >
                                                            {photo && (
                                                                <Image
                                                                    src={photo}
                                                                    alt={`${speaker.firstName} ${speaker.lastName}`}
                                                                    width={36}
                                                                    height={36}
                                                                    className="size-9 rounded-full object-cover"
                                                                    unoptimized
                                                                />
                                                            )}
                                                            <span className="font-main text-[13px] font-semibold text-[#4a6155]">
                                                                {
                                                                    speaker.firstName
                                                                }{" "}
                                                                {
                                                                    speaker.lastName
                                                                }
                                                            </span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            ))}
        </section>
    );
}
