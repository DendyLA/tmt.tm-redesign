import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { mediaUrl } from "@/constants/constants";

type RichTextProps = {
    content: string;
};

export default function RichText({ content }: RichTextProps) {
	if (!content) {
		return null;
	}

    const parsedContent = content.replace(/\n/g, "<br />");

    return (
        <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
                img: ({ src, alt, ...props }) => {
                    const imageSrc =
                        typeof src === "string" && src.startsWith("/")
                            ? `${mediaUrl}${src}`
                            : String(src || "");

                    return (
                        <img
                            src={imageSrc}
                            alt={alt || ""}
                            className="my-8 rounded-lg"
                            {...props}
                        />
                    );
                },
            }}
        >
            {parsedContent}
        </ReactMarkdown>
    );
}