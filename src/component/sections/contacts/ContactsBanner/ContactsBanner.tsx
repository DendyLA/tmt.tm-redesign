import cn from "@/lib/utils/cn";
import { Handshake } from "lucide-react";
import Link from "next/link";

type ContactsBannerProps = {
    className?: string;
};

export default function ContactsBanner({ className }: ContactsBannerProps) {
    return (
        <div
            className={cn(
                "flex items-center justify-between rounded-[10px] bg-[#EEF2FF] px-10 py-8.75",
                className,
            )}
        >
            <div className="flex gap-14.25">
                <Handshake color="#091540" width={93} height={67} />
                <div className="flex flex-col gap-3.25">
                    <div className="font-main text-dark text-[26px] font-bold">
                        Заинтересованы в сотрудечестве?
                    </div>
                    <div className="font-main text-[18px] font-semibold">
                        Давайте обсудим, как мы можем помочь вашему бизнесу
                        развиваться и расти.
                    </div>
                </div>
            </div>

            <Link href="/services">
                <button className="bg-dark border-dark font-main hover:text-dark w-fit rounded-sm border px-4 py-5.5 text-[20px] font-bold text-white transition-colors duration-300 ease-in-out hover:bg-[#EEF2FF]">
                    Подробнее о наших услугах
                </button>
            </Link>
        </div>
    );
}
