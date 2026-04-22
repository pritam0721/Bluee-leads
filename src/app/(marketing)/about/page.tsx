import type { Metadata } from "next";
import { FadeIn, StaggerGroup } from "@/components/animations/FadeIn";
import { CheckCircle, Users, Target, Award, Globe } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bluee Leads Marketing Limited — our mission, team, values and why we're the UK's trusted BPO and lead generation partner.",
};

const values = [
  { icon: Target, title: "Results-Driven", desc: "Every campaign is built around measurable KPIs and commercial outcomes, not vanity metrics." },
  { icon: Users, title: "Expert Team", desc: "Average 8+ years experience per agent. UK-focused, culturally aligned, professionally trained." },
  { icon: Award, title: "Quality Assured", desc: "ISO 27001 certified operations with call monitoring, coaching and continuous improvement." },
  { icon: Globe, title: "Compliance First", desc: "UK GDPR, OFCOM, FCA and ICO compliant across all campaigns. Zero compromise on data protection." },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section
        className="py-24 text-center text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #050d1f 0%, #041233 60%, #0a1f5c 100%)" }}
      >
        <div className="absolute inset-0 grid-dot-pattern opacity-20" />
        <div className="container-xl relative z-10">
          <FadeIn>
            <span className="section-eyebrow" style={{ background: "rgba(0,87,255,0.2)", color: "#93c5fd" }}>
              About Us
            </span>
            <h1 className="display-xl text-white mt-4 mb-6">
              Accelerating UK Business Growth
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
              Bluee Leads Marketing Limited is a premier BPO and lead generation agency
              delivering expert outbound and inbound calling services with measurable results.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <span className="section-eyebrow">Our Mission</span>
              <h2 className="display-md text-gray-900 mt-3 mb-6">
                Helping UK Businesses <span className="text-gradient">Grow Faster</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                We believe that every UK business deserves access to world-class sales and customer service
                capabilities — without the prohibitive costs of building in-house teams.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                Our mission is to be the growth engine behind the UK&apos;s most ambitious businesses, delivering
                qualified leads, confirmed appointments and exceptional customer experiences at a fraction
                of the cost of doing it alone.
              </p>
              <ul className="space-y-3">
                {[
                  "Founded to solve the UK in-house telemarketing cost problem",
                  "Expert multilingual agents across all B2B and B2C verticals",
                  "Technology-led operations with real-time client dashboards",
                  "Flexible, scalable contracts with no long-term lock-in",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{p}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Bluee Leads team at work"
                  className="w-full h-80 object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-py bg-[#f8faff]">
        <div className="container-xl">
          <div className="section-header">
            <span className="section-eyebrow">Our Values</span>
            <h2 className="display-lg text-gray-900">What We Stand For</h2>
          </div>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.12}>
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="card-elevated p-8 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-5">
                    <Icon size={24} className="text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py" style={{ background: "linear-gradient(135deg, #0057ff, #003cbf)" }}>
        <div className="container-xl text-center">
          <FadeIn>
            <h2 className="display-lg text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
              Talk to our team today about how we can design a bespoke BPO solution for your business.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn-white">Get Free Quote</Link>
              <Link href="/services" className="btn-secondary" style={{ borderColor: "white", color: "white" }}>
                Our Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
