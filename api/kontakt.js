// Formular-Versand über den eigenen Mailserver (INWX) – ohne Drittanbieter.
// Zugangsdaten kommen aus den Vercel Environment Variables:
// SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO (optional)
import nodemailer from 'nodemailer';

const FORMS = {
  kontakt: 'Kontaktanfrage (Startseite)',
  'kontakt-seite': 'Kontaktanfrage (Kontaktseite)',
  termin: 'Terminanfrage',
  widerruf: 'Widerruf',
};

const LABELS = {
  name: 'Name', email: 'E-Mail', telefon: 'Telefon', phone: 'Telefon',
  fahrzeug: 'Fahrzeug', vehicle: 'Fahrzeug', leistung: 'Gewünschte Leistung',
  services: 'Leistungen', location: 'Standort', nachricht: 'Nachricht', message: 'Nachricht',
  orderNo: 'Bestell-/Auftragsnummer', partial: 'Umfang des Widerrufs', reason: 'Grund',
  consent: 'Datenschutz akzeptiert',
};

const HONEYPOTS = ['company_alt', 'phone_alt'];
const hits = new Map(); // einfache Sperre: max. 5 Anfragen pro IP in 10 Minuten

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clean = (s) => String(s ?? '').replace(/\r/g, '').trim().slice(0, 5000);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ code: 'ERROR', message: 'Methode nicht erlaubt.' });
  }

  const origin = req.headers.origin || '';
  const host = req.headers.host || '';
  if (origin && new URL(origin).host !== host) {
    return res.status(403).json({ code: 'ERROR', message: 'Nicht erlaubt.' });
  }

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  if (list.length >= 5) {
    return res.status(429).json({ code: 'ERROR', message: 'Zu viele Anfragen. Bitte versuche es später erneut.' });
  }
  list.push(now);
  hits.set(ip, list);

  const body = typeof req.body === 'object' && req.body ? req.body : Object.fromEntries(new URLSearchParams(req.body || ''));

  // Honeypot gefüllt → Bot. Still "OK" melden, nichts senden.
  if (HONEYPOTS.some((h) => clean(body[h]))) return res.status(200).json({ code: 'OK' });

  const formKey = FORMS[req.query.form] ? req.query.form : 'kontakt';
  const name = clean(body.name);
  const email = clean(body.email);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return res.status(400).json({ code: 'ERROR', message: 'Bitte Name und eine gültige E-Mail-Adresse angeben.' });
  }

  const rows = Object.entries(body)
    .filter(([k, v]) => !HONEYPOTS.includes(k) && clean(v))
    .map(([k, v]) => [LABELS[k] || k, clean(v)]);

  const text = `${FORMS[formKey]} über 63-performance.de\n\n` + rows.map(([k, v]) => `${k}: ${v}`).join('\n');
  const html = `<h2 style="font-family:Arial,sans-serif">${esc(FORMS[formKey])}</h2>
<table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
${rows.map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;vertical-align:top;color:#666"><b>${esc(k)}</b></td><td style="padding:6px 0;white-space:pre-wrap">${esc(v)}</td></tr>`).join('\n')}
</table>
<p style="font-family:Arial,sans-serif;font-size:12px;color:#999">Gesendet über das Formular auf 63-performance.de</p>`;

  const { SMTP_HOST, SMTP_PORT = '465', SMTP_USER, SMTP_PASS, MAIL_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error('SMTP-Zugangsdaten fehlen (Vercel Environment Variables).');
    return res.status(500).json({ code: 'ERROR', message: 'Versand derzeit nicht möglich. Bitte kontaktiere uns per Telefon oder WhatsApp.' });
  }

  const port = Number(SMTP_PORT);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    requireTLS: port === 587,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"63-Performance Website" <${SMTP_USER}>`,
      to: MAIL_TO || SMTP_USER,
      replyTo: `"${name.replace(/"/g, '')}" <${email}>`,
      subject: `${FORMS[formKey]}: ${name}`,
      text,
      html,
    });
    return res.status(200).json({ code: 'OK' });
  } catch (err) {
    console.error('Mailversand fehlgeschlagen:', err?.message);
    return res.status(502).json({ code: 'ERROR', message: 'Senden fehlgeschlagen. Bitte kontaktiere uns per Telefon oder WhatsApp.' });
  }
}
