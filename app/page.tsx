import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import NewsletterPanel from '@/components/sections/newsletter-panel';
import SectionIntro from '@/components/ui/section-intro';
import { homeManifest, homeThemes } from '@/lib/collections';
import { getAllPosts } from '@/lib/posts';

const toneClasses: Record<string, string> = {
  dark:
    "border-line/30 bg-[linear-gradient(180deg,rgba(62,69,56,0.58),rgba(45,50,41,0.92)),url('/media/hero-bg.jpg')] bg-cover bg-center text-background",
  sage:
    'border-line/15 bg-[linear-gradient(180deg,rgba(224,232,217,0.84),rgba(190,205,179,0.92))] text-textPrimary',
  soft:
    'border-line/15 bg-[linear-gradient(160deg,rgba(240,231,219,0.96),rgba(228,235,220,0.92))] text-textPrimary',
  cream:
    'border-line/15 bg-[linear-gradient(180deg,rgba(255,251,245,0.92),rgba(239,230,217,0.95))] text-textPrimary',
};

export default function HomePage() {
  const posts = getAllPosts();
  const featuredPost = posts.find((post) => post.featured) ?? posts[0];
  const sidePosts = posts.filter((post) => post.slug !== featuredPost?.slug).slice(0, 2);

  return (
    <>
      <section className="pt-8 md:pt-10">
        <div className="mx-auto w-[min(1240px,calc(100%-24px))] md:w-[min(1240px,calc(100%-40px))]">
          <div className="hero-shell overflow-hidden rounded-[2.5rem] border border-line/60 shadow-float">
            <div className="grid gap-8 px-6 py-8 md:grid-cols-[1.08fr_0.92fr] md:px-10 md:py-10">
              <div className="flex flex-col justify-center">
                <span className="eyebrow">Christiane Neubert | Impulse ab 50</span>
                <h1 className="mt-5 max-w-[10ch] font-display text-[clamp(3rem,7vw,6rem)] leading-[0.94] tracking-[-0.06em] text-textPrimary">
                  Mehr Kraft. Mehr Ruhe. Mehr du.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-textMuted md:text-[1.08rem]">
                  Natürliche, alltagstaugliche Impulse für Frauen ab 50. Ohne Hype. Ohne
                  Druck. Mit Erfahrung, Klarheit und einem Blick für das, was im echten Leben
                  wirklich trägt.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/blog"
                    className="rounded-full bg-sageDeep px-5 py-3 text-[0.76rem] uppercase tracking-[0.16em] text-background transition-transform hover:-translate-y-0.5"
                  >
                    Im Magazin lesen
                  </Link>
                  <Link
                    href="/#ueber"
                    className="rounded-full border border-line/20 bg-surface/65 px-5 py-3 text-[0.76rem] uppercase tracking-[0.16em] text-textPrimary transition-transform hover:-translate-y-0.5"
                  >
                    Über Christiane
                  </Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-sageDeep">
                  {['Natürlich', 'Alltagstauglich', 'Mit Erfahrung'].map((item) => (
                    <span key={item} className="inline-flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-end">
                <div className="relative min-h-[420px] w-full overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,#d9ddd7,#b8b9b4)] md:min-h-[600px]">
                  <Image
                    src="/media/christiane-portrait.png"
                    alt="Christiane Neubert"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                  <div className="absolute bottom-4 left-4 right-4 rounded-[1.4rem] border border-line/15 bg-surface/90 px-5 py-4 shadow-panel backdrop-blur md:bottom-6 md:left-6 md:right-auto md:max-w-[290px]">
                    <p className="font-display text-[1.15rem] leading-7 tracking-[-0.02em] text-textPrimary">
                      „Man muss nicht aufhören, sich gut zu fühlen.“
                    </p>
                    <p className="mt-3 text-[0.72rem] uppercase tracking-[0.16em] text-textMuted">
                      Christiane Neubert
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="mx-auto grid w-[min(1240px,calc(100%-24px))] gap-4 md:w-[min(1240px,calc(100%-40px))] md:grid-cols-3">
          {homeManifest.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-line/55 bg-surface/65 p-5 shadow-panel backdrop-blur"
            >
              <h2 className="font-display text-[1.3rem] tracking-[-0.03em] text-textPrimary">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-textMuted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="themen" className="py-10 md:py-16">
        <div className="mx-auto w-[min(1240px,calc(100%-24px))] md:w-[min(1240px,calc(100%-40px))]">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionIntro
              eyebrow="Themenwelten"
              title="Nicht alles auf einmal. Aber genau das Richtige für jetzt."
            />
            <p className="max-w-xl text-base leading-8 text-textMuted">
              Die Themen sind absichtlich unterschiedlich gewichtet. So fühlt sich die
              Startseite weniger nach Kartenraster und deutlich stärker nach kuratierter
              Magazin-Startseite an.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <Link
              href={homeThemes[0].href}
              className={`flex min-h-[420px] flex-col justify-end rounded-[2rem] border p-6 shadow-panel transition-transform hover:-translate-y-1 md:p-8 ${toneClasses[homeThemes[0].tone]}`}
            >
              <p className="text-[0.74rem] uppercase tracking-[0.18em] opacity-80">
                {homeThemes[0].eyebrow}
              </p>
              <h2 className="mt-3 max-w-[12ch] font-display text-[clamp(2.1rem,4vw,3.5rem)] leading-[0.98] tracking-[-0.04em]">
                {homeThemes[0].title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 opacity-85">
                {homeThemes[0].description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[0.76rem] uppercase tracking-[0.16em]">
                Mehr dazu
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </Link>

            <div className="grid gap-5">
              {homeThemes.slice(1, 3).map((theme) => (
                <Link
                  key={theme.href}
                  href={theme.href}
                  className={`flex min-h-[200px] flex-col justify-end rounded-[2rem] border p-6 shadow-panel transition-transform hover:-translate-y-1 md:p-7 ${toneClasses[theme.tone]}`}
                >
                  <p className="text-[0.74rem] uppercase tracking-[0.18em] opacity-80">
                    {theme.eyebrow}
                  </p>
                  <h2 className="mt-3 font-display text-[2rem] leading-[1.02] tracking-[-0.03em]">
                    {theme.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-7 opacity-85">
                    {theme.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            {homeThemes.slice(3).map((theme) => (
              <Link
                key={theme.href}
                href={theme.href}
                className={`flex min-h-[230px] flex-col justify-end rounded-[2rem] border p-6 shadow-panel transition-transform hover:-translate-y-1 md:p-7 ${toneClasses[theme.tone]}`}
              >
                <p className="text-[0.74rem] uppercase tracking-[0.18em] opacity-80">
                  {theme.eyebrow}
                </p>
                <h2 className="mt-3 font-display text-[2rem] leading-[1.02] tracking-[-0.03em]">
                  {theme.title}
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 opacity-85">
                  {theme.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="mx-auto w-[min(1240px,calc(100%-24px))] md:w-[min(1240px,calc(100%-40px))]">
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionIntro
              eyebrow="Magazin"
              title="Mehr Redaktion, weniger Standard-Blog."
            />
            <Link
              href="/blog"
              className="text-[0.76rem] uppercase tracking-[0.18em] text-sageDeep transition-colors hover:text-textPrimary"
            >
              Alle Artikel ansehen
            </Link>
          </div>

          {featuredPost ? (
            <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="grid overflow-hidden rounded-[2rem] border border-line/60 bg-surfaceStrong/90 shadow-panel transition-transform hover:-translate-y-1 md:grid-cols-[1.02fr_0.98fr]"
              >
                <div className="relative min-h-[320px]">
                  <Image
                    src={featuredPost.image || '/media/hero-bg.jpg'}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-end p-6 md:p-8">
                  <span className="eyebrow">{featuredPost.category || 'Leitartikel'}</span>
                  <h2 className="mt-4 font-display text-[clamp(2rem,3.5vw,3.4rem)] leading-[0.98] tracking-[-0.04em] text-textPrimary">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-textMuted">
                    {featuredPost.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[0.76rem] uppercase tracking-[0.16em] text-sageDeep">
                    Artikel lesen
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>

              <div className="grid gap-5">
                {sidePosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="rounded-[1.8rem] border border-line/60 bg-surface/80 p-6 shadow-panel transition-transform hover:-translate-y-1"
                  >
                    <span className="eyebrow">{post.category || 'Magazin'}</span>
                    <h3 className="mt-4 font-display text-[1.8rem] leading-[1.02] tracking-[-0.03em] text-textPrimary">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-textMuted">{post.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section id="ueber" className="py-10 md:py-16">
        <div className="mx-auto w-[min(1240px,calc(100%-24px))] md:w-[min(1240px,calc(100%-40px))]">
          <div className="grid overflow-hidden rounded-[2.2rem] border border-line/60 bg-[linear-gradient(160deg,rgba(255,251,245,0.8),rgba(220,228,211,0.78))] shadow-panel lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative min-h-[360px] bg-[linear-gradient(180deg,rgba(91,104,82,0.12),rgba(91,104,82,0.28))]">
              <Image
                src="/media/christiane-portrait.png"
                alt="Christiane Neubert"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div className="p-6 md:p-10">
              <SectionIntro
                eyebrow="Über Christiane"
                title="Nicht Wellness. Sondern Erfahrung mit Haltung."
              />
              <div className="mt-6 space-y-4 text-base leading-8 text-textMuted">
                <p>
                  In dieser Version steht Christiane deutlich stärker als Persönlichkeit im
                  Mittelpunkt. Das macht die Marke glaubwürdiger, wärmer und weniger
                  austauschbar.
                </p>
                <p>
                  Die Seite darf zeigen, wofür sie steht: natürliche Wege, sanfte Stärke,
                  ein erwachsener Ton und Inhalte, die nicht laut sein müssen, um zu wirken.
                </p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  ['Persönlich', 'Eine echte Stimme statt anonymer Ratgeber-Fläche.'],
                  ['Ruhig', 'Mehr Gelassenheit im Design und im Wording.'],
                  ['Wertig', 'Editoriale Hierarchie statt gleichförmiger Standardblöcke.'],
                ].map(([title, text]) => (
                  <article
                    key={title}
                    className="rounded-[1.3rem] border border-line/55 bg-surface/55 p-4"
                  >
                    <h3 className="font-display text-[1.25rem] tracking-[-0.02em] text-textPrimary">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-textMuted">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterPanel
        eyebrow="Newsletter"
        title="Ein guter Impuls. Ab und zu. Ohne Lärm."
        description="Nicht als technische Formularbox, sondern als warme Einladung mit einer klaren Markenstimme. So fühlt sich auch der Kontakt hochwertiger an."
      />
    </>
  );
}
