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

export default async function PromoContent() {
    const promos = await getPromoSettings("companySlug=tmt-consulting-group");
    const promoMediaUrl = promos?.[0]?.media?.url;

    const promoUrl = promoMediaUrl ? `${mediaUrl}${promoMediaUrl}` : undefined;

    return (
        <div className="relative z-10 flex w-full min-w-0 max-w-full flex-col sm:max-w-fit">
            <Logo />
            <PromoBadge
                text="Туркменистан · Центральная Азия · Глобальный охват"
                className="mt-16 sm:mt-24 md:mt-28.5"
            />
            <PromoTitle
                subTitle="Ваш партнер в Туркменистане"
                className="mt-8 sm:mt-10 md:mt-13"
            />
            <Slogan className="mt-7 text-[clamp(14px,2vw,22px)] sm:mt-11" />
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
                    Начать сотрудничество
                </Button>

                <PromoVideoButton videoUrl={promoUrl ? promoUrl : undefined} />
            </div>
        </div>
    );
}
