import Image from "next/image";
import { mediaUrl } from "@/constants/constants";
import RichText from "@/component/ui/RichText/RichText";

type ProjectContentProps = {
    project: any;
    className?: string;
};

export default function ProjectContent({
    project,
    className,
}: ProjectContentProps) {
    return (
        <div className="mt-15 flex flex-col gap-11">
            <div className="flex h-25 items-center">
                <Image
                    src={`${mediaUrl}${project.coverImage}`}
                    width={380}
                    height={70}
                    alt={project.title}
                    className="h-25 w-auto object-cover"
                />
            </div>

            <h1 className="font-second text-primary text-[26px] uppercase">
                {project.translation.title}
            </h1>
            <div className="font-main text-dark px-37.5 text-justify text-[22px] font-medium">
                <RichText content={project.translation.description} />
            </div>
        </div>
    );
}
