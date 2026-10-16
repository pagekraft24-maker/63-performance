import { Link } from 'react-router-dom';

export default function ModelHighlight() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/media/amg-rs-model-63-01-3a96f3.webp"
          alt="Mercedes AMG und BMW M Modell – Performance-Fahrzeuge optimiert von 63-Performance"
          title="63-Performance – Spezialsoftware für AMG, M, RS und GTI"
          className="full-bleed-img"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background-900/90 via-background-900/60 to-background-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-900 via-background-900/50 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground-100 uppercase tracking-tighter leading-tight mb-4">
            AMG · M · RS · GTI – wir kennen dein Auto<span className="heat-gradient-text">.</span>
          </h2>
          <p className="text-base md:text-lg text-foreground-400 font-label mb-8 leading-relaxed">
            Spezialsoftware für Hochleistungsmodelle. Hol das Maximum aus deinem Performance-Auto.
          </p>
          <Link
            to="/preise"
            className="glow-btn inline-flex items-center gap-2 heat-gradient text-sm font-label text-foreground-50 px-8 py-3.5 rounded-full uppercase tracking-wider font-semibold whitespace-nowrap cursor-pointer"
          >
            Preise ansehen
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}