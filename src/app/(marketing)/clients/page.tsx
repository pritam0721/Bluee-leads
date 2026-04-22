import type { Metadata } from "next";
import { FadeIn, StaggerGroup } from "@/components/animations/FadeIn";
import Testimonials from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Our Clients",
  description: "Bluee Leads Marketing Limited serves 100+ UK businesses across energy, finance, technology, retail and more. View our client portfolio and case studies.",
};

const industries = [
  { name: "Energy & Utilities", icon: "⚡", clients: "40+ clients", color: "#0057ff" },
  { name: "Financial Services", icon: "🏦", clients: "25+ clients", color: "#7c3aed" },
  { name: "Technology", icon: "💻", clients: "30+ clients", color: "#0891b2" },
  { name: "Retail & E-commerce", icon: "🛍️", clients: "20+ clients", color: "#d97706" },
  { name: "Healthcare", icon: "🏥", clients: "15+ clients", color: "#059669" },
  { name: "Professional Services", icon: "📋", clients: "20+ clients", color: "#db2777" },
];

const logos = [
  "TechVision UK", "GreenPath Energy", "Apex Financial", "Retail Dynamics",
  "HealthFirst", "DataSphere", "ProServ Group", "ConnectBridge",
  "FutureLead", "SkyMetrics", "BrightSource", "PrimeConsult",
];

export default function ClientsPage() {
  return (
    <div className="pt-20">
      <section
        className="py-24 text-center text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #050d1f 0%, #041233 60%, #0a1f5c 100%)" }}
      >
        <div className="absolute inset-0 grid-dot-pattern opacity-20" />
        <div className="container-xl relative z-10">
          <FadeIn>
            <span className="section-eyebrow" style={{ background: "rgba(0,87,255,0.2)", color: "#93c5fd" }}>Our Clients</span>
            <h1 className="display-xl text-white mt-4 mb-6">Trusted by 100+ UK Businesses</h1>
            <p className="text-gray-300 text-xl max-w-xl mx-auto">
              From FTSE-listed corporates to fast-growing SMEs — Bluee Leads powers growth across every sector.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Industries */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="section-header">
            <span className="section-eyebrow">Industry Expertise</span>
            <h2 className="display-md text-gray-900">Sectors We Serve</h2>
          </div>
          <StaggerGroup className="grid grid-cols-2 md:grid-cols-3 gap-6" stagger={0.1}>
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="p-7 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{ind.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{ind.name}</h3>
                <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ background: `${ind.color}15`, color: ind.color }}>
                  {ind.clients}
                </span>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Logo Wall */}
      <section className="section-py bg-[#f8faff]">
        <div className="container-xl">
          <div className="section-header">
            <span className="section-eyebrow">Client Portfolio</span>
            <h2 className="display-md text-gray-900">A Selection of Our Clients</h2>
          </div>
          <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-4" stagger={0.06}>
            {logos.map((logo) => (
              <div
                key={logo}
                className="h-20 bg-white rounded-xl border border-gray-200 flex items-center justify-center hover:border-blue-300 hover:shadow-md transition-all duration-200"
              >
                <span className="text-gray-400 font-bold text-sm">{logo}</span>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
