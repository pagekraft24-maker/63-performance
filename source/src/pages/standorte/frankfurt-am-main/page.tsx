import LocationLandingPage, { LocationPageData } from '@/pages/standorte/components/LocationLandingPage';

const data: LocationPageData = {
  city: 'Frankfurt am Main',
  slug: 'frankfurt-am-main',
  title: 'Chiptuning Frankfurt am Main – Stage 1, Getriebe & ECO-Tuning | 63-Performance',
  description:
    'Professionelles Chiptuning in Frankfurt am Main bei 63-Performance. Stage 1 Softwareoptimierung, Getriebeoptimierung & ECO-Tuning ab 379€. Nur ~30 Min von Frankfurt entfernt.',
  keywords:
    'Chiptuning Frankfurt am Main, Tuning Frankfurt, Softwareoptimierung Frankfurt, Getriebeoptimierung Frankfurt, ECO-Tuning Frankfurt',
  canonicalUrl: 'https://63-performance.de/chiptuning-frankfurt-am-main',
  geoRegion: 'DE-HE',
  geoPlacename: 'Frankfurt am Main',
  geoLat: 50.1109,
  geoLng: 8.6821,
  heroImage:
    '/media/location-frankfurt-hero-10fb3a.webp',
  heroBadge: 'Chiptuning · Softwareoptimierung',
  heroTitleAccent: 'Frankfurt am Main',
  heroSubtitle:
    'Premium-Softwareoptimierung für AMG, M, RS und GTI – nur rund 30 Minuten von der Frankfurter Innenstadt entfernt.',
  introHeading: 'Ihr Chiptuning-Spezialist für Frankfurt am Main',
  introParagraphs: [
    'Sie suchen professionelles Chiptuning in Frankfurt am Main? Bei 63-Performance erhalten Sie maßgeschneiderte Softwareoptimierung für Ihr Fahrzeug – ohne lange Anfahrtswege. Unser Standort in Seligenstadt liegt nur rund 30 Autominuten von der Frankfurter Innenstadt entfernt und ist über die A3 und B45 schnell erreichbar. So kombinieren Sie das pulsierende Frankfurt mit erstklassiger Tuning-Kompetenz im Rhein-Main-Gebiet.',
    'Als spezialisierter Anbieter für Chiptuning Frankfurt am Main optimieren wir Fahrzeuge aller Marken und Leistungsklassen – vom sportlichen GTI bis zum hochgezüchteten AMG. Ob Stage 1 Leistungssteigerung, Getriebeoptimierung oder ECO-Tuning: Jede Software wird individuell auf Ihren Motor, Ihr Baujahr und Ihre Wünsche abgestimmt. Das Ergebnis sind spürbar mehr Leistung und Drehmoment bei maximaler Sicherheit.',
    'Transparente Preise, saubere Arbeit und messbare Ergebnisse machen uns zur ersten Wahl für Autofahrer aus Frankfurt am Main und dem gesamten Rhein-Main-Gebiet. Von der Diagnose über die Softwareanpassung bis zur Testfahrt begleiten wir Sie persönlich – damit Ihr Fahrzeug genau das leistet, was Sie sich wünschen.',
  ],
  driveTime: 'ca. 30 Minuten',
  distance: 'Die Strecke umfasst rund 35 Kilometer.',
  mapEmbed: 'https://maps.google.com/maps?saddr=Frankfurt%20am%20Main&daddr=Ferdinand-Porsche-Stra%C3%9Fe%206%2C%2063500%20Seligenstadt&t=&z=10&output=embed',
  mapTitle: 'Route: Frankfurt am Main nach Seligenstadt',
  nearbyAreas: [
    'Frankfurt am Main',
    'Innenstadt',
    'Sachsenhausen',
    'Bornheim',
    'Bockenheim',
    'Höchst',
    'Bad Vilbel',
    'Maintal',
    'Hanau',
    'Offenbach am Main',
    'Rodgau',
  ],
  crossLink: {
    label: 'Chiptuning Offenbach am Main',
    href: '/chiptuning-offenbach-am-main',
  },
  faqs: [
    {
      question: 'Wie weit ist 63-Performance von Frankfurt am Main entfernt?',
      answer:
        'Unser Standort in Seligenstadt liegt nur rund 30 Autominuten von der Frankfurter Innenstadt entfernt – über die A3 und B45 schnell und unkompliziert erreichbar.',
    },
    {
      question: 'Welche Fahrzeuge können in Frankfurt am Main gechippt werden?',
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
      question: 'Was kostet Chiptuning für Kunden aus Frankfurt am Main?',
      answer:
        'Stage 1 Softwareoptimierung startet ab 379€, Getriebeoptimierung ab 249€ und ECO-Tuning ab 299€. Für AMG, M, RS und GTI gelten spezielle Preise. Gerne erstellen wir ein individuelles Angebot.',
    },
  ],
};

export default function FrankfurtAmMainPage() {
  return <LocationLandingPage data={data} />;
}