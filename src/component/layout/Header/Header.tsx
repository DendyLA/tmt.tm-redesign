"use client";
import cn from "@/lib/utils/cn";
import { useState } from "react";
import { menuItems } from "@/constants/constants";
const languages = ["RU", "EN", "TM"];

type HeaderProps = {
    className?: string;
};

export default function Header({ className = "fixed top-5 " }: HeaderProps) {
    const [activeLang, setActiveLang] = useState("RU");

    return (
        <header
            className={cn(
                "left-1/2 z-20 flex h-15 w-max -translate-x-1/2 items-center justify-center gap-11.25 rounded-3xl bg-white px-7.25 py-3.75 shadow-[0px_4px_4px_rgba(232,101,10,0.2)]",
                className,
            )}
        >
            <nav className="flex items-center justify-center gap-7.5">
                {menuItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className="text-manrope text-dark hover:text-primary text-sm font-semibold transition-colors duration-300 ease-in-out"
                    >
                        {item.name}
                    </a>
                ))}
            </nav>

            <ul className="flex items-center justify-center gap-3.5">
                {languages.map((lang) => {
                    const isActive = activeLang === lang;

                    return (
                        <li key={lang}>
                            <button
                                type="button"
                                onClick={() => setActiveLang(lang)}
                                className={`border-primary cursor-pointer rounded-[5px] border border-solid px-2.5 py-1 text-sm font-bold transition duration-300 ${
                                    isActive
                                        ? "bg-primary text-white"
                                        : "text-dark hover:bg-primary bg-white hover:text-white"
                                }`}
                            >
                                {lang}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </header>
    );
}
