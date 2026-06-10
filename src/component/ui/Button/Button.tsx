import type { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "@/lib/utils/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    icon?: ReactNode;
    variant?: "primary" | "outline";
};

export default function Button({
    children,
    icon,
    className,
    variant = "primary",
    type = "button",
    ...props
}: ButtonProps) {
    const variants = {
        primary:
            "bg-primary text-white shadow-[0_4px_8px_rgba(0,0,0,0.25)] hover:bg-primary-hover",

        outline:
            "border border-primary bg-white text-primary hover:bg-primary hover:text-white",
    };

    return (
        <button
            type={type}
            className={cn(
                "text-second inline-flex w-max items-center justify-center gap-3 rounded-sm px-4.5 py-4 text-lg font-semibold duration-300 ease-out",
                variants[variant],
                className,
            )}
            {...props}
        >
            {icon && <span className="shrink-0">{icon}</span>}
            {children}
        </button>
    );
}
