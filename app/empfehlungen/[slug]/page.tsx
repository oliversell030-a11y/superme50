'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ChevronDown, ExternalLink } from 'lucide-react';
import { solisProducts } from '@/lib/collections';
import { notFound } from 'next/navigation';

export default function SolisProductPage({ params }: { params: { slug: string } }) {
  const product = solisProducts.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <>
      <section className="pt-10 md:pt-14">
        <div className="mx-auto w-[min(1240px,calc(100%-24px))] md:w-[min(1240px,calc(100%-40px))]">
          <Link
            href="/empfehlungen"
            className="mb-6 inline-flex items-center gap-2 text-[0.76rem] uppercase tracking-[0.16em] text-goldAccent"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            Zurück zu Empfehlungen
          </Link>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-line/60 bg-surface/80 shadow-panel">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-6"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="eyebrow">Solis Superfoods</p>
              <h1 className="mt-3 font-display text-[2.4rem] leading-[1.02] tracking-[-0.03em] text-goldAccent md:text-[3rem]">
                {product.title}
              </h1>
              <p className="mt-5 text-sm leading-7 text-textMuted">{product.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {['Vegan', 'Glutenfrei', '30 Portionen'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line/60 bg-surface/80 px-4 py-1.5 text-[0.72rem] uppercase tracking-[0.14em] text-textMuted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-goldAccent px-8 py-3.5 text-[0.82rem] font-medium tracking-[0.04em] text-white shadow-panel transition-opacity hover:opacity-90"
              >
                Im Shop ansehen
                <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto w-[min(960px,calc(100%-24px))] md:w-[min(960px,calc(100%-40px))]">
          <div className="prose-custom">
            {product.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="mb-5 text-[0.95rem] leading-7 text-textSecondary">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 rounded-[1.6rem] border border-line/60 bg-surface/80 shadow-panel">
            <button
              onClick={() => setDetailsOpen(!detailsOpen)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <span className="font-display text-[1.2rem] tracking-[-0.02em] text-textPrimary">
                Zutaten &amp; Nährwerte
              </span>
              <ChevronDown
                className={`h-5 w-5 text-textMuted transition-transform ${detailsOpen ? 'rotate-180' : ''}`}
                strokeWidth={1.5}
              />
            </button>
            {detailsOpen && (
              <div className="border-t border-line/60 px-6 py-5">
                {product.details.split('\n\n').map((block, i) => (
                  <p key={i} className="mb-4 text-[0.85rem] leading-7 text-textMuted last:mb-0">
                    {block}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
