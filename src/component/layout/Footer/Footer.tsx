import Image from "next/image";
import Container from "../Container/Container";
import Slogan from "@/component/ui/Slogan/Slogan";

export default function Footer() {
    return (
        <footer className="py-8 sm:py-11">
            <Container>
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex max-w-full flex-col gap-4 sm:gap-5">
                        <Image
                            src={"/images/logo.png"}
                            width={245}
                            height={56}
                            alt="TMT Consulting Group"
                            className="h-auto w-52 sm:w-[245px]"
                        />
                        <Slogan className="text-primary font-main text-xs leading-5" />
                        <div className="text-primary max-w-83.75 text-left text-[13px] leading-5 font-normal">
                            Ведущая консалтинговая группа в Центральной Азии.
                            Инвестиции. Форумы. Партнёрства. B2G.
                        </div>
                    </div>

                    <div className="flex max-w-full flex-col gap-4 sm:gap-6">
                        <div className="font-main text-dark text-[15px] font-bold uppercase">
                            Контакты
                        </div>
                        <div className="text-primary font-main flex flex-col gap-4 text-base">
                            <a
                                href="tel:+99312753644"
                                className="hover:text-dark transition-colors duration-300 ease-in-out"
                            >
                                +993 (12) 75-36-44 / 48
                            </a>
                            <a
                                href="mailto:info@tmt.tm"
                                className="hover:text-dark transition-colors duration-300 ease-in-out"
                            >
                                info@tmt.tm
                            </a>
                            <a
                                href="https://maps.app.goo.gl/f2s8JQz4dvJDXNsg8"
                                className="hover:text-dark max-w-80 transition-colors duration-300 ease-in-out lg:max-w-57.5"
                            >
                                2127, G. Gulyyev St. 38 (Building Ojar Aziya),
                                744000 Ashgabat, Turkmenistan
                            </a>
                        </div>
                    </div>

                    <div className="h-60 w-full overflow-hidden rounded-2xl sm:h-72 lg:h-56.5 lg:max-w-158.75">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4059.2000679325492!2d58.41956757655366!3d37.95897740152691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffff9207cc0a3%3A0xa5ac5d9fb4303ea3!2sTMT%20Consulting%20Group!5e1!3m2!1sru!2sbg!4v1781505105039!5m2!1sru!2sbg"
                            className="h-full w-full"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div className="border-primary/40 mt-8 flex flex-col gap-5 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-primary font-main text-sm leading-5">
                        © 2026 TMT Consulting Group · Все права защищены
                    </div>
                    <div className="flex items-center gap-3">
                        <a
                            href="https://www.linkedin.com/company/tmt-consulting-group"
                            target="_blank"
                        >
                            <div className="border-primary/30 rounded-md border px-2 py-2">
                                <Image
                                    src={"/icons/linkedin.svg"}
                                    width={20}
                                    height={20}
                                    alt="linkedin"
                                />
                            </div>
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=61572642102689"
                            target="_blank"
                        >
                            <div className="border-primary/30 rounded-md border px-2 py-2">
                                <Image
                                    src={"/icons/facebook.svg"}
                                    width={20}
                                    height={20}
                                    alt="facebook"
                                />
                            </div>
                        </a>
                        <a
                            href="https://www.instagram.com/turkmen_maslahatchylar_topary/"
                            target="_blank"
                        >
                            <div className="border-primary/30 rounded-md border px-2 py-2">
                                <Image
                                    src={"/icons/instagram.svg"}
                                    width={20}
                                    height={20}
                                    alt="instagram"
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
