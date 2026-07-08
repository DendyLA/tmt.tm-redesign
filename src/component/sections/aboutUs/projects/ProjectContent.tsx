import Image from "next/image";
import {mediaUrl} from "@/constants/constants";
import RichText from "@/component/ui/RichText/RichText";

type ProjectContentProps = {
	project: any;
	className?: string;
};

export default function ProjectContent({ project, className }: ProjectContentProps) {

	console.log(project);
	return(
		<div className="flex flex-col gap-11 mt-15">
			<div className="h-25 flex items-center">
				<Image src={`${mediaUrl}${project.coverImage}`} width={380} height={70} alt={project.title} className='h-25 w-auto object-cover'/>
			</div>
			
			<h1 className="font-second uppercase text-[26px] text-primary">{project.translation.title}</h1>
			<div className='font-main text-[22px] font-medium text-dark text-justify px-37.5'>
				<RichText content={project.translation.description}/>
			</div>
		</div>
	)

}