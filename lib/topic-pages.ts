import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  Bell,
  Droplets,
  Flame,
  Heart,
  Leaf,
  Moon,
  Sparkles,
  Wind,
} from 'lucide-react';

export type TopicSlug =
  | 'vitalitaet'
  | 'schlaf'
  | 'nervensystem'
  | 'beweglichkeit'
  | 'haut-haar';

export type TopicCard = {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  bullets: string[];
};

export type TopicPageData = {
  slug: TopicSlug;
  eyebrow: string;
  title: string;
  intro: string[];
  accentLine: string;
  cards: TopicCard[];
  notes: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  reflection: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  bridge?: {
    title: string;
    copy: string;
    href: string;
    label: string;
  };
  cta: {
    title: string;
    copy: string;
  };
};

export const topicPages: Record<TopicSlug, TopicPageData> = {
  vitalitaet: {
    slug: 'vitalitaet',
    eyebrow: 'Vitalität & Energie',
    title: 'Mehr Energie für deinen Alltag, ohne dich selbst zu überfordern.',
    intro: [
      'Vitalität fühlt sich selten spektakulär an. Oft beginnt sie dort, wo der Alltag wieder leichter wird: beim Frühstück, bei einer warmen Tasse, bei einem kleinen Ritual, das dich nicht zusätzlich stresst.',
      'Hier geht es nicht um Disziplin auf Anschlag, sondern um gute Entscheidungen, die dich nähren und dir auf Dauer mehr Stabilität geben.',
    ],
    accentLine: 'Energie darf sich freundlich anfühlen.',
    cards: [
      {
        icon: Leaf,
        label: 'Ernährung',
        title: 'Essen mit Mehrwert',
        description:
          'Nicht weniger essen, sondern hilfreicher essen: mit mehr Farbe, mehr Eiweiß und einer Struktur, die dich satt statt müde macht.',
        bullets: [
          'Eiweiß bewusst über den Tag verteilen',
          'Gemüse nicht als Pflicht, sondern als Basis denken',
          'Kleine Küchenregeln statt strenger Pläne',
        ],
      },
      {
        icon: Droplets,
        label: 'Getränke',
        title: 'Getränke mit Wirkung',
        description:
          'Warme Kräutertees, ein sanfter Morgenstarter und die richtigen Begleiter am Abend verändern oft mehr, als man denkt.',
        bullets: [
          'Warmer Start statt kaltem Leerlauf',
          'Ruhige Abendgetränke als Ritual nutzen',
          'Mehr trinken, ohne ständig daran zu denken',
        ],
      },
      {
        icon: Flame,
        label: 'Küche',
        title: 'Kräuter & Gewürze als stille Helfer',
        description:
          'Rosmarin, Salbei, Ingwer oder Kurkuma wirken nicht spektakulär, aber sie geben einer Routine Tiefe und Richtung.',
        bullets: [
          'Rosmarin für Wachheit und Wärme',
          'Salbei als sanfte Begleitung in Phasen der Umstellung',
          'Gewürze lieber konstant als perfekt einsetzen',
        ],
      },
    ],
    notes: {
      eyebrow: 'Für jeden Tag',
      title: 'Kleine Stellschrauben, die sofort realistischer wirken als ein großer Neustart.',
      items: [
        'Einen Teller pro Tag bewusst einfacher und nährender gestalten.',
        'Das erste Getränk des Tages als kleines Ritual behandeln.',
        'Eine Handvoll guter Basics immer im Haus haben: Eier, Kräuter, Nüsse, Gemüse.',
        'Nicht alles ändern. Nur dort beginnen, wo es sich leicht öffnen lässt.',
      ],
    },
    reflection: {
      eyebrow: 'Gedanke dazu',
      title: 'Energie kommt selten aus Druck. Meist kommt sie aus Entlastung.',
      paragraphs: [
        'Viele Frauen versuchen, Müdigkeit mit mehr Disziplin zu beantworten. Mehr Planung. Mehr Kontrolle. Mehr Optimierung. Oft wird der Alltag dadurch aber nur noch enger.',
        'Der freundlichere Weg ist oft der wirksamere: etwas Nährendes hinzufügen, einen kleinen Rhythmus etablieren, dem Körper wieder Sicherheit geben. Genau dort entsteht neue Kraft.',
      ],
    },
    cta: {
      title: 'Noch mehr ruhige, alltagstaugliche Impulse',
      copy:
        'Im Magazin findest du weitere Artikel zu Kräutern, Schlaf, Routinen und kleinen Veränderungen mit großer Wirkung.',
    },
  },
  schlaf: {
    slug: 'schlaf',
    eyebrow: 'Schlaf & Entspannung',
    title: 'Besser schlafen, ruhiger werden und den Abend wieder als Landung erleben.',
    intro: [
      'Wenn der Körper müde ist, der Kopf aber weitermacht, fühlt sich jede Nacht wie eine kleine Prüfung an. Gerade ab 50 spielen oft mehrere Dinge zusammen: Hormone, Gewohnheiten, innere Unruhe und ein Nervensystem, das zu spät auf Pause schaltet.',
      'Diese Seite sammelt keine perfekten Lösungen, sondern einfache Hebel, die dem Abend mehr Weichheit geben.',
    ],
    accentLine: 'Schlaf beginnt selten im Bett. Er beginnt früher.',
    cards: [
      {
        icon: Moon,
        label: 'Einschlafen',
        title: 'Leichter einschlafen',
        description:
          'Der Übergang in die Nacht wird einfacher, wenn dein Körper klare Signale bekommt: jetzt darf der Tag ausklingen.',
        bullets: [
          'Ein warmes Getränk statt spätem Scrollen',
          'Licht am Abend sichtbar weicher machen',
          'Eine einzige beruhigende Routine konsequent wiederholen',
        ],
      },
      {
        icon: Sparkles,
        label: 'Durchschlafen',
        title: 'Weniger nächtliches Aufwachen',
        description:
          'Oft liegt es nicht an einer Sache, sondern an vielen kleinen Reizen. Je stiller dein Abend, desto ruhiger wird meist auch die Nacht.',
        bullets: [
          'Schlafzimmer kühler und klarer halten',
          'Spätes Koffein ehrlich beobachten',
          'Abends nicht mehr alles verarbeiten wollen',
        ],
      },
      {
        icon: Wind,
        label: 'Stressabbau',
        title: 'Den inneren Pegel senken',
        description:
          'Schlaf wird leichter, wenn du Spannung nicht erst im Bett bemerkst, sondern vorher schon etwas davon herausnimmst.',
        bullets: [
          'Kurzes Dehnen als Abend-Reset',
          'Länger aus- als einatmen',
          'Ein warmes Fußbad statt noch einer Aufgabe',
        ],
      },
    ],
    notes: {
      eyebrow: 'Sanfte Routinen',
      title: 'Drei Minuten reichen oft mehr als eine perfekte Abendroutine, die nie beginnt.',
      items: [
        'Drei Dinge notieren, die heute gut waren.',
        'Das Licht im Wohnraum eine Stunde vor dem Schlafen bewusst dimmen.',
        'Die Hand aufs Herz legen und fünf ruhige Atemzüge nehmen.',
        'Ein festes Getränk oder ein fester Duft als Einschlafsignal verwenden.',
      ],
    },
    reflection: {
      eyebrow: 'Wichtig zu wissen',
      title: 'Ruhiger Schlaf ist nicht nur ein Ziel. Er ist ein Gefühl von Sicherheit.',
      paragraphs: [
        'Wenn dein Nervensystem tagsüber zu viel hält, verarbeitet es oft nachts weiter. Deshalb helfen nicht nur Tricks zum Einschlafen, sondern alles, was dem System tagsüber mehr Ruhe und Vorhersehbarkeit gibt.',
        'Schlaf darf wieder etwas werden, dem du dich zuwendest, statt das du erzwingen musst.',
      ],
    },
    bridge: {
      title: 'Und was ist mit deinem Nervensystem?',
      copy:
        'Wenn du merkst, dass die Anspannung tiefer sitzt und sich nicht nur abends zeigt, lohnt sich der Blick auf das Nervensystem.',
      href: '/nervensystem',
      label: 'Zum Thema Nervensystem',
    },
    cta: {
      title: 'Weiterlesen im Magazin',
      copy:
        'Dort findest du weitere Ideen für ruhige Abende, Kräuterwissen und kleine Rituale, die dem Schlaf einen sanfteren Rahmen geben.',
    },
  },
  nervensystem: {
    slug: 'nervensystem',
    eyebrow: 'Nervensystem & innere Ruhe',
    title: 'Wenn dein Körper nicht mehr richtig abschaltet, braucht er nicht Härte. Er braucht Sicherheit.',
    intro: [
      'Viele Frauen beschreiben es ähnlich: Der Alltag ist eigentlich machbar, aber innerlich bleibt alles auf Spannung. Selbst in ruhigen Momenten ist da noch ein Rest von Alarm.',
      'Das ist kein persönliches Scheitern. Oft ist es einfach ein Nervensystem, das zu lange im Bereitschaftsmodus war.',
    ],
    accentLine: 'Innere Ruhe ist keine Persönlichkeit. Sie ist trainierbar.',
    cards: [
      {
        icon: Bell,
        label: 'Reizreduktion',
        title: 'Weniger Input, mehr Boden unter den Füßen',
        description:
          'Nicht alles, was Aufmerksamkeit fordert, verdient sie sofort. Weniger Reize bedeuten oft mehr innere Weite.',
        bullets: [
          'Benachrichtigungen sichtbar reduzieren',
          'Leere Momente nicht sofort füllen',
          'Zwischen Aktivität und Reaktion wieder Raum schaffen',
        ],
      },
      {
        icon: Wind,
        label: 'Atmung',
        title: 'Den Körper zuerst beruhigen',
        description:
          'Gedanken folgen oft erst dann, wenn der Körper merkt: es ist gerade sicher genug, loszulassen.',
        bullets: [
          'Länger aus- als einatmen',
          'Atmung nicht perfekt, sondern spürbar machen',
          'Kurze Pausen über den Tag verteilen',
        ],
      },
      {
        icon: Heart,
        label: 'Routinen',
        title: 'Wieder Verlässlichkeit spüren',
        description:
          'Ein Nervensystem mag keine Dauerüberraschung. Kleine, feste Momente im Tag wirken oft stärker als große Vorhaben.',
        bullets: [
          'Ein Startpunkt am Morgen',
          'Ein Mini-Ritual am Nachmittag',
          'Ein ruhiger Ausklang am Abend',
        ],
      },
    ],
    notes: {
      eyebrow: 'Das hilft wirklich',
      title: 'Kleine Pausen, die nicht dekorativ sind, sondern regulierend.',
      items: [
        'Fünf Minuten frische Luft ohne Handy.',
        'Vor dem nächsten Termin bewusst ausatmen.',
        'Einen einzigen Moment am Tag nur für den Körper reservieren.',
        'Eine feste Routine finden, die keinerlei Leistung verlangt.',
      ],
    },
    reflection: {
      eyebrow: 'Ein freundlicher Gedanke',
      title: 'Dein Körper will nicht gegen dich arbeiten. Er versucht nur, dich zu schützen.',
      paragraphs: [
        'Viele Spannungszustände sind keine Laune des Körpers, sondern eine gut gemeinte, aber überaktive Schutzreaktion. Genau deshalb hilft Strenge oft so wenig.',
        'Wenn du dem System häufiger zeigst, dass gerade nichts Dringendes passiert, lernt es Schritt für Schritt wieder, weicher zu werden.',
      ],
    },
    bridge: {
      title: 'Und nachts?',
      copy:
        'Wenn die innere Unruhe vor allem am Abend und in der Nacht spürbar ist, passt der Bereich Schlaf & Entspannung gut als nächster Schritt.',
      href: '/schlaf',
      label: 'Zu Schlaf & Entspannung',
    },
    cta: {
      title: 'Mehr zu Ruhe, Schlaf und sanften Routinen',
      copy:
        'Im Magazin sammeln sich weitere Artikel, die das Nervensystem entlasten, ohne neue Komplexität zu schaffen.',
    },
  },
  beweglichkeit: {
    slug: 'beweglichkeit',
    eyebrow: 'Beweglichkeit & Gelenke',
    title: 'Beweglich bleiben heißt nicht, mehr zu leisten. Es heißt, leichter durch den Alltag zu kommen.',
    intro: [
      'Beweglichkeit ist kein Fitnessziel für später, sondern eine Form von Freiheit im Jetzt: besser aufstehen, entspannter gehen, weniger Spannung in Schultern, Rücken und Hüfte.',
      'Gerade deshalb lohnt sich ein sanfter Ansatz, der nicht überfordert, sondern täglich ein bisschen unterstützt.',
    ],
    accentLine: 'Lieber täglich fünf Minuten als selten ein großer Anlauf.',
    cards: [
      {
        icon: Activity,
        label: 'Routinen',
        title: 'Bewegung in den Alltag weben',
        description:
          'Nicht jede hilfreiche Bewegung braucht eine Matte oder einen perfekten Plan. Oft genügt ein fester Anker im Tagesablauf.',
        bullets: [
          'Morgens Schultern, Rücken und Hüfte kurz mobilisieren',
          'Wartezeiten für kleine Dehnungen nutzen',
          'Regelmäßigkeit vor Intensität stellen',
        ],
      },
      {
        icon: Leaf,
        label: 'Gelenke',
        title: 'Geschmeidigkeit statt Leistung',
        description:
          'Gelenke mögen Wärme, fließende Bewegungen und eine ruhige Steigerung. Alles, was weich beginnt, hält oft länger.',
        bullets: [
          'Vor Bewegung sanft aufwärmen',
          'Langes Sitzen bewusst unterbrechen',
          'Kreisende Bewegungen in kleine Rituale verwandeln',
        ],
      },
      {
        icon: Heart,
        label: 'Kraft',
        title: 'Stabilität für den echten Alltag',
        description:
          'Mehr Kraft ist kein Selbstzweck. Sie unterstützt genau die Dinge, die den Tag leichter machen: tragen, steigen, länger gehen, sicher stehen.',
        bullets: [
          'Ruhige Kraftübungen zwei- bis dreimal pro Woche',
          'Aufstehen und Hinsetzen als Training nutzen',
          'Sauber und kontrolliert vor schnell und viel',
        ],
      },
    ],
    notes: {
      eyebrow: 'Alltagstipps',
      title: 'Die besten Bewegungsroutinen sehen oft unspektakulär aus und genau das ist ihre Stärke.',
      items: [
        'Morgens fünf sanfte Bewegungen für Rücken und Schultern wiederholen.',
        'Nach längeren Sitzphasen eine Minute gehen oder lockern.',
        'Eine Mini-Routine vor dem Frühstück oder nach dem Abendessen etablieren.',
        'Atmung nutzen, um Spannung nicht festzuhalten.',
      ],
    },
    reflection: {
      eyebrow: 'Worum es eigentlich geht',
      title: 'Beweglichkeit ist oft ein Gefühl von Vertrauen in den eigenen Körper.',
      paragraphs: [
        'Je mehr dein Körper wieder als verlässlich erlebt wird, desto leichter entstehen Lust auf Bewegung und ein ruhigeres Verhältnis zum Älterwerden.',
        'Es braucht dafür keine heroischen Programme. Nur eine gute Form von Wiederholung.',
      ],
    },
    cta: {
      title: 'Mehr alltagstaugliche Routinen im Magazin',
      copy:
        'Dort findest du weitere Impulse, die Vitalität, Beweglichkeit und innere Ruhe zusammen denken.',
    },
  },
  'haut-haar': {
    slug: 'haut-haar',
    eyebrow: 'Haut, Haar & Nägel',
    title: 'Pflege darf sich nach Wohlgefühl anfühlen und nicht nach einem ständigen Anti-Aging-Kampf.',
    intro: [
      'Haut, Haar und Nägel reagieren oft nicht nur auf Produkte, sondern auf Schlaf, Rhythmus, Pflegekonsistenz und innere Ruhe. Genau deshalb lohnt sich ein Blick aufs Ganze.',
      'Hier geht es um natürliche Ausstrahlung, um Beständigkeit und um den ruhigen Luxus guter Gewohnheiten.',
    ],
    accentLine: 'Weniger Druck. Mehr Pflege, die bei dir bleibt.',
    cards: [
      {
        icon: Sparkles,
        label: 'Haare',
        title: 'Mehr Fülle und Ruhe für dein Haar',
        description:
          'Nicht jede Veränderung braucht eine große Lösung. Oft hilft schon eine Mischung aus Pflege, Kopfhautroutine und ehrlicher Entlastung.',
        bullets: [
          'Kopfhaut sanft massieren',
          'Hitze und Spannung bewusst reduzieren',
          'Beständige Pflege über schnelle Effekte stellen',
        ],
      },
      {
        icon: Leaf,
        label: 'Nägel',
        title: 'Stärker, gepflegter, verlässlicher',
        description:
          'Brüchige Nägel wirken oft wie ein Nebenschauplatz, zeigen aber sehr gut, wie sehr Konstanz einen Unterschied macht.',
        bullets: [
          'Nagelhaut regelmäßig pflegen',
          'Hände im Alltag besser schützen',
          'Mineralstoffreiche Kleinigkeiten bewusst einbauen',
        ],
      },
      {
        icon: Droplets,
        label: 'Haut',
        title: 'Glow durch Beständigkeit',
        description:
          'Weniger Produkte, dafür verlässlich. Weniger Kampf, dafür mehr Feuchtigkeit, Ruhe und Schlaf.',
        bullets: [
          'Einfache Pflege morgens und abends',
          'Sonnenschutz als tägliche Basis',
          'Mehr Wasser, gute Fette und guter Schlaf',
        ],
      },
    ],
    notes: {
      eyebrow: 'Praktische Basics',
      title: 'Der eleganteste Pflegeplan ist meistens der, den du wirklich beibehältst.',
      items: [
        'Ein Pflegeprodukt weniger, aber dafür konsequent angewendet.',
        'Abends Gesicht, Nacken und Kopfhaut kurz massieren.',
        'Pflege und Ernährung nicht gegeneinander ausspielen.',
        'Schönheit lieber als Pflege denn als Korrektur betrachten.',
      ],
    },
    reflection: {
      eyebrow: 'Ein anderer Blick',
      title: 'Ausstrahlung ist oft weniger eine Frage von Perfektion als von Ruhe.',
      paragraphs: [
        'Wenn Schlaf, Flüssigkeit, Pflege und innere Balance zusammenkommen, verändert sich nicht nur das Hautbild, sondern oft die ganze Präsenz.',
        'Deshalb darf diese Seite sich um Wohlgefühl drehen und nicht um ständige Selbstoptimierung.',
      ],
    },
    cta: {
      title: 'Noch mehr Inspiration für dein Wohlgefühl',
      copy:
        'Im Magazin findest du weitere alltagstaugliche Ideen für Vitalität, Pflege und kleine Rituale mit guter Wirkung.',
    },
  },
};
