import cn from "@/lib/utils/cn";

type PromoSloganProps = {
    text?: string;
    className?: string;
};

export default function Slogan({
    text = "Inspire · Connect · Grow",
    className,
}: PromoSloganProps) {
    return (
        <p
            className={cn(
                "font-second text-dark font-semibold uppercase",
                className,
            )}
        >
            {text}
        </p>
    );
}
