import RecipeExplorer from '@/components/sections/recipe-explorer';
import SectionIntro from '@/components/ui/section-intro';

export default function RezeptePage() {
  return (
    <>
      <section className="pt-10 md:pt-14">
        <div className="mx-auto w-[min(1240px,calc(100%-24px))] md:w-[min(1240px,calc(100%-40px))]">
          <div className="hero-shell rounded-[2.4rem] border border-line/60 px-6 py-10 shadow-float md:px-10 md:py-12">
            <SectionIntro
              eyebrow="Rezepte"
              title="Essen, das dir wirklich guttut und nicht nach Regelwerk schmeckt."
              description="Die Rezepte sind als ruhige Inspirationsfläche gedacht: alltagstauglich, freundlich aufgebaut und im gleichen Editorial-Stil wie der Rest der neuen Seite."
            />
          </div>
        </div>
      </section>

      <RecipeExplorer />

      <section className="pb-10 pt-2 md:pb-16">
        <div className="mx-auto w-[min(1240px,calc(100%-24px))] md:w-[min(1240px,calc(100%-40px))]">
          <div className="rounded-[2rem] border border-line/45 bg-sageDeep p-6 text-background shadow-panel md:p-9">
            <p className="eyebrow text-background/80 before:bg-background/50">Mehr entdecken</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[0.98] tracking-[-0.04em]">
              Rezepte, Artikel und kleine Routinen dürfen dieselbe Sprache sprechen.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-background/82">
              Genau das macht den neuen Auftritt wertiger: nicht jede Seite wirkt wie ein
              anderes Modul, sondern wie dieselbe Marke in unterschiedlichen Formaten.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
