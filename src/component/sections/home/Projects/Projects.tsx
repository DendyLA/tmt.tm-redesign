import Container from "@/component/layout/Container/Container";
import SectionLabel from "@/component/ui/SectionLabel/SectionLabel";
import SectionTitle from "@/component/ui/SectionTitle/SectionTitle";
import ProjectList from "@/component/features/ProjectList/ProjectList";

import type { Project } from "@/types/services";

const projects: Project[] = [
    {
        imgSrc: "/images/ift2026.svg",
        title: "Инвестиции в будущее Туркменистана",
    },
    {
        imgSrc: "/images/ift2026.svg",
        title: "Инвестиции в будущее Туркменистана",
    },
    {
        imgSrc: "/images/ift2026.svg",
        title: "Инвестиции в будущее Туркменистана",
    },
    {
        imgSrc: "/images/ift2026.svg",
        title: "Инвестиции в будущее Туркменистана",
    },
    {
        imgSrc: "/images/ift2026.svg",
        title: "Инвестиции в будущее Туркменистана",
    },
];

export default function Projects() {
    return (
        <section className="py-17.5">
            <Container>
                <div className="flex flex-col items-center">
                    <SectionLabel>Наши ПРОЕКТЫ</SectionLabel>
                    <SectionTitle
                        darkText="Ключевые"
                        primaryText="проекты"
                        className="mt-5.5"
                    />
                    <ProjectList projects={projects} className="mt-17.5" />
                </div>
            </Container>
        </section>
    );
}
