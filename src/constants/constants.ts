import { getDictionary } from "@/lib/i18n/dictionaries";
import { defaultLocale, type Locale, withLocalePath } from "@/lib/i18n/config";

export const mediaUrl =
    process.env.NEXT_PUBLIC_ORIGIN_URL ||
    process.env.NEXT_PUBLIC_MEDIA_URL ||
    "";

export function getMenuItems(locale: Locale = defaultLocale) {
    const dictionary = getDictionary(locale);

    return [
        { name: dictionary.menu.home, link: withLocalePath("/", locale) },
        {
            name: dictionary.menu.about,
            link: withLocalePath("/about-us", locale),
        },
        {
            name: dictionary.menu.services,
            link: withLocalePath("/services", locale),
        },
        {
            name: dictionary.menu.tourism,
            link: withLocalePath("/tourism", locale),
        },
        { name: dictionary.menu.blog, link: withLocalePath("/blog", locale) },
        { name: dictionary.menu.news, link: withLocalePath("/news", locale) },
        {
            name: dictionary.menu.vacancy,
            link: withLocalePath("/vacancy", locale),
        },
        {
            name: dictionary.menu.contacts,
            link: withLocalePath("/contacts", locale),
        },
    ];
}

export const menuItems = getMenuItems();
