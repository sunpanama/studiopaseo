
import { Users, HardHat, Building2, Banknote } from "lucide-react";

type ClientCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ClientCard = ({ icon, title, description }: ClientCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300 card-shadow">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-studio-beige-light rounded-full text-studio-green mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-studio-charcoal/70">{description}</p>
    </div>
  );
};

const ClientsSection = () => {
  const clients = [
    {
      icon: <Users size={32} />,
      title: "Homeowners",
      description: "Custom residential design for new builds, major renovations, and landscape transformations."
    },
    {
      icon: <HardHat size={32} />,
      title: "Contractors",
      description: "Detailed construction documents and specifications for seamless build execution."
    },
    {
      icon: <Building2 size={32} />,
      title: "Developers",
      description: "Comprehensive master planning and design services for multi-unit and commercial projects."
    },
    {
      icon: <Banknote size={32} />,
      title: "Investors",
      description: "Value-adding design solutions for property flipping and investment real estate."
    }
  ];

  return (
    <section id="clients" className="bg-studio-white/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Client Types We Serve</h2>
          <p className="text-studio-charcoal/70 max-w-2xl mx-auto">
            We tailor our approach to meet the unique needs of a diverse clientele.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <ClientCard
              key={index}
              icon={client.icon}
              title={client.title}
              description={client.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
