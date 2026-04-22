import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://blueeleads.com'),
  title: {
    default: 'Bluee Leads Marketing Limited | BPO & Lead Generation UK',
    template: '%s | Bluee Leads Marketing Limited',
  },
  description:
    'Bluee Leads Marketing Limited — Premier BPO, outbound telemarketing, lead generation & appointment setting for UK businesses. Save up to 70% vs. in-house teams. ISO certified. GDPR compliant.',
  keywords: [
    'BPO UK',
    'lead generation',
    'telemarketing',
    'appointment setting',
    'inbound call handling',
    'outbound calling',
    'B2B marketing UK',
    'market research',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Bluee Leads Marketing Limited',
    title: 'Bluee Leads Marketing Limited | BPO & Lead Generation UK',
    description:
      'Premier BPO and lead generation partner helping UK businesses grow. Expert telemarketers, ISO certified, GDPR compliant.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bluee Leads Marketing Limited | BPO & Lead Generation',
    description: 'Expert BPO services. Save up to 70% vs. in-house teams.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en-GB'
      data-scroll-behavior='smooth'
      className={`${inter.variable} ${plusJakarta.variable}`}
    >
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className='min-h-screen flex flex-col antialiased mb-4'>
        <Navbar />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
