"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Check, X } from "lucide-react";

import { withLocalePath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type ForumDelegateSuccessDialogProps = {
    locale: Locale;
    copy: Dictionary["forums"]["registration"];
    onClose: () => void;
};

export default function ForumDelegateSuccessDialog({
    locale,
    copy,
    onClose,
}: ForumDelegateSuccessDialogProps) {
    const closeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        closeRef.current?.focus();
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="delegate-success-title"
                aria-describedby="delegate-success-text"
                className="relative w-full max-w-[480px] rounded-[8px] border border-[#cfddcf] bg-white px-6 py-10 text-center shadow-xl sm:px-10"
            >
                <button
                    ref={closeRef}
                    type="button"
                    aria-label={copy.close}
                    onClick={onClose}
                    className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-[4px] text-[#4a6155] hover:bg-[#edf4ed]"
                >
                    <X size={20} aria-hidden="true" />
                </button>
                <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#e7f4e8] text-[#087541]">
                    <Check size={30} aria-hidden="true" />
                </span>
                <h2 id="delegate-success-title" className="mt-5 font-second text-[24px] font-semibold text-[#163d2b]">
                    {copy.successTitle}
                </h2>
                <p id="delegate-success-text" className="mt-3 font-main text-[16px] text-[#4a6155]">
                    {copy.successText}
                </p>
                <Link
                    href={withLocalePath("/about-us", locale)}
                    className="mt-7 inline-flex min-h-11 items-center justify-center rounded-[4px] bg-[#087541] px-6 font-main text-[14px] font-semibold text-white hover:bg-[#075a34]"
                >
                    {copy.aboutCta}
                </Link>
            </div>
        </div>
    );
}
