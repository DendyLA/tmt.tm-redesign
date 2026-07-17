import cn from "@/lib/utils/cn";

type PromoBadgeProps = {
    text: string;
    className?: string;
};

export default function PromoBadge({ text, className }: PromoBadgeProps) {
    return (
        <div
            className={cn(
                "bg-primary/20 font-second text-primary flex w-full max-w-full items-center gap-3 rounded-2xl px-3.5 py-2.5 text-[12px] leading-5 font-semibold tracking-wide uppercase sm:inline-flex sm:w-fit sm:rounded-full sm:text-[16px]",
                className,
            )}
        >
            <span className="min-w-0 break-words">{text}</span>
        </div>
    );
}
