import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 30, suffix: '%', prefix: 'bis +', label: 'Mehrleistung' },
  { value: 1, suffix: '', prefix: '', label: 'Standort im Rhein-Main-Gebiet' },
  { value: 100, suffix: '%', prefix: '', label: 'individuelle Software' },
  { value: 98, suffix: '%', prefix: '', label: 'Kundenzufriedenheit' },
];

function AnimatedStat({ value, suffix, prefix, label }: (typeof stats)[0]) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1800;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(Math.round(eased * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-heading heat-gradient-text mb-2 tracking-tighter">
        {prefix}{displayValue}{suffix}
      </div>
      <p className="text-xs md:text-sm text-white/90 font-label uppercase tracking-[0.15em] leading-relaxed max-w-[180px] mx-auto">
        {label}
      </p>
    </div>
  );
}

export default function StatBand() {
  return (
    <section className="relative bg-background-900 py-16 md:py-20 border-t border-b border-background-300/20">
      {/* Subtle glow behind stats */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/3 to-transparent pointer-events-none"></div>

      <div className="relative w-full px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-5xl mx-auto">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}