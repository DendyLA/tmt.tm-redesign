import SectionTop from "@/component/ui/SectionTop/SectionTop";
import Logo from "@/component/ui/Logo/Logo";
import Container from "@/component/layout/Container/Container";
import TourismMain from "@/component/sections/tourism/TourismMain/TourismMain";
import Tours from "@/component/sections/tourism/Tours/Tours";
import WhatsappBtn from "@/component/features/WhatsappBtn/WhatsappBtn";

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
