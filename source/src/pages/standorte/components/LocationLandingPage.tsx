import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import CookieBanner from '@/pages/home/components/CookieBanner';
import SEOHead, { buildBreadcrumbSchema, buildFAQSchema } from '@/components/feature/SEOHead';

export interface LocationService {
  icon: string;
  name: string;
  desc: string;
}

export interface LocationPageData {
  city: string;
  slug: string;
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  geoRegion: string;
  geoPlacename: string;
  geoLat: number;
  geoLng: number;
  heroImage: string;
  heroBadge: string;
  heroTitleAccent: string;
  heroSubtitle: string;
  introHeading: string;
  introParagraphs: string[];
  driveTime: string;
  distance: string;
  mapEmbed: string;
  mapTitle: string;
  nearbyAreas: string[];
  crossLink: { label: string; href: string };
  faqs: { question: string; answer: string }[];
}

const services: LocationService[] = [
  { icon: 'ri-flashlight-line', name: 'Stage 1 Softwareoptimierung', desc: 'Bis zu 30 % mehr Leistung und Drehmoment – individuell auf Ihren Motor abgestimmt.' },
  { icon: 'ri-settings-3-line', name: 'Getriebeoptimierung', desc: 'Schnellere Schaltzeiten und höhere Drehmomentgrenzen für maximale Beschleunigung.' },
  { icon: 'ri-fire-line', name: 'Pop & Bangs', desc: 'Markanter Auspuffsound beim Schalten und Gaswegnehmen – sportlich programmiert.' },
  { icon: 'ri-leaf-line', name: 'ECO-Tuning', desc: 'Kraftstoffverbrauch senken bei gleichzeitiger Leistungssteigerung – ideal für Vielfahrer.' },
  { icon: 'ri-terminal-box-line', name: 'Codierung', desc: 'Versteckte Fahrzeugfunktionen aktivieren – von TV-Free bis zu individuellen Lichtmodi.' },
  { icon: 'ri-rocket-2-line', name: 'Launch Control', desc: 'Optimierte Startbeschleunigung für maximale Performance vom ersten Meter an.' },
];

const priceList = [
  { name: 'Softwareoptimierung (Stage 1)', price: 'ab 379,00 €', icon: 'ri-cpu-line' },
  { name: 'Getriebeoptimierung', price: 'ab 249,00 €', icon: 'ri-settings-3-line' },
  { name: 'Schubabschaltung (Pop & Bangs)', price: 'ab 329,00 €', icon: 'ri-sound-module-line' },
  { name: 'ECO-Tuning', price: 'ab 299,00 €', icon: 'ri-leaf-line' },
  { name: 'AMG / M / RS / GTI Stage 1', price: '449,00 €', icon: 'ri-car-line' },
];

const stats = [
  { value: '30%', label: 'mehr Leistung' },
  { value: '100%', label: 'reversibel' },
  { value: '500+', label: 'zufriedene Kunden' },
];

