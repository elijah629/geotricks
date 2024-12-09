import * as React from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { backgroundColors, iconColors, icons, roadLines, borderColors, shapes, countries } from "@/data/road-signs"

interface FilterCategory {
  name: string;
  displayName: string;
  options: readonly string[];
}

const categories: FilterCategory[] = [
  { name: "backgroundColor", displayName: "Background Color", options: backgroundColors },
  { name: "borderColor", displayName: "Border Color", options: borderColors },
  { name: "shape", displayName: "Shape", options: shapes },
  { name: "country", displayName: "Country", options: countries },
  { name: "icon", displayName: "Icon", options: icons },
  { name: "iconColor", displayName: "Icon Color", options: iconColors },
  { name: "roadLines", displayName: "# Road Lines", options: roadLines }
];

export function RoadSignFilter({
  onFilterChange
}: {
  onFilterChange: (filters: Record<string, string[]>) => void
}) {
  const [filters, setFilters] = React.useState<Record<string, string[]>>(
    Object.fromEntries(categories.map(cat => [cat.name, []]))
  );

  const handleFilterChange = (category: string, value: string) => {
    setFilters(prevFilters => {
      const updatedFilters = { ...prevFilters };
      if (updatedFilters[category].includes(value)) {
        updatedFilters[category] = updatedFilters[category].filter(item => item !== value);
      } else {
        updatedFilters[category] = [...updatedFilters[category], value];
      }
      return updatedFilters;
    });
  };

  React.useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  return (
    <div className="max-w-52 s w-full p-4 border-r">
      <Accordion type="multiple" className="w-full">
        {categories.map((category) => (
          <AccordionItem key={category.name} value={category.name}>
            <AccordionTrigger>{category.displayName}</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {category.options.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox
                      id={`${category.name}-${option}`}
                      checked={filters[category.name].includes(option)}
                      onCheckedChange={() => handleFilterChange(category.name, option)}
                    />
                    <Label htmlFor={`${category.name}-${option}`}>{(option)}</Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

