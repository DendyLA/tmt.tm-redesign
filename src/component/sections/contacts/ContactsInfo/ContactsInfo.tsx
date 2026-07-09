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
                "flex flex-col gap-9 rounded-[10px] bg-white px-12 py-8.5 shadow-[0px_4px_6px_0px_#C5CDEB]",
                className,
            )}
        >
            <div className="font-main text-dark text-[20px] font-bold">
                Наши Контакты
            </div>
            <div className="flex flex-col gap-9.25 pl-3">
                <div className="text-dark flex items-center gap-6.25 text-[18px] font-semibold">
                    <Phone color="#E95F28" width={32} height={32} />
                    {data?.phone}
                </div>
                <div className="text-dark flex items-center gap-6.25 text-[18px] font-semibold">
                    <Mail color="#E95F28" width={32} height={32} />
                    {data?.email}
                </div>
                <div className="text-dark flex items-center gap-6.25 text-[18px] font-semibold">
                    <MapPin color="#E95F28" width={52} height={42} />
                    {data?.address}
                </div>
            </div>
            <span className="h-px bg-[#C5CDEB]"></span>
            <div className="font-main text-dark text-[20px] font-bold">
                Рабочие часы
            </div>
            <div className="flex gap-6.25">
                <Clock color="#E95F28" width={32} height={32} />
                <div className="flex flex-col gap-9.25 pl-3">
                    <div className="text-dark text-[18px] font-semibold">
                        Понедельник - Пятница <br /> 09:00 - 18:00
                    </div>
                    <div className="text-dark text-[18px] font-semibold">
                        Суббота - Воскресенье <br /> Выходной
                    </div>
                </div>
            </div>
        </div>
    );
}
