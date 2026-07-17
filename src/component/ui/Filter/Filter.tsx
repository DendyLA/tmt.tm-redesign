"use client";

import cn from "@/lib/utils/cn";

export type FilterItem = {
    label: string;
    value: string;
};

type FilterProps = {
    className?: string;
    setBtn: (value: string) => void;
    btn: string;
    items: FilterItem[];
    text: string;
};

export default function Filter({
    className,
    items,
    setBtn,
    btn,
    text,
}: FilterProps) {
    return (
        <div
            className={cn(
                "flex w-full max-w-full flex-col items-start gap-3 rounded-[10px] bg-white px-4 py-4 shadow-[0_4px_4px_rgba(242,150,87,.2)] sm:w-fit sm:flex-row sm:items-center sm:gap-7.5 sm:px-8.5",
                className,
            )}
        >
            <div className="font-main text-sm font-semibold text-dark sm:text-base">
                {text}
            </div>

            <ul className="flex w-full flex-wrap items-center gap-2.5 sm:w-auto sm:gap-7.5">
                {items.map((item) => (
                    <li
                        key={item.value}
                        onClick={() => setBtn(item.value)}
                        className={cn(
                            "w-fit cursor-pointer rounded-[20px] border px-3 py-1.5 font-main text-[11px] font-semibold transition-colors duration-300 ease-in-out hover:border-[#F29657]/20 hover:bg-[#E8650A]/15 sm:px-4.25 sm:py-1.75",
                            item.value === btn
                                ? "border-[#F29657]/20 bg-[#E8650A]/15 text-primary"
                                : "border-dark bg-transparent text-dark",
                        )}
                    >
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>
    );
}
