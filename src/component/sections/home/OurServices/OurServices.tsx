import SectionLabel from "@/component/ui/SectionLabel/SectionLabel";
import SectionTitle from "@/component/ui/SectionTitle/SectionTitle";
import Container from "@/component/layout/Container/Container";
import ServiceList from "./ServiceList";
import Button from "@/component/ui/Button/Button";
import Link from "next/link";

export default function OurServices() {
    return (
        <section className="bg-main-gradient-white-bottom py-14 sm:py-17">
            <Container>
                <div className="flex flex-col items-center justify-center gap-4">
                    <SectionLabel>Наши услуги</SectionLabel>
                    <SectionTitle darkText="Что мы " primaryText="делаем" />
                    <p className="font-main text-dark max-w-135 text-center text-[16px] leading-6 sm:text-[18px]">
                        Соединяем идеи, инвестиции и технологии, чтобы ваш
                        бизнес уверенно рост и масштабировался в Центральной
                        Азии.
                    </p>

                    <ServiceList className="mt-8 sm:mt-15.5" />
                    <Link href={"/services"}>
                        <Button className="bg-dark mt-8 px-8 hover:bg-[#1E2F5A] sm:mt-15.5 sm:px-10">
                            Подробнее
                        </Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
}
