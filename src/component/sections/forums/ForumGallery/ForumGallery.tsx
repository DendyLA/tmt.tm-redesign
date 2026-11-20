"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { ChevronLeft, ChevronRight, Download, Images, X, ZoomIn, ZoomOut } from "lucide-react";

import { mediaUrl } from "@/constants/constants";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { ForumGalleryPhoto } from "@/services/forums/forum-gallery.service";

type ForumGalleryProps = {
    photos: ForumGalleryPhoto[];
    copy: Dictionary["forums"]["gallery"];
};

export default function ForumGallery({ photos, copy }: ForumGalleryProps) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const [zoomed, setZoomed] = useState(false);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const openButtonRef = useRef<HTMLButtonElement>(null);
    const thumbnailStripRef = useRef<HTMLDivElement>(null);
    const activeThumbnailRef = useRef<HTMLButtonElement>(null);
    const dragRef = useRef<{
        pointerId: number;
        startX: number;
        startScrollLeft: number;
        dragged: boolean;
    } | null>(null);
    const suppressClickRef = useRef(false);
    const photo = photos[index];

    useEffect(() => {
        if (!open) return;

        const previousOverflow = document.body.style.overflow;
        const trigger = openButtonRef.current;
        document.body.style.overflow = "hidden";
        closeButtonRef.current?.focus();

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setOpen(false);
            if (event.key === "ArrowLeft") {
                setIndex((current) => (current - 1 + photos.length) % photos.length);
                setZoomed(false);
            }
            if (event.key === "ArrowRight") {
                setIndex((current) => (current + 1) % photos.length);
                setZoomed(false);
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = previousOverflow;
            trigger?.focus();
        };
    }, [open, photos.length]);

    useEffect(() => {
        if (!open) return;

        const strip = thumbnailStripRef.current;
        const activeThumbnail = activeThumbnailRef.current;
        if (!strip || !activeThumbnail) return;

        const centerActiveThumbnail = () => {
            strip.scrollTo({
                left: activeThumbnail.offsetLeft - (strip.clientWidth - activeThumbnail.clientWidth) / 2,
                behavior: "smooth",
            });
        };

        centerActiveThumbnail();
        const resizeObserver = new ResizeObserver(centerActiveThumbnail);
        resizeObserver.observe(strip);

        return () => resizeObserver.disconnect();
    }, [open, index]);

    if (!photos.length) return null;

    const selectPhoto = (nextIndex: number) => {
        setIndex(nextIndex);
        setZoomed(false);
    };

    const finishDrag = (event: PointerEvent<HTMLDivElement>) => {
        const drag = dragRef.current;
        if (!drag || drag.pointerId !== event.pointerId) return;

        if (drag.dragged) {
            suppressClickRef.current = true;
            window.setTimeout(() => { suppressClickRef.current = false; }, 0);
            if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                event.currentTarget.releasePointerCapture(event.pointerId);
            }
        }
        dragRef.current = null;
    };

    return (
        <>
            <button
                ref={openButtonRef}
                type="button"
                onClick={() => setOpen(true)}
                className="mt-8 inline-flex items-center gap-2 rounded-[4px] bg-[#087541] px-6 py-3 font-main text-sm font-bold text-white transition-colors hover:bg-[#075a34]"
            >
                <Images size={19} aria-hidden="true" />
                {copy.open}
            </button>

            {open && photo && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={copy.title}
                    className="fixed inset-0 z-100 flex flex-col bg-[#101a16]/96 p-3 text-white sm:p-6"
                >
                    <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 py-2">
                        <div className="min-w-0">
                            <h2 className="truncate font-second text-base font-semibold sm:text-xl">{copy.title}</h2>
                            <p className="font-main text-xs text-white/65">{index + 1} / {photos.length}</p>
                        </div>
                        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
                            <a
                                href={`/forums/gallery-download?photo=${encodeURIComponent(photo.id)}`}
                                title={copy.downloadPhoto}
                                aria-label={copy.downloadPhoto}
                                className="flex size-10 items-center justify-center rounded-[4px] hover:bg-white/15"
                            >
                                <Download size={20} />
                            </a>
                            <button
                                type="button"
                                title={zoomed ? copy.zoomOut : copy.zoomIn}
                                aria-label={zoomed ? copy.zoomOut : copy.zoomIn}
                                onClick={() => setZoomed((value) => !value)}
                                className="flex size-10 items-center justify-center rounded-[4px] hover:bg-white/15"
                            >
                                {zoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
                            </button>
                            <button
                                ref={closeButtonRef}
                                type="button"
                                title={copy.close}
                                aria-label={copy.close}
                                onClick={() => setOpen(false)}
                                className="flex size-10 items-center justify-center rounded-[4px] hover:bg-white/15"
                            >
                                <X size={22} />
                            </button>
                        </div>
                    </div>

                    <div className="mx-auto flex min-h-0 w-full max-w-7xl flex-1 items-center gap-2 sm:gap-4">
                        <button
                            type="button"
                            title={copy.previous}
                            aria-label={copy.previous}
                            onClick={() => selectPhoto((index - 1 + photos.length) % photos.length)}
                            className="flex size-10 shrink-0 items-center justify-center rounded-[4px] bg-white/10 hover:bg-white/20"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <div className="flex h-full min-w-0 flex-1 items-center justify-center overflow-auto">
                            <img
                                key={photo.id}
                                src={`${mediaUrl}${photo.url}`}
                                alt={photo.altText || `${copy.photo} ${index + 1}`}
                                className={zoomed ? "max-w-none cursor-zoom-out object-contain" : "max-h-full max-w-full cursor-zoom-in object-contain"}
                                style={zoomed ? { width: "180%" } : undefined}
                                onClick={() => setZoomed((value) => !value)}
                            />
                        </div>
                        <button
                            type="button"
                            title={copy.next}
                            aria-label={copy.next}
                            onClick={() => selectPhoto((index + 1) % photos.length)}
                            className="flex size-10 shrink-0 items-center justify-center rounded-[4px] bg-white/10 hover:bg-white/20"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div className="mx-auto mt-3 flex w-full max-w-7xl min-w-0 flex-col items-end gap-3">
                        <div
                            ref={thumbnailStripRef}
                            aria-label={copy.title}
                            onPointerDown={(event) => {
                                if (event.pointerType !== "mouse" || event.button !== 0) return;
                                dragRef.current = {
                                    pointerId: event.pointerId,
                                    startX: event.clientX,
                                    startScrollLeft: event.currentTarget.scrollLeft,
                                    dragged: false,
                                };
                            }}
                            onPointerMove={(event) => {
                                const drag = dragRef.current;
                                if (!drag || drag.pointerId !== event.pointerId) return;

                                const distance = event.clientX - drag.startX;
                                if (!drag.dragged && Math.abs(distance) > 5) {
                                    drag.dragged = true;
                                    event.currentTarget.setPointerCapture(event.pointerId);
                                }
                                if (drag.dragged) {
                                    event.preventDefault();
                                    event.currentTarget.scrollLeft = drag.startScrollLeft - distance;
                                }
                            }}
                            onPointerUp={finishDrag}
                            onPointerCancel={finishDrag}
                            onClickCapture={(event) => {
                                if (!suppressClickRef.current) return;
                                event.preventDefault();
                                event.stopPropagation();
                                suppressClickRef.current = false;
                            }}
                            onWheel={(event) => {
                                if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
                                    event.currentTarget.scrollLeft += event.deltaY;
                                }
                            }}
                            className="relative flex w-full min-w-0 gap-2 overflow-x-auto overscroll-x-contain pb-2 touch-pan-x select-none cursor-grab active:cursor-grabbing"
                        >
                            {photos.map((item, itemIndex) => (
                                <button
                                    key={item.id}
                                    ref={itemIndex === index ? activeThumbnailRef : undefined}
                                    type="button"
                                    onClick={() => selectPhoto(itemIndex)}
                                    aria-label={`${copy.photo} ${itemIndex + 1}`}
                                    aria-current={itemIndex === index ? "true" : undefined}
                                    className={`h-15 w-20 shrink-0 overflow-hidden rounded-[4px] border-2 ${itemIndex === index ? "border-[#39b877]" : "border-transparent opacity-65 hover:opacity-100"}`}
                                >
                                    <img
                                        src={`${mediaUrl}${item.previewUrl || item.url}`}
                                        alt=""
                                        draggable={false}
                                        loading="lazy"
                                        className="size-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                        {/* The endpoint returns an attachment, not a navigable page. */}
                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                        <a
                            href="/forums/gallery-download?all=1"
                            className="inline-flex shrink-0 items-center gap-2 rounded-[4px] bg-[#087541] px-4 py-2.5 font-main text-xs font-bold text-white hover:bg-[#0a9251] sm:text-sm"
                        >
                            <Download size={17} aria-hidden="true" />
                            {copy.downloadAll}
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
