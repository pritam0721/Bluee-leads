'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

const bgImages = [
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80',
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1600&q=80',
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [currentBg, setCurrentBg] = useState(0);
  // Background crossfade
  useGSAP(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 3000);
    return () => clearInterval(interval);
  });

  // Hero entrance animations
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.4 });
    tl.from(headlineRef.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: 'power3.out',
    })
      .from(
        subRef.current,
        { opacity: 0, y: 30, duration: 0.7, ease: 'power3.out' },
        '-=0.5',
      )
      .from(
        badgesRef.current?.children ?? [],
        {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.5,
          ease: 'back.out(1.5)',
        },
        '-=0.4',
      )
      .fromTo(
        ctaRef.current?.children ?? [],
        { opacity: 0 },
        { opacity: 1, y: 20, stagger: 0.12, duration: 0.5, ease: 'power2.out' },
        '-=0.3',
      );
  });

  return (
    <section
      ref={containerRef}
      id='hero'
      className='relative min-h-screen flex items-center overflow-hidden'
    >
      {/* Background Images with crossfade */}
      {bgImages.map((src, i) => (
        <div
          key={src}
          className='absolute inset-0 bg-cover bg-center transition-opacity duration-1500'
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === currentBg ? 1 : 0,
            zIndex: 0,
          }}
        />
      ))}

      {/* Overlay */}
      <div
        className='absolute inset-0 z-10'
        style={{
          background:
            'linear-gradient(135deg, rgba(5,13,31,0.92) 0%, rgba(4,18,51,0.85) 50%, rgba(10,31,92,0.75) 100%)',
        }}
      />

      {/* Grid dot pattern overlay */}
      <div className='absolute inset-0 z-10 grid-dot-pattern opacity-30' />

      {/* Decorative blobs */}
      <div
        className='blob-decoration z-10'
        style={{
          width: 600,
          height: 600,
          background: '#0057ff',
          top: -200,
          right: -200,
        }}
      />
      <div
        className='blob-decoration z-10'
        style={{
          width: 400,
          height: 400,
          background: '#00d4ff',
          bottom: -100,
          left: -100,
          opacity: 0.2,
        }}
      />

      {/* Content */}
      <div className='container-xl relative z-20 pt-32 pb-24 flex flex-col justify-center min-h-[80vh]'>
        <div className='flex flex-col items-center text-center  mx-auto space-y-12'>
          {/* Main Hero Header area spanning Eyebrow, H1, Subtitle */}
          <div className='flex flex-col items-center space-y-8'>
            {/* Eyebrow */}
            <div
              className='inline-flex items-center gap-3 px-5 py-2.5 rounded-full'
              style={{
                background: 'rgba(0,87,255,0.15)',
                border: '1px solid rgba(0,87,255,0.3)',
              }}
            >
              <span className='w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse' />
              <span className='text-blue-200 text-sm font-semibold tracking-wider uppercase'>
                UK&apos;s Premier BPO Partner
              </span>
            </div>

            <h1
              ref={headlineRef}
              className='display-xl text-white leading-[1.15]'
            >
              Accelerate Your{' '}
              <span className='text-gradient'>UK Business Growth</span>{' '}
              <br className='hidden md:block' />
              with Bluee Leads
            </h1>

            <p
              ref={subRef}
              className='text-gray-200 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-light'
            >
              Expert B2B telemarketing, lead generation &amp; appointment
              setting — helping UK businesses close more deals while saving up
              to <strong className='text-white font-bold'>70%</strong> vs.
              in-house teams.
            </p>
          </div>

          {/* Trust badges */}
          <div
            ref={badgesRef}
            className='flex flex-wrap justify-center gap-4'
            style={{ padding: '0.5rem .1rem' }}
          >
            {[
              ' ISO 27001 Certified',
              ' GDPR Compliant',
              ' ICO Registered',
              ' 500+ Campaigns',
            ].map((badge) => (
              <span
                key={badge}
                className='text-sm md:text-base text-blue-100 font-medium px-4 py-2 rounded-full'
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              >
                {badge}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className='flex flex-col sm:flex-row flex-wrap justify-center gap-6 pt-4'
            style={{ marginTop: '1rem' }}
          >
            <Link
              href='/contact'
              className='btn-primary text-lg px-8 py-4 rounded-full min-w-[200px] justify-center shadow-lg shadow-blue-500/20'
            >
              Get Free Quote <ArrowRight size={20} />
            </Link>
            <a
              href='tel:+441234567890'
              className='btn-secondary text-lg px-8 py-4 rounded-full min-w-[200px] justify-center'
              style={{
                borderColor: 'rgba(255,255,255,0.4)',
                color: 'white',
                borderWidth: '2px',
              }}
            >
              <Phone size={20} /> Call Now
            </a>
          </div>

          {/* Stats row */}
          <div
            className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full max-w-4xl mx-auto pt-14 border-t border-white/10'
            style={{ marginTop: '5rem' }}
          >
            {[
              { value: '500+', label: 'Campaigns Run' },
              { value: '70%', label: 'Cost Savings' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div
                key={stat.label}
                className='text-center flex flex-col items-center'
              >
                <div className='text-4xl md:text-5xl font-black text-white mb-2'>
                  {stat.value}
                </div>
                <div className='text-blue-200 text-sm md:text-base tracking-widest uppercase'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2'>
        <span className='text-gray-500 text-xs'>Scroll to explore</span>
        <div className='w-5 h-9 rounded-full border-2 border-gray-600 flex items-start justify-center pt-1.5'>
          <div className='w-1 h-2 rounded-full bg-blue-400 animate-bounce' />
        </div>
      </div>
    </section>
  );
}
