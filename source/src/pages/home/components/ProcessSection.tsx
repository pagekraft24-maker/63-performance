const steps = [
  {
    num: '01',
    icon: 'ri-whatsapp-line',
    label: 'Schritt 01',
    title: 'Anfrage',
    desc: 'Schreib uns per WhatsApp oder ruf an. Schick uns dein Fahrzeug und erzähl uns deine Wünsche.',
  },
  {
    num: '02',
    icon: 'ri-search-line',
    label: 'Schritt 02',
    title: 'Beratung & Prüfung',
    desc: 'Wir prüfen die Möglichkeiten für dein Modell und erstellen ein individuelles Angebot.',
  },
  {
    num: '03',
    icon: 'ri-tools-line',
    label: 'Schritt 03',
    title: 'Optimierung',
    desc: 'Wir programmieren deine individuelle Software – präzise, sicher und mit modernster Technik.',
  },
  {
    num: '04',
    icon: 'ri-award-line',
    label: 'Schritt 04',
    title: 'Testfahrt',
    desc: 'Erlebe das Ergebnis selbst. Fertig, um die Straße zu erobern.',
  },
];

export default function ProcessSection() {
  return (
    <section id="ablauf" className="relative py-24 md:py-32 bg-background-800">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400/30 to-transparent" />
      <div className="w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
            <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Unser Prozess</span>
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
          </div>
          <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl">
            In 4 Schritten zum <span className="text-primary-400">neuen Fahrgefühl.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-[72px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-background-300/20 via-primary-400/20 to-background-300/20" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <div className="mb-3">
                  <span className="text-primary-400/30 font-extrabold text-4xl select-none">{step.num}</span>
                </div>
                <div className="w-20 h-20 flex items-center justify-center rounded-full mb-6 border border-background-300/30 bg-background-700">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-background-600">
                    <i className={`${step.icon} text-2xl text-primary-400`} />
                  </div>
                </div>
                <span className="text-primary-400 text-xs tracking-[0.3em] uppercase font-medium mb-3 block">{step.label}</span>
                <h3 className="font-bold text-base tracking-widest uppercase mb-4 text-white">{step.title}</h3>
                <p className="text-foreground-600 text-sm leading-relaxed max-w-[220px]">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="lg:hidden mt-8 mx-auto w-px h-8 bg-gradient-to-b from-primary-400/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400/20 to-transparent" />
    </section>
  );
}