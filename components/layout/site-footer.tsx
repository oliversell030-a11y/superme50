import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="pb-10 pt-6">
      <div className="mx-auto w-[min(1240px,calc(100%-24px))] md:w-[min(1240px,calc(100%-40px))]">
        <div className="grid gap-8 rounded-[2rem] border border-line/70 bg-surface/80 p-6 shadow-panel backdrop-blur md:grid-cols-[1.2fr_0.8fr_0.8fr] md:p-8">
          <div>
            <div className="flex flex-col gap-1">
              <span className="font-display text-[1.45rem] tracking-[-0.04em] text-textPrimary">
                SuperMe50+
              </span>
              <span className="text-[0.72rem] uppercase tracking-[0.18em] text-textMuted">
                Natürlich. Stark. Erwachsen.
              </span>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-7 text-textMuted">
              Diese Editorial-Version ist bewusst ruhiger, persönlicher und magaziniger gebaut.
              Sie soll sich wie eine echte Marke anfühlen und nicht wie ein austauschbares
              Wellness-Template.
            </p>
          </div>

          <div>
            <h2 className="text-[0.78rem] uppercase tracking-[0.18em] text-textPrimary">
              Bereiche
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-textMuted">
              <li><Link href="/vitalitaet">Vitalität & Energie</Link></li>
              <li><Link href="/schlaf">Schlaf & Entspannung</Link></li>
              <li><Link href="/nervensystem">Nervensystem</Link></li>
              <li><Link href="/beweglichkeit">Beweglichkeit</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-[0.78rem] uppercase tracking-[0.18em] text-textPrimary">
              Mehr
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-textMuted">
              <li><Link href="/blog">Magazin</Link></li>
              <li><Link href="/rezepte">Rezepte</Link></li>
              <li><Link href="/empfehlungen">Empfehlungen</Link></li>
              <li><Link href="/impressum">Impressum</Link></li>
              <li><Link href="/datenschutz">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        <p className="mt-4 text-center text-[0.74rem] uppercase tracking-[0.14em] text-textMuted">
          © 2026 SuperMe50+ Christiane Neubert
        </p>
      </div>
    </footer>
  );
}
