"use client";

import { useState } from "react";

const navItems = [
    "О Нас",
    "Услуги",
    "Туризм",
    "Блог",
    "Новости",
    "Вакансии",
    "Контакты",
];

const languages = ["RU", "EN", "TM"];

export default function Header() {
    const [activeLang, setActiveLang] = useState("RU");

    return (
        <header className="fixed top-5 left-1/2 z-50 flex h-15 w-max -translate-x-1/2 items-center justify-center gap-11.25 rounded-3xl bg-white px-7.25 py-3.75 shadow-[0px_4px_4px_rgba(232,101,10,0.2)]">
            <nav className="flex items-center justify-center gap-7.5">
                {navItems.map((item, index) => (
                    <a
                        key={index}
                        href="#"
                        className="text-sm text-manrope font-bold text-dark transition duration-300 hover:opacity-60"
                    >
                        {item}
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
                                className={`cursor-pointer rounded-[5px] border border-solid border-primary px-2.5 py-1 text-sm font-bold transition duration-300 ${
                                    isActive
                                        ? "bg-primary text-white"
                                        : "bg-white text-dark hover:bg-primary hover:text-white"
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