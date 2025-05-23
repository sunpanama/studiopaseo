
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img 
            src="/lovable-uploads/df48e500-6713-4b81-8473-768d73eafccb.png" 
            alt="Studio Paseo Logo" 
            className="h-12 mr-2"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-studio-charcoal hover:text-studio-green transition-colors">
            About
          </a>
          <a href="#services" className="text-studio-charcoal hover:text-studio-green transition-colors">
            Services
          </a>
          <a href="#portfolio" className="text-studio-charcoal hover:text-studio-green transition-colors">
            Portfolio
          </a>
          <a href="#clients" className="text-studio-charcoal hover:text-studio-green transition-colors">
            Clients
          </a>
          <Button 
            data-tally-open="3E6EMN" 
            data-tally-overlay="1" 
            data-tally-emoji-text="👋" 
            data-tally-emoji-animation="wave"
            className="bg-studio-green hover:bg-studio-green/90 text-white"
          >
            Contact Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-studio-charcoal" onClick={toggleMenu}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md p-4">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-studio-charcoal hover:text-studio-green transition-colors p-2"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-studio-charcoal hover:text-studio-green transition-colors p-2"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a 
              href="#portfolio" 
              className="text-studio-charcoal hover:text-studio-green transition-colors p-2"
              onClick={toggleMenu}
            >
              Portfolio
            </a>
            <a 
              href="#clients" 
              className="text-studio-charcoal hover:text-studio-green transition-colors p-2"
              onClick={toggleMenu}
            >
              Clients
            </a>
            <Button 
              data-tally-open="3E6EMN" 
              data-tally-overlay="1" 
              data-tally-emoji-text="👋" 
              data-tally-emoji-animation="wave"
              className="bg-studio-green hover:bg-studio-green/90 text-white w-full"
              onClick={() => {
                toggleMenu();
                // Add a small delay to ensure the menu closes before opening Tally
                setTimeout(() => {
                  // Try to manually trigger Tally via global object if available
                  if (window.Tally) {
                    window.Tally.openPopup('3E6EMN');
                  }
                }, 100);
              }}
            >
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
