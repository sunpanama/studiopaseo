
import { Button } from "@/components/ui/button";

interface ProjectFiltersProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

const ProjectFilters = ({ currentFilter, onFilterChange }: ProjectFiltersProps) => {
  const filters = [
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "communities", label: "Communities" },
    { value: "interior", label: "Interior Design" }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mt-8">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          variant={currentFilter === filter.value ? "default" : "outline"}
          onClick={() => onFilterChange(filter.value)}
          className={currentFilter === filter.value ? "bg-studio-green text-white" : ""}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

export default ProjectFilters;
