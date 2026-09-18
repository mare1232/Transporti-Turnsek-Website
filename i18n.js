/* Prevodi strani. Slovenščina je izvorno besedilo v HTML, tu sta le
   angleščina in nemščina. Ključ je natanko slovenski niz. */
(function () {
  var D = {
    /* glava in navigacija */
    'Storitve': ['Services', 'Leistungen'],
    'Vozni park': ['Fleet', 'Fuhrpark'],
    'Destinacije': ['Destinations', 'Ziele'],
    'O podjetju': ['About us', 'Über uns'],
    'Lokacije': ['Locations', 'Standorte'],
    'Povpraševanje': ['Get a quote', 'Anfrage'],
    'Pokliči': ['Call us', 'Anrufen'],
    'Meni': ['Menu', 'Menü'],
    'Nazaj na domov': ['Back to home', 'Zurück zur Startseite'],
    'Domov': ['Home', 'Startseite'],
    'Turnšek Transport - domov': ['Turnšek Transport - home', 'Turnšek Transport - Startseite'],

    /* hero */
    'Družinsko podjetje od 1994': ['A family business since 1994', 'Familienunternehmen seit 1994'],
    'Prevozi, ki držijo besedo.': ['Transport that keeps its word.', 'Transporte, die Wort halten.'],
    'Zahtevno blago po celi Evropski uniji, državah bivše Jugoslavije in delih Azije. Zavarovano, sledljivo in na cilju ob dogovorjenem času.':
      ['Demanding cargo across the European Union, the countries of the former Yugoslavia and parts of Asia. Insured, traceable and delivered at the agreed time.',
       'Anspruchsvolle Ladung in der gesamten Europäischen Union, in den Ländern des ehemaligen Jugoslawien und in Teilen Asiens. Versichert, nachverfolgbar und pünktlich am Ziel.'],
    'Oddaj povpraševanje': ['Request a quote', 'Anfrage senden'],
    'Naše storitve': ['Our services', 'Unsere Leistungen'],
    'Rogaška Slatina, izhodišče': ['Rogaška Slatina, our base', 'Rogaška Slatina, unser Standort'],
    'Države, kamor redno vozimo': ['Countries we regularly drive to', 'Länder, die wir regelmäßig anfahren'],
    'Karta Evrope in Azije z destinacijami, kamor vozimo':
      ['Map of Europe and Asia with the destinations we serve', 'Karte von Europa und Asien mit unseren Zielorten'],
    'let izkušenj': ['years of experience', 'Jahre Erfahrung'],
    'strank': ['clients', 'Kunden'],
    'držav': ['countries', 'Länder'],
    'tovornih vozil': ['trucks', 'Lkw'],

    /* moto */
    'Naš moto': ['Our motto', 'Unser Leitsatz'],
    'Pravočasnost in spoštovanje dogovorjenih rokov. Fleksibilnost v nujnih situacijah. Zanesljivost in strokovnost pri ravnanju z zahtevnim blagom.':
      ['Punctuality and respect for agreed deadlines. Flexibility in urgent situations. Reliability and expertise in handling demanding cargo.',
       'Pünktlichkeit und Einhaltung vereinbarter Termine. Flexibilität in dringenden Situationen. Zuverlässigkeit und Fachkenntnis im Umgang mit anspruchsvoller Ladung.'],
    'Pravočasnost': ['Punctuality', 'Pünktlichkeit'],
    'Dogovorjen rok je rok, ne ocena.': ['An agreed deadline is a deadline, not an estimate.', 'Ein vereinbarter Termin ist ein Termin, keine Schätzung.'],
    'Fleksibilnost': ['Flexibility', 'Flexibilität'],
    'Prilagajamo se nujnim situacijam.': ['We adapt to urgent situations.', 'Wir passen uns dringenden Situationen an.'],
    'Strokovnost': ['Expertise', 'Fachkenntnis'],
    'Specializirani za zahtevno blago.': ['Specialised in demanding cargo.', 'Spezialisiert auf anspruchsvolle Ladung.'],
    'Izkušnje': ['Experience', 'Erfahrung'],
    'Več kot 30 let na evropskih cestah.': ['More than 30 years on European roads.', 'Mehr als 30 Jahre auf Europas Straßen.'],

    /* storitve */
    'Zgrajeno na zaupanju': ['Built on trust', 'Auf Vertrauen gebaut'],
    'Tri stvari, na katere se naročniki najpogosteje zanašajo.':
      ['Three things our clients rely on most.', 'Drei Dinge, auf die sich unsere Kunden am meisten verlassen.'],
    '01 / Zavarovanje': ['01 / Insurance', '01 / Versicherung'],
    'Zavarovan tovor, ne glede na pot.': ['Insured cargo, whatever the route.', 'Versicherte Ladung, ganz gleich auf welcher Route.'],
    'Za vsa vozila imamo urejeno zavarovanje tovora - v primeru prometne nesreče, požara ali eksplozije, višje sile, elementarnih nesreč ter vlomne tatvine ali tatvine celega vozila s tovorom.':
      ['All our vehicles carry cargo insurance - covering road accidents, fire or explosion, force majeure, natural disasters, burglary and theft of the entire loaded vehicle.',
       'Für alle Fahrzeuge besteht eine Ladungsversicherung - bei Verkehrsunfall, Brand oder Explosion, höherer Gewalt, Naturkatastrophen sowie Einbruch- und Diebstahl des gesamten beladenen Fahrzeugs.'],
    'Prometna nesreča': ['Road accident', 'Verkehrsunfall'],
    'Požar in eksplozija': ['Fire and explosion', 'Brand und Explosion'],
    'Višja sila': ['Force majeure', 'Höhere Gewalt'],
    'Elementarne nesreče': ['Natural disasters', 'Naturkatastrophen'],
    'Tatvina': ['Theft', 'Diebstahl'],
    '02 / Sledljivost': ['02 / Traceability', '02 / Nachverfolgung'],
    'Vedno veste, kje je blago.': ['You always know where the cargo is.', 'Sie wissen jederzeit, wo die Ladung ist.'],
    'Poslovnim partnerjem zagotavljamo sledljivost blaga skozi celoten proces - naročnik lahko v vsakem trenutku izve, kje se pošiljka nahaja.':
      ['We provide our partners with traceability throughout the whole process - the client can find out where the shipment is at any moment.',
       'Wir bieten unseren Partnern Nachverfolgung während des gesamten Prozesses - der Kunde kann jederzeit erfahren, wo sich die Sendung befindet.'],
    '03 / Prilagodljivost': ['03 / Flexibility', '03 / Flexibilität'],
    'Po vaših potrebah': ['Tailored to your needs', 'Nach Ihren Bedürfnissen'],
    'Transportne storitve vseh vrst opravimo kvalitetno, pravočasno in v skladu z vašimi individualnimi željami.':
      ['We carry out transport services of all kinds with quality, on time and in line with your individual requirements.',
       'Wir führen Transportdienstleistungen aller Art qualitativ hochwertig, pünktlich und nach Ihren individuellen Wünschen aus.'],
    '04 / Hitrost': ['04 / Speed', '04 / Schnelligkeit'],
    'Hitra izvedba': ['Fast execution', 'Schnelle Abwicklung'],
    'Cilj so hitre in kakovostne storitve prevozov zahtevnega blaga, tudi ob kratkih rokih.':
      ['Our goal is fast, high-quality transport of demanding cargo, even at short notice.',
       'Unser Ziel sind schnelle, hochwertige Transporte anspruchsvoller Ladung, auch kurzfristig.'],
    '05 / Izkušnje': ['05 / Experience', '05 / Erfahrung'],
    'Od leta 1994': ['Since 1994', 'Seit 1994'],
    'Prevoze v mednarodnem cestnem prometu uspešno opravljamo že več kot tri desetletja.':
      ['We have been successfully providing international road transport for more than three decades.',
       'Seit mehr als drei Jahrzehnten führen wir erfolgreich internationale Straßentransporte durch.'],
    'fotografija: zavarovan tovor': ['photo: insured cargo', 'Foto: versicherte Ladung'],
    'fotografija: sledenje pošiljki': ['photo: shipment tracking', 'Foto: Sendungsverfolgung'],
    'fotografija: vozni park': ['photo: our fleet', 'Foto: unser Fuhrpark'],

    /* vozni park */
    'Vozni park neprestano posodabljamo, obnavljamo in širimo. Vsa vozila ustrezajo ekološkim standardom in so opremljena z nadzorom temperature.':
      ['We continuously update, renew and expand our fleet. All vehicles meet ecological standards and are equipped with temperature control.',
       'Wir modernisieren, erneuern und erweitern unseren Fuhrpark laufend. Alle Fahrzeuge erfüllen die Umweltstandards und verfügen über Temperaturkontrolle.'],
    'tovornih vozil s cerado': ['curtain-side trucks', 'Planen-Lkw'],
    'polpriklopniki': ['semi-trailers', 'Sattelauflieger'],
    'volumenska vozila': ['volume vehicles', 'Volumenfahrzeuge'],
    'Nadzor temperature': ['Temperature control', 'Temperaturkontrolle'],
    'Ekološki standardi': ['Ecological standards', 'Umweltstandards'],

    /* destinacije */
    'Kam vozimo': ['Where we drive', 'Wohin wir fahren'],
    'Prevoze opravljamo znotraj Evropske unije, v državah bivše Jugoslavije ter v ostalih evropskih in nekaterih azijskih državah. Zaupa nam več kot 150 strank iz 26 držav.':
      ['We carry out transports within the European Union, in the countries of the former Yugoslavia and in other European and some Asian countries. More than 150 clients from 26 countries trust us.',
       'Wir führen Transporte innerhalb der Europäischen Union, in den Ländern des ehemaligen Jugoslawien sowie in weiteren europäischen und einigen asiatischen Ländern durch. Mehr als 150 Kunden aus 26 Ländern vertrauen uns.'],
    'Evropska unija': ['European Union', 'Europäische Union'],
    'Bivša Jugoslavija': ['Former Yugoslavia', 'Ehemaliges Jugoslawien'],
    'Ostala Evropa in Azija': ['Rest of Europe and Asia', 'Übriges Europa und Asien'],
    'Slovenija, Italija, Avstrija, Švica, Madžarska, Francija, Nemčija, Grčija, Španija, Portugalska, Luksemburg, Nizozemska, Belgija, Velika Britanija, Poljska, Češka, Litva, Latvija, Estonija':
      ['Slovenia, Italy, Austria, Switzerland, Hungary, France, Germany, Greece, Spain, Portugal, Luxembourg, Netherlands, Belgium, United Kingdom, Poland, Czechia, Lithuania, Latvia, Estonia',
       'Slowenien, Italien, Österreich, Schweiz, Ungarn, Frankreich, Deutschland, Griechenland, Spanien, Portugal, Luxemburg, Niederlande, Belgien, Großbritannien, Polen, Tschechien, Litauen, Lettland, Estland'],
    'Bosna in Hercegovina, Srbija, Črna gora, Kosovo':
      ['Bosnia and Herzegovina, Serbia, Montenegro, Kosovo', 'Bosnien und Herzegowina, Serbien, Montenegro, Kosovo'],
    'Rusija, Ukrajina, Gruzija, Armenija, Kazahstan, Kirgizistan':
      ['Russia, Ukraine, Georgia, Armenia, Kazakhstan, Kyrgyzstan', 'Russland, Ukraine, Georgien, Armenien, Kasachstan, Kirgisistan'],

    /* države (karta) */
    'Slovenija': ['Slovenia', 'Slowenien'],
    'Italija': ['Italy', 'Italien'],
    'Avstrija': ['Austria', 'Österreich'],
    'Švica': ['Switzerland', 'Schweiz'],
    'Madžarska': ['Hungary', 'Ungarn'],
    'Francija': ['France', 'Frankreich'],
    'Nemčija': ['Germany', 'Deutschland'],
    'Grčija': ['Greece', 'Griechenland'],
    'Španija': ['Spain', 'Spanien'],
    'Portugalska': ['Portugal', 'Portugal'],
    'Luksemburg': ['Luxembourg', 'Luxemburg'],
    'Nizozemska': ['Netherlands', 'Niederlande'],
    'Belgija': ['Belgium', 'Belgien'],
    'Velika Britanija': ['United Kingdom', 'Großbritannien'],
    'Poljska': ['Poland', 'Polen'],
    'Češka': ['Czechia', 'Tschechien'],
    'Litva': ['Lithuania', 'Litauen'],
    'Latvija': ['Latvia', 'Lettland'],
    'Estonija': ['Estonia', 'Estland'],
    'Bosna in Hercegovina': ['Bosnia and Herzegovina', 'Bosnien und Herzegowina'],
    'Srbija': ['Serbia', 'Serbien'],
    'Črna gora': ['Montenegro', 'Montenegro'],
    'Kosovo': ['Kosovo', 'Kosovo'],
    'Rusija': ['Russia', 'Russland'],
    'Ukrajina': ['Ukraine', 'Ukraine'],
    'Gruzija': ['Georgia', 'Georgien'],
    'Armenija': ['Armenia', 'Armenien'],
    'Kazahstan': ['Kazakhstan', 'Kasachstan'],
    'Kirgizistan': ['Kyrgyzstan', 'Kirgisistan'],

    /* o podjetju */
    'Kako smo začeli': ['How we started', 'Wie wir angefangen haben'],
    'Od enega kamiona do prevozov po vsej Evropi.': ['From one truck to transports across Europe.', 'Von einem Lkw zu Transporten in ganz Europa.'],
    'En kamion, ena vožnja v Rusijo': ['One truck, one drive to Russia', 'Ein Lkw, eine Fahrt nach Russland'],
    'Začeli smo z enim kamionom, ki ga je direktor Franc sam vozil v Rusijo. Družinsko podjetje od prvega dne opravlja prevoze po Sloveniji in v tujini.':
      ['We started with a single truck that director Franc drove to Russia himself. From day one, the family business has carried out transports in Slovenia and abroad.',
       'Wir begannen mit einem einzigen Lkw, den Geschäftsführer Franc selbst nach Russland fuhr. Seit dem ersten Tag führt das Familienunternehmen Transporte in Slowenien und im Ausland durch.'],
    'Rast': ['Growth', 'Wachstum'],
    'Potrebe trga so narasle': ['Market demand grew', 'Der Bedarf am Markt wuchs'],
    'S povpraševanjem smo začeli širiti vozni park in ekipo voznikov ter prevzemati zahtevnejše relacije.':
      ['As demand grew, we expanded the fleet and the team of drivers and took on more demanding routes.',
       'Mit der Nachfrage erweiterten wir den Fuhrpark und das Fahrerteam und übernahmen anspruchsvollere Strecken.'],
    'Danes': ['Today', 'Heute'],
    'Več kot 150 strank iz 26 držav': ['More than 150 clients from 26 countries', 'Mehr als 150 Kunden aus 26 Ländern'],
    'Dvanajst vozil, redne relacije po Evropi in Aziji ter dolgoletni partnerji, ki se vračajo.':
      ['Twelve vehicles, regular routes across Europe and Asia, and long-standing partners who keep coming back.',
       'Zwölf Fahrzeuge, regelmäßige Strecken durch Europa und Asien und langjährige Partner, die wiederkommen.'],

    /* lokacije */
    'Kje nas najdete': ['Where to find us', 'Wo Sie uns finden'],
    'Pisarna v Rogaški Slatini, parkirišče in mehanična delavnica v Slovenski Bistrici.':
      ['Office in Rogaška Slatina, parking and mechanical workshop in Slovenska Bistrica.',
       'Büro in Rogaška Slatina, Parkplatz und Werkstatt in Slovenska Bistrica.'],
    'Pisarna': ['Office', 'Büro'],
    'Pisarna:': ['Office:', 'Büro:'],
    'Mobitel:': ['Mobile:', 'Mobil:'],
    'Faks: +386 3 819 27 40': ['Fax: +386 3 819 27 40', 'Fax: +386 3 819 27 40'],
    'Mobitel: +386 40 213 620': ['Mobile: +386 40 213 620', 'Mobil: +386 40 213 620'],
    'Mobitel: +386 40 309 929': ['Mobile: +386 40 309 929', 'Mobil: +386 40 309 929'],
    'Pisarna: +386 3 819 27 41': ['Office: +386 3 819 27 41', 'Büro: +386 3 819 27 41'],
    'Parkirišče in mehanična delavnica': ['Parking and mechanical workshop', 'Parkplatz und mechanische Werkstatt'],
    'Kamence 10, 3250 Rogaška Slatina, Slovenija (EU)': ['Kamence 10, 3250 Rogaška Slatina, Slovenia (EU)', 'Kamence 10, 3250 Rogaška Slatina, Slowenien (EU)'],
    'Spodnja Nova vas 47, 2310 Slovenska Bistrica, Slovenija (EU)': ['Spodnja Nova vas 47, 2310 Slovenska Bistrica, Slovenia (EU)', 'Spodnja Nova vas 47, 2310 Slovenska Bistrica, Slowenien (EU)'],
    'Odpri v zemljevidu': ['Open in maps', 'In Karten öffnen'],

    /* CTA in noga */
    'Potrebujete ponudbo za prevoz?': ['Need a transport quote?', 'Brauchen Sie ein Transportangebot?'],
    'Pošljite relacijo in vrsto blaga ali nas preprosto pokličite - odgovorimo hitro.':
      ['Send us the route and type of cargo, or simply call - we reply quickly.',
       'Senden Sie uns Strecke und Ladungsart oder rufen Sie einfach an - wir antworten schnell.'],
    '© 2026 Turnšek Transport. Vse pravice pridržane.': ['© 2026 Turnšek Transport. All rights reserved.', '© 2026 Turnšek Transport. Alle Rechte vorbehalten.'],

    /* kontaktna stran */
    'Povejte nam, kaj vozimo.': ['Tell us what we are hauling.', 'Sagen Sie uns, was wir transportieren.'],
    'Opišite relacijo in vrsto blaga. Odgovorimo z okvirno ponudbo, po potrebi pa vas pokličemo nazaj.':
      ['Describe the route and the type of cargo. We reply with an indicative quote and call you back if needed.',
       'Beschreiben Sie Strecke und Ladungsart. Wir antworten mit einem Richtangebot und rufen bei Bedarf zurück.'],
    'Ime in podjetje': ['Name and company', 'Name und Unternehmen'],
    'E-pošta': ['Email', 'E-Mail'],
    'Telefon': ['Phone', 'Telefon'],
    'Relacija (od - do)': ['Route (from - to)', 'Strecke (von - bis)'],
    'npr. Rogaška Slatina - Berlin': ['e.g. Rogaška Slatina - Berlin', 'z. B. Rogaška Slatina - Berlin'],
    'Vrsta blaga': ['Type of cargo', 'Art der Ladung'],
    'npr. paletirano blago, 12 t': ['e.g. palletised goods, 12 t', 'z. B. palettierte Ware, 12 t'],
    'Sporočilo': ['Message', 'Nachricht'],
    'Teža, dimenzije, želen datum prevoza, posebne zahteve ...':
      ['Weight, dimensions, preferred date, special requirements ...', 'Gewicht, Maße, Wunschtermin, besondere Anforderungen ...'],
    'Pošlji povpraševanje': ['Send request', 'Anfrage senden'],
    'Ob oddaji se odpre vaš e-poštni program s pripravljenim sporočilom.':
      ['Submitting opens your email client with a prepared message.', 'Beim Absenden öffnet sich Ihr E-Mail-Programm mit einer vorbereiteten Nachricht.'],
    'Najhitrejša pot do odgovora': ['The fastest way to an answer', 'Der schnellste Weg zur Antwort'],
    'Vse številke': ['All numbers', 'Alle Rufnummern'],
    'Mobitel': ['Mobile', 'Mobil'],
    'Faks': ['Fax', 'Fax'],
    'Kamence 10, 3250 Rogaška Slatina': ['Kamence 10, 3250 Rogaška Slatina', 'Kamence 10, 3250 Rogaška Slatina'],
    'Spodnja Nova vas 47, 2310 Slovenska Bistrica': ['Spodnja Nova vas 47, 2310 Slovenska Bistrica', 'Spodnja Nova vas 47, 2310 Slovenska Bistrica'],
    'Odpri v zemljevidu ›': ['Open in maps ›', 'In Karten öffnen ›'],
    'Hvala, povpraševanje je poslano. Odgovorimo v najkrajšem možnem času.':
      ['Thank you, your request has been sent. We will reply as soon as possible.',
       'Vielen Dank, Ihre Anfrage wurde gesendet. Wir antworten so schnell wie möglich.'],
    'Pošiljanje ni uspelo. Pokličite nas na +386 40 213 620.':
      ['Sending failed. Please call us at +386 40 213 620.',
       'Senden fehlgeschlagen. Bitte rufen Sie uns an: +386 40 213 620.'],
    'Jezik': ['Language', 'Sprache']
  };

  var IDX = { sl: -1, en: 0, de: 1 };
  var ATTRS = ['placeholder', 'aria-label', 'alt', 'title'];
  var current = 'sl';

  /* obratni slovar: kateri koli jezik -> slovenscina */
  var REV = {};
  Object.keys(D).forEach(function (sl) {
    D[sl].forEach(function (v) { if (v && !REV[v]) REV[v] = sl; });
  });

  function toSl(str) { return REV[str] || str; }

  function t(str, lang) {
    var sl = toSl(str);
    var i = IDX[lang];
    if (i == null || i < 0) return sl;
    var e = D[sl];
    return e ? e[i] : sl;
  }

  function apply(lang) {
    current = lang;
    document.documentElement.setAttribute('lang', lang);

    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var nodes = [], n;
    while ((n = w.nextNode())) {
      if (!n.nodeValue || !n.nodeValue.trim()) continue;
      if (n.parentNode && /^(script|style)$/i.test(n.parentNode.nodeName)) continue;
      nodes.push(n);
    }
    nodes.forEach(function (node) {
      var raw = node.nodeValue;
      var key = raw.trim();
      var out = t(key, lang);
      if (out !== key) node.nodeValue = raw.replace(key, out);
    });

    var all = document.body.querySelectorAll('*');
    for (var i = 0; i < all.length; i++) {
      for (var a = 0; a < ATTRS.length; a++) {
        var val = all[i].getAttribute(ATTRS[a]);
        if (!val || !val.trim()) continue;
        var out2 = t(val.trim(), lang);
        if (out2 !== val.trim()) all[i].setAttribute(ATTRS[a], out2);
      }
    }

    try { localStorage.setItem('tur-lang', lang); } catch (e) { /* ignore */ }
    window.dispatchEvent(new CustomEvent('tur-lang', { detail: lang }));
  }

  window.TurI18n = {
    apply: apply,
    t: function (s) { return t(s, current); },
    get lang() { return current; },
    stored: function () {
      try { return localStorage.getItem('tur-lang') || 'sl'; } catch (e) { return 'sl'; }
    }
  };
})();
