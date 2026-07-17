import cn from "@/lib/utils/cn";

type InfoCardProps = {
    title: string;
    descr: string;
    index: number;
    style: "blue" | "orange";
    className?: string;
};

export default function InfoCard({
    title,
    descr,
    index,
    style,
    className,
}: InfoCardProps) {
    return (
        <div
            className={cn(
                "relative z-10 max-w-225 rounded-xl border bg-white px-5 py-6 shadow-[0px_5px_6px_0px_rgba(0,0,0,0.1)] sm:px-7 sm:py-8 lg:px-10 lg:py-10.5",
                style === "blue" ? "border-dark" : "border-primary",
                className,
            )}
        >
            <div
                className={cn(
                    "text-primary font-second flex max-w-150 items-center gap-3 pr-16 text-[22px] leading-7 uppercase sm:pr-20 sm:text-[28px] lg:gap-3.75 lg:pr-0 lg:text-[33px] lg:leading-normal",
                    style === "blue" ? "text-dark" : "text-primary",
                )}
            >
                <span
                    className={cn(
                        "bg-primary h-0.5 w-6 shrink-0 lg:w-8.75",
                        style === "blue" ? "bg-dark" : "bg-primary",
                    )}
                ></span>
                {title}
            </div>
            <div className="text-dark font-main mt-4 max-w-187.5 text-sm leading-6 font-medium sm:text-base lg:mt-6.25">
                {descr}
            </div>

            <div
                className={cn(
                    "font-second absolute top-1 right-4 text-[56px] font-black sm:text-[72px] lg:top-0 lg:right-6.5 lg:text-[96px]",
                    style === "blue" ? "text-dark/10" : "text-primary/10",
                )}
            >
                {String(index + 1).padStart(2, "0")}
            </div>
        </div>
    );
}
