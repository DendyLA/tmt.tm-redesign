import cn from "@/lib/utils/cn";
import Filter, {
    type FilterItem,
} from "@/component/ui/Filter/Filter";
import type { Tag } from "@/services/tags/tags.types";

type VacancyFilterProps = {
    tags: Tag[] | null;
    tag: string;
    setTag: (value: string) => void;
    location: string;
    setLocation: (value: string) => void;
    className?: string;
};

export default function VacancyFilter({
    className,
    tags,
    tag,
    setTag,
    location,
    setLocation,
}: VacancyFilterProps) {
    const tagItems: FilterItem[] = [
        {
            label: "Все категории",
            value: "all",
        },
        ...(tags?.map((item) => ({
            label: item.translation?.name ?? item.name,
            value: item.slug,
        })) ?? []),
    ];

    const locationItems: FilterItem[] = [
        {
            label: "Все регионы",
            value: "all",
        },
        {
            label: "Ашхабад",
            value: "ashgabat",
        },
        {
            label: "Ахал",
            value: "ahal",
        },
        {
            label: "Мары",
            value: "mary",
        },
        {
            label: "Лебап",
            value: "lebap",
        },
        {
            label: "Дашогуз",
            value: "dashoguz",
        },
        {
            label: "Балкан",
            value: "balkan",
        },
    ];

    return (
        <div className={cn("flex w-full flex-col items-stretch gap-4 sm:items-center sm:gap-5", className)}>
            <Filter
                items={tagItems}
                btn={tag}
                setBtn={setTag}
                text="Категории:"
            />

            <Filter
                items={locationItems}
                btn={location}
                setBtn={setLocation}
                text="Регионы:"
            />
        </div>
    );
}
