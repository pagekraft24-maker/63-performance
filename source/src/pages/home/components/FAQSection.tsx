import { useState } from 'react';

const faqs = [
  {
    q: 'Was kostet ein Stage 1 Chiptuning bei 63-Performance?',
    a: 'Stage 1 Chiptuning beginnt bei uns ab 379 €. Der Preis variiert je nach Fahrzeug, Motorisierung und gewünschten Optionen wie Pop & Bangs oder Getriebeoptimierung. Schreib uns dein Fahrzeug und wir erstellen ein individuelles Angebot!',
  },
  {
    q: 'Ist Chiptuning sicher für mein Fahrzeug?',
    a: 'Ja – wenn es von Profis gemacht wird. Wir arbeiten ausschließlich innerhalb der Sicherheitsreserven deines Motors. Dein Fahrzeug bleibt voll alltagstauglich und die Langlebigkeit wird nicht beeinträchtigt.',
  },
  {
    q: 'Welche Fahrzeuge tunt ihr?',
    a: 'Wir tun praktisch alle modernen Fahrzeuge mit Benzin- oder Dieselmotor – von VW Golf GTI über BMW M und Mercedes AMG bis hin zu Audi RS, Porsche und vielen weiteren Modellen. Frag einfach nach deinem Modell!',
  },
  {
    q: 'Wie lange dauert eine Softwareoptimierung?',
    a: 'In der Regel dauert das Tuning 2–3 Stunden. Komplexere Projekte wie Getriebeoptimierung oder Codierung können länger dauern. Wir stimmen den Zeitplan immer individuell mit dir ab.',
  },
  {
    q: 'Kann ich die Software wieder zurücksetzen?',
    a: 'Absolut! Deine Original-Software wird vor jeder Optimierung sicher gespeichert. Jederzeit kannst du zurück zum Werkzustand – volle Flexibilität ohne Risiko.',
  },
  {
    q: 'Beeinflusst Chiptuning meine Versicherung oder TÜV?',
    a: 'Bei unserer Softwareoptimierung wird keine Änderung in den Fahrzeugpapieren eingetragen. Die Software-Anpassung ist reversibel und fällt bei der Abnahme nicht auf. Dennoch empfehlen wir, die Versicherung zu informieren – für viele ist die Anpassung ohne Aufpreis versichert.',
  },
  {
    q: 'Was ist Pop & Bangs und ist es schädlich?',
    a: 'Pop & Bangs (Schubblubbern) ist eine Soundoptimierung, die bei Schubabschaltung knackende Geräusche erzeugt. Wir programmieren es so, dass es deinem Motor nicht schadet – kein übermäßiger Kraftstoffeinspritz, kein Risiko.',
  },
  {
    q: 'Bietet ihr auch ECO-Tuning an?',
    a: 'Ja! Mit ECO-Tuning optimieren wir die Motorsteuerung auf maximalen Wirkungsgrad – du sparst Kraftstoff, ohne Leistung zu verlieren. Besonders sinnvoll für Vielfahrer und Firmenwagen.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="relative bg-background-50 py-24 md:py-32 overflow-hidden">
      {/* Top transition fade from base → elevated */}
      <div className="absolute top-0 left-0 w-full h-[160px] bg-gradient-to-b from-background-900 to-transparent pointer-events-none" />

      {/* Top glow divider */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      {/* Full-bleed background image with dark overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/media/generated-image-july-19-2026-12-55pm-d509ba.webp"
          alt=""
          className="full-bleed-img"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/55 to-black/40" />
      </div>

      {/* Ambient glows */}
      <div className="absolute right-0 top-1/2 w-96 h-96 rounded-full bg-primary-400/3 blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/3 w-80 h-80 rounded-full bg-primary-400/2 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
            <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">FAQ</span>
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
          </div>
          <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-4">
            Häufige <span className="text-primary-400">Fragen</span>
          </h2>
          <p className="text-foreground-200 font-light max-w-xl mx-auto leading-relaxed">
            Alles was du über Chiptuning wissen musst – ehrlich und direkt beantwortet.
          </p>
        </div>

        {/* Two-column FAQ grid – elevated cards with clear 1px borders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 items-start">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`group rounded-lg border transition-all duration-500 overflow-hidden ${
                openIndex === i
                  ? 'border-primary-400/70 bg-background-200/80'
                  : 'card-elevated'
              }`}
            >
              <button
                onClick={(e) => toggle(i, e)}
                className="w-full flex items-center justify-between gap-4 py-5 px-5 md:px-6 text-left cursor-pointer"
                aria-expanded={openIndex === i}
              >
                <span className={`font-semibold text-sm md:text-base transition-colors duration-300 ${
                  openIndex === i ? 'text-primary-400' : 'text-foreground-100 group-hover:text-primary-400'
                }`}>
                  {faq.q}
                </span>
                <span className={`w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 transition-all duration-300 ${
                  openIndex === i
                    ? 'bg-primary-400 text-white'
                    : 'bg-background-200/60 text-primary-400/70 group-hover:text-primary-400'
                }`}>
                  <i className={`ri-add-line text-sm transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`} />
                </span>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-foreground-400 text-sm leading-relaxed px-5 md:px-6 pb-5">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground-500 text-sm mb-4">Noch eine Frage die hier nicht beantwortet wird?</p>
          <a
            href="https://wa.me/491759601217"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-sm whatsapp-btn whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            <i className="ri-whatsapp-line text-lg" />
            Direkt per WhatsApp fragen
          </a>
        </div>
      </div>

      {/* Bottom glow divider */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </section>
  );
}