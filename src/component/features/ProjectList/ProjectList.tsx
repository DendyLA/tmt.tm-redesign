import Image from "next/image";

import cn from "@/lib/utils/cn";
import { Project } from "@/types/services";

type projectsListProps = {
    projects: Project[];
    className?: string;
};

export default function ProjectList({
    projects,
    className,
}: projectsListProps) {
    return (
        <ul className="flex justify-between gap-19.5">
            {projects.map((project, index) => {
                return (
                    <li
                        key={index}
                        className={cn(
                            "flex min-h-75 min-w-[320px] flex-col items-center justify-end rounded-lg px-12 py-10 shadow-[0_4px_4.5px_rgba(0,0,0,0.25)]",
                            index % 2 === 0
                                ? "bg-primary/10 border-primary/20 border"
                                : "border border-[rgba(0,21,255,0.2)] bg-[#EEF2FF]",
                            className,
                        )}
                    >
                        <div className="relative h-37.5 w-full">
                            <Image
                                src={project.imgSrc}
                                alt={project.title}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h3 className={cn("font-maintext-sm text-center ", index %2 === 0 ? 'text-primary' : 'text-dark')}>
                            {project.title}
                        </h3>
                        {/*Объяснить это заменив на .text чтобы пкоазать суть типов*/}
                    </li>
                );
            })}
        </ul>
    );
}
