
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
            <p className="text-lg font-semibold">Effective Date: March 28, 2025</p>
            
            <p>Welcome to Studio Paseo, a design service provided by HRT Consulting LLC ("we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of our website, landing page, and design services (collectively, the "Service"). By accessing or using the Service, including booking a discovery call or engaging our services, you ("you" or "User") agree to be bound by these Terms. If you do not agree, please do not use the Service.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">1. Company Information</h2>
            <p>
              The Service is operated by:<br /><br />
              Studio Paseo, a division of<br />
              HRT Consulting LLC<br />
              30 N Gould St. Ste 42637<br />
              Sheridan, WY 82801<br />
              Email: info@studiopaseo.com
            </p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">2. Service Description</h2>
            <p>Studio Paseo provides fee-for-service design solutions through a landing page where clients can book discovery calls to discuss and engage our services. Our offerings include the following, with fees determined based on project scope and complexity:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>🏠 Architectural Drafting & Floor Plans:</strong> Conceptual drafting and floor plan designs for residential structures (limited to 1-4 units, 3 stories or under).</li>
              <li><strong>📐 Permit-Ready Blueprints:</strong> Preparation of blueprints intended for permitting, submitted under the property owner's or a licensed contractor's name.</li>
              <li><strong>🛋️ Interior Design & 3D Rendering:</strong> Interior design concepts and 3D visualizations for residential and commercial spaces.</li>
              <li><strong>🌿 Landscape & Outdoor Living Design:</strong> Conceptual landscape designs and outdoor living layouts.</li>
              <li><strong>🏙️ Master Planning & Subdivision Layouts:</strong> Conceptual master plans and subdivision layouts for development projects.</li>
            </ul>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Disclosure</h3>
            <p>Studio Paseo and HRT Consulting LLC are not licensed architects, engineers, or similar professionals. We operate under a draftsman designation, providing conceptual design services only. All architectural work derived from our Deliverables (e.g., Permit-Ready Blueprints) must be submitted under the property owner's name or a licensed contractor's name for permitting purposes. Mechanical, electrical, and plumbing (MEP) designs are not included in our Service and must be reviewed and stamped by a licensed engineer in the state where the work will take place. Our residential services are limited to 1-4 unit structures, 3 stories or under. Users are responsible for ensuring compliance with local building codes and regulations.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">3. Eligibility</h2>
            <p>You must be at least 18 years old and capable of entering into a legally binding agreement to use the Service. By using the Service, you represent that you meet these requirements.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">4. Fees and Payment</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Fee-for-Service Model:</strong> Fees are quoted per project based on the scope of services requested (e.g., Architectural Drafting, Permit-Ready Blueprints). Quotes are provided during or following a discovery call and must be approved by you in writing or via email confirmation.</li>
              <li><strong>Payment:</strong> You agree to pay the quoted fee upon project initiation or as outlined in the payment schedule provided. Payments are processed via a secure payment method provided after booking, including applicable taxes, and are non-refundable except as stated in Section 5.</li>
              <li><strong>Late Payments:</strong> Unpaid fees may incur a late fee of 1.5% per month or the maximum allowed by law, whichever is lower. We may suspend services until payment is received. Notify us of payment issues at info@studiopaseo.com.</li>
            </ul>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">5. Cancellation and Refunds</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Cancellation:</strong> You may cancel a project prior to commencement by notifying us at info@studiopaseo.com. Once work begins, cancellation is subject to our discretion and may incur fees for work completed.</li>
              <li><strong>Refunds:</strong> Refunds are not provided for completed work or Deliverables delivered, except where required by law. If a project is canceled before commencement, a full refund will be issued within 14 days. For billing disputes, contact us within 14 days at info@studiopaseo.com.</li>
            </ul>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">6. User Responsibilities</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Use:</strong> You agree to use the Service only for lawful purposes and in accordance with these Terms.</li>
              <li><strong>Content:</strong> You are responsible for any content you provide (e.g., photos, specifications) during discovery calls or project engagement. You must have legal rights to such content and grant us a non-exclusive, royalty-free license to use it for providing the Service.</li>
              <li><strong>Compliance:</strong> You are solely responsible for obtaining necessary permits, licenses, or professional stamps (e.g., architect or engineer) for construction or implementation of our Deliverables.</li>
              <li><strong>Prohibited Actions:</strong> You may not: (a) misuse our landing page or booking system; (b) use the Service to infringe intellectual property; (c) impersonate others; or (d) engage in harmful activities (e.g., malware distribution).</li>
            </ul>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">7. Intellectual Property</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Ownership:</strong> All Deliverables remain the intellectual property of HRT Consulting LLC until fully paid for. Upon full payment, you receive a non-exclusive, non-transferable license to use the Deliverables for your personal or business purposes, subject to the limitations in Section 2.</li>
              <li><strong>Platform:</strong> The Service, including its website, landing page, design, and branding, is owned by HRT Consulting LLC and protected by copyright and other laws.</li>
              <li><strong>Feedback:</strong> Any feedback you provide may be used by us without compensation, and you grant us a perpetual, worldwide license to do so.</li>
            </ul>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">8. Third-Party Services</h2>
            <p>We may use third-party tools (e.g., payment processors, scheduling software, design tools) to deliver the Service. You agree to comply with their terms where applicable. We are not responsible for third-party performance or failures.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">9. Disclaimer of Warranties</h2>
            <p>The Service is provided "as is" and "as available." We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee that the Service will be uninterrupted, error-free, or meet your expectations. Deliverables are conceptual or permit-ready as specified, but implementation requires review by licensed professionals for structural, MEP, or permitting purposes.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">10. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Studio Paseo and HRT Consulting LLC, its affiliates, and agents shall not be liable for indirect, incidental, consequential, or punitive damages (e.g., lost profits, data loss) arising from the Service. Our total liability shall not exceed the amount you paid us for the specific project giving rise to the claim. This applies even if we were advised of the possibility of such damages.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">11. Indemnification</h2>
            <p>You agree to indemnify and hold harmless Studio Paseo and HRT Consulting LLC, its officers, employees, and affiliates from any claims, damages, or losses arising from your use of the Service, violation of these Terms, or infringement of third-party rights, including failure to secure proper permits or professional certifications. Contact us at info@studiopaseo.com for related inquiries.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">12. Termination</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>By Us:</strong> We may terminate or suspend your access to the Service at any time, with or without cause, with notice where feasible.</li>
              <li><strong>By You:</strong> You may terminate by canceling a project (Section 5) or ceasing use of the Service.</li>
              <li><strong>Effect:</strong> Upon termination, your right to use the Service ceases, but unpaid fees remain due, and Sections 7, 9-13 survive.</li>
            </ul>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">13. Dispute Resolution</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Governing Law:</strong> These Terms are governed by the laws of Wyoming, USA, without regard to conflict of law principles.</li>
              <li><strong>Arbitration:</strong> Any disputes arising from these Terms shall be resolved through binding arbitration in Sheridan, Wyoming, under the American Arbitration Association (AAA) rules, except for intellectual property claims, which may be filed in federal or state court. You waive any right to a jury trial or class action.</li>
            </ul>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">14. Changes to Terms</h2>
            <p>We may update these Terms periodically. Changes will be posted on the Service with an updated Effective Date. Continued use after changes constitutes acceptance. Significant changes will be notified via email to info@studiopaseo.com or landing page announcement 30 days in advance, where required by law.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">15. Privacy</h2>
            <p>Your use of the Service is also governed by our <a href="/privacy-policy" className="text-studio-beige-dark hover:underline">Privacy Policy</a>, which details how we collect, use, and protect your personal information.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">16. Force Majeure</h2>
            <p>We are not liable for delays or failures in performance due to events beyond our control (e.g., natural disasters, cyberattacks).</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">17. Entire Agreement</h2>
            <p>These Terms, along with the Privacy Policy and any project agreements, constitute the entire agreement between you and Studio Paseo/HRT Consulting LLC regarding the Service.</p>
            
            <h2 className="text-2xl font-medium mt-8 mb-4">18. Contact Us</h2>
            <p>
              For questions, discovery calls, or support, contact:<br /><br />
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

export default TermsAndConditions;
