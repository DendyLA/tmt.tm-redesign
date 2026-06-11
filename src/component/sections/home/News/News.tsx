import Container from "@/component/layout/Container/Container"
import SectionLabel from "@/component/ui/SectionLabel/SectionLabel"
import SectionTitle from "@/component/ui/SectionTitle/SectionTitle"


export default function News(){

	return(
		<section className="py-25">
			<Container>
				<div className="flex flex-col items-center">
					<SectionLabel>НОВОСТИ</SectionLabel>
					<SectionTitle darkText="Что" primaryText="Нового" className="mt-4.5"/> 
				</div>
			</Container>
		</section>
	)
}