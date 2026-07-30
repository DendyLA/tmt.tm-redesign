import cn from "@/lib/utils/cn";
import AboutFeatures from "@/component/features/AboutFeatures/AboutFeatures";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";

type AboutMainProps = {
    className?: string;
};

export default async function AboutMain({ className }: AboutMainProps) {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);

    return (
        <section className={cn("flex flex-col gap-8 lg:flex-row lg:gap-18", className)}>
            <div className="font-main text-dark w-full rounded-[20px] bg-white px-5 py-6 text-[17px] leading-7 font-medium sm:px-8 sm:py-7 sm:text-[22px] lg:w-1/2 lg:px-10 lg:py-8 lg:text-[28px] lg:leading-normal lg:text-justify">
                {dictionary.about.text}
            </div>
            <AboutFeatures features={[...dictionary.about.advantages]} className="w-full lg:w-1/2" />
        </section>
    );
}
