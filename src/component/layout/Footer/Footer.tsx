import Image from "next/image";
import Container from "../Container/Container";
import Slogan from "@/component/ui/Slogan/Slogan";

export default function Footer() {
    return (
        <footer className="py-11">
            <Container>
                <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-5">
                        <Image
                            src={"/images/logo.png"}
                            width={245}
                            height={56}
                            alt="TMT Consulting Group"
                        />
                        <Slogan className="text-primary font-main text-xs" />
                        <div className="text-primary max-w-83.75 text-left text-[13px] font-normal">
                            Ведущая консалтинговая группа в Центральной Азии.
                            Инвестиции. Форумы. Партнёрства. B2G.
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="font-main text-dark text-[11px] font-bold">
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
                                className="hover:text-dark max-w-57.5 transition-colors duration-300 ease-in-out"
                            >
                                2127, G. Gulyyev St. 38 (Building Ojar Aziya),
                                744000 Ashgabat, Turkmenistan
                            </a>
                        </div>
                    </div>

                    <div className="max-h-56.5 max-w-158.75 overflow-hidden rounded-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4059.2000679325492!2d58.41956757655366!3d37.95897740152691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffff9207cc0a3%3A0xa5ac5d9fb4303ea3!2sTMT%20Consulting%20Group!5e1!3m2!1sru!2sbg!4v1781505105039!5m2!1sru!2sbg"
                            width="637"
                            height="226"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div className="border-primary/40 mt-4 flex justify-between border-t pt-6">
                    <div className="text-primary font-main text-sm">
                        © 2026 TMT Consulting Group · Все права защищены
                    </div>
                    <div className="flex items-center justify-center gap-3">
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
