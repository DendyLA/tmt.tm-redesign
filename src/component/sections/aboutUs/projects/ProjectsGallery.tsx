"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import Image from "next/image";
import { mediaUrl } from "@/constants/constants";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import type { Project } from "@/services/projects/projects.types";
import { getProjectTitle } from "@/services/projects/projects.utils";

type ProjectsGalleryProps = {
    project: Project | null;
    locale: Locale;
};

export default function ProjectsGallery({ project, locale }: ProjectsGalleryProps) {
    if (!project) {
        return null;
    }

    const dictionary = getDictionary(locale);
    const projectTitle = getProjectTitle(project);

    return (
        <div className="min-h-137,5 mt-10">
            <Swiper
                effect="coverflow"
                grabCursor
                centeredSlides
                slidesPerView="auto"
                modules={[EffectCoverflow, Autoplay]}
                initialSlide={1}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 180,
                    modifier: 1,
                    slideShadows: false,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="py-10"
            >
                {project.gallery ? (
                    project.gallery.map((image) => (
                        <SwiperSlide key={image.id} className="w-175!">
                            <Image
                                src={`${mediaUrl}${image.url}`}
                                alt={
                                    image.altText ||
                                    image.title ||
                                    `${dictionary.common.projectPhotoAlt} ${projectTitle}`
                                }
                                width={700}
                                height={550}
                                className="h-137.5 w-175 rounded-2xl object-cover"
                            />
                        </SwiperSlide>
                    ))
                ) : (
                    <></>
                )}
            </Swiper>
        </div>
    );
}
