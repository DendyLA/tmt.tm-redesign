import cn from "@/lib/utils/cn";
import { Minus } from "lucide-react";
import type { ReactNode } from "react";

type labelProps = {
    children: ReactNode;
	className?: string;
};

export default function SectionLabel({ children, className }: labelProps) {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <Minus className="text-primary" />
            <div className="text-primary font-main text-sm font-bold uppercase">
                {children}
            </div>
        </div>
    );
}
