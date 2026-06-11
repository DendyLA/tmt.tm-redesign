import { Minus } from "lucide-react";
import type { ReactNode } from "react";

type labelProps = {
    children: ReactNode;
};

export default function SectionLabel({ children }: labelProps) {
    return (
        <div className="flex items-center gap-2">
            <Minus className="text-primary" />
            <div className="text-primary font-main text-sm font-bold uppercase">
                {children}
            </div>
        </div>
    );
}
