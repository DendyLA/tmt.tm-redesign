import cn from "@/lib/utils/cn";
import type { Partner } from "@/types/partner";
import Image from "next/image";

type PartnersListProps = {
    partners: Partner[];
    className?: string;
};

export default function PartnersList({
    partners,
    className,
}: PartnersListProps) {
    return (
        <ul className={cn("flex flex-wrap gap-6.5 items-center justify-center", className)}>
            {partners.map((partner, index) => {
                return (
                    <li key={index}>
                        <a
                            href={partner.link ? partner.link : "#"}
                            className="relative w-full h-12"
                        >
                            <Image
                                src={partner.logoSrc}
                                height={50}
								width={120}
                                alt={partner.name ? partner.name : "logo image"}
								className="grayscale brightness-500 transition duration-300 ease-in-out hover:scale-105 hover:brightness-800"
                            />
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}
