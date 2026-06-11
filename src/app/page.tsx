import Container from "@/component/layout/Container/Container";
import Promo from "@/component/sections/home/Promo/Promo";
import Ticker from "@/component/ui/Ticker/Ticker";
import Header from "@/component/layout/Header/Header";
import About from "@/component/sections/home/About/About";
import Advertising from "@/component/ui/Advertising/Advertising";
import OurServices from "@/component/sections/home/OurServices/OurServices";
import Projects from "@/component/sections/home/Projects/Projects";
import News from '@/component/sections/home/News/News'
import Contact from "@/component/sections/home/Contact/Contact";


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
            <OurServices />
            <Projects />
			<News/>
			<Contact/>
        </div>
    );
}
