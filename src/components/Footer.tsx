
import { Instagram, Pinterest, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-studio-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-medium mb-4">Studio Paseo</h3>
            <p className="text-white/70 mb-4">
              Modern design with a California soul. We bring architectural vision to life through thoughtful, sustainable design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-studio-beige-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-studio-beige-light transition-colors">
                <Pinterest size={20} />
              </a>
              <a href="#" className="text-white hover:text-studio-beige-light transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Architectural Drafting</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Interior Design</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Landscape Design</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Master Planning</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Portfolio</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Residential</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Commercial</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Hospitality</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">View All Projects</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="pt-0.5"><Mail size={16} /></div>
                <span className="text-white/70">hello@studiopaseo.com</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="pt-0.5"><Phone size={16} /></div>
                <span className="text-white/70">(310) 555-1234</span>
              </li>
              <li className="text-white/70 mt-2">
                123 Design Avenue<br />
                Santa Monica, CA 90401
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Studio Paseo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
