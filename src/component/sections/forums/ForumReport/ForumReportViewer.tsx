"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { Dictionary } from "@/lib/i18n/dictionaries";

const pageCount = 28;

type ForumReportViewerProps = {
    copy: Dictionary["forums"]["report"];
};

export default function ForumReportViewer({ copy }: ForumReportViewerProps) {
    const [page, setPage] = useState(1);
    const imageSrc = page === 1
        ? "/files/turkmen-chinese-business-forum-report-cover.webp"
        : `/files/forum-report/page-${String(page).padStart(2, "0")}.webp`;

    return (
        <div className="mx-auto mt-8 w-full border border-[#cddfcf] bg-white lg:w-[60%]">
            <div className="flex items-center justify-between border-b border-[#cddfcf] px-3 py-2 sm:px-5">
                <span className="font-main text-[14px] font-semibold text-[#3b5548]">
                    {copy.page} {page} / {pageCount}
                </span>
                <div className="flex gap-2">
                    <button
                        type="button"
                        aria-label={copy.previous}
                        title={copy.previous}
                        disabled={page === 1}
                        onClick={() => setPage((current) => current - 1)}
                        className="flex size-10 items-center justify-center border border-[#087541] text-[#087541] transition-colors hover:bg-[#eaf2e9] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        <ChevronLeft aria-hidden="true" size={20} />
                    </button>
                    <button
                        type="button"
                        aria-label={copy.next}
                        title={copy.next}
                        disabled={page === pageCount}
                        onClick={() => setPage((current) => current + 1)}
                        className="flex size-10 items-center justify-center border border-[#087541] text-[#087541] transition-colors hover:bg-[#eaf2e9] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        <ChevronRight aria-hidden="true" size={20} />
                    </button>
                </div>
            </div>
            <Image
                src={imageSrc}
                alt={`${copy.title}. ${copy.page} ${page} / ${pageCount}`}
                width={1263}
                height={893}
                unoptimized
                className="h-auto w-full"
            />
        </div>
    );
}
