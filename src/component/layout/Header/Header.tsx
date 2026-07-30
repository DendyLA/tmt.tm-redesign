"use client";
import cn from "@/lib/utils/cn";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState, type MouseEvent } from "react";
import { getMenuItems } from "@/constants/constants";
import {
    getLocaleFromPathname,
    languageLabels,
    locales,
    type Locale,
    withLocalePath,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

type HeaderProps = {
    className?: string;
};

export default function Header({ className = "fixed top-5 " }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [pendingLanguagePathname, setPendingLanguagePathname] = useState<
        string | null
    >(null);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const locale = getLocaleFromPathname(pathname);
    const dictionary = getDictionary(locale);
    const menuItems = getMenuItems(locale);
    const search = searchParams.toString();

    const getLanguageHref = (nextLocale: Locale) =>
        withLocalePath(`${pathname}${search ? `?${search}` : ""}`, nextLocale);

    const handleLanguageClick = (
        event: MouseEvent<HTMLAnchorElement>,
        nextLocale: Locale,
    ) => {
        if (
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey ||
            event.button !== 0
        ) {
            return;
        }

        event.preventDefault();
        setIsOpen(false);

        if (nextLocale === locale) {
            return;
        }

        const href = getLanguageHref(nextLocale);
        const [nextPathname] = href.split("?");

        setPendingLanguagePathname(nextPathname || `/${nextLocale}`);
        router.push(href, { scroll: false });
    };

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        if (!pendingLanguagePathname || pathname !== pendingLanguagePathname) {
            return;
        }

        router.refresh();
        setPendingLanguagePathname(null);
    }, [pathname, pendingLanguagePathname, router]);

    return (
        <>
            <header
                className={cn(
                    "right-4 left-auto z-20 flex h-auto w-auto max-w-[calc(100vw-2rem)] translate-x-0 items-center justify-end rounded-3xl bg-white p-2 shadow-[0px_4px_4px_rgba(232,101,10,0.2)] lg:right-auto lg:left-1/2 lg:h-15 lg:w-max lg:max-w-none lg:-translate-x-1/2 lg:justify-center lg:gap-11.25 lg:px-7.25 lg:py-3.75",
                    className,
                )}
            >
                <button
                    type="button"
                    aria-label={dictionary.common.openMenu}
                    aria-controls="mobile-menu"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen(true)}
                    className="text-primary flex size-11 items-center justify-center rounded-full lg:hidden"
                >
                    <Menu size={28} />
                </button>

                <nav className="hidden shrink-0 items-center justify-center gap-7.5 lg:flex">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className="text-manrope text-dark hover:text-primary text-sm font-semibold transition-colors duration-300 ease-in-out"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <ul className="hidden shrink-0 items-center justify-center gap-3.5 lg:flex">
                    {locales.map((lang) => {
                        const isActive = locale === lang;

                        return (
                            <li key={lang}>
                                <a
                                    href={getLanguageHref(lang)}
                                    hrefLang={lang}
                                    aria-current={isActive ? "page" : undefined}
                                    onClick={(event) =>
                                        handleLanguageClick(event, lang)
                                    }
                                    className={`border-primary cursor-pointer rounded-[5px] border border-solid px-2.5 py-1 text-sm font-semibold transition duration-300 ${
                                        isActive
                                            ? "bg-primary text-white"
                                            : " text-primary hover:bg-primary bg-white hover:text-white"
                                        }`}
                                >
                                    {languageLabels[lang]}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </header>

            {isOpen && (
                <div
                    id="mobile-menu"
                    className="fixed inset-0 z-50 flex flex-col bg-white px-6 py-6 lg:hidden"
                >
                    <div className="flex items-center justify-end">
                        <button
                            type="button"
                            aria-label={dictionary.common.closeMenu}
                            onClick={() => setIsOpen(false)}
                            className="text-primary border-primary/30 font-main flex h-12 items-center justify-center gap-2 rounded-full border px-4 text-sm font-semibold"
                        >
                            <span>{dictionary.common.closeMenu}</span>
                            <X size={22} />
                        </button>
                    </div>

                    <nav className="mt-10 flex flex-col gap-6">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                                onClick={() => setIsOpen(false)}
                                className="font-second text-dark hover:text-primary text-[28px] leading-none font-semibold uppercase transition-colors duration-300"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <ul className="mt-auto flex items-center gap-3 pb-3">
                        {locales.map((lang) => {
                            const isActive = locale === lang;

                            return (
                                <li key={lang}>
                                    <a
                                        href={getLanguageHref(lang)}
                                        hrefLang={lang}
                                        aria-current={
                                            isActive ? "page" : undefined
                                        }
                                        onClick={(event) =>
                                            handleLanguageClick(event, lang)
                                        }
                                        className={`border-primary rounded-[5px] border border-solid px-3 py-1.5 text-sm font-semibold transition duration-300 ${
                                            isActive
                                                ? "bg-primary text-white"
                                                : "text-primary hover:bg-primary bg-white hover:text-white"
                                            }`}
                                    >
                                        {languageLabels[lang]}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </>
    );
}
