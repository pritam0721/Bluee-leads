'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, TrendingDown, Clock, Award, Users, Globe } from 'lucide-react';
import { CountUp } from '@/components/animations/FadeIn';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: TrendingDown,
    title: 'Save Up To 70%',
    description:
      'Dramatically reduce your cost-per-contact and cost-per-acquisition compared to building an in-house team. No recruitment, training, or overhead costs.',
    color: '#0057ff',
    stat: '70%',
    statLabel: 'Average Cost Reduction',
  },
  {
    icon: Shield,
    title: 'ISO 27001 & GDPR Compliant',
    description:
      'All operations adhere to ISO 27001 information security standards and UK GDPR regulations. ICO registered with full data protection protocols.',
    color: '#059669',
    stat: '100%',
    statLabel: 'Compliance Rate',
  },
  {
    icon: Clock,
    title: 'Rapid Deployment',
    description:
      'Campaign-ready within 5 business days. Our experienced team hits the ground running with proven processes and scripts from day one.',
    color: '#7c3aed',
    stat: '5',
    statLabel: 'Days to Launch',
  },
  {
    icon: Award,
    title: 'Experienced Team',
    description:
      'Average 8+ years experience per agent. Native English speakers with deep understanding of UK business culture and buying behaviours.',
    color: '#d97706',
    stat: '8+',
    statLabel: 'Yrs Avg. Experience',
  },
  {
    icon: Users,
    title: 'Dedicated Account Management',
    description:
      'A named account manager and team leader assigned to your campaign. Weekly reporting, monthly strategy calls, transparent KPI dashboards.',
    color: '#0891b2',
    stat: '24/7',
    statLabel: 'Support Available',
  },
  {
    icon: Globe,
    title: 'UK & International Reach',
    description:
      "Whether you're targeting the UK, Europe, or beyond — our multilingual capabilities and timezone-flexible teams ensure maximum coverage.",
    color: '#db2777',
    stat: '15+',
    statLabel: 'Countries Reached',
  },
];

const stats = [
  { target: 500, suffix: '+', label: 'Campaigns Delivered', prefix: '' },
  { target: 70, suffix: '%', label: 'Average Cost Savings', prefix: 'Up to ' },
  { target: 98, suffix: '%', label: 'Client Retention Rate', prefix: '' },
  { target: 12, suffix: 'M+', label: 'Calls Made Annually', prefix: '' },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = cardsRef.current?.querySelectorAll('.why-card');
    if (!cards) return;

    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.94 },
      {
        opacity: 1,
        x: -40,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      },
    );
  });

  return (
    <section
      id='why-choose-us'
      ref={sectionRef}
      className='section-py bg-white'
    >
      <div className='container-xl'>
        {/* Header */}
        <div className='section-header'>
          <span className='section-eyebrow'>Why Choose Us</span>
          <h2 className='display-lg text-gray-900 max-w-2xl mx-auto'>
            The Smart Choice for{' '}
            <span className='text-gradient'>UK Business Growth</span>
          </h2>
          <p className='text-gray-500 text-lg mt-4 max-w-xl mx-auto'>
            We combine expert talent, proven processes, and cutting-edge
            technology to deliver measurable results.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          style={{ marginBottom: '5rem' }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className='why-card group rounded-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
                style={{ padding: '2.5rem 2.75rem' }}
              >
                <div
                  className='w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform'
                  style={{ background: `${reason.color}15` }}
                >
                  <Icon size={22} style={{ color: reason.color }} />
                </div>
                <div className='mb-1'>
                  <span
                    className='text-2xl font-black'
                    style={{ color: reason.color }}
                  >
                    {reason.stat}
                  </span>{' '}
                  <span className='text-xs text-gray-400 font-medium'>
                    {reason.statLabel}
                  </span>
                </div>
                <h3 className='text-lg font-bold text-gray-900 mb-3'>
                  {reason.title}
                </h3>
                <p className='text-gray-500 text-sm leading-relaxed w'>
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Banner */}
        <div
          className='rounded-3xl p-10 grid grid-cols-2 lg:grid-cols-4 gap-8'
          style={{
            background:
              'linear-gradient(135deg, #050d1f 0%, #041233 50%, #0a1f5c 100%)',
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className='text-center'>
              <div className='text-4xl font-black text-white mb-1'>
                {stat.prefix && (
                  <span className='text-2xl text-blue-300'>{stat.prefix}</span>
                )}
                <CountUp
                  target={stat.target}
                  suffix={stat.suffix}
                  className='text-white'
                />
              </div>
              <div className='text-gray-400 text-sm'>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
