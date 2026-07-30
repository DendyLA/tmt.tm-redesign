import Image from "next/image";
import cn from "@/lib/utils/cn";
import Container from "../../layout/Container/Container";
import { getAds } from "@/services/ads/ads.service";
import { mediaUrl } from "@/constants/constants";
import { getApiLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";

type AdvertisingProps = {
    className?: string;
};

export default async function Advertising({ className }: AdvertisingProps) {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);
    const ads = await getAds({
        company: "tmt-consulting-group",
        location: "home.about",
        lang: getApiLocale(locale),
    });
    const adImg = ads[0]?.ad.translation?.imageUrl;

    if (!adImg) {
        return null;
    }

    return (
        <Container>
            <a
                href={ads[0].ad.targetUrl ? ads[0].ad.targetUrl : "#"}
                target="_blank"
                className="block h-54 w-full"
            >
                <Image
                    src={`${mediaUrl}${adImg}`}
                    width={1796}
                    height={216}
                    alt={dictionary.common.advertisingAlt}
                    className={cn("h-full w-full object-contain", className)}
                />
            </a>
        </Container>
    );
}
