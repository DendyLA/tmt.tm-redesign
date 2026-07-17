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
                "flex flex-col items-stretch justify-between gap-6 rounded-[10px] bg-[#EEF2FF] px-5 py-6 sm:px-8 sm:py-8.75 lg:flex-row lg:items-center lg:px-10",
                className,
            )}
        >
            <div className="flex flex-col gap-5 sm:flex-row sm:gap-8 lg:gap-14.25">
                <Handshake color="#091540" width={93} height={67} className="h-12 w-16 shrink-0 sm:h-[67px] sm:w-[93px]" />
                <div className="flex min-w-0 flex-col gap-3.25">
                    <div className="font-main text-dark text-[22px] leading-tight font-bold sm:text-[26px]">
                        Заинтересованы в сотрудечестве?
                    </div>
                    <div className="font-main text-base font-semibold leading-7 sm:text-[18px] sm:leading-normal">
                        Давайте обсудим, как мы можем помочь вашему бизнесу
                        развиваться и расти.
                    </div>
                </div>
            </div>

            <Link href="/services" className="w-full lg:w-auto">
                <button className="bg-dark border-dark font-main hover:text-dark w-full rounded-sm border px-4 py-3 text-[16px] font-bold text-white transition-colors duration-300 ease-in-out hover:bg-[#EEF2FF] sm:text-[18px] lg:w-fit lg:py-5.5 lg:text-[20px]">
                    Подробнее о наших услугах
                </button>
            </Link>
        </div>
    );
}
