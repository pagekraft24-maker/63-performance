import { chromium } from 'playwright';
import http from 'http'; import fs from 'fs'; import path from 'path';
const dir = process.argv[2]; const outDir = process.argv[3];
const routes = ['/','/uber-uns','/leistungen','/preise','/standorte','/referenzen','/kontakt','/impressum','/datenschutz','/agb','/widerrufsrecht','/widerruf','/blog','/blog/chiptuning-kosten-2026','/chiptuning-frankfurt-am-main','/chiptuning-offenbach-am-main','/eco-tuning','/__404'];
const types = {'.js':'text/javascript','.css':'text/css','.html':'text/html','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.mp4':'video/mp4','.ico':'image/x-icon','.json':'application/json','.txt':'text/plain','.xml':'application/xml','.webmanifest':'application/manifest+json'};
const shell = fs.readFileSync(path.join(dir,'index.html'));
const srv = http.createServer((req,res)=>{
  const p = decodeURIComponent(req.url.split('?')[0]); const f = path.join(dir,p);
  if (p !== '/' && fs.existsSync(f) && fs.statSync(f).isFile()) { res.writeHead(200,{'content-type':types[path.extname(f)]||'application/octet-stream'}); fs.createReadStream(f).pipe(res); }
  else { res.writeHead(200,{'content-type':'text/html'}); res.end(shell); }
}).listen(4173);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.route(/conf\.fileservice\.app|readdy\.ai\/analysis|google\.com\/maps|googletagmanager/, r => r.abort());
for (const r of routes) {
  await page.goto('http://localhost:4173' + r, { waitUntil: 'networkidle' });
  await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise(res => setTimeout(res, 120)); } window.scrollTo(0,0); });
  await page.waitForTimeout(2500);
  const html = await page.evaluate(() => {
    document.querySelectorAll('script').forEach(s => {
      if (s.type === 'application/ld+json' || (s.type === 'module' && s.src.includes('/assets/'))) return;
      s.remove();
    });
    document.querySelectorAll('iframe').forEach(f => { if (!/google\.com\/maps|maps\.google/.test(f.getAttribute('src')||'')) f.remove(); });
    // ensure module script stays in head
    return '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
  });
  const name = r === '/' ? 'index.html' : r === '/__404' ? '404.html' : r.slice(1) + '.html';
  const file = path.join(outDir, name); fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html.replaceAll('http://localhost:4173', 'https://63-performance.de'));
  console.log('wrote', name, html.length);
}
await browser.close(); srv.close();
