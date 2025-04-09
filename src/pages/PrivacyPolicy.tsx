
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
            <p className="text-lg font-semibold">Effective Date: March 28, 2025</p>
            
            <p>Studio Paseo, a division of HRT Consulting LLC ("we," "us," or "our"), values your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our website, landing page, and design services (collectively, the "Service"). By accessing or using the Service, including booking a discovery call or engaging our services, you agree to this Privacy Policy. If you do not agree, please do not use the Service.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">1. Contact Information</h2>
            <p>
              Studio Paseo<br />
              HRT Consulting LLC<br />
              30 N Gould St. Ste 42637<br />
              Sheridan, WY 82801<br />
              Email: info@studiopaseo.com
            </p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">2. Information We Collect</h2>
            <p>We collect personal information you provide directly to us and data gathered automatically through your use of the Service.</p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Information You Provide</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Booking Discovery Calls:</strong> When you book a discovery call via our landing page, we may collect your name, email address, phone number, and project details (e.g., property type, location, design preferences).</li>
              <li><strong>Project Engagement:</strong> During service delivery, you may provide additional information such as photos, specifications, billing details (e.g., payment method), and correspondence (e.g., emails, call notes).</li>
              <li><strong>Communications:</strong> Information you share when contacting us at info@studiopaseo.com.</li>
            </ul>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Information Collected Automatically</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Website Usage:</strong> We may collect data via cookies or similar technologies, including your IP address, browser type, device information, pages visited, and time spent on our landing page.</li>
              <li><strong>Analytics:</strong> We use third-party tools (e.g., Google Analytics) to track usage patterns, which may aggregate non-identifiable data.</li>
            </ul>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Provide the Service:</strong> Schedule discovery calls, deliver design services (e.g., drafting, rendering), and communicate project updates.</li>
              <li><strong>Process Payments:</strong> Handle billing and payment transactions for fee-for-service projects.</li>
              <li><strong>Improve the Service:</strong> Analyze usage trends to enhance our landing page and offerings.</li>
              <li><strong>Communicate:</strong> Respond to inquiries, send project quotes, and provide service-related notifications via info@studiopaseo.com.</li>
              <li><strong>Legal Compliance:</strong> Fulfill legal obligations or protect our rights (e.g., in disputes).</li>
            </ul>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">4. How We Share Your Information</h2>
            <p>We do not sell your personal information. We may share it as follows:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Service Providers:</strong> With third-party vendors (e.g., payment processors like Stripe, scheduling tools like Calendly, design software providers) who assist in delivering the Service, bound by confidentiality agreements.</li>
              <li><strong>Legal Requirements:</strong> If required by law, court order, or to protect our rights, safety, or property.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with notice where feasible.</li>
            </ul>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">5. Your Choices</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Opt-Out:</strong> You may opt out of marketing emails by following unsubscribe instructions or contacting info@studiopaseo.com. Service-related emails (e.g., project updates) cannot be opted out of while engaged in a project.</li>
              <li><strong>Cookies:</strong> You can disable cookies via your browser settings, though this may limit functionality (e.g., booking forms).</li>
              <li><strong>Access and Correction:</strong> Request access to or correction of your personal information by emailing info@studiopaseo.com. We will respond within 30 days, subject to verification.</li>
            </ul>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">6. California Privacy Rights (CCPA Compliance)</h2>
            <p>If you are a California resident, you may have additional rights under the CCPA:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Right to Know:</strong> Request details about the personal information we collect, use, or disclose about you.</li>
              <li><strong>Right to Delete:</strong> Request deletion of your personal information, subject to exceptions (e.g., completing a project).</li>
              <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising these rights.</li>
            </ul>
            <p>To exercise these rights, email info@studiopaseo.com with "CCPA Request" in the subject line. We will verify your identity before processing.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">7. Data Security</h2>
            <p>We implement reasonable measures (e.g., encryption, secure payment processing) to protect your personal information from unauthorized access, loss, or misuse. However, no online system is 100% secure, and we cannot guarantee absolute security.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">8. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Complete your project and deliver the Service.</li>
              <li>Comply with legal obligations (e.g., tax records for 7 years).</li>
              <li>Resolve disputes or enforce agreements.</li>
            </ul>
            <p>After this period, we will delete or anonymize your data, unless otherwise required by law.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">9. Third-Party Links</h2>
            <p>Our landing page may contain links to third-party sites (e.g., payment processors). We are not responsible for their privacy practices. Review their policies before providing information.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">10. Children's Privacy</h2>
            <p>The Service is not intended for individuals under 18. We do not knowingly collect personal information from children. If we learn such data has been collected, we will delete it promptly.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">11. International Users</h2>
            <p>The Service is hosted in the United States and governed by U.S. law. If you access it from outside the U.S., your information will be transferred to and processed in the U.S., where data protection laws may differ. By using the Service, you consent to this transfer.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">12. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy periodically. Changes will be posted on the Service with an updated Effective Date. Significant changes will be notified via email to info@studiopaseo.com or a landing page announcement. Continued use after changes constitutes acceptance.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">13. Contact Us</h2>
            <p>
              For privacy questions or to exercise your rights, contact:<br /><br />
              Studio Paseo<br />
              HRT Consulting LLC<br />
              30 N Gould St. Ste 42637<br />
              Sheridan, WY 82801<br />
              Email: info@studiopaseo.com
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
