import re, html, os, sys, datetime
from html.parser import HTMLParser
site = sys.argv[1]; BASE='https://63-performance.de'
pages = [('/', 'index.html',1.0),('/leistungen','leistungen.html',0.9),('/preise','preise.html',0.9),('/eco-tuning','eco-tuning.html',0.8),('/referenzen','referenzen.html',0.8),('/standorte','standorte.html',0.8),('/chiptuning-frankfurt-am-main','chiptuning-frankfurt-am-main.html',0.8),('/chiptuning-offenbach-am-main','chiptuning-offenbach-am-main.html',0.8),('/uber-uns','uber-uns.html',0.7),('/kontakt','kontakt.html',0.8),('/blog','blog.html',0.6),('/blog/chiptuning-kosten-2026','blog/chiptuning-kosten-2026.html',0.7),('/impressum','impressum.html',0.2),('/datenschutz','datenschutz.html',0.2),('/agb','agb.html',0.2),('/widerrufsrecht','widerrufsrecht.html',0.2),('/widerruf','widerruf.html',0.2)]
today = datetime.date.today().isoformat()
class T(HTMLParser):
    def __init__(s): super().__init__(); s.out=[]; s.inmain=0; s.skip=0
    def handle_starttag(s,t,a):
        if t=='main': s.inmain+=1
        if t in('script','style','svg','button','form','select'): s.skip+=1
        if s.inmain and t in('h1','h2','h3','h4'): s.out.append('\n\n'+'#'*(int(t[1])+1)+' ')
        elif s.inmain and t in('p','li','div','tr','br'): s.out.append('\n')
        if s.inmain and t=='li': s.out.append('- ')
    def handle_endtag(s,t):
        if t=='main': s.inmain-=1
        if t in('script','style','svg','button','form','select'): s.skip-=1
        if s.inmain and t in('h1','h2','h3','h4'): s.out.append('\n')
    def handle_data(s,d):
        if s.inmain and not s.skip: s.out.append(d)
def meta(src):
    t = html.unescape(re.search(r'<title>(.*?)</title>',src).group(1))
    d = html.unescape(re.search(r'<meta name="description" content="([^"]*)"',src).group(1))
    rb = re.search(r'<meta name="robots" content="([^"]*)"',src); rb = rb.group(1) if rb else ''
    return t,d,rb
sm=['<?xml version="1.0" encoding="UTF-8"?>','<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
info=[]
for path,fn,prio in pages:
    src=open(os.path.join(site,fn)).read(); t,d,rb=meta(src)
    assert 'noindex' not in rb, path
    url = BASE + ('/' if path=='/' else path)
    sm.append(f'  <url><loc>{url}</loc><lastmod>{today}</lastmod><priority>{prio}</priority></url>')
    p=T(); p.feed(src)
    txt=''.join(p.out); txt=re.sub(r'[ \t\xa0]+',' ',txt); txt=re.sub(r' *\n *','\n',txt); txt=re.sub(r'\n{3,}','\n\n',txt).strip()
    seen=set(); keep=[]
    for line in txt.split('\n'):
        k=line.strip()
        if len(k)>25 and k in seen: continue
        seen.add(k); keep.append(line)
    txt=re.sub(r'\n{3,}','\n\n','\n'.join(keep))
    info.append((path,url,t,d,txt))
sm.append('</urlset>')
open(os.path.join(site,'sitemap.xml'),'w').write('\n'.join(sm)+'\n')
groups={'Hauptseiten':['/','/leistungen','/preise','/eco-tuning','/referenzen','/uber-uns','/kontakt'],'Standorte':['/standorte','/chiptuning-frankfurt-am-main','/chiptuning-offenbach-am-main'],'Blog':['/blog','/blog/chiptuning-kosten-2026'],'Rechtliches':['/impressum','/datenschutz','/agb','/widerrufsrecht','/widerruf']}
by={i[0]:i for i in info}
L=['# 63-Performance','','> Premium Chiptuning und Leistungsoptimierung in Seligenstadt (Rhein-Main-Gebiet): Stage 1 Softwareoptimierung, Getriebeoptimierung, Pop & Bangs, ECO-Tuning und Codierung für PKW, Sportwagen (AMG, M, RS, GTI), LKW und Baumaschinen.','',
'- Adresse: Ferdinand-Porsche-Straße 6, 63500 Seligenstadt, Hessen, Deutschland','- Telefon / WhatsApp: +49 175 9601217','- E-Mail: info@63-performance.de','- Öffnungszeiten: Mo–Fr 09:00–18:00, Sa 10:00–14:00','- Einzugsgebiet: Seligenstadt, Frankfurt am Main, Offenbach, Hanau, Aschaffenburg, Darmstadt, Rhein-Main-Gebiet','- Instagram: https://www.instagram.com/63performance','- Vollständige Inhalte: '+BASE+'/llms-full.txt','']
for g,ps in groups.items():
    L.append('## '+g); L.append('')
    for p in ps:
        _,url,t,d,_=by[p]; L.append(f'- [{t}]({url}): {d}')
    L.append('')
open(os.path.join(site,'llms.txt'),'w').write('\n'.join(L))
F=['# 63-Performance – vollständige Website-Inhalte','',f'> Quelle: {BASE} · Stand: {today}','']
for path,url,t,d,txt in info:
    F += ['---','',f'## {t}','',f'URL: {url}','',f'{d}','',txt,'']
open(os.path.join(site,'llms-full.txt'),'w').write('\n'.join(F))
print(len(info),'pages', os.path.getsize(os.path.join(site,'llms-full.txt')),'bytes')
