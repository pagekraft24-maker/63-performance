const uspCards = [
  {
    icon: 'ri-cpu-line',
    title: 'Individuelle Software',
    description:
      'Für jedes Fahrzeug eine eigens programmierte Software. Schubabschaltung zu laut? Kein Problem – wir passen die Software exakt nach deinem Wunsch an.',
  },
  {
    icon: 'ri-chat-smile-2-line',
    title: 'Professionelle Beratung',
    description:
      'Unsicher, was in deinem Auto steckt? Du wirst überrascht sein. Wir beraten dich ehrlich zu Ablauf, Kosten und allen Risiken.',
  },
  {
    icon: 'ri-money-euro-circle-line',
    title: 'Unschlagbare Preise',
    description:
      'Premium-Software zu Top-Preisen – dank jahrelanger Expertise. Überzeug dich selbst.',
  },
];

export default function USPCards() {
  return (
    <section className="relative bg-background-800 py-20 md:py-28">
      <div className="w-full px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {uspCards.map((card, i) => (
            <div
              key={card.title}
              className="glass-card rounded-xl p-8 md:p-10 flex flex-col items-center text-center group"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 md:w-18 md:h-18 rounded-full heat-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${card.icon} text-2xl md:text-3xl text-foreground-50`}></i>
              </div>

              <h3 className="text-lg md:text-xl font-heading text-foreground-100 uppercase tracking-wider mb-4">
                {card.title}
              </h3>
              <p className="text-sm text-foreground-600 leading-relaxed font-label max-w-xs">
                {card.description}
              </p>

              {/* Decorative bottom accent line */}
              <div className="mt-6 w-12 h-0.5 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}