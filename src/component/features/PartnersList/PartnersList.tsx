import cn from "@/lib/utils/cn";
import type { Partner } from "@/types/partner";
import Image from "next/image";

import getPartner from "@/services/partners/partners.service";
import { mediaUrl } from "@/constants/constants";

type PartnersListProps = {
    className?: string;
};

export default async function PartnersList({ className }: PartnersListProps) {
    const data = await getPartner({ company: "tmt-consulting-group" });

    return (
        <ul
            className={cn(
                "flex flex-wrap items-center justify-center gap-6.5",
                className,
            )}
        >
            {data ? (
                data.map((partner, index) => {
                    return (
                        <li key={index}>
                            <a
                                href={
                                    partner.website
                                        ? partner.website.startsWith("http")
                                            ? partner.website
                                            : `https://${partner.website}`
                                        : "#"
                                }
                                className="relative h-12 w-full"
                                target="_blank"
                            >
                                <Image
                                    src={`${mediaUrl}${partner.logo}`}
                                    height={90}
                                    width={100}
                                    alt={
                                        partner.name
                                            ? partner.name
                                            : "logo image"
                                    }
                                    className="brightness-500 grayscale transition duration-300 ease-in-out hover:scale-105 hover:brightness-800"
                                />
                            </a>
                        </li>
                    );
                })
            ) : (
                <></>
            )}
        </ul>
    );
}
