import { apiClient } from "../api/api-client";

import type { Partner } from "./partners.types";

type getPartnerProps = {
    company: string;
};

export default async function getPartner({
    company,
}: getPartnerProps): Promise<Partner[] | null> {
    try {
        return await apiClient(`/companies/${company}/partners`, {
            next: { revalidate: 300, tags: ["partners"] },
        });
    } catch (error) {
        console.log(error);
        return null;
    }
}
