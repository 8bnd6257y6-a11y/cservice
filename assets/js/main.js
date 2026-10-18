/* ============================================================
   CService — interactions + bilingual content (EN / IT)
   No dependencies. No network calls.
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- Dictionary ---------------- */
  var DICT = {
    en: {
      'a11y.skip': 'Skip to content',
      'a11y.nav': 'Primary navigation',
      'a11y.mobile': 'Mobile menu',
      'a11y.scroll': 'Scroll to content',
      'a11y.filter': 'Filter articles',
      'a11y.lightbox': 'Image viewer',
      'a11y.close': 'Close image viewer',
      'a11y.prev': 'Previous image',
      'a11y.next': 'Next image',
      'a11y.footer': 'Footer navigation',


      'nav.profile': 'Profile',
      'nav.winemaking': 'Winemaking',
      'nav.viticulture': 'Viticulture',
      'nav.international': 'International',
      'nav.news': 'News',
      'nav.archive': 'Archive',
      'nav.contact': 'Contact',
      'nav.cta': 'Book a consultation',

      'hero.eyebrow': 'Oenologist & viticulture specialist · 25+ years of consultancy',
      'hero.h1': 'Every great wine<br>has deep roots',
      'hero.lead': 'Alberto Cugnetto has advised growers and wineries for more than 25 years, worldwide: reading a terroir, designing a vineyard and making wine that speaks of where it comes from.',
      'hero.cta1': 'Explore our services',
      'hero.cta2': 'Talk to us',
      'hero.meta1k': 'Based in',
      'hero.meta1v': 'Sommariva del Bosco, Piedmont — Italy',
      'hero.meta2k': 'Working in',
      'hero.meta2v': 'Italy, Europe & China',
      'hero.scroll': 'Scroll',

      'tick.1': 'Vineyard design',
      'tick.2': 'Varietal enology',
      'tick.3': 'Precision viticulture',
      'tick.4': 'Quality management',
      'tick.5': 'Wine marketing',
      'tick.6': 'International cooperation',

      'mission.eyebrow': 'The mission',
      'wis.desc': 'Daily business intelligence on wine: sector statistics, news, scientific research and innovation in viticulture and enology. Updated every morning.',
      'wis.cta': 'Open the dashboard',
      'mem.label': 'I am part of',
      'mem.desc': 'A collective of oenologists, agronomists, viticulture consultants, designers and copywriters — wine consultancy from vineyard to bottle.',

      'mission.h2': 'Understand the potential of a terroir. Then make the most of it.',
      'mission.lead': 'I work to develop and optimise the processes behind the birth of a wine, interpreting the character of a specific terroir — and testing those decisions against data, not habit.',
      'mission.p1': 'Particular attention goes to the design and management of the vineyard, because that is the base on which every later winemaking decision rests. From that foundation we deliver a wide-ranging consultancy — technical and commercial — that improves company performance in a lasting way. Applied research runs alongside it: native varieties, traceability of the production chain, precision viticulture and the impact of new techniques in a changing climate.',
      'mission.s1n': '25+',
      'mission.s1l': 'Years of consultancy',
      'mission.s2n': '360°',
      'mission.s2l': 'From vineyard to market',
      'mission.s3n': 'Global',
      'mission.s3l': 'Consultancy reach',

      'pillars.eyebrow': 'Two disciplines, one chain',
      'pillars.h2': 'Where wine is decided — in the vineyard and in the cellar.',

      'feat.wine.cap': 'Barrel hall — ageing and élevage',
      'feat.wine.h': 'Winemaking services',
      'feat.wine.p': 'From fruit to a finished, stable and sellable wine. Protocols built around the variety, the vintage and the market you are aiming at.',
      'feat.wine.li1': 'Varietal enology and vinification protocols',
      'feat.wine.li2': 'Quality management systems and certification',
      'feat.wine.li3': 'Wine marketing, positioning and portfolio',
      'feat.wine.link': 'Winemaking in detail',

      'feat.vine.cap': 'Terraced vineyards above the village of Cesnola (TO)',
      'feat.vine.h': 'Viticulture services',
      'feat.vine.p': 'The quality of a wine is decided long before harvest. We manage the vineyard so that each variety can express itself, season after season.',
      'feat.vine.li1': 'Vineyard management and varietal expression',
      'feat.vine.li2': 'Precision viticulture and remote sensing',
      'feat.vine.li3': 'Vineyard design, planting and mechanisation',
      'feat.vine.link': 'Viticulture in detail',

      'band.q': 'Understanding the potential of a terroir is our role. Producing the best wine is the goal.',
      'band.cap': 'Terraced vineyards, Piedmont',
      'band.alt': 'Terraced vineyards on a steep hillside, Piedmont',
      'intl.alt1': 'Field visit in a vineyard in Xinjiang, China',
      'intl.alt2': 'Technical discussion with local producers during a vineyard visit in China',
      'feat.wine.alt': 'Rows of oak barrels in a winery cellar',
      'feat.vine.alt': 'Terraced vineyards above a hill village',


      'wm.eyebrow': 'Winemaking services',
      'wm.h2': 'Enology that protects and enhances what the vintage gave you.',
      'wm.lead': 'Three disciplines that carry a wine from the press to the shelf — each one built on the previous.',

      'wm.c1t': 'Varietal enology',
      'wm.c1p': 'Enology is varietal when it approaches the raw material conservatively. Knowing what a cultivar can do lets us plan vinification protocols in detail, so that the character of each grape is amplified rather than corrected.',
      'wm.c1label': 'Protocols by objective',
      'wm.c1l1': 'Red wines for early consumption',
      'wm.c1l2': 'Novello wines by carbonic maceration',
      'wm.c1l3': 'Aged red wines',
      'wm.c1l4': 'Varietal and aromatic white wines',
      'wm.c1l5': 'Aged white wines',
      'wm.c1l6': 'Sparkling and semi-sparkling wines',
      'wm.c1l7': 'Wines from dried and late-harvested grapes',

      'wm.c2t': 'Quality management',
      'wm.c2p': 'Markets and modern distribution follow the rules of a globalised world. Meeting voluntary and mandatory international standards is no longer optional — it is the price of entry.',
      'wm.c2p2': 'Planning and drafting the documentation behind a quality system improves day-to-day management, and becomes indispensable when you approach voluntary certification.',
      'wm.c2label': 'Systems we implement',
      'wm.c2l1': 'HACCP self-control system (mandatory)',
      'wm.c2l2': 'ISO 9001 quality management',
      'wm.c2l3': 'ISO 14001 environmental management',
      'wm.c2l4': 'Product certification (BRC, IFS, etc.)',

      'wm.c3t': 'Strategic wine marketing',
      'wm.c3p': 'Understanding what the consumer needs is the tool that makes a business profitable. Knowing consumer habits and benchmarking your wine against competing products lets you set rational sales strategies for the segment you want to reach.',
      'wm.c3p2': 'Product, price, market position and the people who drink your wine are the base of every commercial decision.',
      'wm.c3label': 'What we deliver',
      'wm.c3l1': 'Market sensing, SWOT analysis and target definition',
      'wm.c3l2': 'Marketing mix study',
      'wm.c3l3': 'Portfolio structure and new product development',
      'wm.c3l4': 'Route-to-market and integrated logistics',
      'wm.c3l5': 'Corporate communication',
      'wm.c3l6': 'Marketing databases',
      'wm.c3l7': 'Market research and consumer insight',
      'wm.c3l8': 'Legislative constraints and marketing',

      'vt.eyebrow': 'Viticulture services',
      'vt.h2': 'The vineyard is where quality is decided.',
      'vt.lead': 'Management, technology and design — three ways of working on the same hectare.',

      'vt.c1t': 'Vineyard management & varietal expression',
      'vt.c1p': 'That quality is made in the vineyard is now widely accepted. Only attentive management that integrates every aspect of the estate delivers appreciable results. From winter pruning onwards the qualitative outcome can be directed with the right techniques — including those that extend the working life of the vineyard.',
      'vt.c1p2': 'Systemic diseases such as esca cause sudden dieback; correct pruning practice, both winter and green, helps keep the situation under control. Green operations become a powerful tool in the grower\u2019s hands, but only a deep knowledge of the physiology behind the biological processes can direct those choices properly.',
      'vt.c1label': 'Areas of consultancy',
      'vt.c1l1': 'Soil management',
      'vt.c1l2': 'Correct pruning operations',
      'vt.c1l3': 'Fertilisation management and optimisation',
      'vt.c1l4': 'Canopy management for varietal expression',
      'vt.c1l5': 'Integrated pest management and organic regimes',
      'vt.c1l6': 'Physiological and precision irrigation programmes',

      'vt.c2t': 'Precision viticulture',
      'vt.c2p': 'By interpreting multispectral remotely sensed data we build prescription maps that optimise mechanised and manual operations in the vineyard. The same reading supports decisions at planting — rootstock choice and detailed water regimes.',
      'vt.c2p2': 'At harvest, a detailed view in multispectral bands makes it possible to differentiate the crop and rationalise winemaking interventions.',
      'vt.c2label': 'Quality is made of details',
      'vt.c2l1': 'Precision farming',
      'vt.c2l2': 'Remote sensing',
      'vt.c2l3': 'Prescription maps',
      'vt.c2l4': 'Variable-rate application',
      'vt.c2l5': 'Precision irrigation',

      'vt.c3t': 'Vineyard design',
      'vt.c3p': 'The birth of a great wine should begin with the design of the vineyard. This phase must be studied in every detail, starting from the site — pedology and climate — adapting trellising to the choice of material, clone and suitable rootstock, and using healthy propagation material.',
      'vt.c3p2': 'At this stage it is also possible to design systems suited to high mechanisation, with innovative irrigation systems for every production requirement.',
      'vt.c3label': 'Main topics',
      'vt.c3l1': 'Planting density',
      'vt.c3l2': 'Planting material',
      'vt.c3l3': 'Rootstock and clone selection',
      'vt.c3l4': 'Drainage lines',
      'vt.c3l5': 'Irrigation systems',
      'vt.c3l6': 'Design for different levels of mechanisation',

      'intl.eyebrow': 'International cooperation',
      'intl.h2': 'Italy, China and Albania — one language of wine.',
      'intl.lead': 'Since 2011 I have worked in northern Albania on projects to recover native varieties and to valorise local viticulture; in China I have followed technical and commercial collaborations for years.',
      'intl.p': 'A network of relationships with international companies and institutions that gives Italian wineries access to exclusive commercial services for exporting their wines — from first contact to distribution.',
      'intl.li1': 'Albania — recovery of native varieties and valorisation of northern viticulture (since 2011)',
      'intl.li2': 'Albania — technical assistance to wineries and field training',
      'intl.li3': 'China — technical consulting for wineries and importers',
      'intl.li4': 'Italy — access to foreign markets, from first contact to distribution',
      'intl.cta': 'Want to know more? Get in touch',
      'intl.cap1': 'Field work in Xinjiang, China',
      'intl.cap2': 'Technical exchange with local producers',

      'q.eyebrow': 'Testimonials',
      'q.q1': 'Dr. Alberto Cugnetto is a highly prepared professional in viticulture and winemaking. Thanks also to his contribution during 2011–2013, winemaking in north-western Albania has improved significantly, and different producers have benefited from his work — realising high-quality products for the very first time.',
      'q.r1': 'Chemist analyst, LVIA altrosviluppo — Shkodër, Albania',
      'q.q2': 'I know Alberto very well. He is a very serious, meticulous professional, and above all a humble one — an essential quality for anyone doing our work. He is open to discussion and enormously capable. When I talk enology with him, time simply slips away.',
      'q.r2': 'Technical Director, Agricola Candida — Trinitapoli (FG), Italy',

      'pr.eyebrow': 'Profile',
      'pr.h2': 'Consultancy in the field, not behind a desk.',
      'pr.p1': 'Alberto Cugnetto is an oenologist and viticulture specialist. For more than 25 years he has worked as a consultant in viticulture and enology, in Italy and around the world. He holds a degree in Viticultural and Oenological Sciences — with the highest grades — and a PhD in the wine field.',
      'pr.p2': 'Experience across different fields — from vineyard design to the design of bottling and packaging lines — allows him to offer 360° consultancy in the wine sector, technical and commercial, for small estates and large companies alike.',
      'pr.role': 'Oenologist & viticulture specialist',
      'pr.meta': 'More than 25 years of consultancy across Italy, Europe and China. Referent for wine, spirits and distilleries at Confindustria Cuneo.',
      'pr.explabel': 'Experience',
      'pr.e1': 'Vineyard management and design',
      'pr.e2': 'Enological consulting for all wine types and wine-based beverages',
      'pr.e3': 'Corporate organisation consulting',
      'pr.e4': 'Due diligence for the purchase of vineyards and wineries',
      'pr.e5': 'R&D in enology and viticulture',
      'pr.e6': 'Wine marketing and promotion',
      'pr.e7': 'International cooperation, in particular with China',
      'pr.e8': 'Quality management and auditing',
      'pr.reslabel': 'Research & teaching',
      'pr.res1': 'Native varieties, and microelement traceability of the wine chain',
      'pr.res2': 'Precision viticulture and the impact of new techniques in a changing climate',
      'pr.res3': 'Invited lecturer — International Postgraduate Summer School on Green Chemistry, Ca\u2019 Foscari University Venice',
      'pr.res4': 'Lecturer, 1st and 2nd University refresher course in wine law — University of Turin (UNITO)',
      'pr.honlabel': 'Roles & honours',
      'pr.hon1': 'Referent for wine, spirits and distilleries — Confindustria Cuneo',
      'pr.hon2': 'Member of the Ordine dei Cavalieri del Tartufo e dei Vini d\u2019Alba',
      'pr.hon3': 'Board member, Accademia di Agricoltura di Torino',
      'pr.hon4': 'Board member, UGIVI — Unione Giuristi della Vite e del Vino',

      'gal.eyebrow': 'Archive',
      'gal.h2': 'From the archive: vineyards, cellars, people.',
      'gal.lead': 'A selection of photographs from the field — vineyards I have worked in, cellars I have set up, and the people behind them. Select an image to enlarge it.',
      'gal.note': 'Photographs from the personal archive.',
      'gal.1': 'Book launch — “Gli ingredienti del vino”',
      'gal.2': 'Technical meeting in the hall',
      'gal.3': 'Award with Accademia colleagues',
      'gal.4': 'Technical presentation',
      'gal.5': 'Grapes drying on racks',
      'gal.6': 'Conference session',
      'gal.7': 'Bunches drying',
      'gal.8': 'Terraced vineyard on rock',
      'gal.9': 'Terraced vineyard, wide view',
      'gal.10': 'Stone path between the terraces',
      'gal.11': 'Terraced vineyards above the village of Cesnola (TO)',
      'gal.12': 'Ripening black grapes',
      'gal.13': 'Barrels in the cellar',
      'gal.14': 'Vines after winter pruning',
      'gal.15': 'Farmhouse among the rows in winter',
      'gal.16': 'Vineyard landscape in the hills',
      'gal.17': 'Mechanisation in the vineyard',
      'gal.18': 'Leaf detail',
      'gal.19': 'Autumn in the vineyard',
      'gal.20': 'Cultivated terraces',
      'gal.21': 'Soil profile',
      'gal.22': 'Black grapes on the vine',
      'gal.23': 'Stones cleared from the vineyard',
      'gal.24': 'Slope restoration works',
      'gal.25': 'Earthworks for the terraces',
      'gal.26': 'Consolidating a stone post',
      'gal.27': 'Freshly picked white grapes',
      'gal.28': 'Drying room',
      'gal.29': 'Crates of grapes at harvest',
      'gal.31': 'Gala evening',
      'gal.33': 'Ageing room',
      'gal.34': 'Old bush vines',
      'gal.35': 'Lecture on wine ingredients',
      'gal.36': 'Soil and vine in the vineyard',
      'gal.37': 'Soil profile, detail',
      'gal.38': 'Drip irrigation',
      'gal.39': 'Rows in perspective',
      'gal.40': 'Historic cellar instruments',
      'gal.41': 'Stones and young vines',
      'gal.42': 'Rows on a hillside',
      'gal.43': 'Speaking at a conference',


      'pub.eyebrow': 'Publications',
      'pub.h2': 'Books and research, with my signature.',
      'pub.lead': 'Two publications I have authored — one on enology, one on the economics of hillside viticulture.',
      'pub.book': 'Book',
      'pub.ebook': 'Ebook',
      'pub.desc1': 'A book that explains, entry by entry, what wine actually contains — origin, composition, uses and legal references for each ingredient, in light of the new EU labelling rules.',
      'pub.cta1': 'Visit the website',
      'pub.sub2': 'Analysis and forward-looking reflections',
      'pub.desc2': 'Production costs, profitability, mechanisation and governance in the hillside viticulture of Langhe, Monferrato and Roero — with an eye on EU policy.',
      'pub.cta2': 'Read the ebook',
      'net.eyebrow': 'Network & affiliations',
      'net.lead': 'Institutions and scientific societies I work with.',
      'net.acc.desc': 'Founded in 1785 and based in Turin, it publishes agricultural studies and research — including the volume on hillside viticulture economics.',
      'net.aivv.desc': 'Academic society for study, research and outreach in viticulture and enology, with academic sessions and conferences.',
      'net.ugivi.desc': 'Independent association founded in Milan in 1997 to advance EU, national and international wine law.',
      'ct.eyebrow': 'Contact',
      'ct.h2': 'Tell me about the vineyard, the vintage or the project.',
      'ct.lead': 'I reply within one working day. Write to me in Italian, English or French.',
      'ct.entityk': 'Company',
      'ct.addrk': 'Address',
      'ct.telk': 'Phone',
      'ct.mailk': 'Email',
      'ct.f.name': 'Name',
      'ct.f.nameErr': 'Please enter your name.',
      'ct.f.email': 'Email',
      'ct.f.emailErr': 'Please enter a valid email address.',
      'ct.f.company': 'Winery / company (optional)',
      'ct.f.subject': 'Subject',
      'ct.f.opt0': 'General enquiry',
      'ct.f.opt1': 'Winemaking services',
      'ct.f.opt2': 'Viticulture services',
      'ct.f.opt3': 'International cooperation',
      'ct.f.opt4': 'Quality & certification',
      'ct.f.msg': 'Message',
      'ct.f.msgErr': 'Please write a short message.',
      'ct.f.send': 'Send enquiry',
      'ct.f.note': 'Your email application opens with the message ready to send.',

      'ft.rights': '© 2026 CService SNC. All rights reserved.',
      'ft.note': 'Sommariva del Bosco (CN) — Italy',
      'nw.eyebrow': 'News',
      'nw.h2': 'Research, market and policy — reading across the sector.',
      'nw.lead': 'A curated selection of articles from scientific journals, research institutes and the trade press. Content stays on the original sites: each link opens the source.',
      'nw.all': 'All',
      'nw.cat.research': 'Research',
      'nw.cat.tech': 'Technical',
      'nw.cat.market': 'Market',
      'nw.cat.inst': 'Institutions',
      'nw.empty': 'No articles in this category.',
      'nw.note': 'Selection updated October 2026 — links open the original sources.',
    },

    it: {
      'a11y.skip': 'Vai al contenuto',
      'a11y.nav': 'Navigazione principale',
      'a11y.mobile': 'Menu mobile',
      'a11y.scroll': 'Scorri al contenuto',
      'a11y.filter': 'Filtra gli articoli',
      'a11y.lightbox': 'Visualizzatore immagini',
      'a11y.close': 'Chiudi',
      'a11y.prev': 'Immagine precedente',
      'a11y.next': 'Immagine successiva',
      'a11y.footer': 'Navigazione del footer',


      'nav.profile': 'Profilo',
      'nav.winemaking': 'Enologia',
      'nav.viticulture': 'Viticoltura',
      'nav.international': 'Cooperazione',
      'nav.news': 'News',
      'nav.archive': 'Archivio',
      'nav.contact': 'Contatto',
      'nav.cta': 'Richiedi una consulenza',

      'hero.eyebrow': 'Enologo e specialista viticolo · 25+ anni di consulenza',
      'hero.h1': 'Ogni grande vino<br>ha radici profonde',
      'hero.lead': 'Alberto Cugnetto affianca da oltre 25 anni viticoltori e cantine in tutto il mondo: leggere un terroir, progettare un vigneto e produrre un vino che racconti da dove viene.',
      'hero.cta1': 'Scopri i servizi',
      'hero.cta2': 'Parliamone',
      'hero.meta1k': 'Sede',
      'hero.meta1v': 'Sommariva del Bosco, Piemonte — Italia',
      'hero.meta2k': 'Operiamo in',
      'hero.meta2v': 'Italia, Europa e Cina',
      'hero.scroll': 'Scorri',

      'tick.1': 'Progettazione vigneto',
      'tick.2': 'Enologia varietale',
      'tick.3': 'Viticoltura di precisione',
      'tick.4': 'Sistemi qualità',
      'tick.5': 'Marketing del vino',
      'tick.6': 'Cooperazione internazionale',

      'mission.eyebrow': 'La missione',
      'wis.desc': 'Business intelligence quotidiana sul vino: statistiche di settore, notizie, ricerca scientifica e innovazioni in viticoltura ed enologia. Aggiornamento ogni mattina.',
      'wis.cta': 'Apri la dashboard',
      'mem.label': 'Faccio parte di',
      'mem.desc': 'Un collettivo di enologi, agronomi, consulenti viticoli, designer e copywriter: consulenza del vino dalla vigna alla bottiglia.',

      'mission.h2': 'Capire il potenziale di un terroir. Poi farlo esprimere.',
      'mission.lead': 'Lavoro per sviluppare e ottimizzare i processi che stanno alla base della nascita di un vino, interpretando le caratteristiche di un determinato terroir — e verificando le scelte con i dati, non con le abitudini.',
      'mission.p1': 'Particolare attenzione è dedicata alla progettazione e alla gestione del vigneto, perché è la base su cui impostare le scelte tecnologiche che riguardano la vinificazione. Da qui offriamo una consulenza ad ampio spettro — tecnica e commerciale — che porta al miglioramento delle performance aziendali in modo duraturo. Accanto corre la ricerca applicata: varietà autoctone, tracciabilità della filiera, viticoltura di precisione e impatto delle nuove tecniche in un clima che cambia.',
      'mission.s1n': '25+',
      'mission.s1l': 'Anni di consulenza',
      'mission.s2n': '360°',
      'mission.s2l': 'Dal vigneto al mercato',
      'mission.s3n': 'Globale',
      'mission.s3l': 'Attività di consulenza',

      'pillars.eyebrow': 'Due discipline, una sola filiera',
      'pillars.h2': 'Dove si decide il vino: in vigneto e in cantina.',

      'feat.wine.cap': 'Sala barrique — affinamento',
      'feat.wine.h': 'Servizi enologici',
      'feat.wine.p': 'Dall\u2019uva a un vino finito, stabile e vendibile. Protocolli costruiti sulla varietà, sull\u2019annata e sul mercato a cui ci si vuole rivolgere.',
      'feat.wine.li1': 'Enologia varietale e protocolli di vinificazione',
      'feat.wine.li2': 'Sistemi di gestione qualità e certificazioni',
      'feat.wine.li3': 'Marketing del vino, posizionamento e gamma',
      'feat.wine.link': 'Approfondisci l\u2019enologia',

      'feat.vine.cap': 'Vigneti terrazzati sopra il borgo di Cesnola (TO)',
      'feat.vine.h': 'Servizi viticoli',
      'feat.vine.p': 'La qualità di un vino si decide molto prima della vendemmia. Gestiamo il vigneto perché ogni varietà possa esprimersi, stagione dopo stagione.',
      'feat.vine.li1': 'Gestione del vigneto e valorizzazione varietale',
      'feat.vine.li2': 'Viticoltura di precisione e telerilevamento',
      'feat.vine.li3': 'Progettazione, impianto e meccanizzazione',
      'feat.vine.link': 'Approfondisci la viticoltura',

      'band.q': 'Capire il potenziale di un terroir è il nostro compito. Produrre il miglior vino è l\u2019obiettivo.',
      'band.cap': 'Vigneti terrazzati, Piemonte',
      'band.alt': 'Vigneti terrazzati su un versante ripido, Piemonte',
      'intl.alt1': 'Visita in un vigneto nello Xinjiang, Cina',
      'intl.alt2': 'Scambio tecnico con i produttori locali durante una visita in vigneto in Cina',
      'feat.wine.alt': 'Barrique in fila in una cantina',
      'feat.vine.alt': 'Vigneti terrazzati sopra un borgo',


      'wm.eyebrow': 'Servizi enologici',
      'wm.h2': 'Un\u2019enologia che protegge e valorizza ciò che l\u2019annata ha dato.',
      'wm.lead': 'Tre discipline che accompagnano il vino dalla pressa allo scaffale, una dopo l\u2019altra.',

      'wm.c1t': 'Enologia varietale',
      'wm.c1p': 'L\u2019enologia è varietale quando si approccia alla materia prima in modo conservativo. Conoscere le potenzialità delle cultivar permette di pianificare i protocolli di vinificazione in modo particolareggiato, per esaltare le peculiarità di ogni vitigno.',
      'wm.c1label': 'Protocolli per obiettivo',
      'wm.c1l1': 'Vini rossi di pronta beva',
      'wm.c1l2': 'Vini novelli in macerazione carbonica',
      'wm.c1l3': 'Vini rossi affinati',
      'wm.c1l4': 'Vini bianchi varietali e aromatici',
      'wm.c1l5': 'Vini bianchi affinati',
      'wm.c1l6': 'Vini frizzanti e spumanti',
      'wm.c1l7': 'Vini da uve appassite e surmature',

      'wm.c2t': 'Sistemi di qualità',
      'wm.c2p': 'I mercati e la distribuzione moderna seguono le regole del mondo globalizzato: mostrarsi all\u2019altezza degli standard internazionali, volontari e cogenti, diventa sempre più necessario.',
      'wm.c2p2': 'La pianificazione e la realizzazione della documentazione che sta alla base dei sistemi di qualità migliorano la gestione aziendale e risultano indispensabili quando si vuole accedere alle certificazioni volontarie.',
      'wm.c2label': 'Sistemi che implementiamo',
      'wm.c2l1': 'Sistema di autocontrollo HACCP (normativa cogente)',
      'wm.c2l2': 'Sistema di gestione per la qualità ISO 9001',
      'wm.c2l3': 'Sistema di gestione ambientale ISO 14001',
      'wm.c2l4': 'Certificazioni di prodotto (BRC, IFS, ecc.)',

      'wm.c3t': 'Marketing strategico del vino',
      'wm.c3p': 'Conoscere le necessità del consumatore è lo strumento indispensabile per sviluppare il business aziendale. Conoscere le abitudini del consumatore e confrontare il proprio prodotto con i concorrenti permette di stabilire strategie di vendita razionali, adatte alla fascia di consumatori che si vuole approcciare.',
      'wm.c3p2': 'Lo studio del prodotto, del prezzo, del posizionamento nel mercato e delle persone che bevono il nostro vino sta alla base di ogni scelta commerciale.',
      'wm.c3label': 'Cosa offriamo',
      'wm.c3l1': 'Market sensing, analisi SWOT e identificazione del target',
      'wm.c3l2': 'Studio del marketing mix',
      'wm.c3l3': 'Strutturazione della gamma e ideazione di nuovi prodotti',
      'wm.c3l4': 'Sviluppo della commercializzazione e logistica integrata',
      'wm.c3l5': 'Strutturazione della comunicazione aziendale',
      'wm.c3l6': 'Creazione di database di marketing',
      'wm.c3l7': 'Indagini di mercato e consumer insight',
      'wm.c3l8': 'Vincoli legislativi e marketing',

      'vt.eyebrow': 'Servizi viticoli',
      'vt.h2': 'Il vigneto è il luogo dove si decide la qualità.',
      'vt.lead': 'Gestione, tecnologia e progettazione: tre modi di lavorare sullo stesso ettaro.',

      'vt.c1t': 'Gestione del vigneto e valorizzazione varietale',
      'vt.c1p': 'Che la qualità si faccia in vigneto è ormai un concetto assimilato. Solo una gestione attenta, che integri tutti gli aspetti aziendali, permette di ottenere risultati apprezzabili. Già dalla potatura secca è possibile indirizzare il risultato qualitativo con le tecniche adeguate, comprese quelle che aumentano la longevità del vigneto.',
      'vt.c1p2': 'Malattie sistemiche come il mal dell\u2019esca causano morie improvvise: corrette pratiche di potatura, invernale e verde, aiutano a tenere la situazione sotto controllo. Le operazioni in verde diventano uno strumento potente nelle mani del viticoltore, ma solo una profonda conoscenza della fisiologia che sta alla base dei processi biologici può orientare queste scelte.',
      'vt.c1label': 'Ambiti di consulenza',
      'vt.c1l1': 'Gestione del suolo',
      'vt.c1l2': 'Corrette operazioni di potatura',
      'vt.c1l3': 'Gestione e ottimizzazione delle concimazioni',
      'vt.c1l4': 'Gestione della chioma per l\u2019espressione varietale',
      'vt.c1l5': 'Difesa integrata e regime biologico',
      'vt.c1l6': 'Programmi di irrigazione fisiologica e di precisione',

      'vt.c2t': 'Viticoltura di precisione',
      'vt.c2p': 'Grazie all\u2019interpretazione dei dati multispettrali telerilevati è possibile creare mappe di prescrizione per ottimizzare le operazioni meccanizzate e manuali in vigneto. Lo stesso approccio supporta le scelte in fase di progettazione: portinnesti e regimi idrici.',
      'vt.c2p2': 'In vendemmia, una lettura particolareggiata in bande multispettrali permette di differenziare il raccolto e razionalizzare gli interventi di vinificazione.',
      'vt.c2label': 'La qualità è fatta di dettagli',
      'vt.c2l1': 'Precision farming',
      'vt.c2l2': 'Telerilevamento',
      'vt.c2l3': 'Mappe di prescrizione',
      'vt.c2l4': 'Interventi a rateo variabile',
      'vt.c2l5': 'Irrigazione di precisione',

      'vt.c3t': 'Progettazione del vigneto',
      'vt.c3p': 'La nascita di un grande vino dovrebbe iniziare dalla progettazione del vigneto. Questa fase va studiata nei minimi dettagli, partendo dall\u2019analisi del sito — pedologica e climatica — adattando le tecniche di allevamento alla scelta dei materiali, del clone e del portinnesto adeguato, utilizzando materiale di propagazione sano.',
      'vt.c3p2': 'In questa fase è anche possibile progettare impianti adatti alla meccanizzazione spinta, con sistemi irrigui innovativi adatti a ogni esigenza produttiva.',
      'vt.c3label': 'Temi principali',
      'vt.c3l1': 'Densità d\u2019impianto',
      'vt.c3l2': 'Materiali per l\u2019impianto',
      'vt.c3l3': 'Scelta del portinnesto e del clone',
      'vt.c3l4': 'Linee drenanti',
      'vt.c3l5': 'Impianti di irrigazione',
      'vt.c3l6': 'Progettazione per diversi livelli di meccanizzazione',

      'intl.eyebrow': 'Cooperazione internazionale',
      'intl.h2': 'Italia, Cina e Albania, un solo linguaggio del vino.',
      'intl.lead': 'Dal 2011 lavoro nel Nord dell\u2019Albania su progetti di recupero dei vitigni autoctoni e di valorizzazione della viticoltura locale; in Cina seguo da anni collaborazioni tecniche e commerciali.',
      'intl.p': 'Una rete di rapporti con aziende e istituzioni internazionali che permette alle cantine italiane di accedere a servizi commerciali esclusivi per esportare i propri vini, dal primo contatto alla distribuzione.',
      'intl.li1': 'Albania — recupero dei vitigni autoctoni e valorizzazione della viticoltura del Nord (dal 2011)',
      'intl.li2': 'Albania — assistenza tecnica alle cantine e formazione sul campo',
      'intl.li3': 'Cina — consulenza tecnica per cantine e importatori',
      'intl.li4': 'Italia — accesso ai mercati esteri, dal primo contatto alla distribuzione',
      'intl.cta': 'Vuoi saperne di più? Contattami',
      'intl.cap1': 'Lavoro in campo nello Xinjiang, Cina',
      'intl.cap2': 'Scambio tecnico con i produttori locali',

      'q.eyebrow': 'Testimonianze',
      'q.q1': 'Il dott. Alberto Cugnetto è un professionista molto preparato in viticoltura ed enologia. Grazie anche al suo contributo nel triennio 2011–2013, la vinificazione nell\u2019Albania nord-occidentale è migliorata in modo significativo e diversi produttori hanno beneficiato del suo lavoro, realizzando per la prima volta prodotti di alta qualità.',
      'q.r1': 'Chimico analista, LVIA altrosviluppo — Scutari, Albania',
      'q.q2': 'Conosco molto bene Alberto. È un professionista molto serio, scrupoloso e soprattutto molto umile, requisito fondamentale per chi fa il nostro lavoro. È una persona molto aperta ai confronti e con grandi capacità. Quando parlo di enologia con lui, facilmente si dimentica il correre del tempo.',
      'q.r2': 'Direttore Tecnico, Agricola Candida — Trinitapoli (FG), Italia',

      'pr.eyebrow': 'Profilo',
      'pr.h2': 'Una consulenza sul campo, non dietro una scrivania.',
      'pr.p1': 'Alberto Cugnetto è enologo e specialista viticolo. Da oltre 25 anni svolge attività di consulenza in viticoltura ed enologia, in Italia e nel mondo. Ha conseguito la laurea in Scienze Viticole ed Enologiche con il massimo dei voti e un dottorato di ricerca in ambito vino.',
      'pr.p2': 'L\u2019esperienza maturata in settori diversi — dalla progettazione del vigneto alla progettazione di linee di imbottigliamento e confezionamento — gli consente di offrire una consulenza a 360° nel settore vitivinicolo, tecnica e commerciale, per piccole realtà e grandi aziende.',
      'pr.role': 'Enologo e specialista viticolo',
      'pr.meta': 'Oltre 25 anni di consulenza tra Italia, Europa e Cina. Referente vino, liquori e distillati per Confindustria Cuneo.',
      'pr.explabel': 'Esperienza',
      'pr.e1': 'Gestione e progettazione di vigneti',
      'pr.e2': 'Consulenza enologica per tutti i tipi di vino e bevande a base di vino',
      'pr.e3': 'Consulenza organizzativa aziendale',
      'pr.e4': 'Due diligence per l\u2019acquisto di vigneti e cantine',
      'pr.e5': 'R&S in ambito enologico e viticolo',
      'pr.e6': 'Marketing e promozione del vino',
      'pr.e7': 'Cooperazione internazionale, in particolare con la Cina',
      'pr.e8': 'Quality management e auditing',
      'pr.reslabel': 'Ricerca e docenza',
      'pr.res1': 'Varietà autoctone e tracciabilità dei microelementi nella filiera del vino',
      'pr.res2': 'Viticoltura di precisione e impatto delle nuove tecniche in un clima che cambia',
      'pr.res3': 'Docente invitato — International Postgraduate Summer School on Green Chemistry, Università Ca\u2019 Foscari Venezia',
      'pr.res4': 'Docente al 1° e al 2° Corso Universitario di aggiornamento professionale in diritto vitivinicolo — UNITO',
      'pr.honlabel': 'Ruoli e riconoscimenti',
      'pr.hon1': 'Referente vino, liquori e distillati — Confindustria Cuneo',
      'pr.hon2': 'Membro dell\u2019Ordine dei Cavalieri del Tartufo e dei Vini d\u2019Alba',
      'pr.hon3': 'Membro del consiglio direttivo dell\u2019Accademia di Agricoltura di Torino',
      'pr.hon4': 'Membro del consiglio direttivo UGIVI — Unione Giuristi della Vite e del Vino',

      'gal.eyebrow': 'Archivio',
      'gal.h2': 'Dall\u2019archivio: vigneti, cantine, persone.',
      'gal.lead': 'Una selezione di fotografie dal campo — vigneti in cui ho lavorato, cantine che ho impostato e le persone che ci stanno dietro. Seleziona un\u2019immagine per ingrandirla.',
      'gal.note': 'Fotografie dall\u2019archivio personale.',
      'gal.1': 'Presentazione del libro «Gli ingredienti del vino»',
      'gal.2': 'Incontro tecnico in sala',
      'gal.3': 'Riconoscimento con i colleghi dell’Accademia',
      'gal.4': 'Presentazione tecnica con proiezione',
      'gal.5': 'Appassimento su graticci',
      'gal.6': 'Convegno in sala',
      'gal.7': 'Grappoli in appassimento',
      'gal.8': 'Vigneto terrazzato su roccia',
      'gal.9': 'Vigneto terrazzato, vista ampia',
      'gal.10': 'Camminamento in pietra tra i terrazzamenti',
      'gal.11': 'Vigneti terrazzati sopra il borgo di Cesnola (TO)',
      'gal.12': 'Grappolo nero in maturazione',
      'gal.13': 'Barrique in cantina',
      'gal.14': 'Viti potate a fine inverno',
      'gal.15': 'Cascina tra i filari in inverno',
      'gal.16': 'Paesaggio viticolo sulle colline',
      'gal.17': 'Meccanizzazione in vigneto',
      'gal.18': 'Dettaglio fogliare',
      'gal.19': 'Autunno in vigna',
      'gal.20': 'Terrazzamenti coltivati',
      'gal.21': 'Profilo del suolo',
      'gal.22': 'Uva nera sulla vite',
      'gal.23': 'Pietre raccolte in vigneto',
      'gal.24': 'Lavori di sistemazione del versante',
      'gal.25': 'Movimento terra per i terrazzamenti',
      'gal.26': 'Consolidamento di un palo in pietra',
      'gal.27': 'Uve bianche appena raccolte',
      'gal.28': 'Appassimento in fruttaio',
      'gal.29': 'Cassette di uva in vendemmia',
      'gal.31': 'Serata di gala',
      'gal.33': 'Sala di affinamento',
      'gal.34': 'Vecchie viti ad alberello',
      'gal.35': 'Lezione sugli ingredienti del vino',
      'gal.36': 'Suolo e ceppo in vigneto',
      'gal.37': 'Profilo del suolo, dettaglio',
      'gal.38': 'Irrigazione a goccia',
      'gal.39': 'Filari in prospettiva',
      'gal.40': 'Strumenti storici di cantina',
      'gal.41': 'Pietre e giovani viti',
      'gal.42': 'Filari su versante collinare',
      'gal.43': 'Intervento a un convegno',


      'pub.eyebrow': 'Pubblicazioni',
      'pub.h2': 'Libri e ricerca, con la mia firma.',
      'pub.lead': 'Due pubblicazioni di cui sono autore: una per l\u2019ambito enologico, una sull\u2019economia della viticoltura collinare.',
      'pub.book': 'Libro',
      'pub.ebook': 'Ebook',
      'pub.desc1': 'Un libro che spiega, scheda per scheda, cosa contiene davvero il vino: origine, composizione, impieghi e riferimenti legali di ogni ingrediente, alla luce della nuova etichettatura europea.',
      'pub.cta1': 'Vai al sito',
      'pub.sub2': 'Analisi e riflessioni prospettiche',
      'pub.desc2': 'Costi di produzione, redditività, meccanizzazione e governance nella viticoltura collinare di Langhe, Monferrato e Roero, con lo sguardo alle politiche UE.',
      'pub.cta2': 'Leggi l\u2019ebook',
      'net.eyebrow': 'Rete e affiliazioni',
      'net.lead': 'Istituzioni e società scientifiche con cui lavoro.',
      'net.acc.desc': 'Fondata nel 1785 e con sede a Torino, pubblica studi e ricerche in campo agrario — tra cui il volume sull\u2019economia della viticoltura collinare.',
      'net.aivv.desc': 'Società accademica dedicata a studi, ricerca e divulgazione in viticoltura ed enologia, con tornate accademiche e convegni.',
      'net.ugivi.desc': 'Associazione indipendente fondata a Milano nel 1997 per approfondire il diritto vitivinicolo comunitario, nazionale e internazionale.',
      'ct.eyebrow': 'Contatto',
      'ct.h2': 'Raccontami del vigneto, dell\u2019annata o del progetto.',
      'ct.lead': 'Rispondo entro un giorno lavorativo. Scrivimi in italiano, inglese o francese.',
      'ct.entityk': 'Azienda',
      'ct.addrk': 'Indirizzo',
      'ct.telk': 'Telefono',
      'ct.mailk': 'Email',
      'ct.f.name': 'Nome',
      'ct.f.nameErr': 'Inserisci il tuo nome.',
      'ct.f.email': 'Email',
      'ct.f.emailErr': 'Inserisci un indirizzo email valido.',
      'ct.f.company': 'Cantina / azienda (facoltativo)',
      'ct.f.subject': 'Oggetto',
      'ct.f.opt0': 'Richiesta generica',
      'ct.f.opt1': 'Servizi enologici',
      'ct.f.opt2': 'Servizi viticoli',
      'ct.f.opt3': 'Cooperazione internazionale',
      'ct.f.opt4': 'Qualità e certificazioni',
      'ct.f.msg': 'Messaggio',
      'ct.f.msgErr': 'Scrivi un breve messaggio.',
      'ct.f.send': 'Invia richiesta',
      'ct.f.note': 'Si aprirà il tuo programma di posta con il messaggio pronto da inviare.',

      'ft.rights': '© 2026 CService SNC. Tutti i diritti riservati.',
      'ft.note': 'Sommariva del Bosco (CN) — Italia',
      'nw.eyebrow': 'News',
      'nw.h2': 'Ricerca, mercato e normativa: uno sguardo trasversale.',
      'nw.lead': 'Una selezione curata di articoli da riviste scientifiche, istituti di ricerca e stampa di settore. I contenuti restano sui siti originali: ogni link apre la fonte.',
      'nw.all': 'Tutte',
      'nw.cat.research': 'Ricerca',
      'nw.cat.tech': 'Tecnica',
      'nw.cat.market': 'Mercato',
      'nw.cat.inst': 'Istituzioni',
      'nw.empty': 'Nessun articolo in questa categoria.',
      'nw.note': 'Selezione aggiornata a ottobre 2026 — i link aprono le fonti originali.',
    }
  };

  var META = {
    en: {
      title: 'C. Service SNC — Viticulture & Enology | Alberto Cugnetto',
      desc: 'Alberto Cugnetto, oenologist and viticulture specialist: more than 25 years of consultancy in vineyard design, varietal enology, precision viticulture, quality management and international cooperation. Based in Piedmont, Italy.',
      status: 'Opening your email application with the message ready to send. If nothing happens, write to cugnetto_wine@msn.com.'
    },
    it: {
      title: 'C. Service SNC — Viticoltura ed Enologia | Alberto Cugnetto',
      desc: 'Alberto Cugnetto, enologo e specialista viticolo: oltre 25 anni di consulenza in progettazione del vigneto, enologia varietale, viticoltura di precisione, sistemi qualità e cooperazione internazionale. Dal Piemonte.',
      status: 'Stiamo aprendo il tuo programma di posta con il messaggio pronto. Se non succede nulla, scrivi a cugnetto_wine@msn.com.'
    }
  };

  var STORE_KEY = 'cservice.lang';
  var lang = 'en';

  /* ---------------- Language ---------------- */
  function applyLang(next, persist) {
    if (!DICT[next]) next = 'en';
    lang = next;

    var html = document.documentElement;
    html.setAttribute('lang', next);
    html.setAttribute('data-lang', next);

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      var val = DICT[next][key];
      if (typeof val === 'string') nodes[i].textContent = val;
    }

    var htmlNodes = document.querySelectorAll('[data-i18n-html]');
    for (var j = 0; j < htmlNodes.length; j++) {
      var hkey = htmlNodes[j].getAttribute('data-i18n-html');
      var hval = DICT[next][hkey];
      if (typeof hval === 'string') htmlNodes[j].innerHTML = hval;
    }

    var ariaNodes = document.querySelectorAll('[data-i18n-aria]');
    for (var z = 0; z < ariaNodes.length; z++) {
      var zkey = ariaNodes[z].getAttribute('data-i18n-aria');
      var zval = DICT[next][zkey];
      if (typeof zval === 'string') ariaNodes[z].setAttribute('aria-label', zval);
    }

    var altNodes = document.querySelectorAll('[data-i18n-alt]');
    for (var a = 0; a < altNodes.length; a++) {
      var akey = altNodes[a].getAttribute('data-i18n-alt');
      var aval = DICT[next][akey];
      if (typeof aval === 'string') altNodes[a].setAttribute('alt', aval);
    }

    document.title = META[next].title;
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', META[next].desc);

    var btns = document.querySelectorAll('[data-lang-btn]');
    for (var k = 0; k < btns.length; k++) {
      var on = btns[k].getAttribute('data-lang-btn') === next;
      btns[k].classList.toggle('is-on', on);
      btns[k].setAttribute('aria-pressed', on ? 'true' : 'false');
    }

    if (persist) {
      try { localStorage.setItem(STORE_KEY, next); } catch (e) { /* ignore */ }
    }

    try { document.dispatchEvent(new CustomEvent('langchange')); } catch (e) { /* ignore */ }
  }

  var saved = null;
  try { saved = localStorage.getItem(STORE_KEY); } catch (e) { saved = null; }

  var param = null;
  try { param = new URLSearchParams(window.location.search).get('lang'); } catch (e) { param = null; }

  var initial = (param === 'it' || param === 'en') ? param : (saved === 'en' ? 'en' : 'it');
  applyLang(initial, false);

  var langBtns = document.querySelectorAll('[data-lang-btn]');
  for (var b = 0; b < langBtns.length; b++) {
    langBtns[b].addEventListener('click', function () {
      applyLang(this.getAttribute('data-lang-btn'), true);
    });
  }

  /* ---------------- Header, progress, active nav ---------------- */
  var head = document.getElementById('head');
  var bar = document.getElementById('progressBar');
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav a'));
  var sectionIds = ['profile', 'winemaking', 'viticulture', 'international', 'contact'];
  var ticking = false;

  function paintScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;

    if (head) head.classList.toggle('is-stuck', y > 30);

    if (bar) {
      var docH = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docH > 0 ? (y / docH) * 100 : 0;
      bar.style.width = Math.max(0, Math.min(100, pct)) + '%';
    }

    var current = '';
    for (var i = 0; i < sectionIds.length; i++) {
      var el = document.getElementById(sectionIds[i]);
      if (el && el.getBoundingClientRect().top <= 140) current = sectionIds[i];
    }
    for (var n = 0; n < navLinks.length; n++) {
      var href = navLinks[n].getAttribute('href') || '';
      navLinks[n].classList.toggle('is-active', href === '#' + current);
    }
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(paintScroll);
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  paintScroll();

  /* ---------------- Reveal on scroll ---------------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add('is-in');
          io.unobserve(entries[i].target);
        }
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    for (var r = 0; r < reveals.length; r++) io.observe(reveals[r]);
  } else {
    for (var r2 = 0; r2 < reveals.length; r2++) reveals[r2].classList.add('is-in');
  }

  /* ---------------- Mobile drawer ---------------- */
  var burger = document.getElementById('burger');
  var drawer = document.getElementById('drawer');

  function closeDrawer() {
    if (!drawer || !burger) return;
    drawer.hidden = true;
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function openDrawer() {
    if (!drawer || !burger) return;
    drawer.hidden = false;
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  if (burger && drawer) {
    burger.addEventListener('click', function () {
      if (drawer.hidden) openDrawer(); else closeDrawer();
    });
    var dlinks = drawer.querySelectorAll('a[href^="#"]');
    for (var d = 0; d < dlinks.length; d++) {
      dlinks[d].addEventListener('click', closeDrawer);
    }
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !drawer.hidden) {
        closeDrawer();
        burger.focus();
      }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 1080 && !drawer.hidden) closeDrawer();
    });
  }

  var galGrid = document.getElementById('galGrid');
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbCap = document.getElementById('lbCap');
  var lbClose = document.getElementById('lbClose');
  var lbPrev = document.getElementById('lbPrev');
  var lbNext = document.getElementById('lbNext');
  var gitems = galGrid ? Array.prototype.slice.call(galGrid.querySelectorAll('.gitem')) : [];
  var gIndex = 0;

  function paintCaption() {
    if (!lbCap || !gitems.length) return;
    var key = gitems[gIndex].getAttribute('data-cap');
    var txt = (DICT[lang] && DICT[lang][key]) || '';
    lbCap.textContent = txt;
    if (lbImg) lbImg.setAttribute('alt', txt);
  }

  function openLb(i) {
    if (!lb || !lbImg) return;
    gIndex = i;
    lbImg.src = gitems[i].getAttribute('data-full');
    paintCaption();
    lb.hidden = false;
    document.body.classList.add('no-scroll');
    if (lbClose) lbClose.focus();
  }

  function closeLb() {
    if (!lb) return;
    lb.hidden = true;
    if (lbImg) lbImg.removeAttribute('src');
    document.body.classList.remove('no-scroll');
    if (gitems[gIndex]) gitems[gIndex].focus();
  }

  function stepLb(delta) {
    if (!gitems.length) return;
    gIndex = (gIndex + delta + gitems.length) % gitems.length;
    lbImg.src = gitems[gIndex].getAttribute('data-full');
    paintCaption();
  }

  if (gitems.length && lb) {
    gitems.forEach(function (item, i) {
      item.addEventListener('click', function () { openLb(i); });
    });
    if (lbClose) lbClose.addEventListener('click', closeLb);
    if (lbPrev) lbPrev.addEventListener('click', function () { stepLb(-1); });
    if (lbNext) lbNext.addEventListener('click', function () { stepLb(1); });

    lb.addEventListener('click', function (e) {
      if (e.target === lb) closeLb();
    });

    document.addEventListener('keydown', function (e) {
      if (lb.hidden) return;
      if (e.key === 'Escape') closeLb();
      else if (e.key === 'ArrowLeft') stepLb(-1);
      else if (e.key === 'ArrowRight') stepLb(1);
    });

    var touchX = null;
    lb.addEventListener('touchstart', function (e) {
      touchX = e.changedTouches[0].clientX;
    }, { passive: true });
    lb.addEventListener('touchend', function (e) {
      if (touchX === null) return;
      var dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 50) stepLb(dx < 0 ? 1 : -1);
      touchX = null;
    }, { passive: true });

    document.addEventListener('langchange', function () {
      if (!lb.hidden) paintCaption();
    });
  }

  /* ---------------- News filters ---------------- */
  var newsList = document.getElementById('newsList');
  if (newsList) {
    var newsItems = Array.prototype.slice.call(newsList.querySelectorAll('.newsitem'));
    var chips = Array.prototype.slice.call(document.querySelectorAll('.chip'));
    var newsEmpty = document.getElementById('newsEmpty');

    function countFor(key) {
      return newsItems.filter(function (it) {
        return key === 'all' || it.getAttribute('data-cat') === key;
      }).length;
    }

    chips.forEach(function (chip) {
      var n = chip.querySelector('.chip__n');
      if (n) n.textContent = countFor(chip.getAttribute('data-filter'));
    });

    function applyNewsFilter(key) {
      var shown = 0;
      newsItems.forEach(function (it) {
        var ok = key === 'all' || it.getAttribute('data-cat') === key;
        if (ok) { it.removeAttribute('hidden'); shown++; }
        else { it.setAttribute('hidden', ''); }
      });
      if (newsEmpty) newsEmpty.hidden = shown > 0;
      chips.forEach(function (chip) {
        var on = chip.getAttribute('data-filter') === key;
        chip.classList.toggle('is-on', on);
        chip.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    }

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        applyNewsFilter(chip.getAttribute('data-filter'));
      });
    });

    applyNewsFilter('all');
  }

  /* ---------------- Contact form ---------------- */
  var form = document.getElementById('contactForm');
  if (form) {
    var status = document.getElementById('formStatus');
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    function fieldOf(input) { return input.closest('.field'); }

    function validate() {
      var ok = true;
      var name = form.elements.name;
      var email = form.elements.email;
      var msg = form.elements.message;

      if (!name.value.trim()) { fieldOf(name).classList.add('is-bad'); name.setAttribute('aria-invalid', 'true'); ok = false; }
      else { fieldOf(name).classList.remove('is-bad'); name.removeAttribute('aria-invalid'); }

      if (!emailRe.test(email.value.trim())) { fieldOf(email).classList.add('is-bad'); email.setAttribute('aria-invalid', 'true'); ok = false; }
      else { fieldOf(email).classList.remove('is-bad'); email.removeAttribute('aria-invalid'); }

      if (msg.value.trim().length < 5) { fieldOf(msg).classList.add('is-bad'); msg.setAttribute('aria-invalid', 'true'); ok = false; }
      else { fieldOf(msg).classList.remove('is-bad'); msg.removeAttribute('aria-invalid'); }

      return ok;
    }

    var watched = ['name', 'email', 'message'];
    for (var w = 0; w < watched.length; w++) {
      if (form.elements[watched[w]]) {
        form.elements[watched[w]].addEventListener('input', function () {
          this.closest('.field').classList.remove('is-bad');
          this.removeAttribute('aria-invalid');
        });
      }
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validate()) {
        var bad = form.querySelector('.is-bad input, .is-bad textarea');
        if (bad) bad.focus();
        return;
      }

      var sel = form.elements.subject;
      var subject = lang === 'it' ? 'Richiesta dal sito — ' : 'Website enquiry — ';
      subject += sel.options[sel.selectedIndex].text;

      var body = (lang === 'it' ? 'Nome: ' : 'Name: ') + form.elements.name.value.trim() + '\n';
      if (form.elements.company.value.trim()) {
        body += (lang === 'it' ? 'Cantina / azienda: ' : 'Winery / company: ') + form.elements.company.value.trim() + '\n';
      }
      body += (lang === 'it' ? 'Email: ' : 'Email: ') + form.elements.email.value.trim() + '\n\n';
      body += form.elements.message.value.trim();

      status.textContent = META[lang].status;

      var href = 'mailto:cugnetto_wine@msn.com'
        + '?subject=' + encodeURIComponent(subject.replace(' — ', ' - '))
        + '&body=' + encodeURIComponent(body);

      window.location.href = href;
    });
  }
})();
