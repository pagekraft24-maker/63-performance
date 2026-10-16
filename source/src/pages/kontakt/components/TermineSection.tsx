import { useState, type FormEvent } from 'react';

const services = [
  { id: 'stage1', label: 'Leistungssteigerung (Stage 1)' },
  { id: 'stage2', label: 'Leistungssteigerung (Stage 2)' },
  { id: 'stage3', label: 'Leistungssteigerung (Stage 3)' },
  { id: 'popbangs', label: 'Schubabschaltung / Pop & Bangs' },
  { id: 'vmax', label: 'V-Max OFF' },
  { id: 'leistungsmessung', label: 'Leistungsmessung' },
  { id: 'agr_dpf', label: 'AGR / DPF Lösung' },
  { id: 'adblue', label: 'Adblue Lösung' },
  { id: 'lambda', label: 'Lamdasonde / Nox Sensor Lösung' },
  { id: 'cpc', label: 'Mercedes Benz CPC Lösung' },
];

const TOTAL_STEPS = 4;

export default function TermineSection() {
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    location: '',
    message: '',
  });

  const canGoNext = () => {
    if (step === 1) return selectedServices.length > 0;
    if (step === 2) return formData.name.trim() !== '' && formData.email.trim() !== '' && formData.phone.trim() !== '';
    return true;
  };

  const nextStep = () => {
    if (step < TOTAL_STEPS) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Form nur im letzten Schritt abschicken
    if (step !== TOTAL_STEPS) return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot check
    const honeypot = (fd.get('phone_alt') as string || '').trim();
    if (honeypot !== '') {
      setFormState('success');
      return;
    }
    fd.delete('phone_alt');

    // Multi-step fallback: previous step inputs are unmounted from DOM,
    // so ensure all field values from state are present in the payload
    if (!fd.get('name')) fd.set('name', formData.name);
    if (!fd.get('email')) fd.set('email', formData.email);
    if (!fd.get('phone')) fd.set('phone', formData.phone);
    if (!fd.get('vehicle')) fd.set('vehicle', formData.vehicle);
    if (!fd.get('location')) fd.set('location', formData.location);
    if (!fd.get('message')) fd.set('message', formData.message);

    // Add selected services
    if (selectedServices.length > 0) {
      fd.set('services', selectedServices.map((s) => services.find((svc) => svc.id === s)?.label || s).join(', '));
    }

    setFormState('submitting');
    setFormError('');

    try {
      const response = await fetch('https://readdy.ai/api/form/d96dmisut53jbls7kmug', {
        method: 'POST',
        body: new URLSearchParams(fd as any),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });

      const responseText = await response.text();
      let parsed;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const serverMsg = parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText;

      if (response.ok && parsed?.code === 'OK') {
        setFormState('success');
        form.reset();
        setSelectedServices([]);
        setFormData({ name: '', email: '', phone: '', vehicle: '', location: '', message: '' });
        setStep(1);
      } else if (serverMsg.toLowerCase().includes('spam') || serverMsg.toLowerCase().includes('form data is spam')) {
        setFormState('error');
        setFormError('Spam-Erkennung. Bitte versuchen Sie es später erneut.');
      } else {
        setFormState('error');
        setFormError(serverMsg || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
      }
    } catch {
      setFormState('error');
      setFormError('Verbindungsfehler. Bitte versuchen Sie es später erneut.');
    }
  };

  return (
    <>
      {/* TERMINE HERO */}
      <section className="relative min-h-[500px] md:min-h-[600px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/media/termine-hero-63-32aaa6.webp"
            alt="63-Performance Terminbuchung"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-900/70 via-background-900/50 to-background-900/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-background-900/60 via-transparent to-background-900/60" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-10 max-w-3xl mx-auto">
          <h2 className="font-heading font-extrabold text-white uppercase leading-tight text-3xl md:text-4xl lg:text-5xl mb-6">
            Termine
          </h2>
          <p className="text-white/90 font-light leading-relaxed max-w-xl text-sm md:text-base">
            Wir alle haben einen vollen Terminkalender und wenig Zeit. Daher optimieren wir ständig unser Angebot, um unseren Kunden das Leben zu erleichtern. Über unsere Online-Buchungsplattform kannst du deinen Termin bei uns nun ganz bequem buchen. Ganz egal, ob von zu Hause oder unterwegs, mitten in der Nacht oder ganz früh morgens – hol dir deinen Termin auf unserer Website, mit nur einem Klick, wann immer es dir passt.
          </p>
        </div>
      </section>

      {/* ANFRAGEFORMULAR MULTI-STEP */}
      <section className="relative bg-background-900 py-24 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="w-full px-6 md:px-10 lg:px-16 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-white font-heading font-extrabold uppercase text-2xl md:text-3xl lg:text-4xl mb-4">
              Anfrageformular
            </h3>
          </div>

          {formState === 'success' ? (
            <div className="text-center p-12 bg-background-700 border border-primary-400/20 rounded-lg">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-400/10 border border-primary-400/20 mx-auto mb-6">
                <i className="ri-check-line text-3xl text-primary-400" />
              </div>
              <h3 className="text-white font-heading font-extrabold text-2xl uppercase tracking-wider mb-3">
                Anfrage gesendet!
              </h3>
              <p className="text-white/90 text-sm leading-relaxed mb-6">
                Vielen Dank für deine Anfrage. Wir werden uns schnellstmöglich mit dir in Verbindung setzen.
              </p>
              <button
                onClick={() => {
                  setFormState('idle');
                  setStep(1);
                  setSelectedServices([]);
                  setFormData({ name: '', email: '', phone: '', vehicle: '', location: '', message: '' });
                }}
                className="whitespace-nowrap px-8 py-3.5 bronze-btn text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 hover:shadow-[0_0_25px_rgba(185,27,27,0.4)] cursor-pointer"
              >
                Neue Anfrage
              </button>
            </div>
          ) : (
            <form
              id="termin-form"
              data-readdy-form="d96dmisut53jbls7kmug"
              onSubmit={handleSubmit}
              onKeyDown={(e) => {
                // Enter in Input-Feldern: nicht submitten, sondern nächster Schritt
                if (e.key === 'Enter' && e.target instanceof HTMLInputElement && e.target.type !== 'submit') {
                  e.preventDefault();
                  if (step < TOTAL_STEPS && canGoNext()) nextStep();
                }
              }}
              className="space-y-8"
            >
              {/* Progress */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1 h-2 bg-background-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary-500 rounded-full transition-all duration-500"
                      style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                    />
                  </div>
                  <span className="ml-4 text-foreground-500 text-sm font-medium whitespace-nowrap">
                    {step} / {TOTAL_STEPS}
                  </span>
                </div>
              </div>

              {/* Step 1: Dienstleistungen */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-white text-sm tracking-widest uppercase font-bold mb-1">
                      Für welches unserer Produkte oder Dienstleistungen möchtest du ein Angebot anfordern?
                    </label>
                    <span className="text-primary-400 text-xs">* erforderlich</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <label
                        key={service.id}
                        className={`group flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                          selectedServices.includes(service.id)
                            ? 'border-primary-400 bg-primary-400/15 shadow-[0_0_20px_rgba(185,27,27,0.2)]'
                            : 'border-white/20 bg-background-700 hover:border-white/40 hover:bg-background-600'
                        }`}
                      >
                        <div
                          className={`w-7 h-7 flex items-center justify-center rounded-md border-2 transition-all duration-300 flex-shrink-0 ${
                            selectedServices.includes(service.id)
                              ? 'bg-primary-400 border-primary-400 shadow-[0_0_10px_rgba(185,27,27,0.3)]'
                              : 'border-foreground-300/30 bg-foreground-50/5 group-hover:border-foreground-200/50'
                          }`}
                        >
                          {selectedServices.includes(service.id) ? (
                            <i className="ri-check-line text-white text-base font-bold" />
                          ) : (
                            <span className="text-white/20 text-[10px] font-bold select-none">+</span>
                          )}
                        </div>
                        <input
                          type="checkbox"
                          name={`service_${service.id}`}
                          checked={selectedServices.includes(service.id)}
                          onChange={() => toggleService(service.id)}
                          className="sr-only"
                        />
                        <span className="text-white font-medium text-sm leading-snug">{service.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Kontaktdaten */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-white text-sm tracking-widest uppercase font-bold mb-1">
                      Deine Kontaktdaten
                    </label>
                    <span className="text-foreground-500 text-xs">Damit wir dich erreichen können</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white/90 text-xs tracking-widest uppercase font-bold mb-2">
                        Name <span className="text-primary-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Dein Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white/90 text-xs tracking-widest uppercase font-bold mb-2">
                        E-Mail <span className="text-primary-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="deine@email.de"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white/90 text-xs tracking-widest uppercase font-bold mb-2">
                      Telefon <span className="text-primary-400">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="+49 123 456789"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Fahrzeug & Standort */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-white text-sm tracking-widest uppercase font-bold mb-1">
                      Fahrzeug & Standort
                    </label>
                    <span className="text-foreground-500 text-xs">Optional, aber hilfreich für die Vorbereitung</span>
                  </div>
                  <div>
                    <label htmlFor="vehicle" className="block text-white/90 text-xs tracking-widest uppercase font-bold mb-2">
                      Fahrzeug
                    </label>
                    <input
                      id="vehicle"
                      name="vehicle"
                      type="text"
                      value={formData.vehicle}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="z.B. BMW M4 2022"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-white/90 text-xs tracking-widest uppercase font-bold mb-2">
                      Gewünschter Standort
                    </label>
                    <select
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="Seligenstadt">Seligenstadt</option>

                    </select>
                  </div>
                </div>
              )}

              {/* Step 4: Nachricht & Abschluss */}
              {step === 4 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-white text-sm tracking-widest uppercase font-bold mb-1">
                      Zusätzliche Angaben
                    </label>
                    <span className="text-foreground-500 text-xs">Bevor es abgeschickt wird</span>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-white/90 text-xs tracking-widest uppercase font-bold mb-2">
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      maxLength={500}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      placeholder="Weitere Details oder Wünsche..."
                    />
                  </div>
                </div>
              )}

              {/* Honeypot */}
              <input
                type="text"
                name="phone_alt"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="phone_alt_honeypot"
              />

              {formState === 'error' && formError && (
                <div className="p-4 bg-brand-red/10 border border-brand-red/30 rounded text-brand-red-text font-bold text-sm">
                  <i className="ri-error-warning-line mr-2" />
                  {formError}
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={step === 1}
                  className="whitespace-nowrap inline-flex items-center gap-1.5 px-4 sm:px-6 py-3 text-xs sm:text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 cursor-pointer border border-background-300/40 text-white/80 hover:bg-background-700 disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
                >
                  <i className="ri-arrow-left-line" />
                  Zurück
                </button>

                {step < TOTAL_STEPS ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!canGoNext()}
                    className="whitespace-nowrap inline-flex items-center justify-center gap-1.5 px-5 sm:px-8 py-3 text-xs sm:text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex-1 bronze-btn"
                  >
                    Weiter
                    <i className="ri-arrow-right-line" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="whitespace-nowrap inline-flex items-center justify-center gap-1.5 px-5 sm:px-8 py-3 text-xs sm:text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex-1 bronze-btn"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <i className="ri-loader-4-line animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      'Anfrage senden'
                    )}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </section>
    </>
  );
}