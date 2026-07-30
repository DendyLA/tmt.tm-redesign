import cn from "@/lib/utils/cn";
import { Handshake } from "lucide-react";
import Link from "next/link";
import { withLocalePath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";

type ContactsBannerProps = {
    className?: string;
};

export default async function ContactsBanner({ className }: ContactsBannerProps) {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);

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
                        {dictionary.contacts.bannerTitle}
                    </div>
                    <div className="font-main text-base font-semibold leading-7 sm:text-[18px] sm:leading-normal">
                        {dictionary.contacts.bannerText}
                    </div>
                </div>
            </div>

            <Link href={withLocalePath("/services", locale)} className="w-full lg:w-auto">
                <button className="bg-dark border-dark font-main hover:text-dark w-full rounded-sm border px-4 py-3 text-[16px] font-bold text-white transition-colors duration-300 ease-in-out hover:bg-[#EEF2FF] sm:text-[18px] lg:w-fit lg:py-5.5 lg:text-[20px]">
                    {dictionary.contacts.bannerCta}
                </button>
            </Link>
        </div>
    );
}
