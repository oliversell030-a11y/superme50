import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  readTime: string;
  image: string;
  featured: boolean;
}

export interface Post extends PostMeta {
  contentHtml: string;
  source?: {
    name: string;
    url: string;
  } | null;
  additionalSources?: {
    name: string;
    url: string;
  }[];
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith('.mdx') || name.endsWith('.md'))
    .map((name) => name.replace(/\.mdx?$/, ''));
}

export function getAllPosts(): PostMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPostMeta(slug))
    .filter((post): post is PostMeta => post !== null)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostMeta(slug: string): PostMeta | null {
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
  const mdPath = path.join(postsDirectory, `${slug}.md`);
  const fullPath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;

  if (!fullPath) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data } = matter(fileContents);

  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    category: data.category || '',
    description: data.description || '',
    readTime: data.readTime || '',
    image: data.image || '',
    featured: data.featured || false,
  };
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
  const mdPath = path.join(postsDirectory, `${slug}.md`);
  const fullPath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;

  if (!fullPath) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const cleanContent = content.replace(
    /<img\s+src="([^"]+)"\s+alt="([^"]*)"[^/]*\/>/g,
    '![$2]($1)'
  );

  const processedContent = await remark().use(html).process(cleanContent);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    category: data.category || '',
    description: data.description || '',
    readTime: data.readTime || '',
    image: data.image || '',
    featured: data.featured || false,
    contentHtml,
    source: data.source || null,
    additionalSources: data.additionalSources || [],
  };
}
