import Container from "@/component/layout/Container/Container"
import SectionLabel from "@/component/ui/SectionLabel/SectionLabel"
import SectionTitle from "@/component/ui/SectionTitle/SectionTitle"
import NewsList from "@/component/features/NewsList/NewsList"
import Button from "@/component/ui/Button/Button"
import type { News } from "@/types/news"

const allNews:News[] =[
	{title: 'В Ашхабаде прошёл инженерно-технический конкурс «Молодой инженер 2026»', date: '', imgSrc: '/images/news.png'},
	{title: 'В Ашхабаде прошёл инженерно-технический конкурс «Молодой инженер 2026»', date: '', imgSrc: '/images/news.png'},
	{title: 'В Ашхабаде прошёл инженерно-технический конкурс «Молодой инженер 2026»', date: '', imgSrc: '/images/news.png'},
	{title: 'В Ашхабаде прошёл инженерно-технический конкурс «Молодой инженер 2026»', date: '', imgSrc: '/images/news.png'},
	{title: 'В Ашхабаде прошёл инженерно-технический конкурс «Молодой инженер 2026»', date: '', imgSrc: '/images/news.png'}
]


export default function News(){

	return(
		<section className="py-25">
			<Container>
				<div className="flex flex-col items-center">
					<SectionLabel>НОВОСТИ</SectionLabel>
					<SectionTitle darkText="Что" primaryText="Нового" className="mt-4.5"/> 
					<NewsList allNews={allNews} className="mt-16"/>
					<Button className="mt-20.5 bg-dark px-10 hover:bg-[#1E2F5A]">Все новости</Button>
				</div>
			</Container>
		</section>
	)
}

