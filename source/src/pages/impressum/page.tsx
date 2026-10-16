import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import SEOHead, { buildBreadcrumbSchema } from '@/components/feature/SEOHead';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import CookieBanner from '@/pages/home/components/CookieBanner';

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background-900">
      <SEOHead
        title="Impressum – 63-Performance Chiptuning Seligenstadt"
        description="Impressum der 63-Performance: Geschäftsführer Milot Sinani, Ferdinand-Porsche-Straße 6, 63500 Seligenstadt. Alle rechtlichen Angaben gemäß § 5 TMG."
        keywords="Impressum, 63-Performance, Seligenstadt, Milot Sinani"
        canonicalUrl="https://63-performance.de/impressum"
      />
      <Header />
      <main>
        {/* HERO */}
        <section className="relative h-[200px] md:h-[280px] w-full overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="/media/impressum-hero-63-b819f1.webp"
              alt="63-Performance Impressum"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background-900/80 via-background-900/60 to-background-900/90" />
          </div>

          <div className="relative z-10 text-center px-6 md:px-10">
            <h1 className="font-heading font-extrabold text-white uppercase leading-tight text-3xl md:text-4xl lg:text-5xl">
              Impressum
            </h1>
            <p className="text-white/60 mt-2 text-sm md:text-base">
              Angaben gemäß § 5 TMG
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="relative bg-background-900 py-16 md:py-24 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400/30 to-transparent" />
          <div className="w-full px-6 md:px-10 lg:px-16 max-w-3xl mx-auto space-y-14">

            {/* Firmenangaben */}
            <div className="border-l-2 border-primary-400/30 pl-6">
              <h2 className="text-white font-heading font-bold text-base md:text-lg uppercase tracking-wide mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="text-white/80 leading-relaxed text-sm md:text-base space-y-1">
                <p className="font-semibold text-white">63-Performance</p>
                <p>Ferdinand-Porsche-Straße 6</p>
                <p>63500 Seligenstadt</p>
                <p>Deutschland</p>
              </div>
            </div>

            {/* Vertreten durch */}
            <div className="border-l-2 border-primary-400/30 pl-6">
              <h2 className="text-white font-heading font-bold text-base md:text-lg uppercase tracking-wide mb-4">
                Vertreten durch
              </h2>
              <div className="text-white/80 leading-relaxed text-sm md:text-base">
                <p>Geschäftsführer: Milot Sinani</p>
              </div>
            </div>

            {/* Kontakt */}
            <div className="border-l-2 border-primary-400/30 pl-6">
              <h2 className="text-white font-heading font-bold text-base md:text-lg uppercase tracking-wide mb-4">
                Kontakt
              </h2>
              <div className="text-white/80 leading-relaxed text-sm md:text-base space-y-1">
                <p>Telefon: <a href="tel:+491759601217" className="text-primary-400 hover:text-primary-300 transition-colors">+49 1759601217</a></p>
                <p>E-Mail: <a href="mailto:info@63-performance.de" className="text-primary-400 hover:text-primary-300 transition-colors">info@63-performance.de</a></p>
                <p>Web: <a href="https://www.63-performance.de" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">www.63-performance.de</a></p>
              </div>
            </div>

            {/* USt-IdNr */}
            <div className="border-l-2 border-primary-400/30 pl-6">
              <h2 className="text-white font-heading font-bold text-base md:text-lg uppercase tracking-wide mb-4">
                Umsatzsteuer-ID
              </h2>
              <div className="text-white/80 leading-relaxed text-sm md:text-base">
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</p>
                <p className="font-mono text-white mt-1">44 870 06499</p>
              </div>
            </div>

            {/* Gewerbeanmeldung */}
            <div className="border-l-2 border-primary-400/30 pl-6">
              <h2 className="text-white font-heading font-bold text-base md:text-lg uppercase tracking-wide mb-4">
                Gewerbeanmeldung
              </h2>
              <div className="text-white/80 leading-relaxed text-sm md:text-base">
                <p>Das Gewerbe wurde bei der zuständigen Ordnungsbehörde in Seligenstadt angemeldet.</p>
              </div>
            </div>

            {/* Streitschlichtung */}
            <div className="border-l-2 border-primary-400/30 pl-6">
              <h2 className="text-white font-heading font-bold text-base md:text-lg uppercase tracking-wide mb-4">
                Streitschlichtung
              </h2>
              <div className="text-white/80 leading-relaxed text-sm md:text-base space-y-3">
                <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie hier finden: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">https://ec.europa.eu/consumers/odr/</a>.</p>
                <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
              </div>
            </div>

            {/* Haftung für Inhalte */}
            <div className="border-l-2 border-primary-400/30 pl-6">
              <h2 className="text-white font-heading font-bold text-base md:text-lg uppercase tracking-wide mb-4">
                Haftung für Inhalte
              </h2>
              <div className="text-white/80 leading-relaxed text-sm md:text-base space-y-3">
                <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
              </div>
            </div>

            {/* Haftung für Links */}
            <div className="border-l-2 border-primary-400/30 pl-6">
              <h2 className="text-white font-heading font-bold text-base md:text-lg uppercase tracking-wide mb-4">
                Haftung für Links
              </h2>
              <div className="text-white/80 leading-relaxed text-sm md:text-base space-y-3">
                <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
                <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
              </div>
            </div>

            {/* Urheberrecht */}
            <div className="border-l-2 border-primary-400/30 pl-6">
              <h2 className="text-white font-heading font-bold text-base md:text-lg uppercase tracking-wide mb-4">
                Urheberrecht
              </h2>
              <div className="text-white/80 leading-relaxed text-sm md:text-base space-y-3">
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
                <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
              </div>
            </div>

            {/* Verantwortlich für Inhalt */}
            <div className="border-l-2 border-primary-400/30 pl-6">
              <h2 className="text-white font-heading font-bold text-base md:text-lg uppercase tracking-wide mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <div className="text-white/80 leading-relaxed text-sm md:text-base">
                <p>Milot Sinani</p>
                <p>Ferdinand-Porsche-Straße 6</p>
                <p>63500 Seligenstadt</p>
              </div>
            </div>

          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400/20 to-transparent" />
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
    </div>
  );
}