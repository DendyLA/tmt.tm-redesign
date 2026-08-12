import Image from "next/image";
import { getProject } from "@/services/projects/projects.service";
import cn from "@/lib/utils/cn";
import { mediaUrl } from "@/constants/constants";
import { getApiLocale, withLocalePath } from "@/lib/i18n/config";
import { getRequestLocale } from "@/lib/i18n/server";
import { getProjectTitle } from "@/services/projects/projects.utils";

type projectsListProps = {
    className?: string;
};

export default async function ProjectList({ className }: projectsListProps) {
    const locale = await getRequestLocale();
    const projects = await getProject(
        "tmt-consulting-group",
        getApiLocale(locale),
    );
    const disableOptimization = process.env.NODE_ENV === "development";

    return (
        <ul className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 md:gap-10 xl:grid-cols-5 xl:gap-14">
            {projects.map((project, index) => {
                const title = getProjectTitle(project);

                return (
                    <a
                        key={project.slug ?? title ?? index}
                        href={withLocalePath(
                            `/about-us/projects/${project.slug}`,
                            locale,
                        )}
                        className="w-full max-w-[320px] transition-transform duration-300 ease-in-out hover:scale-105"
                    >
                        <li
                            className={cn(
                                "min-h-64 h-full flex w-full flex-col items-center justify-end gap-7 rounded-lg px-6 py-8 shadow-[0_4px_4.5px_rgba(0,0,0,0.25)] sm:min-h-79.2 sm:gap-10 sm:px-12 sm:py-10",
                                index % 2 === 0
                                    ? "bg-primary/10 border-primary/20 border"
                                    : "border border-[rgba(0,21,255,0.2)] bg-[#EEF2FF]",
                                className,
                            )}
                        >
                            <div className="relative h-28 w-full sm:h-37.5">
                                <Image
                                    src={`${mediaUrl}${project.coverImage}`}
                                    alt={title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 320px"
                                    unoptimized={disableOptimization}
                                    className="object-contain"
                                />
                            </div>
                            <h3
                                className={cn(
                                    "font-maintext-sm text-center text-sm leading-5",
                                    index % 2 === 0
                                        ? "text-primary"
                                        : "text-dark",
                                )}
                            >
                                {title}
                            </h3>
                        </li>
                    </a>
                );
            })}
        </ul>
    );
}
