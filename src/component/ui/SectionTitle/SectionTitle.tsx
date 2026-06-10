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
        <h2 className={`text-[72px] leading-[1.1] font-light ${className ?? ""}`}>
            <span className="text-dark">{darkText} </span>
            <span className="text-primary">{primaryText}</span>
        </h2>
    );
}