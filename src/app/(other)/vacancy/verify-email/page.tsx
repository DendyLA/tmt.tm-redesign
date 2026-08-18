import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/component/layout/Container/Container";
import Logo from "@/component/ui/Logo/Logo";
import SectionTop from "@/component/ui/SectionTop/SectionTop";
import { withLocalePath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";
import { resendVerificationEmail } from "./actions";
import {
    isResendVerificationErrorCode,
    isVerifyEmailStatus,
} from "./verify-email.constants";

type PageProps = {
    searchParams: Promise<{
        status?: string;
        error?: string;
    }>;
};

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);
    const copy = dictionary.vacancy.verifyEmail;

    return {
        title: `${copy.title} | TMT Consulting Group`,
        description: copy.sentText,
    };
}

export default async function VacancyVerifyEmail({
    searchParams,
}: PageProps) {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);
    const copy = dictionary.vacancy.verifyEmail;
    const params = await searchParams;
    const status = isVerifyEmailStatus(params.status)
        ? params.status
        : "sent";
    const errorCode = isResendVerificationErrorCode(params.error)
        ? params.error
        : null;
    const isVerified = status === "verified";
    const isFailed = status === "failed";

    const title = isVerified
        ? copy.verifiedTitle
        : isFailed
          ? copy.failedTitle
          : copy.sentTitle;
    const text = isVerified
        ? copy.verifiedText
        : isFailed
          ? copy.failedText
          : copy.sentText;

    return (
        <div className="bg-second-gradient-bottom min-h-screen px-4 py-12 sm:py-16">
            <Container>
                <div className="flex items-center justify-between">
                    <Logo />
                </div>

                <SectionTop
                    titleTop={dictionary.sections.vacancy.title}
                    titleBottom={dictionary.sections.vacancy.subtitle}
                    className="mt-8 sm:mt-2"
                />

                <div className="mx-auto mt-12 w-full max-w-[515px] rounded-[8px] border border-primary bg-white px-6 py-8 text-center sm:px-16 sm:py-10">
                    <h1 className="font-second text-[22px] font-semibold tracking-[0.18em] text-primary uppercase">
                        {title}
                    </h1>
                    <p className="mx-auto mt-4 max-w-[340px] font-main text-[13px] leading-6 font-medium text-dark">
                        {text}
                    </p>

                    {!isVerified && (
                        <p className="mx-auto mt-3 max-w-[340px] font-main text-[12px] leading-5 font-medium text-dark/75">
                            {copy.spamText}
                        </p>
                    )}

                    {status === "resent" && (
                        <p className="mt-5 font-main text-[12px] leading-5 font-semibold text-primary">
                            {copy.resent}
                        </p>
                    )}

                    {errorCode && (
                        <p className="mt-5 font-main text-[12px] leading-5 font-semibold text-red-600">
                            {copy.errors[errorCode]}
                        </p>
                    )}

                    {!isVerified && (
                        <form action={resendVerificationEmail}>
                            <button
                                type="submit"
                                className="mx-auto mt-8 block rounded-[4px] bg-primary px-6 py-3 font-main text-[13px] font-bold text-white transition-colors duration-300 hover:bg-primary-hover"
                            >
                                {copy.resend}
                            </button>
                        </form>
                    )}

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 font-main text-[13px] font-semibold">
                        <Link
                            href={withLocalePath("/vacancy/login", locale)}
                            className="text-primary transition-opacity duration-300 hover:opacity-70"
                        >
                            {copy.login}
                        </Link>
                        <Link
                            href={withLocalePath("/vacancy", locale)}
                            className="text-dark transition-opacity duration-300 hover:opacity-70"
                        >
                            {copy.vacancies}
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}
