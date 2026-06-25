import cn from "@/lib/utils/cn";
import Image from "next/image";

type AboutFeaturesProps = {
    features: string[];
    className?: string;
};

export default function AboutFeatures({ features, className }: AboutFeaturesProps) {
    return (
        <div className={cn("flex flex-col gap-10", className)}>
            {features.map((feature, index) => {
                return (
                    <div key={index} className="flex items-center gap-4">
                        <img
                            src="/icons/right-arrow-dark.svg"
                            alt="right-arrow"
                            className="h-auto w-8.75"
                        />
                        <p className="font-main text-[24px] font-semibold">
                            {feature}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
