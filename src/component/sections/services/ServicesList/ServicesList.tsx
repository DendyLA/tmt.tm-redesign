import cn from "@/lib/utils/cn";
import InfoCard from "@/component/ui/InfoCard/InfoCard";
import getServices from "@/services/service/service.service";
import Image from "next/image";
import { mediaUrl } from "@/constants/constants";


type ServicesListProps = {
    className?: string;
};

export default async function ServicesList({
    className,
}: ServicesListProps) {
    const data = await getServices({
        company: "tmt-consulting-group",
        lang: "RU",
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
            <div className="flex flex-col gap-35">
                {sortedCategories.map((category, indexcat) => (
                    <div key={category.id}>
                        <div className="flex flex-col gap-6">
                            {category.services.map((service, index) => (
								<div className={cn("flex h-101.25", index % 2 === 1 && "flex-row-reverse")} key={service.id}>
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
										style={indexcat % 2 === 1 ? "blue" : "orange"}
										className="z-10 h-max"
									/>
									<Image width={994} height={405} src={`${mediaUrl}${service.image}`} alt="service image" className={cn("-translate-x-20 -translate-y-13 ", index % 2 === 1 && 'translate-x-20')}/>
								</div>
                            ))}
                        </div>
						<h3 className={cn("mb-8 text-3xl font-bold text-[260px] font-main flex justify-center text-[rgba(232,101,10,0.1)] uppercase ", indexcat % 2 === 1 && 'text-[rgba(9,21,64,0.1)]')}>
                            {category.translation?.name ?? ''}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}