import { type NextRequest } from "next/server";

type PublicFile = { media: { url: string } };
const keys = new Set(["programme", "catalogue"]);

async function serveFile(request: NextRequest, key: string, head = false) {
    if (!keys.has(key)) return new Response("Not found", { status: 404 });
    const apiBase = process.env.API_INTERNAL_URL ?? process.env.NEXT_PUBLIC_API_URL;
    if (!apiBase) return new Response("File service unavailable", { status: 503 });

    try {
        const metadataResponse = await fetch(`${apiBase.replace(/\/$/, "")}/public-files/${key}`, { cache: "no-store" });
        if (metadataResponse.status === 404) return new Response("Not found", { status: 404 });
        if (!metadataResponse.ok) return new Response("File service unavailable", { status: 502 });
        const file = (await metadataResponse.json()) as PublicFile;
        if (!file.media?.url?.startsWith("/uploads/media/")) return new Response("File service unavailable", { status: 502 });

        const upstream = await fetch(new URL(file.media.url, new URL(apiBase).origin), {
            method: head ? "HEAD" : "GET",
            headers: request.headers.has("range") ? { Range: request.headers.get("range")! } : undefined,
            cache: "no-store",
        });
        if (!upstream.ok && upstream.status !== 206) return new Response("File unavailable", { status: 502 });
        const headers = new Headers({
            "Content-Type": "application/pdf",
            "Content-Disposition": `inline; filename="${key}.pdf"`,
            "Cache-Control": "no-store",
            "X-Content-Type-Options": "nosniff",
        });
        for (const name of ["content-length", "content-range", "accept-ranges"]) {
            const value = upstream.headers.get(name);
            if (value) headers.set(name, value);
        }
        return new Response(head ? null : upstream.body, { status: upstream.status, headers });
    } catch {
        return new Response("File service unavailable", { status: 502 });
    }
}

export async function GET(request: NextRequest, context: { params: Promise<{ key: string }> }) {
    return serveFile(request, (await context.params).key);
}

export async function HEAD(request: NextRequest, context: { params: Promise<{ key: string }> }) {
    return serveFile(request, (await context.params).key, true);
}
