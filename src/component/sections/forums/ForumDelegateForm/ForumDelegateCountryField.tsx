"use client";

import { useMemo, useState, type KeyboardEvent } from "react";

import type { Dictionary } from "@/lib/i18n/dictionaries";
import { getDelegateCountries } from "./delegate-registration.countries";
import type { DelegateValidationError } from "./delegate-registration.validation";

type Props = {
    copy: Dictionary["forums"]["registration"];
    value: string;
    error?: DelegateValidationError;
    onChange: (value: string) => void;
    onBlur: () => void;
};

export default function ForumDelegateCountryField({ copy, value, error, onChange, onBlur }: Props) {
    const countries = useMemo(() => getDelegateCountries(), []);
    const selected = countries.find((country) => country.code === value);
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);
    const matches = countries.filter((country) => country.name.toLocaleLowerCase().startsWith(query.trim().toLocaleLowerCase()));

    const selectCountry = (code: string) => {
        onChange(code);
        setQuery("");
        setOpen(false);
        setActiveIndex(0);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Escape") {
            setOpen(false);
            return;
        }
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            setOpen(true);
            setActiveIndex((index) => Math.max(0, Math.min(matches.length - 1, index + (event.key === "ArrowDown" ? 1 : -1))));
        }
        if (event.key === "Enter" && open && matches[activeIndex]) {
            event.preventDefault();
            selectCountry(matches[activeIndex].code);
        }
    };

    return (
        <div className="relative min-w-0 sm:col-span-2" onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
                setOpen(false);
                setQuery("");
                onBlur();
            }
        }}>
            <label htmlFor="country" className="font-main text-[14px] font-semibold text-[#163d2b]">
                {copy.country} *
            </label>
            <input
                id="country"
                type="text"
                role="combobox"
                autoComplete="off"
                aria-autocomplete="list"
                aria-expanded={open}
                aria-controls="delegate-country-options"
                aria-activedescendant={open && matches[activeIndex] ? `delegate-country-${matches[activeIndex].code}` : undefined}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? "country-error" : undefined}
                placeholder={copy.countryPlaceholder}
                value={open ? query : selected?.name || ""}
                onFocus={() => { setOpen(true); setQuery(""); setActiveIndex(0); }}
                onChange={(event) => { setQuery(event.target.value); setActiveIndex(0); onChange(""); setOpen(true); }}
                onKeyDown={handleKeyDown}
                className={`mt-2 h-11 w-full rounded-[4px] border bg-white px-3 font-main text-[15px] text-[#163d2b] outline-none focus:ring-2 focus:ring-[#087541]/15 ${error ? "border-red-500" : "border-[#afc8b2] focus:border-[#087541]"}`}
            />
            {open && (
                <ul id="delegate-country-options" role="listbox" className="absolute z-20 mt-1 max-h-60 w-full overflow-y-auto rounded-[4px] border border-[#afc8b2] bg-white py-1 shadow-lg">
                    {matches.length ? matches.map((country, index) => (
                        <li
                            key={country.code}
                            id={`delegate-country-${country.code}`}
                            role="option"
                            aria-selected={country.code === value}
                            onMouseDown={(event) => event.preventDefault()}
                            onClick={() => selectCountry(country.code)}
                            className={`cursor-pointer px-3 py-2 font-main text-[14px] text-[#163d2b] ${index === activeIndex ? "bg-[#e8f2e9]" : "hover:bg-[#e8f2e9]"}`}
                        >
                            {country.name}
                        </li>
                    )) : (
                        <li className="px-3 py-2 font-main text-[14px] text-[#53645a]">{copy.countryNoResults}</li>
                    )}
                </ul>
            )}
            {error && <p id="country-error" className="mt-1 font-main text-[12px] text-red-600">{copy[error]}</p>}
        </div>
    );
}
