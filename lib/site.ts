const fallbackSiteUrl = 'https://christiane-superme50.vercel.app';

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, '') || fallbackSiteUrl;

export const siteConfig = {
  name: 'SuperMe50+',
  author: 'Christiane Neubert',
  description:
    'Editoriale Impulse für Vitalität, Schlaf, Ruhe und Wohlgefühl für Frauen ab 50.',
  facebookUrl: 'https://facebook.com/christiane.neubert.berlin',
  siteUrl,
} as const;
