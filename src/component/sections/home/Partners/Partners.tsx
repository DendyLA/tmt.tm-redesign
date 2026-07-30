import Container from "@/component/layout/Container/Container";
import PartnersList from "@/component/features/PartnersList/PartnersList";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";

export default async function Partners() {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);

    return (
        <section className="bg-dark py-12 sm:py-16">
            <Container>
                <div className="flex flex-col items-center justify-center">
                    <h3 className="font-main text-center text-sm font-bold text-white uppercase">
                        {dictionary.home.partners}
                    </h3>
                    <PartnersList className="mt-5.5" />
                </div>
            </Container>
        </section>
    );
}
