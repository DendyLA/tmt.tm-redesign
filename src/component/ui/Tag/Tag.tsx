import { ReactNode } from "react";
import cn from "@/lib/utils/cn";

type tagProps = {
    children: ReactNode;
    className?: string;
};

export default function Tag({ children, className }: tagProps) {
    return (
        <span
            className={cn(
                "border-primary bg-primary/10 text-primary font-main h-fit max-w-full rounded-[20px] border border-solid px-3.25 py-1.25 text-sm font-semibold uppercase",
                className,
            )}
        >
            {children}
        </span>
    );
}
