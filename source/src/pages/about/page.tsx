import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import CookieBanner from '@/pages/home/components/CookieBanner';
import { Link } from 'react-router-dom';
import SEOHead, { buildBreadcrumbSchema } from '@/components/feature/SEOHead';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background-900">
      <SEOHead
        title="Über uns – 98% Kundenzufriedenheit in Seligenstadt | 63-Performance"
        description="63-Performance – Ihr Chiptuning-Spezialist mit über 15 Jahren Erfahrung in Seligenstadt. Lernen Sie unser Team und unsere Leidenschaft für maximale Performance kennen."
        keywords="Über uns, Chiptuning Experte, Tuning Werkstatt, Seligenstadt, Team, 63-Performance"
        canonicalUrl="https://63-performance.de/uber-uns"
        structuredData={buildBreadcrumbSchema([
          { name: 'Startseite', url: 'https://63-performance.de/' },
          { name: 'Über uns', url: 'https://63-performance.de/uber-uns' },
        ])}
      />
      <Header />
      <main>
        {/* HERO */}
        <section className="relative h-[420px] md:h-[600px] w-full overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="/media/about-hero-63-4a1c8a.webp"
              alt="63-Performance Werkstatt"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background-900/90 via-background-900/75 to-background-900/95 md:from-background-900/80 md:via-background-900/60 md:to-background-900/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-background-900/90 via-transparent to-background-900/80 md:from-background-900/80 md:via-transparent md:to-background-900/60" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-10 max-w-4xl mx-auto">
            <div className="mb-3 md:mb-6">
              <p className="inline-block px-3 py-1 md:px-4 md:py-1.5 border border-primary-400/60 text-primary-400 text-[9px] md:text-xs tracking-[0.2em] md:tracking-[0.4em] uppercase font-medium rounded-sm bg-primary-400/10 backdrop-blur-sm">
                Chiptuning · Leistungsoptimierung · Software
              </p>
            </div>
            <h1 className="font-heading font-extrabold text-white uppercase leading-snug text-xl sm:text-2xl md:text-5xl lg:text-6xl mb-3 md:mb-4 break-words">
              Unsere Unternehmensphilosophie
            </h1>
            <p className="mt-1 md:mt-2 text-white/95 font-light leading-relaxed max-w-xl text-xs md:text-base">
              Wir sind 63-Performance – dein Spezialist für Chiptuning und Softwareoptimierung im Rhein-Main-Gebiet.
            </p>
          </div>

          <div className="absolute bottom-8 left-1/2 z-10 flex flex-col items-center gap-2 transition-all duration-300 animate-scroll-bounce">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary-400/70">Mehr erfahren</span>
            <div className="w-5 h-8 border border-primary-400/40 rounded-full flex items-start justify-center pt-1.5">
              <div className="w-1 h-1.5 bg-primary-400 rounded-full animate-bounce" />
            </div>
          </div>
        </section>

        {/* UNSERE UNTERNEHMENSPHILOSOPHIE */}
        <section className="relative bg-background-50 py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          {/* Background texture */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-transparent pointer-events-none" />

          <div className="relative w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
                <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Unsere Philosophie</span>
                <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
              </div>
              <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-4">
                Was uns <span className="text-primary-400">antreibt.</span>
              </h2>
              <p className="text-white/60 font-light text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                Mehr als nur Zahlen auf dem Prüfstand – das ist unsere DNA.
              </p>
            </div>

            {/* Two-column layout */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              {/* Left: Image */}
              <div className="w-full lg:w-[45%] flex-shrink-0">
                <div className="relative">
                  <div className="aspect-[4/5] rounded-lg overflow-hidden">
                    <img
                      src="/media/4092ae95c10c3327e04c5787fd1fb4a2-5f77ca.webp"
                      alt="63-Performance Tuner bei der Software-Optimierung im Audi Innenraum"
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  {/* Decorative accent line */}
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-primary-400/40 rounded-bl-lg hidden lg:block" />
                  <div className="absolute -top-4 -right-4 w-24 h-24 border-r-2 border-t-2 border-primary-400/40 rounded-tr-lg hidden lg:block" />
                </div>
              </div>

              {/* Right: Content */}
              <div className="w-full lg:w-[55%]">
                {/* Large decorative quote mark */}
                <div className="text-primary-400/20 font-heading text-[8rem] leading-none -ml-4 -mt-8 mb-2 select-none hidden lg:block" aria-hidden="true">
                  &ldquo;
                </div>

                <div className="space-y-5">
                  <p className="text-white/90 font-light text-base md:text-lg leading-relaxed">
                    Herzlich willkommen bei <strong className="text-white font-semibold">63-Performance</strong>, Ihrem Experten für herausragendes Chiptuning und Softwareoptimierung! Wir sind Ihr zuverlässiger Partner, wenn es darum geht, die Leistung und Effizienz Ihres Fahrzeugs auf ein neues Niveau zu heben.
                  </p>
                  <p className="text-white/90 font-light text-base md:text-lg leading-relaxed">
                    Bei 63-Performance vereinen wir Leidenschaft für Fahrzeuge mit modernster Technologie. Unser hochqualifiziertes Team von Ingenieuren und Tuning-Spezialisten steht bereit, um Ihre individuellen Anforderungen zu erfüllen und das volle Potenzial Ihres Fahrzeugs freizusetzen.
                  </p>
                  <p className="text-white/90 font-light text-base md:text-lg leading-relaxed">
                    Unsere maßgeschneiderten Chiptuning-Lösungen werden sorgfältig entwickelt, um die Motorleistung zu optimieren, das Drehmoment zu erhöhen und die Fahrbarkeit zu verbessern. Dabei legen wir großen Wert auf höchste Qualität, Zuverlässigkeit und Sicherheit. Mit 63-Performance erhalten Sie nicht nur eine Leistungssteigerung, sondern auch ein Fahrerlebnis, das Ihre Erwartungen übertreffen wird.
                  </p>
                </div>

                {/* Values - elevated card style */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="group relative p-5 rounded-lg bg-background-700/80 border border-background-300/20 hover:border-primary-400/30 transition-all duration-500 hover:-translate-y-1 cursor-default">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-400/10 ring-1 ring-primary-400/20 mb-4 group-hover:bg-primary-400/20 group-hover:ring-primary-400/40 transition-all duration-500">
                      <i className="ri-heart-pulse-line text-lg text-primary-400" />
                    </div>
                    <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wide mb-2">Leidenschaft</h4>
                    <p className="text-white/60 font-light text-xs leading-relaxed">
                      Wir leben Autos. Jedes Projekt ist für uns eine Herzensangelegenheit.
                    </p>
                  </div>

                  <div className="group relative p-5 rounded-lg bg-background-700/80 border border-background-300/20 hover:border-primary-400/30 transition-all duration-500 hover:-translate-y-1 cursor-default">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-400/10 ring-1 ring-primary-400/20 mb-4 group-hover:bg-primary-400/20 group-hover:ring-primary-400/40 transition-all duration-500">
                      <i className="ri-cpu-line text-lg text-primary-400" />
                    </div>
                    <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wide mb-2">Technologie</h4>
                    <p className="text-white/60 font-light text-xs leading-relaxed">
                      Modernste Diagnose- und Abstimmungstechnik für präzise Ergebnisse.
                    </p>
                  </div>

                  <div className="group relative p-5 rounded-lg bg-background-700/80 border border-background-300/20 hover:border-primary-400/30 transition-all duration-500 hover:-translate-y-1 cursor-default">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-400/10 ring-1 ring-primary-400/20 mb-4 group-hover:bg-primary-400/20 group-hover:ring-primary-400/40 transition-all duration-500">
                      <i className="ri-shield-star-line text-lg text-primary-400" />
                    </div>
                    <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wide mb-2">Verlässlichkeit</h4>
                    <p className="text-white/60 font-light text-xs leading-relaxed">
                      Sicher innerhalb der Motorreserven. Keine Kompromisse bei der Qualität.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>

        {/* STATS BAND */}
        <section className="relative bg-background-50 py-16 md:py-24 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/3 to-transparent pointer-events-none" />

          <div className="relative w-full px-6 md:px-10 lg:px-16 max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary-400/60" />
                <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">63-Performance in Zahlen</span>
                <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary-400/60" />
              </div>
              <h2 className="text-white font-heading font-bold text-2xl md:text-3xl">
                Was uns <span className="text-primary-400">ausmacht.</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-7xl mx-auto">
              <div className="text-center group">
                <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary-400/10 ring-1 ring-primary-400/20 group-hover:bg-primary-400/20 transition-colors duration-300">
                  <i className="ri-timer-flash-line text-base text-primary-400" />
                </div>
                <div className="text-2xl md:text-3xl lg:text-[2.75rem] font-heading font-extrabold bronze-gradient-text mb-2 tracking-tighter leading-none">
                  98%
                </div>
                <p className="text-xs md:text-sm text-white/90 font-label uppercase tracking-[0.15em] leading-relaxed">
                  Kundenzufriedenheit
                </p>
              </div>

              <div className="text-center group">
                <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary-400/10 ring-1 ring-primary-400/20 group-hover:bg-primary-400/20 transition-colors duration-300">
                  <i className="ri-map-pin-2-line text-base text-primary-400" />
                </div>
                <div className="text-2xl md:text-3xl lg:text-[2.75rem] font-heading font-extrabold bronze-gradient-text mb-2 tracking-tighter leading-none">
                  1
                </div>
                <p className="text-xs md:text-sm text-white/90 font-label uppercase tracking-[0.15em] leading-relaxed">
                  Standort
                </p>
              </div>

              <div className="text-center group">
                <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary-400/10 ring-1 ring-primary-400/20 group-hover:bg-primary-400/20 transition-colors duration-300">
                  <i className="ri-code-s-slash-line text-base text-primary-400" />
                </div>
                <div className="text-2xl md:text-3xl lg:text-[2.75rem] font-heading font-extrabold bronze-gradient-text mb-2 tracking-tighter leading-none">
                  100%
                </div>
                <p className="text-xs md:text-sm text-white/90 font-label uppercase tracking-[0.15em] leading-relaxed">
                  Individuelle Software
                </p>
              </div>

              <div className="text-center group">
                <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary-400/10 ring-1 ring-primary-400/20 group-hover:bg-primary-400/20 transition-colors duration-300">
                  <i className="ri-speed-up-line text-base text-primary-400" />
                </div>
                <div className="text-2xl md:text-3xl lg:text-[2.75rem] font-heading font-extrabold bronze-gradient-text mb-2 tracking-tighter leading-none whitespace-nowrap">
                  bis +30%
                </div>
                <p className="text-xs md:text-sm text-white/90 font-label uppercase tracking-[0.15em] leading-relaxed">
                  Mehrleistung
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>


        {/* CTA */}
        <section className="relative bg-background-900 py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/3 to-transparent pointer-events-none" />
          <div className="relative w-full px-6 md:px-10 lg:px-16 max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
              <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Jetzt starten</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
            </div>
            <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-6">
              Lass uns dein Fahrzeug <span className="text-primary-400">aufwachen.</span>
            </h2>
            <p className="text-white/90 font-light max-w-xl mx-auto leading-relaxed mb-10">
              Vereinbare jetzt einen Termin und erlebe, was echte Leistungsoptimierung bedeutet. Wir freuen uns auf dein Projekt.
            </p>
            <a
              href="https://calendly.com/sinanimilot/beratung"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="whitespace-nowrap px-10 py-4 bronze-btn text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 hover:shadow-[0_0_30px_rgba(185,27,27,0.6)] hover:scale-105 cursor-pointer inline-block"
            >
              Termin buchen
            </a>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
    </div>
  );
}