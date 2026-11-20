import { Zip, ZipPassThrough } from "fflate";

import { mediaBaseUrl } from "@/lib/seo/site";
import { getForumGallery, type ForumGalleryPhoto } from "@/services/forums/forum-gallery.service";

function photoUrl(photo: ForumGalleryPhoto) {
    return new URL(photo.url, `${mediaBaseUrl}/`).toString();
}

function photoName(index: number, photo: ForumGalleryPhoto) {
    const extension = photo.url.match(/\.(jpe?g|png|webp)$/i)?.[1]?.toLowerCase() || "jpg";
    return `forum-photo-${String(index + 1).padStart(3, "0")}.${extension}`;
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const photos = await getForumGallery();
    const photoId = searchParams.get("photo");

    if (photoId) {
        const index = photos.findIndex((photo) => photo.id === photoId);
        if (index === -1) return new Response(null, { status: 404 });

        const upstream = await fetch(photoUrl(photos[index]), { cache: "no-store" });
        if (!upstream.ok || !upstream.body) return new Response(null, { status: 502 });

        return new Response(upstream.body, {
            headers: {
                "Content-Type": upstream.headers.get("Content-Type") || "image/jpeg",
                "Content-Disposition": `attachment; filename="${photoName(index, photos[index])}"`,
                "Cache-Control": "private, no-store",
            },
        });
    }

    if (searchParams.get("all") !== "1") return new Response(null, { status: 400 });
    if (!photos.length) return new Response(null, { status: 404 });

    const stream = new ReadableStream<Uint8Array>({
        start(controller) {
            const zip = new Zip((error, chunk, final) => {
                if (error) {
                    controller.error(error);
                } else if (final) {
                    controller.enqueue(chunk);
                    controller.close();
                } else {
                    controller.enqueue(chunk);
                }
            });

            void (async () => {
                try {
                    for (const [index, photo] of photos.entries()) {
                        const response = await fetch(photoUrl(photo), { cache: "no-store" });
                        if (!response.ok || !response.body) throw new Error("Gallery image unavailable");

                        const file = new ZipPassThrough(photoName(index, photo));
                        zip.add(file);
                        const reader = response.body.getReader();
                        while (true) {
                            const { done, value } = await reader.read();
                            if (done) break;
                            file.push(value);
                        }
                        file.push(new Uint8Array(0), true);
                    }
                    zip.end();
                } catch (error) {
                    zip.terminate();
                    controller.error(error);
                }
            })();
        },
    });

    return new Response(stream, {
        headers: {
            "Content-Type": "application/zip",
            "Content-Disposition": 'attachment; filename="turkmen-chinese-forum-gallery.zip"',
            "Cache-Control": "private, no-store",
        },
    });
}
