import Image from "next/image";
import Container from "../../../layout/Container/Container";
import PromoContent from "./PromoContent";
import CircleNav from "../../../layout/CircleNav/CircleNav";

export default function Promo() {
    return (
        <section className="bg-main-gradient-top relative flex min-h-[720px] flex-col overflow-hidden pt-5 sm:min-h-[820px] sm:pt-7 lg:min-h-300">
            <Container>
                <div className="relative h-1/2">
                    <Image
                        src="/images/turkmenistan.png"
                        alt="Promo Image"
                        width={1120}
                        height={1080}
                        priority
                        className="absolute top-20 left-1/2 z-0 h-[34vh] w-auto -translate-x-1/2 object-cover opacity-60 sm:top-8 sm:h-[48vh] md:left-0 md:h-[70vh] md:translate-x-0 md:opacity-100"
                    />
                    <PromoContent />
                </div>
            </Container>
            <div className="h-1/2">
                <Image
                    src="/images/monuments.png"
                    height={362}
                    width={1597}
                    alt="Monuments"
                    className="absolute bottom-0 left-0 z-0 h-auto w-full object-cover md:w-[80%]"
                />
            </div>

            <CircleNav />
        </section>
    );
}
/* Rectangle 9 */
