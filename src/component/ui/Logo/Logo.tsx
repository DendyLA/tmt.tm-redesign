import Image from "next/image";
import { mediaUrl } from "@/constants/constants";
import cn from "@/lib/utils/cn";
import getCompany from "@/services/company/company.service";
import Link from "next/link";

type LogoProps = {
    className?: string;
};

export default async function Logo({ className }: LogoProps) {
    const logo = await getCompany("tmt-consulting-group", "RU");
    const logoUrl = logo?.logo ? `${mediaUrl}${logo.logo}` : "/images/logo.png";

    return (
        <Link href="/" className="block h-auto w-52 sm:w-72 md:w-87.5">
            <Image
                src={logoUrl}
                alt="TMT Consulting Group"
                width={378}
                height={100}
                className={cn("relative h-auto w-full object-contain", className)}
            />
        </Link>
    );
}
