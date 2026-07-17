"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import VacancySelector from "../VacancySelector/VacancySelector";
import VacancyList from "../VacancyList/VacancyList";
import TenderList from "../../tender/TendersList/TendersList";
import VacancyFilter from "../VacancyFilter/VacancyFilter";
import Container from "@/component/layout/Container/Container";

import type { Vacancy } from "@/services/vacancy/vacancy.types";
import type { Tenders } from "@/services/tenders/tenders.types";
import type { Tag } from "@/services/tags/tags.types";

import cn from "@/lib/utils/cn";

type Tab = "Вакансии" | "Тендеры";

type VacancyMainProps = {
    vacancies: Vacancy | null;
    tenders: Tenders | null;
    tags: Tag[] | null;
    activeTagSlug?: string;
    activeLocation?: string;
    className?: string;
};

export default function VacancyMain({
    vacancies,
    tenders,
    tags,
    activeTagSlug,
    activeLocation,
    className,
}: VacancyMainProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [btn, setBtn] = useState<Tab>("Вакансии");
    const [tag, setTag] = useState(activeTagSlug ?? "all");
    const [location, setLocation] = useState(activeLocation ?? "all");

    const updateFilters = ({
        newTag = tag,
        newLocation = location,
    }: {
        newTag?: string;
        newLocation?: string;
    }) => {
        const params = new URLSearchParams(searchParams.toString());

        if (newTag === "all") {
            params.delete("tag");
        } else {
            params.set("tag", newTag);
        }

        if (newLocation === "all") {
            params.delete("location");
        } else {
            params.set("location", newLocation);
        }

        params.delete("page");

        const query = params.toString();

        router.push(query ? `${pathname}?${query}` : pathname);
    };

    const handleTagChange = (value: string) => {
        setTag(value);

        updateFilters({
            newTag: value,
        });
    };

    const handleLocationChange = (value: string) => {
        setLocation(value);

        updateFilters({
            newLocation: value,
        });
    };

    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center py-8 sm:py-14",
                btn === "Вакансии"
                    ? "bg-second-gradient-bottom"
                    : "bg-main-gradient-white-bottom",
                className,
            )}
        >
            <Container className="flex flex-col items-center">
                <VacancySelector
                    btn={btn}
                    setBtn={setBtn}
                    className="mt-8 sm:mt-15"
                />

                {btn === "Вакансии" && (
                    <VacancyFilter
                        tags={tags}
                        tag={tag}
                        setTag={handleTagChange}
                        location={location}
                        setLocation={handleLocationChange}
                        className="mt-8 sm:mt-17.5"
                    />
                )}

                {btn === "Вакансии" ? (
                    <VacancyList
                        className="mt-8 sm:mt-10"
                        vacancies={vacancies}
                    />
                ) : (
                    <TenderList
                        tenders={tenders}
                        className="mt-8 sm:mt-10"
                    />
                )}
            </Container>
        </div>
    );
}
