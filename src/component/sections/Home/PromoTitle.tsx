import cn from "@/lib/utils/cn";

type PromoTitleProps = {
    subTitle: string;
    className?: string;
};

export default function PromoTitle({ subTitle, className }: PromoTitleProps) {
    return (
        <div className={cn("flex flex-col gap-7", className)}>
            <h3 className="font-main text-primary text-[clamp(24px,2vw,32px)] font-bold">
                {subTitle}
            </h3>

            <h1 className="font-main text-dark leading-[0.9] font-bold">
                <span className="block text-[clamp(60px,8vw,100px)]">TMT</span>

                <span className="text-primary block text-[clamp(60px,8vw,100px)]">
                    Consulting Group
                </span>
            </h1>
        </div>
    );
}
