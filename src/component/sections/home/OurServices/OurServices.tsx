import SectionLabel from "@/component/ui/SectionLabel/SectionLabel";
import SectionTitle from "@/component/ui/SectionTitle/SectionTitle";
import Container from "@/component/layout/Container/Container";
import ServiceList from "./ServiceList";
import Button from "@/component/ui/Button/Button";

const services = [
    {
        title: "Инвестиционный консалтинг",
        text: "Привлекаем иностранный капитал в Туркменистан. Сопровождаем инвесторов от первого контакта до подписанной сделки. Матчмейкинг, инвестиционные паспорта, аналитика рынка.",
        tag: "Организация переговоров",
    },
    {
        title: "Деловые форумы и мероприятия",
        text: "Организуем международные форумы уровня IFT, деловые конференции и B2B-сессии под ключ. Синхронный перевод, официальное подписание меморандумов, полный брендинг.",
        tag: "Полный продакшн мероприятия",
    },
    {
        title: "Услуги Дизайна и IT",
        text: "От брендинга до запуска веб-платформ: разрабатываем дизайн, создаём сайты и цифровые продукты, которые привлекают клиентов и усиливают ваш бизнес.",
        tag: "От идеи до реализации",
    },
    {
        title: "Поддержка стартапов",
        text: "Помогаем молодым компаниям найти инвесторов, выйти на рынок Туркменистана и масштабироваться в регион. Питч-сессии, менторство, доступ к сети TMT.",
        tag: "Масштабирование",
    },
    {
        title: "Туризм",
        text: "Организуем бизнес- и индивидуальные туры по Туркменистану. Предлагаем полный сервис: визовая поддержка, маршруты, сопровождение и уникальные культурные программы.",
        tag: "Комфорт и сопровождение",
    },
    {
        title: "Учёба в Корее",
        text: "Помогаем поступить в ведущие университеты Кореи. Консультируем по выбору программ, оформлению документов, визе и адаптации на месте.",
        tag: "Образование в Корее",
    },
];

export default function OurServices() {
    return (
        <section className="bg-main-gradient-white-bottom py-17">
            <Container>
                <div className="flex flex-col items-center justify-center gap-4">
                    <SectionLabel>Наши услуги</SectionLabel>
                    <SectionTitle darkText="Что мы " primaryText="делаем" />
                    <p className="font-main text-dark max-w-135 text-center text-[18px] leading-6">
                        Соединяем идеи, инвестиции и технологии, чтобы ваш
                        бизнес уверенно рост и масштабировался в Центральной
                        Азии.
                    </p>

                    <ServiceList services={services} className="mt-15.5" />
                    <Button className="bg-dark mt-15.5 px-10 hover:bg-[#1E2F5A]">
                        Подробнее
                    </Button>
                </div>
            </Container>
        </section>
    );
}
