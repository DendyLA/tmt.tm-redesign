import Image from "next/image";
import Container from "../../ui/Container/Container";
import PromoContent from "./PromoContent";
import CircleNav from "../../ui/CircleNav/CircleNav";

export default function Promo() {
    return (
        <section className="bg-main-gradient-top relative flex min-h-300 flex-col pt-7">
            <Container>
                <div className="relative h-1/2">
                    <Image
                        src="/images/turkmenistan.png"
                        alt="Promo Image"
                        width={1120}
                        height={1080}
                        priority
                        className="absolute top-0 left-0 z-0 h-[70vh] w-auto object-cover"
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
                    className="absolute bottom-0 left-0 z-0 h-auto w-[80%] object-cover"
                />
            </div>

            <CircleNav />
        </section>
    );
}
/* Rectangle 9 */
