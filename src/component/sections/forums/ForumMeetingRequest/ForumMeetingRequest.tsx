"use client";

import { useRef, useState, type FormEvent } from "react";

import type { Dictionary } from "@/lib/i18n/dictionaries";
import {
    createForumMeetingRequest,
    ForumMeetingRequestError,
} from "@/services/forums/forum-meeting-requests.service";

type ForumMeetingRequestProps = {
    forumSlug: string;
    copy: Dictionary["forums"]["meetingRequest"];
};

export default function ForumMeetingRequest({ forumSlug, copy }: ForumMeetingRequestProps) {
    const formRef = useRef<HTMLFormElement>(null);
    const submissionInProgressRef = useRef(false);
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState<{ message: string; error: boolean } | null>(null);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (submissionInProgressRef.current) return;

        const data = new FormData(event.currentTarget);
        const message = String(data.get("message") || "").trim();

        submissionInProgressRef.current = true;
        setSubmitting(true);
        setStatus(null);
        try {
            await createForumMeetingRequest(forumSlug, { type: "B2B_B2G", message });
            formRef.current?.reset();
            setStatus({ message: copy.success, error: false });
        } catch (error) {
            const message = error instanceof ForumMeetingRequestError
                ? error.status === 400
                    ? copy.invalid
                    : error.status === 429
                      ? copy.rateLimit
                      : error.status === 404 || error.status === 503
                        ? copy.unavailable
                        : copy.error
                : copy.error;
            setStatus({ message, error: true });
        } finally {
            submissionInProgressRef.current = false;
            setSubmitting(false);
        }
    };

    return (
        <section className="mt-14 grid gap-8 border-t border-[#cfddcf] pt-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
                <h2 className="font-second text-[28px] font-semibold text-[#087541] uppercase sm:text-[36px]">
                    {copy.title}
                </h2>
                <p className="mt-5 max-w-[520px] font-main text-[16px] leading-7 text-[#3b5548] sm:text-[18px]">
                    {copy.intro}
                </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} aria-busy={submitting} className="grid min-w-0 gap-y-4">
                <div className="min-w-0">
                    <label htmlFor="meeting-message" className="font-main text-[14px] font-semibold text-[#163d2b]">
                        {copy.message} *
                    </label>
                    <textarea
                        id="meeting-message"
                        name="message"
                        required
                        minLength={10}
                        maxLength={2000}
                        rows={4}
                        placeholder={copy.messagePlaceholder}
                        disabled={submitting}
                        className="mt-2 min-h-36 w-full rounded-[4px] border border-[#afc8b2] bg-white px-3 py-3 font-main text-[15px] text-[#163d2b] outline-none focus:border-[#087541] focus:ring-2 focus:ring-[#087541]/15"
                    />
                </div>

                {status && (
                    <p
                        role={status.error ? "alert" : "status"}
                        className={`font-main text-[14px] ${status.error ? "text-red-700" : "text-[#087541]"}`}
                    >
                        {status.message}
                    </p>
                )}

                <div className="sm:flex sm:justify-end">
                    <button
                        type="submit"
                        disabled={submitting}
                        className="min-h-12 w-full rounded-[4px] bg-[#087541] px-7 font-main text-[14px] font-bold text-white transition-colors hover:bg-[#075a34] disabled:cursor-wait disabled:opacity-60 sm:w-auto"
                    >
                        {submitting ? copy.submitting : copy.submit}
                    </button>
                </div>
            </form>
        </section>
    );
}
