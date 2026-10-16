const vorteile = [
  {
    icon: 'ri-speed-line',
    title: 'Spürbar mehr Leistung',
    desc: 'Bis zu 30% mehr PS und Nm durch optimierte Motorsteuerung – das Ergebnis fühlst du sofort.',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Sicher & langlebig',
    desc: 'Alle Anpassungen bleiben innerhalb der Sicherheitsreserven deines Motors. Keine Komponentenüberlastung.',
  },
  {
    icon: 'ri-heart-pulse-line',
    title: 'Besseres Ansprechverhalten',
    desc: 'Sofortige Gasannahme und linearer Leistungsaufbau – dein Fahrzeug fühlt sich agiler und direkter an.',
  },
  {
    icon: 'ri-leaf-line',
    title: 'Verbrauchsoptimierung möglich',
    desc: 'Mit ECO-Tuning senken wir bei gleichzeitiger Leistungssteigerung gezielt den Kraftstoffverbrauch.',
  },
  {
    icon: 'ri-arrow-go-back-line',
    title: 'Rücksetzbar auf Original',
    desc: 'Deine Original-Software wird gesichert. Jederzeit zurücksetzbar – volle Flexibilität.',
  },
  {
    icon: 'ri-money-euro-circle-line',
    title: 'Günstiger als Hardware-Tuning',
    desc: 'Software statt teurer Hardware-Teile. Maximales Ergebnis bei minimalem Aufwand und Kosten.',
  },
];

export default function VorteileSection() {
  return (
    <section id="vorteile" className="relative bg-background-800 py-24 md:py-32 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400/30 to-transparent" />
      <div className="w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
            <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Die Vorteile</span>
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
          </div>
          <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-4">
            Warum <span className="text-primary-400">Chiptuning?</span>
          </h2>
          <p className="text-white/90 text-base font-light max-w-xl mx-auto leading-relaxed">
            Sechs überzeugende Gründe, warum mehr und mehr Autofahrer auf Softwareoptimierung setzen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {vorteile.map((item) => (
            <div key={item.title} className="group relative p-8 rounded-lg border transition-all duration-700 cursor-default border-background-300/25 bg-background-700/60 hover:border-primary-400/20">
              <div className="absolute top-0 left-8 h-0.5 bg-primary-400 transition-all duration-500 w-0 group-hover:w-12" />
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-md flex-shrink-0 transition-all duration-300 bg-background-600">
                  <i className={`${item.icon} text-xl transition-colors duration-300 text-foreground-400 group-hover:text-primary-400`} />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-widest uppercase mb-2 transition-colors duration-300 text-white group-hover:text-primary-400">
                    {item.title}
                  </h3>
                  <p className="text-foreground-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400/20 to-transparent" />
    </section>
  );
}