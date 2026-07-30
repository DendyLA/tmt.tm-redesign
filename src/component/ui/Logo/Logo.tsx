import Image from "next/image";
import { mediaUrl } from "@/constants/constants";
import cn from "@/lib/utils/cn";
import getCompany from "@/services/company/company.service";
import Link from "next/link";
import { getApiLocale, withLocalePath } from "@/lib/i18n/config";
import { getRequestLocale } from "@/lib/i18n/server";

type LogoProps = {
    className?: string;
};

export default async function Logo({ className }: LogoProps) {
    const locale = await getRequestLocale();
    const logo = await getCompany("tmt-consulting-group", getApiLocale(locale));
    const logoUrl = logo?.logo ? `${mediaUrl}${logo.logo}` : "/images/logo.png";

    return (
        <Link
            href={withLocalePath("/", locale)}
            className="block h-auto w-52 sm:w-72 md:w-87.5"
        >
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
