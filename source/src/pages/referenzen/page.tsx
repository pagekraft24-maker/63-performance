import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import SEOHead, { buildBreadcrumbSchema } from '@/components/feature/SEOHead';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import CookieBanner from '@/pages/home/components/CookieBanner';

const galleryImages = [
  { src: '/media/6558279a-8af0-41f8-bb97-b853f74c4ed1-c5b9f0.webp', label: 'Mercedes GLC 250' },
  { src: '/media/67a5d042-038f-412f-bc3e-ad19d1057bd3-291d04.webp', label: 'Leistungsoptimierung' },
  { src: '/media/de2af193-21c5-4347-a4ed-96a01587604b-35bb43.webp', label: 'Leistungssteigerung' },
  { src: '/media/95089194-f95b-478f-88ac-c3f80afe802a-375adc.webp', label: '63-Performance' },
  { src: '/media/dsc01602-dce091.webp', label: 'Seligenstadt Tuning' },
  { src: '/media/2c4f80b1fa2329f20902acc63f52bfd4-676969.webp', label: 'BMW M4' },
  { src: '/media/bb087a00793239af1230377442f405bb-032aee.webp', label: 'Audi RS6' },
  { src: '/media/ae4020971e00c4a6fc527d66124a58e3-f1df67.webp', label: 'Mercedes-AMG C63' },
];

// Fallback, damit keine Galerie-Kachel jemals leer bleibt, falls ein Bild nicht laden kann.
const FALLBACK_IMAGE =
  '/media/img-2888-bbe408.webp';

const stats = [
  { value: '200+', label: 'Zufriedene Kunden' },
  { value: '98%', label: 'Kundenzufriedenheit' },
  { value: '+30%', label: 'Maximale Mehrleistung' },
  { value: '100%', label: 'Individuelle Software' },
];

const soundchecks: { name: string; img: string; url: string; type: 'vimeo' | 'video' }[] = [
  {
    name: 'BMW M4 Cabrio',
    img: '/media/img-2888-bbe408.webp',
    url: '/media/whatsapp-video-2026-07-30-at-14-31-05-5f2ab0.mp4',
    type: 'video',
  },
  {
    name: 'Maserati v8 Grancoupe',
    img: '/media/bildschirmfoto-2026-07-18-um-18-16-21-79c9b8.webp',
    url: '/media/whatsapp-video-2026-07-30-at-14-01-16-10d7ae.mp4',
    type: 'video',
  },
  {
    name: 'Audi RS6',
    img: '/media/bb087a00793239af1230377442f405bb-032aee.webp',
    url: '/media/c9325-web-1080p-f5d496.mp4',
    type: 'video',
  },
  {
    name: 'Mercedes-AMG C63',
    img: '/media/ae4020971e00c4a6fc527d66124a58e3-f1df67.webp',
    url: '/media/whatsapp-video-2026-07-30-at-14-00-02-2384e9.mp4',
    type: 'video',
  },
  {
    name: 'BMW M3 Competition',
    img: '/media/dsc01602-dce091.webp',
    url: '/media/bmw-m3-soundcheck-web-b3054b.mp4',
    type: 'video',
  },
];

