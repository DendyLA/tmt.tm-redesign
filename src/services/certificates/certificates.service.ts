import { apiClient } from "../api/api-client";
import type { Certificate } from "./certificates.types";

type GetCertificatesProps = {
    company: string;
};

export default async function getCertificates({
    company,
}: GetCertificatesProps): Promise<Certificate[] | null> {
    try {
        return await apiClient(`/companies/${company}/certificates`, {
            next: { revalidate: 300, tags: ["certificates"] },
        });
    } catch {
        return null;
    }
}
