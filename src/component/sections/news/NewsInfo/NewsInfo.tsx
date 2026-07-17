import Image from "next/image";
import cn from "@/lib/utils/cn";
import { getPostBySlug } from "@/services/posts/posts.service";
import { mediaUrl } from "@/constants/constants";
import RichText from "@/component/ui/RichText/RichText";

type NewsInfoProps = {
    slug: string;
    className?: string;
};

export default async function NewsInfo({ slug, className }: NewsInfoProps) {
    const post = await getPostBySlug({ slug, lang: "RU" });

    const postImage =
        post.coverMedia?.url || post.translation?.coverMedia?.url || null;
    const date = post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString("ru-RU")
        : "";
    console.log(JSON.stringify(post?.translation?.content));

    return (
        <section
            className={cn(
                "flex gap-11 overflow-hidden rounded-[10px]",
                className,
            )}
        >
            <div className="flex flex-col">
                <div className="flex max-h-157">
                    <Image
                        src={`${mediaUrl}${postImage}`}
                        width={1055}
                        height={628}
                        alt="photo"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="bg-white px-9.25 py-7">
                    <div className="font-main text-primary/50 flex justify-end">
                        {date}
                    </div>
                    <div className="font-main mt-7 text-[30px] font-bold text-justify">
                        {post?.translation?.title}
                    </div>
                    <div className="mt-7 text-justify">
                        <RichText content={post?.translation?.content || ""} />
                    </div>
                </div>
            </div>
        </section>
    );
}
