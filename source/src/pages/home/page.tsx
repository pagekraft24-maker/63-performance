import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import SEOHead, { organizationSchema, websiteSchema, buildFAQSchema, buildBreadcrumbSchema } from '@/components/feature/SEOHead';
import HeroSection from './components/HeroSection';
import LeistungenSection from './components/LeistungenSection';
import PreisePreview from './components/PreisePreview';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CookieBanner from './components/CookieBanner';
import VehicleConfigurator from './components/VehicleConfigurator';
import EcoTuningSection from './components/EcoTuningSection';
import ReferenzenSection from './components/ReferenzenSection';
import GoogleReviewsSection from './components/GoogleReviewsSection';

const faqs = [
  { question: 'Was kostet ein Stage 1 Chiptuning bei 63-Performance?', answer: 'Stage 1 Chiptuning beginnt bei uns ab 379 €. Der Preis variiert je nach Fahrzeug, Motorisierung und gewünschten Optionen wie Pop & Bangs oder Getriebeoptimierung.' },
  { question: 'Ist Chiptuning sicher für mein Fahrzeug?', answer: 'Ja – wenn es von Profis gemacht wird. Wir arbeiten ausschließlich innerhalb der Sicherheitsreserven deines Motors. Dein Fahrzeug bleibt voll alltagstauglich und die Langlebigkeit wird nicht beeinträchtigt.' },
  { question: 'Welche Fahrzeuge tunt ihr?', answer: 'Wir tun praktisch alle modernen Fahrzeuge mit Benzin- oder Dieselmotor – von VW Golf GTI über BMW M und Mercedes AMG bis hin zu Audi RS, Porsche und vielen weiteren Modellen.' },
  { question: 'Wie lange dauert eine Softwareoptimierung?', answer: 'In der Regel dauert das Tuning 2–3 Stunden. Komplexere Projekte wie Getriebeoptimierung oder Codierung können länger dauern.' },
  { question: 'Kann ich die Software wieder zurücksetzen?', answer: 'Absolut! Deine Original-Software wird vor jeder Optimierung sicher gespeichert. Jederzeit kannst du zurück zum Werkzustand – volle Flexibilität ohne Risiko.' },
  { question: 'Beeinflusst Chiptuning meine Versicherung oder TÜV?', answer: 'Bei unserer Softwareoptimierung wird keine Änderung in den Fahrzeugpapieren eingetragen. Die Software-Anpassung ist reversibel und fällt bei der Abnahme nicht auf.' },
  { question: 'Was ist Pop & Bangs und ist es schädlich?', answer: 'Pop & Bangs (Schubblubbern) ist eine Soundoptimierung, die bei Schubabschaltung knackende Geräusche erzeugt. Wir programmieren es so, dass es deinem Motor nicht schadet.' },
  { question: 'Bietet ihr auch ECO-Tuning an?', answer: 'Ja! Mit ECO-Tuning optimieren wir die Motorsteuerung auf maximalen Wirkungsgrad – du sparst Kraftstoff, ohne Leistung zu verlieren. Besonders sinnvoll für Vielfahrer und Firmenwagen.' },
];

export default function Home() {
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
        title="Chiptuning & Leistungsoptimierung Seligenstadt (Rhein-Main-Gebiet) | 63-Performance"
        description="63-Performance – Dein Spezialist für Chiptuning, Leistungssteigerung und Softwareoptimierung in Seligenstadt (Rhein-Main-Gebiet). Stage 1, Getriebeoptimierung, Pop & Bangs für AMG, M, RS, GTI. Premium-Qualität, individuell abgestimmt, spürbar mehr Leistung."
        keywords="Chiptuning, Leistungssteigerung, Softwareoptimierung, Stage 1, Seligenstadt, Rhein-Main, Getriebeoptimierung, Pop and Bangs, ECO-Tuning, 63-Performance"
        canonicalUrl="https://63-performance.de/"
        ogImage="/og-image.jpg"
        geoRegion="DE-HE"
        geoPlacename="Seligenstadt"
        structuredData={{
          '@context': 'https://schema.org',
          '@graph': [
            websiteSchema,
            organizationSchema,
            buildFAQSchema(faqs),
            buildBreadcrumbSchema([
              { name: 'Startseite', url: 'https://63-performance.de/' },
            ]),
          ],
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <GoogleReviewsSection />
        <ReferenzenSection />
        <LeistungenSection />
        <VehicleConfigurator />
        <EcoTuningSection />
        <PreisePreview />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
    </div>
  );
}