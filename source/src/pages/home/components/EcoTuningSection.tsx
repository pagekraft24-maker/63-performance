import { Link } from 'react-router-dom';

export default function EcoTuningSection() {
  return (
    <section className="relative py-14 md:py-24 overflow-hidden bg-background-900" id="eco-tuning">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7c0303]/60 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[#22c55e]/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full px-6 md:px-10">
        <div
          className="w-full rounded-[1.75rem] border border-[#7c0303]/30 bg-[#000000]/80 backdrop-blur-sm px-6 py-8 md:px-12 md:py-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
        >
          <div className="flex flex-col sm:flex-row items-center gap-5 md:gap-7 text-center sm:text-left flex-1">
            <span className="shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full border border-[#22c55e]/40 bg-[#22c55e]/10 text-[#22c55e]">
              <i className="ri-leaf-line text-3xl md:text-4xl" />
            </span>
            <div className="flex-1">
              <p className="inline-block px-3 py-1 border border-[#22c55e]/40 text-[#22c55e] text-[11px] tracking-[0.3em] uppercase font-medium rounded-sm bg-[#22c55e]/10 mb-3">
                Eco-Tuning
              </p>
              <h3 className="font-heading font-extrabold text-white uppercase leading-tight text-xl md:text-3xl mb-3">
                Eco-Tuning für PKW, Sportwagen, LKW &amp; Baumaschinen
              </h3>
              <p className="text-foreground-200 font-light leading-relaxed text-sm md:text-base max-w-2xl mx-auto sm:mx-0">
                Weniger Verbrauch, mehr Drehmoment – für Sportwagen, PKW, Transporter, LKW, Traktoren und Baumaschinen. Berechne in wenigen Sekunden, wie viel du mit Eco-Tuning pro Monat sparst.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-auto">
            <Link
              to="/eco-tuning#rechner"
              className="w-full lg:w-auto inline-flex items-center justify-center gap-2 whitespace-nowrap px-8 py-4 bronze-btn text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 hover:shadow-[0_0_30px_rgba(185,27,27,0.6)] hover:scale-105 cursor-pointer"
            >
              <i className="ri-calculator-line text-base" />
              Zum Eco-Rechner
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7c0303]/60 to-transparent" />
    </section>
  );
}