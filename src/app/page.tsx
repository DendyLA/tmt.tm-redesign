import Container from "@/component/ui/Container/Container";
import Promo from "@/component/sections/Home/Promo";
import Ticker from "@/component/ui/Ticker/Ticker";
import Header from "@/component/ui/Header/Header";
import About from "@/component/sections/About/About";
import Advertising from "@/component/ui/Advertising/Advertising";
import OurServices from "@/component/sections/OurServices/OurServices";

const features = [
    "Инвестиционный консалтинг",
    "Деловые форумы",
    "УСЛУГИ ДИЗАЙНА",
    "Поддержка стартапов",
    "IFT 2026 — 18 марта",
    "ВОЗМОЖНОСТИ",
    "УСЛУГИ IT",
    "НОВОСТИ",
];

export default function Home() {
    return (
        <div className="overflow-hidden">
            <Promo />
            <Ticker items={features} />
            <Header />
			<About />
			<Advertising imgSrc="/images/adv.png" className="mt-10" />
			<OurServices/>
        </div>
    );
}
