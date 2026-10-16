import { useState } from 'react';
import { Link } from 'react-router-dom';

interface FormData {
  name: string;
  email: string;
  telefon: string;
  fahrzeug: string;
  leistung: string;
  nachricht: string;
}

export default function ContactSection() {
  const [data, setData] = useState<FormData>({
    name: '',
    email: '',
    telefon: '',
    fahrzeug: '',
    leistung: '',
    nachricht: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    if (name === 'nachricht') setCharCount(value.length);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot check
    const honeypot = (e.target as HTMLFormElement).querySelector<HTMLInputElement>('input[name="company_alt"]');
    if (honeypot && honeypot.value.trim() !== '') {
      setStatus('success');
      return;
    }

    const payload = new URLSearchParams();
    Object.entries(data).forEach(([key, val]) => {
      if (val) payload.append(key, val);
    });

    try {
      const res = await fetch('https://readdy.ai/api/form/d920cdvefssur58kqqe0', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });
      if (res.ok) {
        setStatus('success');
        setData({ name: '', email: '', telefon: '', fahrzeug: '', leistung: '', nachricht: '' });
        setCharCount(0);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="kontakt" className="relative bg-background-900 py-24 md:py-32 overflow-hidden">
      {/* Top transition fade from elevated → base */}
      <div className="absolute top-0 left-0 w-full h-[160px] bg-gradient-to-b from-background-50 to-transparent pointer-events-none" />
      {/* Top glow divider */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
            <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Kontakt</span>
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
          </div>
          <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-4">
            Bereit für deinen <span className="text-primary-400">neuen Look?</span>
          </h2>
          <p className="text-white/90 font-light max-w-xl mx-auto leading-relaxed">
            Schick uns eine Nachricht – am besten direkt per WhatsApp. Wir antworten schnell.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Form */}
          <div>
            <form
              data-readdy-form
              id="kontakt-formular"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input
                type="text"
                name="company_alt"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0"
                style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white/90 text-xs tracking-widest uppercase mb-2">Name *</label>
                  <input
                    required
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    placeholder="Dein Name"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-white/90 text-xs tracking-widest uppercase mb-2">E-Mail *</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    placeholder="deine@email.de"
                    className="form-input"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white/90 text-xs tracking-widest uppercase mb-2">Telefon</label>
                  <input
                    type="tel"
                    name="telefon"
                    value={data.telefon}
                    onChange={handleChange}
                    placeholder="+49 ..."
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-white/90 text-xs tracking-widest uppercase mb-2">Fahrzeug</label>
                  <input
                    name="fahrzeug"
                    value={data.fahrzeug}
                    onChange={handleChange}
                    placeholder="z.B. BMW M3, Golf GTI ..."
                    className="form-input"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/90 text-xs tracking-widest uppercase mb-2">Gewünschte Leistung *</label>
                <div className="relative">
                  <select
                    name="leistung"
                    required
                    value={data.leistung}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="" disabled>Bitte wählen ...</option>
                    <option value="Chiptuning Stage 1">Chiptuning Stage 1</option>
                    <option value="Getriebeoptimierung">Getriebeoptimierung</option>
                    <option value="Pop & Bangs Sound">Pop & Bangs Sound</option>
                    <option value="ECO-Tuning">ECO-Tuning</option>
                    <option value="Komplettpaket">Komplettpaket</option>
                    <option value="Sonstiges">Sonstiges / Sonderwunsch</option>
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-3 top-1/2 -translate-y-1/2 text-foreground-500 pointer-events-none text-lg" />
                </div>
              </div>
              <div>
                <label className="block text-white/90 text-xs tracking-widest uppercase mb-2">
                  Nachricht
                  <span className="ml-2 font-normal normal-case text-foreground-700">({charCount}/500)</span>
                </label>
                <textarea
                  name="nachricht"
                  value={data.nachricht}
                  onChange={handleChange}
                  rows={5}
                  maxLength={500}
                  placeholder="Erzähl uns von deinen Wünschen ..."
                  className="form-textarea"
                />
              </div>
              <button
                type="submit"
                className="whitespace-nowrap w-full py-4 bronze-btn disabled:opacity-60 text-white text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 hover:shadow-[0_0_25px_rgba(185,27,27,0.4)] cursor-pointer"
              >
                Anfrage absenden
              </button>

              {status === 'success' && (
                <p className="whatsapp-text text-sm text-center">Danke! Wir melden uns bald bei dir.</p>
              )}
              {status === 'error' && (
                <p className="text-brand-red-text font-bold text-sm text-center">Fehler beim Senden. Bitte versuche es erneut.</p>
              )}
            </form>
          </div>

          {/* Right: WhatsApp + Info + Map */}
          <div className="flex flex-col gap-8">
            <a
              href="https://wa.me/491759601217"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="whitespace-nowrap inline-flex items-center justify-center gap-2 md:gap-3 py-3 md:py-4 px-4 whatsapp-btn text-white font-bold text-xs md:text-sm tracking-widest uppercase rounded transition-all duration-300 cursor-pointer"
            >
              <i className="ri-whatsapp-line text-xl" />
              Direkt per WhatsApp schreiben
            </a>

            <div className="bg-background-700 border border-background-300/20 rounded-lg p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-primary-400/10 border border-primary-400/20 flex-shrink-0">
                  <i className="ri-map-pin-line text-primary-400 text-lg" />
                </div>
                <div>
                  <div className="text-white/90 text-xs tracking-widest uppercase mb-1">Hauptstandort</div>
                  <div className="text-white text-sm font-medium">Ferdinand-Porsche-Straße 6, 63500 Seligenstadt</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-primary-400/10 border border-primary-400/20 flex-shrink-0">
                  <i className="ri-mail-line text-primary-400 text-lg" />
                </div>
                <div>
                  <div className="text-white/90 text-xs tracking-widest uppercase mb-1">E-Mail</div>
                  <div className="text-white text-sm font-medium">info@63-performance.de</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-primary-400/10 border border-primary-400/20 flex-shrink-0">
                  <i className="ri-whatsapp-line whatsapp-text text-lg" />
                </div>
                <div>
                  <div className="text-white/90 text-xs tracking-widest uppercase mb-1">WhatsApp / Telefon</div>
                  <div className="text-white text-sm font-medium">0175/9601217</div>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-background-300/20 h-64">
              <iframe
                title="63-Performance Standort Seligenstadt"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.9!2d8.9694!3d50.0421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFerdinand-Porsche-Stra%C3%9Fe%206%2C%2063500%20Seligenstadt!5e0!3m2!1sde!2sde!4v1700000000000"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom white divider */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </section>
  );
}