export default function ReferenzenPage() {
  const [activeSound, setActiveSound] = useState<{ name: string; url: string; type: 'vimeo' | 'video' } | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <div className="min-h-screen bg-background-900">
      <SEOHead
        title="Referenzen – 200+ zufriedene Kunden, echte Projekte | 63-Performance Chiptuning"
        description="Über 200 zufriedene Kunden vertrauen 63-Performance. Sehen Sie echte Chiptuning-Projekte: Mercedes GLC, BMW 328i, AMG, M, RS Modelle. Prüfstandgeprüft, individuell abgestimmt."
        keywords="Chiptuning Referenzen, Tuning Projekte, Kundenprojekte, Vorher Nachher, Seligenstadt, 63-Performance Galerie"
        canonicalUrl="https://63-performance.de/referenzen"
        structuredData={buildBreadcrumbSchema([
          { name: 'Startseite', url: 'https://63-performance.de/' },
          { name: 'Referenzen', url: 'https://63-performance.de/referenzen' },
        ])}
      />
      <Header />
      <main>
        {/* HERO */}
        <section className="relative h-[420px] md:h-[600px] w-full overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="/media/referenzen-hero-63-a887c3.webp"
              alt="63-Performance Referenzen – Fahrzeuge auf dem Prüfstand"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background-900/80 via-background-900/60 to-background-900/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-background-900/80 via-transparent to-background-900/60" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-10 max-w-4xl mx-auto">
            <div className="mb-6">
              <p className="inline-block px-4 py-1.5 border border-primary-400/60 text-primary-400 text-xs tracking-[0.4em] uppercase font-medium rounded-sm bg-primary-400/10 backdrop-blur-sm">
                Echte Projekte · Echte Leistung
              </p>
            </div>
            <h1 className="font-heading font-extrabold text-white uppercase leading-tight text-4xl md:text-5xl lg:text-6xl mb-4">
              Unsere <span className="text-primary-400">Referenzen.</span>
            </h1>
            <p className="mt-2 text-white/90 font-light leading-relaxed max-w-xl text-sm md:text-base">
              Fahrzeuge, die wir auf das nächste Level gebracht haben. Jedes Projekt ein Unikat – jedes Ergebnis messbar.
            </p>
          </div>

        </section>

        {/* SOUNDCHECKS */}
        <section className="relative bg-background-50 py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
                <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Sound Check</span>
                <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
              </div>
              <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-4">
                Hör die <span className="text-primary-400">Differenz.</span>
              </h2>
              <p className="text-white/90 font-light max-w-xl mx-auto leading-relaxed">
                Klick auf Sound Check und erlebe, wie sich das Fahrzeug anhört – vor und nach der Optimierung.
              </p>
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollBy({ left: -380, behavior: 'smooth' });
                  }
                }}
                className="hidden md:flex absolute left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 items-center justify-center rounded-full bg-background-900/80 border border-background-300/40 text-white hover:bg-primary-500 hover:border-primary-500 transition-all duration-300 cursor-pointer"
                aria-label="Vorherige Referenz"
              >
                <i className="ri-arrow-left-s-line text-xl lg:text-2xl" />
              </button>

              <button
                type="button"
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
                  }
                }}
                className="hidden md:flex absolute right-2 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 items-center justify-center rounded-full bg-background-900/80 border border-background-300/40 text-white hover:bg-primary-500 hover:border-primary-500 transition-all duration-300 cursor-pointer"
                aria-label="Nächste Referenz"
              >
                <i className="ri-arrow-right-s-line text-xl lg:text-2xl" />
              </button>

              <div
                ref={scrollRef}
                className="flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory px-1 pb-2"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {soundchecks.map((ref) => (
                  <div
                    key={ref.name}
                    className="group relative rounded-lg overflow-hidden border transition-all duration-500 card-elevated hover:border-primary-400/50 flex-shrink-0 w-[260px] sm:w-[300px] md:w-[320px] snap-center"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img loading="lazy" decoding="async"
                        src={ref.img}
                        alt={`${ref.name} – Referenzfahrzeug bei 63-Performance Chiptuning`}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent pt-20 pb-6 px-6">
                      <h3 className="text-white font-heading font-bold text-lg uppercase tracking-wide mb-4">
                        {ref.name}
                      </h3>
                      <button
                        type="button"
                        onClick={() => setActiveSound({ name: ref.name, url: ref.url, type: ref.type })}
                        className="whitespace-nowrap inline-flex items-center gap-2 px-6 py-2.5 bronze-btn text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 hover:shadow-[0_0_25px_rgba(185,27,27,0.4)] cursor-pointer"
                      >
                        <i className="ri-volume-up-line" />
                        Sound Check
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>

        {/* STATS BAND */}
        <section className="relative bg-background-50 py-14 md:py-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/3 to-transparent pointer-events-none" />
          <div className="relative w-full px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-5xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-heading bronze-gradient-text mb-2 tracking-tighter">
                    {stat.value}
                  </div>
                  <p className="text-xs md:text-sm text-white/90 font-label uppercase tracking-[0.15em] leading-relaxed max-w-[180px] mx-auto">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>

        {/* GALERIE */}
        <section className="relative bg-background-900 py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
                <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Galerie</span>
                <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
              </div>
              <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-4">
                Unsere Arbeiten <span className="text-primary-400">sprechen für sich.</span>
              </h2>
              <p className="text-white/90 font-light max-w-xl mx-auto leading-relaxed">
                Einblicke in unsere Werkstatt, unsere Projekte und die Leidenschaft, die in jedes Fahrzeug fließt.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {galleryImages.map((img, i) => (
                <div key={i} className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square">
                  <img loading="lazy" decoding="async"
                    src={img.src}
                    alt={`${img.label} – 63-Performance Chiptuning Galerie`}
                    title={`${img.label} – Chiptuning Referenzprojekt von 63-Performance in Seligenstadt`}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== FALLBACK_IMAGE) {
                        target.src = FALLBACK_IMAGE;
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>

        {/* PROCESS HIGHLIGHT */}
        <section className="relative bg-background-50 py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
                <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Unser Anspruch</span>
                <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
              </div>
              <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-4">
                Was diese Projekte <span className="text-primary-400">verbindet.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="group text-center p-6 md:p-8 rounded-lg border border-background-300/25 bg-background-700/60 hover:border-primary-400/20 transition-all duration-500">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary-400/10 border border-primary-400/20 mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-cpu-line text-2xl text-primary-400" />
                </div>
                <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-3">Maßgeschneidert</h3>
                <p className="text-foreground-600 text-sm leading-relaxed">
                  Jedes Fahrzeug erhält eine individuelle Software – abgestimmt auf Motor, Laufleistung und Kundenwunsch. Keine Standard-Lösungen.
                </p>
              </div>
              <div className="group text-center p-6 md:p-8 rounded-lg border border-background-300/25 bg-background-700/60 hover:border-primary-400/20 transition-all duration-500">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary-400/10 border border-primary-400/20 mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-shield-check-line text-2xl text-primary-400" />
                </div>
                <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-3">Sicher & Langlebig</h3>
                <p className="text-foreground-600 text-sm leading-relaxed">
                  Alle Optimierungen bewegen sich innerhalb sicherer Toleranzen. Die Original-Software wird gesichert – jederzeit rückrüstbar.
                </p>
              </div>
              <div className="group text-center p-6 md:p-8 rounded-lg border border-background-300/25 bg-background-700/60 hover:border-primary-400/20 transition-all duration-500">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary-400/10 border border-primary-400/20 mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-dashboard-2-line text-2xl text-primary-400" />
                </div>
                <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-3">Prüfstandgeprüft</h3>
                <p className="text-foreground-600 text-sm leading-relaxed">
                  Jede Optimierung wird auf dem Prüfstand verifiziert. Keine leeren Versprechungen – du siehst schwarz auf weiß, was dein Motor jetzt leistet.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>

        {/* CTA */}
        <section className="relative bg-background-900 py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/3 to-transparent pointer-events-none" />
          <div className="relative w-full px-6 md:px-10 lg:px-16 max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
              <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Jetzt starten</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
            </div>
            <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-6">
              Dein Fahrzeug<br /><span className="text-primary-400">als nächstes Projekt?</span>
            </h2>
            <p className="text-white/90 font-light max-w-xl mx-auto leading-relaxed mb-10">
              Diese Autos haben den Sprung schon gemacht. Jetzt bist du dran. Vereinbare deinen Termin und schreib mit uns das nächste Kapitel.
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
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>
      </main>

      {/* SOUNDCHECK MODAL */}
      {activeSound && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveSound(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-background-900/90 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-4xl rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveSound(null)}
              className="absolute -top-10 right-0 w-8 h-8 flex items-center justify-center rounded-full text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Schließen"
            >
              <i className="ri-close-line text-2xl" />
            </button>
            <div className="relative aspect-video bg-background-900">
              {activeSound.type === 'vimeo' ? (
                <iframe
                  src={activeSound.url}
                  title={`${activeSound.name} – Sound Check`}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                />
              ) : (
                <video
                  src={activeSound.url}
                  controls
                  autoPlay
                  className="absolute inset-0 w-full h-full"
                />
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
    </div>
  );
}