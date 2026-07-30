import cn from "@/lib/utils/cn";
import InfoCard from "@/component/ui/InfoCard/InfoCard";
import getServices from "@/services/service/service.service";
import Image from "next/image";
import { mediaUrl } from "@/constants/constants";
import { getApiLocale } from "@/lib/i18n/config";
import { getRequestLocale } from "@/lib/i18n/server";

type ServicesListProps = {
    className?: string;
};

export default async function ServicesList({ className }: ServicesListProps) {
    const locale = await getRequestLocale();
    const data = await getServices({
        company: "tmt-consulting-group",
        lang: getApiLocale(locale),
    });

    if (!data) {
        return null;
    }

    const sortedCategories = data
        .filter((category) => category.showOnHomePage !== true)
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((category) => ({
            ...category,
            services: [...category.services].sort(
                (a, b) => a.sortOrder - b.sortOrder,
            ),
        }));

    return (
        <div className={cn("", className)}>
            <div className="flex flex-col gap-12 sm:gap-18 min-[1800px]:gap-35">
                {sortedCategories.map((category, indexcat) => (
                    <div key={category.id}>
                        <div className="flex flex-col gap-6">
                            {category.services.map((service, index) => (
                                <div
                                    className={cn(
                                        "flex flex-col gap-4 min-[1800px]:h-101.25 min-[1800px]:flex-row min-[1800px]:gap-0",
                                        index % 2 === 1 &&
                                            "min-[1800px]:flex-row-reverse",
                                    )}
                                    key={service.id}
                                >
                                    <InfoCard
                                        key={service.id}
                                        title={
                                            service.translation?.title ??
                                            service.title
                                        }
                                        descr={
                                            service.translation?.description ??
                                            service.description
                                        }
                                        index={index}
                                        style={
                                            indexcat % 2 === 1
                                                ? "blue"
                                                : "orange"
                                        }
                                        className="z-10 h-max w-full max-w-full min-[1800px]:w-auto min-[1800px]:max-w-225"
                                    />
                                    <Image
                                        width={994}
                                        height={405}
                                        src={`${mediaUrl}${service.image}`}
                                        alt={
                                            service.translation?.title ??
                                            service.title
                                        }
                                        className={cn(
                                            "h-auto w-full max-w-full rounded-xl object-cover min-[1800px]:w-auto min-[1800px]:max-w-none min-[1800px]:rounded-none min-[1800px]:-translate-x-20 min-[1800px]:-translate-y-13",
                                            index % 2 === 1 &&
                                                "min-[1800px]:translate-x-20",
                                        )}
                                    />
                                </div>
                            ))}
                        </div>
                        <h3
                            className={cn(
                                "font-main mb-4 flex w-full justify-center overflow-hidden text-center text-[44px] leading-none font-bold break-words text-[rgba(232,101,10,0.1)] uppercase sm:mb-6 sm:text-[80px] md:text-[120px] min-[1800px]:mb-8 min-[1800px]:text-[260px]",
                                indexcat % 2 === 1 &&
                                    "text-[rgba(9,21,64,0.1)]",
                            )}
                        >
                            {category.translation?.name ?? ""}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
