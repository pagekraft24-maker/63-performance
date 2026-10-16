import { Link } from 'react-router-dom';

const footerNav = [
  { label: 'Start', href: '/' },
  { label: 'Über uns', href: '/uber-uns' },
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Eco-Tuning', href: '/eco-tuning' },
  { label: 'Preise', href: '/preise' },
  { label: 'Standort', href: '/standorte' },
  { label: 'Referenzen', href: '/referenzen' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontakt', href: '/kontakt' },
];

const legalNav = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
  { label: 'AGB', href: '/agb' },
  { label: 'Widerrufsrecht', href: '/widerrufsrecht' },
];

export default function Footer() {
  return (
    <footer className="bg-background-950 border-t border-background-300/20" itemScope itemType="https://schema.org/LocalBusiness">
      <div className="w-full px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1: Brand */}
          <div>
            <div className="mb-5">
              <span className="sr-only" itemProp="name">63-Performance</span>
              <img
                src="/media/logo-large-2cc5d2.webp"
                alt="63-Performance Logo"
                className="h-10 w-auto object-contain brightness-0 invert mb-3"
                itemProp="image"
              />
              <span className="text-primary-400 text-xs tracking-[0.3em] uppercase block">
                Chiptuning Seligenstadt
              </span>
            </div>
            <address className="not-italic text-foreground-600 text-sm leading-relaxed" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <div itemProp="streetAddress">Ferdinand-Porsche-Straße 6</div>
              <div><span itemProp="postalCode">63500</span> <span itemProp="addressLocality">Seligenstadt</span></div>

              <a href="mailto:info@63-performance.de" className="hover:text-primary-400 transition-colors duration-300 block mt-1 cursor-pointer">
                info@63-performance.de
              </a>
              <a href="tel:+491759601217" itemProp="telephone" className="hover:text-primary-400 transition-colors duration-300 block mt-1 cursor-pointer">
                0175 9601217
              </a>
            </address>
            <div className="mt-5 w-12 h-px bg-primary-400/40" />
          </div>

          {/* Column 2: Navigation */}
          <nav aria-label="Footer Navigation">
            <h4 className="text-white text-xs tracking-[0.3em] uppercase font-semibold mb-6">Navigation</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-foreground-600 hover:text-primary-400 text-sm transition-colors duration-300 cursor-pointer">
                    {link.label}
                  </Link>
                </li>
              ))}
              {legalNav.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-foreground-600 hover:text-primary-400 text-sm transition-colors duration-300 cursor-pointer">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Social + WhatsApp */}
          <div>
            <h4 className="text-white text-xs tracking-[0.3em] uppercase font-semibold mb-6">Social Media</h4>
            <div className="flex gap-3 mb-8">
              <a
                href="https://www.instagram.com/63performance"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="63-Performance auf Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-md border border-background-300 hover:border-primary-400 text-foreground-600 hover:text-primary-400 transition-all duration-300 cursor-pointer"
              >
                <i className="ri-instagram-line text-lg" />
              </a>
              <a
                href="https://wa.me/491759601217"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="63-Performance auf WhatsApp"
                className="w-10 h-10 flex items-center justify-center rounded-md border border-background-300 hover:border-[#25D366] text-foreground-600 hover:text-[#25D366] transition-all duration-300 cursor-pointer"
              >
                <i className="ri-whatsapp-line text-lg" />
              </a>
            </div>
            <a
              href="https://wa.me/491759601217"
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="63-Performance direkt per WhatsApp kontaktieren"
              className="inline-flex items-center gap-2 px-5 py-3 text-white text-xs tracking-widest uppercase font-bold rounded transition-all duration-300 cursor-pointer"
              style={{ backgroundColor: '#25D366' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1ea952'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#25D366'; }}
            >
              <i className="ri-whatsapp-line text-base" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background-300/10">
        <div className="w-full px-6 md:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-foreground-700 text-xs">
            &copy; {new Date().getFullYear()} 63-Performance – Alle Rechte vorbehalten.
          </p>
          <p className="text-foreground-700 text-xs">Bring PS auf die Straße.</p>
        </div>
      </div>
    </footer>
  );
}