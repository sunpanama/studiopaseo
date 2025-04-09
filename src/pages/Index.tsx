
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Studio Paseo - Modern Architectural Design in California</title>
        <meta name="description" content="Studio Paseo brings California's organic modernism to architectural drafting, interior design, landscaping, and master planning services." />
        <link rel="canonical" href="https://studiopaseo.com/" />
      </Helmet>
      <div className="min-h-screen bg-studio-white">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <PortfolioSection />
          <AboutSection />
          <ClientsSection />
          <NewsletterSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
