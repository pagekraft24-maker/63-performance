import { useState, type FormEvent } from 'react';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import SEOHead, { buildBreadcrumbSchema } from '@/components/feature/SEOHead';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import CookieBanner from '@/pages/home/components/CookieBanner';
import TermineSection from './components/TermineSection';

const contactInfo = [
  {
    icon: 'ri-phone-line',
    label: 'Telefon',
    value: '+49 175 9601217',
    href: 'tel:+491759601217',
  },
  {
    icon: 'ri-whatsapp-line',
    label: 'WhatsApp',
    value: '+49 175 9601217',
    href: 'https://wa.me/491759601217',
    external: true,
  },
  {
    icon: 'ri-mail-line',
    label: 'E-Mail',
    value: 'info@63-performance.de',
    href: 'mailto:info@63-performance.de',
  },
];

export default function KontaktPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [messageCount, setMessageCount] = useState(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    const honeypot = (formData.get('company_alt') as string || '').trim();
    if (honeypot !== '') {
      setFormState('success');
      return;
    }

    // Remove honeypot from payload
    formData.delete('company_alt');

    setFormState('submitting');

    try {
      const response = await fetch('https://readdy.ai/api/form/d923vi7efssur58kqrmg', {
        method: 'POST',
        body: new URLSearchParams(formData as any),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });

      if (response.ok) {
        setFormState('success');
        form.reset();
        setMessageCount(0);
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <div className="min-h-screen bg-background-900">
      <SEOHead
        title="Kontakt – Jetzt Termin buchen & Beratung anfordern | 63-Performance Chiptuning"
        description="Kontaktieren Sie 63-Performance: Telefon, WhatsApp, E-Mail oder direkt das Kontaktformular. Terminbuchung online für Seligenstadt. Persönliche Beratung für Ihr Chiptuning-Projekt."
        keywords="Kontakt, Termin buchen, Chiptuning Beratung, Seligenstadt, WhatsApp, 63-Performance"
        canonicalUrl="https://63-performance.de/kontakt"
        structuredData={buildBreadcrumbSchema([
          { name: 'Startseite', url: 'https://63-performance.de/' },
          { name: 'Kontakt', url: 'https://63-performance.de/kontakt' },
        ])}
      />
      <Header />
      <main>
        {/* HERO */}
        <section className="relative h-[320px] md:h-[420px] w-full overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="/media/kontakt-hero-63-3d7bfe.webp"
              alt="63-Performance Kontakt"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background-900/80 via-background-900/60 to-background-900/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-background-900/80 via-transparent to-background-900/60" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-10 max-w-4xl mx-auto">
            <div className="mb-6">
              <p className="inline-block px-4 py-1.5 border border-primary-400/60 text-primary-400 text-xs tracking-[0.4em] uppercase font-medium rounded-sm bg-primary-400/10 backdrop-blur-sm">
                Wir sind für Sie da
              </p>
            </div>
            <h1 className="font-heading font-extrabold text-white uppercase leading-tight text-4xl md:text-5xl lg:text-6xl mb-4">
              Kontakt <span className="text-primary-400">aufnehmen.</span>
            </h1>
            <p className="mt-2 text-white/90 font-light leading-relaxed max-w-xl text-sm md:text-base">
              Haben Sie Fragen zu unseren Leistungen? Wir beraten Sie gerne persönlich.
            </p>
          </div>

          <div className="absolute bottom-8 left-1/2 z-10 flex flex-col items-center gap-2 transition-all duration-300 animate-scroll-bounce">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary-400/70">Jetzt schreiben</span>
            <div className="w-5 h-8 border border-primary-400/40 rounded-full flex items-start justify-center pt-1.5">
              <div className="w-1 h-1.5 bg-primary-400 rounded-full animate-bounce" />
            </div>
          </div>
        </section>

        {/* CONTACT INFO CARDS */}
        <section className="relative bg-background-900 py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
                <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Erreichbarkeit</span>
                <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
              </div>
              <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-4">
                So erreichen Sie <span className="text-primary-400">uns.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'nofollow noopener noreferrer' : undefined}
                  className="group flex flex-col items-center text-center p-5 md:p-6 bg-background-800 border border-background-300/20 rounded-lg transition-all duration-300 hover:border-primary-400/30 hover:bg-background-700/60 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-400/10 border border-primary-400/20 mb-4 transition-all duration-300 group-hover:bg-primary-400/20">
                    <i className={`${item.icon} text-xl text-primary-400`} />
                  </div>
                  <span className="text-primary-400 text-xs tracking-[0.3em] uppercase font-bold mb-1.5">
                    {item.label}
                  </span>
                  <span className="text-white font-medium text-sm">{item.value}</span>
                </a>
              ))}
              {/* Standort */}
              <div className="flex flex-col items-center text-center p-5 md:p-6 bg-background-800 border border-background-300/20 rounded-lg transition-all duration-300 hover:border-primary-400/30 hover:bg-background-700/60 hover:-translate-y-1">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-400/10 border border-primary-400/20 mb-4 transition-all duration-300">
                  <i className="ri-map-pin-line text-xl text-primary-400" />
                </div>
                <span className="text-primary-400 text-xs tracking-[0.3em] uppercase font-bold mb-1.5">
                  Standort
                </span>
                <span className="text-white font-medium text-sm">Hauptsitz Seligenstadt</span>
                <span className="text-foreground-600 text-xs mt-0.5">Ferdinand-Porsche-Straße 6, 63500 Seligenstadt</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>

        <TermineSection />

        {/* CONTACT FORM */}
        <section className="relative bg-background-800 py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="w-full px-6 md:px-10 lg:px-16 max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-16 h-px bg-gradient-to-r from-transparent to-accent-500" />
                <span className="text-accent-500 text-xs tracking-[0.4em] uppercase font-medium">Nachricht</span>
                <span className="w-16 h-px bg-gradient-to-l from-transparent to-accent-500" />
              </div>
              <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-4">
                Schreiben Sie <span className="text-accent-500">uns.</span>
              </h2>
              <p className="text-white/90 font-light max-w-xl mx-auto leading-relaxed">
                Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
              </p>
            </div>

            {formState === 'success' ? (
              <div className="text-center p-12 bg-background-700 border border-primary-400/20 rounded-lg">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-400/10 border border-primary-400/20 mx-auto mb-6">
                  <i className="ri-check-line text-3xl text-primary-400" />
                </div>
                <h3 className="text-white font-heading font-extrabold text-2xl uppercase tracking-wider mb-3">
                  Nachricht gesendet!
                </h3>
                <p className="text-white/90 text-sm leading-relaxed mb-6">
                  Vielen Dank für Ihre Nachricht. Wir werden uns schnellstmöglich mit Ihnen in Verbindung setzen.
                </p>
                <button
                  onClick={() => setFormState('idle')}
                  className="whitespace-nowrap px-8 py-3.5 bronze-btn text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 hover:shadow-[0_0_25px_rgba(185,27,27,0.4)] cursor-pointer"
                >
                  Neue Nachricht
                </button>
              </div>
            ) : (
              <form
                id="kontakt-form"
                data-readdy-form="d923vi7efssur58kqrmg"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-foreground-400 text-xs tracking-widest uppercase font-bold mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      className="form-input"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-foreground-400 text-xs tracking-widest uppercase font-bold mb-2">
                      E-Mail-Adresse *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="form-input"
                      placeholder="ihre@email.de"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-foreground-400 text-xs tracking-widest uppercase font-bold mb-2">
                      Telefonnummer
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="form-input"
                      placeholder="+49 123 456789"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-foreground-400 text-xs tracking-widest uppercase font-bold mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    maxLength={500}
                    onChange={(e) => setMessageCount(e.target.value.length)}
                    className="form-textarea"
                    placeholder="Ihre Nachricht an uns..."
                  />
                  <p className="text-right text-foreground-700 text-xs mt-1">{messageCount}/500 Zeichen</p>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 accent-primary-400 cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-white/90 text-xs leading-relaxed cursor-pointer">
                    Ich stimme zu, dass meine im Formular eingegebenen personenbezogenen Daten zur Bearbeitung der Anfrage und der personalisierten Beratung verarbeitet werden. Meine Einwilligung kann ich jederzeit widerrufen. Es gilt unsere{' '}
                    <a href="/datenschutz" className="text-primary-400 hover:text-primary-300 transition-colors duration-300">Datenschutzerklärung</a>
                    . *
                  </label>
                </div>

                {/* Honeypot */}
                <input
                  type="text"
                  name="company_alt"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="company_alt_honeypot"
                />

                {formState === 'error' && (
                  <div className="p-4 bg-brand-red/10 border border-brand-red/30 rounded text-brand-red-text font-bold text-sm">
                    <i className="ri-error-warning-line mr-2" />
                    Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="whitespace-nowrap w-full sm:w-auto px-10 py-4 bronze-btn text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 hover:shadow-[0_0_25px_rgba(185,27,27,0.4)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <i className="ri-loader-4-line animate-spin" />
                      Wird gesendet...
                    </span>
                  ) : (
                    'Abschicken'
                  )}
                </button>
              </form>
            )}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>

        {/* WHATSAPP CTA */}
        <section className="relative bg-background-900 py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="w-full px-6 md:px-10 lg:px-16 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full whatsapp-icon-bg mb-8">
              <i className="ri-whatsapp-line text-3xl whatsapp-text" />
            </div>
            <h2 className="text-white font-heading font-extrabold uppercase text-2xl md:text-3xl lg:text-4xl mb-4">
              Schneller geht's per <span className="whatsapp-text">WhatsApp.</span>
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed mb-10 max-w-lg mx-auto">
              Schreiben Sie uns direkt auf WhatsApp für eine schnelle und unkomplizierte Beratung.
            </p>
            <a
              href="https://wa.me/491759601217"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="whitespace-nowrap inline-flex items-center gap-2 px-10 py-4 whatsapp-btn-outline text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 cursor-pointer"
            >
              <i className="ri-whatsapp-line text-lg" />
              Nachricht schreiben
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