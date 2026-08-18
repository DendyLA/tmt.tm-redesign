import type { Metadata } from "next";
import { redirect } from "next/navigation";

import Container from "@/component/layout/Container/Container";
import AuthUserMenu from "@/component/ui/VacancyRegisterBtn/AuthUserMenu";
import Logo from "@/component/ui/Logo/Logo";
import SectionTop from "@/component/ui/SectionTop/SectionTop";
import { withLocalePath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";
import {
    getAuthAccessToken,
    getAuthSession,
} from "@/services/auth/auth.cookies";
import { getTags } from "@/services/tags/tags.service";
import { createProfileVacancy } from "../actions";
import VacancyForm from "../VacancyForm";

type PageProps = {
    searchParams: Promise<{
        error?: string;
    }>;
};

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);

    return {
        title: `${dictionary.profile.vacancies.form.createTitle} | TMT Consulting Group`,
        description: dictionary.profile.vacancies.subtitle,
    };
}

export default async function NewProfileVacancy({ searchParams }: PageProps) {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);
    const session = await getAuthSession();
    const accessToken = await getAuthAccessToken();
    const params = await searchParams;

    if (!session || !accessToken) {
        redirect(withLocalePath("/vacancy/login", locale));
    }

    const categories = await getTags({
        scope: "VACANCY",
        exact: true,
        locale,
    });

    return (
        <main className="bg-second-gradient-bottom py-12 sm:py-16">
            <Container>
                <div className="flex items-center justify-between gap-6">
                    <Logo />
                    <AuthUserMenu
                        email={session.email}
                        profileHref={withLocalePath("/profile", locale)}
                        className="shrink-0"
                    />
                </div>

                <SectionTop
                    titleTop={dictionary.sections.vacancy.title}
                    titleBottom={dictionary.sections.vacancy.subtitle}
                    className="mt-8 sm:mt-2"
                />

                <VacancyForm
                    action={createProfileVacancy}
                    categories={categories}
                    copy={dictionary.profile.vacancies}
                    defaultContactEmail={session.email}
                    error={params.error}
                    locale={locale}
                    mode="create"
                />
            </Container>
        </main>
    );
}
