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

export const solisProducts = [
  {
    slug: 'green-medley',
    title: 'Solis Green Medley',
    image: '/images/shop/solis-green-medley.jpg',
    href: 'https://ww1.lifeplus.com/de/de/product-details/5369/solis-green-medley',
    description: '27 nährstoffreiche Zutaten aus grünem Blattgemüse, Adaptogenen und Pflanzenextrakten. Bio, vegan, glutenfrei.',
    content: `Green Medley bringt 27 sorgfältig ausgewählte Zutaten in ein einziges Pulver. Chlorella, Spirulina und Moringa liefern die grüne Basis. Dazu kommen Adaptogene wie Maca und Rosenwurz, die den Körper bei Stress unterstützen, ohne ihn aufzuputschen.

Das Pulver schmeckt frisch und leicht fruchtig, weil gefriergetrocknete Himbeeren und Ananas mit drin sind. Ein gestrichener Messlöffel in Wasser oder Saft reicht. Wer grüne Superfoods noch nicht kennt, fängt am besten mit einer halben Portion an und steigert langsam.

Alle Zutaten stammen aus biologischem Anbau. Kein Zucker, keine künstlichen Süßstoffe, nur ein Hauch Stevia. Vegan und glutenfrei.`,
    details: `Art.-Nr. 5369 / 171 g — 30 Portionen

Durchschnittsgehalt pro Portion (5,7 g):
Chlorella-Alge 660 mg, Moringa-Blattpulver 660 mg, Spirulina-Alge 660 mg, Himbeer-Fruchtpulver 540 mg, Maca-Wurzelpulver 300 mg, Spinat-Blattpulver 300 mg, Aloe Vera-Blattpulver 240 mg, Grünkohl-Blattpulver 240 mg, Brunnenkresse-Blattpulver 240 mg, Zitronenfruchtpulver 210 mg, Ananas-Fruchtpulver 180 mg, Klettenlabkraut 150 mg, Ackerschachtelhalm 150 mg, Löwenzahn-Blattpulver 120 mg, Gotu Kola 120 mg, Rosenwurz-Wurzelpulver 120 mg, Brokkolisprossenpulver 114 mg, Knotentangpulver 60 mg, Schisandra-Beere 60 mg, Ingwerpulver 30 mg, Mariendistelsamen 30 mg, Hagebutten-Fruchtpulver 30 mg, Zitronengras-Blattpulver 18 mg, Petersilie-Blattpulver 18 mg.

Verzehrsempfehlung: Einmal täglich einen gestrichenen 15-cc-Messlöffel (5,7 g) in 120–180 ml Wasser oder ein anderes Getränk einrühren.

Nahrungsergänzungsmittel sind kein Ersatz für eine ausgewogene und abwechslungsreiche Ernährung und gesunde Lebensweise. Die angegebene empfohlene tägliche Verzehrsmenge darf nicht überschritten werden.`,
  },
  {
    slug: 'golden-milk',
    title: 'Solis Golden Milk',
    image: '/images/shop/solis-golden-milk.jpg',
    href: 'https://ww1.lifeplus.com/de/de/product-details/5379/solis-golden-milk',
    description: 'Ayurvedisch inspiriert: Kurkuma, Ashwagandha, Shiitake und wärmende Gewürze in Kokosmilch. Vegan, glutenfrei.',
    content: `Golden Milk ist von der ayurvedischen Tradition inspiriert: Kurkuma, Ashwagandha, Shiitake und wärmende Gewürze wie Zimt, Ingwer und Kardamom in einer Basis aus Kokosmilchpulver.

Das Ergebnis ist ein Getränk, das beruhigt, wärmt und den Abend weicher macht. Einen Messlöffel in warme Milch oder eine pflanzliche Alternative einrühren. Wer mag, gibt einen Löffel Honig dazu.

Golden Milk lässt sich auch in Smoothies, Joghurt oder sogar Currys mischen. Ashwagandha und Glycin unterstützen Entspannung und erholsamen Schlaf. Das Pulver enthält Kurkuma und kann Kleidung verfärben.

Vegan und glutenfrei. Kein Bio-Siegel, weil die enthaltene Aminosäure Glycin eine Bio-Zertifizierung ausschließt.`,
    details: `Art.-Nr. 5379 / 182 g — 30 Portionen

Durchschnittsgehalt pro Portion (6,0 g):
Kokosmilchpulver 1800 mg, Gelbwurz-Wurzelpulver 1200 mg, Glycin 900 mg, Lúcuma-Fruchtpulver 900 mg, Shiitake-Pilzpulver 474 mg, Ashwagandha-Wurzelextrakt 300 mg, Zimtrindenpulver 240 mg, Ingwerwurzelpulver 120 mg, Kardamomsamenpulver 60 mg, Muskatsamenpulver 30 mg, Schwarzes Pfefferpulver 3 mg.

Verzehrsempfehlung: Einmal täglich einen gestrichenen 15-cc-Messlöffel (6,0 g) in 120–180 ml warme Milch oder Milchalternative einrühren.

Nahrungsergänzungsmittel sind kein Ersatz für eine ausgewogene und abwechslungsreiche Ernährung und gesunde Lebensweise. Die angegebene empfohlene tägliche Verzehrsmenge darf nicht überschritten werden.`,
  },
  {
    slug: 'cacao-boost',
    title: 'Solis Cacao Boost',
    image: '/images/shop/solis-cacao-boost.jpg',
    href: 'https://ww1.lifeplus.com/de/de/product-details/5371/solis-cacao-boost',
    description: 'Bio-Rohkakao mit Maca, Reishi und Chaga. Schokoladig, nahrhaft, ohne Zucker. Bio, vegan, glutenfrei.',
    content: `Cacao Boost kombiniert ecuadorianischen Bio-Rohkakao mit Maca, Reishi-Pilz, Chaga und Zimt. Das Ergebnis schmeckt schokoladig und vollmundig, ganz ohne zugesetzten Zucker.

Wer abends Lust auf Schokolade hat, kann stattdessen einen Messlöffel in warme Milch rühren. Reishi und Chaga sind Vitalpilze, die in der Naturheilkunde seit Jahrhunderten geschätzt werden. Maca bringt milde Energie ohne Koffein.

Das Pulver passt auch in Smoothies, Porridge oder Joghurt. Alle Zutaten aus biologischem Anbau. Vegan und glutenfrei.`,
    details: `Art.-Nr. 5371 / 210 g — 30 Portionen

Durchschnittsgehalt pro Portion (7,0 g):
Rohkakaopulver 2800 mg, Maca-Wurzelpulver 1260 mg, Chagapilz-Pulver 980 mg, Reishipilz-Pulver 980 mg, Lucuma-Fruchtpulver 700 mg, Zimtrindenpulver 280 mg.

Verzehrsempfehlung: Einmal täglich einen gestrichenen 15-cc-Messlöffel (7,0 g) in 120–180 ml heißes Wasser, Milch oder Milchalternative einrühren.

Nahrungsergänzungsmittel sind kein Ersatz für eine ausgewogene und abwechslungsreiche Ernährung und gesunde Lebensweise. Die angegebene empfohlene tägliche Verzehrsmenge darf nicht überschritten werden.`,
  },
  {
    slug: 'purple-flash',
    title: 'Solis Purple Flash',
    image: '/images/shop/solis-purple-flash.jpg',
    href: 'https://ww1.lifeplus.com/de/de/product-details/5370/solis-purple-flash',
    description: 'Geballte Beerenkraft: Aronia, Açaí, Heidelbeere, Maqui, Granatapfel und mehr. Bio, vegan, glutenfrei.',
    content: `Purple Flash packt elf der nährstoffreichsten Beeren und Früchte in einen Teelöffel: Aronia, Açaí, Heidelbeere, Maqui, Granatapfel, Brombeere, schwarze Johannisbeere, Holunder, Baobab und Traubensaft. Dazu kommt Löwenmähne, ein Vitalpilz, der für seine unterstützende Wirkung auf die geistige Klarheit bekannt ist.

Der Geschmack ist beerig und natürlich, ohne Süßstoffe oder künstliche Aromen. Einfach in Wasser, einen Smoothie oder Joghurt rühren.

Beeren stehen bei Superfrüchten ganz oben, weil ihre intensiven Farben auf einen hohen Gehalt an Antioxidantien hinweisen. Purple Flash macht es leicht, diese Vielfalt täglich mitzunehmen. Alle Zutaten aus biologischem Anbau. Vegan und glutenfrei.`,
    details: `Art.-Nr. 5370 / 192 g — 30 Portionen

Durchschnittsgehalt pro Portion (6,4 g):
Heidelbeerpulver 1450 mg, Aroniabeerenpulver 870 mg, Granatapfel-Pulver 870 mg, Schwarze Johannisbeere 580 mg, Holunder-Saftpulver 580 mg, Maqui-Beerenpulver 580 mg, Löwenmähnenpilz-Pulver 300 mg, Açaí-Beerenpulver 290 mg, Baobab-Fruchtfleischpulver 290 mg, Brombeerpulver 290 mg, Traubensaftpulver 290 mg.

Verzehrsempfehlung: Einmal täglich einen gestrichenen 15-cc-Messlöffel (6,4 g) in 120–180 ml Wasser oder ein anderes Getränk einrühren.

Nahrungsergänzungsmittel sind kein Ersatz für eine ausgewogene und abwechslungsreiche Ernährung und gesunde Lebensweise. Die angegebene empfohlene tägliche Verzehrsmenge darf nicht überschritten werden.`,
  },
];
