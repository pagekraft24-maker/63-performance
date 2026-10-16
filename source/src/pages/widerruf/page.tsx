import { useState, FormEvent, useCallback } from 'react';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import SEOHead, { buildBreadcrumbSchema } from '@/components/feature/SEOHead';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import CookieBanner from '@/pages/home/components/CookieBanner';

interface FormData {
  name: string;
  email: string;
  orderNo: string;
  partial: string;
  reason: string;
}

export default function WiderrufFormPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    orderNo: '',
    partial: '',
    reason: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = useCallback((field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = event.currentTarget;
    const honeypot = form.querySelector<HTMLInputElement>('input[name="company_alt"]');
    if (honeypot && honeypot.value.trim()) {
      setStatus('success');
      return;
    }

    if (!formData.email.trim() || !formData.orderNo.trim()) {
      setStatus('error');
      setErrorMsg('Bitte füllen Sie alle Pflichtfelder aus.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMsg('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      return;
    }

    try {
      const payload = new FormData(form);
      const response = await fetch('https://readdy.ai/api/form/d96dvmnpg5pqhofcunu0', {
        method: 'POST',
        body: payload,
      });
      const responseText = await response.text();
      let parsed;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const serverMsg = parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText;
      const isSpam = typeof serverMsg === 'string' && (serverMsg.toLowerCase().includes('spam') || serverMsg.toLowerCase().includes('form data is spam'));

      if (response.ok && parsed?.code === 'OK' && !isSpam) {
        setStatus('success');
        setFormData({ name: '', email: '', orderNo: '', partial: '', reason: '' });
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg(serverMsg || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Verbindungsfehler. Bitte versuchen Sie es später erneut.');
    }
  };

  return (
    <div className="min-h-screen bg-background-900">
      <SEOHead
        title="Vertrag widerrufen – Widerrufsformular | 63-Performance"
        description="Online geschlossene Verträge mit 63-Performance innerhalb von 14 Tagen widerrufen. Einfaches Online-Widerrufsformular – schnell und unkompliziert."
        keywords="Widerruf, Widerrufsformular, Vertrag widerrufen, 63-Performance"
        canonicalUrl="https://63-performance.de/widerruf"
      />
      <Header />
      <main>
        {/* HERO */}
        <section className="relative h-[200px] md:h-[280px] w-full overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="/media/widerruf-form-hero-63-4a6815.webp"
              alt="63-Performance Vertrag widerrufen"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background-900/80 via-background-900/60 to-background-900/90" />
          </div>
          <div className="relative z-10 text-center px-6 md:px-10">
            <h1 className="font-heading font-extrabold text-white uppercase leading-tight text-3xl md:text-4xl lg:text-5xl">
              Vertrag widerrufen
            </h1>
          </div>
        </section>

        {/* Form Section */}
        <section className="relative bg-background-50 py-16 md:py-24 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400/20 to-transparent" />
          <div className="w-full px-6 md:px-10 lg:px-16 max-w-2xl mx-auto">
            <p className="text-white/80 leading-relaxed text-sm md:text-base mb-10">
              Online geschlossene Verträge können innerhalb von 14 Tagen widerrufen werden. Bitte das untenstehende Formular ausfüllen. Eine Eingangsbestätigung wird umgehend per E-Mail versendet.
            </p>

            {status === 'success' && (
              <div className="mb-8 p-4 rounded-md bg-primary-500/20 border border-primary-400/30">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-500 shrink-0">
                    <i className="ri-check-line text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Widerruf erfolgreich eingereicht</p>
                    <p className="text-white/70 text-sm mt-1">Vielen Dank. Wir haben Ihren Widerruf erhalten und senden Ihnen umgehend eine Eingangsbestätigung zu.</p>
                  </div>
                </div>
              </div>
            )}

            {status === 'error' && errorMsg && (
              <div className="mb-8 p-4 rounded-md bg-brand-red/10 border border-brand-red/30">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-red shrink-0">
                    <i className="ri-error-warning-line text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Fehler</p>
                    <p className="text-white/70 text-sm mt-1">{errorMsg}</p>
                  </div>
                </div>
              </div>
            )}

            <form
              id="widerruf-form"
              data-readdy-form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Honeypot */}
              <input
                type="text"
                name="company_alt"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                readOnly
                className="company_alt_honeypot"
                value=""
                onChange={() => {}}
              />

              <div>
                <label htmlFor="widerruf-name" className="block text-white/80 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="widerruf-name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="form-input"
                  placeholder="Ihr vollständiger Name"
                />
              </div>

              <div>
                <label htmlFor="widerruf-email" className="block text-white/80 text-sm font-medium mb-2">
                  E-Mail-Adresse <span className="text-brand-red-text font-bold">*</span>
                </label>
                <input
                  type="email"
                  id="widerruf-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="form-input"
                  placeholder="ihre@email.de"
                />
                <p className="text-foreground-600 text-xs mt-1">Die Eingangsbestätigung wird an diese Adresse gesendet.</p>
              </div>

              <div>
                <label htmlFor="widerruf-orderNo" className="block text-white/80 text-sm font-medium mb-2">
                  Bestell- oder Buchungsnummer <span className="text-brand-red-text font-bold">*</span>
                </label>
                <input
                  type="text"
                  id="widerruf-orderNo"
                  name="orderNo"
                  required
                  value={formData.orderNo}
                  onChange={(e) => handleChange('orderNo', e.target.value)}
                  className="form-input"
                  placeholder="z.B. ORD-12345"
                />
                <p className="text-foreground-600 text-xs mt-1">Dies ist in der Bestellbestätigung zu finden.</p>
              </div>

              <div>
                <label htmlFor="widerruf-partial" className="block text-white/80 text-sm font-medium mb-2">
                  Welche Artikel sollen widerrufen werden?
                </label>
                <input
                  type="text"
                  id="widerruf-partial"
                  name="partial"
                  value={formData.partial}
                  onChange={(e) => handleChange('partial', e.target.value)}
                  className="form-input"
                  placeholder="Artikelbezeichnung"
                />
                <p className="text-foreground-600 text-xs mt-1">Leer lassen, um den gesamten Vertrag zu widerrufen. Um nur einen Teil der Bestellung zu widerrufen, die Artikel hier angeben.</p>
              </div>

              <div>
                <label htmlFor="widerruf-reason" className="block text-white/80 text-sm font-medium mb-2">
                  Grund des Widerrufs
                </label>
                <textarea
                  id="widerruf-reason"
                  name="reason"
                  value={formData.reason}
                  onChange={(e) => handleChange('reason', e.target.value)}
                  maxLength={500}
                  rows={4}
                  className="form-textarea"
                  placeholder="Optional: Grund für den Widerruf"
                />
                <p className="text-foreground-600 text-xs mt-1 text-right">{formData.reason.length}/500</p>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bronze-btn font-bold text-sm tracking-widest uppercase rounded-md disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
              >
                {status === 'submitting' ? (
                  <>
                    <i className="ri-loader-4-line animate-spin" />
                    Wird gesendet...
                  </>
                ) : (
                  'Vertrag widerrufen'
                )}
              </button>
            </form>

            {/* Legal notice */}
            <div className="mt-10 pt-8 border-t border-background-300/20">
              <p className="text-foreground-600 text-xs leading-relaxed">
                Mit dem Absenden erklären Sie sich damit einverstanden, dass Ihre angegebenen Daten zur Bearbeitung Ihres Widerrufs bei uns gespeichert werden. Die Daten werden nach vollständiger Abwicklung des Widerrufs gelöscht. Weitere Informationen finden Sie in unserer{' '}
                <a href="/datenschutz" className="text-primary-400 hover:text-primary-300 transition-colors">Datenschutzerklärung</a>.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400/20 to-transparent" />
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
    </div>
  );
}