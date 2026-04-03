import SectionIntro from '@/components/ui/section-intro';

export default function DatenschutzPage() {
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto w-[min(920px,calc(100%-24px))] space-y-8 md:w-[min(920px,calc(100%-40px))]">
        <div className="rounded-[2rem] border border-line/60 bg-surface/85 p-6 shadow-float md:p-8">
          <SectionIntro eyebrow="Datenschutz" title="Datenschutzerklärung" />
          <p className="mt-4 text-sm leading-7 text-textMuted">Stand: 2. April 2026</p>
        </div>

        <div className="space-y-8 rounded-[2rem] border border-line/60 bg-surface/82 p-6 shadow-panel md:p-8">
          <section>
            <h2 className="font-display text-[1.7rem] tracking-[-0.03em] text-textPrimary">
              1. Verantwortliche Stelle
            </h2>
            <div className="mt-3 space-y-1 text-sm leading-7 text-textMuted">
              <p>Christiane Neubert</p>
              <p>[Straße & Hausnummer einfügen]</p>
              <p>[PLZ Ort einfügen]</p>
              <p>E-Mail: hallo@superme50.de</p>
              <p>Telefon: [optional ergänzen]</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-[1.7rem] tracking-[-0.03em] text-textPrimary">
              2. Hosting & Server-Logfiles
            </h2>
            <div className="mt-3 space-y-3 text-sm leading-7 text-textMuted">
              <p>Diese Website wird über Vercel Inc. gehostet.</p>
              <p>
                Beim Besuch können technisch notwendige Server-Logfiles wie Browsertyp,
                Betriebssystem, Referrer, anonymisierte IP-Adresse sowie Datum und Uhrzeit
                des Zugriffs verarbeitet werden.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-[1.7rem] tracking-[-0.03em] text-textPrimary">
              3. Kontaktaufnahme
            </h2>
            <p className="mt-3 text-sm leading-7 text-textMuted">
              Wenn du per E-Mail Kontakt aufnimmst, werden deine Angaben zur Bearbeitung der
              Anfrage gespeichert und nicht ohne Einwilligung weitergegeben.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[1.7rem] tracking-[-0.03em] text-textPrimary">
              4. Newsletter
            </h2>
            <div className="mt-3 space-y-3 text-sm leading-7 text-textMuted">
              <p>Für den Newsletter wird Brevo verwendet.</p>
              <p>
                Mit der Anmeldung erteilst du die Einwilligung zur Verarbeitung deiner E-Mail-Adresse.
                Eine Abmeldung ist jederzeit über den Link in jeder E-Mail möglich.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-[1.7rem] tracking-[-0.03em] text-textPrimary">
              5. Deine Rechte
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-7 text-textMuted">
              <li>Recht auf Auskunft</li>
              <li>Recht auf Berichtigung</li>
              <li>Recht auf Löschung</li>
              <li>Recht auf Einschränkung der Verarbeitung</li>
              <li>Recht auf Datenübertragbarkeit</li>
              <li>Widerspruchsrecht</li>
            </ul>
          </section>
        </div>

        <div className="rounded-[1.5rem] border border-[#cfa756]/30 bg-[#fff4d9]/55 p-5 text-sm leading-7 text-[#7d5d10]">
          Rechtlicher Hinweis: Diese Seite ist weiterhin eine strukturelle Vorlage und ersetzt
          keine rechtliche Prüfung. Bitte die Platzhalter vor der Veröffentlichung ergänzen.
        </div>
      </div>
    </section>
  );
}
