"use client";

import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { StaggerGroup } from "@/components/animations/FadeIn";

const testimonials = [
  {
    id: "t1",
    name: "James Harrington",
    role: "Sales Director",
    company: "TechVision UK Ltd",
    content:
      "Bluee Leads transformed our pipeline. Within 3 months we saw a 340% increase in qualified appointments. The team is professional, responsive, and truly understands our target market.",
    rating: 5,
    metric: "340% more appointments",
  },
  {
    id: "t2",
    name: "Sarah Mitchell",
    role: "Managing Director",
    company: "GreenPath Energy",
    content:
      "We were sceptical about outsourcing our sales calls but Bluee Leads proved us wrong. Their agents speak better on the phone than our own staff did. ROI was evident within 6 weeks.",
    rating: 5,
    metric: "6-week ROI",
  },
  {
    id: "t3",
    name: "Raj Patel",
    role: "CEO",
    company: "Apex Financial Solutions",
    content:
      "The cost savings alone justified the decision — we saved nearly £140,000 in the first year vs running in-house. But it's the quality of leads that impresses most.",
    rating: 5,
    metric: "£140k saved year 1",
  },
  {
    id: "t4",
    name: "Claire Thompson",
    role: "Head of Marketing",
    company: "Retail Dynamics PLC",
    content:
      "Excellent account management, transparent reporting, and a team that genuinely cares about our results. Wouldn't hesitate to recommend Bluee Leads to any UK business.",
    rating: 5,
    metric: "98% satisfaction score",
  },
];

const caseStudies = [
  {
    client: "National Energy Supplier",
    industry: "Energy & Utilities",
    campaign: "12-month B2B outbound",
    result: "+2,400 qualified leads",
    saving: "£230k saved vs in-house",
    color: "#0057ff",
  },
  {
    client: "SaaS Scale-up",
    industry: "Technology",
    campaign: "Appointment setting",
    result: "4x meeting volume",
    saving: "£85k annual saving",
    color: "#7c3aed",
  },
  {
    client: "Finance Broker Network",
    industry: "Financial Services",
    campaign: "Inbound & outbound hybrid",
    result: "62% conversion uplift",
    saving: "£180k saved year 1",
    color: "#059669",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-py"
      style={{ background: "linear-gradient(180deg, #f8faff 0%, white 100%)" }}
    >
      <div className="container-xl">
        <div className="section-header">
          <span className="section-eyebrow">Social Proof</span>
          <h2 className="display-lg text-gray-900 max-w-2xl mx-auto">
            Trusted by <span className="text-gradient">100+ UK Businesses</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16" stagger={0.12}>
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)" , padding:"1.25rem 1.25rem"} }
            >
              <Quote size={36} className="text-blue-100 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 text-sm italic">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Metric chip */}
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-5">
                 {t.metric}
              </div>

              <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-800 flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </StaggerGroup>

        {/* Case Studies */}
        <div className="section-header"
         style={{marginTop:"3rem",}}
        >
          <span className="section-eyebrow">Case Studies</span>
          <h2 className="display-md text-gray-900">
            Real Results. <span className="text-gradient">Real Numbers.</span>
          </h2>
        </div>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.15}>
          {caseStudies.map((cs, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl text-white relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${cs.color} 0%, ${cs.color}cc 100%)`,padding:"1rem 1rem" }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 bg-white -translate-y-1/2 translate-x-1/2" />
              <div className="text-white/60 text-xs uppercase tracking-wider mb-1">{cs.industry}</div>
              <div className="font-bold text-xl mb-1">{cs.client}</div>
              <div className="text-white/70 text-sm mb-6">{cs.campaign}</div>
              <div className="border-t border-white/20 pt-4 space-y-2">
                <div className="text-2xl font-black">{cs.result}</div>
                <div className="text-white/70 text-sm">{cs.saving}</div>
              </div>
            </div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
