import Container from "@/component/layout/Container/Container";
import SectionLabel from "@/component/ui/SectionLabel/SectionLabel";
import SectionTitle from "@/component/ui/SectionTitle/SectionTitle";
import Button from "@/component/ui/Button/Button";

export default function Contact(){

	return(
		<section className="py-25 bg-main-gradient-white-bottom">
			<Container>
				<div className="flex flex-col justify-center items-center">
					<div className=" max-w-137.5 flex flex-col justify-center items-center">
						<SectionLabel>Начните сегодня</SectionLabel>
						<SectionTitle darkText="Готовы" primaryText="войти в рынок?" className="mt-4 text-center"/>
						<div className="text-center text-[18px] font-second mt-4">Получите персональную консультацию от команды TMT и узнайте, как мы поможем вашему бизнесу в Центральной Азии</div>
						<Button className="mt-12 px-11">Оставить заявку</Button>
						<div className="flex gap-2 text-dark mt-6.5">
							<div className="font-main text-[18px] font-medium">Или напишите напрямую:</div>
							<a href="mailto:info@tmt.tm" className="font-semibold">info@tmt.tm</a>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}