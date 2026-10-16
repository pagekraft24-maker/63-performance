import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

interface Reference {
  name: string;
  img: string;
  url?: string;
  type: 'vimeo' | 'iframe' | 'photo' | 'video';
}

const references: Reference[] = [
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

export default function ReferenzenSection() {
  const [activeRef, setActiveRef] = useState<Reference | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative bg-background-50 py-24 md:py-32 overflow-hidden">
      {/* Top transition fade from base → elevated */}
      <div className="absolute top-0 left-0 w-full h-[160px] bg-gradient-to-b from-background-900 to-transparent pointer-events-none" />

      {/* Top glow divider */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
            <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Referenzen</span>
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
          </div>
          <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-4">
            Unsere <span className="text-primary-400">Referenzen.</span>
          </h2>
          <p className="text-foreground-200 font-light max-w-xl mx-auto leading-relaxed">
            Fahrzeuge, die wir auf das nächste Level gebracht haben. Klick auf Sound Check und höre selbst.
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
            {references.map((ref) => (
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
                    onClick={() => setActiveRef(ref)}
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

        <div className="text-center mt-10">
          <Link
            to="/referenzen"
            className="whitespace-nowrap inline-flex items-center gap-2 px-8 py-3.5 border border-[var(--brand-red)] bg-background-100/60 text-foreground-100 text-sm tracking-widest uppercase font-bold rounded-xl transition-all duration-300 hover:bg-[var(--brand-red)] hover:text-white cursor-pointer"
          >
            <i className="ri-arrow-right-line" />
            Weitere Referenzen
          </Link>
        </div>
      </div>

      {/* Bottom glow divider */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      {/* MODAL */}
      {activeRef && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveRef(null)}
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
              onClick={() => setActiveRef(null)}
              className="absolute -top-10 right-0 w-8 h-8 flex items-center justify-center rounded-full text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Schließen"
            >
              <i className="ri-close-line text-2xl" />
            </button>

            {activeRef.type === 'vimeo' ? (
              <div className="relative aspect-video bg-background-900">
                <iframe
                  src={activeRef.url}
                  title={`${activeRef.name} – Sound Check`}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                />
              </div>
            ) : activeRef.type === 'photo' ? (
              <div className="relative w-full max-h-[80vh] flex items-center justify-center bg-background-900">
                <img loading="lazy" decoding="async"
                  src={activeRef.img}
                  alt={`${activeRef.name} – Referenzfahrzeug bei 63-Performance Chiptuning`}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
              </div>
            ) : activeRef.type === 'video' ? (
              <div className="relative aspect-video bg-background-900">
                <video
                  src={activeRef.url}
                  controls
                  autoPlay
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            ) : (
              <div className="relative w-full bg-background-900">
                <iframe
                  src={activeRef.url}
                  title={`${activeRef.name} – Sound Check`}
                  className="w-full h-[70vh] md:h-[75vh]"
                  frameBorder="0"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}