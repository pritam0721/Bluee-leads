import type { Metadata } from 'next';
import { getJobBySlug, getAllJobs } from '@/lib/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, MapPin, Clock, Briefcase, Send } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    return getAllJobs().map((j) => ({ slug: j.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const job = getJobBySlug(slug);
    if (!job) return {};
    return { title: `${job.title} – Careers`, description: job.description };
  } catch {
    return {};
  }
}

const fallbackJobs: Record<
  string,
  {
    title: string;
    department: string;
    location: string;
    type: string;
    salary: string;
    posted: string;
    description: string;
  }
> = {
  'Voice-Processing-Associate': {
    title: 'Voice-Processing-Associate',
    department: 'Agent',
    location: 'Remote',
    type: 'Full-time',
    salary: '₹9,000 – ₹20,000 + commission',
    posted: '2026-04-10',
    description:
      'Conduct CATI surveys and analyse data to deliver actionable market intelligence.',
  },
};

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params;
  let job = null;
  try {
    job = getJobBySlug(slug);
  } catch {}
  if (!job) {
    const fallback = fallbackJobs[slug];
    if (!fallback) notFound();
    job = { slug, ...fallback };
  }

  return (
    <div className='pt-20'>
      <div className='container-xl py-12 max-w-3xl'>
        <Link
          href='/careers'
          className='inline-flex items-center gap-2 text-blue-600 text-sm font-medium mb-8 hover:gap-3 transition-all'
        >
          <ArrowLeft size={16} /> Back to Careers
        </Link>

        <div className='bg-white rounded-3xl border border-gray-100 shadow-sm p-10 mb-8'>
          <h1 className='display-md text-gray-900 mb-4'>{job.title}</h1>
          <div className='flex flex-wrap gap-4 mb-6'>
            <span className='inline-flex items-center gap-1.5 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full'>
              <MapPin size={13} />
              {job.location}
            </span>
            <span className='inline-flex items-center gap-1.5 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full'>
              <Clock size={13} />
              {job.type}
            </span>
            <span className='inline-flex items-center gap-1.5 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full'>
              <Briefcase size={13} />
              {job.salary}
            </span>
          </div>
          <p className='text-gray-600 leading-relaxed'>{job.description}</p>
        </div>

        <div className='bg-white rounded-3xl border border-gray-100 shadow-sm p-10'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            Apply for This Role
          </h2>
          <form className='space-y-5' id={`apply-form-${slug}`}>
            <div className='grid grid-cols-2 gap-4'>
              <input
                className='form-input-light col-span-2 md:col-span-1'
                placeholder='Full Name *'
                required
              />
              <input
                className='form-input-light col-span-2 md:col-span-1'
                type='email'
                placeholder='Email *'
                required
              />
              <input
                className='form-input-light col-span-2 md:col-span-1'
                type='tel'
                placeholder='Phone *'
                required
              />
              <input
                className='form-input-light col-span-2 md:col-span-1'
                placeholder='LinkedIn Profile URL'
              />
            </div>
            <textarea
              className='form-input-light resize-none'
              rows={4}
              placeholder="Tell us why you'd be a great fit..."
            />
            <input
              type='file'
              className='form-input-light text-sm'
              accept='.pdf,.doc,.docx'
            />
            <button
              type='submit'
              className='btn-primary w-full justify-center py-4 text-base rounded-xl'
            >
              <Send size={18} /> Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
