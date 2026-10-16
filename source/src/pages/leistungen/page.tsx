import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import CookieBanner from '@/pages/home/components/CookieBanner';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEOHead, { buildServiceSchema, buildBreadcrumbSchema } from '@/components/feature/SEOHead';

interface Leistung {
  id: string;
  title: string;
  icon: string;
  img: string;
  detailImg: string;
  desc: string;
  features: string[];
}

const leistungen: Leistung[] = [
  {
    id: 'leistungssteigerung',
    title: 'Leistungssteigerung',
    icon: 'ri-flashlight-line',
    img: '/media/3d6c23df-f48c-4e76-b055-54aa611781cd-0c9bd2.webp',
    detailImg: '/media/unbenannt-13-f0202d.webp',
    desc: 'Eine qualitative Leistungsoptimierung für Ihr Fahrzeug. Wir erhöhen nicht nur den Fahrspaß, sondern können auch den Kraftstoffverbrauch reduzieren. Alle Veränderungen sind sicher und langlebig.',
    features: ['Bis zu 30% mehr Leistung', 'Individuelle Softwareanpassung', 'Sicher innerhalb der Toleranzen', 'Original-Software wird gesichert'],
  },
  {
    id: 'getriebeoptimierung',
    title: 'Getriebeoptimierung',
    icon: 'ri-settings-3-line',
    img: '/media/422c10bc-f4d8-4c4d-963d-7b90c56bbb6f-8fac2b.webp',
    detailImg: '/media/unbenannt-14-a6778c.webp',
    desc: 'Schnellere Schaltzeiten, höhere Drehmomentgrenzen und optimierte Launch-Control-Parameter für maximale Beschleunigung.',
    features: ['Schnellere Gangwechsel', 'Höhere Drehmomentgrenzen', 'Verbesserte Launch Control', 'Individuelle Schaltstrategie'],
  },
  {
    id: 'pop-bangs',
    title: 'Pop & Bangs',
    icon: 'ri-fire-line',
    img: '/media/9dc64ec8-e5d3-4113-b436-6529fac46b90-5c9980.webp',
    detailImg: '/media/unbenannt-15-51a66f.webp',
    desc: 'Sportlicher Sound aus dem Auspuff beim Schalten oder Gaswegnehmen. Der markante Knall verleiht Ihrem Fahrzeug eine kraftvolle Akustik.',
    features: ['Aggressiver Auspuffsound', 'Beim Schalten & Gaswegnehmen', 'Sicher programmiert', 'Schaltbare Varianten möglich'],
  },
  {
    id: 'eco-tuning',
    title: 'ECO-Tuning',
    icon: 'ri-leaf-line',
    img: '/media/58fcae3f-38f4-4bdb-aa6d-bf98648e83d6-80a72d.webp',
    detailImg: '/media/unbenannt-16-5cb217.webp',
    desc: 'Reduzieren Sie den Kraftstoffverbrauch bei gleichzeitiger Leistungssteigerung. Ideal für Vielfahrer und Flotten.',
    features: ['Weniger Verbrauch', 'Mehr Leistung gleichzeitig', 'Ideal für Vielfahrer', 'Langlebige Optimierung'],
  },
  {
    id: 'adblue-off',
    title: 'AdBlue Off',
    icon: 'ri-drop-line',
    img: '/media/1f500432-c510-4787-8a9d-db2a494afbbb-dcab5f.webp',
    detailImg: '/media/unbenannt-16-1-ca1426.webp).png',
    desc: 'Deaktivierung des AdBlue-Systems für Dieselfahrzeuge. Keine lästigen Störungen mehr und reduzierte Wartungskosten.',
    features: ['Keine AdBlue-Störungen', 'Reduzierte Wartungskosten', 'Fehlercodes entfernt', 'Für Diesel-Fahrzeuge'],
  },
  {
    id: 'start-stop-off',
    title: 'Start/Stop Off',
    icon: 'ri-stop-circle-line',
    img: '/media/3a8cea55-7e53-49b6-a2bd-1d8530dd0433-d4374f.webp',
    detailImg: '/media/unbenannt-17-16db0e.webp',
    desc: 'Dauerhafte Deaktivierung der Start-Stopp-Automatik. Ihr Motor läuft kontinuierlich – kein ständiges An- und Ausgehen mehr.',
    features: ['Keine Start-Stopp-Unterbrechung', 'Dauerhaft deaktiviert', 'Komfortabler im Stadtverkehr', 'Schonender für den Anlasser'],
  },
  {
    id: 'codierung',
    title: 'Codierung',
    icon: 'ri-terminal-box-line',
    img: '/media/3bd40e12-256d-4920-bc4b-49afe9e3dd66-0b666d.webp',
    detailImg: '/media/unbenannt-18-b501f1.webp',
    desc: 'Aktivierung versteckter Fahrzeugfunktionen – von TV-Free über digitale Tacho-Anzeigen bis hin zu individualisierten Lichtmodi.',
    features: ['TV-Free beim Fahren', 'Digitale Tacho-Anzeigen', 'Individualisierte Lichtmodi', 'Viele weitere Funktionen'],
  },
  {
    id: 'launch-control',
    title: 'Launch Control',
    icon: 'ri-rocket-2-line',
    img: '/media/d201f22f-a8b6-4f72-a50e-334c15f816b3-91a50d.webp',
    detailImg: '/media/unbenannt-19-925d2d.webp',
    desc: 'Optimierte Startbeschleunigung für maximale Performance vom ersten Meter an. Perfekt für den perfekten Start beim Ampelrennen.',
    features: ['Maximale Startbeschleunigung', 'Optimale Traktion', 'Für Rennstrecke & Straße', 'Individuell einstellbar'],
  },
  {
    id: 'dpf-off',
    title: 'DPF Off',
    icon: 'ri-filter-off-line',
    img: '/media/ae9cac41-f66b-4174-9dad-16528409ef26-7e0122.webp',
    detailImg: '/media/unbenannt-20-238410.webp',
    desc: 'Deaktivierung des Dieselpartikelfilters. Keine teuren DPF-Regenerationen und weniger Wartungsaufwand für Ihren Diesel.',
    features: ['Keine teuren Regenerationen', 'Weniger Wartungsaufwand', 'Fehlercodes entfernt', 'Für Diesel-Fahrzeuge'],
  },
  {
    id: 'agr-off',
    title: 'AGR Off',
    icon: 'ri-shut-down-line',
    img: '/media/fd2498f2-d084-41fa-a687-1505dd2448ee-dec692.webp',
    detailImg: '/media/unbenannt-21-eaced8.webp',
    desc: 'Deaktivierung der Abgasrückführung für mehr Leistung und weniger Verschmutzung im Ansaugtrakt. Sauberer Motor, mehr Power.',
    features: ['Mehr Leistung', 'Sauberer Ansaugtrakt', 'Weniger Verschmutzung', 'Fehlercodes entfernt'],
  },
];

