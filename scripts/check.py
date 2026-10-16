import json, re, os, sys, html
from html.parser import HTMLParser
live = json.load(open('/home/claude/live.json'))
site = sys.argv[1]
def parse(fn):
    s = open(fn).read()
    g = lambda pat: [html.unescape(x) for x in re.findall(pat, s, re.S)]
    d = {
     'title': g(r'<title>(.*?)</title>'),
     'desc': g(r'<meta name="description" content="([^"]*)"'),
     'canonical': g(r'<link rel="canonical" href="([^"]*)"'),
     'ogimg': g(r'<meta property="og:image" content="([^"]*)"'),
     'hreflang': g(r'hreflang="([^"]*)"'),
     'robots': g(r'<meta name="robots" content="([^"]*)"'),
     'h1': [re.sub(r'\s+',' ',re.sub('<[^>]+>',' ',x)).strip() for x in g(r'<h1[^>]*>(.*?)</h1>')],
     'ld': g(r'<script[^>]*application/ld\+json[^>]*>(.*?)</script>'),
     'relimg': re.findall(r'(?:src|href)="(https?://(?!63-performance\.de)[^"]+\.(?:webp|png|jpe?g|mp4))"', s),
    }
    return d
for r in live:
    fn = os.path.join(site, 'index.html' if r=='/' else r[1:]+'.html')
    d = parse(fn); L = live[r]
    issues = []
    if len(d['title'])!=1: issues.append(f"titles={len(d['title'])}")
    if d['title'] and d['title'][0]!=L['title']: issues.append(f"TITLE live={L['title']!r} new={d['title'][0]!r}")
    if d['desc'] and d['desc'][0]!=L['desc']: issues.append("DESC differs")
    if len(d['desc'])!=1: issues.append(f"desc count {len(d['desc'])}")
    if [h.upper() for h in d['h1']]!=[h.upper() for h in L['h1']]: issues.append(f"H1 live={L['h1']} new={d['h1']}")
    if not d['canonical'] or d['canonical'][0].rstrip('/')!=('https://63-performance.de'+r).rstrip('/'): issues.append(f"canon {d['canonical']}")
    if len(d['canonical'])!=1: issues.append('canon count')
    if not d['ogimg'] or not d['ogimg'][0].startswith('https://'): issues.append(f"og {d['ogimg']}")
    for j in d['ld']:
        try:
            o=json.loads(j); t=json.dumps(o)
            if '"/media' in t or '"/og' in t: issues.append('relative url in LD')
        except Exception as e: issues.append('LD JSON ERR '+str(e))
    if not d['ld']: issues.append('NO LD')
    if d['relimg']: issues.append(f"external media {d['relimg'][:3]}")
    print(r.ljust(32), 'OK' if not issues else issues, '| hreflang', d['hreflang'], '| ld', len(d['ld']))
