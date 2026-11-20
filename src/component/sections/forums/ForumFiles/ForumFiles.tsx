import { FileText } from "lucide-react";

import { getApiLocale, type Locale } from "@/lib/i18n/config";
import type { ForumFile } from "@/services/forums/forums.types";
import { getForumMediaUrl } from "@/services/forums/forums.utils";

type ForumFilesProps = {
    files?: ForumFile[];
    locale: Locale;
};

export default function ForumFiles({ files, locale }: ForumFilesProps) {
    const fileLocale = getApiLocale(locale);

    return files
        ?.filter((file) => file.isActive && file.locale === fileLocale && file.title.trim())
        .map((file) => {
            const href = getForumMediaUrl(file.fileUrl);
            if (!href) return null;

            return (
                <a
                    key={file.id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 max-w-full items-center gap-2 rounded-[4px] border border-[#087541] bg-white px-5 py-3 font-main text-[14px] font-bold text-[#087541] transition-colors duration-300 hover:bg-[#e8f2e9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087541]"
                >
                    <FileText aria-hidden="true" className="size-5 shrink-0" />
                    <span className="min-w-0 break-words">{file.title}</span>
                </a>
            );
        }) ?? null;
}
