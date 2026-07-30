import SectionLabel from "@/component/ui/SectionLabel/SectionLabel";
import Container from "@/component/layout/Container/Container";
import SectionTitle from "@/component/ui/SectionTitle/SectionTitle";
import AboutFeatures from "@/component/features/AboutFeatures/AboutFeatures";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";

export default async function About() {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);

    return (
        <section className="bg-main-gradient-to py-20 lg:py-40">
            <Container>
                <div className="flex min-w-0 flex-col gap-10 lg:flex-row lg:gap-25">
                    <div className="flex w-full min-w-0 flex-col gap-6 lg:w-1/2 lg:gap-8">
                        <SectionLabel>{dictionary.home.about.label}</SectionLabel>
                        <SectionTitle
                            darkText={dictionary.home.about.darkText}
                            primaryText={dictionary.home.about.primaryText}
                        />

                        <p className="font-main w-full max-w-full rounded-[20px] bg-[linear-gradient(90deg,rgba(197,205,235,0.26)_0%,#F8F9FA_83.89%)] p-5 text-[17px] leading-7 break-words sm:p-7.5 sm:text-[22px] sm:text-justify">
                            <span className="font-bold">
                                TMT Consulting Group
                            </span>{" "}
                            {dictionary.home.about.text}
                        </p>
                    </div>
                    <AboutFeatures
                        features={[...dictionary.home.about.advantages]}
                        className="justify-end lg:w-1/2"
                    />
                </div>
            </Container>
        </section>
    );
}
