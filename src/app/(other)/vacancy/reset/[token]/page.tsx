import { redirect } from "next/navigation";

import { withLocalePath } from "@/lib/i18n/config";
import { getRequestLocale } from "@/lib/i18n/server";

type PageProps = {
    params: Promise<{
        token: string;
    }>;
};

export default async function VacancyResetToken({ params }: PageProps) {
    const locale = await getRequestLocale();
    const { token } = await params;

    redirect(
        withLocalePath(
            `/vacancy/reset?${new URLSearchParams({ token }).toString()}`,
            locale,
        ),
    );
}
