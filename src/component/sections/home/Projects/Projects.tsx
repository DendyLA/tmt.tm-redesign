import Container from "@/component/layout/Container/Container";
import SectionLabel from "@/component/ui/SectionLabel/SectionLabel";
import SectionTitle from "@/component/ui/SectionTitle/SectionTitle";
import ProjectList from "@/component/features/ProjectList/ProjectList";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";

export default async function Projects() {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);

    return (
        <section className="py-14 sm:py-17.5">
            <Container>
                <div className="flex flex-col items-center">
                    <SectionLabel>{dictionary.home.projects.label}</SectionLabel>
                    <SectionTitle
                        darkText={dictionary.home.projects.darkText}
                        primaryText={dictionary.home.projects.primaryText}
                        className="mt-5.5"
                    />
                    <ProjectList className="mt-8 sm:mt-17.5" />
                </div>
            </Container>
        </section>
    );
}
