import cn from "@/lib/utils/cn";

cn

type SectionTopProps = {
	titleTop: string;
	titleBottom: string;
    className?: string;
};

export default function SectionTop({ className, titleTop, titleBottom }: SectionTopProps) {
    return (
        <div className={cn("m-auto flex w-max flex-col items-center gap-4", className)}>
            <h2 className="font-main text-primary text-[36px] font-bold uppercase">
                {titleTop}
            </h2>
            <div className="bg-primary h-0.5 w-full"></div>
            <div className="font-main text-[20px] font-medium">
                {titleBottom}
            </div>
        </div>
    );
}
