import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionIntro from '@/components/ui/section-intro';
import { recommendationCategories, solisProducts } from '@/lib/collections';

function SolisCard({ product }: { product: typeof solisProducts[number] }) {
  return (
    <Link
      href={`/empfehlungen/${product.slug}`}
      className="block overflow-hidden rounded-[1.8rem] border border-line/60 bg-[linear-gradient(180deg,rgba(255,251,245,0.92),rgba(239,230,217,0.95))] shadow-panel transition-transform hover:-translate-y-1 hover:border-goldAccent/60"
    >
      <div className="relative aspect-square">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <div className="p-4 md:p-6">
        <h3 className="font-display text-[1.2rem] leading-[1.08] tracking-[-0.02em] text-goldAccent">
          {product.title}
        </h3>
        <p className="mt-3 hidden text-sm leading-7 text-textMuted md:block">{product.description}</p>
      </div>
    </Link>
  );
}

export default function EmpfehlungenPage() {
  return (
    <>
      <section className="pt-10 md:pt-14">
        <div className="mx-auto w-[min(1240px,calc(100%-24px))] md:w-[min(1240px,calc(100%-40px))]">
          <div className="hero-shell rounded-[2.4rem] border border-line/60 px-6 py-10 shadow-float md:px-10 md:py-12">
            <SectionIntro
              eyebrow="Empfehlungen"
              title="Was ich selbst weiterempfehlen würde, ruhig kuratiert statt laut verkauft."
              description="Persönlich ausgewählt, ehrlich eingeordnet. Produkte und Ressourcen, die Christiane selbst nutzt oder weiterempfehlen würde."
            />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto w-[min(1240px,calc(100%-24px))] md:w-[min(1240px,calc(100%-40px))]">
          <div className="rounded-[2.4rem] bg-[linear-gradient(180deg,rgba(224,232,217,0.84),rgba(190,205,179,0.92))] px-6 py-10 md:px-10 md:py-14">
            <SectionIntro
              eyebrow="Solis Superfoods"
              title="Christianes tägliche Begleiter aus reiner Pflanzenkraft."
            />

            <div className="mt-8 grid gap-5 grid-cols-2 lg:grid-cols-4">
              {solisProducts.map((product) => (
                <SolisCard key={product.slug} product={product} />
              ))}
            </div>

            <p className="eyebrow text-center">Über Solis</p>
            <p className="mx-auto mt-2 max-w-md text-center text-sm leading-7 text-textMuted">
              Reine Pflanzenkraft, ethisch angebaut, ohne künstliche Zusätze.
            </p>
            <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-[1.2rem] border border-line/40 shadow-panel">
              <video
                controls
                preload="metadata"
                className="w-full"
                poster="/images/shop/solis-poster-108.jpg"
              >
                <source src="/media/solis-brand.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto w-[min(1240px,calc(100%-24px))] space-y-10 md:w-[min(1240px,calc(100%-40px))]">
          {recommendationCategories.map((category) => {
            const Icon = category.icon;

            return (
              <section key={category.id}>
                <div className="mb-5 flex items-center gap-4">
                  <div className="inline-flex rounded-full border border-line/60 bg-surface/80 p-3 text-sageDeep shadow-panel">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h2 className="font-display text-[2rem] leading-[1.02] tracking-[-0.03em] text-goldAccent">
                    {category.title}
                  </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {category.items.map((item) => (
                    <article
                      key={item.title}
                      className="rounded-[1.7rem] border border-line/60 bg-surface/80 p-6 shadow-panel"
                    >
                      <h3 className="font-display text-[1.5rem] leading-[1.03] tracking-[-0.03em] text-textPrimary">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-textMuted">{item.description}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex items-center gap-2 text-[0.76rem] uppercase tracking-[0.16em] text-goldAccent"
                        >
                          Mehr erfahren
                          <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                        </a>
                      ) : null}
                    </article>
                  ))}
                </div>
              </section>
            );
          })}

          <p className="text-center text-sm leading-7 text-textMuted">
            Einige Links können Affiliate-Links sein. Die Seite ist als ruhige, persönliche
            Empfehlungsliste gestaltet und nicht als aggressive Verkaufsfläche.
          </p>
        </div>
      </section>
    </>
  );
}
