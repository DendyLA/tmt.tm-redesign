import Image from "next/image";
import { mediaUrl } from "@/constants/constants";
import RichText from "@/component/ui/RichText/RichText";
import type { Project } from "@/services/projects/projects.types";
import {
    getProjectDescription,
    getProjectTitle,
} from "@/services/projects/projects.utils";

type ProjectContentProps = {
    project: Project | null;
    className?: string;
};

export default function ProjectContent({
    project,
    className,
}: ProjectContentProps) {
    if (!project) {
        return null;
    }

    const title = getProjectTitle(project);
    const description = getProjectDescription(project);

    return (
        <div className="mt-15 flex flex-col gap-11">
            <div className="flex h-25 items-center">
                <Image
                    src={`${mediaUrl}${project.coverImage}`}
                    width={380}
                    height={70}
                    alt={title}
                    className="h-25 w-auto object-cover"
                />
            </div>

            <h1 className="font-second text-primary text-[26px] uppercase">
                {title}
            </h1>
            <div className="font-main text-dark px-37.5 text-justify text-[22px] font-medium">
                <RichText content={description} />
            </div>
        </div>
    );
}
