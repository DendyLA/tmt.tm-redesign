import Image from "next/image";
import Link from "next/link";
import PromoBadge from "./PromoBadge";
import PromoTitle from "./PromoTitle";
import Slogan from "../../../ui/Slogan/Slogan";
import PromoVideoButton from "./PromoVideoButton";
import { getPromoSettings } from "@/services/promos/promo.service";
import Logo from "@/component/ui/Logo/Logo";
import { mediaUrl } from "@/constants/constants";
import { withLocalePath } from "@/lib/i18n/config";
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
                <Link
                    href={withLocalePath("/contacts", locale)}
                    className="text-second inline-flex w-max max-w-full items-center justify-center gap-3 rounded-sm bg-primary px-4 py-3 text-center text-sm font-semibold whitespace-normal text-white shadow-[0_4px_8px_rgba(0,0,0,0.25)] duration-300 ease-out hover:bg-primary-hover sm:px-4.5 sm:py-4 sm:text-lg"
                >
                    <span className="shrink-0">
                        <Image
                            src="/icons/hand.png"
                            alt="handshake icon"
                            width={39}
                            height={28}
                        />
                    </span>
                    {dictionary.home.promo.cta}
                </Link>

                <PromoVideoButton
                    label={dictionary.home.promo.video}
                    videoUrl={promoUrl ? promoUrl : undefined}
                />
            </div>
        </div>
    );
}
