import Image from "next/image";
import PromoBadge from "./PromoBadge";
import PromoTitle from "./PromoTitle";
import Slogan from "../../../ui/Slogan/Slogan";
import Button from "../../../ui/Button/Button";
import { Play } from "lucide-react";

export default function PromoContent() {
    return (
        <div className="relative z-10 flex max-w-fit flex-col">
            <div className="h-full w-87.5">
                <Image
                    src="/images/logo.png"
                    alt="TMT Consulting Group"
                    width={378}
                    height={100}
                    className="relative object-cover"
                />
            </div>
            <PromoBadge
                text="Ашхабад · Центральная Азия · Глобальный охват"
                className="mt-28.5"
            />
            <PromoTitle
                subTitle="Ваш партнер в Туркменистане"
                className="mt-13"
            />
            <Slogan className="mt-11 text-[clamp(14px,2vw,22px)]" />
            <div className="jusitfy-center mt-11.25 flex items-center gap-3">
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

                <Button
                    variant="outline"
                    icon={<Play size={30} fill="currentColor" />}
                >
                    Смотреть IFT 2026
                </Button>
            </div>
        </div>
    );
}
