import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

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
import { getMyVacancyById } from "@/services/vacancy/vacancy.service";
import { updateProfileVacancy } from "../../actions";
import VacancyForm from "../../VacancyForm";

type PageProps = {
    params: Promise<{
        id: string;
    }>;
    searchParams: Promise<{
        error?: string;
    }>;
};

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);

    return {
        title: `${dictionary.profile.vacancies.form.editTitle} | TMT Consulting Group`,
        description: dictionary.profile.vacancies.subtitle,
    };
}

export default async function EditProfileVacancy({
    params,
    searchParams,
}: PageProps) {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);
    const session = await getAuthSession();
    const accessToken = await getAuthAccessToken();
    const { id } = await params;
    const query = await searchParams;

    if (!session || !accessToken) {
        redirect(withLocalePath("/vacancy/login", locale));
    }

    const [vacancy, categories] = await Promise.all([
        getMyVacancyById(id, locale, accessToken),
        getTags({
            scope: "VACANCY",
            exact: true,
            locale,
        }),
    ]);

    if (!vacancy) {
        notFound();
    }

    const updateAction = updateProfileVacancy.bind(null, vacancy.id);

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
                    action={updateAction}
                    categories={categories}
                    copy={dictionary.profile.vacancies}
                    error={query.error}
                    locale={locale}
                    mode="edit"
                    vacancy={vacancy}
                />
            </Container>
        </main>
    );
}
