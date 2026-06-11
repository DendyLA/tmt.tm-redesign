import cn from "@/lib/utils/cn";
import Image from "next/image";

type featuresProps = {
    features: string[];
    className?: string;
};

export default function Features({ features, className }: featuresProps) {
    return (
        <div className={cn("flex flex-col gap-10", className)}>
            {features.map((feature, index) => {
                return (
                    <div key={index} className="flex items-center gap-4">
                        <Image
                            src="/icons/right-arrow.svg"
                            alt="right-arrow"
                            width={35}
                            height={35}
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
