import type { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";
import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Full-service BPO solutions: B2B telemarketing, lead generation, appointment setting, inbound call handling, market research and data cleansing.",
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section
        className="py-24 text-center text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #050d1f 0%, #041233 60%, #0a1f5c 100%)" }}
      >
        <div className="absolute inset-0 grid-dot-pattern opacity-20" />
        <div className="container-xl relative z-10">
          <FadeIn>
            <span className="section-eyebrow" style={{ background: "rgba(0,87,255,0.2)", color: "#93c5fd" }}>What We Offer</span>
            <h1 className="display-xl text-white mt-4 mb-6">End-to-End BPO Services</h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              From first contact to closed deal. Expert telemarketing, lead generation and customer support
              services tailored to your UK business objectives.
            </p>
          </FadeIn>
        </div>
      </section>

      <ServicesSection />

      <section className="section-py" style={{ background: "linear-gradient(135deg, #0057ff, #003cbf)" }}>
        <div className="container-xl text-center">
          <FadeIn>
            <h2 className="display-lg text-white mb-6">Ready to Launch Your Campaign?</h2>
            <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
              Contact us today for a no-obligation consultation and bespoke campaign proposal.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn-white">Get Free Quote <ArrowRight size={16} /></Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
