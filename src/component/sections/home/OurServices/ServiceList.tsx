import Image from "next/image";
import Tag from "@/component/ui/Tag/Tag";
import cn from "@/lib/utils/cn";

type Service = {
    title: string;
    text: string;
    tag: string;
};

type ServiceProps = {
    className?: string;
    services: Service[];
};

export default function ServiceList({ services, className }: ServiceProps) {
    return (
        <ul className={cn("grid grid-cols-2 gap-5", className)}>
            {services.map((service, index) => {
                return (
                    <li
                        key={index}
                        className="relative flex cursor-pointer flex-col items-start gap-5 rounded-xl bg-white px-11.25 py-10 transition-colors duration-400 ease-in-out hover:bg-[#EEF2FF]"
                    >
                        <Image
                            src="/icons/check.svg"
                            alt="check icon"
                            width={20}
                            height={20}
                            className="absolute top-6.25 right-10"
                        />
                        <h3 className="text-primary font-second text-[26px]">
                            {service.title}
                        </h3>
                        <p className="font-main text-dark text-[16px]">
                            {service.text}
                        </p>
                        <Tag>{service.tag}</Tag>
                    </li>
                );
            })}
        </ul>
    );
}
