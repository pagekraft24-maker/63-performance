export default function EcoHero() {
  const scrollToCalculator = () => {
    document.getElementById('rechner')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative h-[420px] md:h-[600px] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="/media/eco-tuning-hero-63-953414.webp"
          alt="Eco-Tuning für PKW, Sportwagen, LKW, Traktoren und Baumaschinen bei 63-Performance"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-900/80 via-background-900/65 to-background-900/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-background-900/85 via-transparent to-background-900/60" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6 md:px-10 max-w-4xl mx-auto">
        <div className="mb-6">
          <p className="inline-block px-4 py-1.5 border border-primary-400/60 text-primary-400 text-xs tracking-[0.4em] uppercase font-medium rounded-sm bg-primary-400/10 backdrop-blur-sm">
            Eco-Tuning · Mehr Effizienz
          </p>
        </div>
        <h1 className="font-heading font-extrabold text-white uppercase leading-tight text-3xl md:text-5xl lg:text-6xl mb-5">
          Eco-Tuning für PKW, Sportwagen, LKW &amp; Baumaschinen
        </h1>
        <p className="mt-2 text-white/90 font-light leading-relaxed max-w-2xl text-sm md:text-base">
          Weniger Verbrauch, mehr Drehmoment im unteren Drehzahlbereich – für Sportwagen, PKW, Transporter, LKW, Traktoren und Baumaschinen. Mit einer gezielten Anpassung der Motorsoftware senkst du den Kraftstoffverbrauch deiner Fahrzeuge – ohne Umbau am Motor.
        </p>
        <button
          type="button"
          onClick={scrollToCalculator}
          className="mt-9 whitespace-nowrap px-10 py-4 bronze-btn text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 hover:shadow-[0_0_30px_rgba(185,27,27,0.6)] hover:scale-105 cursor-pointer"
        >
          Ersparnis berechnen
        </button>
      </div>
    </section>
  );
}