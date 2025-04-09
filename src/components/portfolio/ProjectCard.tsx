
import { Project } from "@/data/portfolioProjects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl card-shadow">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-white text-xl font-medium">{project.title}</h3>
        <p className="text-white/80 text-sm">{project.location}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
