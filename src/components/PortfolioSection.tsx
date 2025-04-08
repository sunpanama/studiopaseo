
import { useState } from "react";
import { Button } from "@/components/ui/button";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  location: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Echo Park Residence",
    category: "residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    location: "Los Angeles, CA"
  },
  {
    id: 2,
    title: "Luxury Bar Design",
    category: "commercial",
    image: "public/lovable-uploads/8ac6a75b-ff30-480a-bf19-c2b3faac7cd3.png",
    location: "Santa Monica, CA"
  },
  {
    id: 3,
    title: "Desert Oasis Retreat",
    category: "residential",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
    location: "Palm Springs, CA"
  },
  {
    id: 5,
    title: "Contemporary Lounge Area",
    category: "commercial",
    image: "public/lovable-uploads/9170b559-8308-4e59-90cd-c18dfd90fbea.png",
    location: "Los Angeles, CA"
  },
  {
    id: 6,
    title: "Coastal Modern Villa",
    category: "residential",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    location: "Malibu, CA"
  },
  {
    id: 7,
    title: "Rooftop Green Space",
    category: "commercial",
    image: "public/lovable-uploads/92a40306-fe6b-4f88-922c-31b10f37cac1.png",
    location: "Irvine, CA"
  },
  {
    id: 8,
    title: "Rooftop Infinity Pool",
    category: "commercial",
    image: "public/lovable-uploads/45b4390f-1438-4b58-8615-5cd53615d5a1.png",
    location: "Los Angeles, CA"
  },
  {
    id: 9,
    title: "Modern Rooftop Terrace",
    category: "commercial",
    image: "public/lovable-uploads/c113b480-db61-4380-a525-d4d1b612c891.png",
    location: "San Francisco, CA"
  },
  {
    id: 10,
    title: "Outdoor Kitchen Pavilion",
    category: "commercial",
    image: "public/lovable-uploads/64f9ae26-c3b8-4407-85a4-cb9d3e44b950.png",
    location: "Napa Valley, CA"
  },
  {
    id: 11,
    title: "Luxury Outdoor Lounge",
    category: "commercial",
    image: "public/lovable-uploads/01fa1d94-b713-4122-9561-b3845656b922.png",
    location: "Beverly Hills, CA"
  },
  {
    id: 12,
    title: "Resort Amenity Space",
    category: "commercial",
    image: "public/lovable-uploads/abc2d391-1006-41a1-b116-0f9df355ec12.png",
    location: "Newport Beach, CA"
  },
  {
    id: 13,
    title: "Mojave Sun Villas",
    category: "communities",
    image: "public/lovable-uploads/6ed61ba7-c3b8-45bc-89fb-5f1b16784849.png",
    location: "Palm Desert, CA"
  },
  {
    id: 14,
    title: "Urban Development Site Plan",
    category: "communities",
    image: "public/lovable-uploads/6e0a8150-296e-4c35-8e5b-e0e17478f922.png",
    location: "Bakersfield, CA"
  },
  {
    id: 15,
    title: "Modern Apartment Layout",
    category: "communities",
    image: "public/lovable-uploads/35d46926-9bdb-4854-bfdf-2e4f5d91e9ef.png",
    location: "Sacramento, CA"
  },
  {
    id: 16,
    title: "Private Garden Terrace",
    category: "communities",
    image: "public/lovable-uploads/ed2298f7-866b-452f-9999-1a7744c4064d.png",
    location: "Santa Barbara, CA"
  },
  {
    id: 17,
    title: "Luxury Floor Plan",
    category: "communities",
    image: "public/lovable-uploads/6537df50-e98b-492e-949b-c2d4da59dcb1.png",
    location: "San Jose, CA"
  },
  {
    id: 18,
    title: "High-Rise Residential Tower",
    category: "communities",
    image: "public/lovable-uploads/71b0b75e-d7c9-4827-829b-45d6d62172f5.png",
    location: "San Francisco, CA"
  },
  {
    id: 19,
    title: "Community Master Plan",
    category: "communities",
    image: "public/lovable-uploads/87b7fca3-7d9a-4eb8-835a-8513b46ae7a6.png",
    location: "Oakland, CA"
  },
  {
    id: 20,
    title: "Urban Residential Complex",
    category: "communities",
    image: "public/lovable-uploads/ee1959f2-4fc3-4c31-b474-032123849904.png",
    location: "Los Angeles, CA"
  },
  // New Interior Design Projects
  {
    id: 21,
    title: "Contemporary Bathroom Design",
    category: "interior",
    image: "public/lovable-uploads/4cad6549-2c99-4748-b73d-7b72b3459870.png",
    location: "Beverly Hills, CA"
  },
  {
    id: 22,
    title: "Urban Loft Living Space",
    category: "interior",
    image: "public/lovable-uploads/e3164ac5-c194-4109-97b5-e769fe2d1d63.png",
    location: "Downtown Los Angeles, CA"
  },
  {
    id: 23,
    title: "Designer Walk-in Closet",
    category: "interior",
    image: "public/lovable-uploads/3f94ec37-e38d-4f8a-a226-3471aeb3bc45.png",
    location: "Manhattan Beach, CA"
  },
  {
    id: 24,
    title: "Open Concept Living & Dining",
    category: "interior",
    image: "public/lovable-uploads/57b7dc04-636c-4dd0-b4f3-17b590cf1bd3.png",
    location: "West Hollywood, CA"
  },
  {
    id: 25,
    title: "Minimalist Kitchen Space",
    category: "interior",
    image: "public/lovable-uploads/6d0310d6-8607-4e79-8287-c5aeea889670.png",
    location: "Venice, CA"
  },
  {
    id: 26,
    title: "Modern Studio Apartment",
    category: "interior",
    image: "public/lovable-uploads/82494b90-a67d-41ff-b310-c3b4bc1cc3da.png",
    location: "San Diego, CA"
  },
  {
    id: 27,
    title: "Cozy Master Bedroom",
    category: "interior",
    image: "public/lovable-uploads/4116772b-c057-4607-8d2c-fd6eb63ddd2a.png",
    location: "Pasadena, CA"
  },
  {
    id: 28,
    title: "Modern Studio Kitchen",
    category: "interior",
    image: "public/lovable-uploads/a30e4890-5fa8-4db1-8add-94bc3c24a4aa.png",
    location: "Santa Monica, CA"
  }
];

const PortfolioSection = () => {
  const [filter, setFilter] = useState("all");
  const filteredProjects = filter === "all" ? projects : projects.filter(project => project.category === filter);
  
  return <section id="portfolio" className="bg-studio-white/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Portfolio Preview</h2>
          <p className="text-studio-charcoal/70 max-w-2xl mx-auto">
            Explore our recent projects spanning residential, commercial, community design, and interior spaces.
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
            <Button variant={filter === "interior" ? "default" : "outline"} onClick={() => setFilter("interior")} className={filter === "interior" ? "bg-studio-green text-white" : ""}>
              Interior Design
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

