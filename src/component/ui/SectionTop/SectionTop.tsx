type SectionTopProps = {
    className?: string;
};

export default function SectionTop({ className }: SectionTopProps) {
    return (
        <div className="m-auto flex w-max flex-col items-center gap-4">
            <div className="font-main text-primary text-[36px] font-bold">
                НОВОСТИ
            </div>
            <div className="bg-primary h-0.5 w-full"></div>
            <div className="font-main text-[20px] font-medium">
                Будьте в курсе последних событий в Туркменистане.
            </div>
        </div>
    );
}
