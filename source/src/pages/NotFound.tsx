import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Seite nicht gefunden | 63-Performance';
    let m = document.querySelector('meta[name="robots"]');
    if (!m) { m = document.createElement('meta'); m.setAttribute('name', 'robots'); document.head.appendChild(m); }
    m.setAttribute('content', 'noindex, follow');
    document.querySelector('link[rel="canonical"]')?.remove();
  }, []);

  return (
    <div className="min-h-screen bg-background-900">
      <Header />
      <main className="flex flex-col items-center justify-center text-center px-6 pt-40 pb-32">
        <p className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium mb-6">Fehler 404</p>
        <h1 className="text-white font-heading font-extrabold uppercase text-4xl md:text-6xl mb-6">Seite nicht gefunden.</h1>
        <p className="text-white/80 font-light max-w-xl mb-10">Die aufgerufene Seite existiert nicht oder wurde verschoben.</p>
        <Link to="/" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-400 text-background-900 font-semibold uppercase tracking-wider text-sm rounded-sm hover:bg-primary-300 transition-colors">
          Zur Startseite
        </Link>
      </main>
      <Footer />
    </div>
  );
}
