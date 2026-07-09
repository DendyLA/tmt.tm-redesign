import cn from "@/lib/utils/cn";
import getAnalytic from "@/services/analytics/analytics.service";

type WhatsappBtnProps = {
    className?: string;
};

export default async function WhatsappBtn({ className }: WhatsappBtnProps) {
    const data = await getAnalytic({
        company: "tmt-consulting-group",
        place: "tourism.contact",
    });
    const url = data ? data[0]?.trackingUrl : undefined;

    return (
        <a href={url} target="_blank">
            <div
                className={cn(
                    "fixed right-20 bottom-10 flex h-20 w-20 items-center justify-center rounded-full bg-white px-5 py-5 shadow-[0px_2px_6px_2px_rgba(0,0,0,0.1)] transition-colors duration-300 ease-in-out hover:bg-white/10",
                    className,
                )}
            >
                <img
                    src="/icons/whatsapp.svg"
                    alt="whastapp"
                    className="h-full w-full"
                />
            </div>
        </a>
    );
}
