import Image from "next/image";

const navItems = [
    "О НАС",
    "УСЛУГИ",
    "ТУРИЗМ",
    "БЛОГ",
    "НОВОСТИ",
    "ВАКАНСИИ",
    "КОНТАКТЫ",
];

export default function CircleNav() {
    return (
        <nav className="pointer-events-none absolute top-0 right-0 z-20 h-full w-[42vw] min-w-105 overflow-visible">
            <Image
                src="/images/navLogo.png"
                alt=""
                width={1200}
                height={1200}
                priority
                className="pointer-events-none absolute top-1/2 right-[-18%] h-[120vh] w-auto -translate-y-1/2 object-contain select-none"
            />

            <div className="relative z-10 ml-auto flex h-full w-[55%] flex-col items-center justify-center">
                {navItems.map((item, index) => (
                    <a
                        key={item}
                        href="#"
                        className={[
                            "group pointer-events-auto relative flex w-full -translate-y-21 items-center justify-center transition-all duration-400 ease-out hover:-translate-x-14",
                            index % 2 === 1 ? "h-9.75" : "h-11.25,"
                        ].join(" ")}
                    >
                        <span
                            className="absolute inset-0 bg-transparent transition-colors duration-300 group-hover:bg-primary"
                            style={{
                                clipPath:
                                    "polygon(12% 0, 100% 0, 100% 100%, 0 100%)",
                            }}
                        />

                        <span className="font-second relative z-10 text-[17px] font-bold tracking-[0.28em] text-primary transition-colors duration-300 group-hover:text-white text-left">
                            {item}
                        </span>
                    </a>
                ))}
            </div>
        </nav>
    );
}
