import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import FloatingWhatsApp from '@/pages/home/components/FloatingWhatsApp';
import CookieBanner from '@/pages/home/components/CookieBanner';
import SEOHead, { buildBreadcrumbSchema } from '@/components/feature/SEOHead';

const privacySections = [
  {
    title: '1. Verantwortlicher',
    content: `Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze der Mitgliedsstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen ist:

63-Performance
Geschäftsführer: Milot Sinani
Ferdinand-Porsche-Straße 6
63500 Seligenstadt
Deutschland

Telefon: +49 1759601217
E-Mail: info@63-performance.de
Web: www.63-performance.de

Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: 44 870 06499
Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Milot Sinani`,
  },
  {
    title: '2. Name und Anschrift des Datenschutzbeauftragten',
    content: `Für unser Unternehmen ist kein Datenschutzbeauftragter gesetzlich vorgeschrieben. Bei Fragen zum Datenschutz können Sie sich jederzeit direkt an den Verantwortlichen wenden:

63-Performance
Geschäftsführer: Milot Sinani
Ferdinand-Porsche-Straße 6
63500 Seligenstadt
Deutschland

Telefon: +49 1759601217
E-Mail: info@63-performance.de`,
  },
  {
    title: '3. Allgemeines zur Datenverarbeitung',
    content: `3.1 Umfang der Verarbeitung personenbezogener Daten
Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.

3.2 Rechtsgrundlage für die Verarbeitung personenbezogener Daten
Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage. Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages erforderlich ist, dessen Vertragspartei die betroffene Person ist, dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher Massnahmen erforderlich sind.

Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist, der unser Unternehmen unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage. Für den Fall, dass lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person eine Verarbeitung personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1 lit. d DSGVO als Rechtsgrundlage.

Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich und überwiegen die Interessen, Grundrechte und Grundfreiheiten des Betroffenen das erstgenannte Interesse nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage für die Verarbeitung.

3.3 Datenlöschung und Speicherdauer
Die personenbezogenen Daten der betroffenen Person werden gelöscht oder gesperrt, sobald der Zweck der Speicherung entfällt. Eine Speicherung kann darüber hinaus erfolgen, wenn dies durch den europäischen oder nationalen Gesetzgeber in unionsrechtlichen Verordnungen, Gesetzen oder sonstigen Vorschriften, denen der Verantwortliche unterliegt, vorgesehen wurde. Eine Sperrung oder Löschung der Daten erfolgt auch dann, wenn eine durch die genannten Normen vorgeschriebene Speicherfrist abläuft, es sei denn, dass eine Erforderlichkeit zur weiteren Speicherung der Daten für einen Vertragsabschluss oder eine Vertragserfüllung besteht.

3.4 Sicherheit Ihrer Daten
Wir treffen nach Massgabe der DSGVO geeignete technische und organisatorische Massnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten. Dazu gehören insbesondere die Sicherheit der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen Zugangs zu den Daten, als auch des sie betreffenden Zugriffs, der Eingabe, Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung.`,
  },
  {
    title: '4. Bereitstellung der Website und Erstellung von Logfiles',
    content: `4.1 Beschreibung und Umfang der Datenverarbeitung
Bei jedem Aufruf unserer Internetseite erfasst unser System automatisiert Daten und Informationen vom Computersystem des aufrufenden Rechners. Folgende Daten werden hierbei erhoben:

- Informationen über den Browsertyp und die verwendete Version
- Das Betriebssystem des Nutzers
- Den Internet-Service-Provider des Nutzers
- Die IP-Adresse des Nutzers
- Datum und Uhrzeit des Zugriffs
- Websites, von denen das System des Nutzers auf unsere Internetseite gelangt
- Websites, die vom System des Nutzers über unsere Website aufgerufen werden

Die Daten werden ebenfalls in den Logfiles unseres Systems gespeichert. Eine Speicherung dieser Daten zusammen mit anderen personenbezogenen Daten des Nutzers findet nicht statt.

4.2 Rechtsgrundlage für die Datenverarbeitung
Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO.

4.3 Zweck der Datenverarbeitung
Die vorübergehende Speicherung der IP-Adresse durch das System ist notwendig, um eine Auslieferung der Website an den Rechner des Nutzers zu ermöglichen. Hierfür muss die IP-Adresse des Nutzers für die Dauer der Sitzung gespeichert bleiben.

Die Speicherung in Logfiles erfolgt, um die Funktionsfähigkeit der Website sicherzustellen. Zudem dienen uns die Daten zur Optimierung der Website und zur Sicherstellung der Sicherheit unserer informationstechnischen Systeme. Eine Auswertung der Daten zu Marketingzwecken findet in diesem Zusammenhang nicht statt.

4.4 Dauer der Speicherung
Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Im Falle der Erfassung der Daten zur Bereitstellung der Website ist dies der Fall, wenn die jeweilige Sitzung beendet ist.

Im Falle der Speicherung der Daten in Logfiles ist dies nach spätestens vierzehn Tagen der Fall. Eine darüberhinausgehende Speicherung ist möglich. In diesem Fall werden die IP-Adressen der Nutzer gelöscht oder verfremdet, sodass eine Zuordnung des aufrufenden Clients nicht mehr möglich ist.`,
  },
  {
    title: '5. Verwendung von Cookies',
    content: `5.1 Beschreibung und Umfang der Datenverarbeitung
Unsere Website verwendet Cookies. Bei Cookies handelt es sich um Textdateien, die im Internetbrowser bzw. vom Internetbrowser auf dem Computersystem des Nutzers gespeichert werden. Ruft ein Nutzer eine Website auf, so kann ein Cookie auf dem Betriebssystem des Nutzers gespeichert werden. Dieser Cookie enthält eine charakteristische Zeichenfolge, die eine eindeutige Identifizierung des Browsers beim erneuten Aufrufen der Website ermöglicht.

Wir setzen Cookies ein, um unsere Website nutzerfreundlicher zu gestalten. Einige Elemente unserer Internetseite erfordern es, dass der aufrufende Browser auch nach einem Seitenwechsel identifiziert werden kann.

5.2 Rechtsgrundlage für die Datenverarbeitung
Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten unter Verwendung von Cookies ist Art. 6 Abs. 1 lit. f DSGVO.

5.3 Zweck der Datenverarbeitung
Der Zweck der Verwendung technisch notwendiger Cookies ist, die Nutzung von Websites für die Nutzer zu vereinfachen. Einige Funktionen unserer Internetseite können ohne den Einsatz von Cookies nicht angeboten werden. Für diese ist es erforderlich, dass der Browser auch nach einem Seitenwechsel wiedererkannt wird.

5.4 Dauer der Speicherung, Widerspruchs- und Beseitigungsmöglichkeit
Cookies werden auf dem Rechner des Nutzers gespeichert und von diesem an unserer Seite übermittelt. Daher haben Sie als Nutzer auch die volle Kontrolle über die Verwendung von Cookies. Durch eine Änderung der Einstellungen in Ihrem Internetbrowser können Sie die Übertragung von Cookies deaktivieren oder einschränken. Bereits gespeicherte Cookies können jederzeit gelöscht werden. Dies kann auch automatisiert erfolgen. Werden Cookies für unsere Website deaktiviert, können möglicherweise nicht mehr alle Funktionen der Website vollumfänglich genutzt werden.`,
  },
  {
    title: '6. Kontaktformular und E-Mail-Kontakt',
    content: `6.1 Beschreibung und Umfang der Datenverarbeitung
Auf unserer Internetseite ist ein Kontaktformular vorhanden, welches für die elektronische Kontaktaufnahme genutzt werden kann. Nimmt ein Nutzer diese Möglichkeit wahr, so werden die in der Eingabemaske eingegeben Daten an uns übermittelt und gespeichert. Diese Daten sind:

- Name
- E-Mail-Adresse
- Telefonnummer (optional)
- Fahrzeugdaten (optional)
- Nachricht

Zum Zeitpunkt der Absendung der Nachricht werden zudem folgende Daten gespeichert:
- Die IP-Adresse des Nutzers
- Datum und Uhrzeit der Registrierung

Für die Verarbeitung der Daten wird im Rahmen des Absendevorgangs Ihre Einwilligung eingeholt und auf diese Datenschutzerklärung verwiesen.

Alternativ ist eine Kontaktaufnahme über die bereitgestellte E-Mail-Adresse möglich. In diesem Fall werden die mit der E-Mail übermittelten personenbezogenen Daten des Nutzers gespeichert.

6.2 Rechtsgrundlage für die Datenverarbeitung
Rechtsgrundlage für die Verarbeitung der Daten ist bei Vorliegen einer Einwilligung des Nutzers Art. 6 Abs. 1 lit. a DSGVO.

Rechtsgrundlage für die Verarbeitung der Daten, die im Zuge einer Übersendung einer E-Mail übermittelt werden, ist Art. 6 Abs. 1 lit. f DSGVO. Zielt der E-Mail-Kontakt auf den Abschluss eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO.

6.3 Zweck der Datenverarbeitung
Die Verarbeitung der personenbezogenen Daten aus der Eingabemaske dient uns allein zur Bearbeitung der Kontaktaufnahme. Im Falle einer Kontaktaufnahme per E-Mail liegt hieran auch das erforderliche berechtigte Interesse an der Verarbeitung der Daten.

Die sonstigen während des Absendevorgangs verarbeiteten personenbezogenen Daten dienen dazu, einen Missbrauch des Kontaktformulars zu verhindern und die Sicherheit unserer informationstechnischen Systeme sicherzustellen.

6.4 Dauer der Speicherung
Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Für die personenbezogenen Daten aus der Eingabemaske des Kontaktformulars und diejenigen, die per E-Mail übersandt wurden, ist dies dann der Fall, wenn die jeweilige Konversation mit dem Nutzer beendet ist. Die Konversation ist dann beendet, wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschliessend geklärt ist.

Die während des Absendevorgangs zusätzlich erhobenen personenbezogenen Daten werden spätestens nach einer Frist von vierzehn Tagen gelöscht.

6.5 Widerspruchs- und Beseitigungsmöglichkeit
Der Nutzer hat jederzeit die Möglichkeit, seine Einwilligung zur Verarbeitung der personenbezogenen Daten zu widerrufen. Nimmt der Nutzer per E-Mail Kontakt mit uns auf, so kann er der Speicherung seiner personenbezogenen Daten jederzeit widersprechen. In einem solchen Fall kann die Konversation nicht fortgeführt werden.

Alle personenbezogenen Daten, die im Zuge der Kontaktaufnahme gespeichert wurden, werden in diesem Fall gelöscht.`,
  },
  {
    title: '7. Online-Terminbuchung',
    content: `7.1 Beschreibung und Umfang der Datenverarbeitung
Wir bieten auf unserer Website die Möglichkeit, Termine für unsere Dienstleistungen online zu buchen. Bei der Nutzung dieses Dienstes werden folgende personenbezogene Daten erhoben und gespeichert:

- Name und Vorname
- E-Mail-Adresse
- Telefonnummer
- Fahrzeugdaten (Marke, Modell, Baujahr, Kennzeichen)
- Gewünschter Termin und Uhrzeit
- Gewünschte Dienstleistung
- Zusätzliche Anmerkungen

7.2 Rechtsgrundlage für die Datenverarbeitung
Rechtsgrundlage für die Verarbeitung der Daten ist Art. 6 Abs. 1 lit. b DSGVO, da die Verarbeitung für die Erfüllung eines Vertrages oder vorvertraglicher Massnahmen erforderlich ist.

7.3 Zweck der Datenverarbeitung
Die Erhebung und Verarbeitung dieser Daten erfolgt, um den gewünschten Termin zu koordinieren, die angeforderte Dienstleistung vorzubereiten und mit dem Kunden in Kontakt treten zu können. Die Fahrzeugdaten werden benötigt, um die passenden Tuning-Massnahmen und Teile vorzubereiten.

7.4 Dauer der Speicherung
Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Dies ist in der Regel nach Abwicklung des Auftrags und Ablauf der gesetzlichen Aufbewahrungsfristen der Fall. Die gesetzlichen Aufbewahrungsfristen betragen nach deutschem Recht in der Regel 6 bis 10 Jahre (z.B. gemäss HGB für Geschäftsbriefe).`,
  },
  {
    title: '8. Hosting',
    content: `Unsere Website wird bei einem externen Dienstleister gehostet. Hierbei handelt es sich um einen Profi-Hosting-Dienstleister, der im Auftrag unseres Unternehmens die Infrastruktur zur Verfügung stellt, um den Betrieb der Website zu gewährleisten. Dabei kann es sich um Server, Speicherplatz, Datenbankdienste und Sicherheitskomponenten handeln.

Der Hosting-Anbieter verarbeitet dabei personenbezogene Daten unserer Website-Besucher, insbesondere technische Daten wie IP-Adressen und Logfiles, um die Bereitstellung und den Schutz der Website zu gewährleisten. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer funktionsfähigen und sicheren Website).`,
  },
  {
    title: '9. Google Analytics (falls aktiviert)',
    content: `Falls Google Analytics auf unserer Website eingesetzt wird, gilt Folgendes:

Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited. Google Analytics verwendet sog. "Cookies", Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen.

Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Im Falle der Aktivierung der IP-Anonymisierung auf dieser Website wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt.

Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können.

Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: https://tools.google.com/dlpage/gaoptout?hl=de.

Nähere Informationen zu Nutzungsbedingungen und Datenschutz finden Sie unter https://www.google.com/analytics/terms/de.html bzw. unter https://policies.google.com/?hl=de.`,
  },
  {
    title: '10. Rechte der betroffenen Person',
    content: `Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener i.S.d. DSGVO und es stehen Ihnen folgende Rechte gegenüber dem Verantwortlichen zu:

10.1 Auskunftsrecht
Sie können von dem Verantwortlichen eine Bestätigung darüber verlangen, ob personenbezogene Daten, die Sie betreffen, von uns verarbeitet werden.

Liegt eine solche Verarbeitung vor, können Sie von dem Verantwortlichen über folgende Informationen Auskunft verlangen:

(1) die Verarbeitungszwecke;
(2) die Kategorien von personenbezogenen Daten, welche verarbeitet werden;
(3) die Empfänger oder Kategorien von Empfängern, gegenüber denen die Sie betreffenden personenbezogenen Daten offengelegt wurden oder noch offengelegt werden;
(4) die geplante Dauer der Speicherung der Sie betreffenden personenbezogenen Daten oder, falls konkrete Angaben hierzu nicht möglich sind, Kriterien für die Festlegung der Speicherdauer;
(5) das Bestehen eines Rechts auf Berichtigung oder Löschung der Sie betreffenden personenbezogenen Daten, eines Rechts auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung;
(6) das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde;
(7) alle verfügbaren Informationen über die Herkunft der Daten, wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden;
(8) das Bestehen einer automatisierten Entscheidungsfindung einschliesslich Profiling gemäss Art. 22 Abs. 1 und 4 DSGVO und – zumindest in diesen Fällen – aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene Person.

10.2 Recht auf Berichtigung
Sie haben ein Recht auf Berichtigung und/oder Vervollständigung gegenüber dem Verantwortlichen, sofern die verarbeiteten personenbezogenen Daten, die Sie betreffen, unrichtig oder unvollständig sind. Der Verantwortliche hat die Berichtigung unverzüglich vorzunehmen.

10.3 Recht auf Einschränkung der Verarbeitung
Unter den folgenden Voraussetzungen können Sie die Einschränkung der Verarbeitung der Sie betreffenden personenbezogenen Daten verlangen:

(1) wenn Sie die Richtigkeit der Sie betreffenden personenbezogenen für eine Dauer bestreiten, die es dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen;
(2) die Verarbeitung unrechtmässig ist und Sie die Löschung der personenbezogenen Daten ablehnen und stattdessen die Einschränkung der Nutzung der personenbezogenen Daten verlangen;
(3) der Verantwortliche die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger benötigt, Sie diese jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen, oder
(4) wenn Sie Widerspruch gegen die Verarbeitung gemäss Art. 21 Abs. 1 DSGVO eingelegt haben und noch nicht feststeht, ob die berechtigten Gründe des Verantwortlichen gegenüber Ihren Gründen überwiegen.

10.4 Recht auf Löschung
Sie können von dem Verantwortlichen verlangen, dass die Sie betreffenden personenbezogenen Daten unverzüglich gelöscht werden, und der Verantwortliche ist verpflichtet, diese Daten unverzüglich zu löschen, sofern einer der folgenden Gründe zutrifft:

(1) Die Sie betreffenden personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig.
(2) Sie widerrufen Ihre Einwilligung, auf die sich die Verarbeitung gemäss Art. 6 Abs. 1 lit. a oder Art. 9 Abs. 2 lit. a DSGVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.
(3) Sie legen gemäss Art. 21 Abs. 1 DSGVO Widerspruch gegen die Verarbeitung ein und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder Sie legen gemäss Art. 21 Abs. 2 DSGVO Widerspruch gegen die Verarbeitung ein.
(4) Die Sie betreffenden personenbezogenen Daten wurden unrechtmässig verarbeitet.
(5) Die Löschung der Sie betreffenden personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt.
(6) Die Sie betreffenden personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäss Art. 8 Abs. 1 DSGVO erhoben.

10.5 Recht auf Unterrichtung
Haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung gegenüber dem Verantwortlichen geltend gemacht, ist dieser verpflichtet, allen Empfängern, denen die Sie betreffenden personenbezogenen Daten offengelegt wurden, diese Berichtigung oder Löschung der Daten oder Einschränkung der Verarbeitung mitzuteilen, es sei denn, dies erweist sich als unmöglich oder ist mit einem unverhältnismässigen Aufwand verbunden.

10.6 Recht auf Datenübertragbarkeit
Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die Sie dem Verantwortlichen bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten. Ausserdem haben Sie das Recht, diese Daten einem anderen Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu übermitteln, sofern

(1) die Verarbeitung auf einer Einwilligung gemäss Art. 6 Abs. 1 lit. a DSGVO oder Art. 9 Abs. 2 lit. a DSGVO oder auf einem Vertrag gemäss Art. 6 Abs. 1 lit. b DSGVO beruht und
(2) die Verarbeitung mithilfe automatisierter Verfahren erfolgt.

10.7 Recht auf Widerruf einer datenschutzrechtlichen Einwilligung
Sie haben das Recht, Ihre datenschutzrechtliche Einwilligung jederzeit zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmässigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.

10.8 Automatisierte Entscheidung im Einzelfall einschliesslich Profiling
Sie haben das Recht, nicht einer ausschliesslich auf einer automatisierten Verarbeitung – einschliesslich Profiling – beruhenden Entscheidung unterworfen zu werden, die Ihnen gegenüber rechtliche Wirkung entfaltet oder Sie in ähnlicher Weise erheblich beeinträchtigt.

10.9 Recht auf Beschwerde bei einer Aufsichtsbehörde
Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmasslichen Verstosses, zu, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstösst.`,
  },
  {
    title: '11. Widerspruchsrecht',
    content: `Sie haben das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling.

Der Verantwortliche verarbeitet die Sie betreffenden personenbezogenen Daten nicht mehr, es sei denn, er kann zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.

Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.`,
  },
  {
    title: '12. SSL- bzw. TLS-Verschlüsselung',
    content: `Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.

Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.`,
  },
  {
    title: '13. Änderung der Datenschutzerklärung',
    content: `Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.

Stand: Juni 2025`,
  },
];

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background-900">
      <SEOHead
        title="Datenschutzerklärung – 63-Performance Chiptuning"
        description="Datenschutzerklärung der 63-Performance gemäß DSGVO. Informationen zur Erhebung, Verarbeitung und Nutzung personenbezogener Daten auf unserer Website."
        keywords="Datenschutz, DSGVO, Datenschutzerklärung, 63-Performance"
        canonicalUrl="https://63-performance.de/datenschutz"
      />
      <Header />
      <main>
        {/* HERO */}
        <section className="relative h-[200px] md:h-[280px] w-full overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="/media/datenschutz-hero-63-f29102.webp"
              alt="63-Performance Datenschutz"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background-900/80 via-background-900/60 to-background-900/90" />
          </div>

          <div className="relative z-10 text-center px-6 md:px-10">
            <h1 className="font-heading font-extrabold text-white uppercase leading-tight text-3xl md:text-4xl lg:text-5xl">
              Datenschutz
            </h1>
            <p className="text-white/60 mt-2 text-sm md:text-base">
              Datenschutzerklärung gemäß DSGVO
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="relative bg-background-900 py-16 md:py-24 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400/30 to-transparent" />
          <div className="w-full px-6 md:px-10 lg:px-16 max-w-3xl mx-auto">
            <p className="text-white/80 leading-relaxed text-sm md:text-base">
              Wir freuen uns über Ihr Interesse an unserem Unternehmen. Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie umfassend über den Umgang mit Ihren Daten.
            </p>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="relative bg-background-50 py-16 md:py-24 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400/20 to-transparent" />
          <div className="w-full px-6 md:px-10 lg:px-16 max-w-3xl mx-auto space-y-14">
            {privacySections.map((section, index) => (
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