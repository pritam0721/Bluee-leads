import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { getAllBlogs } from "@/lib/content";
import { formatDate } from "@/lib/utils";

const fallbackPosts = [
  {
    slug: "how-data-quality-drives-successful-lead-generation",
    title: "How Data Quality Drives Successful Lead Generation",
    excerpt: "Clean, accurate data is the cornerstone of every successful outbound campaign. Discover why data quality should be your first investment.",
    date: "2026-03-10",
    author: "Bluee Leads Team",
    category: "Lead Generation",
    readTime: "5 min read",
  },
  {
    slug: "top-5-metrics-to-measure-inbound-customer-service-success",
    title: "Top 5 Metrics to Measure Inbound Customer Service Success",
    excerpt: "Are your inbound agents delivering? Track these five key performance indicators to optimise your customer service operation.",
    date: "2026-03-15",
    author: "Bluee Leads Team",
    category: "Customer Service",
    readTime: "4 min read",
  },
  {
    slug: "the-roi-of-outsourced-telemarketing-for-uk-smes",
    title: "The ROI of Outsourced Telemarketing for UK SMEs",
    excerpt: "A deep-dive into the financial case for BPO telemarketing partnerships — with real client data and payback period analysis.",
    date: "2026-03-20",
    author: "Bluee Leads Team",
    category: "BPO Strategy",
    readTime: "7 min read",
  },
];

const categoryColors: Record<string, string> = {
  "Lead Generation": "#0057ff",
  "Customer Service": "#059669",
  "BPO Strategy": "#7c3aed",
  "Market Research": "#d97706",
  "Telemarketing": "#db2777",
};

export default async function BlogPreview() {
  let posts = fallbackPosts;
  try {
    const fetched = getAllBlogs();
    if (fetched.length > 0) posts = fetched.slice(0, 3) as typeof fallbackPosts;
  } catch {
    // use fallback
  }

  return (
    <section id="blog-preview" className="pt-24 pb-12 bg-white">
      <div className="container-xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <span className="section-eyebrow">Latest Insights</span>
            <h2 className="display-md text-gray-900 mt-3">
              BPO &amp; Lead Gen <span className="text-gradient">Knowledge Hub</span>
            </h2>
          </div>
          <Link href="/blogs" className="btn-secondary mt-6 md:mt-0 flex-shrink-0">
            All Articles <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => {
            const color = categoryColors[post.category] ?? "#0057ff";
            const isMain = i === 0;
            return (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className={`group block rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white ${
                  isMain ? "md:col-span-1" : ""
                }`}
              >
                {/* Colored header */}
                <div
                  className="h-3"
                  style={{ background: `linear-gradient(90deg, ${color}, ${color}80)` }}
                />

                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: `${color}15`, color }}
                    >
                      <Tag size={10} />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                      <Clock size={10} />
                      {post.readTime ?? "5 min read"}
                    </span>
                  </div>

                  <h3 className="text-gray-900 font-bold text-lg leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>

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
        </div>
      </div>
    </section>
  );
}
