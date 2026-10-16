import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import SEOHead, { buildBreadcrumbSchema, buildFAQSchema } from '@/components/feature/SEOHead';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import CookieBanner from '@/pages/home/components/CookieBanner';
import EcoHero from '@/pages/eco-tuning/components/EcoHero';
import HowItWorks from '@/pages/eco-tuning/components/HowItWorks';
import ForWhom from '@/pages/eco-tuning/components/ForWhom';
import SavingsCalculator from '@/pages/eco-tuning/components/SavingsCalculator';
import ProcessSteps from '@/pages/eco-tuning/components/ProcessSteps';
import EcoFaq from '@/pages/eco-tuning/components/EcoFaq';
import EcoClosingCta from '@/pages/eco-tuning/components/EcoClosingCta';

const faqSchema = buildFAQSchema([
  {
    question: 'Wie viel spart Eco-Tuning wirklich?',
    answer: 'Das hängt vom Fahrzeug, der Beladung und dem Fahrprofil ab. Üblich sind 5 bis 15 %, im Schnitt 8 bis 10 %. Am meisten profitieren Fahrzeuge mit hoher Laufleistung und gleichmäßigem Einsatz.',
  },
  {
    question: 'Wird der Motor dadurch stärker belastet?',
    answer: 'Nein. Beim Eco-Tuning geht es nicht um maximale Leistung, sondern um einen effizienteren Betrieb. Der Motor läuft häufiger mit niedrigerer Drehzahl.',
  },
  {
    question: 'Kann das Tuning rückgängig gemacht werden?',
    answer: 'Ja. Der originale Softwarestand wird vorher gesichert und kann jederzeit wieder aufgespielt werden.',
  },
  {
    question: 'Wie genau ist der Rechner?',
    answer: 'Der Rechner zeigt eine Schätzung auf Basis deiner Angaben. Die tatsächliche Ersparnis kann je nach Einsatz höher oder niedriger ausfallen.',
  },
]);

export default function EcoTuningPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.replace('#', ''));
    if (target) {
      window.requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background-900">
      <SEOHead
        title="Eco-Tuning für PKW, Sportwagen, LKW & Baumaschinen | 63-Performance"
        description="Eco-Tuning für PKW, Sportwagen, Transporter, LKW, Traktoren und Baumaschinen: weniger Verbrauch, mehr Drehmoment im unteren Drehzahlbereich. Jetzt Ersparnis berechnen und Kraftstoffkosten senken."
        keywords="Eco-Tuning, PKW Tuning, Sportwagen Tuning, LKW Tuning, Traktoren Tuning, Baumaschinen Tuning, Verbrauch senken, 63-Performance"
        canonicalUrl="https://63-performance.de/eco-tuning"
        structuredData={{
          '@context': 'https://schema.org',
          '@graph': [
            buildBreadcrumbSchema([
              { name: 'Startseite', url: 'https://63-performance.de/' },
              { name: 'Eco-Tuning', url: 'https://63-performance.de/eco-tuning' },
            ]),
            faqSchema,
          ],
        }}
      />
      <Header />
      <main>
        <EcoHero />
        <HowItWorks />
        <ForWhom />
        <SavingsCalculator />
        <ProcessSteps />
        <EcoFaq />
        <EcoClosingCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
    </div>
  );
}