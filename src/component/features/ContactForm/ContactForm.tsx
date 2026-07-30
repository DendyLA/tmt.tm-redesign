"use client";

import Input from "@/component/ui/Input/Input";
import Textarea from "@/component/ui/Textarea/Textarea";
import Button from "@/component/ui/Button/Button";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default function ContactForm() {
    const locale = getLocaleFromPathname(usePathname());
    const dictionary = getDictionary(locale);

    return (
        <div className="border-primary max-h-[90vh] w-[calc(100vw-2rem)] max-w-153.75 overflow-y-auto rounded-lg border bg-white px-5 py-6 sm:max-h-120 sm:px-11 sm:py-12">
            <form action="">
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
                    <Input
                        placeholder={dictionary.contacts.namePlaceholder}
                        label={dictionary.contacts.name}
                        id="name"
                        required
                    />
                    <Input
                        placeholder={dictionary.contacts.companyPlaceholder}
                        label={dictionary.contacts.company}
                        id="company"
                    />
                </div>

                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:gap-10">
                    <Input
                        placeholder="example@gmail.com"
                        label={dictionary.contacts.email}
                        id="email"
                        required
                    />
                    <Input
                        placeholder="+993 __"
                        label={dictionary.contacts.phone}
                        id="phoneNumber"
                    />
                </div>

                <div className="mt-3.5">
                    <Textarea
                        label={dictionary.contacts.message}
                        required
                        placeholder={dictionary.contacts.messagePlaceholder}
                    />
                </div>
                <div className="mt-3.5 flex items-center justify-center">
                    <Button type="submit" className="h-7.25 text-[12px]">
                        {dictionary.contacts.submit}
                    </Button>
                </div>
            </form>
        </div>
    );
}
