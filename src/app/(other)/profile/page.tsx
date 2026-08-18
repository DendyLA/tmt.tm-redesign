import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
    ChevronsLeft,
    ChevronsRight,
    Pencil,
    Plus,
} from "lucide-react";

import Container from "@/component/layout/Container/Container";
import AuthUserMenu from "@/component/ui/VacancyRegisterBtn/AuthUserMenu";
import Logo from "@/component/ui/Logo/Logo";
import SectionTop from "@/component/ui/SectionTop/SectionTop";
import { type Locale, withLocalePath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";
import {
    getAuthAccessToken,
    getAuthSession,
} from "@/services/auth/auth.cookies";
import { getMyVacancies } from "@/services/vacancy/vacancy.service";
import type { VacancyData } from "@/services/vacancy/vacancy.types";
import DeleteVacancyDialog from "./vacancies/DeleteVacancyDialog";

type PageProps = {
    searchParams: Promise<{
        page?: string;
        status?: string;
        error?: string;
    }>;
};

const statusToneByStatus: Record<string, string> = {
    APPROVED: "bg-[#DDF8D9] text-[#22A019]",
    PENDING: "bg-[#FFF0E6] text-primary",
    DRAFT: "bg-[#E8E8E8] text-dark",
    REJECTED: "bg-red-50 text-red-600",
    ARCHIVED: "bg-[#E8E8E8] text-dark/70",
};

function parsePage(value: string | undefined) {
    const page = Number(value);
    return Number.isInteger(page) && page > 0 ? page : 1;
}

function getProfilePath(locale: Locale, page: number) {
    return withLocalePath(`/profile?page=${page}`, locale);
}

function formatDate(value: string, locale: Locale) {
    return new Date(value).toLocaleDateString(
        locale === "en" ? "en-US" : locale === "tm" ? "tk-TM" : "ru-RU",
    );
}

function getVacancyTitle(vacancy: VacancyData) {
    return vacancy.translation?.title ?? vacancy.title;
}

function getVacancyDescription(vacancy: VacancyData) {
    return vacancy.translation?.description ?? vacancy.description;
}

function getVacancyLocation(vacancy: VacancyData) {
    return vacancy.translation?.location ?? vacancy.location;
}

function getVacancyCategory(vacancy: VacancyData, fallback: string) {
    return vacancy.tags?.[0]?.tag?.name ?? fallback;
}

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);

    return {
        title: `${dictionary.profile.title} | TMT Consulting Group`,
        description: dictionary.profile.description,
    };
}

