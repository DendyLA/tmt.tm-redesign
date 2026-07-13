import cn from "@/lib/utils/cn";

type PromoBadgeProps = {
    text: string;
    className?: string;
};

export default function PromoBadge({ text, className }: PromoBadgeProps) {
    return (
        <div
            className={cn(
                "bg-primary/20 font-second text-primary inline-flex w-max items-center gap-3 rounded-full px-3.5 py-2.5 text-[16px] font-semibold tracking-wide uppercase",
                className,
            )}
        >
            <span>{text}</span>
        </div>
    );
}
