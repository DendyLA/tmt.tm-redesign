import type { TextareaHTMLAttributes } from "react";
import cn from "@/lib/utils/cn";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    error?: string;
    variant?: "primary" | "dark";
};

export default function Textarea({
    label,
    error,
    variant = "primary",
    className,
    id,
    ...props
}: TextareaProps) {
    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label
                    htmlFor={id}
                    className="font-main text-dark text-sm font-medium"
                >
                    {label}
                </label>
            )}

            <textarea
                id={id}
                className={cn(
                    "font-main min-h-36 w-full resize-none rounded-md border bg-white px-4 py-3 text-[12px] font-medium transition outline-none",
                    variant === "primary" &&
                        "border-primary text-primary placeholder:text-primary/50",
                    variant === "dark" &&
                        "border-dark text-dark placeholder:text-dark/50",
                    className,
                )}
                {...props}
            />

            {error && <span className="text-sm text-red-500">{error}</span>}
        </div>
    );
}
