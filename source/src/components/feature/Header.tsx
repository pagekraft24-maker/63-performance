import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Über uns', href: '/uber-uns' },
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Eco-Tuning', href: '/eco-tuning' },
  { label: 'Leistungsrechner', href: '/#konfigurator' },
  { label: 'Preise', href: '/preise' },
  { label: 'Standort', href: '/standorte' },
  { label: 'Referenzen', href: '/referenzen' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontakt', href: '/kontakt' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background-900/95 backdrop-blur-md border-b border-primary-500/20'
            : 'xl:bg-transparent bg-background-900/80'
        }`}
      >
        <div className="w-full px-4 md:px-10 min-[1700px]:px-16">
          <div className="flex items-center justify-between gap-6 h-14 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group cursor-pointer min-w-0 xl:shrink-0">
              <img
                src="/media/logo-large-2cc5d2.webp"
                alt="63-Performance Logo"
                className="h-8 md:h-11 xl:h-8 min-[1700px]:h-11 w-auto brightness-0 invert object-contain transition-all duration-300 group-hover:opacity-90"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-4 min-[1700px]:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="relative text-[12px] tracking-[0.06em] min-[1700px]:text-[13px] min-[1700px]:tracking-[0.12em] uppercase font-medium transition-colors duration-300 group whitespace-nowrap text-foreground-400 hover:text-primary-400"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary-400 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              <a
                href="https://calendly.com/sinanimilot/beratung"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="whitespace-nowrap px-5 min-[1700px]:px-6 py-2.5 bronze-btn text-xs min-[1700px]:text-sm tracking-widest uppercase font-semibold rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(185,27,27,0.4)] cursor-pointer"
              >
                Termin buchen
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden flex flex-col gap-1 p-2 cursor-pointer"
              aria-label="Menü öffnen"
            >
              <span className={`block w-5 h-0.5 bg-primary-400 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block w-5 h-0.5 bg-primary-400 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-primary-400 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background-950 backdrop-blur-xl flex flex-col items-center justify-center gap-6 transition-all duration-500 xl:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            to={link.href}
            onClick={() => setMobileOpen(false)}
            className={`text-white hover:text-primary-400 text-2xl tracking-widest uppercase font-bold transition-all duration-500 ${
              mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://calendly.com/sinanimilot/beratung"
          target="_blank"
          rel="nofollow noopener noreferrer"
          onClick={() => setMobileOpen(false)}
          className={`mt-4 whitespace-nowrap px-10 py-4 bronze-btn text-lg tracking-widest uppercase font-bold rounded transition-all duration-500 ${
            mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: `${navLinks.length * 80}ms` }}
        >
          Termin buchen
        </a>
      </div>
    </>
  );
}