export default function LocationLandingPage({ data }: { data: LocationPageData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const locationBusinessSchema = {
    '@type': 'Service',
    '@id': `${data.canonicalUrl}#service`,
    name: `Chiptuning ${data.city}`,
    serviceType: 'Chiptuning & Softwareoptimierung',
    description: data.description,
    url: data.canonicalUrl,
    provider: {
      '@type': 'AutomotiveBusiness',
      '@id': 'https://63-performance.de/#business',
      name: '63-Performance',
      telephone: '+491759601217',
      url: 'https://63-performance.de',
      image: 'https://63-performance.de/og-image.jpg',
      priceRange: '€€',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Ferdinand-Porsche-Straße 6',
        addressLocality: 'Seligenstadt',
        postalCode: '63500',
        addressRegion: 'Hessen',
        addressCountry: 'DE',
      },
    },
    areaServed: [data.city, ...data.nearbyAreas].map((a) => ({ '@type': 'City', name: a })),
  };

  return (
    <div className="min-h-screen bg-background-900">
      <SEOHead
        title={data.title}
        description={data.description}
        keywords={data.keywords}
        canonicalUrl={data.canonicalUrl}
        geoRegion={data.geoRegion}
        geoPlacename={data.geoPlacename}
        structuredData={{
          '@context': 'https://schema.org',
          '@graph': [
            locationBusinessSchema,
            buildFAQSchema(data.faqs),
            buildBreadcrumbSchema([
              { name: 'Startseite', url: 'https://63-performance.de/' },
              { name: 'Standorte', url: 'https://63-performance.de/standorte' },
              { name: `Chiptuning ${data.city}`, url: data.canonicalUrl },
            ]),
          ],
        }}
      />
      <Header />
      <main>
        {/* HERO */}
        <section className="relative h-[420px] md:h-[600px] w-full overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src={data.heroImage}
              alt={`Chiptuning ${data.city} – 63-Performance`}
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background-900/50 via-background-900/30 to-background-900/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-background-900/40 via-transparent to-background-900/40" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-10 max-w-4xl mx-auto w-full">
            <div className="mb-6">
              <p className="inline-block px-4 py-1.5 border border-primary-400/60 text-primary-400 text-xs tracking-[0.4em] uppercase font-medium rounded-sm bg-primary-400/10 backdrop-blur-sm">
                {data.heroBadge}
              </p>
            </div>
            <h1 className="font-heading font-extrabold text-white uppercase leading-tight text-3xl md:text-5xl lg:text-6xl mb-4">
              Chiptuning <span className="text-primary-400">{data.city}</span>
            </h1>
            <p className="mt-2 text-white/90 font-light leading-relaxed max-w-xl text-sm md:text-base">
              {data.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/sinanimilot/beratung"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="whitespace-nowrap px-8 py-3.5 bronze-btn text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 hover:shadow-[0_0_25px_rgba(185,27,27,0.4)] cursor-pointer inline-block"
              >
                Termin buchen
              </a>
              <Link
                to="/preise"
                className="whitespace-nowrap px-8 py-3.5 border border-white/30 text-white text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 hover:border-primary-400 hover:text-primary-400 cursor-pointer inline-block"
              >
                Preise ansehen
              </Link>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="relative bg-background-900 py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="w-full px-6 md:px-10 lg:px-16 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
              <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">In Ihrer Nähe</span>
            </div>
            <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-8">
              {data.introHeading}
            </h2>
            <div className="space-y-5">
              {data.introParagraphs.map((p, i) => (
                <p key={i} className="text-white/90 text-sm md:text-base leading-relaxed prose-prestige">
                  {p}
                </p>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="card-elevated rounded-xl p-6 text-center !border-white/20">
                  <span className="heat-gradient-text text-3xl md:text-4xl font-heading font-extrabold block mb-2">
                    {s.value}
                  </span>
                  <span className="text-foreground-600 text-xs tracking-widest uppercase">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>

        {/* LEISTUNGEN */}
        <section className="relative bg-background-50 py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
                <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Leistungen</span>
                <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
              </div>
              <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-4">
                Unsere Leistungen für <span className="text-primary-400">{data.city}</span>
              </h2>
              <p className="text-white/90 font-light max-w-xl mx-auto leading-relaxed">
                Vom sportlichen GTI bis zum hochgezüchteten AMG – wir optimieren Ihr Fahrzeug individuell.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s) => (
                <div key={s.name} className="card-elevated rounded-xl p-6 md:p-7 group !border-white/20 hover:!border-primary-400/40 transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-background-700 border border-background-300/20 mb-5">
                    <i className={`${s.icon} text-xl text-white/70 group-hover:text-primary-400 transition-colors duration-300`} />
                  </div>
                  <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-3">{s.name}</h3>
                  <p className="text-foreground-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>

        {/* PREISE */}
        <section className="relative bg-background-900 py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
                <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Preise</span>
                <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
              </div>
              <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-4">
                Transparente <span className="text-primary-400">Preise</span>
              </h2>
              <p className="text-white/90 font-light max-w-xl mx-auto leading-relaxed">
                Inklusive Programmierung, Prüfstandslauf und Testfahrt.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {priceList.map((item) => (
                <div key={item.name} className="card-elevated rounded-xl p-6 md:p-7 group flex flex-col items-center text-center gap-3 !border-white/20">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-background-700 border border-background-300/20 flex-shrink-0">
                    <i className={`${item.icon} text-xl text-white/70 group-hover:text-primary-400 transition-colors duration-300`} />
                  </div>
                  <h3 className="text-white font-bold text-xs tracking-widest uppercase leading-snug">{item.name}</h3>
                  <span className="heat-gradient-text text-2xl md:text-3xl tracking-tight font-heading font-extrabold">{item.price}</span>
                </div>
              ))}
              <div className="card-elevated rounded-xl p-6 md:p-7 flex flex-col items-center justify-center text-center gap-3 !border-primary-400/30 bg-primary-400/5">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-400/10 border border-primary-400/20 flex-shrink-0">
                  <i className="ri-chat-3-line text-xl text-primary-400" />
                </div>
                <h3 className="text-white font-bold text-xs tracking-widest uppercase">Individuelles Angebot</h3>
                <p className="text-foreground-600 text-xs leading-relaxed">
                  Jedes Fahrzeug ist anders. Fordern Sie Ihr persönliches Angebot an.
                </p>
                <Link
                  to="/kontakt"
                  className="whitespace-nowrap mt-1 px-6 py-2.5 bronze-btn text-xs tracking-widest uppercase font-bold rounded transition-all duration-300 cursor-pointer inline-block"
                >
                  Angebot anfordern
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>

        {/* ANFAHRT */}
        <section className="relative bg-background-50 py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary-400" />
                  <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Anfahrt</span>
                </div>
                <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl mb-6">
                  Schnell erreichbar <span className="text-primary-400">von {data.city}</span>
                </h2>
                <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6">
                  Unser Standort in Seligenstadt liegt nur {data.driveTime} von {data.city} entfernt
                  und ist bequem über die Autobahn erreichbar. {data.distance}.
                </p>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-md bg-background-700 border border-background-300/20 flex-shrink-0">
                    <i className="ri-time-line text-primary-400 text-lg" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Fahrzeit</p>
                    <p className="text-foreground-600 text-sm">{data.driveTime}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 mb-8">
                  <div className="w-10 h-10 flex items-center justify-center rounded-md bg-background-700 border border-background-300/20 flex-shrink-0">
                    <i className="ri-map-pin-line text-primary-400 text-lg" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Standort</p>
                    <p className="text-foreground-600 text-sm">Ferdinand-Porsche-Straße 6, 63500 Seligenstadt</p>
                  </div>
                </div>
                <a
                  href="https://calendly.com/sinanimilot/beratung"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="whitespace-nowrap inline-flex items-center gap-2 px-8 py-3.5 bronze-btn text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 hover:shadow-[0_0_25px_rgba(185,27,27,0.4)] cursor-pointer"
                >
                  <i className="ri-calendar-check-line" />
                  Termin buchen
                </a>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="w-full h-72 md:h-96 rounded-lg overflow-hidden border border-background-300/20">
                  <iframe
                    src={data.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={data.mapTitle}
                    className="grayscale-[30%]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>

        {/* EINZUGSGEBIET */}
        <section className="relative bg-background-900 py-16 md:py-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="w-full px-6 md:px-10 lg:px-16 max-w-5xl mx-auto text-center">
            <h3 className="text-white font-heading font-extrabold uppercase text-xl md:text-2xl mb-8">
              Wir sind für Sie da in <span className="text-primary-400">{data.city} und Umgebung</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {data.nearbyAreas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 rounded-full bg-background-700 border border-background-300/20 text-foreground-400 text-xs tracking-wide"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-10">
              <Link
                to={data.crossLink.href}
                className="text-primary-400 hover:text-primary-300 text-sm tracking-widest uppercase font-medium inline-flex items-center gap-2 transition-colors duration-300 cursor-pointer"
              >
                {data.crossLink.label}
                <i className="ri-arrow-right-line" />
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>

        {/* FAQ */}
        <section className="relative bg-background-50 py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="w-full px-6 md:px-10 lg:px-16 max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
                <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">FAQ</span>
                <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
              </div>
              <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl mb-4">
                Häufige <span className="text-primary-400">Fragen</span>
              </h2>
            </div>

            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
                <div key={i} className="card-elevated rounded-lg overflow-hidden !border-white/20">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  >
                    <span className="text-white font-semibold text-sm md:text-base">{faq.question}</span>
                    <i
                      className={`ri-add-line text-primary-400 text-xl transition-transform duration-300 flex-shrink-0 ${
                        openFaq === i ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === i ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p className="px-6 pb-6 text-foreground-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>

        {/* CTA */}
        <section className="relative bg-background-900 py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent pointer-events-none" />
          <div className="relative w-full px-6 md:px-10 lg:px-16 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-400/10 border border-primary-400/20 mb-8">
              <i className="ri-flashlight-line text-2xl text-primary-400" />
            </div>
            <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-6">
              Bereit für mehr <span className="text-primary-400">Leistung?</span>
            </h2>
            <p className="text-white/90 font-light max-w-xl mx-auto leading-relaxed mb-10">
              Vereinbaren Sie jetzt Ihren Termin und erleben Sie professionelles Chiptuning aus {data.city} – nur
              {data.driveTime} entfernt.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/sinanimilot/beratung"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="whitespace-nowrap px-10 py-4 bronze-btn text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 hover:shadow-[0_0_30px_rgba(185,27,27,0.6)] hover:scale-105 cursor-pointer inline-block"
              >
                Termin buchen
              </a>
              <a
                href="https://wa.me/491759601217"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="whitespace-nowrap flex items-center gap-2 px-8 py-3.5 whatsapp-btn-outline text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 cursor-pointer"
              >
                <i className="ri-whatsapp-line" />
                WhatsApp
              </a>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
    </div>
  );
}