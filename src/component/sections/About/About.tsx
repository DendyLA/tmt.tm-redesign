import SectionLabel from "@/component/ui/SectionLabel/SectionLabel";
import Container from "@/component/ui/Container/Container";
import SectionTitle from "@/component/ui/SectionTitle/SectionTitle";


export default function About() {


    return (
		<section className="bg-main-gradient-to py-40">
			<Container>
				<div className="flex gap-4 ">
					<div className="flex flex-col gap-4">
						<SectionLabel text="О НАС" />
						<SectionTitle darkText="Мост между капиталом" primaryText="и возможностью" />
					</div>
				</div>
			</Container>
		</section>

	);
}
