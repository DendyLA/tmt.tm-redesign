import type { InputHTMLAttributes } from "react";
import cn from "@/lib/utils/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
    variant?: "primary" | "dark";
    className?: string;
};

export default function Input({
    label,
    error,
    className,
    variant = "primary",
    id,
    ...props
}: InputProps) {
    return (
        <div className="flex w-full flex-col gap-1">
            {label && (
                <label
                    htmlFor={id}
                    className="font-main text-dark text-sm font-medium"
                >
                    {label}
                    {props.required && <span className="text-red-500"> *</span>}
                </label>
            )}

            <input
                id={id}
                className={cn(
                    "font-main h-7.5 rounded-md border bg-white px-4 text-[12px] font-medium transition outline-none",
                    variant === "primary" &&
                        "border-primary text-primary shadow-[0_0_0_3px_rgba(232,101,10,0.15)]",
                    variant === "dark" &&
                        "border-dark text-dark shadow-[0_0_0_3px_rgba(9,21,64,0.15)]",
                    className,
                )}
                {...props}
            />

            {error && <span className="text-sm text-red-500">{error}</span>}
        </div>
    );
}
