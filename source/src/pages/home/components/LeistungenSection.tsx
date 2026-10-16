import { Link } from 'react-router-dom';

const leistungen = [
  {
    icon: 'ri-flashlight-line',
    title: 'Leistungssteigerung',
    desc: 'Stage 1 Softwareoptimierung für spürbar mehr PS und Drehmoment.',
    href: '/leistungen',
  },
  {
    icon: 'ri-settings-3-line',
    title: 'Getriebeoptimierung',
    desc: 'Schnellere Schaltzeiten und optimiertes Ansprechverhalten.',
    href: '/leistungen',
  },
  {
    icon: 'ri-fire-line',
    title: 'Pop & Bangs',
    desc: 'Soundoptimierung mit Schubblubbern für den richtigen Motorsport-Klang.',
    href: '/leistungen',
  },
];

export default function LeistungenSection() {
  return (
    <section id="leistungen" className="relative bg-background-900 py-24 md:py-32 overflow-hidden" aria-labelledby="leistungen-titel">
      {/* Top transition fade from elevated → base */}
      <div className="absolute top-0 left-0 w-full h-[160px] bg-gradient-to-b from-background-50 to-transparent pointer-events-none" />
      {/* Top white divider */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgNDBMNDAgMEgwTDQwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNDODk1NkMiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')]" />
      <div className="relative w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
            <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Was wir anbieten</span>
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
          </div>
          <h2 id="leistungen-titel" className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-4">
            Unsere <span className="text-primary-400">Leistungen</span>
          </h2>
          <p className="text-foreground-200 font-light max-w-xl mx-auto leading-relaxed">
            Chiptuning, Softwareoptimierung und mehr – wir unterstützen dich bei deiner Entscheidung!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {leistungen.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="card-accent-hover relative group rounded-lg p-6 md:p-8 border cursor-pointer transition-all duration-700 block border-primary-400/30 bg-background-400/80 hover:border-primary-400 hover:shadow-[0_0_20px_rgba(185,27,27,0.25)]"
              role="listitem"
            >
              <div className="absolute top-0 left-0 w-16 h-16 rounded-tl-lg bg-gradient-to-br from-primary-400/10 to-transparent transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
              <div className="w-14 h-14 flex items-center justify-center rounded-md mb-6 transition-all duration-300 bg-background-300/60">
                <i className={`${item.icon} text-2xl transition-colors duration-300 text-foreground-400 group-hover:text-primary-400`} />
              </div>
              <h3 className="font-bold uppercase tracking-widest text-base mb-4 transition-colors duration-300 text-white group-hover:text-primary-400">
                {item.title}
              </h3>
              <p className="text-foreground-500 text-sm leading-relaxed">{item.desc}</p>
              <span className="absolute bottom-4 right-4 text-primary-400 transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                <i className="ri-arrow-right-line text-lg" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/leistungen"
            className="whitespace-nowrap inline-block px-10 py-3.5 border border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 hover:shadow-[0_0_25px_rgba(185,27,27,0.4)] cursor-pointer"
          >
            Alle Leistungen ansehen
          </Link>
        </div>
      </div>
      {/* Bottom white divider */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </section>
  );
}