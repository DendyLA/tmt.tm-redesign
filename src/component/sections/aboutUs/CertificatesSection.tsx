import SectionTop from "@/component/ui/SectionTop/SectionTop";
import getCertificates from "@/services/certificates/certificates.service";
import CertificateList from "./CertificateList";

type CertificatesSectionProps = {
    titleTop: string;
    titleBottom: string;
    className?: string;
};

export default async function CertificatesSection({
    titleTop,
    titleBottom,
    className,
}: CertificatesSectionProps) {
    const certificates = await getCertificates({
        company: "tmt-consulting-group",
    });

    const activeCertificates = (certificates ?? []).filter(
        (certificate) => certificate.isActive !== false,
    );

    if (!activeCertificates.length) {
        return null;
    }

    return (
        <section className={className}>
            <SectionTop
                titleTop={titleTop}
                titleBottom={titleBottom}
                className="mt-10 sm:mt-46"
            />
            <div className="mt-8 sm:mt-10">
                <CertificateList certificates={activeCertificates} />
            </div>
        </section>
    );
}
