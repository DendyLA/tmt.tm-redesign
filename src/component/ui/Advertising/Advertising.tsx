import Image from "next/image";
import Link from "next/link";
import cn from "@/lib/utils/cn";
import Container from "../../layout/Container/Container";
import { getAds } from "@/services/ads/ads.service";
import { mediaUrl } from "@/constants/constants";

type AdvertisingProps = {
    className?: string;
};

export default async function Advertising({ className }: AdvertisingProps) {
	const ads = await getAds({company: 'tmt-consulting-group', location: 'home.about', lang: 'RU'})
	console.log(ads)
	const adImg = ads[0]?.ad.translation?.imageUrl


    return (
        <Container>
            <a href={ads[0].ad.targetUrl ? ads[0].ad.targetUrl : '#' } target="_blank" className="h-54 w-full block ">
                <Image
                    src={`${mediaUrl}${adImg}`}
                    width={1796}
                    height={216} 
                    alt="advertising"
                    className={cn("h-full w-full object-contain", className)}
                />
            </a>
        </Container>
    );
}
