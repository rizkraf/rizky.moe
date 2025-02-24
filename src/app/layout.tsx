import '@/app/globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { Navbar } from '@/components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { baseUrl } from './sitemap';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Rizky Rafi Azhara | Software Engineer',
    template: '%s | Rizky Rafi Azhara',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'Rizky Rafi Azhara | Software Engineer',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
})

interface ClassNames {
  (...classes: (string | boolean | undefined)[]): string;
}

const cx: ClassNames = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white',
        dmSans.className
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
