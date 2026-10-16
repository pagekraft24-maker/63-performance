const steps = [
  {
    number: '01',
    title: 'Diagnose',
    text: 'Vor jeder Anpassung prüfen wir das Fahrzeug per Diagnose auf mechanische Defekte.',
  },
  {
    number: '02',
    title: 'Datensicherung',
    text: 'Der originale Softwarestand wird ausgelesen und gesichert. Eine Rückrüstung ist jederzeit möglich.',
  },
  {
    number: '03',
    title: 'Anpassung',
    text: 'Die Kennfelder werden passend zu deinem Fahrzeug und Einsatz angepasst.',
  },
  {
    number: '04',
    title: 'Probelauf',
    text: 'Wir prüfen alle Werte unter Last und übergeben dir das Fahrzeug einsatzbereit.',
  },
];

export default function ProcessSteps() {
  return (
    <section className="relative bg-background-900 py-20 md:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="w-full px-6 md:px-10 lg:px-16 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
            <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Ablauf</span>
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
          </div>
          <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl">
            So läuft dein Eco-Tuning ab
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative p-6 md:p-7 rounded-lg border border-background-300/25 bg-background-700/60 hover:border-primary-400/30 transition-all duration-500"
            >
              <div className="text-4xl md:text-5xl font-heading bronze-gradient-text mb-4 tracking-tighter">
                {step.number}
              </div>
              <h3 className="text-white font-heading font-bold text-lg uppercase tracking-wide mb-3">
                {step.title}
              </h3>
              <p className="text-foreground-300 text-sm leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </section>
  );
}