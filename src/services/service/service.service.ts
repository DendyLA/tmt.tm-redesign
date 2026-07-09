import { apiClient } from "../api/api-client";
import type { ServiceList } from "./service.types";

type getServicesProps = {
    company: string;
    lang: string;
};

export default async function getServices({
    company,
    lang,
}: getServicesProps): Promise<ServiceList | null> {
    try {
        return await apiClient(
            `/companies/${company}/service-categories?locale=${lang}`,
            {
                cache: "no-store",
            },
        );
    } catch (error) {
        console.log(error);
        return null;
    }
}
