import Container from "@/component/layout/Container/Container";
import PartnersList from "@/component/features/PartnersList/PartnersList";

export default function Partners() {
    return (
        <section className="bg-dark py-12 sm:py-16">
            <Container>
                <div className="flex flex-col items-center justify-center">
                    <h3 className="font-main text-center text-sm font-bold text-white uppercase">
                        Наши партнёры и МЕДИА ПАРТНЕРЫ
                    </h3>
                    <PartnersList className="mt-5.5" />
                </div>
            </Container>
        </section>
    );
}
