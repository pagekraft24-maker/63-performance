import { useEffect } from 'react';

const SITE_URL = 'https://63-performance.de';
const DEFAULT_OG_IMAGE = '/og-image.jpg';
const absUrl = (u: string) => (u.startsWith('http') ? u : SITE_URL + (u.startsWith('/') ? u : '/' + u));

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  structuredData?: Record<string, unknown>;
  geoRegion?: string;
  geoPlacename?: string;
}

export default function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  structuredData,
  geoRegion,
  geoPlacename,
}: SEOHeadProps) {
  useEffect(() => {
    /* ---------- Title ---------- */
    document.title = title;

    /* ---------- Meta helpers ---------- */
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const removeMeta = (name: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      const el = document.querySelector(`meta[${attr}="${name}"]`);
      if (el) el.remove();
    };

    /* ---------- Description ---------- */
    if (description) setMeta('description', description);
    else removeMeta('description');

    /* ---------- Keywords ---------- */
    if (keywords) setMeta('keywords', keywords);
    else removeMeta('keywords');

    /* ---------- Canonical ---------- */
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonicalUrl) {
      if (!canonicalEl) {
        canonicalEl = document.createElement('link');
        canonicalEl.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.setAttribute('href', canonicalUrl);
    } else if (canonicalEl) {
      canonicalEl.remove();
    }

    /* ---------- hreflang ---------- */
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
    if (canonicalUrl) {
      ['de', 'x-default'].forEach((lang) => {
        const l = document.createElement('link');
        l.setAttribute('rel', 'alternate');
        l.setAttribute('hreflang', lang);
        l.setAttribute('href', canonicalUrl);
        document.head.appendChild(l);
      });
    }

    /* ---------- Open Graph ---------- */
    setMeta('og:title', ogTitle || title, true);
    setMeta('og:description', ogDescription || description, true);
    setMeta('og:type', ogType, true);
    if (canonicalUrl) setMeta('og:url', canonicalUrl, true);
    else removeMeta('og:url', true);

    const img = absUrl(ogImage || DEFAULT_OG_IMAGE);
    {
      setMeta('og:image', img, true);
      setMeta('og:image:alt', ogTitle || title, true);
      setMeta('og:image:width', '1200', true);
      setMeta('og:image:height', '630', true);
    }

    /* ---------- Twitter ---------- */
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', ogTitle || title);
    setMeta('twitter:description', ogDescription || description);
    setMeta('twitter:image', img);

    /* ---------- Geo ---------- */
    if (geoRegion) setMeta('geo.region', geoRegion);
    if (geoPlacename) setMeta('geo.placename', geoPlacename);

    /* ---------- Structured Data ---------- */
    const sd = structuredData || (canonicalUrl ? {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: title,
          description,
          inLanguage: 'de',
          isPartOf: { '@type': 'WebSite', '@id': 'https://63-performance.de/#website', name: '63-Performance', url: 'https://63-performance.de' },
          publisher: { '@id': 'https://63-performance.de/#business' },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://63-performance.de/' },
            { '@type': 'ListItem', position: 2, name: title.split(/ [–|] /)[0], item: canonicalUrl },
          ],
        },
      ],
    } : undefined);
    if (sd) {
      let scriptEl = document.querySelector('#structured-data') as HTMLScriptElement | null;
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.setAttribute('id', 'structured-data');
        scriptEl.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(sd).replace(/"\/media\//g, '"' + SITE_URL + '/media/');
    } else {
      const scriptEl = document.querySelector('#structured-data');
      if (scriptEl) scriptEl.remove();
    }

    /* Cleanup on unmount – remove structured data */
    return () => {
      const sd = document.querySelector('#structured-data');
      if (sd) sd.remove();
    };
  }, [title, description, keywords, canonicalUrl, ogTitle, ogDescription, ogImage, ogType, structuredData, geoRegion, geoPlacename]);

  return null;
}

