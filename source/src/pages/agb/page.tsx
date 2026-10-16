import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import SEOHead, { buildBreadcrumbSchema } from '@/components/feature/SEOHead';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import CookieBanner from '@/pages/home/components/CookieBanner';

const agbSections = [
  {
    title: 'Vorwort',
    content: `Dem Verbraucher ist bewußt dass jedwede Tuningmaßnahme bzw. Optimierung seines Fahrzeuges, Einfluß auf die Lebensdauer und Eigenschaften eines Fahrzeuges haben kann. Die serienmäßigen Eigenschaften werden in jedem Fall verändert. Dem Kunden obliegt die Pflicht diese Veränderungen die er wissentlich beauftragt, im alltäglichen Umgang zu berücksichtigen. Herstellerangaben der angebotenen Waren und Dienstleistungen beziehen sich in der Regel auf ein geprüftes Neufahrzeug welches dem Serienstand entspricht. Bei Fahrzeugen die Älter als 5 Jahre oder 100TKm Laufleistung haben, können die Leistungsangaben nicht garantiert werden. Werden die Fahrzeuge im Strassenverkehr bewegt ist eine Eintragung in die Fahrzeugpapiere die Obligenheit des Kunden.`,
  },
  {
    title: '1. Geltungsbereich',
    content: `Alle Angebote erfolgen auf der Grundlage der nachstehenden Lieferungsbedingungen. Diese liegen allen Angeboten und Vereinbarungen zugrunde und gelten durch Auftragserteilung oder Annahme der Lieferung für die Dauer der gesamten Geschäftsverbindung als anerkannt. Abweichende Bedingungen, die nicht ausdrücklich schriftlich anerkannt sind, sind für uns unverbindlich, auch wenn ihnen nicht ausdrücklich widersprochen wurde.`,
  },
  {
    title: '2. Versand/Verkauf',
    content: `Der Kunde ist an sein Angebot 14 Tage gebunden. Erfolgt innerhalb der 14 Tage keine Auftragsbestätigung gilt der Vertrag als nicht geschlossen, es sei denn die Ware wurde ausgeliefert, die Dienstleistung fand statt. Exclusiv auf Kundenwunsch beschaffte Waren können nur mit Zustimmung des Herstellers zurückgegeben werden. Ansonsten gilt der gesetzliche Gewährleistungsanspruch. Übernommen werden keine Produkthaftungen des Herstellers von Waren.`,
  },
  {
    title: '3. Lieferumfang',
    content: `63-Performance liefert einen programmierten Tuning-Chip bzw. organisiert eine geeignete Tuningdienstleistung die dem Kundenwunsch möglichst entspricht gemäß den zum Augenblick des Vertragsabschlußes gültigem Stand der Technik. Die Installation übernimmt der Verkäufer nicht, sondern auf Wunsch des Kunden geeignete Partnerfirmen im Interesse des Kunden, es sei denn, es ist etwas anderes vereinbart.`,
  },
  {
    title: '4. Zahlungsbedingungen',
    content: `Die Preise verstehen sich bei der Abholung am Firmensitz des Verkäufers. Versandkosten werden zusätzlich berechnet. Der Kaufpreis und ggf. der Dienstlestungspreis ist spätestens bei Lieferung fällig und kann auch im Vorraus erhoben werden. Bis zur vollständigen Zahlung des Kaufpreises verbleibt das Eigentum an der gelieferten Ware, Programmierung, Dienstleistung bei dem Verkäufer. Gleiches gilt bei Applikation von Hardware oder Software in das Steuergerät (verl. Eigentumsvorbehalt). Der Käufer ist auch nach Eigentumsübergang an die Urheber- und sonstigen Schutzrechte Dritter gebunden.

Bei Zahlungsverzug ist der Verkäufer berechtigt, Verzugszinsen in Höhe von 4 % über dem jeweiligen Diskontsatz der Deutschen Bundesbank zu berechnen, ohne dass insoweit ein weitergehender Verzugsschaden ausgeschlossen wird. Dem Käufer bleibt es unbenommen, den Gegenbeweis zu führen, dass ein tatsächlicher Schaden nicht oder geringer entstanden ist. Die Aufrechnung gegenüber den Zahlungsansprüchen des Verkäufers ist ausgeschlossen, es sei denn, dass die Gegenansprüche des Käufers unstreitig oder rechtskräftig festgestellt sind. Soweit der Besteller Kaufmann ist und der Vertrag zum Betriebe seines Handelsgewerbe gehört, gilt der vorstehende Absatz entsprechend auch für Zurückbehaltungsrechte.`,
  },
  {
    title: '5. Liefertermin',
    content: `Alle Angaben von Lieferzeiten in den Angaben des Verkäufers sind unverbindlich und stellen kein Angebot im Rechtssinne dar. Der bei Vertragsschluss angegeben Liefertermin ist lediglich geschätzt und darf um 6 Wochen überschritten werden. Mahnt der Besteller danach unter angemessener Frist die Leistung an, so gerät der Verkäufer nach Ablauf der Frist in Verzug, es sei denn, dass die Herstellungsart und die Beschaffenheit der bestellten Ware eine weitere Nachfrist aus konstruktionsbedingten Gründen rechtfertigt. In diesem Falle ist der Verkäufer verpflichtet, dem Besteller unverzüglich die Dauer der Verzögerung bekannt zu geben.

Ansprüche des Bestellers auf Schadenersatz und sonstigen Verzugsschaden sind insoweit ausgeschlossen, es sei denn, dass die verspätete Lieferung auf Vorsatz des Verkäufers zurückzuführen ist. Bei nicht mehr Verfügbarkeit hat der Verkäufer den Käufer zu informieren, ein Schadenersatz resultiert daraus nicht.`,
  },
  {
    title: '6. Gefahrübergang',
    content: `Die Versendung bzw. der Einbau erfolgt auf Gefahr des Bestellers. Erfüllungsort ist der Geschäftssitz des Verkäufers. Lehnt der Besteller die Annahme der gelieferten Ware ab, steht dem Verkäufer Schadenersatz wegen Nichterfüllung zu.

In allen Fällen, in denen der Besteller zu Schadenersatz wegen Nichterfüllung verpflichtet ist, ist der Verkäufer berechtigt, eine Schadenersatzpauschale in Höhe von 25 % des Rechnungswertes ausschließlich Mehrwertsteuer zu verlangen, ohne dass es eines Nachweises des tatsächlich entstandenen Schadens bedarf. Unberührt davon bleibt die Geltendmachung eines höheren Schadens, sofern dieser nachweisbar ist. Dem Besteller bleibt es unbenommen, den Gegenbeweis zu führen, dass ein tatsächlicher Schaden nicht oder geringer entstanden ist.`,
  },
  {
    title: '7.1. Haftung',
    content: `Der Verkäufer haftet nur für Vorsatz. Eine Haftung des Verkäufers für Transport und Versandschäden wird ausdrücklich ausgeschlossen. Ebenfalls haftet der Verkäufer nicht dafür, dass Schäden bei der Installation entstehen die nicht vom Verkäufer durchgeführt wurden. Der Verkäufer haftet nur dafür, dass der Tuning-Chip oder andere Bauteile bei der Absendung funktionstüchtig sind.

Dem Besteller ist bekannt, dass der Einsatz und die Nutzung eines Tuning-Chips oder die Leistung erhöhende elektronische Bauteile zum Erlöschen der allgemeinen Betriebserlaubnis führen und daher das KFZ nicht im öffentlichen Straßenverkehr benutzt werden darf, es sei den entsprechende Unterlagen sind verfügbar. Gegen Aufpreis kann die Änderung im KFZ-Brief eingetragen werden. Der Verkäufer übernimmt keine Haftung für Schäden, die im öffentlichen Straßenverkehr entstehen, wenn der Tuning-Chip oder andere elektronische Bauteile zur Leistungserhöhung in dem Fahrzeug verbaut wurde.

Ebenso haftet der Verkäufer nicht für unmittelbare oder mittelbare Schäden am Motor bzw. gesamten Fahrzeug, die auf Grund des Tuning-Chips oder anderer Bauteile entstehen können. Etwaige Ansprüche des Bestellers aus positiver Vertragsverletzung sind ausgeschlossen, soweit nicht Vorsatz seitens des Verkäufers nachzuweisen ist. Technische Angaben und Eigenschaften sind so zu verstehen das die Herstellerangaben verwendet werden für welche wir eine Haftung ausdrücklich ausschliessen.`,
  },
  {
    title: '7.2. Kostenvoranschläge, technische Unterlagen',
    content: `Angebote, Kostenvoranschläge, Zeichnungen, Abbildungen, Maße, Gewichte oder sonstige Daten sind freibleibend und nur dann verbindlich, wenn dies ausdrücklich schriftlich vereinbart wird. Eigentums- und Urheberrechte an Kostenvoranschlägen, Abbildungen, Zeichnungen oder sonstigen Unterlagen bleiben vorbehalten.

Wir haften nicht für unzutreffende oder falsche Herstellerangaben. Artikel und Waren bei denen wir Kenntnis davon erhalten, werden aus dem Programm genommen. Eine Weitergabe an Dritte ist nur mit schriftlicher Einwilligung zulässig. Anwendungstechnische Ratschläge in Wort und Schrift gelten nur als unverbindliche Hinweise und befreien den Besteller nicht von der eigenen Prüfungspflicht unter Berücksichtigung der beabsichtigten Anwendungszwecke.`,
  },
  {
    title: '8. Gewährleistung',
    content: `Die Gewährleistung auf die gelieferte Software und Hardware gemäß gesetzlichen Bestimmungen, ab dem Zeitpunkt der Versendung oder des Einbaus durch den Verkäufer oder einen Partner. Im Zweifel gelten die Bedingungen des Kooperationspartners. Soweit bei Neufahrzeugen durch Installation des Tuning die vom ursprünglichen Hersteller gewährte Werksgarantie entfällt, übernimmt der Verkäufer seinerseits die vorgenannte Garantie nicht, sondern eine Tuningrgarantie kann gegen einen Aufpreis abgeschlossen werden. Eine Gewährleistung im Falle der sog. Selbstinstallation durch den Besteller setzt voraus, dass der Besteller entsprechende Sachkenntnis nachweisen kann oder das Tuning fachgerecht einbauen lässt.

Wird durch unsachgemäßen Einbau der Chip bzw. das Tuning / Tuningartikel zerstört, ist eine Gewährleistung ausgeschlossen. Das Tuning darf nur für den vom Besteller angegebenen PKW und Motor (Steuergerät) verwendet werden. Die Angaben zur Leistungssteigerung beziehen sich auf Motoren, die in allen wesentlichen Funktionen dem Mittelwert der Herstellernorm und dem Serienstand entsprechen und tauglich sind. Bei Fehlern der Software sind die Fehler zu beschreiben und dem Verkäufer ist ausreichend Gelegenheit zur Nachbesserung zu geben.

Sie Software ist dem Verkäufer zur Verfügung zu stellen. Die Software darf nicht kopiert oder sonst vervielfältigt werden. Die Änderung der Software durch den Käufer/Besteller führt zum Erlöschen jeglicher Gewährleistungsansprüche. Sollte jedoch bei Wartungsarbeiten die Tuningsoftware (Chiptuning) überspielt werden, so wird ein kostenloser Tuningsupport am Firmensitz gewährleistet. Gleiches gilt für die Rückrüstung. Gegebenfalls notwendige Zeitaufwände gehen nicht zu Lasten des Verkäufers oder Dienstleisters. Unfälle oder sonstige Manipulationen die eine einwandfreie Funktion beeinträchtigen, führen zum erlischen des Garantieanspruches.

Für Waren wie Tuningkits oder andere KFZ - Zubehör Teile gelten die gesetzlichen Gewährleistungsvorschriften der §§ 434 ff. BGB. Ausgeschlossen sind grundsätzlich alle Schäden, die durch einen unsachgemäßen bzw. nicht fachgerechten Einbau Teile bzw. durch Motorleistungssteigerungen an anderen Teilen des Fahrzeuges entstehen. Abbildungen und Beschreibungen gelten nur zur allgemeinen Verdeutlichung; technische Daten können Veränderungen unterliegen, da wir stets bemüht sind, unsere Waren die wir einkaufen dem Stand der Marktlage anzupassen.

Angaben in den Beschreibungen, über Leistungen, Geschwindigkeiten usw. sind keine verbindlichen Daten, sondern als annähernd zu betrachten. Wir verwenden die Herstellerangaben nach Besten Wissen und Gewissen. Sollten sich hinlängliche Hinweise ergeben das ein Produkt dem nicht standhält, nehmen wir es aus dem Angebot. Wir weisen ausdrücklich darauf hin, dass es sich bei Motorsportteilen um kurzlebige Hochleistungsprodukte handelt, die teilweise nicht für den öffentlichen Straßenverkehr zugelassen sind. Für diese speziellen Motorsportteile können wir keine Garantie oder Haftung übernehmen. Ist der Besteller Unternehmer, leisten wir für Mängel der Kaufsache gemäß Herstellerkonditionen.

Ist der Besteller Verbraucher, so hat er zunächst die Wahl, ob die Nacherfüllung durch Nachbesserung oder Ersatzlieferung erfolgen soll sofern dies möglich ist. Wir sind jedoch berechtigt, die Art der gewählten Nacherfüllung zu verweigern, wenn sie nur mit unverhältnismäßigen Kosten möglich ist. Im Zweifelsfall gelten immer die Gewährleistungsregelungen der Hersteller. Dem Verbraucher ist es freigestellt seine Ansprüche direkt beim Hersteller geltend zu machen. Sofern dazu Kontaktdaten übermittelt werden müssen, gewähren wir diesen berechtigten Anspruch.

Unternehmer müssen uns offensichtliche Mängel innerhalb einer Frist von zwei Wochen ab Empfang der Kaufsache schriftlich anzeigen; andernfalls ist die Geltendmachung des Gewährleistungsanspruches ausgeschlossen.

Verbraucher müssen uns innerhalb einer Frist von zwei Monaten nach dem Zeitpunkt, zu dem der vertragswidrige Zustand der Kaufsache festgestellt wurde, über offensichtliche Mängel schriftlich unterrichten. Maßgeblich für die Wahrung der Frist ist der Zugang der Unterrichtung bei uns. Unterläßt der Verbraucher diese Unterrichtung, erlöschen die Gewährleistungsrechte zwei Monate nach seiner Feststellung des Mangels. Dies gilt nicht bei Arglist des Bestellers. Die Beweislast für den Zeitpunkt der Feststellung des Mangels trifft den Verbraucher.

Schäden, welche aufgrund unsachgemäßer Behandlung, Anbringung oder Überbeanspruchung der Kaufsache oder durch die Nichtbeachtung der Vorschriften über die Behandlung, Wartung und Pflege der Kaufsache (z.B. Betriebsanleitung, Serviceheft etc.) entstanden sind, sind von der Gewährleistung ausgeschlossen. Wir weisen außerdem ausdrücklich darauf hin, dass Schäden, die aufgrund Verschleiß durch überdurchschnittlich hohe Laufleistungen (> 20.000 km/Jahr) oder rennähnlichem Betrieb entstanden sind, von der Gewährleistung ausgenommen sind. Gleiches gilt für Schäden die durch Unfälle oder deren Folgen in Zusammenhang stehen können.

Erklärungen von uns im Zusammenhang mit dem Vertrag (Leistungsbeschreibung, Bezugnahme auf DIN) beinhalten im Zweifel keine Übernahme einer Garantie. Im Zweifel bedarf die Übernahme einer Garantie unserer ausdrücklichen schriftlichen Erklärung.`,
  },
  {
    title: '9. Gerichtsstand',
    content: `Erfüllungsort und Gerichtsstand ist der Firmensitz des Verkäufers.`,
  },
  {
    title: '10. Salvatorische Klausel',
    content: `Ist oder wird eine dieser Bestimmungen ganz oder teilweise rechtsunwirksam, so werden die übrigen Bestimmungen davon nicht berührt. Die betroffene Bestimmung ist so auszulegen, wie sie in rechtswirksamer Weise dem Willen der Parteien am nächsten käme. Ansprüche auf Mängelbeseitigung hat der Besteller bei uns geltend zu machen.

Im Fall eines Mangels, der auf einer fehlerhaften Montageanleitung beruht, besteht die Verpflichtung zur Sachmangelhaftung nur, wenn die Montage bzw. der Einbau der verkauften Sache fachkundig durchgeführt wurde. Die fachkundige Durchführung hat der Besteller darzulegen und zu beweisen.`,
  },
  {
    title: '11. Warenrücknahme/Wiedereinlagerungsgebühr',
    content: `Soweit wir freiwillig vom Besteller Ware zurücknehmen, gilt folgendes: Rücknahmefähig ist nur Ware in ordnungsgemäßem, verkaufsfähigem Zustand, bei der es sich nicht um Sonderanfertigungen, bzw. -bestellungen handelt. Gegen Rückgabe der Ware erhält der Besteller eine Gutschrift in Höhe des Warenwerts, abzüglich einer Wiedereinlagerungsgebühr, die nicht in bar ausbezahlt wird, sondern nur bei künftigen Einkäufen bzw. Aufträgen verrechnet wird. Die Wiedereinlagerungsgebühr beträgt pro Artikel pauschal 10 % des Werts der zurückgenommenen Ware.`,
  },
  {
    title: '12. Eigentumsvorbehalt',
    content: `Der Liefergegenstand bleibt bis zum Ausgleich der uns aufgrund des Kauf- bzw. Werkvertrages zustehenden Forderungen unser Eigentum. Ist der Besteller ein Kaufmann, behalten wir uns das Eigentum an allen Liefergegenständen bis zum Eingang aller Zahlungen aus der Geschäftsbeziehung vor.

Bei vertragswidrigem Verhalten des Bestellers, insbesondere bei Zahlungsverzug, sind wir zur Rücknahme berechtigt und der Besteller zur Herausgabe verpflichtet. Wir sind nach der Rücknahme des Liefergegenstandes zu deren Verwertung befugt, der Verwertungserlös ist auf die Verbindlichkeiten des Bestellers - abzüglich angemessener Verwertungskosten - anzurechnen.

Der Besteller ist berechtigt, die Liefergegenstände im ordentlichen Geschäftsgang weiter zu verkaufen; er tritt uns jedoch bereits jetzt alle Forderungen in Höhe des Faktura- Endbetrages der von ihm geschuldeten Forderung (einschließlich Umsatzsteuer) ab, die ihm aus der Weiterveräußerung gegen seine Abnehmer oder Dritte erwachsen, unabhängig davon, ob die Liefergegenstände ohne oder nach Verarbeitung weiter verkauft worden sind.

Zur Einziehung dieser Forderungen bleibt der Besteller auch nach der Abtretung ermächtigt. Unsere Befugnis, die Forderungen selbst einzuziehen, bleibt hiervon unberührt. Wir verpflichten uns, die Forderungen nicht selbst einzuziehen, solange der Besteller seinen Zahlungsverpflichtungen vertragsgemäß nachkommt und kein Antrag auf Eröffnung eines Insolvenzverfahrens gestellt ist. Ist einer der letztgenannten Umstände eingetreten, hat der Besteller auf unser Verlangen uns gegenüber alle Angaben zu machen, die zum Einzug der abgetretenen Forderung erforderlich sind und die dazugehörigen Unterlagen auszuhändigen sowie den betreffenden Schuldnern (Dritten) die Abtretung mitzuteilen.`,
  },
];

