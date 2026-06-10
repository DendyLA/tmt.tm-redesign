import {Minus} from "lucide-react";


type labelProps = {
	text: string;
}

export default function SectionLabel({text}: labelProps){

	return(
		<div className="flex gap-2 items-center">
			<Minus fill="bg-primary"/>
			<div className="text-primary font-bold text-sm">{text}</div>
		</div>
	)
}