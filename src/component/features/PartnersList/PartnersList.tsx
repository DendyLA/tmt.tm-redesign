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
        <ul
            className={cn(
                "flex flex-wrap items-center justify-center gap-6.5",
                className,
            )}
        >
            {partners.map((partner, index) => {
                return (
                    <li key={index}>
                        <a
                            href={partner.link ? partner.link : "#"}
                            className="relative h-12 w-full"
                        >
                            <Image
                                src={partner.logoSrc}
                                height={50}
                                width={120}
                                alt={partner.name ? partner.name : "logo image"}
                                className="brightness-500 grayscale transition duration-300 ease-in-out hover:scale-105 hover:brightness-800"
                            />
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}
