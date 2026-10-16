import { useState } from 'react';

interface NumberFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

function NumberField({ label, value, onChange }: NumberFieldProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex flex-col min-w-0">
      <label
        style={{
          fontSize: '14px',
          fontWeight: 700,
          color: '#cfcfcf',
          marginBottom: '8px',
        }}
      >
        {label}
      </label>
      <input
        type="text"
        inputMode="decimal"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        aria-label={label}
        style={{
          height: '48px',
          width: '100%',
          boxSizing: 'border-box',
          background: '#1c1c1c',
          border: `1px solid ${focused ? '#1e6fd9' : '#333333'}`,
          borderRadius: '6px',
          color: '#ffffff',
          fontSize: '16px',
          padding: '0 14px',
          outline: 'none',
          transition: 'border-color 0.2s ease',
        }}
      />
    </div>
  );
}

const currencyFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const literFormatter = new Intl.NumberFormat('de-DE', {
  maximumFractionDigits: 0,
});

const parseField = (raw: string, min: number, max: number): number => {
  const normalized = raw.replace(',', '.').trim();
  if (normalized === '') return 0;
  const num = Number(normalized);
  if (Number.isNaN(num)) return 0;
  return Math.min(Math.max(num, min), max);
};

export default function SavingsCalculator() {
  const [km, setKm] = useState('10000');
  const [verbrauch, setVerbrauch] = useState('33');
  const [dieselpreis, setDieselpreis] = useState('1,65');
  const [prozent, setProzent] = useState('9');

  const kmValue = parseField(km, 0, 500000);
  const verbrauchValue = parseField(verbrauch, 0, 200);
  const dieselpreisValue = parseField(dieselpreis, 0, 10);
  const prozentValue = parseField(prozent, 0, 15);

  const literMonat = (kmValue / 100) * verbrauchValue;
  const kosten = literMonat * dieselpreisValue;
  const ersparnisLiter = (literMonat * prozentValue) / 100;
  const ersparnis = ersparnisLiter * dieselpreisValue;
  const jahresersparnis = ersparnis * 12;

  return (
    <section id="rechner" className="relative bg-background-50 py-20 md:py-28 overflow-hidden scroll-mt-24">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="w-full px-6 md:px-10 lg:px-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
            <span className="text-primary-400 text-xs tracking-[0.4em] uppercase font-medium">Rechner</span>
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
          </div>
          <h2 className="text-white font-heading font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl mb-4">
            Berechne deine Ersparnis
          </h2>
          <p className="text-foreground-300 font-light max-w-xl mx-auto leading-relaxed">
            Trage deine Werte ein und sieh sofort, wie viel du pro Monat sparen kannst.
          </p>
        </div>

        <div
          className="calc-card mx-auto w-full p-5 md:p-8"
          style={{
            maxWidth: '720px',
            background: '#141414',
            border: '1px solid #2a2a2a',
            borderRadius: '12px',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NumberField label="Fahrleistung / Monat (km)" value={km} onChange={setKm} />
            <NumberField label="Verbrauch / 100 km (Liter)" value={verbrauch} onChange={setVerbrauch} />
            <NumberField label="Dieselpreis / Liter (€)" value={dieselpreis} onChange={setDieselpreis} />
            <NumberField label="Erwartete Ersparnis (%)" value={prozent} onChange={setProzent} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div
              className="flex flex-col items-center justify-center text-center px-4 py-5"
              style={{
                minHeight: '104px',
                background: '#1c1c1c',
                border: '1px solid #333333',
                borderRadius: '6px',
              }}
            >
              <span
                style={{
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#9a9a9a',
                  fontWeight: 600,
                }}
              >
                Bisherige Kosten / Monat
              </span>
              <span style={{ fontSize: '28px', fontWeight: 700, color: '#ffffff', marginTop: '6px' }}>
                {currencyFormatter.format(kosten)}
              </span>
            </div>

            <div
              className="flex flex-col items-center justify-center text-center px-4 py-5"
              style={{
                minHeight: '104px',
                background: 'linear-gradient(135deg, #b91b1b 0%, #7f1111 100%)',
                borderRadius: '6px',
                boxShadow: '0 4px 18px rgba(185, 27, 27, 0.35)',
              }}
            >
              <span
                style={{
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#f7dcdc',
                  fontWeight: 600,
                }}
              >
                Deine Ersparnis / Monat
              </span>
              <span style={{ fontSize: '28px', fontWeight: 700, color: '#ffffff', marginTop: '6px' }}>
                {currencyFormatter.format(ersparnis)}
              </span>
            </div>
          </div>

          {ersparnis > 0 && (
            <p
              className="text-center mt-6"
              style={{ fontSize: '15px', fontWeight: 700, color: '#22c55e' }}
            >
              Das sind ca. {literFormatter.format(Math.round(ersparnisLiter))} Liter Diesel weniger pro Monat – rund {currencyFormatter.format(jahresersparnis)} im Jahr.
            </p>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </section>
  );
}