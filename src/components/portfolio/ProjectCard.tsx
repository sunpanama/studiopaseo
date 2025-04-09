
import { Project } from "@/data/portfolioProjects";
import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden rounded-xl border-0 shadow-lg transition-all hover:shadow-xl">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-white text-xl font-medium">{project.title}</h3>
        <p className="text-white/80 text-sm mt-1">{project.location}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
