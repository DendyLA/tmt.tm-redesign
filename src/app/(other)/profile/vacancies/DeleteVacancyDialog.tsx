"use client";

import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { Trash2, X } from "lucide-react";

import { deleteProfileVacancy } from "./actions";

type DeleteVacancyDialogProps = {
    id: string;
    labels: {
        title: string;
        text: string;
        cancel: string;
        submit: string;
    };
    triggerLabel: string;
};

function DeleteSubmitButton({ label }: { label: string }) {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="rounded-[4px] bg-primary px-5 py-3 font-main text-[13px] font-bold text-white transition-colors duration-300 hover:bg-primary-hover disabled:pointer-events-none disabled:opacity-60"
        >
            {pending ? label : label}
        </button>
    );
}

export default function DeleteVacancyDialog({
    id,
    labels,
    triggerLabel,
}: DeleteVacancyDialogProps) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    return (
        <>
            <button
                type="button"
                aria-label={triggerLabel}
                title={triggerLabel}
                onClick={() => setIsOpen(true)}
                className="inline-flex size-8 items-center justify-center rounded-[4px] border border-primary/50 text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
            >
                <Trash2 className="size-4" />
            </button>

            {isOpen && (
                <div
                    aria-modal="true"
                    role="dialog"
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 px-4 py-8"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="w-full max-w-[420px] rounded-[8px] border border-primary bg-white px-6 py-6 shadow-[0px_18px_44px_rgba(0,0,0,0.22)]"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="flex items-start justify-between gap-4">
                            <h2 className="font-second text-[20px] font-semibold tracking-[0.12em] text-primary uppercase">
                                {labels.title}
                            </h2>

                            <button
                                type="button"
                                aria-label={labels.cancel}
                                onClick={() => setIsOpen(false)}
                                className="inline-flex size-8 shrink-0 items-center justify-center rounded-[4px] text-primary transition-colors duration-300 hover:bg-primary/10"
                            >
                                <X className="size-5" />
                            </button>
                        </div>

                        <p className="mt-5 font-main text-[14px] leading-6 font-semibold text-dark">
                            {labels.text}
                        </p>

                        <div className="mt-8 flex flex-wrap justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="rounded-[4px] border border-primary/50 px-5 py-3 font-main text-[13px] font-bold text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
                            >
                                {labels.cancel}
                            </button>

                            <form action={deleteProfileVacancy}>
                                <input type="hidden" name="id" value={id} />
                                <DeleteSubmitButton label={labels.submit} />
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
