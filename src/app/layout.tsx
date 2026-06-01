import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/lib/utils';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Attorney', 'LocalBusiness'],
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email1,
  foundingDate: '1979',
  foundingLocation: { '@type': 'Place', name: 'Casablanca, Maroc' },
  areaServed: { '@type': 'City', name: 'Casablanca' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '27, Rue Mohammed Diouri (Face lydec)',
    addressLocality: 'Casablanca',
    postalCode: '20110',
    addressCountry: 'MA',
  },
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Avocat',
    occupationLocation: { '@type': 'City', name: 'Casablanca' },
  },
  knowsLanguage: ['fr', 'ar'],
  priceRange: '$$',
  image: `${siteConfig.url}/images/logo.jpg`,
};

export const metadata: Metadata = {
  title: {
    default: 'Avocat Casablanca — Me ELKHORASSANI | Cabinet d\'Avocats depuis 1979',
    template: '%s | Avocat Casablanca',
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: 'Avocat Casablanca Maroc',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avocat Casablanca — Me ELKHORASSANI',
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