export default function LeistungenPage() {
  const [active, setActive] = useState<string | null>(null);
  const [zoomedImg, setZoomedImg] = useState<string | null>(null);
  const selected = leistungen.find((l) => l.id === active);

  return (
    <div className="min-h-screen bg-background-900">
      <SEOHead
        title="Chiptuning Leistungen – Softwareoptimierung, Getriebeoptimierung & Codierung | 63-Performance"
        description="Alle Chiptuning-Leistungen von 63-Performance: Stage 1 Leistungssteigerung, Getriebeoptimierung, Pop & Bangs, ECO-Tuning, AdBlue Off, Start/Stop Off, Codierung, Launch Control, DPF & AGR Off. Premium in Seligenstadt."
        keywords="Chiptuning Leistungen, Softwareoptimierung, Getriebeoptimierung, Pop Bangs, ECO-Tuning, Codierung, Seligenstadt"
        canonicalUrl="https://63-performance.de/leistungen"
        structuredData={{
          '@context': 'https://schema.org',
          '@graph': [
            buildServiceSchema(leistungen.map(l => ({ name: l.title, description: l.desc }))),
            buildBreadcrumbSchema([
              { name: 'Startseite', url: 'https://63-performance.de/' },
              { name: 'Leistungen', url: 'https://63-performance.de/leistungen' },
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
              src="/media/generated-image-july-30-2026-10-13am-a70ca8.webp"
              alt="63-Performance Leistungen"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background-900/40 via-background-900/30 to-background-900/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-background-900/30 via-transparent to-background-900/20" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-10 max-w-4xl mx-auto">
            <div className="mb-6">
              <p className="inline-block px-4 py-1.5 border border-primary-400/60 text-primary-400 text-xs tracking-[0.4em] uppercase font-medium rounded-sm bg-primary-400/10 backdrop-blur-sm">
                Chiptuning · Softwareoptimierung · Codierung
              </p>
            </div>
            <h1 className="font-heading font-extrabold text-white uppercase leading-tight text-4xl md:text-5xl lg:text-6xl mb-4">
              Unsere <span className="text-primary-400">Leistungen.</span>
            </h1>
            <p className="mt-2 text-white/90 font-light leading-relaxed max-w-xl text-sm md:text-base">
              Wir bieten eine qualitative Leistungsoptimierung für dein Fahrzeug. Mehr Fahrspaß, reduzierter Verbrauch – sicher und langlebig.
            </p>
          </div>

        </section>

        {/* LEISTUNGEN GRID */}
        <section className="relative bg-background-50 py-24 md:py-32 overflow-hidden">
          {/* Top transition fade from base → elevated */}
          <div className="absolute top-0 left-0 w-full h-[160px] bg-gradient-to-b from-background-900 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
                <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Unsere Leistungen</span>
                <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
              </div>
              <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-4">
                Für mehr <span className="text-primary-400">Fahrspaß.</span>
              </h2>
              <p className="text-white/90 font-light max-w-xl mx-auto leading-relaxed">
                Klicke auf eine Leistung, um mehr Details zu erfahren.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
              {leistungen.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className="group relative rounded-lg overflow-hidden border transition-all duration-500 cursor-pointer border-primary-400/40 bg-background-700/60 hover:border-primary-400 hover:shadow-[0_0_20px_rgba(185,27,27,0.2)] text-left"
                >
                  <div className="aspect-square p-6 md:p-8 flex items-center justify-center bg-black">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-background-300/10 group-hover:bg-primary-400/10 transition-all duration-500">
                      <i className={`${item.icon} text-white text-2xl md:text-3xl group-hover:text-primary-400 transition-colors duration-300`} />
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background-900 via-background-900/80 to-transparent pt-16 pb-4 px-4 flex items-center justify-center">
                    <h3 className="text-white font-bold text-xs md:text-sm tracking-widest uppercase group-hover:text-primary-400 transition-colors duration-300 text-center">
                      {item.title}
                    </h3>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-primary-400/0 group-hover:bg-primary-400/20 transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <i className="ri-arrow-right-up-line text-primary-400 text-sm" />
                  </div>
                </button>
              ))}
            </div>

            {/* ECO-TUNING HIGHLIGHT KARTE → eigene Seite */}
            <div className="mt-14 md:mt-16 max-w-4xl mx-auto">
              <Link
                to="/eco-tuning"
                className="group block rounded-lg border border-primary-400/40 bg-background-700/60 hover:border-primary-400 hover:shadow-[0_0_25px_rgba(185,27,27,0.18)] transition-all duration-500 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 p-6 md:p-8">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary-400/10 border border-primary-400/20 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-leaf-line text-2xl text-primary-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-primary-400 text-xs tracking-[0.3em] uppercase font-medium block mb-2">
                      Eigene Seite · Neu
                    </span>
                    <h3 className="text-white font-heading font-bold text-lg md:text-xl uppercase tracking-wide mb-2">
                      Eco-Tuning für PKW, Sportwagen, LKW &amp; Baumaschinen
                    </h3>
                    <p className="text-foreground-300 text-sm leading-relaxed">
                      Weniger Verbrauch, mehr Drehmoment – für Sportwagen, PKW, Transporter, LKW, Traktoren und Baumaschinen. Berechne deine monatliche Ersparnis direkt auf der neuen Seite.
                    </p>
                  </div>
                  <span className="whitespace-nowrap self-stretch md:self-center text-center px-7 py-3.5 bronze-btn text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(185,27,27,0.4)]">
                    Mehr erfahren
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>

        {/* DETAIL MODAL */}
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setActive(null)}
          >
            <div className="absolute inset-0 bg-background-900/80 backdrop-blur-sm" />
            <div
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg border bg-background-700 border-background-300/30 p-6 md:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full border border-background-300/30 text-white/90 hover:text-primary-400 hover:border-primary-400/40 transition-all duration-300 cursor-pointer"
                aria-label="Schließen"
              >
                <i className="ri-close-line text-xl" />
              </button>

              <div className="mb-8">
                <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Details</span>
                <h3 className="text-white font-heading font-extrabold uppercase text-2xl md:text-3xl mt-2">
                  {selected.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="relative rounded-lg overflow-hidden bg-background-800 p-6 flex items-center justify-center cursor-zoom-in group/img" onClick={() => setZoomedImg(selected.detailImg)}>
                  <img loading="lazy" decoding="async"
                    src={selected.detailImg}
                    alt={`${selected.title} Detail`}
                    className="w-full h-full object-contain max-h-[300px] group-hover/img:scale-105 transition-transform duration-300"
                    loading="eager"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-background-900/80 flex items-center justify-center">
                      <i className="ri-zoom-in-line text-white text-lg" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-white/90 text-sm leading-relaxed mb-6">
                    {selected.desc}
                  </p>
                  <ul className="space-y-3">
                    {selected.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm">
                        <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary-400/10 flex-shrink-0 mt-0.5">
                          <i className="ri-check-line text-primary-400 text-xs" />
                        </span>
                        <span className="text-foreground-400">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  {selected.id === 'eco-tuning' && (
                    <Link
                      to="/eco-tuning"
                      className="mt-6 inline-flex items-center gap-2 self-start px-6 py-3 bronze-btn text-xs tracking-widest uppercase font-bold rounded transition-all duration-300 hover:shadow-[0_0_25px_rgba(185,27,27,0.4)] cursor-pointer"
                    >
                      <i className="ri-leaf-line" />
                      Zur Eco-Tuning Seite
                    </Link>
                  )}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-background-300/20 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://calendly.com/sinanimilot/beratung"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="whitespace-nowrap flex-1 text-center px-8 py-3.5 bronze-btn text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 hover:shadow-[0_0_25px_rgba(185,27,27,0.4)] cursor-pointer inline-block"
                >
                  Termin buchen
                </a>
                <a
                  href="https://wa.me/491759601217"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="whitespace-nowrap flex-1 text-center flex items-center justify-center gap-2 px-8 py-3.5 whatsapp-btn-outline text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 cursor-pointer"
                >
                  <i className="ri-whatsapp-line" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}

        {/* BILD LIGHTBOX */}
        {zoomedImg && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            onClick={() => setZoomedImg(null)}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
            <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <img loading="lazy" decoding="async"
                src={zoomedImg}
                alt="Vergrößerte Detailansicht"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setZoomedImg(null)}
                className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center rounded-full bg-background-900/80 hover:bg-background-800 border border-background-300/30 text-white/90 hover:text-primary-400 transition-all duration-300 cursor-pointer"
                aria-label="Schließen"
              >
                <i className="ri-close-line text-xl" />
              </button>
            </div>
          </div>
        )}

        {/* CTA */}
        <section className="relative bg-background-900 py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/3 to-transparent pointer-events-none" />
          <div className="relative w-full px-6 md:px-10 lg:px-16 max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
              <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Jetzt starten</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
            </div>
            <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-6">
              Bereit für deine <span className="text-primary-400">Optimierung?</span>
            </h2>
            <p className="text-white/90 font-light max-w-xl mx-auto leading-relaxed mb-10">
              Vereinbare jetzt einen Termin und erlebe, was echte Leistungsoptimierung bedeutet. Wir freuen uns auf dein Projekt.
            </p>
            <a
              href="https://calendly.com/sinanimilot/beratung"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="whitespace-nowrap px-10 py-4 bronze-btn text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 hover:shadow-[0_0_30px_rgba(185,27,27,0.6)] hover:scale-105 cursor-pointer inline-block"
            >
              Termin buchen
            </a>
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