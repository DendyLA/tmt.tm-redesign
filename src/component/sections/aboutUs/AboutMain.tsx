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
        <section className={cn("flex gap-18", className)}>
            <div className="font-main text-dark w-1/2 rounded-[20px] bg-white px-10 py-8 text-[28px] font-medium">
                TMT Consulting Group — динамичная консалтинговая компания с
                глубокой экспертизой в привлечении иностранных инвестиций и
                организации деловых мероприятий международного уровня в
                Центральной Азии. Мы предлагаем всестороннюю поддержку
                бизнес-проектов и обеспечиваем выход на внутренние и
                региональные рынки.
            </div>
            <AboutFeatures features={advantages} className="w-1/2" />
        </section>
    );
}
