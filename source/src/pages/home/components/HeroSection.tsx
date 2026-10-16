import { useRef, useEffect } from 'react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      video.play().catch(() => {});
    };

    playVideo();

    // Safari fallback: retry on first user interaction
    const onInteraction = () => {
      playVideo();
      document.removeEventListener('touchstart', onInteraction);
      document.removeEventListener('click', onInteraction);
    };
    document.addEventListener('touchstart', onInteraction, { once: true });
    document.addEventListener('click', onInteraction, { once: true });

    return () => {
      document.removeEventListener('touchstart', onInteraction);
      document.removeEventListener('click', onInteraction);
    };
  }, []);

  return (
    <section className="relative min-h-[550px] md:min-h-[800px] lg:min-h-[950px] w-full overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          src="/media/hero-video.mp4"
          poster="/media/hero-poster.webp"
          autoPlay
          loop
          muted
          playsInline
          disableRemotePlayback
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-900/40 via-background-900/25 to-background-900/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-background-900/40 via-transparent to-background-900/25" />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-10 max-w-4xl mx-auto pt-20 md:pt-24">

        <h1 className="font-heading font-extrabold text-white uppercase leading-tight text-[2.5rem] sm:text-4xl md:text-5xl lg:text-6xl mb-6">
          Bring PS auf die{' '}
          <br className="hidden md:block" />
          <strong className="text-primary-400 font-extrabold">Straße.</strong>
        </h1>

        <p className="mt-4 text-white/90 font-light leading-relaxed max-w-xl text-xs sm:text-sm md:text-base">
          Herzlich Willkommen bei <strong className="text-white font-semibold">63-Performance</strong> – dein Spezialist für
          <strong className="text-primary-400 font-semibold"> Chiptuning, Leistungssteigerung und Softwareoptimierung</strong> – maßgeschneidert.
          <br className="hidden md:block" />
          Wir bringen deinem Fahrzeug das volle Potenzial – sicher, spürbar.
        </p>

        <div className="mt-8 md:mt-10 flex flex-row items-center justify-center gap-3 md:gap-4">
          <a
            href="https://calendly.com/sinanimilot/beratung"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="whitespace-nowrap h-10 md:h-14 flex items-center justify-center px-5 md:px-10 bronze-btn text-xs md:text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 inline-flex cursor-pointer"
          >
            Jetzt Termin buchen
          </a>
          <a
            href="https://wa.me/491759601217"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="whitespace-nowrap h-10 md:h-14 flex items-center justify-center gap-1.5 md:gap-2.5 px-4 md:px-8 bg-[#25D366] hover:bg-[#1ea952] text-white text-xs md:text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 hover:shadow-[0_0_25px_rgba(37,211,102,0.4)] cursor-pointer"
          >
            <i className="ri-whatsapp-line text-lg md:text-xl" />
            WhatsApp
          </a>
        </div>

        {/* Brand badges */}
        <div className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-x-3 md:gap-x-6 gap-y-1.5 md:gap-y-2">
          <span className="text-white text-xs tracking-[0.3em] uppercase">Leistungsstark</span>
          <span className="text-white/50 text-xs">|</span>
          <span className="text-white text-xs tracking-widest uppercase font-medium">AMG</span>
          <span className="text-white/50 text-xs">|</span>
          <span className="text-white text-xs tracking-widest uppercase font-medium">BMW M</span>
          <span className="text-white/50 text-xs">|</span>
          <span className="text-white text-xs tracking-widest uppercase font-medium">Audi RS</span>
          <span className="text-white/50 text-xs">|</span>
          <span className="text-white text-xs tracking-widest uppercase font-medium">VW GTI</span>
        </div>
      </div>
    </section>
  );
}