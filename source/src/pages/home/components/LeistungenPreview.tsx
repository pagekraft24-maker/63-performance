import { Link } from 'react-router-dom';

const leistungen = [
  { icon: 'ri-flashlight-line', title: 'Leistungssteigerung', desc: 'Stage 1 Softwareoptimierung für mehr PS & Nm' },
  { icon: 'ri-settings-3-line', title: 'Getriebeoptimierung', desc: 'Schnellere Schaltzeiten, bessere Performance' },
  { icon: 'ri-fire-line', title: 'Pop & Bangs', desc: 'Soundoptimierung mit Schubblubbern' },
  { icon: 'ri-leaf-line', title: 'ECO-Tuning', desc: 'Verbrauchsoptimierung ohne Leistungsverlust' },
  { icon: 'ri-filter-off-line', title: 'AdBlue / DPF / AGR Off', desc: 'Hardware- & Softwarelösungen' },
  { icon: 'ri-code-s-slash-line', title: 'Codierung & Launch Control', desc: 'Freischaltung versteckter Fahrzeugfunktionen' },
];

export default function LeistungenPreview() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/media/dyno-workshop-63-01-da0270.webp"
          alt="Fahrzeug auf dem Dyno-Prüfstand – Leistungsmessung bei 63-Performance"
          title="63-Performance – Professionelle Leistungsoptimierung"
          className="full-bleed-img"
        />
        <div className="absolute inset-0 bg-background-900/85"></div>
      </div>

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16">
        <div className="text-center mb-14 md:mb-18">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground-100 uppercase tracking-tighter mb-4">
            Unsere Leistungen<span className="heat-gradient-text">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {leistungen.map((item) => (
            <Link
              key={item.title}
              to="/leistungen"
              className="group glass-card rounded-xl p-6 md:p-7 flex flex-col cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg heat-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className={`${item.icon} text-lg text-foreground-50`}></i>
              </div>
              <h3 className="text-base md:text-lg font-heading text-foreground-100 uppercase tracking-wider mb-2">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-foreground-600 font-label leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-auto pt-4 flex items-center gap-1 text-xs font-label text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-wider">
                Details <i className="ri-arrow-right-line"></i>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/leistungen"
            className="glow-btn inline-flex items-center gap-2 heat-gradient text-sm font-label text-foreground-50 px-8 py-3 rounded-full uppercase tracking-wider font-semibold whitespace-nowrap cursor-pointer"
          >
            Alle Leistungen ansehen
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}