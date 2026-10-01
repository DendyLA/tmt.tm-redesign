import type { Metadata } from "next";

import Container from "@/component/layout/Container/Container";
import ForumDelegateForm from "@/component/sections/forums/ForumDelegateForm/ForumDelegateForm";
import Logo from "@/component/ui/Logo/Logo";
import { getApiLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";
import { featuredForumSlug } from "@/services/forums/forums.constants";
import { getForum } from "@/services/forums/forums.service";
import { getForumTitle } from "@/services/forums/forums.utils";

type ForumSignupPageProps = {
    searchParams: Promise<{ forum?: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);

    return {
        title: `${dictionary.forums.registration.title} | TMT Consulting Group`,
        description: dictionary.forums.registration.subtitle,
    };
}

export default async function ForumSignupPage({ searchParams }: ForumSignupPageProps) {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);
    const requestedSlug = (await searchParams).forum;
    const forumSlug = requestedSlug && /^[a-z0-9-]{1,180}$/.test(requestedSlug)
        ? requestedSlug
        : featuredForumSlug;
    const forum = await getForum(forumSlug, getApiLocale(locale));

    return (
        <main className="bg-main-gradient-top py-10 sm:py-12.5">
            <Container>
                <div className="flex justify-center sm:justify-start">
                    <Logo />
                </div>
                <div className="mx-auto mt-12 max-w-[900px] text-center sm:mt-20">
                    <h1 className="font-second text-[28px] font-semibold text-[#087541] uppercase sm:text-[38px]">
                        {dictionary.forums.registration.title}
                    </h1>
                    <p className="mt-3 font-main text-[16px] leading-6 text-[#4a6155]">
                        {dictionary.forums.registration.subtitle}
                    </p>
                    {forum && (
                        <p className="mt-3 font-main text-[15px] font-semibold text-[#087541]">
                            {getForumTitle(forum)}
                        </p>
                    )}
                </div>
                <ForumDelegateForm
                    key={forumSlug}
                    forumSlug={forumSlug}
                    locale={locale}
                    copy={dictionary.forums.registration}
                />
            </Container>
        </main>
    );
}
