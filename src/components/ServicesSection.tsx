
import { 
  Home, 
  PencilRuler, 
  Palette, 
  Flower2, 
  Map
} from "lucide-react";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 card-shadow hover:shadow-lg transition-shadow duration-300">
      <div className="text-studio-green mb-4">{icon}</div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-studio-charcoal/70 text-sm">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <PencilRuler size={32} />,
      title: "Architectural Drafting & Blueprints",
      description: "Precision technical drawings that bring your vision to life with detailed specifications for builders."
    },
    {
      icon: <Palette size={32} />,
      title: "Interior Design & 3D Rendering",
      description: "Immersive visualizations that capture the feel of your space before construction begins."
    },
    {
      icon: <Flower2 size={32} />,
      title: "Landscape & Outdoor Living",
      description: "Harmonious integration of architecture with California's natural environment."
    },
    {
      icon: <Map size={32} />,
      title: "Master Planning",
      description: "Comprehensive property development strategies for builders and developers."
    }
  ];

  return (
    <section id="services" className="section-container">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Services</h2>
        <p className="text-studio-charcoal/70 max-w-2xl mx-auto">
          From concept to completion, we offer comprehensive design services
          tailored to the unique needs of each project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
