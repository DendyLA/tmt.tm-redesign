type TickerProps = {
    items: string[];
};

export default function Ticker({ items }: TickerProps) {
    const content = [...items, ...items];

    return (
        <div className="bg-dark flex h-10 items-center overflow-hidden whitespace-nowrap">
            <div className="animate-ticker flex w-max">
                {content.map((item, index) => (
                    <div key={index} className="flex shrink-0 items-center">
                        <span className="font-manrope px-8 text-[12px] tracking-[0.2em] text-white uppercase">
                            {item}
                        </span>
                        <span className="text-primary">•</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
