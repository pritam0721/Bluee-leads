import type { Metadata } from "next";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Bluee Leads Marketing Limited Privacy Policy — how we collect, use and protect your personal data in accordance with UK GDPR.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      <section
        className="py-20 text-center text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #050d1f 0%, #041233 60%, #0a1f5c 100%)" }}
      >
        <div className="absolute inset-0 grid-dot-pattern opacity-20" />
        <div className="container-xl relative z-10">
          <FadeIn>
            <h1 className="display-xl text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-300 text-lg">Last updated: April 2026</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-xl max-w-3xl">
          <div className="prose prose-gray max-w-none space-y-8">
            {[
              {
                title: "1. Introduction",
                content: "Bluee Leads Marketing Limited ('we', 'us', 'our') is committed to protecting and respecting your privacy. This policy explains how we collect, use and protect personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. Our ICO registration number is [ICO-NUMBER]. Our registered address is 1 Business Park, Innovation Drive, London, EC1A 1BB."
              },
              {
                title: "2. Data We Collect",
                content: "We may collect: contact information (name, email, phone, company); usage data when you visit our website; prospect and business contact data used in outbound campaigns on behalf of clients; call recordings for quality assurance and compliance purposes; correspondence and communications."
              },
              {
                title: "3. Lawful Basis for Processing",
                content: "We process personal data under the following lawful bases: (a) Legitimate Interests — for B2B outbound telemarketing to business professionals; (b) Contract — where processing is necessary to fulfil our contractual obligations; (c) Consent — where you have explicitly opted in; (d) Legal Obligation — where required by law."
              },
              {
                title: "4. How We Use Your Data",
                content: "We use your data to: respond to enquiries and provide our services; conduct outbound telemarketing campaigns on behalf of clients; improve and optimise our website and services; comply with legal obligations; send marketing communications where you have consented or we have a legitimate interest (B2B only)."
              },
              {
                title: "5. Data Retention",
                content: "We retain personal data only for as long as necessary. Contact data used in campaigns is retained for up to 3 years unless there is a legitimate reason to retain it longer. Call recordings are retained for 6 months. Website visitor data is retained for 12 months."
              },
              {
                title: "6. Your Rights",
                content: "Under UK GDPR you have the right to: access your personal data; rectify inaccurate data; erasure ('right to be forgotten'); restrict processing; data portability; object to processing (including for marketing); not be subject to automated decision-making. To exercise any right, contact us at privacy@blueeleads.co.uk."
              },
              {
                title: "7. Data Security",
                content: "We implement ISO 27001-aligned security measures including encryption in transit and at rest, access controls, regular security audits, and staff training. In the event of a data breach we will notify the ICO within 72 hours as required."
              },
              {
                title: "8. Cookies",
                content: "Our website uses essential cookies required for functionality, and optional analytics cookies (Google Analytics) where you consent. You can manage your cookie preferences at any time via our cookie banner."
              },
              {
                title: "9. Third Parties",
                content: "We do not sell your personal data. We may share data with trusted processors (CRM providers, email platforms, hosting services) under appropriate Data Processing Agreements. All processors are UK/EEA-based or have adequate safeguards in place."
              },
              {
                title: "10. Contact Us",
                content: "For any privacy-related enquiries, contact our Data Protection Officer at privacy@blueeleads.co.uk or by post to: Data Protection Officer, Bluee Leads Marketing Limited, 1 Business Park, Innovation Drive, London, EC1A 1BB. You also have the right to lodge a complaint with the ICO at ico.org.uk."
              },
            ].map((section) => (
              <div key={section.title} className="pb-8 border-b border-gray-100 last:border-0">
                <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
