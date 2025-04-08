
import { useState } from "react";
import { Button } from "@/components/ui/button";
type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  location: string;
};
const projects: Project[] = [{
  id: 1,
  title: "Echo Park Residence",
  category: "residential",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  location: "Los Angeles, CA"
}, {
  id: 2,
  title: "Sunset Retail Complex",
  category: "commercial",
  image: "public/lovable-uploads/bf2462b9-2788-49f8-b99f-9c9c0a6c33cd.png",
  location: "Santa Monica, CA"
}, {
  id: 3,
  title: "Desert Oasis Retreat",
  category: "residential",
  image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
  location: "Palm Springs, CA"
}, {
  id: 4,
  title: "Oceanview Hotel",
  category: "communities",
  image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf",
  location: "San Diego, CA"
}, {
  id: 5,
  title: "Rooftop Terrace Design",
  category: "commercial",
  image: "public/lovable-uploads/a0524263-ad88-4660-bbfb-dd8e49d760e7.png",
  location: "Pasadena, CA"
}, {
  id: 6,
  title: "Coastal Modern Villa",
  category: "residential",
  image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
  location: "Malibu, CA"
}, {
  id: 7,
  title: "Outdoor Kitchen Pavilion",
  category: "commercial",
  image: "public/lovable-uploads/c84a5900-48ab-4d34-ae72-04ee1cd1ce37.png",
  location: "Newport Beach, CA"
}, {
  id: 8,
  title: "Sunset Lounge Area",
  category: "commercial",
  image: "public/lovable-uploads/d7a1c848-59c6-40a6-a6ad-d96d79bcc75b.png",
  location: "Laguna Beach, CA"
}];
const PortfolioSection = () => {
  const [filter, setFilter] = useState("all");
  const filteredProjects = filter === "all" ? projects : projects.filter(project => project.category === filter);
  return <section id="portfolio" className="bg-studio-white/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Portfolio Preview</h2>
          <p className="text-studio-charcoal/70 max-w-2xl mx-auto">
            Explore our recent projects spanning residential, commercial, and community design.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")} className={filter === "all" ? "bg-studio-green text-white" : ""}>
              All Projects
            </Button>
            <Button variant={filter === "residential" ? "default" : "outline"} onClick={() => setFilter("residential")} className={filter === "residential" ? "bg-studio-green text-white" : ""}>
              Residential
            </Button>
            <Button variant={filter === "commercial" ? "default" : "outline"} onClick={() => setFilter("commercial")} className={filter === "commercial" ? "bg-studio-green text-white" : ""}>
              Commercial
            </Button>
            <Button variant={filter === "communities" ? "default" : "outline"} onClick={() => setFilter("communities")} className={filter === "communities" ? "bg-studio-green text-white" : ""}>
              Communities
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => <div key={project.id} className="group relative overflow-hidden rounded-xl card-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-medium">{project.title}</h3>
                <p className="text-white/80 text-sm">{project.location}</p>
              </div>
            </div>)}
        </div>

        <div className="text-center mt-12">
          
        </div>
      </div>
    </section>;
};
export default PortfolioSection;
