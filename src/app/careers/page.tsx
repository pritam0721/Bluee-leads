import type { Metadata } from "next";
import { getAllJobs } from "@/lib/content";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";
import { FadeIn, StaggerGroup } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Bluee Leads Marketing Limited team. We're hiring experienced telemarketers, sales agents, and BPO professionals. View current openings.",
};

const fallbackJobs = [
  { slug: "b2b-telemarketer", title: "B2B Telemarketer", department: "Sales", location: "London / Remote", type: "Full-time", salary: "£22,000 – £28,000 + commission", posted: "2026-04-01", description: "Join our high-performing B2B outbound team targeting UK decision-makers." },
  { slug: "lead-generation-specialist", title: "Lead Generation Specialist", department: "Sales", location: "London", type: "Full-time", salary: "£24,000 – £30,000 + OTE", posted: "2026-04-05", description: "Drive qualified pipeline for our UK clients across multiple verticals." },
  { slug: "account-manager", title: "Client Account Manager", department: "Client Success", location: "London / Hybrid", type: "Full-time", salary: "£28,000 – £35,000", posted: "2026-04-08", description: "Manage and grow relationships with our portfolio of UK business clients." },
  { slug: "market-research-analyst", title: "Market Research Analyst", department: "Research", location: "Remote", type: "Full-time", salary: "£22,000 – £26,000", posted: "2026-04-10", description: "Conduct CATI surveys and analyze data to deliver actionable market intelligence." },
];

const deptColors: Record<string, string> = { "Sales": "#0057ff", "Client Success": "#059669", "Research": "#7c3aed", "Operations": "#d97706" };

export default async function CareersPage() {
  let jobs = fallbackJobs;
  try {
    const fetched = getAllJobs();
    if (fetched.length > 0) jobs = fetched as typeof fallbackJobs;
  } catch {}

  return (
    <div className="pt-20">
      <section
        className="py-24 text-center text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #050d1f 0%, #041233 60%, #0a1f5c 100%)" }}
      >
        <div className="absolute inset-0 grid-dot-pattern opacity-20" />
        <div className="container-xl relative z-10">
          <FadeIn>
            <span className="section-eyebrow" style={{ background: "rgba(0,87,255,0.2)", color: "#93c5fd" }}>Join Our Team</span>
            <h1 className="display-xl text-white mt-4 mb-6">Careers at Bluee Leads</h1>
            <p className="text-gray-300 text-xl max-w-xl mx-auto">Build your sales career with one of the UK&apos;s fastest-growing BPO agencies. Great people, great commission, great culture.</p>
          </FadeIn>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 bg-white">
        <div className="container-xl">
          <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-6" stagger={0.1}>
            {[
              { emoji: "💰", title: "Competitive OTE", desc: "Base salary + uncapped commission" },
              { emoji: "🏠", title: "Flexible Working", desc: "Hybrid & remote options available" },
              { emoji: "📈", title: "Career Growth", desc: "Clear progression path and mentoring" },
              { emoji: "🎉", title: "Great Culture", desc: "Monthly incentives and team events" },
            ].map((p) => (
              <div key={p.title} className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-200">
                <div className="text-4xl mb-3">{p.emoji}</div>
                <div className="font-bold text-gray-900 mb-1">{p.title}</div>
                <div className="text-gray-500 text-sm">{p.desc}</div>
              </div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-py bg-[#f8faff]">
        <div className="container-xl">
          <div className="section-header">
            <span className="section-eyebrow">Open Roles</span>
            <h2 className="display-md text-gray-900">Current Openings</h2>
          </div>
          <StaggerGroup className="space-y-4 max-w-3xl mx-auto" stagger={0.12}>
            {jobs.map((job) => {
              const color = deptColors[job.department] ?? "#0057ff";
              return (
                <Link key={job.slug} href={`/careers/${job.slug}`} className="block bg-white rounded-2xl p-7 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: `${color}15`, color }}>{job.department}</span>
                        <span className="text-xs text-gray-400">{job.posted}</span>
                      </div>
                      <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">{job.title}</h2>
                      <p className="text-gray-500 text-sm">{job.description}</p>
                      <div className="flex flex-wrap gap-4 mt-3">
                        <span className="inline-flex items-center gap-1.5 text-xs text-gray-500"><MapPin size={12} />{job.location}</span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-gray-500"><Clock size={12} />{job.type}</span>
                        {job.salary && <span className="inline-flex items-center gap-1.5 text-xs text-gray-500"><Briefcase size={12} />{job.salary}</span>}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="btn-primary !py-2.5 !px-5 text-sm">
                        Apply Now <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </StaggerGroup>
        </div>
      </section>
    </div>
  );
}
