import cn from "@/lib/utils/cn";
import { getCompanyContacts } from "@/services/company/company.service";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

type ContactsInfoProps = {
    className?: string;
};

export default async function ContactsInfo({ className }: ContactsInfoProps) {
    const data = await getCompanyContacts("tmt-consulting-group");

    return (
        <div
            className={cn(
                "flex flex-col gap-6 rounded-[10px] bg-white px-5 py-6 shadow-[0px_4px_6px_0px_#C5CDEB] sm:px-8 sm:py-8 lg:gap-9 lg:px-12 lg:py-8.5",
                className,
            )}
        >
            <div className="font-main text-dark text-[18px] font-bold sm:text-[20px]">
                Наши Контакты
            </div>
            <div className="flex flex-col gap-5 pl-0 sm:pl-3 lg:gap-9.25">
                <div className="text-dark flex min-w-0 items-center gap-4 text-base font-semibold sm:gap-6.25 sm:text-[18px]">
                    <Phone color="#E95F28" width={32} height={32} className="shrink-0" />
					<a href={`tel:${data?.phone}`} className="min-w-0 break-words transition-opacity duration-300 ease-in-out hover:opacity-70">{data?.phone}</a>
                </div>
                <div className="text-dark flex min-w-0 items-center gap-4 text-base font-semibold sm:gap-6.25 sm:text-[18px]">
                    <Mail color="#E95F28" width={32} height={32} className="shrink-0" />
					<a href={`mailto:${data?.email}`} className="min-w-0 break-all transition-opacity duration-300 ease-in-out hover:opacity-70">{data?.email}</a>
                    
                </div>
                <div className="text-dark flex min-w-0 items-start gap-4 text-base font-semibold sm:items-center sm:gap-6.25 sm:text-[18px]">
                    <MapPin color="#E95F28" width={52} height={42} className="shrink-0" />
                    <span className="min-w-0 break-words">{data?.address}</span>
                </div>
            </div>
            <span className="h-px bg-[#C5CDEB]"></span>
            <div className="font-main text-dark text-[18px] font-bold sm:text-[20px]">
                Рабочие часы
            </div>
            <div className="flex gap-4 sm:gap-6.25">
                <Clock color="#E95F28" width={32} height={32} className="shrink-0" />
                <div className="flex flex-col gap-5 pl-0 sm:pl-3 lg:gap-9.25">
                    <div className="text-dark text-base font-semibold sm:text-[18px]">
                        Понедельник - Пятница <br /> 09:00 - 18:00
                    </div>
                    <div className="text-dark text-base font-semibold sm:text-[18px]">
                        Суббота - Воскресенье <br /> Выходной
                    </div>
                </div>
            </div>
        </div>
    );
}
