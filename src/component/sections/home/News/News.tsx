import Container from "@/component/layout/Container/Container";
import SectionLabel from "@/component/ui/SectionLabel/SectionLabel";
import SectionTitle from "@/component/ui/SectionTitle/SectionTitle";
import NewsList from "@/component/features/NewsList/NewsList";
import Button from "@/component/ui/Button/Button";
import type { News } from "@/types/news";
import Link from "next/link";
import { getApiLocale, withLocalePath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";

export default async function News() {
    const locale = await getRequestLocale();
    const dictionary = getDictionary(locale);

    return (
        <section className="py-16 sm:py-25">
            <Container>
                <div className="flex flex-col items-center">
                    <SectionLabel>{dictionary.home.news.label}</SectionLabel>
                    <SectionTitle
                        darkText={dictionary.home.news.darkText}
                        primaryText={dictionary.home.news.primaryText}
                        className="mt-4.5"
                    />
                    <NewsList
                        className="mt-8 sm:mt-16"
                        page={1}
                        limit={4}
                        lang={getApiLocale(locale)}
                        type="NEWS"
                    />
                    <Link href={withLocalePath("/news", locale)}>
                        <Button className="bg-dark mt-10 px-8 hover:bg-[#1E2F5A] sm:mt-20.5 sm:px-10">
                            {dictionary.home.news.cta}
                        </Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
}
