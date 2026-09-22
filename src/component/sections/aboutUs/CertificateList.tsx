import Image from "next/image";

import { mediaUrl } from "@/constants/constants";
import cn from "@/lib/utils/cn";
import type { Certificate } from "@/services/certificates/certificates.types";

type CertificateListProps = {
    certificates: Certificate[];
    className?: string;
};

function getMediaPath(certificate: Certificate) {
    if (typeof certificate.image === "string") {
        return certificate.image;
    }

    return certificate.image?.url ?? certificate.media?.url ?? null;
}

function getMediaUrl(path: string) {
    if (path.startsWith("http")) {
        return path;
    }

    return `${mediaUrl}${path}`;
}

export default function CertificateList({
    certificates,
    className,
}: CertificateListProps) {
    const activeCertificates = certificates
        .filter((certificate) => certificate.isActive !== false)
        .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));

    if (!activeCertificates.length) {
        return null;
    }

    return (
        <ul
            className={cn(
                "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
                className,
            )}
        >
            {activeCertificates.map((certificate) => {
                const imagePath = getMediaPath(certificate);
                const imageUrl = imagePath ? getMediaUrl(imagePath) : null;
                const card = (
                    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-primary/50 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                        {imageUrl && (
                            <div className="relative aspect-2/2 w-full bg-white">
                                <Image
                                    src={imageUrl}
                                    alt={
                                        certificate.image &&
                                        typeof certificate.image !== "string"
                                            ? certificate.image.altText ??
                                              certificate.title
                                            : certificate.title
                                    }
                                    fill
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    className="object-contain p-4"
                                />
                            </div>
                        )}

                        <div className="flex flex-1 flex-col px-5 py-4">
                            <h3 className="font-main text-[18px] leading-6 font-bold text-primary">
                                {certificate.title}
                            </h3>

                            {certificate.issuer && (
                                <p className="mt-2 font-main text-[13px] font-semibold text-dark">
                                    {certificate.issuer}
                                </p>
                            )}

                            {certificate.description && (
                                <p className="mt-3 font-main text-[13px] leading-5 font-medium text-dark">
                                    {certificate.description}
                                </p>
                            )}
                        </div>
                    </article>
                );

                return (
                    <li key={certificate.id}>
                        {certificate.fileUrl ? (
                            <a
                                href={getMediaUrl(certificate.fileUrl)}
                                target="_blank"
                                rel="noreferrer"
                                className="block h-full transition duration-300 hover:-translate-y-1"
                            >
                                {card}
                            </a>
                        ) : (
                            card
                        )}
                    </li>
                );
            })}
        </ul>
    );
}
