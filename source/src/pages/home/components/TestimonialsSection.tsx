import { useState } from 'react';

const testimonials = [
  {
    stars: 5,
    text: 'Absolut begeistert! Mein BMW M3 fühlt sich an wie ein komplett neues Fahrzeug. Die Qualität der Software ist auf höchstem Niveau – saubere Programmierung, kein einziger Fehler. Ich bin seit Jahren Autoliebhaber und weiß, was Qualität bedeutet. 63-Performance liefert!',
    name: 'Marcus T.',
    detail: 'BMW M3 – Stage 1 Chiptuning',
  },
  {
    stars: 5,
    text: 'Von der Anfrage bis zur Übergabe alles perfekt. Der Unterschied nach dem Tuning ist Wahnsinn – mein Golf GTI zieht jetzt wie ein völlig anderes Auto. Plus: der Pop & Bangs Sound ist genau richtig, nicht zu penetrant. Top Beratung, faire Preise.',
    name: 'Stefan K.',
    detail: 'VW Golf GTI – Stage 1 + Pop & Bangs',
  },
  {
    stars: 5,
    text: 'Habe meinen AMG C63 bei 63-Performance tunen lassen. Die Leistungssteigerung ist spürbar und sicher – keine Probleme nach Monaten. Was mir besonders gefällt: die ehrliche Beratung. Keine Versprechungen, die nicht gehalten werden können.',
    name: 'Felix B.',
    detail: 'Mercedes AMG C63 – Leistungssteigerung',
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="kundenstimmen" className="relative bg-background-900 py-24 md:py-32 overflow-hidden">
      <div className="absolute top-16 left-1/2 -translate-x-1/2 text-primary-400/5 font-extrabold text-[200px] select-none pointer-events-none">&ldquo;</div>
      <div className="relative w-full px-6 md:px-10 lg:px-16 max-w-4xl mx-auto">
        {/* Section Label */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
            <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Kundenstimmen</span>
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
          </div>
          <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl">
            Das sagen <span className="text-primary-400">unsere Kunden.</span>
          </h2>
        </div>

        <div className="text-center">
          <div className="flex justify-center gap-1.5 mb-8">
            {Array.from({ length: testimonials[active].stars }).map((_, i) => (
              <i key={i} className="ri-star-fill text-primary-400 text-lg" />
            ))}
          </div>
          <blockquote className="text-white font-light leading-relaxed mb-8 mx-auto text-base md:text-lg">
            &ldquo;{testimonials[active].text}&rdquo;
          </blockquote>
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-px bg-primary-400/60" />
            <span className="text-white font-semibold tracking-wider text-sm uppercase">{testimonials[active].name}</span>
            <span className="text-primary-400 text-xs tracking-widest uppercase">{testimonials[active].detail}</span>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-400 cursor-pointer ${
                i === active ? 'w-8 h-2 bg-primary-400' : 'w-2 h-2 bg-foreground-700/30 hover:bg-foreground-700/60'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-background-300 hover:border-primary-400 text-foreground-600 hover:text-primary-400 transition-all duration-300 cursor-pointer"
            aria-label="Vorherige Bewertung"
          >
            <i className="ri-arrow-left-s-line text-xl" />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-background-300 hover:border-primary-400 text-foreground-600 hover:text-primary-400 transition-all duration-300 cursor-pointer"
            aria-label="Nächste Bewertung"
          >
            <i className="ri-arrow-right-s-line text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
}