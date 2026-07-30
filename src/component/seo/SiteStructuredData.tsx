import { getRequestLocale } from "@/lib/i18n/server";
import { getSiteJsonLd } from "@/lib/seo/site";

type JsonLdScriptProps = {
    id: string;
    data: Record<string, unknown> | Array<Record<string, unknown>>;
};

export function JsonLdScript({ id, data }: JsonLdScriptProps) {
    return (
        <script
            id={id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(data).replace(/</g, "\\u003c"),
            }}
        />
    );
}

export default async function SiteStructuredData() {
    const locale = await getRequestLocale();

    return <JsonLdScript id="site-json-ld" data={getSiteJsonLd(locale)} />;
}
