export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  coverImage?: string;
  readTime?: string;
  content?: string;
  tags?: string[];
}

export interface Job {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary?: string;
  posted: string;
  description?: string;
  content?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  result: string;
  excerpt: string;
  content?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  features: string[];
  size?: 'default' | 'large' | 'tall';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface Stat {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
