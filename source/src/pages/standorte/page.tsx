import { useState } from 'react';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import CookieBanner from '@/pages/home/components/CookieBanner';
import SEOHead, { seligenstadtSchema, buildBreadcrumbSchema } from '@/components/feature/SEOHead';
import { Link } from 'react-router-dom';

const locations = [
  {
    id: 1,
    name: 'Hauptsitz Seligenstadt',
    address: 'Ferdinand-Porsche-Straße 6',
    city: '63500 Seligenstadt',
    region: 'Rhein-Main Gebiet',
    description: 'Unser Hauptsitz befindet sich in der Ferdinand-Porsche-Straße 6, 63500 Seligenstadt – ideal für Kunden aus dem Rhein-Main-Gebiet.',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.0!2d8.975!3d50.045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFerdinand-Porsche-Stra%C3%9Fe%206%2C%2063500%20Seligenstadt!5e0!3m2!1sde!2sde!4v1700000000000',
    image: '/media/standort-seligenstadt-63-a0c8db.webp',
    phone: '+49 175 9601217',
    bookingUrl: 'https://www.63-performance.de/booking-checkout/?c_id=95c39c9d-90a1-4380-a325-abdf6799c879',
  },
];

export default function StandortePage() {
  const [activeLocation, setActiveLocation] = useState(0);

  return (
    <div className="min-h-screen bg-background-900">
      <SEOHead
        title="Standort Seligenstadt – Chiptuning im Rhein-Main-Gebiet | 63-Performance"
        description="63-Performance Hauptsitz: Ferdinand-Porsche-Straße 6, 63500 Seligenstadt (Rhein-Main). Professionelles Chiptuning für BMW, Mercedes, Audi & mehr. Jetzt Termin buchen!"
        keywords="Chiptuning Seligenstadt, Tuning Rhein-Main, Werkstatt, Chiptuning in der Nähe, Leistungssteigerung"
        canonicalUrl="https://63-performance.de/standorte"
        geoRegion="DE-HE"
        geoPlacename="Seligenstadt"
        structuredData={{
          '@context': 'https://schema.org',
          '@graph': [
            seligenstadtSchema,
            buildBreadcrumbSchema([
              { name: 'Startseite', url: 'https://63-performance.de/' },
              { name: 'Standort', url: 'https://63-performance.de/standorte' },
            ]),
          ],
        }}
      />
      <Header />
      <main>
        {/* HERO */}
        <section className="relative h-[320px] md:h-[420px] w-full overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="/media/standorte-hero-63-dcc956.webp"
              alt="63-Performance Standort"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background-900/80 via-background-900/60 to-background-900/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-background-900/80 via-transparent to-background-900/60" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-10 max-w-4xl mx-auto">
            <div className="mb-6">
              <p className="inline-block px-4 py-1.5 border border-primary-400/60 text-primary-400 text-xs tracking-[0.4em] uppercase font-medium rounded-sm bg-primary-400/10 backdrop-blur-sm">
                Immer in Ihrer Nähe
              </p>
            </div>
            <h1 className="font-heading font-extrabold text-white uppercase leading-tight text-4xl md:text-5xl lg:text-6xl mb-4">
              Unser <span className="text-primary-400">Standort.</span>
            </h1>
            <p className="mt-2 text-white/90 font-light leading-relaxed max-w-xl text-sm md:text-base">
              Eine professionelle Werkstatt – eine Leidenschaft für maximale Leistung.
            </p>
          </div>

        </section>

        {/* LOCATIONS GRID */}
        <section className="relative bg-background-900 py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="w-full px-6 md:px-10 lg:px-16 mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
                <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Werkstätten</span>
                <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
              </div>
              <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-4">
                Wo wir <span className="text-primary-400">für Sie da sind.</span>
              </h2>
              <p className="text-white/90 font-light max-w-xl mx-auto leading-relaxed">
                Besuchen Sie uns direkt vor Ort in Seligenstadt.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {locations.map((location, index) => (
                <div
                  key={location.id}
                  className={`group relative bg-background-50 border border-background-300/20 rounded-lg overflow-hidden transition-all duration-500 flex flex-col lg:flex-row ${
                    activeLocation === index ? 'ring-1 ring-primary-400/40' : ''
                  }`}
                  onMouseEnter={() => setActiveLocation(index)}
                >
                  {/* Image */}
                  <div className="relative h-56 md:h-64 lg:h-auto lg:w-[45%] lg:min-h-[380px] overflow-hidden flex-shrink-0">
                    <img loading="lazy" decoding="async"
                      src={location.image}
                      alt={location.name}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-800 via-background-800/40 to-transparent lg:bg-gradient-to-r lg:from-background-800/60 lg:via-transparent lg:to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 text-[10px] tracking-[0.3em] uppercase font-bold bg-primary-500 text-white rounded-sm">
                        Hauptsitz
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 lg:p-10 flex-1 flex flex-col justify-center">
                    <h3 className="text-white font-heading font-extrabold text-xl md:text-2xl uppercase tracking-wider mb-3">
                      {location.name}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed mb-6">
                      {location.description}
                    </p>

                    {/* Address */}
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-8 h-8 flex items-center justify-center rounded-md bg-background-700 border border-background-300/20 flex-shrink-0 mt-0.5">
                        <i className="ri-map-pin-line text-sm text-primary-400" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{location.address}</p>
                        <p className="text-foreground-600 text-sm">{location.city}</p>
                      </div>
                    </div>

                    {/* Region */}
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-8 h-8 flex items-center justify-center rounded-md bg-background-700 border border-background-300/20 flex-shrink-0 mt-0.5">
                        <i className="ri-compass-3-line text-sm text-primary-400" />
                      </div>
                      <div>
                        <p className="text-white/90 text-sm">Region: <span className="text-foreground-400">{location.region}</span></p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3 mb-6">
                      <div className="w-8 h-8 flex items-center justify-center rounded-md bg-background-700 border border-background-300/20 flex-shrink-0 mt-0.5">
                        <i className="ri-phone-line text-sm text-primary-400" />
                      </div>
                      <a
                        href={`tel:${location.phone.replace(/\s/g, '')}`}
                        className="text-foreground-400 text-sm hover:text-primary-400 transition-colors duration-300"
                      >
                        {location.phone}
                      </a>
                    </div>

                    {/* Map Embed */}
                    <div className="w-full h-48 rounded-md overflow-hidden border border-background-300/20 mb-6">
                      <iframe
                        src={location.mapEmbed}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Karte: ${location.name}`}
                        className="grayscale-[30%]"
                      />
                    </div>

                    {/* CTA */}
                    <a
                      href="https://calendly.com/sinanimilot/beratung"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="whitespace-nowrap block w-full text-center px-6 py-3.5 bronze-btn text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 hover:shadow-[0_0_25px_rgba(185,27,27,0.4)] cursor-pointer"
                    >
                      Termin buchen
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>

        {/* REGIONEN */}
        <section className="relative bg-background-50 py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-16 h-px bg-gradient-to-r from-transparent to-accent-500" />
                <span className="text-accent-500 text-xs tracking-[0.4em] uppercase font-medium">Einzugsgebiet</span>
                <span className="w-16 h-px bg-gradient-to-l from-transparent to-accent-500" />
              </div>
              <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-4">
                Chiptuning für die <span className="text-accent-500">ganze Region.</span>
              </h2>
              <p className="text-white/90 font-light max-w-xl mx-auto leading-relaxed">
                Von Seligenstadt aus sind wir in wenigen Minuten in der gesamten Rhein-Main-Region für Sie da.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link
                to="/chiptuning-frankfurt-am-main"
                className="group relative rounded-lg overflow-hidden border border-background-300/20 hover:border-primary-400/50 transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img loading="lazy" decoding="async"
                    src="/media/region-frankfurt-63-7682e4.webp"
                    alt="Chiptuning Frankfurt am Main"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-900 via-background-900/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="text-white text-xs tracking-[0.3em] uppercase font-medium">ca. 30 Min. entfernt</span>
                    <h3 className="text-white font-heading font-extrabold uppercase text-2xl md:text-3xl mt-2">
                      Chiptuning<br /><span className="text-primary-400">Frankfurt am Main</span>
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-background-900/70 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <i className="ri-arrow-right-up-line text-white" />
                  </div>
                </div>
              </Link>

              <Link
                to="/chiptuning-offenbach-am-main"
                className="group relative rounded-lg overflow-hidden border border-background-300/20 hover:border-primary-400/50 transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img loading="lazy" decoding="async"
                    src="/media/region-offenbach-63-c8f5ab.webp"
                    alt="Chiptuning Offenbach am Main"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-900 via-background-900/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="text-white text-xs tracking-[0.3em] uppercase font-medium">ca. 20 Min. entfernt</span>
                    <h3 className="text-white font-heading font-extrabold uppercase text-2xl md:text-3xl mt-2">
                      Chiptuning<br /><span className="text-primary-400">Offenbach am Main</span>
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-background-900/70 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <i className="ri-arrow-right-up-line text-white" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>

        {/* TERMIN SECTION */}
        <section className="relative bg-background-50 py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="w-full px-6 md:px-10 lg:px-16 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-lg overflow-hidden border border-background-300/20">
                  <img loading="lazy" decoding="async"
                    src="/media/standorte-termin-63-e3e1a4.webp"
                    alt="Terminbuchung bei 63-Performance"
                    className="w-full h-auto object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-800/60 via-transparent to-transparent" />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary-400/20 rounded-lg -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 border border-accent-500/20 rounded-lg -z-10" />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-px bg-gradient-to-r from-transparent to-accent-500" />
                  <span className="text-accent-500 text-xs tracking-[0.4em] uppercase font-medium">Termine</span>
                </div>
                <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-6">
                  Buch einfach deinen <span className="text-accent-500">Termin.</span>
                </h2>
                <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4">
                  Das Leben ist schon anstrengend genug. Deshalb kannst du Termine direkt auf unserer Website buchen – ganz ohne einschränkende Büro- oder Öffnungszeiten!
                </p>
                <p className="text-foreground-600 text-sm leading-relaxed mb-8">
                  Wähle einfach eine Zeit aus, die dir passt. Wir kümmern uns um den Rest.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://calendly.com/sinanimilot/beratung"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="whitespace-nowrap flex items-center justify-center gap-2 px-8 py-4 bronze-btn text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 hover:shadow-[0_0_25px_rgba(185,27,27,0.4)] cursor-pointer"
                  >
                    <i className="ri-calendar-check-line" />
                    Termin buchen
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>

        {/* QUICK INFO BAR */}
        <section className="relative bg-background-900 py-16 md:py-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="w-full px-6 md:px-10 lg:px-16 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-400/10 border border-primary-400/20">
                  <i className="ri-map-pin-2-line text-xl text-primary-400" />
                </div>
                <h4 className="text-white font-bold text-sm tracking-widest uppercase">1 Standort</h4>
                <p className="text-foreground-600 text-xs leading-relaxed">Seligenstadt – Rhein-Main Gebiet</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-400/10 border border-primary-400/20">
                  <i className="ri-time-line text-xl text-primary-400" />
                </div>
                <h4 className="text-white font-bold text-sm tracking-widest uppercase">Flexible Zeiten</h4>
                <p className="text-foreground-600 text-xs leading-relaxed">Online-Terminbuchung rund um die Uhr</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-400/10 border border-primary-400/20">
                  <i className="ri-customer-service-2-line text-xl text-primary-400" />
                </div>
                <h4 className="text-white font-bold text-sm tracking-widest uppercase">Persönlich</h4>
                <p className="text-foreground-600 text-xs leading-relaxed">Persönliche Beratung vor Ort</p>
              </div>
            </div>
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