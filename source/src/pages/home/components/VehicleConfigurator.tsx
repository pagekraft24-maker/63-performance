import { useEffect, useRef, useState } from 'react';

export default function VehicleConfigurator() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [frameHeight, setFrameHeight] = useState(0);

  useEffect(() => {
    const existing = document.querySelector('script[src*="conf.fileservice.app/embed.js"]');
    if (existing) return;

    const script = document.createElement('script');
    script.src = 'https://conf.fileservice.app/embed.js?v=1789472015';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const root = frameRef.current;
    if (!root) return;

    let frameId = 0;
    let lastHeight = 0;

    const measure = () => {
      const iframe = root.querySelector('iframe#filesuite-konfigurator') as HTMLIFrameElement | null;
      if (!iframe) return;
      const inlineHeight = Number.parseInt(iframe.style.height, 10);
      const height = iframe.offsetHeight || (Number.isFinite(inlineHeight) ? inlineHeight : 0);
      if (height > 0 && height !== lastHeight) {
        lastHeight = height;
        setFrameHeight(height);
      }
    };

    const schedule = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(measure);
    };

    const observer = new MutationObserver(schedule);
    observer.observe(root, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style'],
    });

    schedule();
    const poller = window.setInterval(measure, 600);

    return () => {
      observer.disconnect();
      window.clearInterval(poller);
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background-50" id="konfigurator">
      <div className="absolute top-0 left-0 w-full h-[160px] bg-gradient-to-b from-background-900 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <div className="absolute inset-0">
        <img
          src="/media/generated-image-july-19-2026-12-38pm-86338d.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/55 to-black/40" />
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary-500/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <p className="inline-block px-4 py-1.5 border border-primary-400/40 text-primary-400 text-xs tracking-[0.3em] uppercase font-medium rounded-sm bg-primary-400/10 backdrop-blur-sm mb-6">
            Fahrzeug-Konfigurator
          </p>
          <h2 className="font-heading font-extrabold text-white uppercase leading-tight text-3xl md:text-4xl lg:text-5xl mb-5">
            Finde deine <strong className="text-primary-400 font-extrabold">Leistung.</strong>
          </h2>
          <p className="text-foreground-200 font-light leading-relaxed max-w-xl mx-auto text-sm md:text-base">
            Waehle dein Fahrzeug in 4 Schritten und entdecke das volle Tuning-Potenzial mit originalen und optimierten Leistungsdaten.
          </p>
        </div>

        <div
          ref={frameRef}
          className="relative rounded-[1.75rem] border border-background-300/30 overflow-hidden transition-[height] duration-700 ease-out"
          style={{ height: frameHeight > 0 ? `${frameHeight}px` : '360px' }}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent z-20" />
          <div
            data-filesuite-configurator=""
            data-license="fs_24c797f030b711c568faea0db5b015a74626d89ff630c5e4"
            data-dyno="1"
            data-solutions="1"
            className="w-full"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </section>
  );
}