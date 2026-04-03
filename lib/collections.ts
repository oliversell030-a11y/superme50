import { BookOpen, Brain, Heart, Moon } from 'lucide-react';
import type { RecipeCategory } from '@/lib/recipes';

export const homeManifest = [
  {
    title: 'Natürlich statt laut',
    description:
      'Keine hektischen Trendversprechen, sondern ruhige Impulse mit echter Alltagstauglichkeit.',
  },
  {
    title: 'Klein, aber wirksam',
    description:
      'Routinen, die leicht anfangen und genau dadurch über Wochen wirklich tragen.',
  },
  {
    title: 'Persönlich statt beliebig',
    description:
      'Die Seite soll sich wie eine kuratierte Stimme anfühlen und nicht wie ein Standard-Wellness-Baukasten.',
  },
];

export const homeThemes = [
  {
    href: '/schlaf',
    eyebrow: 'Schlaf & Entspannung',
    title: 'Ruhiger werden. Tiefer schlafen. Sanfter ankommen.',
    description:
      'Abendrituale, Kräuter und kleine Entlastungen für Nächte, in denen Kopf und Körper nicht gleichzeitig abschalten.',
    tone: 'dark',
  },
  {
    href: '/vitalitaet',
    eyebrow: 'Vitalität & Energie',
    title: 'Mehr Energie, ohne härter zu werden.',
    description:
      'Alltagstaugliche Ideen für Essen, Getränke und kleine Gewohnheiten, die wirklich Kraft zurückgeben.',
    tone: 'sage',
  },
  {
    href: '/beweglichkeit',
    eyebrow: 'Beweglichkeit',
    title: 'Geschmeidig bleiben.',
    description:
      'Sanfte Routinen für Gelenke, Rücken und die Art von Kraft, die dich im Alltag wirklich freier macht.',
    tone: 'soft',
  },
  {
    href: '/haut-haar',
    eyebrow: 'Haut, Haar & Nägel',
    title: 'Gepflegt, ruhig, strahlend.',
    description:
      'Schönheit als Form von Wohlgefühl und Selbstfürsorge, nicht als Druck und nicht als Anti-Aging-Kampf.',
    tone: 'cream',
  },
  {
    href: '/nervensystem',
    eyebrow: 'Nervensystem',
    title: 'Weniger innere Unruhe. Mehr bei dir.',
    description:
      'Atmung, Reizreduktion und Mikro-Pausen, die das System nach und nach aus dem Dauer-Modus holen.',
    tone: 'sage',
  },
];

export const recommendationCategories = [
  {
    id: 'buecher',
    title: 'Bücher & Lektüre',
    icon: BookOpen,
    items: [
      {
        title: 'Alltagstaugliche Gesundheitsratgeber',
        description:
          'Klare, gut lesbare Bücher über Schlaf, Hormone, Ernährung und innere Balance ohne unnötigen Alarmton.',
        href: 'https://www.thalia.de/',
      },
      {
        title: 'Rezepte für Frauen 50+',
        description:
          'Praktische Kochbücher mit einer freundlichen Mischung aus Genuss, Einfachheit und guter Struktur.',
      },
    ],
  },
  {
    id: 'tees',
    title: 'Tees & Nahrungsergänzung',
    icon: Moon,
    items: [
      {
        title: 'Beruhigende Abendtees',
        description:
          'Milde Kräutermischungen als ruhiger Abschluss des Tages, wenn Schlaf und Entspannung mehr Raum bekommen sollen.',
        href: 'https://www.yogi-tea.com/de/',
      },
      {
        title: 'Ausgewählte Mikronährstoffe',
        description:
          'Nicht wahllos, sondern bewusst und sparsam eingesetzt, wenn sie wirklich in den Alltag passen.',
      },
    ],
  },
  {
    id: 'alltag',
    title: 'Alltagshelfer',
    icon: Heart,
    items: [
      {
        title: 'Wärmflasche, Duft, Abendlicht',
        description:
          'Kleine Dinge, die einen Raum und damit oft auch den Körper schneller beruhigen als große Lösungen.',
      },
      {
        title: 'Sanfte Bewegungs-Tools',
        description:
          'Unaufgeregte Hilfen für Mobilität, Haltung und kleine Routinen zuhause.',
      },
    ],
  },
  {
    id: 'digital',
    title: 'Digitale Begleiter',
    icon: Brain,
    items: [
      {
        title: 'Geführte Atem- und Entspannungsübungen',
        description:
          'Kurze Formate, die nicht belehren, sondern dich freundlich wieder bei dir ankommen lassen.',
      },
      {
        title: 'Kursplattformen für gesundes Älterwerden',
        description:
          'Lernangebote in deinem Tempo, verständlich, motivierend und ohne übertriebene Selbstoptimierung.',
        href: 'https://www.udemy.com/',
      },
    ],
  },
];

export const recipes = [
  {
    slug: '5-natuerliche-schlaftrunks',
    category: 'Schlaf' as RecipeCategory,
    title: '5 natürliche Schlaftrunks für ruhige Abende',
    description:
      'Wärmende Getränke mit Kräutern und sanften Gewürzen, die den Übergang in die Nacht spürbar weicher machen.',
    image: '/images/posts/rosmarin-heilkraut-ab-50.jpg',
  },
  {
    slug: '100-gramm-formel',
    category: 'Vitalität' as RecipeCategory,
    title: 'Die 100-Gramm-Formel für entspannte Mahlzeiten',
    description:
      'Ein einfaches Küchenprinzip, das Struktur gibt, satt macht und ohne komplizierte Regeln auskommt.',
    image: '/media/hero-bg.jpg',
  },
  {
    slug: 'kraeutertee-fuer-balance',
    category: 'Balance' as RecipeCategory,
    title: 'Kräutertees für Klarheit, Ruhe und einen freundlichen Rhythmus',
    description:
      'Drei unkomplizierte Mischungen für Momente, in denen der Tag sanfter werden darf.',
    image: '/images/posts/rosmarin-heilkraut-ab-50-2.jpg',
  },
  {
    slug: 'hautfreundliche-kuechenroutine',
    category: 'Haut' as RecipeCategory,
    title: 'Eine hautfreundliche Küchenroutine mit guten Fetten und viel Farbe',
    description:
      'Kein Diätplan, sondern eine ruhige Auswahl an Zutaten, die Pflege auch von innen denken.',
    image: '/images/posts/rosmarin-heilkraut-ab-50.jpg',
  },
];
