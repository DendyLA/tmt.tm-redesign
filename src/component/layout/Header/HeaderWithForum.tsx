import { getApiLocale } from "@/lib/i18n/config";
import { getRequestLocale } from "@/lib/i18n/server";
import { featuredForumSlug } from "@/services/forums/forums.constants";
import { getForum } from "@/services/forums/forums.service";
import { getForumTitle } from "@/services/forums/forums.utils";
import Header from "./Header";

export default async function HeaderWithForum() {
    const locale = await getRequestLocale();
    const forum = await getForum(featuredForumSlug, getApiLocale(locale));

    return <Header forumName={getForumTitle(forum)} forumLogo={forum?.logoUrl || ""} />;
}
