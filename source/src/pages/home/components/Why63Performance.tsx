const reasons = [
  {
    icon: 'ri-team-line',
    title: 'Erfahrenes Technik-Team',
    desc: 'mit tiefem Chiptuning-Know-how.',
  },
  {
    icon: 'ri-tools-line',
    title: 'Modernste Ausrüstung',
    desc: '& erstklassige Tools.',
  },
  {
    icon: 'ri-settings-5-line',
    title: 'Individuell abgestimmte Software',
    desc: 'exakt auf dein Fahrzeug.',
  },
  {
    icon: 'ri-heart-line',
    title: 'Ehrliche Beratung',
    desc: '& maximale Kundenzufriedenheit.',
  },
];

export default function Why63Performance() {
  return (
    <section className="relative bg-background-900 py-20 md:py-28">
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>

      <div className="w-full px-6 md:px-10 lg:px-16">
        <div className="text-center mb-14 md:mb-18">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground-100 uppercase tracking-tighter leading-tight">
            Warum du dich für uns entscheiden solltest<span className="heat-gradient-text">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-5xl mx-auto">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-background-700 border border-background-300/30 flex items-center justify-center mb-5 group-hover:border-primary-500/40 group-hover:bg-primary-500/5 transition-all duration-300">
                <i className={`${reason.icon} text-xl md:text-2xl text-foreground-400 group-hover:text-primary-400 transition-colors duration-300`}></i>
              </div>
              <h3 className="text-sm md:text-base font-heading text-foreground-200 uppercase tracking-wider mb-2">
                {reason.title}
              </h3>
              <p className="text-xs md:text-sm text-foreground-600 font-label">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}