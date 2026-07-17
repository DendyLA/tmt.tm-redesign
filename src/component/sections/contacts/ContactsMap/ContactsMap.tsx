import cn from "@/lib/utils/cn";

type ContactsMapProps = {
    className?: string;
};

export default function ContactsMap({ className }: ContactsMapProps) {
    return (
        <div className={cn("h-64 overflow-hidden rounded-[10px] sm:h-56.5", className)}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4059.2000679325492!2d58.41956757655366!3d37.95897740152691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffff9207cc0a3%3A0xa5ac5d9fb4303ea3!2sTMT%20Consulting%20Group!5e1!3m2!1sru!2sbg!4v1781505105039!5m2!1sru!2sbg"
                width="100%"
                height="226"
                className="h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}
