import type { Metadata } from "next";
import { getAllBlogs } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { FadeIn, StaggerGroup } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description: "Expert insight on B2B telemarketing, lead generation, BPO best practices and UK sales strategy from the Bluee Leads team.",
};

const fallback = [
  { slug: "how-data-quality-drives-successful-lead-generation", title: "How Data Quality Drives Successful Lead Generation", excerpt: "Clean, accurate data is the cornerstone of every successful outbound campaign.", date: "2026-03-10", author: "Bluee Leads Team", category: "Lead Generation", readTime: "5 min read" },
  { slug: "top-5-metrics-to-measure-inbound-customer-service-success", title: "Top 5 Metrics to Measure Inbound Customer Service Success", excerpt: "Are your inbound agents delivering? Track these five key KPIs.", date: "2026-03-15", author: "Bluee Leads Team", category: "Customer Service", readTime: "4 min read" },
  { slug: "the-roi-of-outsourced-telemarketing-for-uk-smes", title: "The ROI of Outsourced Telemarketing for UK SMEs", excerpt: "A deep-dive into the financial case for BPO telemarketing partnerships.", date: "2026-03-20", author: "Bluee Leads Team", category: "BPO Strategy", readTime: "7 min read" },
  { slug: "gdpr-b2b-cold-calling-what-you-need-to-know", title: "GDPR & B2B Cold Calling: What You Need to Know", excerpt: "Demystifying GDPR for outbound B2B telemarketing — what's allowed, what's not.", date: "2026-03-25", author: "Bluee Leads Team", category: "Compliance", readTime: "6 min read" },
  { slug: "appointment-setting-best-practices-2026", title: "Appointment Setting Best Practices for 2026", excerpt: "Proven techniques our top-performing agents use to secure high-quality meetings.", date: "2026-04-01", author: "Bluee Leads Team", category: "Telemarketing", readTime: "5 min read" },
  { slug: "building-a-b2b-lead-generation-machine", title: "Building a B2B Lead Generation Machine", excerpt: "How to design a scalable, consistent lead generation operation using BPO partnerships.", date: "2026-04-08", author: "Bluee Leads Team", category: "Lead Generation", readTime: "8 min read" },
];

const catColors: Record<string, string> = {
  "Lead Generation": "#0057ff",
  "Customer Service": "#059669",
  "BPO Strategy": "#7c3aed",
  "Compliance": "#d97706",
  "Telemarketing": "#db2777",
  "Market Research": "#0891b2",
};

export default async function BlogsPage() {
  let posts = fallback;
  try {
    const fetched = getAllBlogs();
    if (fetched.length > 0) posts = fetched as typeof fallback;
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
            <span className="section-eyebrow" style={{ background: "rgba(0,87,255,0.2)", color: "#93c5fd" }}>Knowledge Hub</span>
            <h1 className="display-xl text-white mt-4 mb-6">BPO &amp; Lead Gen Insights</h1>
            <p className="text-gray-300 text-xl max-w-xl mx-auto">Expert articles on telemarketing, lead generation and UK BPO best practices.</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-xl">
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.1}>
            {posts.map((post) => {
              const color = catColors[post.category] ?? "#0057ff";
              return (
                <Link key={post.slug} href={`/blogs/${post.slug}`} className="group block rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                  <div className="h-2" style={{ background: `linear-gradient(90deg, ${color}, ${color}80)` }} />
                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: `${color}15`, color }}>
                        <Tag size={10} />{post.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-gray-400"><Clock size={10} />{post.readTime ?? "5 min"}</span>
                    </div>
                    <h2 className="text-gray-900 font-bold text-lg leading-snug mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <div className="text-gray-800 text-xs font-semibold">{post.author}</div>
                        <div className="text-gray-400 text-xs">{formatDate(post.date)}</div>
                      </div>
                      <ArrowRight size={16} className="text-blue-500 group-hover:translate-x-1 transition-transform" />
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
