import { Link } from 'react-router-dom';

const features = [
  'Mehr PS & Nm',
  'Besseres Ansprechverhalten',
  'Optimierter Verbrauch',
  'Sicher & langlebig',
];

export default function ChipTuningExplanation() {
  return (
    <section className="relative bg-background-900 py-20 md:py-28">
      <div className="w-full px-6 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] lg:aspect-[3/4] max-h-[500px]">
              <img
                src="/media/engine-bay-63-01-65baae.webp"
                alt="Hochleistungs-Motorraum mit Turbolader – Chiptuning von 63-Performance"
                title="Motoroptimierung durch individuelle Software"
                className="full-bleed-img"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-900/60 to-transparent"></div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground-100 uppercase tracking-tighter leading-tight mb-6">
              Mehr Leistung. Mehr Drehmoment. Mehr Fahrspaß<span className="heat-gradient-text">.</span>
            </h2>
            <p className="text-sm md:text-base text-foreground-600 leading-relaxed mb-8 font-label max-w-lg prose-prestige">
              Beim Chiptuning optimieren wir die Motorsteuerung deines Fahrzeugs. Durch gezielte
              Software-Anpassungen steigern wir Leistung und Drehmoment, verbessern das
              Ansprechverhalten und können sogar den Verbrauch senken. Das Ergebnis: ein spürbar
              intensiveres Fahrerlebnis – ohne Kompromisse bei Sicherheit und Langlebigkeit.
            </p>

            {/* Feature List */}
            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full heat-gradient flex items-center justify-center shrink-0">
                    <i className="ri-check-line text-xs text-foreground-50"></i>
                  </span>
                  <span className="text-sm text-foreground-300 font-label">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/leistungen"
              className="inline-flex items-center gap-2 text-sm font-label text-primary-400 hover:text-primary-300 uppercase tracking-wider transition-colors duration-200 group cursor-pointer"
            >
              Mehr erfahren
              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-200"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}