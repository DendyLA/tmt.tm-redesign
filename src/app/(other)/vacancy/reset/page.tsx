import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import Container from "@/component/layout/Container/Container";
import Logo from "@/component/ui/Logo/Logo";
import SectionTop from "@/component/ui/SectionTop/SectionTop";
import { withLocalePath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";
import { createResetPassword, requestPasswordReset } from "./actions";
import { isResetErrorCode } from "./reset.constants";


type PageProps = {
    searchParams: Promise<{
        status?: string;
        error?: string;
        token?: string;
    }>;
};

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);
    const copy = dictionary.vacancy.reset;

    return {
        title: `${copy.title} | TMT Consulting Group`,
        description: copy.success,
    };
}

export default async function VacancyReset({ searchParams }: PageProps) {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);
    const copy = dictionary.vacancy.reset;
    const params = await searchParams;
    const errorCode = isResetErrorCode(params.error) ? params.error : null;
    const isSent = params.status === "sent";
    const isPasswordCreated = params.status === "password-created";
    const token = typeof params.token === "string" ? params.token.trim() : "";
    const requestErrorCode =
        errorCode === "email" || errorCode === "failed" ? errorCode : null;
    const createErrorCode =
        errorCode && errorCode !== "email" ? errorCode : null;

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

                {isPasswordCreated ? (
                    <div className="mx-auto mt-12 w-full max-w-[515px] rounded-[8px] border border-primary bg-white px-6 py-8 text-center sm:px-8 sm:py-10">
                        <h1 className="font-second text-[22px] font-semibold tracking-[0.18em] text-primary uppercase">
                            {copy.create.successTitle}
                        </h1>

                        <p className="mx-auto mt-5 max-w-[320px] font-main text-[13px] leading-6 font-semibold text-dark">
                            {copy.create.success}
                        </p>

                        <Link
                            href={withLocalePath("/vacancy/login", locale)}
                            className="mx-auto mt-10 inline-flex rounded-[4px] bg-primary px-6 py-3 font-main text-[13px] font-bold text-white transition-colors duration-300 hover:bg-primary-hover"
                        >
                            {dictionary.vacancy.login.submit}
                        </Link>
                    </div>
                ) : token ? (
                    <form
                        action={createResetPassword}
                        className="mx-auto mt-12 w-full max-w-[515px] rounded-[8px] border border-primary bg-white px-6 py-6 sm:px-8 sm:py-7"
                    >
                        <Link
                            href={withLocalePath("/vacancy/login", locale)}
                            className="inline-flex items-center gap-1 font-main text-[10px] font-medium text-dark transition-colors duration-300 hover:text-primary"
                        >
                            <ChevronLeft className="size-5 text-primary" />
                            {copy.back}
                        </Link>

                        <h1 className="mt-10 text-center font-second text-[22px] font-semibold tracking-[0.18em] text-primary uppercase">
                            {copy.create.title}
                        </h1>

                        <input type="hidden" name="token" value={token} />

                        <div className="mx-auto mt-16 flex w-full max-w-[300px] flex-col gap-5">
                            <label className="flex flex-col gap-2 font-main text-[14px] font-medium text-dark">
                                {copy.create.newPassword}
                                <input
                                    type="password"
                                    name="password"
                                    autoComplete="new-password"
                                    minLength={6}
                                    required
                                    className="h-9 w-full border border-primary/50 bg-white px-3 font-main text-[11px] font-medium text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                                />
                            </label>

                            <label className="flex flex-col gap-2 font-main text-[14px] font-medium text-dark">
                                {copy.create.confirmPassword}
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    autoComplete="new-password"
                                    minLength={6}
                                    required
                                    className="h-9 w-full border border-primary/50 bg-white px-3 font-main text-[11px] font-medium text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                                />
                            </label>

                            <p className="-mt-3 max-w-[270px] font-main text-[10px] leading-4 font-medium text-dark">
                                {copy.create.passwordHint}
                            </p>
                        </div>

                        {createErrorCode && (
                            <p
                                className="mx-auto mt-5 max-w-[300px] text-center font-main text-[12px] leading-5 font-semibold text-red-600"
                            >
                                {copy.create.errors[createErrorCode]}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="mx-auto mt-11 block rounded-[4px] bg-primary px-6 py-3 font-main text-[12px] font-bold text-white transition-colors duration-300 hover:bg-primary-hover"
                        >
                            {copy.create.submit}
                        </button>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-main text-[14px] font-semibold text-dark">
                            <span>{copy.noAccount}</span>
                            <Link
                                href={withLocalePath("/vacancy/signup", locale)}
                                className="text-primary transition-opacity duration-300 hover:opacity-70"
                            >
                                {copy.signup}
                            </Link>
                        </div>
                    </form>
                ) : (
                    <form
                        action={requestPasswordReset}
                        className="mx-auto mt-12 w-full max-w-[440px] rounded-[8px] border border-primary bg-white px-6 py-6 sm:px-8 sm:py-7"
                    >
                        <Link
                            href={withLocalePath("/vacancy/login", locale)}
                            className="inline-flex items-center gap-1 font-main text-[10px] font-medium text-dark transition-colors duration-300 hover:text-primary"
                        >
                            <ChevronLeft className="size-5 text-primary" />
                            {copy.back}
                        </Link>

                        <h1 className="mt-10 text-center font-second text-[22px] font-semibold tracking-[0.18em] text-primary uppercase">
                            {copy.title}
                        </h1>

                        <div className="mx-auto mt-16 flex w-full max-w-[260px] flex-col gap-2">
                            <label
                                htmlFor="reset-email"
                                className="font-main text-[13px] font-medium text-dark"
                            >
                                {copy.email}
                            </label>
                            <input
                                id="reset-email"
                                type="email"
                                name="email"
                                placeholder={copy.emailPlaceholder}
                                autoComplete="email"
                                required
                                className="h-9 w-full border border-primary/50 bg-white px-3 font-main text-[11px] font-medium text-dark outline-none transition placeholder:text-primary/35 focus:border-primary focus:ring-2 focus:ring-primary/15"
                            />
                        </div>

                        {(isSent || requestErrorCode) && (
                            <p
                                className={`mx-auto mt-5 max-w-[280px] text-center font-main text-[12px] leading-5 font-semibold ${
                                    isSent ? "text-primary" : "text-red-600"
                                }`}
                            >
                                {isSent
                                    ? copy.success
                                    : copy.errors[requestErrorCode!]}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="mx-auto mt-28 block rounded-[4px] bg-primary px-6 py-3 font-main text-[12px] font-bold text-white transition-colors duration-300 hover:bg-primary-hover"
                        >
                            {copy.submit}
                        </button>

                        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-main text-[12px] font-semibold text-dark">
                            <span>{copy.noAccount}</span>
                            <Link
                                href={withLocalePath("/vacancy/signup", locale)}
                                className="text-primary transition-opacity duration-300 hover:opacity-70"
                            >
                                {copy.signup}
                            </Link>
                        </div>
                    </form>
                )}
            </Container>
        </div>
    );
}
