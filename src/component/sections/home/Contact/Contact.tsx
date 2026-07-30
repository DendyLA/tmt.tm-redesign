"use client";

import { useState } from "react";

import Container from "@/component/layout/Container/Container";
import SectionLabel from "@/component/ui/SectionLabel/SectionLabel";
import SectionTitle from "@/component/ui/SectionTitle/SectionTitle";
import Button from "@/component/ui/Button/Button";
import ContactForm from "@/component/features/ContactForm/ContactForm";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default function Contact() {
    const [isOpen, setIsOpen] = useState(false);
    const locale = getLocaleFromPathname(usePathname());
    const dictionary = getDictionary(locale);

    return (
        <section className="bg-main-gradient-white-bottom py-16 sm:py-25">
            <Container>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex max-w-137.5 flex-col items-center justify-center">
                        <SectionLabel>{dictionary.home.contact.label}</SectionLabel>
                        <SectionTitle
                            darkText={dictionary.home.contact.darkText}
                            primaryText={dictionary.home.contact.primaryText}
                            className="mt-4 text-center"
                        />
                        <div className="font-second mt-4 text-center text-[18px]">
                            {dictionary.home.contact.text}
                        </div>
                        <Button
                            className="mt-8 px-8 sm:mt-12 sm:px-11"
                            onClick={() => setIsOpen(true)}
                        >
                            {dictionary.home.contact.cta}
                        </Button>
                        <div className="text-dark mt-6.5 flex flex-col items-center gap-2 text-center sm:flex-row">
                            <div className="font-main text-[18px] font-medium">
                                {dictionary.home.contact.direct}
                            </div>
                            <a
                                href="mailto:info@tmt.tm"
                                className="font-semibold"
                                target="_blank"
                            >
                                info@tmt.tm
                            </a>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div
                        className="fixed inset-0 z-20 flex items-center justify-center bg-black/50 px-4"
                        onClick={() => setIsOpen(false)}
                    >
                        <div onClick={(event) => event.stopPropagation()}>
                            <ContactForm />
                        </div>
                    </div>
                )}
            </Container>
        </section>
    );
}
