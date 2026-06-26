import type { Metadata } from "next";

import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import TourismMain from "@/component/sections/tourism/TourismMain/TourismMain";
import Tours from "@/component/sections/tourism/Tours/Tours";
import WhatsappBtn from "@/component/features/WhatsappBtn/WhatsappBtn";
import { createPageMetadata } from "@/lib/seo/metadata";
import { seoRoutes } from "@/lib/seo/site";

const tourismRoute = seoRoutes.find((route) => route.path === "/tourism")!;

export const metadata: Metadata = createPageMetadata(tourismRoute);

export default async function Tourism() {


	return (
		<div className="py-12.5 bg-second-gradient-bottom relative">
			<Container>
				<div className="flex">
					<Logo />
				</div>
				<SectionTop titleTop="ТУРИЗМ" titleBottom="Исследуйте Туркменистан с нами."/>

				<TourismMain className="mt-24.5"/>
				<Tours className='mt-12.5'/>
				<WhatsappBtn/>
			</Container>
		</div>
	);
}
