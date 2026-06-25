import cn from "@/lib/utils/cn"
import getAnalytic from "@/services/analytics/analytics.service"

type WhatsappBtnProps = {
	className?: string;
}

export default async function WhatsappBtn({className}: WhatsappBtnProps){
	const data = await getAnalytic({ company: 'tmt-consulting-group', place: 'tourism.contact' })
	const url = data[0]?.trackingUrl
	
	return(
		<a href={url} target="_blank">
			<div className={cn("flex items-center justify-center bg-white rounded-full py-5 px-5 w-20 h-20 shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] fixed right-20 bottom-10 transition-colors duration-300 ease-in-out hover:bg-white/10", className)}>
				<img src="/icons/whatsapp.svg" alt="whastapp" className="w-full h-full"/>
			</div>
		</a>
	)
}