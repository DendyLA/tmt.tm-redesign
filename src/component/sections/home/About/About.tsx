import SectionLabel from "@/component/ui/SectionLabel/SectionLabel";
import Container from "@/component/layout/Container/Container";
import SectionTitle from "@/component/ui/SectionTitle/SectionTitle";
import Features from "@/component/sections/home/About/Features";

const advantages = [
    "Прямой доступ к государственным структурам Туркменистана",
    "Собственная база из 500+ инвесторов и партнёров",
    "Организаторы флагманского форума IFT",
    "Полный цикл сопровождения — от идеи до сделки",
    "Работа на трёх языках: русский, английский, туркменский",
];

export default function About() {
    return (
        <section className="bg-main-gradient-to py-40">
            <Container>
                <div className="flex gap-25">
                    <div className="flex w-1/2 flex-col gap-8">
                        <SectionLabel>О НАС</SectionLabel>
                        <SectionTitle
                            darkText="Мост между"
                            primaryText="капиталом и возможностью"
                        />

                        <p className="font-main rounded-[20px] bg-[linear-gradient(90deg,rgba(197,205,235,0.26)_0%,#F8F9FA_83.89%)] p-7.5 text-[22px]">
                            TMT Consulting Group — динамичная консалтинговая
                            компания с глубокой экспертизой в привлечении
                            иностранных инвестиций и организации деловых
                            мероприятий международного уровня в Центральной
                            Азии. Мы предлагаем всестороннюю поддержку
                            бизнес-проектов и обеспечиваем выход на внутренние и
                            региональные рынки.
                        </p>
                    </div>
                    <Features features={advantages} className="justify-end" />
                </div>
            </Container>
        </section>
    );
}
