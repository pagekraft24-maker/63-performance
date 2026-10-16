export default function HowItWorks() {
  return (
    <section className="relative bg-background-50 py-20 md:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="w-full px-6 md:px-10 lg:px-16 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
            <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Prinzip</span>
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
          </div>
          <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl">
            So funktioniert Eco-Tuning
          </h2>
        </div>

        <div className="space-y-6">
          <p className="prose-prestige text-foreground-300 text-base md:text-lg leading-relaxed">
            Beim Eco-Tuning werden die Kennfelder für Einspritzung und Ladedruck im Motorsteuergerät angepasst. Das maximale Drehmoment liegt dadurch schon bei niedrigeren Drehzahlen an.
          </p>
          <p className="prose-prestige text-foreground-300 text-base md:text-lg leading-relaxed">
            Das Fahrzeug kann früher hochschalten und Steigungen in höheren Gängen fahren. Der Motor arbeitet häufiger in seinem effizienten Bereich – und verbraucht weniger.
          </p>
          <p className="prose-prestige text-foreground-300 text-base md:text-lg leading-relaxed">
            Je nach Fahrzeug und Fahrprofil liegt die Ersparnis meist zwischen 5 und 15 %. Im Durchschnitt sind 8 bis 10 % realistisch.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </section>
  );
}