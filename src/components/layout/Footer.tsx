import Link from 'next/link';
import { Phone, Mail, MapPin, Globe, Share2, ArrowRight } from 'lucide-react';

const services = [
  'B2B Telemarketing',
  'Lead Generation',
  'Appointment Setting',
  'Inbound Call Handling',
  'Market Research',
  'Data Cleansing',
  'B2C Telemarketing',
];

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Clients', href: '/clients' },
  { label: 'Blog & Insights', href: '/blogs' },
  { label: 'Careers', href: '/careers' },
  { label: 'Case Studies', href: '/clients#case-studies' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

export default function Footer() {
  return (
    <footer className='bg-[#050d1f] text-white '>
      {/* CTA Band */}
      <div className='bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 '>
        <div className='container-xl py-12'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
            <div>
              <h2 className='text-3xl font-black text-white'>
                Ready to accelerate your growth?
              </h2>
              <p className='text-blue-100 mt-2'>
                Expert BPO services. Save up to 70% vs. in-house teams.
              </p>
            </div>
            <div className='flex gap-4 flex-shrink-0'>
              <Link href='/contact' className='btn-white'>
                Get Free Quote <ArrowRight size={16} />
              </Link>
              <a
                href='tel:+441234567890'
                className='btn-secondary'
                style={{ borderColor: 'white', color: 'white' }}
              >
                <Phone size={16} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className='container-xl py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {/* Brand Column */}
          <div className='lg:col-span-1'>
            <div className='flex items-center gap-3 mb-5'>
              <div className='w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center'>
                <span className='text-white font-black text-sm'>BL</span>
              </div>
              <div>
                <div className='font-black text-white text-base leading-tight'>
                  Bluee Leads
                </div>
                <div className='text-blue-400 text-xs'>Marketing Limited</div>
              </div>
            </div>
            <p className='text-gray-400 text-sm leading-relaxed mb-6'>
              Premier BPO and lead generation partner helping UK businesses
              accelerate growth through expert outbound & inbound calling
              services.
            </p>
            {/* Certifications */}
            <div className='flex flex-wrap gap-2'>
              {['ISO 27001', 'GDPR', 'ICO Reg.', 'DMA Member'].map((cert) => (
                <span
                  key={cert}
                  className='text-xs px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700/50 text-blue-300'
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-white font-bold text-sm uppercase tracking-wider mb-5'>
              Our Services
            </h3>
            <ul className='space-y-3'>
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href='/services'
                    className='text-gray-400 text-sm hover:text-blue-400 transition-colors flex items-center gap-2 group'
                  >
                    <ArrowRight
                      size={12}
                      className='opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all'
                    />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-white font-bold text-sm uppercase tracking-wider mb-5'>
              Quick Links
            </h3>
            <ul className='space-y-3'>
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className='text-gray-400 text-sm hover:text-blue-400 transition-colors flex items-center gap-2 group'
                  >
                    <ArrowRight
                      size={12}
                      className='opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all'
                    />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='text-white font-bold text-sm uppercase tracking-wider mb-5'>
              Contact Us
            </h3>
            <ul className='space-y-4'>
              <li className='flex items-start gap-3'>
                <MapPin
                  size={16}
                  className='text-blue-400 mt-0.5 flex-shrink-0'
                />
                <span className='text-gray-400 text-sm'>
                  1 Business Park, Innovation Drive
                  <br />
                  London, EC1A 1BB, United Kingdom
                </span>
              </li>
              <li>
                <a
                  href='tel:+441234567890'
                  className='flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors text-sm'
                >
                  <Phone size={16} className='text-blue-400 flex-shrink-0' />
                  +44 (0) 123 456 7890
                </a>
              </li>
              <li>
                <a
                  href='mailto:hello@blueeleads.co.uk'
                  className='flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors text-sm'
                >
                  <Mail size={16} className='text-blue-400 flex-shrink-0' />
                  hello@blueeleads.co.uk
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className='flex gap-3 mt-6'>
              {[
                { Icon: Globe, href: '#', label: 'LinkedIn' },
                { Icon: Share2, href: '#', label: 'Twitter' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className='w-9 h-9 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-all duration-200 hover:scale-110'
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4'>
          <p className='text-gray-500 text-sm'>
            © {new Date().getFullYear()} Bluee Leads Marketing Limited. All
            rights reserved. Registered in England & Wales.
          </p>
          <div className='flex gap-6'>
            <Link
              href='/privacy-policy'
              className='text-gray-500 hover:text-gray-300 text-sm transition-colors'
            >
              Privacy Policy
            </Link>
            <Link
              href='/privacy-policy#terms'
              className='text-gray-500 hover:text-gray-300 text-sm transition-colors'
            >
              Terms of Service
            </Link>
            <Link
              href='/privacy-policy#cookies'
              className='text-gray-500 hover:text-gray-300 text-sm transition-colors'
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
