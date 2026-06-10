import cn from "@/lib/utils/cn";

type PromoSloganProps = {
    text?: string;
    className?: string;
};

export default function Slogan({
    text = "Вдохновляй · Объединяй · Развивай",
    className,
}: PromoSloganProps) {
    return (
        <p
            className={cn(
                "font-second text-dark font-bold uppercase",
                className,
            )}
        >
            {text}
        </p>
    );
}
