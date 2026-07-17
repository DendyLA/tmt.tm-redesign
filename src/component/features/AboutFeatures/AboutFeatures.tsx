import cn from "@/lib/utils/cn";
import Image from "next/image";

type AboutFeaturesProps = {
    features: string[];
    className?: string;
};

export default function AboutFeatures({
    features,
    className,
}: AboutFeaturesProps) {
    return (
        <div className={cn("flex min-w-0 flex-col gap-6 sm:gap-10", className)}>
            {features.map((feature, index) => {
                return (
                    <div key={index} className="flex min-w-0 items-start gap-4 sm:items-center">
                        <img
                            src="/icons/right-arrow-dark.svg"
                            alt="right-arrow"
                            className="mt-1 h-auto w-6 shrink-0 sm:mt-0 sm:w-8.75"
                        />
                        <p className="font-main min-w-0 text-[18px] leading-7 font-semibold break-words sm:text-[24px]">
                            {feature}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
