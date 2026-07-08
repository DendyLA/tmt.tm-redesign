import type { Metadata } from "next"

import SectionTop from "@/component/ui/SectionTop/SectionTop"
import Container from "@/component/layout/Container/Container"
import Logo from "@/component/ui/Logo/Logo"
import ServicesList from "@/component/sections/services/ServicesList/ServicesList"
import { createPageMetadata } from "@/lib/seo/metadata"
import { seoRoutes } from "@/lib/seo/site"

const servicesRoute = seoRoutes.find((route) => route.path === "/services")!

export const metadata: Metadata = createPageMetadata(servicesRoute)

export default function Services(){

	return(
		<div className="py-12.5 bg-[linear-gradient(to_bottom,rgba(232,101,10,.1),rgba(232,101,10,.1),rgba(255,255,255,1)_35%,rgba(255,255,255,1)_65%,rgba(23,54,166,.3))] relative">
			<Container>
				<div className="flex">
					<Logo />
				</div>
				<SectionTop titleTop="УСЛУГИ ДИЗАЙНА И IT" titleBottom="От брендинга до запуска веб-платформ: разрабатываем дизайн, создаём сайты и цифровые продукты, которые привлекают клиентов и усиливают ваш бизнес." className="w-195 text-center"/>
				<ServicesList className="mt-40"/>
			</Container>
		</div>

	)
}
