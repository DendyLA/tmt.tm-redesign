import Image from "next/image";
import Tag from "@/component/ui/Tag/Tag";
import cn from "@/lib/utils/cn";


import getServices from '@/services/service/service.service'

type ServiceProps = {
    className?: string;
};

export default async function ServiceList({ className }: ServiceProps) {
    const data = await getServices({
		company: "tmt-consulting-group",
		lang: "RU",
	});

	if (!data) {
		return null;
	}

	const services = data
		.filter((category) => category.showOnHomePage)
		.flatMap((category) =>
			category.services.map((service) => ({
				...service,
				category,
			})),
		)
		.sort((a, b) => a.sortOrder - b.sortOrder);

		

    return (
        <ul
            className={cn(
                "grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-2",
                className,
            )}
        >
            {services.map((service, index) => {
                return (
                    <li
                        key={index}
                        className="group relative flex cursor-pointer flex-col items-start gap-5 rounded-xl bg-white px-11.25 py-10 transition-colors duration-400 ease-in-out hover:bg-[#EEF2FF]"
                    >
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							className="absolute top-6.25 right-10 text-primary transition-colors duration-300 group-hover:text-dark"
							fill="currentColor"
						>
							<path
								d="M0.695987 4.15602C0.230564 3.98129 -0.00232822 3.62382 9.22938e-05 3.20174C0.00100435 2.84044 0.241366 2.37484 0.688375 2.3143L19.5045 -5.63097e-07L17.2096 18.6948C17.1501 19.1313 16.829 19.4239 16.4159 19.4837C16.095 19.5296 15.5715 19.3868 15.4149 18.9673L14.5806 4.92391L0.695987 4.15602Z"
								fill="currentColor"
							/>
						</svg>
                        <h3 className="text-primary duration-400 ease-in-out group-hover:text-dark  font-second text-[26px]">
                            {service.translation?.title ?? service.title}
                        </h3>
                        <p className="font-main text-dark text-[16px]">
                            {service.description}
                        </p>
                        <Tag className="duration-400 ease-in-out group-hover:border-dark group-hover:bg-white group-hover:text-dark">{service.category.translation?.name ?? service.category.name}</Tag>
                    </li>
                );
            })}
        </ul>
    );
}
