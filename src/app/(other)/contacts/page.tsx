
import type { Metadata } from "next";

import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import ContactsInfo from "@/component/sections/contacts/ContactsInfo/ContactsInfo";
import ContactsForm from "@/component/sections/contacts/ContactsForm/ContactsForm";
import ContactsMap from "@/component/sections/contacts/ContactsMap/ContactsMap";
import ContactsBanner from "@/component/sections/contacts/ContactsBanner/ContactsBanner";
import { createPageMetadata } from "@/lib/seo/metadata";
import { seoRoutes } from "@/lib/seo/site";

const contactsRoute = seoRoutes.find((route) => route.path === "/contacts")!;

export const metadata: Metadata = createPageMetadata(contactsRoute);

export default async function Contacts() {


    return (
        <div className="py-12.5 bg-main-gradient-top">
            <Container>
                <div className="flex">
                    <Logo />
                </div>
                <SectionTop titleTop="КОНТАКТЫ" titleBottom="Будем рады сотрудничеству и новым партнёрствам."/>
				<div className=' px-35'>
					<div className="grid grid-cols-3 grid-rows-1 gap-4 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 mt-10">
						<ContactsInfo className="col-span-1"/>
						<ContactsForm className="col-span-2"/>
					</div>
					<ContactsMap className="mt-23"/>
					<ContactsBanner className="mt-23"/>
				</div>
				
            </Container>
        </div>
    );
}
