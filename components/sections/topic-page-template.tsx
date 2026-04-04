import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { TopicPageData } from '@/lib/topic-pages';
import { getAllPosts } from '@/lib/posts';
import SectionIntro from '@/components/ui/section-intro';

type TopicPageTemplateProps = {
  page: TopicPageData;
};

export default function TopicPageTemplate({ page }: TopicPageTemplateProps) {
  const posts = getAllPosts();
  const relatedPosts = posts.filter((post) =>
    post.category?.toLowerCase().includes(page.slug) ||
    page.eyebrow.toLowerCase().includes(post.category?.toLowerCase() || '')
  );

  return (
    <>
      <section className="pt-10 md:pt-14">
        <div className="mx-auto w-[min(1240px,calc(100%-24px))] md:w-[min(1240px,calc(100%-40px))]">
          <div className="hero-shell overflow-hidden rounded-[2.4rem] border border-line/60 shadow-float">
            <div className="relative grid gap-8 px-6 py-10 md:grid-cols-[1.15fr_0.85fr] md:px-10 md:py-12">
              <div>
                <span className="eyebrow">{page.eyebrow}</span>
                <h1 className="mt-5 max-w-[12ch] font-display text-[clamp(2.8rem,6vw,5.6rem)] leading-[0.95] tracking-[-0.05em] text-textPrimary">
                  {page.titleGold && page.title.includes(page.titleGold)
                    ? <>{page.title.replace(page.titleGold, '')}<span className="text-goldAccent">{page.titleGold}</span></>
                    : page.title}
                </h1>
                <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-textMuted md:text-[1.05rem]">
                  {page.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="flex items-end">
                <div className="w-full rounded-[2rem] border border-line/70 bg-surface/80 p-6 shadow-panel backdrop-blur">
                  <p className="font-display text-[1.65rem] leading-tight tracking-[-0.03em] text-textPrimary">
                    {page.accentLine}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-textMuted">
                    Alle Impulse auf dieser Seite sind so gedacht, dass sie ohne großen
                    Aufwand in deinen Alltag passen. Ruhig anfangen, dranbleiben, spüren
                    was sich verändert.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto w-[min(1240px,calc(100%-24px))] md:w-[min(1240px,calc(100%-40px))]">
          <div className={`grid gap-5 ${page.cards.length > 3 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'}`}>
            {page.cards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="rounded-[1.7rem] border border-line/60 bg-surface/85 p-6 shadow-panel backdrop-blur"
                >
                  <div className="inline-flex rounded-full border border-line/70 bg-background/80 p-3 text-sageDeep">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <p className="mt-5 text-[0.72rem] uppercase tracking-[0.18em] text-sageDeep">
                    {card.label}
                  </p>
                  <h2 className="mt-3 font-display text-[1.9rem] leading-[1.02] tracking-[-0.03em] text-textPrimary">
                    {card.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-textMuted">{card.description}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-textMuted">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-10 md:py-16">
          <div className="mx-auto w-[min(1240px,calc(100%-24px))] md:w-[min(1240px,calc(100%-40px))]">
            <SectionIntro eyebrow="Aus dem Magazin" title="Passende Artikel zu diesem Thema" />
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((post) => (
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
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[0.72rem] uppercase tracking-[0.18em] text-sageDeep">
                      {post.category}
                    </p>
                    <h3 className="mt-3 font-display text-[1.5rem] leading-[1.02] tracking-[-0.03em] text-textPrimary">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-4 md:py-10">
        <div className="mx-auto w-[min(1240px,calc(100%-24px))] md:w-[min(1240px,calc(100%-40px))]">
          <div className="rounded-[2rem] border border-line/60 bg-backgroundSoft/80 p-6 shadow-panel md:p-8">
            <SectionIntro eyebrow={page.notes.eyebrow} title={page.notes.title} />
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {page.notes.items.map((item) => (
                <li
                  key={item}
                  className="rounded-[1.4rem] border border-line/55 bg-surface/70 px-5 py-4 text-sm leading-7 text-textMuted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto w-[min(1240px,calc(100%-24px))] md:w-[min(1240px,calc(100%-40px))]">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[2rem] border border-line/60 bg-surfaceStrong/90 p-6 shadow-panel md:p-8">
              <SectionIntro eyebrow={page.reflection.eyebrow} title={page.reflection.title} />
              <div className="mt-6 space-y-4 text-base leading-8 text-textMuted">
                {page.reflection.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            {page.bridge ? (
              <aside className="rounded-[2rem] border border-line/60 bg-sageDeep px-6 py-7 text-background shadow-panel md:px-8">
                <p className="text-[0.74rem] uppercase tracking-[0.18em] text-background/70">
                  Nächster Blick
                </p>
                <h2 className="mt-3 font-display text-[2rem] leading-[1.02] tracking-[-0.03em]">
                  {page.bridge.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-background/78">{page.bridge.copy}</p>
                <Link
                  href={page.bridge.href}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-background/16 bg-background/12 px-5 py-3 text-[0.76rem] uppercase tracking-[0.16em] text-background transition-transform hover:-translate-y-0.5"
                >
                  {page.bridge.label}
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              </aside>
            ) : (
              <aside className="rounded-[2rem] border border-line/60 bg-[linear-gradient(160deg,rgba(255,251,245,0.82),rgba(220,228,211,0.82))] px-6 py-7 shadow-panel md:px-8">
                <p className="text-[0.74rem] uppercase tracking-[0.18em] text-sageDeep">
                  Editoriale Linie
                </p>
                <h2 className="mt-3 font-display text-[2rem] leading-[1.02] tracking-[-0.03em] text-textPrimary">
                  Weniger austauschbar, mehr Haltung.
                </h2>
                <p className="mt-4 text-sm leading-7 text-textMuted">
                  Die Seite soll auf allen Unterseiten dieselbe Handschrift tragen: ruhige
                  Hierarchie, warme Oberflächen, echte Stimme und spürbar weniger Template-Gefühl.
                </p>
              </aside>
            )}
          </div>
        </div>
      </section>

      <section className="pb-8 pt-2 md:pb-16">
        <div className="mx-auto w-[min(1240px,calc(100%-24px))] md:w-[min(1240px,calc(100%-40px))]">
          <div className="rounded-[2rem] border border-line/45 bg-sageDeep p-6 text-background shadow-panel md:p-9">
            <p className="eyebrow text-background/80 before:bg-background/50">Mehr entdecken</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.3rem)] leading-[0.98] tracking-[-0.04em]">
              {page.cta.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-background/82">
              {page.cta.copy}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="rounded-full bg-background px-5 py-3 text-[0.76rem] uppercase tracking-[0.16em] text-sageDeep transition-transform hover:-translate-y-0.5"
              >
                Zum Magazin
              </Link>
              <Link
                href="/#newsletter"
                className="rounded-full border border-background/16 bg-background/12 px-5 py-3 text-[0.76rem] uppercase tracking-[0.16em] text-background transition-transform hover:-translate-y-0.5"
              >
                Zum Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
