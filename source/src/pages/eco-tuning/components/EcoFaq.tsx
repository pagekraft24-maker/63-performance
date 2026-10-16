import { useState } from 'react';

const faqs = [
  {
    question: 'Wie viel spart Eco-Tuning wirklich?',
    answer: 'Das hängt vom Fahrzeug, der Beladung und dem Fahrprofil ab. Üblich sind 5 bis 15 %, im Schnitt 8 bis 10 %. Am meisten profitieren Fahrzeuge mit hoher Laufleistung und gleichmäßigem Einsatz.',
  },
  {
    question: 'Wird der Motor dadurch stärker belastet?',
    answer: 'Nein. Beim Eco-Tuning geht es nicht um maximale Leistung, sondern um einen effizienteren Betrieb. Der Motor läuft häufiger mit niedrigerer Drehzahl.',
  },
  {
    question: 'Kann das Tuning rückgängig gemacht werden?',
    answer: 'Ja. Der originale Softwarestand wird vorher gesichert und kann jederzeit wieder aufgespielt werden.',
  },
  {
    question: 'Wie genau ist der Rechner?',
    answer: 'Der Rechner zeigt eine Schätzung auf Basis deiner Angaben. Die tatsächliche Ersparnis kann je nach Einsatz höher oder niedriger ausfallen.',
  },
];

export default function EcoFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative bg-background-50 py-20 md:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="w-full px-6 md:px-10 lg:px-16 max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
            <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">FAQ</span>
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
          </div>
          <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl">
            Häufige Fragen
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-lg border border-background-300/25 bg-background-700/60 overflow-hidden transition-colors duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-5 cursor-pointer"
                >
                  <span className="text-white font-body font-semibold text-sm md:text-base">
                    {faq.question}
                  </span>
                  <span className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-primary-400">
                    <i className={`${isOpen ? 'ri-subtract-line' : 'ri-add-line'} text-xl`} />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-5 text-foreground-300 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </section>
  );
}