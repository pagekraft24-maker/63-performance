import { Link } from 'react-router-dom';

const priceItems = [
  { name: 'Softwareoptimierung (Stage 1)', price: 'ab 379,00 €', icon: 'ri-cpu-line' },
  { name: 'Schubabschaltung (Pop & Bangs)', price: 'ab 329,00 €', icon: 'ri-sound-module-line' },
  { name: 'ECO-Tuning', price: 'ab 299,00 €', icon: 'ri-leaf-line' },
  { name: 'AdBlue Lösungen', price: 'ab 249,00 €', icon: 'ri-drop-line' },
  { name: 'DPF / AGR Lösungen', price: 'ab 229,00 €', icon: 'ri-filter-off-line' },
  { name: 'Getriebeoptimierung', price: 'ab 249,00 €', icon: 'ri-settings-3-line' },
];

export default function PreisePreview() {
  return (
    <section className="relative bg-background-900 py-24 md:py-32 overflow-hidden">
      {/* Top transition fade from elevated → base */}
      <div className="absolute top-0 left-0 w-full h-[160px] bg-gradient-to-b from-background-50 to-transparent pointer-events-none" />
      {/* Top glow divider */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
            <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Preise</span>
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
          </div>
          <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-4">
            Was kostet <span className="text-primary-400">Chiptuning?</span>
          </h2>
          <p className="text-white/90 font-light max-w-xl mx-auto leading-relaxed">
            Alle Preise verstehen sich inklusive Programmierung, Prüfstandslauf und Testfahrt.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-10">
          {priceItems.map((item) => (
            <div
              key={item.name}
              className="card-elevated rounded-xl p-6 group flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 flex items-center justify-center rounded-md bg-background-600 border border-background-300/20 flex-shrink-0">
                  <i className={`${item.icon} text-base text-white/70 group-hover:text-[var(--brand-red-text)] transition-colors duration-300`} />
                </div>
                <h3 className="text-white font-bold text-xs md:text-sm tracking-widest uppercase truncate">
                  {item.name}
                </h3>
              </div>
              <span className="heat-gradient-text text-lg md:text-xl tracking-tight whitespace-nowrap flex-shrink-0">
                {item.price}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-foreground-600 text-sm mb-5">
            Jedes Fahrzeug ist individuell – für Performance-Modelle gelten spezielle Preise.
          </p>
          <Link
            to="/preise"
            className="whitespace-nowrap inline-flex items-center gap-2 px-8 py-3 bronze-btn text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 hover:shadow-[0_0_25px_rgba(185,27,27,0.4)] cursor-pointer"
          >
            Alle Preise ansehen
            <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </section>
  );
}