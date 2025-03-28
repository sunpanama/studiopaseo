
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-studio-white flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-24">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-6xl font-semibold text-studio-charcoal mb-4">404</h1>
          <p className="text-xl text-studio-charcoal/70 mb-8">
            Oops! The page you're looking for cannot be found.
          </p>
          <Button asChild className="bg-studio-green hover:bg-studio-green/90 text-white">
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