/* ---------- Organization: 63-Performance ---------- */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutomotiveBusiness',
  '@id': 'https://63-performance.de/#business',
  name: '63-Performance',
  alternateName: '63 Performance Chiptuning',
  description: 'Premium Chiptuning und Leistungsoptimierung – individuelle Softwareanpassung für maximale Fahrzeug-Performance im Rhein-Main-Gebiet.',
  url: 'https://63-performance.de',
  telephone: '+491759601217',
  email: 'info@63-performance.de',
  image: 'https://63-performance.de/og-image.jpg',
  logo: 'https://63-performance.de/logo.png',
  sameAs: ['https://www.instagram.com/63performance'],
  priceRange: '€€',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '14:00',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ferdinand-Porsche-Straße 6',
    addressLocality: 'Seligenstadt',
    postalCode: '63500',
    addressRegion: 'Hessen',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 50.045,
    longitude: 8.975,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Seligenstadt',
    },
    {
      '@type': 'City',
      name: 'Aschaffenburg',
    },
    {
      '@type': 'City',
      name: 'Hanau',
    },
    {
      '@type': 'City',
      name: 'Offenbach',
    },
    {
      '@type': 'City',
      name: 'Darmstadt',
    },
    {
      '@type': 'City',
      name: 'Dieburg',
    },
    {
      '@type': 'City',
      name: 'Erbach',
    },
    {
      '@type': 'State',
      name: 'Rhein-Main-Gebiet',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Chiptuning Leistungen',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Leistungssteigerung Stage 1', description: 'Softwareoptimierung für bis zu 30% mehr Leistung und Drehmoment.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Getriebeoptimierung', description: 'Schnellere Schaltzeiten und höhere Drehmomentgrenzen.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pop & Bangs', description: 'Sportlicher Auspuffsound beim Schalten und Gaswegnehmen.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ECO-Tuning', description: 'Kraftstoffverbrauch senken bei gleichzeitiger Leistungssteigerung.' } },
    ],
  },
};

/* ---------- Location: Seligenstadt ---------- */
export const seligenstadtSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutomotiveBusiness',
  '@id': 'https://63-performance.de/standorte#seligenstadt',
  name: '63-Performance – Hauptsitz Seligenstadt',
  parentOrganization: { '@id': 'https://63-performance.de/#business' },
  description: '63-Performance Hauptsitz in Seligenstadt. Premium Chiptuning und Softwareoptimierung für AMG, M, RS und GTI – zentral im Rhein-Main-Gebiet.',
  url: 'https://63-performance.de/standorte',
  telephone: '+491759601217',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ferdinand-Porsche-Straße 6',
    addressLocality: 'Seligenstadt',
    postalCode: '63500',
    addressRegion: 'Hessen',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 50.045,
    longitude: 8.975,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '10:00', closes: '14:00' },
  ],
  areaServed: [
    { '@type': 'City', name: 'Seligenstadt' },
    { '@type': 'City', name: 'Hanau' },
    { '@type': 'City', name: 'Offenbach' },
    { '@type': 'City', name: 'Aschaffenburg' },
    { '@type': 'City', name: 'Frankfurt am Main' },
    { '@type': 'City', name: 'Rodgau' },
    { '@type': 'City', name: 'Obertshausen' },
    { '@type': 'City', name: 'Babenhausen' },
    { '@type': 'State', name: 'Rhein-Main-Gebiet' },
  ],
};



/* ---------- FAQPage Schema ---------- */
export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/* ---------- Service Schema ---------- */
export function buildServiceSchema(services: { name: string; description: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.name,
        description: s.description,
        provider: { '@id': 'https://63-performance.de/#business' },
        areaServed: [
          { '@type': 'City', name: 'Seligenstadt' },
        ],
      },
    })),
  };
}

/* ---------- BreadcrumbList Schema ---------- */
export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/* ---------- WebSite Schema for homepage ---------- */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://63-performance.de/#website',
  name: '63-Performance – Chiptuning & Leistungsoptimierung',
  url: 'https://63-performance.de',
  description: 'Premium Chiptuning und Softwareoptimierung in Seligenstadt. Mehr Leistung, weniger Verbrauch, maximaler Fahrspaß.',
  inLanguage: 'de',
  publisher: { '@id': 'https://63-performance.de/#business' },
};