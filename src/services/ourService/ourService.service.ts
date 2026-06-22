import { apiClient } from "../api/api-client";
import { OurService } from "./ourService.types";

type GetOurServiceProps = {
    company: string;
    lang?: string;
};

export async function getOurService({
    company,
    lang,
}: GetOurServiceProps): Promise<OurService[]> {
    try {
        return await apiClient<OurService[]>(
            `/companies/${company}/services${lang ? `?locale=${lang.toUpperCase()}` : ""}`,
        );
    } catch {
        return [];
    }
}
