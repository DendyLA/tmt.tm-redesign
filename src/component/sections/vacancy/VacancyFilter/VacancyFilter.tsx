import cn from "@/lib/utils/cn";
import Filter, {
    type FilterItem,
} from "@/component/ui/Filter/Filter";
import type { Tag } from "@/services/tags/tags.types";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type VacancyFilterProps = {
    tags: Tag[] | null;
    tag: string;
    setTag: (value: string) => void;
    location: string;
    setLocation: (value: string) => void;
    dictionary: Dictionary;
    className?: string;
};

export default function VacancyFilter({
    className,
    tags,
    tag,
    setTag,
    location,
    setLocation,
    dictionary,
}: VacancyFilterProps) {
    const tagItems: FilterItem[] = [
        {
            label: dictionary.vacancy.allCategories,
            value: "all",
        },
        ...(tags?.map((item) => ({
            label: item.translation?.name ?? item.name,
            value: item.slug,
        })) ?? []),
    ];

    const locationItems: FilterItem[] = [
        {
            label: dictionary.vacancy.allRegions,
            value: "all",
        },
        ...dictionary.vacancy.regionsList.map((label, index) => ({
            label,
            value: ["ashgabat", "ahal", "mary", "lebap", "dashoguz", "balkan"][
                index
            ],
        })),
    ];

    return (
        <div className={cn("flex w-full flex-col items-stretch gap-4 sm:items-center sm:gap-5", className)}>
            <Filter
                items={tagItems}
                btn={tag}
                setBtn={setTag}
                text={dictionary.vacancy.categories}
            />

            <Filter
                items={locationItems}
                btn={location}
                setBtn={setLocation}
                text={dictionary.vacancy.regions}
            />
        </div>
    );
}
