import {Minus} from "lucide-react";
import type { ReactNode } from "react";

type labelProps = {
	children: ReactNode;
}

export default function SectionLabel({children}: labelProps){

	return(
		<div className="flex gap-2 items-center">
			<Minus className="text-primary"/>
			<div className="text-primary font-bold text-sm">{children}</div>
		</div>
	)
}