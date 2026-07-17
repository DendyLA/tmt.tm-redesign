type SectionTitleProps = {
    darkText: string;
    primaryText: string;
    className?: string;
};

export default function SectionTitle({
    darkText,
    primaryText,
    className,
}: SectionTitleProps) {
    return (
        <h2
            className={`font-second max-w-full text-[clamp(30px,7vw,56px)] leading-[1.1] font-light break-words ${className ?? ""}`}
        >
            <span className="text-dark block sm:inline">{darkText} </span>
            <span className="text-primary block sm:inline">{primaryText}</span>
        </h2>
    );
}
