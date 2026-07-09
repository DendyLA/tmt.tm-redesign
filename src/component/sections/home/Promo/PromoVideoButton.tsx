"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Play, X } from "lucide-react";
import Button from "@/component/ui/Button/Button";
import { mediaUrl } from "@/constants/constants";

type PromoVideoButtonProps = {
    videoUrl?: string | undefined;
};

export default function PromoVideoButton({ videoUrl }: PromoVideoButtonProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!videoUrl) return null;

    const modal = (
        <div
            className="fixed inset-0 z-20 flex items-center justify-center bg-black/70 px-4"
            onClick={() => setIsOpen(false)}
        >
            <div
                className="relative w-full max-w-285"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="text-dark absolute -top-4 -right-4 z-10 flex size-10 items-center justify-center rounded-full bg-white"
                >
                    <X size={24} />
                </button>

                <video
                    src={`${videoUrl}`}
                    controls
                    autoPlay
                    className="w-full rounded-xl bg-black"
                />
            </div>
        </div>
    );

    return (
        <>
            <Button
                variant="outline"
                icon={<Play size={30} fill="currentColor" />}
                onClick={() => setIsOpen(true)}
            >
                Смотреть IFT 2026
            </Button>

            {mounted && isOpen && createPortal(modal, document.body)}
        </>
    );
}
