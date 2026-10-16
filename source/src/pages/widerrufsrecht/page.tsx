import Header from '@/components/feature/Header';
import SEOHead, { buildBreadcrumbSchema } from '@/components/feature/SEOHead';
import Footer from '@/components/feature/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import CookieBanner from '@/pages/home/components/CookieBanner';

const withdrawalSections = [
  {
    title: '1. Widerrufsrecht',
    content: `Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.`,
  },
  {
    title: '2. Widerrufsfrist',
    content: `Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.`,
  },
  {
    title: '3. Adresse',
    content: `Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (63-Performance, Ferdinand-Porsche-Straße 6, 63500 Seligenstadt, Deutschland, Telefon: +49 1759601217, E-Mail: info@63-performance.de) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.`,
  },
  {
    title: '4. Einhaltung der Frist',
    content: `Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.`,
  },
  {
    title: '5. Folgen des Widerrufs',
    content: `Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.`,
  },
  {
    title: '6. Zurückbehaltungsrecht',
    content: `Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.`,
  },
  {
    title: '7. Rücksendung der Waren',
    content: `Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden.`,
  },
  {
    title: '8. Rücksendekosten',
    content: `Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.`,
  },
  {
    title: '9. Wertersatz bei Verträgen über Warenlieferungen',
    content: `Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.`,
  },
  {
    title: 'Widerrufsformular',
    content: `Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden es zurück.

An 63-Performance, Ferdinand-Porsche-Straße 6, 63500 Seligenstadt, Deutschland, E-Mail: info@63-performance.de:

Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/die Erbringung der folgenden Dienstleistung (*),

Bestellt am (*)/erhalten am (*),

Name des/der Verbraucher(s),

Anschrift des/der Verbraucher(s),

Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier),

Datum

(*) Unzutreffendes streichen.`,
  },
];

export default function WiderrufsrechtPage() {
  return (
    <div className="min-h-screen bg-background-900">
      <SEOHead
        title="Widerrufsbelehrung – Widerrufsrecht | 63-Performance Chiptuning"
        description="Widerrufsbelehrung von 63-Performance: Informationen zu deinem Widerrufsrecht, zur Widerrufsfrist und zu den Folgen des Widerrufs."
        canonicalUrl="https://63-performance.de/widerrufsrecht"
        structuredData={{
          '@context': 'https://schema.org',
          '@graph': [
            buildBreadcrumbSchema([
              { name: 'Startseite', url: 'https://63-performance.de/' },
              { name: 'Widerrufsbelehrung', url: 'https://63-performance.de/widerrufsrecht' },
            ]),
          ],
        }}
      />
      <Header />
      <main>
        {/* HERO */}
        <section className="relative h-[200px] md:h-[280px] w-full overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="/media/widerruf-hero-63-51094b.webp"
              alt="63-Performance Widerrufsbelehrung"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background-900/80 via-background-900/60 to-background-900/90" />
          </div>

          <div className="relative z-10 text-center px-6 md:px-10">
            <h1 className="font-heading font-extrabold text-white uppercase leading-tight text-3xl md:text-4xl lg:text-5xl">
              Widerrufsbelehrung
            </h1>
          </div>
        </section>

        {/* Content Sections */}
        <section className="relative bg-background-50 py-16 md:py-24 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400/20 to-transparent" />
          <div className="w-full px-6 md:px-10 lg:px-16 max-w-3xl mx-auto space-y-14">
            {withdrawalSections.map((section, index) => (
              <div key={index} className="border-l-2 border-primary-400/30 pl-6">
                <h2 className="text-white font-heading font-bold text-base md:text-lg uppercase tracking-wide mb-4">
                  {section.title}
                </h2>
                <div className="text-white/80 leading-relaxed text-sm md:text-base whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
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