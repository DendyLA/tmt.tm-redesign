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
import { Suspense } from "react";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";

export default async function Home() {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);

    return (
        <div className="">
            <Promo />
            <Ticker items={[...dictionary.home.ticker]} />
            <div className="relative pt-10">
                <Suspense fallback={null}>
                    <Header className="fixed top-3 right-4 translate-x-0 sm:top-7.5 lg:sticky lg:right-auto lg:left-1/2 lg:mx-0 lg:-translate-x-1/2" />
                </Suspense>
                <About />
                {/* <Advertising className="mt-10" /> */}
                <OurServices />
                <Projects />
                <News />
                <Contact />
                <Partners />
            </div>
        </div>
    );
}
