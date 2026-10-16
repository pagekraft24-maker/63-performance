import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import CookieBanner from '@/pages/home/components/CookieBanner';
import { Link } from 'react-router-dom';
import SEOHead, { buildBreadcrumbSchema } from '@/components/feature/SEOHead';

const standardPrices = [
  { name: 'Softwareoptimierung (Stage 1)', price: 'ab 379,00 €', icon: 'ri-cpu-line' },
  { name: 'Schubabschaltung (Pop & Bangs)', price: 'ab 329,00 €', icon: 'ri-sound-module-line' },
  { name: 'ECO-Tuning', price: 'ab 299,00 €', icon: 'ri-leaf-line' },
  { name: 'AdBlue Lösungen', price: 'ab 249,00 €', icon: 'ri-drop-line' },
  { name: 'DPF / AGR Lösungen', price: 'ab 229,00 €', icon: 'ri-filter-off-line' },
  { name: 'Getriebeoptimierung', price: 'ab 249,00 €', icon: 'ri-settings-3-line' },
];

const performancePrices = [
  { name: 'Softwareoptimierung (Stage 1)', price: 'ab 449,00 €', icon: 'ri-cpu-line' },
  { name: 'Schubabschaltung (Pop & Bangs)', price: 'ab 369,00 €', icon: 'ri-sound-module-line' },
  { name: 'Getriebeoptimierung', price: 'Preis auf Anfrage', icon: 'ri-settings-3-line' },
];

export default function PreisePage() {
  return (
    <div className="min-h-screen bg-background-900">
      <SEOHead
        title="Chiptuning Preise – Stage 1, Pop & Bangs, ECO-Tuning ab 379€ | 63-Performance"
        description="Transparente Chiptuning-Preise bei 63-Performance: Softwareoptimierung Stage 1 ab 379€, Pop & Bangs ab 329€, ECO-Tuning ab 299€. Spezielle Preise für AMG, M, RS, GTI. Jetzt Angebot anfordern!"
        keywords="Chiptuning Preise, Stage 1 Kosten, Softwareoptimierung Preis, Pop Bangs Preis, Seligenstadt, AMG Tuning Preis"
        canonicalUrl="https://63-performance.de/preise"
        structuredData={buildBreadcrumbSchema([
          { name: 'Startseite', url: 'https://63-performance.de/' },
          { name: 'Preise', url: 'https://63-performance.de/preise' },
        ])}
      />
      <Header />
      <main>
        {/* HERO */}
        <section className="relative h-[420px] md:h-[600px] w-full overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="/media/generated-image-july-30-2026-10-28am-34232a.webp"
              alt="63-Performance Preise"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-10 max-w-4xl mx-auto">
            <div className="mb-6">
              <p className="inline-block px-4 py-1.5 border border-primary-400/60 text-primary-400 text-xs tracking-[0.4em] uppercase font-medium rounded-sm bg-primary-400/10 backdrop-blur-sm" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                Transparent · Fair · Individuell
              </p>
            </div>
            <h1 className="font-heading font-extrabold text-white uppercase leading-tight text-4xl md:text-5xl lg:text-6xl mb-4">
              Viel mehr als<br />nur eine <span className="text-primary-400">Software!</span>
            </h1>
            <p className="mt-2 text-white/90 font-light leading-relaxed max-w-xl text-sm md:text-base">
              Es ist nicht bloß nur eine Software – Es ist ein Lebensgefühl!
            </p>
          </div>

        </section>

        {/* STANDARD PREISE */}
        <section className="relative bg-background-900 py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
                <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Preise</span>
                <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
              </div>
              <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-4">
                Unsere <span className="text-primary-400">Preise.</span>
              </h2>
              <p className="text-white/90 font-light max-w-xl mx-auto leading-relaxed">
                Alle Preise verstehen sich inklusive Programmierung, Prüfstandslauf und Testfahrt.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {standardPrices.map((item, i) => (
                <div
                  key={item.name}
                  className="card-elevated rounded-xl p-6 md:p-7 group flex flex-col items-center text-center gap-3 !border-white/30 hover:!border-white/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-background-700 border border-background-300/20 flex-shrink-0">
                    <i className={`${item.icon} text-xl text-white/70 group-hover:text-[var(--brand-red-text)] transition-colors duration-300`} />
                  </div>
                  <h3 className="text-white font-bold text-xs tracking-widest uppercase leading-snug">
                    {item.name}
                  </h3>
                  <span className="heat-gradient-text text-2xl md:text-3xl tracking-tight font-heading font-extrabold">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>

        {/* AMG / M / RS / GTI PREISE */}
        <section className="relative bg-background-50 py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-16 h-px bg-gradient-to-r from-transparent to-accent-500" />
                <span className="text-accent-500 text-xs tracking-[0.4em] uppercase font-medium">Performance-Modelle</span>
                <span className="w-16 h-px bg-gradient-to-l from-transparent to-accent-500" />
              </div>
              <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-4">
                Preise für <span className="text-accent-500">AMG / M / RS / GTI</span>
              </h2>
              <p className="text-white/90 font-light max-w-xl mx-auto leading-relaxed">
                Hochleistungsmodelle erfordern spezialisierte Expertise – wir liefern.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {performancePrices.map((item) => (
                <div
                  key={item.name}
                  className="card-elevated rounded-xl p-6 md:p-7 !border-white/30 group flex flex-col items-center text-center gap-3"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-background-700 border border-[#B91C1C]/20 flex-shrink-0">
                    <i className={`${item.icon} text-xl text-[var(--brand-red-text)] group-hover:text-[var(--brand-red-text)] transition-colors duration-300`} />
                  </div>
                  <h3 className="text-white font-bold text-xs tracking-widest uppercase leading-snug">
                    {item.name}
                  </h3>
                  <span className="heat-gradient-text text-2xl md:text-3xl tracking-tight font-heading font-extrabold">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>

        {/* INDIVIDUELL HINWEIS */}
        <section className="relative bg-background-900 py-20 md:py-28 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="w-full px-6 md:px-10 lg:px-16 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-400/10 border border-primary-400/20 mb-8">
              <i className="ri-car-line text-2xl text-primary-400" />
            </div>
            <h2 className="text-white font-heading font-extrabold uppercase text-2xl md:text-3xl lg:text-4xl mb-6">
              Jedes Auto ist Individuell –<br /><span className="text-primary-400">Jede Software auch!</span>
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4">
              Alle unsere Preise sind individuell abhängig von dem Modell, dem Motor, dem Baujahr und vielen weiteren Faktoren.
            </p>
            <p className="text-foreground-600 text-sm leading-relaxed mb-10">
              Gerne senden wir Ihnen auf Wunsch ein individuell, auf Ihr Fahrzeug abgestimmtes, Angebot zu.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/kontakt"
                className="whitespace-nowrap px-8 py-3.5 bronze-btn text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 hover:shadow-[0_0_25px_rgba(185,27,27,0.4)] cursor-pointer inline-block"
              >
                Angebot anfordern
              </Link>
              <a
                href="https://wa.me/491759601217"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="whitespace-nowrap flex items-center gap-2 px-8 py-3.5 whatsapp-btn-outline text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 cursor-pointer"
              >
                <i className="ri-whatsapp-line" />
                Direkt per WhatsApp
              </a>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
    </div>
  );
}