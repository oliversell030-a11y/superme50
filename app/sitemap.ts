import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';
import { siteUrl } from '@/lib/site';

const staticPages = [
  '',
  '/vitalitaet',
  '/schlaf',
  '/nervensystem',
  '/beweglichkeit',
  '/haut-haar',
  '/blog',
  '/rezepte',
  '/empfehlungen',
  '/impressum',
  '/datenschutz',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const updatedAt = new Date('2026-04-03');

  const pageEntries = staticPages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: updatedAt,
    changeFrequency: path === '' || path === '/blog' ? 'weekly' as const : 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const postEntries = getAllPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...pageEntries, ...postEntries];
}
