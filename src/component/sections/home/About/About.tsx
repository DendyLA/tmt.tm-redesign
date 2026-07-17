import SectionLabel from "@/component/ui/SectionLabel/SectionLabel";
import Container from "@/component/layout/Container/Container";
import SectionTitle from "@/component/ui/SectionTitle/SectionTitle";
import AboutFeatures from "@/component/features/AboutFeatures/AboutFeatures";

const advantages = [
    "Прямой доступ к государственным структурам Туркменистана",
    "Собственная база из 500+ инвесторов и партнёров",
    "Организаторы флагманского форума IFT",
    "Полный цикл сопровождения — от идеи до сделки",
    "Работа на трёх языках: русский, английский, туркменский",
];

export default function About() {
    return (
        <section className="bg-main-gradient-to py-20 lg:py-40">
            <Container>
                <div className="flex min-w-0 flex-col gap-10 lg:flex-row lg:gap-25">
                    <div className="flex w-full min-w-0 flex-col gap-6 lg:w-1/2 lg:gap-8">
                        <SectionLabel>О НАС</SectionLabel>
                        <SectionTitle
                            darkText="Мост между"
                            primaryText="капиталом и возможностью"
                        />

                        <p className="font-main w-full max-w-full rounded-[20px] bg-[linear-gradient(90deg,rgba(197,205,235,0.26)_0%,#F8F9FA_83.89%)] p-5 text-[17px] leading-7 break-words sm:p-7.5 sm:text-[22px] sm:text-justify">
                            <span className="font-bold">
                                TMT Consulting Group
                            </span>{" "}
                            — консалтинговая компания, специализирующаяся на
                            сопровождении иностранных инвестиций, развитии
                            международного сотрудничества и организации деловых
                            мероприятий в Центральной Азии. Мы предоставляем
                            комплексную поддержку инвестиционных и
                            бизнес-проектов, помогая компаниям эффективно
                            выходить на рынки региона и выстраивать долгосрочные
                            партнерства.
                        </p>
                    </div>
                    <AboutFeatures
                        features={advantages}
                        className="justify-end lg:w-1/2"
                    />
                </div>
            </Container>
        </section>
    );
}
