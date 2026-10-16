import { useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background-700/98 border-t border-background-300/30 backdrop-blur-md">
      <div className="w-full px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
        <p className="text-white/90 text-sm leading-relaxed max-w-2xl text-center sm:text-left">
          Wir nutzen Cookies, um dein Erlebnis auf unserer Website zu verbessern.{" "}
          <a href="/datenschutz" className="text-primary-400 hover:underline cursor-pointer">Datenschutz</a>
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={() => setVisible(false)}
            className="whitespace-nowrap px-4 py-2 border border-background-300 hover:border-primary-400/40 text-white/90 hover:text-primary-400 text-xs tracking-widest uppercase rounded transition-all duration-300 cursor-pointer"
          >
            Ablehnen
          </button>
          <button
            onClick={() => setVisible(false)}
            className="whitespace-nowrap px-6 py-2 bronze-btn text-white text-xs tracking-widest uppercase font-bold rounded transition-all duration-300 cursor-pointer"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}