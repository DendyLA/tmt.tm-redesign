import Image from "next/image";
import PromoBadge from "./PromoBadge";
import PromoTitle from "./PromoTitle";
import Slogan from "../../../ui/Slogan/Slogan";
import Button from "../../../ui/Button/Button";
import { Play } from "lucide-react";
import PromoVideoButton from "./PromoVideoButton";
import { getPromoSettings } from "@/services/promos/promo.service";
import Logo from "@/component/ui/Logo/Logo";
import { mediaUrl } from "@/constants/constants";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";

export default async function PromoContent() {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);
    const promos = await getPromoSettings("companySlug=tmt-consulting-group");
    const promoMediaUrl = promos?.[0]?.media?.url;

    const promoUrl = promoMediaUrl ? `${mediaUrl}${promoMediaUrl}` : undefined;

    return (
        <div className="relative z-10 flex w-full min-w-0 max-w-full flex-col sm:max-w-fit">
            <Logo />
            <PromoBadge
                text={dictionary.home.promo.location}
                className="mt-16 sm:mt-24 md:mt-28.5"
            />
            <PromoTitle
                subTitle={dictionary.home.promo.subtitle}
                className="mt-8 sm:mt-10 md:mt-13"
            />
            <Slogan
                text={dictionary.common.slogan}
                className="mt-7 text-[clamp(14px,2vw,22px)] sm:mt-11"
            />
            <div className="jusitfy-center mt-7 flex flex-col items-start gap-3 sm:mt-11.25 sm:flex-row sm:items-center">
                <Button
                    icon={
                        <Image
                            src="/icons/hand.png"
                            alt="handshake icon"
                            width={39}
                            height={28}
                        />
                    }
                >
                    {dictionary.home.promo.cta}
                </Button>

                <PromoVideoButton
                    label={dictionary.home.promo.video}
                    videoUrl={promoUrl ? promoUrl : undefined}
                />
            </div>
        </div>
    );
}
