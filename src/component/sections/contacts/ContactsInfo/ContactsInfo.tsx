import cn from '@/lib/utils/cn'
import {getCompanyContacts} from '@/services/company/company.service'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

type ContactsInfoProps = {
	className?: string;
}


export default async function ContactsInfo({className}: ContactsInfoProps) {
	const data = await getCompanyContacts('tmt-consulting-group')


	return(
		<div className={cn('flex flex-col gap-9 bg-white shadow-[0px_4px_6px_0px_#C5CDEB] rounded-[10px] py-8.5 px-12', className)}>
			<div className='font-main font-bold text-[20px] text-dark'>Наши Контакты</div>
			<div className="pl-3 flex flex-col gap-9.25">
				<div className="text-dark text-[18px] font-semibold flex items-center gap-6.25"><Phone color="#E95F28" width={32} height={32}/>{data?.phone}</div>
				<div className="text-dark text-[18px] font-semibold flex items-center gap-6.25"><Mail color="#E95F28" width={32} height={32}/>{data?.email}</div>
				<div className="text-dark text-[18px] font-semibold flex items-center gap-6.25"><MapPin color="#E95F28" width={52} height={42}/>{data?.address}</div>
			</div>
			<span className='bg-[#C5CDEB] h-px '></span>
			<div className='font-main font-bold text-[20px] text-dark'>Рабочие часы</div>
			<div className="flex gap-6.25">
				<Clock color="#E95F28" width={32} height={32}/>
				<div className="pl-3 flex flex-col gap-9.25">
					<div className="text-dark text-[18px] font-semibold">Понедельник - Пятница 09:00 - 18:00</div>
					<div className="text-dark text-[18px] font-semibold">Суббота - Воскресенье Выходной</div>
				</div>
			</div>
			
		</div>
	)

}

