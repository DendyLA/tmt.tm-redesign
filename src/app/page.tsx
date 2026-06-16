import Container from "@/component/layout/Container/Container";
import Promo from "@/component/sections/home/Promo/Promo";
import Ticker from "@/component/ui/Ticker/Ticker";
import Header from "@/component/layout/Header/Header";
import About from "@/component/sections/home/About/About";
import Advertising from "@/component/ui/Advertising/Advertising";
import OurServices from "@/component/sections/home/OurServices/OurServices";
import Projects from "@/component/sections/home/Projects/Projects";
import News from "@/component/sections/home/News/News";
import Contact from "@/component/sections/home/Contact/Contact";
import Partners from "@/component/sections/home/Partners/Partners";
import Footer from "@/component/layout/Footer/Footer";



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
        <div >
            <Promo />
            <Ticker items={features} />
			<div className="relative pt-10">
				<Header className="sticky top-7.5 "/>
				<About />
				<Advertising className="mt-10" />
				<OurServices />
				<Projects />
				<News />
				<Contact />
				<Partners />
			</div>
            
            
        </div>
    );
}
