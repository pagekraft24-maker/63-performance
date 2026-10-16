import LocationLandingPage, { LocationPageData } from '@/pages/standorte/components/LocationLandingPage';

const data: LocationPageData = {
  city: 'Offenbach am Main',
  slug: 'offenbach-am-main',
  title: 'Chiptuning Offenbach am Main – Stage 1, Getriebe & ECO-Tuning | 63-Performance',
  description:
    'Professionelles Chiptuning in Offenbach am Main bei 63-Performance. Stage 1 Softwareoptimierung, Getriebeoptimierung & ECO-Tuning ab 379€. Nur ~20 Min von Offenbach entfernt.',
  keywords:
    'Chiptuning Offenbach am Main, Tuning Offenbach, Softwareoptimierung Offenbach, Getriebeoptimierung Offenbach, ECO-Tuning Offenbach',
  canonicalUrl: 'https://63-performance.de/chiptuning-offenbach-am-main',
  geoRegion: 'DE-HE',
  geoPlacename: 'Offenbach am Main',
  geoLat: 50.1028,
  geoLng: 8.7704,
  heroImage:
    '/media/location-offenbach-hero-814c5f.webp',
  heroBadge: 'Chiptuning · Softwareoptimierung',
  heroTitleAccent: 'Offenbach am Main',
  heroSubtitle:
    'Premium-Softwareoptimierung für AMG, M, RS und GTI – nur rund 20 Minuten von Offenbach am Main entfernt.',
  introHeading: 'Ihr Chiptuning-Spezialist für Offenbach am Main',
  introParagraphs: [
    'Sie suchen professionelles Chiptuning in Offenbach am Main? Bei 63-Performance erhalten Sie erstklassige Softwareoptimierung direkt vor Ihrer Haustür. Unser Standort in Seligenstadt liegt nur rund 20 Autominuten von Offenbach entfernt und ist über die B45 und A3 schnell erreichbar – die kürzeste Verbindung für alle Autofahrer aus Offenbach am Main und Umgebung.',
    'Als spezialisierter Anbieter für Chiptuning Offenbach am Main optimieren wir Fahrzeuge aller Marken und Leistungsklassen. Ob Stage 1 Leistungssteigerung, Getriebeoptimierung, Pop & Bangs oder ECO-Tuning: Jede Software wird individuell auf Ihren Motor abgestimmt. Das Ergebnis sind spürbar mehr Leistung, mehr Drehmoment und ein Tuning-Erlebnis, das begeistert.',
    'Transparente Preise, saubere Arbeit und messbare Ergebnisse machen uns zur ersten Wahl für Autofahrer aus Offenbach am Main und dem gesamten Rhein-Main-Gebiet. Von der Diagnose über die Softwareanpassung bis zur Testfahrt begleiten wir Sie persönlich – damit Ihr Fahrzeug genau das leistet, was Sie sich wünschen.',
  ],
  driveTime: 'ca. 20 Minuten',
  distance: 'Die Strecke umfasst rund 20 Kilometer.',
  mapEmbed: 'https://maps.google.com/maps?saddr=Offenbach%20am%20Main&daddr=Ferdinand-Porsche-Stra%C3%9Fe%206%2C%2063500%20Seligenstadt&t=&z=10&output=embed',
  mapTitle: 'Route: Offenbach am Main nach Seligenstadt',
  nearbyAreas: [
    'Offenbach am Main',
    'Bürgel',
    'Bieber',
    'Rumpenheim',
    'Mühlheim am Main',
    'Heusenstamm',
    'Obertshausen',
    'Rodgau',
    'Hanau',
    'Frankfurt am Main',
  ],
  crossLink: {
    label: 'Chiptuning Frankfurt am Main',
    href: '/chiptuning-frankfurt-am-main',
  },
  faqs: [
    {
      question: 'Wie weit ist 63-Performance von Offenbach am Main entfernt?',
      answer:
        'Unser Standort in Seligenstadt liegt nur rund 20 Autominuten von Offenbach am Main entfernt – über die B45 und A3 schnell und unkompliziert erreichbar.',
    },
    {
      question: 'Welche Fahrzeuge können in Offenbach am Main gechippt werden?',
      answer:
        'Wir optimieren Fahrzeuge aller Marken und Leistungsklassen – vom kompakten GTI über sportliche Diesel bis zu hochgezüchteten AMG, M, RS und Porsche-Modellen.',
    },
    {
      question: 'Wie lange dauert ein Chiptuning bei 63-Performance?',
      answer:
        'Eine Stage 1 Softwareoptimierung dauert in der Regel 1–2 Stunden inklusive Diagnose, Anpassung und Testfahrt. Umfangreichere Leistungen wie Getriebeoptimierung können etwas länger dauern.',
    },
    {
      question: 'Ist Chiptuning reversibel?',
      answer:
        'Ja. Die Originalsoftware Ihres Fahrzeugs wird vor der Optimierung gesichert und kann jederzeit wieder zurückgespielt werden.',
    },
    {
      question: 'Was kostet Chiptuning für Kunden aus Offenbach am Main?',
      answer:
        'Stage 1 Softwareoptimierung startet ab 379€, Getriebeoptimierung ab 249€ und ECO-Tuning ab 299€. Für AMG, M, RS und GTI gelten spezielle Preise. Gerne erstellen wir ein individuelles Angebot.',
    },
  ],
};

export default function OffenbachAmMainPage() {
  return <LocationLandingPage data={data} />;
}