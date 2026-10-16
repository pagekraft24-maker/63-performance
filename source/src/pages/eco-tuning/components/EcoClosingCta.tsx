import { Link } from 'react-router-dom';

export default function EcoClosingCta() {
  return (
    <section className="relative bg-background-900 py-20 md:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/3 to-transparent pointer-events-none" />
      <div className="relative w-full px-6 md:px-10 lg:px-16 max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
          <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Jetzt anfragen</span>
          <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
        </div>
        <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-6">
          Lohnt sich Eco-Tuning<br />für deine Fahrzeuge?
        </h2>
        <p className="text-foreground-300 font-light max-w-xl mx-auto leading-relaxed mb-10">
          Schick uns Fahrzeugtyp, Baujahr und durchschnittliche Monatsfahrleistung – wir melden uns mit einer Einschätzung.
        </p>
        <Link
          to="/kontakt"
          className="whitespace-nowrap px-10 py-4 bronze-btn text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 hover:shadow-[0_0_30px_rgba(185,27,27,0.6)] hover:scale-105 cursor-pointer inline-block"
        >
          Jetzt anfragen
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </section>
  );
}