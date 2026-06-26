
import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";

export default async function AboutUs() {


	return (
		<div className="py-12.5 bg-main-gradient-top">
			<Container>
				<div className="flex">
					<Logo />
				</div>
				<SectionTop titleTop="О НАС" titleBottom="Мост между капиталом и возможностью"/>
				<SectionTop titleTop="НАШИ ПРОЕКТЫ" titleBottom="Реализованные проекты, которыми мы гордимся." className="mt-14"/>
			</Container>
		</div>
	);
}
