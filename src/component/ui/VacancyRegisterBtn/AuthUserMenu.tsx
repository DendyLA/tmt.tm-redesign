"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, UserRound } from "lucide-react";

import { logoutAuthAccount } from "@/services/auth/auth.actions";
import cn from "@/lib/utils/cn";

type AuthUserMenuProps = {
    email: string;
    profileHref: string;
    className?: string;
};

export default function AuthUserMenu({
    email,
    profileHref,
    className = "",
}: AuthUserMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handlePointerDown(event: PointerEvent) {
            if (!rootRef.current?.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("pointerdown", handlePointerDown);

        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
        };
    }, []);

    return (
        <div ref={rootRef} className={cn("relative", className)}>
            <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((value) => !value)}
                className="flex max-w-[260px] items-center gap-3 font-main text-[14px] font-semibold text-dark transition-opacity duration-300 hover:opacity-75 sm:max-w-[320px] sm:text-[16px]"
            >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary text-primary sm:size-12">
                    <UserRound className="size-5 fill-primary/15 stroke-primary sm:size-6" />
                </span>
                <span className="min-w-0 truncate">{email}</span>
                <ChevronDown
                    className={cn(
                        "size-5 shrink-0 text-primary transition-transform duration-300",
                        isOpen && "rotate-180",
                    )}
                />
            </button>

            {isOpen && (
                <div className="absolute right-0 top-[calc(100%+10px)] z-30 w-[180px] rounded-[8px] border border-primary/20 bg-white py-2 shadow-[0px_8px_24px_rgba(0,0,0,0.12)]">
                    <Link
                        href={profileHref}
                        className="block px-4 py-2 font-main text-[14px] font-semibold text-dark transition-colors duration-300 hover:text-primary"
                        onClick={() => setIsOpen(false)}
                    >
                        Профиль
                    </Link>

                    <div className="my-1 border-t border-primary/20" />

                    <form action={logoutAuthAccount}>
                        <button
                            type="submit"
                            className="block w-full px-4 py-2 text-left font-main text-[14px] font-semibold text-primary transition-opacity duration-300 hover:opacity-70"
                        >
                            Выйти
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
