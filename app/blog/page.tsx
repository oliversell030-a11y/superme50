import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionIntro from '@/components/ui/section-intro';
import { getAllPosts } from '@/lib/posts';

export default function BlogPage() {
  const posts = getAllPosts();
  const leadPost = posts.find((post) => post.featured) ?? posts[0];
  const rest = posts.filter((post) => post.slug !== leadPost?.slug);

  return (
    <>
      <section className="pt-10 md:pt-14">
        <div className="mx-auto w-[min(1240px,calc(100%-24px))] md:w-[min(1240px,calc(100%-40px))]">
          <div className="hero-shell rounded-[2.4rem] border border-line/60 px-6 py-10 shadow-float md:px-10 md:py-12">
            <SectionIntro
              eyebrow="Magazin"
              title="Artikel mit mehr Ruhe, mehr Struktur und deutlich mehr Magazin-Gefühl."
              description="Diese Übersicht ist bewusst editorialer gedacht: ein Leitartikel, klarere Hierarchie und Karten, die sich weniger wie Standard-Blogmodule anfühlen."
            />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto w-[min(1240px,calc(100%-24px))] md:w-[min(1240px,calc(100%-40px))]">
          {leadPost ? (
            <>
              <Link
                href={`/blog/${leadPost.slug}`}
                className="grid overflow-hidden rounded-[2rem] border border-line/60 bg-surfaceStrong/90 shadow-panel transition-transform hover:-translate-y-1 lg:grid-cols-[1fr_1fr]"
              >
                <div className="relative min-h-[320px]">
                  <Image
                    src={leadPost.image || '/media/hero-bg.jpg'}
                    alt={leadPost.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-end p-6 md:p-8">
                  <span className="eyebrow">{leadPost.category || 'Leitartikel'}</span>
                  <h1 className="mt-4 font-display text-[clamp(2rem,4vw,3.6rem)] leading-[0.98] tracking-[-0.04em] text-textPrimary">
                    {leadPost.title}
                  </h1>
                  <p className="mt-4 text-base leading-8 text-textMuted">{leadPost.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.76rem] uppercase tracking-[0.16em] text-sageDeep">
                    Weiterlesen
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>

              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="overflow-hidden rounded-[1.8rem] border border-line/60 bg-surface/80 shadow-panel transition-transform hover:-translate-y-1"
                  >
                    <div className="relative aspect-[1.15]">
                      <Image
                        src={post.image || '/media/hero-bg.jpg'}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-[0.72rem] uppercase tracking-[0.18em] text-sageDeep">
                        {post.category}
                      </p>
                      <h2 className="mt-3 font-display text-[1.65rem] leading-[1.02] tracking-[-0.03em] text-textPrimary">
                        {post.title}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-textMuted">{post.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-[1.8rem] border border-line/60 bg-surface/80 p-8 text-textMuted shadow-panel">
              Noch keine Artikel vorhanden.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
