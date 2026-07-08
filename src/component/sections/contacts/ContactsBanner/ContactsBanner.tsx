import cn from '@/lib/utils/cn'
import { Handshake } from 'lucide-react'
import Link from 'next/link'

type ContactsBannerProps = {
	className?: string;
}



export default function ContactsBanner({className}: ContactsBannerProps) {

	return(
		<div className={cn('py-8.75 px-10 flex items-center justify-between bg-[#EEF2FF] rounded-[10px]', className)}>
			<div className="flex gap-14.25">
				<Handshake color="#091540" width={93} height={67}/>
				<div className='flex flex-col gap-3.25'>
					<div className='text-[26px] font-bold font-main text-dark'>Заинтересованы в сотрудечестве?</div>
					<div className='font-main font-semibold text-[18px]'>Давайте обсудим, как мы можем помочь вашему бизнесу развиваться и расти.</div>
				</div>
			</div>
			
			<Link href="/services">
				<button className='text-white w-fit py-5.5 px-4 bg-dark border-dark border rounded-sm text-[20px] font-main font-bold transition-colors duration-300 ease-in-out hover:bg-[#EEF2FF] hover:text-dark'>Подробнее о наших услугах</button>
			</Link>
			
		</div>
	)
}