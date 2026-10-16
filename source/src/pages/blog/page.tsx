import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import CookieBanner from '@/pages/home/components/CookieBanner';
import { Link } from 'react-router-dom';
import SEOHead, { buildBreadcrumbSchema } from '@/components/feature/SEOHead';

const posts = [
  {
    slug: '/blog/chiptuning-kosten-2026',
    title: 'Chiptuning Kosten 2026: Was zahlen Sie für Stage 1, Getriebe & ECO-Tuning?',
    excerpt:
      'Was kostet Chiptuning 2026? Preise für Stage 1, Getriebeoptimierung & ECO-Tuning in Seligenstadt. Transparente Richtwerte und wertvolle Tipps vom Profi.',
    date: '16. August 2026',
    category: 'Chiptuning',
    readTime: '8 Min. Lesezeit',
    image:
      '/media/chiptuning-kosten-2026-hero-712ac8.webp',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background-900">
      <SEOHead
        title="Blog – Chiptuning Wissen, Tipps & News | 63-Performance"
        description="Der 63-Performance Blog: Chiptuning Kosten, Softwareoptimierung, Getriebeoptimierung und ECO-Tuning – fundiertes Wissen rund um Leistungssteigerung in Seligenstadt."
        keywords="Chiptuning Blog, Chiptuning Kosten, Softwareoptimierung, Getriebeoptimierung, ECO-Tuning, Seligenstadt"
        canonicalUrl="https://63-performance.de/blog"
        geoRegion="DE-HE"
        geoPlacename="Seligenstadt"
        structuredData={buildBreadcrumbSchema([
          { name: 'Startseite', url: 'https://63-performance.de/' },
          { name: 'Blog', url: 'https://63-performance.de/blog' },
        ])}
      />
      <Header />
      <main>
        {/* HERO */}
        <section className="relative h-[380px] md:h-[480px] w-full overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="/media/blog-overview-hero-0f94ba.webp"
              alt="63-Performance Blog – Chiptuning Wissen und News"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background-900/50 via-background-900/40 to-background-900/80" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-10 max-w-4xl mx-auto">
            <div className="mb-6">
              <p className="inline-block px-4 py-1.5 border border-primary-400/60 text-primary-400 text-xs tracking-[0.4em] uppercase font-medium rounded-sm bg-primary-400/10 backdrop-blur-sm">
                Wissen · Tipps · News
              </p>
            </div>
            <h1 className="font-heading font-extrabold text-white uppercase leading-tight text-4xl md:text-5xl lg:text-6xl mb-4">
              Der 63-Performance <span className="text-primary-400">Blog.</span>
            </h1>
            <p className="mt-2 text-white/90 font-light leading-relaxed max-w-xl text-sm md:text-base">
              Fundiertes Wissen rund um Chiptuning, Softwareoptimierung und Leistungssteigerung – verständlich erklärt.
            </p>
          </div>
        </section>

        {/* POSTS */}
        <section className="relative bg-background-50 py-20 md:py-28 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
                <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Aktuelle Beiträge</span>
                <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
              </div>
              <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl mb-4">
                Neues aus der <span className="text-primary-400">Werkstatt.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={post.slug}
                  className="group flex flex-col rounded-xl overflow-hidden border border-background-300/30 bg-background-700/50 hover:border-primary-400/60 transition-all duration-300 cursor-pointer"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-background-800">
                    <img
                      src={post.image}
                      alt={post.title}
                      title={`${post.title} | Chiptuning 63-Performance`}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary-400/90 text-background-950 text-xs font-bold tracking-widest uppercase">
                      {post.category}
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-6 md:p-7">
                    <div className="flex items-center gap-3 text-foreground-600 text-xs mb-3">
                      <span className="flex items-center gap-1">
                        <i className="ri-calendar-line" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="ri-time-line" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-white font-heading font-bold text-base md:text-lg leading-snug mb-3 group-hover:text-primary-400 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-foreground-400 text-sm leading-relaxed mb-5 flex-1">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-primary-400 text-sm font-semibold">
                      Weiterlesen
                      <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>

        {/* CTA */}
        <section className="relative bg-background-900 py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="relative w-full px-6 md:px-10 lg:px-16 max-w-4xl mx-auto text-center">
            <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl mb-6">
              Noch Fragen? <span className="text-primary-400">Sprechen Sie uns an.</span>
            </h2>
            <p className="text-white/90 font-light max-w-xl mx-auto leading-relaxed mb-10">
              Ob Leistungssteigerung, Getriebeoptimierung oder ECO-Tuning – wir beraten Sie ehrlich und individuell.
            </p>
            <Link
              to="/kontakt"
              className="whitespace-nowrap px-10 py-4 bronze-btn text-sm tracking-widest uppercase font-bold rounded transition-all duration-300 hover:shadow-[0_0_30px_rgba(185,27,27,0.6)] cursor-pointer inline-block"
            >
              Jetzt kontaktieren
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
    </div>
  );
}