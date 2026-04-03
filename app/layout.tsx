import type { Metadata } from 'next';
import '@/app/globals.css';
import SiteHeader from '@/components/layout/site-header';
import SiteFooter from '@/components/layout/site-footer';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: 'SuperMe50+ Editorial Redesign',
  description: siteConfig.description,
  authors: [{ name: siteConfig.author }],
  openGraph: {
    title: 'SuperMe50+ Editorial Redesign',
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: 'de_DE',
    type: 'website',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.author,
  url: siteConfig.siteUrl,
  jobTitle: 'Coach für Wohlbefinden ab 50',
  description: siteConfig.description,
  sameAs: [siteConfig.facebookUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <div className="relative min-h-screen overflow-hidden">
          <SiteHeader />
          <main className="relative z-10">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
