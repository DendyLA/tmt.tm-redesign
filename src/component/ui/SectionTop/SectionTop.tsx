import cn from "@/lib/utils/cn";

cn;

type SectionTopProps = {
    titleTop: string;
    titleBottom: string;
    className?: string;
};

export default function SectionTop({
    className,
    titleTop,
    titleBottom,
}: SectionTopProps) {
    return (
        <div
            className={cn(
                "m-auto flex w-full max-w-full flex-col items-center gap-3 text-center sm:w-max sm:gap-4",
                className,
            )}
        >
            <h2 className="font-main text-primary text-[28px] leading-tight font-bold uppercase sm:text-[36px]">
                {titleTop}
            </h2>
            <div className="bg-primary h-0.5 w-full"></div>
            <div className="font-main max-w-full text-base leading-6 font-medium sm:text-[20px]">
                {titleBottom}
            </div>
        </div>
    );
}
