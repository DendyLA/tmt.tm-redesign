import SectionLabel from "@/component/ui/SectionLabel/SectionLabel";
import SectionTitle from "@/component/ui/SectionTitle/SectionTitle";
import Container from "@/component/layout/Container/Container";
import ServiceList from "./ServiceList";
import Button from "@/component/ui/Button/Button";
import Link from "next/link";
import { withLocalePath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";

export default async function OurServices() {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);

    return (
        <section className="bg-main-gradient-white-bottom py-14 sm:py-17">
            <Container>
                <div className="flex flex-col items-center justify-center gap-4">
                    <SectionLabel>{dictionary.home.services.label}</SectionLabel>
                    <SectionTitle
                        darkText={dictionary.home.services.darkText}
                        primaryText={dictionary.home.services.primaryText}
                    />
                    <p className="font-main text-dark max-w-135 text-center text-[16px] leading-6 sm:text-[18px]">
                        {dictionary.home.services.text}
                    </p>

                    <ServiceList className="mt-8 sm:mt-15.5" />
                    <Link href={withLocalePath("/services", locale)}>
                        <Button className="bg-dark mt-8 px-8 hover:bg-[#1E2F5A] sm:mt-15.5 sm:px-10">
                            {dictionary.home.services.cta}
                        </Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
}
