import cn from "@/lib/utils/cn";

type PromoTitleProps = {
    subTitle: string;
    className?: string;
};

export default function PromoTitle({ subTitle, className }: PromoTitleProps) {
    return (
        <div className={cn("flex flex-col gap-4 sm:gap-7", className)}>
            <h3 className="font-main text-primary max-w-full text-[clamp(20px,5vw,32px)] leading-tight font-bold break-words">
                {subTitle}
            </h3>

            <h1 className="font-main text-dark max-w-full leading-[0.95] font-bold break-words">
                <span className="block text-[clamp(48px,14vw,100px)]">
                    TMT
                </span>

                <span className="text-primary block text-[clamp(30px,7.6vw,100px)] sm:text-[clamp(60px,8vw,100px)]">
                    Consulting Group
                </span>
            </h1>
        </div>
    );
}
