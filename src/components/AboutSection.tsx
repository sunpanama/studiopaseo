
import { Star, Clock, Home } from "lucide-react";

type BenefitCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  return (
    <div className="flex gap-5 p-6 bg-white rounded-xl card-shadow">
      <div className="text-studio-green">{icon}</div>
      <div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-studio-charcoal/70">{description}</p>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const benefits = [
    {
      icon: <Star size={32} />,
      title: "California Soul",
      description: "We infuse our designs with the warmth, light, and organic modernism of the Southern California aesthetic."
    },
    {
      icon: <Clock size={32} />,
      title: "On-Demand Delivery",
      description: "We understand timelines are critical. Our streamlined process ensures your project stays on schedule."
    },
    {
      icon: <Home size={32} />,
      title: "Real Estate-Smart",
      description: "Our designs not only look beautiful but are created with property value and market appeal in mind."
    }
  ];

  return (
    <section id="about" className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden card-shadow">
              <img 
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea" 
                alt="Studio Paseo team working on a design project" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-studio-beige p-6 rounded-xl card-shadow">
              <p className="text-base font-medium">15+ Years</p>
              <p className="text-sm text-studio-charcoal/70">Design Experience</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Why Studio Paseo?</h2>
            <p className="text-studio-charcoal/70">
              We combine technical expertise with California's distinctive design sensibility to
              create spaces that are both beautiful and functional.
            </p>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
