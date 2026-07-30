import type { Metadata } from "next";

import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import ContactsInfo from "@/component/sections/contacts/ContactsInfo/ContactsInfo";
import ContactsForm from "@/component/sections/contacts/ContactsForm/ContactsForm";
import ContactsMap from "@/component/sections/contacts/ContactsMap/ContactsMap";
import ContactsBanner from "@/component/sections/contacts/ContactsBanner/ContactsBanner";
import { ContactPageJsonLd } from "@/component/seo/PageStructuredData";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getSeoRoute } from "@/lib/seo/site";

export async function generateMetadata(): Promise<Metadata> {
    const locale = await getRequestLocale();
    const contactsRoute = getSeoRoute("/contacts", locale)!;

    return createPageMetadata({ ...contactsRoute, locale });
}

export default async function Contacts() {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);

    return (
        <div className="bg-main-gradient-top py-8 sm:py-12.5">
            <ContactPageJsonLd />
            <Container>
                <div className="flex justify-center sm:justify-start">
                    <Logo />
                </div>
                <SectionTop
                    titleTop={dictionary.sections.contacts.title}
                    titleBottom={dictionary.sections.contacts.subtitle}
                    className="mt-6 sm:mt-0"
                />
                <div className="px-0 xl:px-35">
                    <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 lg:grid-cols-3 lg:grid-rows-1 lg:gap-6 xl:gap-8">
                        <ContactsInfo className="lg:col-span-1" />
                        <ContactsForm className="lg:col-span-2" />
                    </div>
                    <ContactsMap className="mt-10 sm:mt-16 lg:mt-23" />
                    <ContactsBanner className="mt-10 sm:mt-16 lg:mt-23" />
                </div>
            </Container>
        </div>
    );
}
