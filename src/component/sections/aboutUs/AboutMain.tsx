import cn from "@/lib/utils/cn";
import AboutFeatures from "@/component/features/AboutFeatures/AboutFeatures";

type AboutMainProps = {
    className?: string;
};

const advantages = [
    "Прямой доступ к государственным структурам Туркменистана",
    "Собственная база из 500+ инвесторов и партнёров",
    "Организаторы флагманского форума IFT",
    "Полный цикл сопровождения — от идеи до сделки",
    "Работа на трёх языках: русский, английский, туркменский",
];

export default function AboutMain({ className }: AboutMainProps) {
    return (
        <section className={cn("flex flex-col gap-8 lg:flex-row lg:gap-18", className)}>
            <div className="font-main text-dark w-full rounded-[20px] bg-white px-5 py-6 text-[17px] leading-7 font-medium sm:px-8 sm:py-7 sm:text-[22px] lg:w-1/2 lg:px-10 lg:py-8 lg:text-[28px] lg:leading-normal lg:text-justify">
                TMT Consulting Group — динамичная консалтинговая компания с
                глубокой экспертизой в привлечении иностранных инвестиций и
                организации деловых мероприятий международного уровня в
                Центральной Азии. Мы предлагаем всестороннюю поддержку
                бизнес-проектов и обеспечиваем выход на внутренние и
                региональные рынки.
            </div>
            <AboutFeatures features={advantages} className="w-full lg:w-1/2" />
        </section>
    );
}
