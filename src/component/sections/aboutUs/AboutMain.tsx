import cn from "@/lib/utils/cn";
import AboutFeatures from "@/component/features/AboutFeatures/AboutFeatures";

type AboutMainProps = {
	className?: string;
}

const advantages = [
    "Прямой доступ к государственным структурам Туркменистана",
    "Собственная база из 500+ инвесторов и партнёров",
    "Организаторы флагманского форума IFT",
    "Полный цикл сопровождения — от идеи до сделки",
    "Работа на трёх языках: русский, английский, туркменский",
];


export default function AboutMain({className}: AboutMainProps){

	return(
		<section className={cn("flex gap-18", className)}>
			<div className="py-8 px-10 bg-white rounded-[20px] w-1/2 font-main text-[28px] font-medium text-dark">
				TMT Consulting Group — динамичная консалтинговая компания с глубокой экспертизой в привлечении иностранных инвестиций и организации деловых мероприятий международного уровня в Центральной Азии. Мы предлагаем всестороннюю поддержку бизнес-проектов и обеспечиваем выход на внутренние и региональные рынки.
			</div>
			<AboutFeatures features={advantages} className="w-1/2"/>
		</section>
	)
}