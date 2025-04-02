
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient pt-24 pb-16 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Design the Path Forward
            </h1>
            <p className="text-lg text-studio-charcoal/80 max-w-md">
              Studio Paseo brings California's organic modernism to architectural drafting, 
              interior design, landscaping, and master planning services for discerning clients.
            </p>
            <div className="space-y-3">
              <Button 
                onClick={() => window.open('https://tally.so/r/mY9z7z', '_blank')} 
                className="bg-studio-green hover:bg-studio-green/90 text-white px-8 py-6 text-lg w-full sm:w-auto"
              >
                Book a Discovery Call
              </Button>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  className="border-studio-charcoal/30 hover:bg-studio-beige/30 text-studio-charcoal flex gap-2 w-full sm:w-auto"
                >
                  <Mail size={18} />
                  <span>Subscribe to Newsletter</span>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="aspect-square rounded-2xl overflow-hidden card-shadow">
              <img 
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d" 
                alt="Modern California home with clean lines and natural materials" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating element */}
            <div className="absolute -bottom-8 -left-8 md:-left-16 bg-white p-4 md:p-6 rounded-xl card-shadow">
              <p className="text-sm md:text-base font-medium">Bringing dreams to reality</p>
              <p className="text-xs md:text-sm text-studio-charcoal/70">Southern California</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
