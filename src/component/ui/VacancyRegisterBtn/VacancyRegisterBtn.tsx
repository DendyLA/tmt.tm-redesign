import Link from "next/link";

import { withLocalePath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";
import cn from "@/lib/utils/cn";
import { getAuthSession } from "@/services/auth/auth.cookies";
import AuthUserMenu from "./AuthUserMenu";

type VacancyRegisterBtnProps = {
    className?: string;
};

export default async function VacancyRegisterBtn({
    className = "",
}: VacancyRegisterBtnProps) {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);
    const session = await getAuthSession();

    if (session) {
        return (
            <AuthUserMenu
                email={session.email}
                profileHref={withLocalePath("/profile", locale)}
                className={className}
            />
        );
    }

    return (
        <Link
            href={withLocalePath("/vacancy/signup", locale)}
            className={cn(
                "btn btn-primary rounded-[10px] bg-[linear-gradient(270deg,rgba(232,101,10,0.2)_0%,rgba(254,247,242,0.2)_86.21%)] px-6.5 py-3 font-main text-[20px] font-semibold text-primary shadow-[0px_2px_2px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in-out hover:scale-105 hover:opacity-70",
                className,
            )}
        >
            {dictionary.vacancy.employerCta}
        </Link>
    );
}
