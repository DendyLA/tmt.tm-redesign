import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Container from "@/component/layout/Container/Container";
import ForumHero from "@/component/sections/forums/ForumHero/ForumHero";
import ForumMeetingRequest from "@/component/sections/forums/ForumMeetingRequest/ForumMeetingRequest";
import ForumOverview from "@/component/sections/forums/ForumOverview/ForumOverview";
import ForumProgram from "@/component/sections/forums/ForumProgram/ForumProgram";
import ForumReport from "@/component/sections/forums/ForumReport/ForumReport";
import ForumSpeakers from "@/component/sections/forums/ForumSpeakers/ForumSpeakers";
import ForumOrganizers from "@/component/sections/forums/ForumOrganizers/ForumOrganizers";
import ForumDelegates from "@/component/sections/forums/ForumDelegates/ForumDelegates";
import ForumSponsors from "@/component/sections/forums/ForumSponsors/ForumSponsors";
import ForumSupport from "@/component/sections/forums/ForumSupport/ForumSupport";
import ForumGallery from "@/component/sections/forums/ForumGallery/ForumGallery";
import { getApiLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getRequestLocale } from "@/lib/i18n/server";
import { createPageMetadata, truncateText } from "@/lib/seo/metadata";
import { absoluteMediaUrl, getSiteConfig } from "@/lib/seo/site";
import { featuredForumSlug } from "@/services/forums/forums.constants";
import { getForum, getForumProgram } from "@/services/forums/forums.service";
import { getForumGallery } from "@/services/forums/forum-gallery.service";
import {
    getForumDescription,
    getForumTitle,
    hasForumEnded,
} from "@/services/forums/forums.utils";

type ForumPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata({
    params,
}: ForumPageProps): Promise<Metadata> {
    const { slug } = await params;
    const locale = await getRequestLocale();
    const apiLocale = getApiLocale(locale);
    const dictionary = getDictionary(locale);
    const siteConfig = getSiteConfig(locale);

    const forum = await getForum(slug, apiLocale);
    const title = getForumTitle(forum) || dictionary.forums.heroKicker;
    const description = truncateText(
        getForumDescription(forum) || dictionary.forums.heroText,
    );
    const image = absoluteMediaUrl(forum?.logoUrl);

    return createPageMetadata({
        title: `${title} | ${siteConfig.name}`,
        description,
        path: `/forums/${slug}`,
        images: image
            ? [
                  {
                      url: image,
                      width: 1200,
                      height: 630,
                      alt: title,
                  },
              ]
            : undefined,
        keywords: [
            title,
            "Туркмено-Китайский бизнес-форум",
            "CIIE",
            "Shanghai business forum",
            "TMT Consulting Group",
        ],
        locale,
    });
}

export default async function ForumPage({ params }: ForumPageProps) {
    const { slug } = await params;
    const locale = await getRequestLocale();
    const apiLocale = getApiLocale(locale);
    const dictionary = getDictionary(locale);
    const [forum, program, gallery] = await Promise.all([
        getForum(slug, apiLocale),
        getForumProgram(slug, apiLocale),
        slug === featuredForumSlug ? getForumGallery() : Promise.resolve([]),
    ]);

    if (!forum) {
        notFound();
    }

    const registrationOpen = !hasForumEnded(forum.endDate);

    return (
        <main className="bg-[#f7faf6] py-10 text-[#1d2c26] sm:py-12.5">
            <Container>
                <ForumHero
                    forum={forum}
                    locale={locale}
                    copy={dictionary.forums}
                    registrationOpen={registrationOpen}
                />
                {gallery.length > 0 && (
                    <ForumGallery photos={gallery} copy={dictionary.forums.gallery} />
                )}
                {registrationOpen && (
                    <ForumMeetingRequest forumSlug={forum.slug} copy={dictionary.forums.meetingRequest} />
                )}
                <ForumOverview forum={forum} copy={dictionary.forums} />
                {slug === featuredForumSlug && <ForumReport copy={dictionary.forums.report} />}
                <ForumSpeakers participants={forum.participants || []} copy={dictionary.forums} />
                <ForumOrganizers organizers={forum.organizers || []} copy={dictionary.forums} />
                <ForumSponsors levels={forum.sponsorLevels || []} copy={dictionary.forums} />
                <ForumDelegates participants={forum.participants || []} copy={dictionary.forums} />
                <ForumProgram days={program} locale={locale} copy={dictionary.forums} />
                {registrationOpen && (
                    <ForumSupport copy={dictionary.forums} locale={locale} forumSlug={forum.slug} />
                )}
            </Container>
        </main>
    );
}