export default function AgbPage() {
  return (
    <div className="min-h-screen bg-background-900">
      <SEOHead
        title="AGB – Allgemeine Geschäftsbedingungen | 63-Performance Chiptuning"
        description="Allgemeine Geschäftsbedingungen der 63-Performance. Informationen zu Lieferung, Zahlung, Gewährleistung, Haftung und Widerruf für Chiptuning-Dienstleistungen."
        keywords="AGB, Allgemeine Geschäftsbedingungen, 63-Performance, Chiptuning"
        canonicalUrl="https://63-performance.de/agb"
      />
      <Header />
      <main>
        {/* HERO */}
        <section className="relative h-[200px] md:h-[280px] w-full overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="/media/agb-hero-63-b354aa.webp"
              alt="63-Performance AGB"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background-900/80 via-background-900/60 to-background-900/90" />
          </div>

          <div className="relative z-10 text-center px-6 md:px-10">
            <h1 className="font-heading font-extrabold text-white uppercase leading-tight text-3xl md:text-4xl lg:text-5xl">
              AGB
            </h1>
          </div>
        </section>

        {/* Intro Text */}
        <section className="relative bg-background-900 py-16 md:py-24 overflow-hidden">
          <div className="w-full px-6 md:px-10 lg:px-16 max-w-3xl mx-auto">
            <p className="text-white/80 leading-relaxed text-sm md:text-base mb-10">
              Der Warenhandel und das Abschließen von Verträgen über das Internet erlangt immer mehr an Bedeutung. Wer einen Onlineshop betreiben möchte oder Dienstleistungen über das Internet anbieten möchte, sollte die Vertragsbedingungen – die ordnungsgemäßen Allgemeine Geschäftsbedingungen (AGB) – auf verständlicher Art und Weise für seine Kunden vorhalten. Obwohl kein Unternehmer verpflichtet ist, AGB aufzustellen, empfiehlt es sich trotzdem AGB festzulegen um die eigene Rechtssicherheit im elektronischen Rechtsverkehr zu gewährleisten. Ein Online-Business Betreiber kann mit vollständigen Informationen und entsprechenden Formulierungen dafür sorgen, dass seine Kunden bei der Geschäftsabwicklung mit ihm ausreichend informiert sind. Falsche Angaben in den AGB einer Website oder eines Onlineshops können Abmahnungen und hohe Kosten zur Folge haben. Durch richtige und vollständige AGB entsteht die Möglichkeit den gesetzlichen Rahmen voll auszuschöpfen.
            </p>
            <p className="text-white/80 leading-relaxed text-sm md:text-base">
              Selbstverständlich variieren die AGB je nach Art des Unternehmens, der Art des Geschäftsangebots und den gesetzlichen Anforderungen in dem gewählten Markt. Es ist auf jeden Fall eine gute Idee, einen Rechtsberater oder Rechtsexperten zu konsultieren, bevor verbindliche AGB auf einer Website veröffentlicht werden. Um den Einstieg zu erleichtern, kann man die üblichen, sogenannten "AGB-Generator", die man im Internet findet, zu Rate zu ziehen. Wichtig ist jedoch, dass der Generator an den Markt angepasst ist und die Tatsache, dass eine individuelle Rechtsberatung nicht umfassend und seriös durch ein automatisches Tool ersetzt werden kann.
            </p>
          </div>
        </section>

        {/* AGB Sections */}
        <section className="relative bg-background-50 py-16 md:py-24 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400/30 to-transparent" />
          <div className="w-full px-6 md:px-10 lg:px-16 max-w-3xl mx-auto space-y-12">
            {agbSections.map((section, index) => (
              <div key={index} className="border-l-2 border-primary-400/30 pl-6">
                <h2 className="text-white font-heading font-bold text-base md:text-lg uppercase tracking-wide mb-4">
                  {section.title}
                </h2>
                <div className="text-white/80 leading-relaxed text-sm md:text-base whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400/20 to-transparent" />
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
    </div>
  );
}