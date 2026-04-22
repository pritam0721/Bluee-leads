import type { Metadata } from "next";
import { getBlogBySlug, getAllBlogs } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, Calendar, User } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const blogs = getAllBlogs();
    return blogs.map((b) => ({ slug: b.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getBlogBySlug(slug);
    if (!post) return {};
    return { title: post.title, description: post.excerpt };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  let post = null;
  try { post = getBlogBySlug(slug); } catch {}

  if (!post) {
    // Show placeholder for static fallback posts
    const placeholders: Record<string, { title: string; excerpt: string; date: string; author: string; category: string; readTime: string; content: string }> = {
      "how-data-quality-drives-successful-lead-generation": {
        title: "How Data Quality Drives Successful Lead Generation",
        excerpt: "Clean, accurate data is the cornerstone of every successful outbound campaign.",
        date: "2026-03-10",
        author: "Bluee Leads Team",
        category: "Lead Generation",
        readTime: "5 min read",
        content: `## Why Data Quality Matters\n\nIn outbound B2B telemarketing, your data is your most valuable asset. Before a single call is made, the quality of your contact list determines whether your campaign will succeed or fail.\n\n## Key Data Quality Factors\n\n- **Accuracy**: Is the contact information current and correct?\n- **Completeness**: Do you have all the fields needed to personalise outreach?\n- **Relevance**: Does the contact match your ideal customer profile?\n- **Compliance**: Has the data been sourced and maintained in line with UK GDPR?\n\n## Our Approach at Bluee Leads\n\nEvery campaign we run starts with a data audit. We cleanse, enrich and validate your existing data before a single call is made — typically improving connection rates by 30-50%.\n\n## Conclusion\n\nInvesting in data quality before your campaign launch is the single highest-ROI action you can take. Contact us today to discuss how data cleansing and enrichment can transform your campaign performance.`,
      },
    };
    const fallbackPost = placeholders[slug];
    if (!fallbackPost) notFound();
    return renderPost({ slug, ...fallbackPost });
  }

  return renderPost(post);
}

function renderPost(post: { title: string; excerpt?: string; date: string; author: string; category: string; readTime?: string; content?: string; slug: string }) {
  const catColors: Record<string, string> = { "Lead Generation": "#0057ff", "Customer Service": "#059669", "BPO Strategy": "#7c3aed", "Compliance": "#d97706", "Telemarketing": "#db2777" };
  const color = catColors[post.category] ?? "#0057ff";

  return (
    <div className="pt-20">
      <div className="h-2" style={{ background: `linear-gradient(90deg, ${color}, ${color}80)` }} />
      <div className="container-xl py-12 max-w-3xl">
        <Link href="/blogs" className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium mb-8 hover:gap-3 transition-all">
          <ArrowLeft size={16} /> Back to Insights
        </Link>

        <div className="flex items-center gap-3 mb-5">
          <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: `${color}15`, color }}>
            <Tag size={10} />{post.category}
          </span>
          {post.readTime && <span className="inline-flex items-center gap-1 text-xs text-gray-400"><Clock size={10} />{post.readTime}</span>}
        </div>

        <h1 className="display-md text-gray-900 mb-4">{post.title}</h1>
        {post.excerpt && <p className="text-lg text-gray-500 mb-6 leading-relaxed">{post.excerpt}</p>}

        <div className="flex items-center gap-6 py-5 border-y border-gray-100 mb-10">
          <div className="flex items-center gap-2 text-sm text-gray-500"><User size={14} className="text-blue-500" />{post.author}</div>
          <div className="flex items-center gap-2 text-sm text-gray-500"><Calendar size={14} className="text-blue-500" />{formatDate(post.date)}</div>
        </div>

        {post.content && (
          <div className="prose prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-blue-600 prose-li:text-gray-600">
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) return <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{line.slice(3)}</h2>;
              if (line.startsWith("### ")) return <h3 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-3">{line.slice(4)}</h3>;
              if (line.startsWith("- **")) {
                const [bold, rest] = line.slice(2).split("**: ");
                return <li key={i} className="text-gray-600 mb-2"><strong>{bold.slice(2)}</strong>{rest ? `: ${rest}` : ""}</li>;
              }
              if (line.startsWith("- ")) return <li key={i} className="text-gray-600 mb-2">{line.slice(2)}</li>;
              if (line.trim() === "") return <div key={i} className="mb-3" />;
              return <p key={i} className="text-gray-600 leading-relaxed mb-4">{line}</p>;
            })}
          </div>
        )}

        <div className="mt-12 p-8 rounded-2xl" style={{ background: "linear-gradient(135deg, #0057ff, #003cbf)" }}>
          <h3 className="text-white font-bold text-xl mb-2">Ready to Improve Your Campaign Performance?</h3>
          <p className="text-blue-200 text-sm mb-5">Talk to our team about how we can design a data-driven BPO solution for your business.</p>
          <Link href="/contact" className="btn-white !py-3">Get Free Consultation</Link>
        </div>
      </div>
    </div>
  );
}
