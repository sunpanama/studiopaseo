
import React from 'react';
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Studio Paseo</title>
        <meta name="description" content="Privacy policy for Studio Paseo architectural design services." />
        <link rel="canonical" href="https://studiopaseo.com/privacy-policy" />
      </Helmet>
      <div className="min-h-screen bg-studio-white">
        <Header />
        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-medium mb-8 text-studio-charcoal">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            {/* Content will be added here */}
            <p>Content for Privacy Policy will be provided and added here.</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
