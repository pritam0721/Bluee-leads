'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  PhoneCall,
  Users,
  Target,
  BarChart3,
  Search,
  Database,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 'b2b',
    title: 'B2B Telemarketing',
    description:
      'High-quality outbound calling to key decision makers. We handle the initial outreach so your sales team can focus on closing.',
    icon: PhoneCall,
    color: '#0057ff',
    
  },
  {
    id: 'lead-gen',
    title: 'Lead Generation',
    description:
      'Multi-channel lead generation campaigns designed to fill your pipeline with high-intent prospects who are ready to buy.',
    icon: Target,
    color: '#059669',

  },
  {
    id: 'appointments',
    title: 'Appointment Setting',
    description:
      "We don't just find leads; we book them directly into your calendar. Qualified meetings with real commercial value.",
    icon: Users,
    color: '#7c3aed',

  },
  {
    id: 'inbound',
    title: 'Inbound Call Handling',
    description:
      'Professional UK-based call handling for your business. Never miss an enquiry again with our 24/7 reactive support.',
    icon: BarChart3,
    color: '#0891b2',
  
  },
  {
    id: 'research',
    title: 'Market Research',
    description:
      'Gather critical business intelligence and customer feedback. Data-driven insights to power your strategic decisions.',
    icon: Search,
    color: '#d97706',

  },
  {
    id: 'data',
    title: 'Data Cleansing',
    description:
      'Transform your messy CRM data into a powerful sales asset. We verify, update and enrich your existing prospect lists.',
    icon: Database,
    color: '#db2777',
  },
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray('.service-card');

      cards.forEach((card: any) => {
        gsap.from(card, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section id='services' className='bg-white' style={{ paddingTop: '6rem', paddingBottom: '10rem' }} ref={containerRef}>
      <div className='container-xl'>
        {/* Header */}
        <div className='section-header'>
          <span className='section-eyebrow'>Our Expertise</span>
          <h2 className='display-lg text-gray-900 max-w-2xl mx-auto'>
            Comprehensive <span className='text-gradient'>BPO Solutions</span>{' '}
            for Every Business
          </h2>
          <p className='text-gray-500 text-lg mt-4 max-w-xl mx-auto'>
            From initial lead generation to full-scale customer support, we
            provide the human talent and technology to scale your operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className='service-card group p-10 px-16 rounded-[2.5rem] border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-2 bg-white flex flex-col'
                style={{ padding: '2.5rem 2.75rem' }}
              >
                <div
                  className='w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm'
                  style={{
                    backgroundColor: `${service.color}15`,
                    color: service.color,
                  }}
                >
                  <Icon size={28} />
                </div>

                <h3 className='text-2xl font-black text-gray-900 mb-5 group-hover:text-blue-600 transition-colors leading-tight'>
                  {service.title}
                </h3>

                <p className='text-gray-500 text-sm leading-relaxed mb-8 font-medium'>
                  {service.description}
                </p>

                <Link
                  href='/contact'
                  className='mt-auto self-start inline-flex items-center gap-2 text-sm font-black text-blue-600 group-hover:gap-3 transition-all'
                  style={{ marginTop: '2.5rem' }}
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: '5rem' }} className='p-10 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8'>
          <div className='max-w-md text-center md:text-left'>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>
              Need a Bespoke Campaign?
            </h3>
            <p className='text-gray-500 text-sm font-medium'>
              We build custom solutions tailored to your unique business goals
              and target market.
            </p>
          </div>
          <Link href='/contact' className='btn-primary whitespace-nowrap'>
            Schedule a Strategy Call
          </Link>
        </div>
      </div>
    </section>
  );
}
