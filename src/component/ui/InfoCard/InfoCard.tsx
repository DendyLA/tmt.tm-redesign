import cn from "@/lib/utils/cn"



type InfoCardProps = {
	title: string;
	descr: string;
	index: number;
	style: 'blue' | 'orange';
	className?: string;
}

export default function InfoCard({ title, descr, index, style, className }: InfoCardProps){


	return(
		<div  className={cn("py-10.5 px-10 bg-white shadow-[0px_5px_6px_0px_rgba(0,0,0,0.1)] border  rounded-xl relative max-w-225 z-10", style === "blue" ? "border-dark" : "border-primary" , className)}>
			<div className={cn("text-primary font-second text-[33px] flex gap-3.75 items-center max-w-150 uppercase", style === 'blue' ? 'text-dark' : 'text-primary')}><span className={cn("bg-primary h-0.5 w-8.75", style === 'blue' ? 'bg-dark' : 'bg-primary')}></span>{title}</div>
			<div className="text-dark font-main text-base font-medium mt-6.25 max-w-187.5">{descr}</div>

			<div className={cn("absolute top-0 right-6.5 font-second text-[96px]  font-black", style === 'blue' ? 'text-dark/10' : 'text-primary/10')}>{String(index + 1).padStart(2, "0")}</div>
		</div>
	)
}