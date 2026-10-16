const galleryImages = [
  {
    src: '/media/6558279a-8af0-41f8-bb97-b853f74c4ed1-c5b9f0.webp',
    label: 'Mercedes GLC 250',
  },
  {
    src: '/media/40ab6093-a734-4823-b870-3fb71d7ebdaf-203ca8.webp',
    label: 'BMW 328i F30',
  },
  {
    src: '/media/4a7f1ef3-e487-4f33-8f9e-e3369c273999-955d63.webp',
    label: 'Referenzprojekt',
  },
  {
    src: '/media/2ff8f832-fd99-470e-a666-574a7a8bbe10-0d820a.webp',
    label: 'Chiptuning Ergebnis',
  },
  {
    src: '/media/4bcf8ecc-1496-4288-bc97-79a01ccdfb9b-94d8b2.webp',
    label: 'Tuning Projekt',
  },
  {
    src: '/media/67a5d042-038f-412f-bc3e-ad19d1057bd3-291d04.webp',
    label: 'Leistungsoptimierung',
  },
  {
    src: '/media/5f4496d4-eeac-4676-8985-73d6f1f6411e-af0d72.webp',
    label: 'Softwareoptimierung',
  },
  {
    src: '/media/51779c40-dbc1-496f-a6e0-e77ca9d92786-8d24b2.webp',
    label: 'Motorsteuerung',
  },
];

export default function GallerySection() {
  return (
    <section id="galerie" className="relative bg-background-900 py-24 md:py-32 overflow-hidden">
      <div className="w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
            <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Galerie</span>
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
          </div>
          <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-4">
            Unsere Arbeiten
            <br />
            <span className="text-primary-400">sprechen für sich.</span>
          </h2>
          <p className="text-white/90 font-light max-w-xl mx-auto leading-relaxed">
            Echte Projekte, echte Ergebnisse. Hier siehst du, was wir für unsere Kunden auf die Straße bringen.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3]">
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute inset-0 flex items-end justify-between p-4 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                <span className="text-white text-xs tracking-widest uppercase font-semibold">{img.label}</span>
                <div className="w-8 h-8 flex items-center justify-center bg-primary-400/90 rounded-full">
                  <i className="ri-zoom-in-line text-white text-sm" />
                </div>
              </div>
              <div className="absolute inset-0 border border-primary-400/0 group-hover:border-primary-400/40 rounded-lg transition-all duration-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}