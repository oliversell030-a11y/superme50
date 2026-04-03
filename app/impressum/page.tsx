import SectionIntro from '@/components/ui/section-intro';

export default function ImpressumPage() {
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto w-[min(860px,calc(100%-24px))] space-y-8 md:w-[min(860px,calc(100%-40px))]">
        <div className="rounded-[2rem] border border-line/60 bg-surface/85 p-6 shadow-float md:p-8">
          <SectionIntro eyebrow="Impressum" title="Anbieterkennzeichnung" />
          <p className="mt-4 text-sm leading-7 text-textMuted">Stand: 3. April 2026</p>
        </div>

        <div className="space-y-5 rounded-[2rem] border border-line/60 bg-surface/82 p-6 shadow-panel md:p-8">
          <div>
            <h2 className="font-display text-[1.7rem] tracking-[-0.03em] text-textPrimary">
              Angaben nach § 5 TMG
            </h2>
            <div className="mt-3 space-y-1 text-sm leading-7 text-textMuted">
              <p>Christiane Neubert</p>
              <p>[Straße und Hausnummer ergänzen]</p>
              <p>[PLZ und Ort ergänzen]</p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-[1.7rem] tracking-[-0.03em] text-textPrimary">
              Kontakt
            </h2>
            <div className="mt-3 space-y-1 text-sm leading-7 text-textMuted">
              <p>E-Mail: hallo@superme50.de</p>
              <p>[Telefonnummer optional ergänzen]</p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-[1.7rem] tracking-[-0.03em] text-textPrimary">
              Verbraucherstreitbeilegung
            </h2>
            <div className="mt-3 space-y-3 text-sm leading-7 text-textMuted">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:
                https://ec.europa.eu/consumers/odr/
              </p>
              <p>
                Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren
                vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-[#cfa756]/30 bg-[#fff4d9]/55 p-5 text-sm leading-7 text-[#7d5d10]">
          Hinweis: Diese Seite enthält weiterhin Platzhalter für Anschrift und optionale
          Kontaktdaten und muss vor Veröffentlichung vervollständigt werden.
        </div>
      </div>
    </section>
  );
}
