import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import AboutMain from "@/component/sections/aboutUs/AboutMain";
import ProjectList from "@/component/features/ProjectList/ProjectList";


export default async function AboutUs() {


	return (
		<div className="py-12.5 bg-main-gradient-top">
			<Container>
				<div className="flex">
					<Logo />
				</div>
				<SectionTop titleTop="О НАС" titleBottom="Мост между капиталом и возможностью"/>
				<AboutMain className="mt-10"/>
				<SectionTop titleTop="НАШИ ПРОЕКТЫ" titleBottom="Реализованные проекты, которыми мы гордимся." className="mt-14"/>
				<ProjectList className="mt-10"/>
			</Container>
		</div>
	);
}
