import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/component/layout/Container/Container";
import Logo from "@/component/ui/Logo/Logo";
import SectionTop from "@/component/ui/SectionTop/SectionTop";
import { withLocalePath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";
import { registerVacancyAccount } from "./actions";
import { isRegisterErrorCode } from "./register.constants";

type PageProps = {
    searchParams: Promise<{
        status?: string;
        error?: string;
    }>;
};

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);
    const copy = dictionary.vacancy.register;

    return {
        title: `${copy.title} | TMT Consulting Group`,
        description: copy.description,
    };
}

export default async function VacancySignup({ searchParams }: PageProps) {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);
    const copy = dictionary.vacancy.register;
    const params = await searchParams;
    const errorCode = isRegisterErrorCode(params.error)
        ? params.error
        : null;
    const isRegistered = params.status === "registered";

    return (
        <div className="bg-second-gradient-bottom min-h-screen py-8 sm:py-12.5">
            <Container>
                <div className="flex items-center justify-between">
                    <Logo />
                </div>

                <SectionTop
                    titleTop={dictionary.sections.vacancy.title}
                    titleBottom={dictionary.sections.vacancy.subtitle}
                    className="mt-8 sm:mt-2"
                />


                <div className="mt-11 flex justify-center sm:mt-24">
                    <form
                        action={registerVacancyAccount}
                        className="w-full max-w-[430px] rounded-[8px] border border-primary bg-white px-6 py-8 sm:px-13 sm:py-10"
                    >
                        <div className="text-center">
                            <h1 className="font-second text-[22px] font-semibold tracking-[0.18em] text-primary uppercase">
                                {copy.title}
                            </h1>
                            <p className="mx-auto mt-3 max-w-[285px] font-main text-[12px] leading-5 font-medium text-dark">
                                {copy.description}
                            </p>
                        </div>

                        <div className="mt-10 flex flex-col gap-5">
                            <label className="flex flex-col gap-2 font-main text-[14px] font-medium text-dark">
                                {copy.email}
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={copy.emailPlaceholder}
                                    autoComplete="email"
                                    required
                                    className="h-8 w-full border border-primary/50 bg-white px-3 font-main text-[12px] font-medium text-dark outline-none transition placeholder:text-primary/35 focus:border-primary focus:ring-2 focus:ring-primary/15"
                                />
                            </label>

                            <label className="flex flex-col gap-2 font-main text-[14px] font-medium text-dark">
                                {copy.password}
                                <input
                                    type="password"
                                    name="password"
                                    autoComplete="new-password"
                                    minLength={6}
                                    required
                                    className="h-8 w-full border border-primary/50 bg-white px-3 font-main text-[12px] font-medium text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                                />
                            </label>

                            <p className="-mt-3 max-w-[270px] font-main text-[10px] leading-4 font-medium text-dark">
                                {copy.passwordHint}
                            </p>
                        </div>

                        <label className="mt-8 flex items-start gap-3 font-main text-[11px] leading-4 font-medium text-dark">
                            <input
                                type="checkbox"
                                name="terms"
                                required
                                className="mt-0.5 size-4 shrink-0 appearance-none border border-primary bg-white checked:bg-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                            <span>
                                {copy.termsStart}{" "}
                                <span className="text-primary">
                                    {copy.privacy}
                                </span>{" "}
                                {copy.termsMiddle}{" "}
                                <span className="text-primary">
                                    {copy.terms}
                                </span>
                            </span>
                        </label>

                        {(isRegistered || errorCode) && (
                            <p
                                className={`mt-5 font-main text-[12px] leading-5 font-semibold ${
                                    isRegistered
                                        ? "text-primary"
                                        : "text-red-600"
                                }`}
                            >
                                {isRegistered
                                    ? copy.success
                                    : copy.errors[errorCode!]}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="mx-auto mt-8 block rounded-[4px] bg-primary px-6 py-3 font-main text-[13px] font-bold text-white transition-colors duration-300 hover:bg-primary-hover"
                        >
                            {copy.submit}
                        </button>

                        <div className="mt-8 flex items-center justify-center gap-4 font-main text-[12px] font-semibold text-dark">
                            <span>{copy.hasAccount}</span>
                            <Link
                                href={withLocalePath("/vacancy/login", locale)}
                                className="text-primary transition-opacity duration-300 hover:opacity-70"
                            >
                                {copy.login}
                            </Link>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
}
