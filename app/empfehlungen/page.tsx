import { ArrowRight } from 'lucide-react';
import SectionIntro from '@/components/ui/section-intro';
import { recommendationCategories } from '@/lib/collections';

export default function EmpfehlungenPage() {
  return (
    <>
      <section className="pt-10 md:pt-14">
        <div className="mx-auto w-[min(1240px,calc(100%-24px))] md:w-[min(1240px,calc(100%-40px))]">
          <div className="hero-shell rounded-[2.4rem] border border-line/60 px-6 py-10 shadow-float md:px-10 md:py-12">
            <SectionIntro
              eyebrow="Empfehlungen"
              title="Was ich selbst weiterempfehlen würde, ruhig kuratiert statt laut verkauft."
              description="Auch diese Seite ist neu inszeniert: weniger Vergleichsportal, mehr persönliche Auswahl mit klarer, ruhiger Haltung."
            />
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
                  <h2 className="font-display text-[2rem] leading-[1.02] tracking-[-0.03em] text-textPrimary">
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
                          className="mt-5 inline-flex items-center gap-2 text-[0.76rem] uppercase tracking-[0.16em] text-sageDeep"
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
