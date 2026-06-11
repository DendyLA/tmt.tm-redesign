import Image from "next/image";
import Link from "next/link";
import cn from "@/lib/utils/cn";
import Container from "../../layout/Container/Container";

type AdvertisingProps = {
    imgSrc: string;
    className?: string;
};

export default function Advertising({ className, imgSrc }: AdvertisingProps) {
    return (
        <Container>
            <Link href={"#"} className="max-h-54">
                <Image
                    src={imgSrc}
                    width={1796}
                    height={216}
                    alt="advertising"
                    className={cn("h-full w-full object-cover", className)}
                />
            </Link>
        </Container>
    );
}
