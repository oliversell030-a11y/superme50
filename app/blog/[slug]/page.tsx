import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: 'Artikel nicht gefunden' };

  return {
    title: `${post.title} | SuperMe50+`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <>
      <section className="pt-8 md:pt-10">
        <div className="mx-auto w-[min(1120px,calc(100%-24px))] md:w-[min(1120px,calc(100%-40px))]">
          <div className="overflow-hidden rounded-[2.2rem] border border-line/60 bg-surfaceStrong/90 shadow-float">
            <div className="relative min-h-[300px] md:min-h-[420px]">
              <Image
                src={post.image || '/media/hero-bg.jpg'}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,29,24,0.08),rgba(29,29,24,0.45))]" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-background md:p-8">
                <p className="text-[0.74rem] uppercase tracking-[0.18em] text-background/80">
                  {post.category} · {formattedDate} · {post.readTime}
                </p>
                <h1 className="mt-4 max-w-[12ch] font-display text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.95] tracking-[-0.05em]">
                  {post.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <article className="mx-auto w-[min(760px,calc(100%-24px))] md:w-[min(760px,calc(100%-40px))]">
          <p className="text-[1.12rem] leading-8 text-textMuted md:text-[1.18rem]">
            {post.description}
          </p>

          <div
            className="article-rich mt-10"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {(post.source || (post.additionalSources && post.additionalSources.length > 0)) && (
            <div className="mt-12 rounded-[1.5rem] border border-line/60 bg-surface/80 p-6 shadow-panel">
              <p className="text-[0.74rem] uppercase tracking-[0.18em] text-sageDeep">
                Quellen
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-sageDeep">
                {post.source ? (
                  <a href={post.source.url} target="_blank" rel="noopener noreferrer">
                    {post.source.name}
                  </a>
                ) : null}
                {post.additionalSources?.map((source) => (
                  <a
                    key={source.url}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.name}
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10">
            <Link
              href="/blog"
              className="text-[0.76rem] uppercase tracking-[0.18em] text-sageDeep transition-colors hover:text-textPrimary"
            >
              Zurück zum Magazin
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
