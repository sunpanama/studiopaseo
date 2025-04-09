
import React from 'react';
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions - Studio Paseo</title>
        <meta name="description" content="Terms and conditions for Studio Paseo architectural design services." />
        <link rel="canonical" href="https://studiopaseo.com/terms-and-conditions" />
      </Helmet>
      <div className="min-h-screen bg-studio-white">
        <Header />
        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-medium mb-8 text-studio-charcoal">Terms and Conditions</h1>
          <div className="prose prose-lg max-w-none">
            {/* Content will be added here */}
            <p>Content for Terms and Conditions will be provided and added here.</p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TermsAndConditions;
