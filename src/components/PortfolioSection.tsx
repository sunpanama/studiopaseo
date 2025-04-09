import { useState } from "react";
import { projects } from "@/data/portfolioProjects";
import ProjectCard from "./portfolio/ProjectCard";
import ProjectFilters from "./portfolio/ProjectFilters";

const PortfolioSection = () => {
  const [filter, setFilter] = useState("all");
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="portfolio" className="bg-studio-white/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Portfolio Preview</h2>
          <p className="text-studio-charcoal/70 max-w-2xl mx-auto">
            Explore our recent projects spanning residential, commercial, community design, and interior spaces.
          </p>

          <ProjectFilters currentFilter={filter} onFilterChange={setFilter} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          {/* Empty div maintained from original component */}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
