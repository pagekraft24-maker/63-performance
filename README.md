# 63-performance.de

Statische HTML-Website (von Readdy migriert). Vercel liefert ausschließlich den Ordner `site/` aus.

- `site/` – fertige, vorgerenderte HTML-Seiten (jede Route als eigene `.html` mit Title, Meta, H1, Schema im Quelltext), Assets, Medien, robots.txt, sitemap.xml, llms.txt, llms-full.txt
- `source/` – React/Vite-Quellcode, aus dem `site/` erzeugt wird
- `scripts/` – Prerender (`prerender.mjs`), Generator für sitemap/llms (`gen.py`), SEO-Check (`check.py`)

## Änderungen einspielen
1. In `source/` ändern, `npm install && npm run build`
2. Medien: `source/public/media` → Symlink/Kopie von `site/media` vor dem Build
3. `node scripts/prerender.mjs source/out site` und `python3 scripts/gen.py site`

## Formulare → E-Mail (eigener Mailserver)
Alle Formulare senden an `/api/kontakt` (Vercel-Funktion, `api/kontakt.js`), die per SMTP über das INWX-Postfach verschickt.
Benötigte Environment Variables in Vercel (Settings → Environment Variables):
`SMTP_HOST`, `SMTP_PORT` (465), `SMTP_USER` (info@63-performance.de), `SMTP_PASS`, optional `MAIL_TO`.
