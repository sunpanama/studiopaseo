
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    // Simulate subscription process
    setTimeout(() => {
      setIsSubscribed(true);
      setEmail("");
      toast({
        title: "Subscribed successfully!",
        description: "Thank you for joining our newsletter.",
        variant: "default",
      });
    }, 500);
  };

  return (
    <section className="bg-studio-beige/20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 card-shadow">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Join Our Newsletter</h2>
            <p className="text-studio-charcoal/70">
              Subscribe to receive "Blueprint Basics" and "Investor-Friendly Design Tips"
              delivered straight to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                className="bg-studio-green hover:bg-studio-green/90 text-white"
              >
                Subscribe
              </Button>
            </div>
            
            <div className="text-sm text-studio-charcoal/70 flex items-center gap-2">
              <Check size={16} className="text-studio-green" />
              <span>We respect your privacy and will never share your information.</span>
            </div>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="bg-studio-beige/20 p-6 rounded-xl">
              <h3 className="font-medium text-lg mb-2">Blueprint Basics</h3>
              <p className="text-studio-charcoal/70 text-sm">
                Monthly insights on architectural trends, space planning tips, and design inspiration.
              </p>
            </div>
            <div className="bg-studio-beige/20 p-6 rounded-xl">
              <h3 className="font-medium text-lg mb-2">Investor-Friendly Design</h3>
              <p className="text-studio-charcoal/70 text-sm">
                Quarterly guides on value-adding design strategies to maximize property ROI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