export default async function ProfilePage({ searchParams }: PageProps) {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);
    const copy = dictionary.profile;
    const session = await getAuthSession();
    const accessToken = await getAuthAccessToken();

    if (!session || !accessToken) {
        redirect(withLocalePath("/vacancy/login", locale));
    }

    const params = await searchParams;
    const page = parsePage(params.page);
    const vacancies = await getMyVacancies({
        page,
        locale,
        accessToken,
    });
    const items = vacancies?.data ?? [];
    const meta = vacancies?.meta;
    const statusMessage =
        params.status && params.status in copy.statusMessages
            ? copy.statusMessages[
                  params.status as keyof typeof copy.statusMessages
              ]
            : null;
    const errorMessage =
        params.error && params.error in copy.errors
            ? copy.errors[params.error as keyof typeof copy.errors]
            : null;

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

                <section className="mx-auto mt-12 w-full max-w-[1050px]">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                            <h1 className="font-second text-[22px] font-semibold tracking-[0.12em] text-primary uppercase">
                                {copy.vacancies.title}
                            </h1>
                            <p className="mt-2 font-main text-[14px] font-semibold text-dark">
                                {copy.vacancies.subtitle}
                            </p>
                        </div>

                        <Link
                            href={withLocalePath(
                                "/profile/vacancies/new",
                                locale,
                            )}
                            className="inline-flex w-max items-center gap-3 rounded-[4px] bg-primary px-5 py-3 font-main text-[12px] font-bold text-white uppercase transition-colors duration-300 hover:bg-primary-hover"
                        >
                            <Plus className="size-5" />
                            {copy.vacancies.add}
                        </Link>
                    </div>

                    {(statusMessage || errorMessage) && (
                        <p
                            className={`mt-5 rounded-[4px] px-4 py-3 font-main text-[13px] font-semibold ${
                                statusMessage
                                    ? "bg-white text-primary"
                                    : "bg-red-50 text-red-600"
                            }`}
                        >
                            {statusMessage ?? errorMessage}
                        </p>
                    )}

                    <div className="mt-5 overflow-x-auto rounded-[8px] border border-primary bg-white">
                        <table className="w-full min-w-[900px] border-collapse">
                            <thead>
                                <tr className="border-b border-primary/60">
                                    <th className="w-[31%] px-9 py-5 text-left font-main text-[12px] font-bold text-dark uppercase">
                                        {copy.vacancies.columns.position}
                                    </th>
                                    <th className="w-[14%] px-5 py-5 text-left font-main text-[12px] font-bold text-dark uppercase">
                                        {copy.vacancies.columns.category}
                                    </th>
                                    <th className="w-[12%] px-5 py-5 text-left font-main text-[12px] font-bold text-dark uppercase">
                                        {copy.vacancies.columns.location}
                                    </th>
                                    <th className="w-[12%] px-5 py-5 text-left font-main text-[12px] font-bold text-dark uppercase">
                                        {copy.vacancies.columns.date}
                                    </th>
                                    <th className="w-[16%] px-5 py-5 text-left font-main text-[12px] font-bold text-dark uppercase">
                                        {copy.vacancies.columns.status}
                                    </th>
                                    <th className="w-[15%] px-5 py-5 text-left font-main text-[12px] font-bold text-dark uppercase">
                                        {copy.vacancies.columns.actions}
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {items.map((item) => {
                                    const statusLabel =
                                        copy.vacancies.statuses[
                                            item.status as keyof typeof copy.vacancies.statuses
                                        ] ?? item.status;
                                    const description =
                                        getVacancyDescription(item);

                                    return (
                                        <tr
                                            key={item.id}
                                            className="border-b border-primary/40 last:border-b-0"
                                        >
                                            <td className="px-9 py-5 align-top">
                                                <h2 className="font-main text-[14px] font-bold text-primary">
                                                    {getVacancyTitle(item)}
                                                </h2>
                                                <p className="mt-2 line-clamp-2 max-w-[285px] font-main text-[11px] leading-4 font-medium text-dark">
                                                    {description}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 align-top font-main text-[11px] font-semibold text-dark">
                                                {getVacancyCategory(
                                                    item,
                                                    copy.vacancies.noCategory,
                                                )}
                                            </td>
                                            <td className="px-5 py-5 align-top font-main text-[11px] font-semibold text-dark">
                                                {getVacancyLocation(item)}
                                            </td>
                                            <td className="px-5 py-5 align-top font-main text-[11px] font-semibold text-dark">
                                                {formatDate(
                                                    item.createdAt,
                                                    locale,
                                                )}
                                            </td>
                                            <td className="px-5 py-5 align-top">
                                                <span
                                                    className={`inline-flex rounded-full px-3 py-1 font-main text-[11px] font-semibold ${
                                                        statusToneByStatus[
                                                            item.status
                                                        ] ??
                                                        "bg-[#E8E8E8] text-dark"
                                                    }`}
                                                >
                                                    {statusLabel}
                                                </span>
                                            </td>
                                            <td className="px-5 py-5 align-top">
                                                <div className="flex items-center gap-4">
                                                    <Link
                                                        href={withLocalePath(
                                                            `/profile/vacancies/${item.id}/edit`,
                                                            locale,
                                                        )}
                                                        aria-label={
                                                            copy.vacancies.edit
                                                        }
                                                        title={
                                                            copy.vacancies.edit
                                                        }
                                                        className="inline-flex size-8 items-center justify-center rounded-[4px] border border-primary/50 text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
                                                    >
                                                        <Pencil className="size-4" />
                                                    </Link>

                                                    <DeleteVacancyDialog
                                                        id={item.id}
                                                        labels={
                                                            copy.vacancies
                                                                .deleteConfirm
                                                        }
                                                        triggerLabel={
                                                            copy.vacancies
                                                                .delete
                                                        }
                                                    />
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>

                        {!items.length && (
                            <p className="px-6 py-12 text-center font-main text-[14px] font-semibold text-dark">
                                {copy.vacancies.empty}
                            </p>
                        )}

                        {meta && meta.pages > 1 && (
                            <div className="flex items-center justify-center gap-5 border-t border-primary/40 px-6 py-9">
                                <Link
                                    href={getProfilePath(
                                        locale,
                                        Math.max(1, page - 1),
                                    )}
                                    aria-label={copy.vacancies.previous}
                                    className={`text-primary transition-opacity duration-300 ${
                                        page <= 1
                                            ? "pointer-events-none opacity-40"
                                            : "hover:opacity-70"
                                    }`}
                                >
                                    <ChevronsLeft className="size-7" />
                                </Link>

                                {Array.from(
                                    { length: meta.pages },
                                    (_, index) => index + 1,
                                ).map((item) => (
                                    <Link
                                        key={item}
                                        href={getProfilePath(locale, item)}
                                        className={`inline-flex size-5 items-center justify-center rounded-[3px] border border-primary font-main text-[11px] font-bold transition-colors duration-300 ${
                                            item === page
                                                ? "bg-primary text-white"
                                                : "text-primary hover:bg-primary hover:text-white"
                                        }`}
                                    >
                                        {item}
                                    </Link>
                                ))}

                                <Link
                                    href={getProfilePath(
                                        locale,
                                        Math.min(meta.pages, page + 1),
                                    )}
                                    aria-label={copy.vacancies.next}
                                    className={`text-primary transition-opacity duration-300 ${
                                        page >= meta.pages
                                            ? "pointer-events-none opacity-40"
                                            : "hover:opacity-70"
                                    }`}
                                >
                                    <ChevronsRight className="size-7" />
                                </Link>
                            </div>
                        )}
                    </div>
                </section>
            </Container>
        </main>
    );
}
