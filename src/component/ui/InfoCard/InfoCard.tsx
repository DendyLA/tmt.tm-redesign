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
                "relative z-10 max-w-225 rounded-xl border bg-white px-10 py-10.5 shadow-[0px_5px_6px_0px_rgba(0,0,0,0.1)]",
                style === "blue" ? "border-dark" : "border-primary",
                className,
            )}
        >
            <div
                className={cn(
                    "text-primary font-second flex max-w-150 items-center gap-3.75 text-[33px] uppercase",
                    style === "blue" ? "text-dark" : "text-primary",
                )}
            >
                <span
                    className={cn(
                        "bg-primary h-0.5 w-8.75",
                        style === "blue" ? "bg-dark" : "bg-primary",
                    )}
                ></span>
                {title}
            </div>
            <div className="text-dark font-main mt-6.25 max-w-187.5 text-base font-medium">
                {descr}
            </div>

            <div
                className={cn(
                    "font-second absolute top-0 right-6.5 text-[96px] font-black",
                    style === "blue" ? "text-dark/10" : "text-primary/10",
                )}
            >
                {String(index + 1).padStart(2, "0")}
            </div>
        </div>
    );
}
