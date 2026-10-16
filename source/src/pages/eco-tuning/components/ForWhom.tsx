const targets = [
  {
    icon: 'ri-roadster-line',
    title: 'Sportwagen & Performance',
    text: 'Mehr Effizienz bei gleichem Fahrspaß – auch Sportwagen und starke Motoren profitieren spürbar.',
  },
  {
    icon: 'ri-car-line',
    title: 'PKW & Alltag',
    text: 'Ob Benziner oder Diesel: Im Alltag sinken Verbrauch und Tankkosten, ohne Leistung zu verlieren.',
  },
  {
    icon: 'ri-bus-2-line',
    title: 'Transporter & Vans',
    text: 'Mehr Drehmoment bei voller Beladung und weniger Verbrauch auf jeder Tour.',
  },
  {
    icon: 'ri-truck-line',
    title: 'LKW & Sattelzüge',
    text: 'Hohe Laufleistung, hoher Verbrauch – hier wirkt jede Prozent Ersparnis besonders stark.',
  },
  {
    icon: 'ri-plant-line',
    title: 'Traktoren & Landmaschinen',
    text: 'Mehr Zugkraft bei schweren Böden und Anbaugeräten, weniger Diesel im Dauereinsatz.',
  },
  {
    icon: 'ri-tools-line',
    title: 'Baumaschinen',
    text: 'Effizienter arbeiten auf der Baustelle bei gleichbleibender Leistung.',
  },
];

export default function ForWhom() {
  return (
    <section className="relative bg-background-900 py-20 md:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="w-full px-6 md:px-10 lg:px-16 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
            <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Für wen</span>
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
          </div>
          <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl">
            Für wen Eco-Tuning geeignet ist
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {targets.map((item) => (
            <div
              key={item.title}
              className="group text-center p-6 md:p-8 rounded-lg border border-background-300/25 bg-background-700/60 hover:border-primary-400/30 transition-all duration-500"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary-400/10 border border-primary-400/20 mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <i className={`${item.icon} text-2xl text-primary-400`} />
              </div>
              <h3 className="text-white font-heading font-bold text-lg uppercase tracking-wide mb-3">
                {item.title}
              </h3>
              <p className="text-foreground-300 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </section>
  );
}