import Link from 'next/link';

const links = [
  { href: '/#themen', label: 'Themen' },
  { href: '/blog', label: 'Magazin' },
  { href: '/rezepte', label: 'Rezepte' },
  { href: '/empfehlungen', label: 'Empfehlungen' },
  { href: '/#ueber', label: 'Über Christiane' },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex w-[min(1240px,calc(100%-24px))] flex-wrap items-center justify-between gap-4 py-4 md:w-[min(1240px,calc(100%-40px))]">
        <Link href="/" className="group flex flex-col gap-1">
          <span className="font-display text-[1.35rem] tracking-[-0.04em] text-textPrimary transition-colors group-hover:text-sageDeep">
            SuperMe50+
          </span>
          <span className="text-[0.72rem] uppercase tracking-[0.18em] text-textMuted">
            Mehr du ab 50
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-textMuted">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-sageDeep">
              {link.label}
            </Link>
          ))}
          <Link
            href="/#newsletter"
            className="rounded-full border border-sageDeep/15 bg-sageDeep px-4 py-2 text-[0.74rem] uppercase tracking-[0.16em] text-background transition-transform hover:-translate-y-0.5"
          >
            Newsletter
          </Link>
        </nav>
      </div>
    </header>
  );
}
