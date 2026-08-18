import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/component/layout/Container/Container";
import { withLocalePath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";
import { loginVacancyAccount } from "./actions";
import { isLoginErrorCode } from "./login.constants";
import Logo from "@/component/ui/Logo/Logo";
import SectionTop from "@/component/ui/SectionTop/SectionTop";

type PageProps = {
    searchParams: Promise<{
        status?: string;
        error?: string;
    }>;
};

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);
    const copy = dictionary.vacancy.login;

    return {
        title: `${copy.title} | TMT Consulting Group`,
        description: copy.description,
    };
}

export default async function VacancyLogin({ searchParams }: PageProps) {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);
    const copy = dictionary.vacancy.login;
    const params = await searchParams;
    const errorCode = isLoginErrorCode(params.error) ? params.error : null;
    const isLoggedIn = params.status === "logged-in";

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
                <form
                    action={loginVacancyAccount}
                    className="mx-auto mt-12 w-full max-w-[515px] rounded-[8px] border border-primary bg-white px-6 py-8 sm:px-21 sm:py-10"
                >
                    <div className="text-center">
                        <h1 className="font-second text-[22px] font-semibold tracking-[0.18em] text-primary uppercase">
                            {copy.title}
                        </h1>
                        <p className="mx-auto mt-3 max-w-[305px] font-main text-[12px] leading-5 font-medium text-dark">
                            {copy.description}
                        </p>
                    </div>

                    <div className="mt-12 flex flex-col gap-5">
                        <label className="flex flex-col gap-2 font-main text-[14px] font-medium text-dark">
                            {copy.email}
                            <input
                                type="email"
                                name="email"
                                placeholder={copy.emailPlaceholder}
                                autoComplete="email"
                                required
                                className="h-10 w-full border border-primary/50 bg-white px-3 font-main text-[12px] font-medium text-dark outline-none transition placeholder:text-primary/35 focus:border-primary focus:ring-2 focus:ring-primary/15"
                            />
                        </label>

                        <label className="flex flex-col gap-2 font-main text-[14px] font-medium text-dark">
                            {copy.password}
                            <input
                                type="password"
                                name="password"
                                autoComplete="current-password"
                                minLength={6}
                                required
                                className="h-10 w-full border border-primary/50 bg-white px-3 font-main text-[12px] font-medium text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                            />
                        </label>
                    </div>

                    <div className="mt-3 flex justify-end">
                        <Link
                            href={withLocalePath("/vacancy/reset", locale)}
                            className="font-main text-[12px] font-bold text-primary transition-opacity duration-300 hover:opacity-70"
                        >
                            {copy.forgotPassword}
                        </Link>
                    </div>

                    {(isLoggedIn || errorCode) && (
                        <p
                            className={`mt-5 font-main text-[12px] leading-5 font-semibold ${
                                isLoggedIn ? "text-primary" : "text-red-600"
                            }`}
                        >
                            {isLoggedIn
                                ? copy.success
                                : copy.errors[errorCode!]}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="mx-auto mt-10 block rounded-[4px] bg-primary px-6 py-3 font-main text-[13px] font-bold text-white transition-colors duration-300 hover:bg-primary-hover"
                    >
                        {copy.submit}
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
            </Container>
        </div>
    );
}
