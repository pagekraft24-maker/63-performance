
export default function FinalCTA() {
  return (
    <section className="relative bg-background-900 py-20 md:py-28 overflow-hidden">
      {/* Radial Heat Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-500/8 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary-600/10 blur-[80px] pointer-events-none"></div>

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground-100 uppercase tracking-tighter mb-4">
            Bereit für mehr Leistung<span className="heat-gradient-text">?</span>
          </h2>
          <p className="text-base md:text-lg text-white/90 font-label mb-10 leading-relaxed">
            Sichere dir deinen Termin online – jederzeit, in nur einem Klick.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://calendly.com/sinanimilot/beratung"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="glow-btn heat-gradient text-base font-label text-foreground-50 px-10 py-4 rounded-full uppercase tracking-wider font-semibold whitespace-nowrap cursor-pointer"
            >
              Termin buchen
            </a>
            <a
              href="https://wa.me/491759601217"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base font-label text-white px-10 py-4 rounded-full uppercase tracking-wider font-semibold whatsapp-btn transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-whatsapp-line text-lg"></i>
              WhatsApp schreiben
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}