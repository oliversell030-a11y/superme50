'use client';

import { useState } from 'react';
import Image from 'next/image';
import { recipes } from '@/lib/collections';
import { recipeFilters, type RecipeCategory } from '@/lib/recipes';

export default function RecipeExplorer() {
  const [activeFilter, setActiveFilter] = useState<RecipeCategory>('Alle');

  const visibleRecipes =
    activeFilter === 'Alle'
      ? recipes
      : recipes.filter((recipe) => recipe.category === activeFilter);

  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto w-[min(1240px,calc(100%-24px))] md:w-[min(1240px,calc(100%-40px))]">
        <div className="flex flex-wrap gap-3">
          {recipeFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-[0.74rem] uppercase tracking-[0.16em] transition-colors ${
                activeFilter === filter
                  ? 'border-sageDeep bg-sageDeep text-background'
                  : 'border-line bg-surface/70 text-textMuted hover:border-sageDeep/30 hover:text-sageDeep'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {visibleRecipes.map((recipe) => (
            <article
              key={recipe.slug}
              className="overflow-hidden rounded-[1.7rem] border border-line/60 bg-surface/85 shadow-panel"
            >
              <div className="relative aspect-[1.2] overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-5">
                <p className="text-[0.72rem] uppercase tracking-[0.18em] text-sageDeep">
                  {recipe.category}
                </p>
                <h2 className="mt-3 font-display text-[1.55rem] leading-[1.02] tracking-[-0.03em] text-textPrimary">
                  {recipe.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-textMuted">{recipe.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
