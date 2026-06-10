
import SectionLabel from "@/component/ui/SectionLabel/SectionLabel";
import SectionTitle from "@/component/ui/SectionTitle/SectionTitle";
import Container from "@/component/ui/Container/Container";


export default function OurServices() {

	return(
		<Container>
			<div className="py-17 flex flex-col items-center justify-center gap-4 ">
				<SectionLabel>Наши услуги</SectionLabel>
				<SectionTitle darkText="Что мы " primaryText="делаем"/>
				<p className="text-center max-w-135 text-[18px] text-main text-dark leading-6">Соединяем идеи, инвестиции и технологии, чтобы ваш бизнес уверенно рост и масштабировался в Центральной Азии.</p>
			</div>
		</Container>
	)

}