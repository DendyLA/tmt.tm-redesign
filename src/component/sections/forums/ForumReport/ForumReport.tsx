import { ArrowUpRight, Download } from "lucide-react";

import type { Dictionary } from "@/lib/i18n/dictionaries";
import ForumReportViewer from "./ForumReportViewer";

const reportUrl = "/files/turkmen-chinese-business-forum-report.pdf";

type ForumReportProps = {
    copy: Dictionary["forums"]["report"];
};

export default function ForumReport({ copy }: ForumReportProps) {
    return (
        <section className="mt-20 bg-[#eaf2e9] px-5 py-10 sm:px-10 lg:px-14 lg:py-14">
            <div className="flex flex-wrap items-end justify-between gap-6">
                <div className="max-w-[760px]">
                    <p className="font-main text-[12px] font-bold uppercase text-[#a27c42]">
                        {copy.label}
                    </p>
                    <h2 className="mt-3 max-w-[540px] font-second text-[27px] font-semibold leading-tight text-[#087541] sm:text-[36px]">
                        {copy.title}
                    </h2>
                </div>
                <div className="flex flex-wrap gap-3">
                    <a
                        href={reportUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#087541] px-5 py-3 font-main text-[14px] font-semibold text-white transition-colors hover:bg-[#075a34]"
                    >
                        {copy.open}
                        <ArrowUpRight aria-hidden="true" size={18} />
                    </a>
                    <a
                        href={reportUrl}
                        download
                        className="inline-flex items-center gap-2 border border-[#087541] px-5 py-3 font-main text-[14px] font-semibold text-[#087541] transition-colors hover:bg-white"
                    >
                        {copy.download}
                        <Download aria-hidden="true" size={18} />
                    </a>
                </div>
            </div>
            <ForumReportViewer copy={copy} />
        </section>
    );
}
