import { useState } from 'react';

const reviews = [
  {
    name: 'Alan Tarasek',
    stars: 5,
    time: 'vor 3 Wochen',
    text: 'Absolute Empfehlung! Habe Stage 2 machen lassen sowie DPF, AGR und AdBlue ausprogrammieren lassen. Alles läuft einwandfrei, keine Fehler oder Probleme. Super netter Kontakt, saubere Arbeit und das Ergebnis ist sogar besser als erwartet. Jederzeit wieder',
  },
  {
    name: 'Dwayne',
    stars: 5,
    time: 'vor 2 Wochen',
    text: 'Von Anfang bis Ende alles top. Termin unkompliziert und schnell vereinbaren können. Dort angekommen und freundlich empfangen worden und es ging direkt los. Top Sachkenntnisse und top Preis. Auto läuft seit Monaten perfekt. Würde immer wieder kommen',
  },
  {
    name: 'eric K',
    stars: 5,
    time: 'vor 2 Monaten',
    text: 'War mit meinem BMW dort hab Pop & Bangs machen lassen. Bin echt zufrieden mit dem Ergebnis. Der Sound ist brutal und genau so geworden, wie ich es wollte. Die Leute dort waren korrekt, haben sauber gearbeitet und alles gut erklärt. Kann ich auf jeden Fall weiterempfehlen.',
  },
  {
    name: 'Michael',
    stars: 5,
    time: 'vor 3 Wochen',
    text: 'Ich habe mein Fahrzeug bei 63-Performance in Seligenstadt upgraden lassen und bin restlos begeistert! Die Beratung war von Anfang an extrem kompetent, professionell und auf mein Auto abgestimmt. Man merkt sofort, dass hier echte Experten am Werk sind, die ihr Handwerk verstehen. Das Ergebnis ist absolut spürbar und hat meine Erwartungen übertroffen. Der Service war top, die Abwicklung reibungslos und das Preis-Leistungs-Verhältnis stimmt einfach. Klare Empfehlung!',
  },
];

const TRUNCATE_LENGTH = 100;

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} von 5 Sternen`}>
      {Array.from({ length: 5 }, (_, i) => (
        <i
          key={i}
          className={`text-sm ${i < count ? 'ri-star-fill text-[#F5A623]' : 'ri-star-fill text-foreground-700'}`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  const initial = review.name.charAt(0).toUpperCase();
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > TRUNCATE_LENGTH;
  const displayText = expanded || !isLong
    ? review.text
    : `${review.text.slice(0, TRUNCATE_LENGTH).trimEnd()}…`;

  return (
    <div className="card-elevated rounded-xl p-5 md:p-6 flex flex-col gap-4 flex-shrink-0 w-[85vw] max-w-[380px] sm:w-auto sm:max-w-none snap-start">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-bold text-white leading-none">{initial}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-foreground-200 text-sm font-semibold">{review.name}</span>
            <span className="text-foreground-600 text-xs">{review.time}</span>
          </div>
        </div>
        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
          <span className="text-[10px] font-bold text-[#4285F4] leading-none">G</span>
        </div>
      </div>

      <StarRating count={review.stars} />

      <div className="flex flex-col gap-1 flex-1">
        <p className="text-foreground-300 text-sm leading-relaxed">
          {displayText}
        </p>
        {isLong && (
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="self-start text-xs font-semibold text-primary-400 hover:text-primary-300 transition-colors duration-200 cursor-pointer whitespace-nowrap mt-0.5"
          >
            {expanded ? 'Weniger anzeigen' : 'Weiterlesen'}
            <i className={`ml-1 ${expanded ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}`} />
          </button>
        )}
      </div>
    </div>
  );
}

export default function GoogleReviewsSection() {
  return (
    <section className="relative bg-background-50 py-10 md:py-14 overflow-hidden" aria-labelledby="google-reviews-titel">
      {/* Top glow divider */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <div className="w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-6">
        </div>

        {/* DESKTOP: grid */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-10">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>

        {/* MOBILE: horizontal swipe carousel */}
        <div className="sm:hidden flex overflow-x-auto gap-4 snap-x snap-mandatory pb-4 mb-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://share.google/p1qTxOkB3x47f22Ms"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 md:px-8 py-2.5 md:py-3.5 border border-[var(--brand-red)] text-[var(--brand-red-text)] hover:bg-[var(--brand-red)] hover:text-white text-xs md:text-sm tracking-widest uppercase font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(185,28,28,0.35)] cursor-pointer max-w-[260px] md:max-w-none mx-auto w-full"
          >
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
              <span className="text-[8px] font-bold text-[#4285F4] leading-none">G</span>
            </div>
            <span className="hidden sm:inline">Alle Bewertungen auf Google ansehen</span>
            <span className="sm:hidden">Bewertungen</span>
          </a>
        </div>
      </div>

      {/* Bottom glow divider */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </section>
  );
}