import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost, Job, CaseStudy } from "@/types";

const contentRoot = path.join(process.cwd(), "src", "content");

function readDir(folder: string): string[] {
  const dir = path.join(contentRoot, folder);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
}

function parseFile<T>(folder: string, filename: string): T | null {
  const filePath = path.join(contentRoot, folder, filename);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const slug = filename.replace(/\.(md|mdx)$/, "");
  return { slug, ...data, content } as T;
}

// ===================== BLOGS =====================
export function getAllBlogs(): BlogPost[] {
  return readDir("blogs")
    .map((f) => parseFile<BlogPost>("blogs", f))
    .filter(Boolean) as BlogPost[];
}

export function getBlogBySlug(slug: string): BlogPost | null {
  return parseFile<BlogPost>("blogs", `${slug}.md`);
}

// ===================== JOBS =====================
export function getAllJobs(): Job[] {
  return readDir("jobs")
    .map((f) => parseFile<Job>("jobs", f))
    .filter(Boolean) as Job[];
}

export function getJobBySlug(slug: string): Job | null {
  return parseFile<Job>("jobs", `${slug}.md`);
}

// ===================== CASE STUDIES =====================
export function getAllCaseStudies(): CaseStudy[] {
  return readDir("case-studies")
    .map((f) => parseFile<CaseStudy>("case-studies", f))
    .filter(Boolean) as CaseStudy[];
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  return parseFile<CaseStudy>("case-studies", `${slug}.md`);
}
