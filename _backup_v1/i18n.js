// i18n QuadrIA — FR est la langue source (contenu dans le HTML).
// Choix persistant via localStorage('q_lang') ; le changement recharge la page
// pour que les traductions s'appliquent avant le split d'animation des titres.

const Q_LANGS = { fr: 'FR', en: 'EN', es: 'ES', de: 'DE', pt: 'PT', it: 'IT' };

const Q_T = {
  en: {
    locale: 'en-GB',
    title: 'QuadrIA Studio — AI agents & digital systems for SMBs | Nice · Casablanca',
    live: 'LIVE',
    nav: ['ADVISORY', 'SYSTEMS', 'STUDIO', 'GROWTH', 'METHOD', 'CONTACT'],
    boutique: 'SHOP', launch: 'START A PROJECT ↗',
    h1: 'Your clients write<span class="pt">.</span> <span class="serif">QuadrIA replies.</span>',
    sub: 'We build the commercial layer of modern SMBs: <strong>WhatsApp quote agents</strong>, <strong>booking with deposits</strong>, lead capture, dashboards. Designed. Shipped. Alive.',
    ctaDemo: '◉ BOOK A DEMO — 15 MIN', ctaLive: 'SEE A LIVE DEMO ↗', hint: 'SCROLL · EXPLORE ↓',
    hud: ['CLOCK', 'TIMEZONE', 'LATENCY', 'UPTIME'],
    mq1: ['WHATSAPP QUOTE AGENTS', 'BOOKING + DEPOSITS', 'AI FACE SCAN', 'LEAD CAPTURE', 'DASHBOARDS', 'AUTO FOLLOW-UPS', 'CUSTOM CRM', 'SHOWCASE WEBSITES'],
    mq2: ['ZERO LOST ENQUIRIES', 'QUOTES IN 2 MINUTES', '24/7', 'FR · EN · ES · DARIJA'],
    s01l: '/ 01 — THE QUADRIA SYSTEM',
    s01t: 'Four quadrants. <span class="serif">Zero lost enquiries.</span>',
    s01i: "Every mission follows the same frame. Not a website dropped somewhere: a full circuit, from the first client message to money in the till.",
    term: 'PIPELINE.FLOW — LIVE',
    pipeline: [
      { fn: 'capture', cm: '# wa · ig · site · referral', ok: '✓ zero lost enquiries' },
      { fn: 'reply', cm: '# multilingual agent 24/7', ok: '✓ quote in 2 min' },
      { fn: 'convert', cm: '# booking + deposit', ok: '✓ no-shows ÷ 3' },
      { fn: 'measure', cm: '# real-time dashboard', ok: '✓ full visibility' },
    ],
    quads: [
      { n: 'Q1 / CAPTURE', h: 'Every channel becomes an intake', p: 'WhatsApp, Instagram, your website, word of mouth: everything converges into one pipeline, timestamped, traceable.', o: '→ NO MESSAGE LEFT UNANSWERED' },
      { n: 'Q2 / REPLY', h: 'An agent that speaks your trade', p: 'Priced quotes, common questions, appointment booking — the agent replies in seconds, in the client\'s language.', o: '→ QUOTES IN 2 MINUTES, 24/7' },
      { n: 'Q3 / CONVERT', h: 'The deposit that locks the booking', p: 'Online booking with upfront deposit payment. No-shows become the exception, not the rule.', o: '→ FULL AGENDA, DEPOSITS COLLECTED' },
      { n: 'Q4 / MEASURE', h: 'Your numbers, live', p: 'Simple dashboard: leads, conversions, revenue, CSV export. You decide on data, not gut feeling.', o: '→ REAL-TIME VISIBILITY' },
    ],
    s02l: '/ 02 — DELIVERY LOG',
    s02t: 'Real systems, <span class="serif">in production.</span>',
    s02i: 'Not mockups. Systems that run, testable in a demo.',
    ships: [
      { c: 'BEAUTY · LIVE', n: 'Salon booking platform', d: 'AI face scan → recommended cuts → pre-filled quote → booking with deposit. Salon dashboard included.', s: '● IN PRODUCTION' },
      { c: 'MULTI-SECTOR', n: 'WhatsApp quote agents', d: 'Five trades prototyped on the same engine: vocabulary, price grid and client journey specific to each sector.', s: 'PROTOTYPES' },
      { c: 'CUSTOM', n: 'Your system', d: 'Every trade has its own circuit. We map yours in 15 minutes and build it in days.', s: '● BRIEF OPEN' },
    ],
    stProd: '● IN PRODUCTION', stProto: 'PROTOTYPE',
    chat: [
      { w: 'out', t: 'Hi! How much for balayage + blow-dry?', h: '10:42 ✓✓' },
      { w: 'in', t: 'Hello 👋 Balayage + blow-dry: €75–95 depending on length. Shall I offer you a slot?', h: '10:42' },
      { w: 'out', t: 'Yes, Thursday afternoon if possible', h: '10:43 ✓✓' },
      { w: 'in', t: 'Thursday 2:30pm ✓ A €20 deposit confirms the booking → pay the deposit', h: '10:43' },
      { w: 'sys', t: '✓ DEPOSIT RECEIVED — BOOKING CONFIRMED THU 2:30PM' },
    ],
    phoneStatus: 'QUADRIA AGENT · ONLINE', phoneCap: 'DEMO · SIMULATED CONVERSATION', phoneMsg: 'Message',
    s03l: '/ 03 — CAPABILITIES', s03t: 'What we <span class="serif">build.</span>',
    caps: [
      { st: '[ 01 / RUNNING ]', h: 'WhatsApp AI agents', p: 'Quotes, qualification, appointment booking — multilingual, wired to your price grid.' },
      { st: '[ 02 / SHIPPED ]', h: 'Booking & deposits', p: 'Booking flows with upfront deposit payment. Stripe Connect, automatic commission.' },
      { st: '[ 03 / DEPLOYED ]', h: 'Websites & platforms', p: 'Showcase sites and custom web apps — cut for your trade, not for a template.' },
      { st: '[ 04 / CONNECTED ]', h: 'Dashboards & CRM', p: 'Your leads, conversions and revenue in real time. CSV export, client history.' },
      { st: '[ 05 / AUTOMATED ]', h: 'Automations', p: 'Follow-ups, reminders, sequences — your team stops doing manual work.' },
      { st: '[ 06 / MULTILINGUAL ]', h: 'Multilingual content', p: 'FR, EN, ES, Darija — the system speaks your clients\' language, with proper Arabic rendering (RTL).' },
      { st: '[ 07 / ACTIVE ]', h: 'Branding & identity', p: 'Logo, guidelines, art direction — an identity that holds on a screen as on a storefront.' },
      { st: '[ 08 / ACTIVE ]', h: 'Video & motion', p: 'Audiovisual production, short formats, motion design — directed by a producer, not churned out.' },
      { st: '[ 09 / SOON ]', h: 'Social media & content', p: 'Editorial calendars, per-platform variations, AI-assisted community management.' },
      { st: '[ 10 / SOON ]', h: 'SEO & performance', p: 'Local SEO, commercial-intent content, campaigns measured on results.' },
      { st: '[ 11 / SOON ]', h: 'E-commerce & TikTok Shop', p: 'Stores, product pages, live shopping — from catalogue to payment.' },
      { st: '[ 12 / SOON ]', h: 'Run & maintenance', p: 'The system lives: monitoring, evolutions, outsourced technical direction.' },
    ],
    capsHint: 'SCROLL · DRAG →',
    s04l: '/ 04 — METHOD',
    s04t: 'Understand. Build. <span class="serif">Keep alive.</span>',
    s04i: 'No surprise subscription, no sales funnel. Three phases, and you stay owner of everything at every step.',
    steps: [
      { ph: 'PHASE 1 / DIAGNOSIS', h: '15 minutes, <span class="serif">free</span>', p: 'We map where you lose clients today: unanswered requests, no-shows, slow quotes. No commitment.', o: '→ REPLY WITHIN 24H' },
      { ph: 'PHASE 2 / BUILD', h: 'Demo <span class="serif">before</span> commitment', p: 'You see the system working on your real case before signing anything. Delivered in days, not months.', o: '→ SYSTEM IN PRODUCTION' },
      { ph: 'PHASE 3 / RUN', h: 'You own <span class="serif">everything</span>', p: 'Data, code, accounts: it all belongs to you. We monitor, measure, improve — the system strengthens over time.', o: '→ CONTINUOUS IMPROVEMENT' },
    ],
    stats: ['SYSTEMS SHIPPED', 'SECTORS PROTOTYPED', 'LANGUAGES · FR EN ES AR', 'MIN FOR A DEMO'],
    s06l: '/ 05 — LANGUAGES',
    s06t: 'Your clients speak. <span class="serif">In their language.</span>',
    s06i: "The client doesn't adapt their language to the system; the system adapts to the client.",
    langCards: ['France · French-speaking Maghreb', 'International clients', 'Spain · Latin America', 'Darija — Moroccan market'],
    finl: '◉ SYSTEMS OPEN FOR NEW BRIEFS',
    fint: 'Ready to reply <span class="serif">faster</span> than your competitors?',
    fins: 'Tell us what makes you lose clients. We show you the system that fixes it — in 15 minutes.',
    finCta: '◉ BOOK A DEMO', finLive: 'TRY THE LIVE DEMO ↗',
    trust: ['REPLY WITHIN 24H', '15 MIN · NO COMMITMENT', 'DEMO BEFORE SIGNING', 'YOU OWN EVERYTHING'],
    waMsgs: ["Hello, I'd like to discuss my project with QuadrIA Studio.", "Hello, I'd like to book a 15-minute demo with QuadrIA Studio."],
  },

  es: {
    locale: 'es-ES',
    title: 'QuadrIA Studio — Agentes IA y sistemas digitales para pymes | Niza · Casablanca',
    live: 'EN DIRECTO',
    nav: ['CONSULTORÍA', 'SISTEMAS', 'STUDIO', 'GROWTH', 'MÉTODO', 'CONTACTO'],
    boutique: 'TIENDA', launch: 'LANZAR UN PROYECTO ↗',
    h1: 'Tus clientes escriben<span class="pt">.</span> <span class="serif">QuadrIA responde.</span>',
    sub: 'Construimos la capa comercial de las pymes modernas: <strong>agentes de presupuestos por WhatsApp</strong>, <strong>reservas con señal</strong>, captura de leads, dashboards. Diseñado. Entregado. Vivo.',
    ctaDemo: '◉ RESERVAR UNA DEMO — 15 MIN', ctaLive: 'VER UNA DEMO EN DIRECTO ↗', hint: 'DESPLAZAR · EXPLORAR ↓',
    hud: ['RELOJ', 'ZONA HORARIA', 'LATENCIA', 'UPTIME'],
    mq1: ['AGENTES DE PRESUPUESTOS WHATSAPP', 'RESERVAS + SEÑAL', 'ESCÁNER FACIAL IA', 'CAPTURA DE LEADS', 'DASHBOARDS', 'SEGUIMIENTOS AUTO', 'CRM A MEDIDA', 'WEBS CORPORATIVAS'],
    mq2: ['CERO CONSULTAS PERDIDAS', 'PRESUPUESTO EN 2 MINUTOS', '24/7', 'FR · EN · ES · DARIYA'],
    s01l: '/ 01 — EL SISTEMA QUADRIA',
    s01t: 'Cuatro cuadrantes. <span class="serif">Cero consultas perdidas.</span>',
    s01i: 'Cada misión sigue el mismo marco. No una web puesta ahí: un circuito completo, del primer mensaje del cliente a la caja.',
    term: 'PIPELINE.FLOW — EN DIRECTO',
    pipeline: [
      { fn: 'captar', cm: '# wa · ig · web · referidos', ok: '✓ cero consultas perdidas' },
      { fn: 'responder', cm: '# agente multilingüe 24/7', ok: '✓ presupuesto en 2 min' },
      { fn: 'convertir', cm: '# reserva + señal', ok: '✓ ausencias ÷ 3' },
      { fn: 'medir', cm: '# dashboard en tiempo real', ok: '✓ visibilidad total' },
    ],
    quads: [
      { n: 'Q1 / CAPTAR', h: 'Cada canal se vuelve una entrada', p: 'WhatsApp, Instagram, tu web, el boca a boca: todo converge en un solo pipeline, con fecha y trazable.', o: '→ NINGÚN MENSAJE SIN RESPUESTA' },
      { n: 'Q2 / RESPONDER', h: 'Un agente que habla tu oficio', p: 'Presupuestos con precio, preguntas frecuentes, citas — el agente responde en segundos, en el idioma del cliente.', o: '→ PRESUPUESTOS EN 2 MINUTOS, 24/7' },
      { n: 'Q3 / CONVERTIR', h: 'La señal que asegura la cita', p: 'Reserva online con pago de señal por adelantado. La ausencia se vuelve la excepción, no la regla.', o: '→ AGENDA LLENA, SEÑALES COBRADAS' },
      { n: 'Q4 / MEDIR', h: 'Tus números, en directo', p: 'Dashboard simple: leads, conversiones, ingresos, export CSV. Decides con datos, no por intuición.', o: '→ VISIBILIDAD EN TIEMPO REAL' },
    ],
    s02l: '/ 02 — DIARIO DE ENTREGAS',
    s02t: 'Sistemas reales, <span class="serif">en producción.</span>',
    s02i: 'No maquetas. Sistemas que funcionan, comprobables en demo.',
    ships: [
      { c: 'BELLEZA · EN LÍNEA', n: 'Plataforma de reservas para salones', d: 'Escáner facial IA → cortes recomendados → presupuesto prellenado → reserva con señal. Dashboard incluido.', s: '● EN PRODUCCIÓN' },
      { c: 'MULTISECTOR', n: 'Agentes de presupuestos WhatsApp', d: 'Cinco oficios prototipados sobre el mismo motor: vocabulario, tarifas y recorrido de cliente propios de cada sector.', s: 'PROTOTIPOS' },
      { c: 'A MEDIDA', n: 'Tu sistema', d: 'Cada oficio tiene su circuito. Mapeamos el tuyo en 15 minutos y lo construimos en días.', s: '● BRIEF ABIERTO' },
    ],
    stProd: '● EN PRODUCCIÓN', stProto: 'PROTOTIPO',
    chat: [
      { w: 'out', t: '¡Hola! ¿Cuánto cuesta balayage + peinado?', h: '10:42 ✓✓' },
      { w: 'in', t: 'Hola 👋 Balayage + peinado: 75–95 € según el largo. ¿Te propongo una cita?', h: '10:42' },
      { w: 'out', t: 'Sí, el jueves por la tarde si es posible', h: '10:43 ✓✓' },
      { w: 'in', t: 'Jueves 14:30 ✓ Una señal de 20 € confirma la cita → pagar la señal', h: '10:43' },
      { w: 'sys', t: '✓ SEÑAL RECIBIDA — CITA CONFIRMADA JUE 14:30' },
    ],
    phoneStatus: 'AGENTE QUADRIA · EN LÍNEA', phoneCap: 'DEMO · CONVERSACIÓN SIMULADA', phoneMsg: 'Mensaje',
    s03l: '/ 03 — CAPACIDADES', s03t: 'Lo que <span class="serif">construimos.</span>',
    caps: [
      { st: '[ 01 / RUNNING ]', h: 'Agentes IA WhatsApp', p: 'Presupuestos, calificación, citas — multilingües, conectados a tus tarifas.' },
      { st: '[ 02 / SHIPPED ]', h: 'Reservas y señales', p: 'Flujos de reserva con pago de señal por adelantado. Stripe Connect, comisión automática.' },
      { st: '[ 03 / DEPLOYED ]', h: 'Webs y plataformas', p: 'Webs corporativas y aplicaciones a medida — cortadas para tu oficio, no para una plantilla.' },
      { st: '[ 04 / CONNECTED ]', h: 'Dashboards y CRM', p: 'Tus leads, conversiones e ingresos en tiempo real. Export CSV, historial de clientes.' },
      { st: '[ 05 / AUTOMATED ]', h: 'Automatizaciones', p: 'Seguimientos, recordatorios, secuencias — tu equipo deja el trabajo manual.' },
      { st: '[ 06 / MULTILINGUAL ]', h: 'Contenido multilingüe', p: 'FR, EN, ES, dariya — el sistema habla el idioma de tus clientes, con árabe bien renderizado (RTL).' },
      { st: '[ 07 / ACTIVE ]', h: 'Branding e identidad', p: 'Logo, manual, dirección de arte — una identidad que aguanta en pantalla y en escaparate.' },
      { st: '[ 08 / ACTIVE ]', h: 'Vídeo y motion', p: 'Producción audiovisual, formatos cortos, motion design — dirigidos por un productor, no en serie.' },
      { st: '[ 09 / PRONTO ]', h: 'Redes y contenido', p: 'Calendarios editoriales, adaptaciones por plataforma, community management asistido por IA.' },
      { st: '[ 10 / PRONTO ]', h: 'SEO y performance', p: 'SEO local, contenidos con intención comercial, campañas medidas por resultados.' },
      { st: '[ 11 / PRONTO ]', h: 'E-commerce y TikTok Shop', p: 'Tiendas, fichas de producto, live shopping — del catálogo al pago.' },
      { st: '[ 12 / PRONTO ]', h: 'Run y mantenimiento', p: 'El sistema vive: supervisión, evoluciones, dirección técnica externalizada.' },
    ],
    capsHint: 'SCROLL · ARRASTRA →',
    s04l: '/ 04 — MÉTODO',
    s04t: 'Comprender. Construir. <span class="serif">Mantener vivo.</span>',
    s04i: 'Sin suscripción sorpresa, sin túnel comercial. Tres fases, y sigues siendo dueño de todo en cada etapa.',
    steps: [
      { ph: 'FASE 1 / DIAGNÓSTICO', h: '15 minutos, <span class="serif">gratis</span>', p: 'Mapeamos dónde pierdes clientes hoy: consultas sin respuesta, ausencias, presupuestos lentos. Sin compromiso.', o: '→ RESPUESTA EN 24 H' },
      { ph: 'FASE 2 / BUILD', h: 'Demo <span class="serif">antes</span> del compromiso', p: 'Ves el sistema funcionando con tu caso real antes de firmar nada. Entrega en días, no en meses.', o: '→ SISTEMA EN PRODUCCIÓN' },
      { ph: 'FASE 3 / RUN', h: 'Todo es <span class="serif">tuyo</span>', p: 'Datos, código, cuentas: todo te pertenece. Supervisamos, medimos, mejoramos — el sistema se refuerza con el tiempo.', o: '→ MEJORA CONTINUA' },
    ],
    stats: ['SISTEMAS ENTREGADOS', 'SECTORES PROTOTIPADOS', 'IDIOMAS · FR EN ES AR', 'MIN PARA UNA DEMO'],
    s06l: '/ 05 — IDIOMAS',
    s06t: 'Tus clientes hablan. <span class="serif">En su idioma.</span>',
    s06i: 'El cliente no adapta su idioma al sistema; el sistema se adapta al cliente.',
    langCards: ['Francia · Magreb francófono', 'Clientes internacionales', 'España · América Latina', 'Dariya — mercado marroquí'],
    finl: '◉ SISTEMAS ABIERTOS A NUEVOS BRIEFS',
    fint: '¿Listo para responder <span class="serif">más rápido</span> que tus competidores?',
    fins: 'Cuéntanos qué te hace perder clientes. Te enseñamos el sistema que lo arregla — en 15 minutos.',
    finCta: '◉ RESERVAR UNA DEMO', finLive: 'PROBAR LA DEMO EN DIRECTO ↗',
    trust: ['RESPUESTA EN 24 H', '15 MIN · SIN COMPROMISO', 'DEMO ANTES DE FIRMAR', 'TODO ES TUYO'],
    waMsgs: ['Hola, me gustaría hablar de mi proyecto con QuadrIA Studio.', 'Hola, quiero reservar una demo de 15 minutos con QuadrIA Studio.'],
  },

  de: {
    locale: 'de-DE',
    title: 'QuadrIA Studio — KI-Agenten & digitale Systeme für KMU | Nizza · Casablanca',
    live: 'LIVE',
    nav: ['BERATUNG', 'SYSTEME', 'STUDIO', 'GROWTH', 'METHODE', 'KONTAKT'],
    boutique: 'SHOP', launch: 'PROJEKT STARTEN ↗',
    h1: 'Ihre Kunden schreiben<span class="pt">.</span> <span class="serif">QuadrIA antwortet.</span>',
    sub: 'Wir bauen die kommerzielle Schicht moderner KMU: <strong>WhatsApp-Angebotsagenten</strong>, <strong>Buchung mit Anzahlung</strong>, Lead-Erfassung, Dashboards. Entworfen. Geliefert. Lebendig.',
    ctaDemo: '◉ DEMO BUCHEN — 15 MIN', ctaLive: 'LIVE-DEMO ANSEHEN ↗', hint: 'SCROLLEN · ENTDECKEN ↓',
    hud: ['UHR', 'ZEITZONE', 'LATENZ', 'UPTIME'],
    mq1: ['WHATSAPP-ANGEBOTSAGENTEN', 'BUCHUNG + ANZAHLUNG', 'KI-GESICHTSSCAN', 'LEAD-ERFASSUNG', 'DASHBOARDS', 'AUTO-NACHFASSEN', 'CRM NACH MASS', 'FIRMENWEBSITES'],
    mq2: ['KEINE VERLORENE ANFRAGE', 'ANGEBOT IN 2 MINUTEN', '24/7', 'FR · EN · ES · DARIJA'],
    s01l: '/ 01 — DAS QUADRIA-SYSTEM',
    s01t: 'Vier Quadranten. <span class="serif">Keine verlorene Anfrage.</span>',
    s01i: 'Jede Mission folgt demselben Rahmen. Keine Website, die einfach dasteht: ein kompletter Kreislauf, von der ersten Kundennachricht bis zum Umsatz in der Kasse.',
    term: 'PIPELINE.FLOW — LIVE',
    pipeline: [
      { fn: 'erfassen', cm: '# wa · ig · website · empfehlung', ok: '✓ keine verlorene anfrage' },
      { fn: 'antworten', cm: '# mehrsprachiger agent 24/7', ok: '✓ angebot in 2 min' },
      { fn: 'konvertieren', cm: '# buchung + anzahlung', ok: '✓ no-shows ÷ 3' },
      { fn: 'messen', cm: '# echtzeit-dashboard', ok: '✓ volle transparenz' },
    ],
    quads: [
      { n: 'Q1 / ERFASSEN', h: 'Jeder Kanal wird zum Eingang', p: 'WhatsApp, Instagram, Ihre Website, Mundpropaganda: alles läuft in einer Pipeline zusammen — mit Zeitstempel, nachvollziehbar.', o: '→ KEINE NACHRICHT OHNE ANTWORT' },
      { n: 'Q2 / ANTWORTEN', h: 'Ein Agent, der Ihr Handwerk spricht', p: 'Bepreiste Angebote, häufige Fragen, Terminbuchung — der Agent antwortet in Sekunden, in der Sprache des Kunden.', o: '→ ANGEBOTE IN 2 MINUTEN, 24/7' },
      { n: 'Q3 / KONVERTIEREN', h: 'Die Anzahlung, die den Termin sichert', p: 'Online-Buchung mit Anzahlung im Voraus. No-Shows werden zur Ausnahme, nicht zur Regel.', o: '→ VOLLER KALENDER, ANZAHLUNGEN KASSIERT' },
      { n: 'Q4 / MESSEN', h: 'Ihre Zahlen, live', p: 'Einfaches Dashboard: Leads, Konversionen, Umsatz, CSV-Export. Sie entscheiden mit Daten, nicht aus dem Bauch.', o: '→ ECHTZEIT-TRANSPARENZ' },
    ],
    s02l: '/ 02 — LIEFERPROTOKOLL',
    s02t: 'Echte Systeme, <span class="serif">in Produktion.</span>',
    s02i: 'Keine Mockups. Systeme, die laufen — in der Demo überprüfbar.',
    ships: [
      { c: 'BEAUTY · ONLINE', n: 'Buchungsplattform für Salons', d: 'KI-Gesichtsscan → empfohlene Schnitte → vorausgefülltes Angebot → Buchung mit Anzahlung. Dashboard inklusive.', s: '● IN PRODUKTION' },
      { c: 'BRANCHENÜBERGREIFEND', n: 'WhatsApp-Angebotsagenten', d: 'Fünf Gewerke auf demselben Motor prototypisiert: Vokabular, Preisliste und Kundenreise je Branche.', s: 'PROTOTYPEN' },
      { c: 'NACH MASS', n: 'Ihr System', d: 'Jedes Gewerbe hat seinen Kreislauf. Wir kartieren Ihren in 15 Minuten und bauen ihn in Tagen.', s: '● BRIEF OFFEN' },
    ],
    stProd: '● IN PRODUKTION', stProto: 'PROTOTYP',
    chat: [
      { w: 'out', t: 'Hallo! Was kostet Balayage + Föhnen?', h: '10:42 ✓✓' },
      { w: 'in', t: 'Hallo 👋 Balayage + Föhnen: 75–95 € je nach Länge. Soll ich Ihnen einen Termin vorschlagen?', h: '10:42' },
      { w: 'out', t: 'Ja, Donnerstagnachmittag wenn möglich', h: '10:43 ✓✓' },
      { w: 'in', t: 'Donnerstag 14:30 ✓ Eine Anzahlung von 20 € bestätigt den Termin → Anzahlung zahlen', h: '10:43' },
      { w: 'sys', t: '✓ ANZAHLUNG ERHALTEN — TERMIN BESTÄTIGT DO 14:30' },
    ],
    phoneStatus: 'QUADRIA-AGENT · ONLINE', phoneCap: 'DEMO · SIMULIERTE UNTERHALTUNG', phoneMsg: 'Nachricht',
    s03l: '/ 03 — LEISTUNGEN', s03t: 'Was wir <span class="serif">bauen.</span>',
    caps: [
      { st: '[ 01 / RUNNING ]', h: 'WhatsApp-KI-Agenten', p: 'Angebote, Qualifizierung, Terminbuchung — mehrsprachig, mit Ihrer Preisliste verbunden.' },
      { st: '[ 02 / SHIPPED ]', h: 'Buchung & Anzahlungen', p: 'Buchungsabläufe mit Anzahlung im Voraus. Stripe Connect, automatische Provision.' },
      { st: '[ 03 / DEPLOYED ]', h: 'Websites & Plattformen', p: 'Firmenwebsites und Web-Apps nach Maß — zugeschnitten auf Ihr Gewerbe, nicht auf ein Template.' },
      { st: '[ 04 / CONNECTED ]', h: 'Dashboards & CRM', p: 'Ihre Leads, Konversionen und Umsätze in Echtzeit. CSV-Export, Kundenhistorie.' },
      { st: '[ 05 / AUTOMATED ]', h: 'Automatisierungen', p: 'Nachfassen, Erinnerungen, Sequenzen — Ihr Team hört auf mit Handarbeit.' },
      { st: '[ 06 / MULTILINGUAL ]', h: 'Mehrsprachige Inhalte', p: 'FR, EN, ES, Darija — das System spricht die Sprache Ihrer Kunden, mit korrektem Arabisch (RTL).' },
      { st: '[ 07 / ACTIVE ]', h: 'Branding & Identität', p: 'Logo, Richtlinien, Art Direction — eine Identität, die auf dem Bildschirm wie im Schaufenster hält.' },
      { st: '[ 08 / ACTIVE ]', h: 'Video & Motion', p: 'Audiovisuelle Produktion, Kurzformate, Motion Design — von einem Produzenten geführt, nicht am Fließband.' },
      { st: '[ 09 / BALD ]', h: 'Social Media & Content', p: 'Redaktionspläne, Anpassung pro Plattform, KI-gestütztes Community Management.' },
      { st: '[ 10 / BALD ]', h: 'SEO & Performance', p: 'Lokales SEO, Inhalte mit Kaufabsicht, an Ergebnissen gemessene Kampagnen.' },
      { st: '[ 11 / BALD ]', h: 'E-Commerce & TikTok Shop', p: 'Shops, Produktseiten, Live-Shopping — vom Katalog bis zur Zahlung.' },
      { st: '[ 12 / BALD ]', h: 'Run & Wartung', p: 'Das System lebt: Überwachung, Weiterentwicklung, ausgelagerte technische Leitung.' },
    ],
    capsHint: 'SCROLLEN · ZIEHEN →',
    s04l: '/ 04 — METHODE',
    s04t: 'Verstehen. Bauen. <span class="serif">Am Leben halten.</span>',
    s04i: 'Kein Überraschungs-Abo, kein Verkaufstrichter. Drei Phasen — und alles gehört in jedem Schritt Ihnen.',
    steps: [
      { ph: 'PHASE 1 / DIAGNOSE', h: '15 Minuten, <span class="serif">kostenlos</span>', p: 'Wir kartieren, wo Sie heute Kunden verlieren: unbeantwortete Anfragen, No-Shows, langsame Angebote. Unverbindlich.', o: '→ ANTWORT INNERHALB VON 24 H' },
      { ph: 'PHASE 2 / BUILD', h: 'Demo <span class="serif">vor</span> der Verpflichtung', p: 'Sie sehen das System an Ihrem echten Fall arbeiten, bevor Sie etwas unterschreiben. Lieferung in Tagen, nicht Monaten.', o: '→ SYSTEM IN PRODUKTION' },
      { ph: 'PHASE 3 / RUN', h: 'Ihnen gehört <span class="serif">alles</span>', p: 'Daten, Code, Konten: alles gehört Ihnen. Wir überwachen, messen, verbessern — das System wird mit der Zeit stärker.', o: '→ KONTINUIERLICHE VERBESSERUNG' },
    ],
    stats: ['GELIEFERTE SYSTEME', 'PROTOTYPISIERTE BRANCHEN', 'SPRACHEN · FR EN ES AR', 'MIN FÜR EINE DEMO'],
    s06l: '/ 05 — SPRACHEN',
    s06t: 'Ihre Kunden sprechen. <span class="serif">In ihrer Sprache.</span>',
    s06i: 'Nicht der Kunde passt seine Sprache dem System an — das System passt sich dem Kunden an.',
    langCards: ['Frankreich · frankophoner Maghreb', 'Internationale Kunden', 'Spanien · Lateinamerika', 'Darija — marokkanischer Markt'],
    finl: '◉ SYSTEME OFFEN FÜR NEUE BRIEFS',
    fint: 'Bereit, <span class="serif">schneller</span> zu antworten als Ihre Konkurrenz?',
    fins: 'Sagen Sie uns, was Sie Kunden kostet. Wir zeigen Ihnen das System, das es löst — in 15 Minuten.',
    finCta: '◉ DEMO BUCHEN', finLive: 'LIVE-DEMO TESTEN ↗',
    trust: ['ANTWORT IN 24 H', '15 MIN · UNVERBINDLICH', 'DEMO VOR UNTERSCHRIFT', 'ALLES GEHÖRT IHNEN'],
    waMsgs: ['Hallo, ich möchte mein Projekt mit QuadrIA Studio besprechen.', 'Hallo, ich möchte eine 15-minütige Demo mit QuadrIA Studio buchen.'],
  },

  pt: {
    locale: 'pt-BR',
    title: 'QuadrIA Studio — Agentes de IA e sistemas digitais para PMEs | Nice · Casablanca',
    live: 'AO VIVO',
    nav: ['CONSULTORIA', 'SISTEMAS', 'STUDIO', 'GROWTH', 'MÉTODO', 'CONTATO'],
    boutique: 'LOJA', launch: 'INICIAR UM PROJETO ↗',
    h1: 'Seus clientes escrevem<span class="pt">.</span> <span class="serif">QuadrIA responde.</span>',
    sub: 'Construímos a camada comercial das PMEs modernas: <strong>agentes de orçamento no WhatsApp</strong>, <strong>reservas com sinal</strong>, captura de leads, dashboards. Projetado. Entregue. Vivo.',
    ctaDemo: '◉ AGENDAR UMA DEMO — 15 MIN', ctaLive: 'VER UMA DEMO AO VIVO ↗', hint: 'ROLAR · EXPLORAR ↓',
    hud: ['RELÓGIO', 'FUSO HORÁRIO', 'LATÊNCIA', 'UPTIME'],
    mq1: ['AGENTES DE ORÇAMENTO WHATSAPP', 'RESERVAS + SINAL', 'SCAN FACIAL IA', 'CAPTURA DE LEADS', 'DASHBOARDS', 'FOLLOW-UPS AUTOMÁTICOS', 'CRM SOB MEDIDA', 'SITES INSTITUCIONAIS'],
    mq2: ['ZERO PEDIDOS PERDIDOS', 'ORÇAMENTO EM 2 MINUTOS', '24/7', 'FR · EN · ES · DARIJA'],
    s01l: '/ 01 — O SISTEMA QUADRIA',
    s01t: 'Quatro quadrantes. <span class="serif">Zero pedidos perdidos.</span>',
    s01i: 'Cada missão segue o mesmo quadro. Não é um site largado ali: é um circuito completo, da primeira mensagem do cliente ao dinheiro no caixa.',
    term: 'PIPELINE.FLOW — AO VIVO',
    pipeline: [
      { fn: 'captar', cm: '# wa · ig · site · indicação', ok: '✓ zero pedidos perdidos' },
      { fn: 'responder', cm: '# agente multilíngue 24/7', ok: '✓ orçamento em 2 min' },
      { fn: 'converter', cm: '# reserva + sinal', ok: '✓ faltas ÷ 3' },
      { fn: 'medir', cm: '# dashboard em tempo real', ok: '✓ visibilidade total' },
    ],
    quads: [
      { n: 'Q1 / CAPTAR', h: 'Cada canal vira uma entrada', p: 'WhatsApp, Instagram, seu site, o boca a boca: tudo converge para um único pipeline, com data e rastreável.', o: '→ NENHUMA MENSAGEM SEM RESPOSTA' },
      { n: 'Q2 / RESPONDER', h: 'Um agente que fala o seu ofício', p: 'Orçamentos com preço, perguntas frequentes, agendamento — o agente responde em segundos, no idioma do cliente.', o: '→ ORÇAMENTOS EM 2 MINUTOS, 24/7' },
      { n: 'Q3 / CONVERTER', h: 'O sinal que garante o horário', p: 'Reserva online com pagamento de sinal antecipado. A falta vira exceção, não regra.', o: '→ AGENDA CHEIA, SINAIS RECEBIDOS' },
      { n: 'Q4 / MEDIR', h: 'Seus números, ao vivo', p: 'Dashboard simples: leads, conversões, receita, export CSV. Você decide com dados, não no feeling.', o: '→ VISIBILIDADE EM TEMPO REAL' },
    ],
    s02l: '/ 02 — DIÁRIO DE ENTREGAS',
    s02t: 'Sistemas reais, <span class="serif">em produção.</span>',
    s02i: 'Não são mockups. Sistemas que rodam, testáveis em demo.',
    ships: [
      { c: 'BELEZA · ONLINE', n: 'Plataforma de reservas para salões', d: 'Scan facial IA → cortes recomendados → orçamento pré-preenchido → reserva com sinal. Dashboard incluído.', s: '● EM PRODUÇÃO' },
      { c: 'MULTISSETOR', n: 'Agentes de orçamento WhatsApp', d: 'Cinco ofícios prototipados no mesmo motor: vocabulário, tabela de preços e jornada de cliente próprios de cada setor.', s: 'PROTÓTIPOS' },
      { c: 'SOB MEDIDA', n: 'O seu sistema', d: 'Cada ofício tem seu circuito. Mapeamos o seu em 15 minutos e construímos em dias.', s: '● BRIEF ABERTO' },
    ],
    stProd: '● EM PRODUÇÃO', stProto: 'PROTÓTIPO',
    chat: [
      { w: 'out', t: 'Olá! Quanto custa balayage + escova?', h: '10:42 ✓✓' },
      { w: 'in', t: 'Olá 👋 Balayage + escova: 75–95 € conforme o comprimento. Posso sugerir um horário?', h: '10:42' },
      { w: 'out', t: 'Sim, quinta à tarde se possível', h: '10:43 ✓✓' },
      { w: 'in', t: 'Quinta 14h30 ✓ Um sinal de 20 € confirma o horário → pagar o sinal', h: '10:43' },
      { w: 'sys', t: '✓ SINAL RECEBIDO — HORÁRIO CONFIRMADO QUI 14:30' },
    ],
    phoneStatus: 'AGENTE QUADRIA · ONLINE', phoneCap: 'DEMO · CONVERSA SIMULADA', phoneMsg: 'Mensagem',
    s03l: '/ 03 — CAPACIDADES', s03t: 'O que a gente <span class="serif">constrói.</span>',
    caps: [
      { st: '[ 01 / RUNNING ]', h: 'Agentes de IA no WhatsApp', p: 'Orçamentos, qualificação, agendamento — multilíngues, conectados à sua tabela de preços.' },
      { st: '[ 02 / SHIPPED ]', h: 'Reservas e sinais', p: 'Fluxos de reserva com sinal antecipado. Stripe Connect, comissão automática.' },
      { st: '[ 03 / DEPLOYED ]', h: 'Sites e plataformas', p: 'Sites institucionais e web apps sob medida — cortados para o seu ofício, não para um template.' },
      { st: '[ 04 / CONNECTED ]', h: 'Dashboards e CRM', p: 'Seus leads, conversões e receita em tempo real. Export CSV, histórico de clientes.' },
      { st: '[ 05 / AUTOMATED ]', h: 'Automações', p: 'Follow-ups, lembretes, sequências — sua equipe para com o trabalho manual.' },
      { st: '[ 06 / MULTILINGUAL ]', h: 'Conteúdo multilíngue', p: 'FR, EN, ES, darija — o sistema fala o idioma dos seus clientes, com árabe renderizado corretamente (RTL).' },
      { st: '[ 07 / ACTIVE ]', h: 'Branding e identidade', p: 'Logo, manual, direção de arte — uma identidade que segura na tela e na vitrine.' },
      { st: '[ 08 / ACTIVE ]', h: 'Vídeo e motion', p: 'Produção audiovisual, formatos curtos, motion design — dirigidos por um produtor, não em série.' },
      { st: '[ 09 / EM BREVE ]', h: 'Social media e conteúdo', p: 'Calendários editoriais, adaptações por plataforma, community management assistido por IA.' },
      { st: '[ 10 / EM BREVE ]', h: 'SEO e performance', p: 'SEO local, conteúdo com intenção comercial, campanhas medidas por resultado.' },
      { st: '[ 11 / EM BREVE ]', h: 'E-commerce e TikTok Shop', p: 'Lojas, páginas de produto, live shopping — do catálogo ao pagamento.' },
      { st: '[ 12 / EM BREVE ]', h: 'Run e manutenção', p: 'O sistema vive: supervisão, evoluções, direção técnica terceirizada.' },
    ],
    capsHint: 'ROLAR · ARRASTAR →',
    s04l: '/ 04 — MÉTODO',
    s04t: 'Entender. Construir. <span class="serif">Manter vivo.</span>',
    s04i: 'Sem assinatura surpresa, sem funil de vendas. Três fases, e você continua dono de tudo em cada etapa.',
    steps: [
      { ph: 'FASE 1 / DIAGNÓSTICO', h: '15 minutos, <span class="serif">grátis</span>', p: 'Mapeamos onde você perde clientes hoje: pedidos sem resposta, faltas, orçamentos lentos. Sem compromisso.', o: '→ RESPOSTA EM 24 H' },
      { ph: 'FASE 2 / BUILD', h: 'Demo <span class="serif">antes</span> do compromisso', p: 'Você vê o sistema funcionando no seu caso real antes de assinar qualquer coisa. Entrega em dias, não meses.', o: '→ SISTEMA EM PRODUÇÃO' },
      { ph: 'FASE 3 / RUN', h: 'Tudo é <span class="serif">seu</span>', p: 'Dados, código, contas: tudo pertence a você. Supervisionamos, medimos, melhoramos — o sistema se fortalece com o tempo.', o: '→ MELHORIA CONTÍNUA' },
    ],
    stats: ['SISTEMAS ENTREGUES', 'SETORES PROTOTIPADOS', 'IDIOMAS · FR EN ES AR', 'MIN PARA UMA DEMO'],
    s06l: '/ 05 — IDIOMAS',
    s06t: 'Seus clientes falam. <span class="serif">No idioma deles.</span>',
    s06i: 'O cliente não adapta o idioma ao sistema; o sistema se adapta ao cliente.',
    langCards: ['França · Magrebe francófono', 'Clientes internacionais', 'Espanha · América Latina', 'Darija — mercado marroquino'],
    finl: '◉ SISTEMAS ABERTOS A NOVOS BRIEFS',
    fint: 'Pronto para responder <span class="serif">mais rápido</span> que seus concorrentes?',
    fins: 'Conte o que faz você perder clientes. Mostramos o sistema que resolve — em 15 minutos.',
    finCta: '◉ AGENDAR UMA DEMO', finLive: 'TESTAR A DEMO AO VIVO ↗',
    trust: ['RESPOSTA EM 24 H', '15 MIN · SEM COMPROMISSO', 'DEMO ANTES DE ASSINAR', 'TUDO É SEU'],
    waMsgs: ['Olá, gostaria de conversar sobre meu projeto com o QuadrIA Studio.', 'Olá, quero agendar uma demo de 15 minutos com o QuadrIA Studio.'],
  },

  it: {
    locale: 'it-IT',
    title: 'QuadrIA Studio — Agenti IA e sistemi digitali per PMI | Nizza · Casablanca',
    live: 'IN DIRETTA',
    nav: ['CONSULENZA', 'SISTEMI', 'STUDIO', 'GROWTH', 'METODO', 'CONTATTO'],
    boutique: 'SHOP', launch: 'AVVIA UN PROGETTO ↗',
    h1: 'I tuoi clienti scrivono<span class="pt">.</span> <span class="serif">QuadrIA risponde.</span>',
    sub: 'Costruiamo lo strato commerciale delle PMI moderne: <strong>agenti preventivi su WhatsApp</strong>, <strong>prenotazioni con acconto</strong>, cattura lead, dashboard. Progettato. Consegnato. Vivo.',
    ctaDemo: '◉ PRENOTA UNA DEMO — 15 MIN', ctaLive: 'GUARDA UNA DEMO LIVE ↗', hint: 'SCORRI · ESPLORA ↓',
    hud: ['OROLOGIO', 'FUSO ORARIO', 'LATENZA', 'UPTIME'],
    mq1: ['AGENTI PREVENTIVI WHATSAPP', 'PRENOTAZIONI + ACCONTO', 'SCANSIONE VISO IA', 'CATTURA LEAD', 'DASHBOARD', 'FOLLOW-UP AUTOMATICI', 'CRM SU MISURA', 'SITI VETRINA'],
    mq2: ['ZERO RICHIESTE PERSE', 'PREVENTIVO IN 2 MINUTI', '24/7', 'FR · EN · ES · DARIJA'],
    s01l: '/ 01 — IL SISTEMA QUADRIA',
    s01t: 'Quattro quadranti. <span class="serif">Zero richieste perse.</span>',
    s01i: 'Ogni missione segue lo stesso schema. Non un sito messo lì: un circuito completo, dal primo messaggio del cliente ai soldi in cassa.',
    term: 'PIPELINE.FLOW — IN DIRETTA',
    pipeline: [
      { fn: 'catturare', cm: '# wa · ig · sito · passaparola', ok: '✓ zero richieste perse' },
      { fn: 'rispondere', cm: '# agente multilingue 24/7', ok: '✓ preventivo in 2 min' },
      { fn: 'convertire', cm: '# prenotazione + acconto', ok: '✓ no-show ÷ 3' },
      { fn: 'misurare', cm: '# dashboard in tempo reale', ok: '✓ visibilità totale' },
    ],
    quads: [
      { n: 'Q1 / CATTURARE', h: 'Ogni canale diventa un ingresso', p: 'WhatsApp, Instagram, il tuo sito, il passaparola: tutto converge in un\'unica pipeline, datata, tracciabile.', o: '→ NESSUN MESSAGGIO SENZA RISPOSTA' },
      { n: 'Q2 / RISPONDERE', h: 'Un agente che parla il tuo mestiere', p: 'Preventivi con prezzo, domande frequenti, appuntamenti — l\'agente risponde in secondi, nella lingua del cliente.', o: '→ PREVENTIVI IN 2 MINUTI, 24/7' },
      { n: 'Q3 / CONVERTIRE', h: 'L\'acconto che blinda l\'appuntamento', p: 'Prenotazione online con acconto anticipato. Il no-show diventa l\'eccezione, non la regola.', o: '→ AGENDA PIENA, ACCONTI INCASSATI' },
      { n: 'Q4 / MISURARE', h: 'I tuoi numeri, in diretta', p: 'Dashboard semplice: lead, conversioni, ricavi, export CSV. Decidi sui dati, non a sensazione.', o: '→ VISIBILITÀ IN TEMPO REALE' },
    ],
    s02l: '/ 02 — DIARIO DELLE CONSEGNE',
    s02t: 'Sistemi reali, <span class="serif">in produzione.</span>',
    s02i: 'Non mockup. Sistemi che girano, verificabili in demo.',
    ships: [
      { c: 'BEAUTY · ONLINE', n: 'Piattaforma prenotazioni saloni', d: 'Scansione viso IA → tagli consigliati → preventivo precompilato → prenotazione con acconto. Dashboard inclusa.', s: '● IN PRODUZIONE' },
      { c: 'MULTISETTORE', n: 'Agenti preventivi WhatsApp', d: 'Cinque mestieri prototipati sullo stesso motore: vocabolario, listino e percorso cliente propri di ogni settore.', s: 'PROTOTIPI' },
      { c: 'SU MISURA', n: 'Il tuo sistema', d: 'Ogni mestiere ha il suo circuito. Mappiamo il tuo in 15 minuti e lo costruiamo in giorni.', s: '● BRIEF APERTO' },
    ],
    stProd: '● IN PRODUZIONE', stProto: 'PROTOTIPO',
    chat: [
      { w: 'out', t: 'Ciao! Quanto costa balayage + piega?', h: '10:42 ✓✓' },
      { w: 'in', t: 'Ciao 👋 Balayage + piega: 75–95 € secondo la lunghezza. Ti propongo un orario?', h: '10:42' },
      { w: 'out', t: 'Sì, giovedì pomeriggio se possibile', h: '10:43 ✓✓' },
      { w: 'in', t: 'Giovedì 14:30 ✓ Un acconto di 20 € conferma l\'appuntamento → paga l\'acconto', h: '10:43' },
      { w: 'sys', t: '✓ ACCONTO RICEVUTO — APPUNTAMENTO CONFERMATO GIO 14:30' },
    ],
    phoneStatus: 'AGENTE QUADRIA · ONLINE', phoneCap: 'DEMO · CONVERSAZIONE SIMULATA', phoneMsg: 'Messaggio',
    s03l: '/ 03 — CAPACITÀ', s03t: 'Quello che <span class="serif">costruiamo.</span>',
    caps: [
      { st: '[ 01 / RUNNING ]', h: 'Agenti IA WhatsApp', p: 'Preventivi, qualificazione, appuntamenti — multilingue, collegati al tuo listino.' },
      { st: '[ 02 / SHIPPED ]', h: 'Prenotazioni e acconti', p: 'Flussi di prenotazione con acconto anticipato. Stripe Connect, commissione automatica.' },
      { st: '[ 03 / DEPLOYED ]', h: 'Siti e piattaforme', p: 'Siti vetrina e web app su misura — tagliati per il tuo mestiere, non per un template.' },
      { st: '[ 04 / CONNECTED ]', h: 'Dashboard e CRM', p: 'I tuoi lead, conversioni e ricavi in tempo reale. Export CSV, storico clienti.' },
      { st: '[ 05 / AUTOMATED ]', h: 'Automazioni', p: 'Follow-up, promemoria, sequenze — il tuo team smette con il lavoro manuale.' },
      { st: '[ 06 / MULTILINGUAL ]', h: 'Contenuti multilingue', p: 'FR, EN, ES, darija — il sistema parla la lingua dei tuoi clienti, con arabo reso correttamente (RTL).' },
      { st: '[ 07 / ACTIVE ]', h: 'Branding e identità', p: 'Logo, linee guida, direzione artistica — un\'identità che regge sullo schermo come in vetrina.' },
      { st: '[ 08 / ACTIVE ]', h: 'Video e motion', p: 'Produzione audiovisiva, formati brevi, motion design — diretti da un produttore, non in serie.' },
      { st: '[ 09 / PRESTO ]', h: 'Social media e contenuti', p: 'Calendari editoriali, declinazioni per piattaforma, community management assistito da IA.' },
      { st: '[ 10 / PRESTO ]', h: 'SEO e performance', p: 'SEO locale, contenuti a intento commerciale, campagne misurate sui risultati.' },
      { st: '[ 11 / PRESTO ]', h: 'E-commerce e TikTok Shop', p: 'Negozi, schede prodotto, live shopping — dal catalogo al pagamento.' },
      { st: '[ 12 / PRESTO ]', h: 'Run e manutenzione', p: 'Il sistema vive: supervisione, evoluzioni, direzione tecnica esternalizzata.' },
    ],
    capsHint: 'SCORRI · TRASCINA →',
    s04l: '/ 04 — METODO',
    s04t: 'Capire. Costruire. <span class="serif">Tenere vivo.</span>',
    s04i: 'Nessun abbonamento a sorpresa, nessun funnel commerciale. Tre fasi, e resti proprietario di tutto a ogni passo.',
    steps: [
      { ph: 'FASE 1 / DIAGNOSI', h: '15 minuti, <span class="serif">gratis</span>', p: 'Mappiamo dove perdi clienti oggi: richieste senza risposta, no-show, preventivi lenti. Senza impegno.', o: '→ RISPOSTA ENTRO 24 H' },
      { ph: 'FASE 2 / BUILD', h: 'Demo <span class="serif">prima</span> dell\'impegno', p: 'Vedi il sistema funzionare sul tuo caso reale prima di firmare qualsiasi cosa. Consegna in giorni, non mesi.', o: '→ SISTEMA IN PRODUZIONE' },
      { ph: 'FASE 3 / RUN', h: 'Possiedi <span class="serif">tutto</span>', p: 'Dati, codice, account: tutto appartiene a te. Supervisioniamo, misuriamo, miglioriamo — il sistema si rafforza col tempo.', o: '→ MIGLIORAMENTO CONTINUO' },
    ],
    stats: ['SISTEMI CONSEGNATI', 'SETTORI PROTOTIPATI', 'LINGUE · FR EN ES AR', 'MIN PER UNA DEMO'],
    s06l: '/ 05 — LINGUE',
    s06t: 'I tuoi clienti parlano. <span class="serif">Nella loro lingua.</span>',
    s06i: 'Il cliente non adatta la sua lingua al sistema; è il sistema che si adatta al cliente.',
    langCards: ['Francia · Maghreb francofono', 'Clienti internazionali', 'Spagna · America Latina', 'Darija — mercato marocchino'],
    finl: '◉ SISTEMI APERTI A NUOVI BRIEF',
    fint: 'Pronto a rispondere <span class="serif">più veloce</span> dei tuoi concorrenti?',
    fins: 'Dicci cosa ti fa perdere clienti. Ti mostriamo il sistema che lo risolve — in 15 minuti.',
    finCta: '◉ PRENOTA UNA DEMO', finLive: 'PROVA LA DEMO LIVE ↗',
    trust: ['RISPOSTA ENTRO 24 H', '15 MIN · SENZA IMPEGNO', 'DEMO PRIMA DELLA FIRMA', 'POSSIEDI TUTTO'],
    waMsgs: ['Ciao, vorrei parlare del mio progetto con QuadrIA Studio.', 'Ciao, vorrei prenotare una demo di 15 minuti con QuadrIA Studio.'],
  },
};

(function () {
  const lang = localStorage.getItem('q_lang') || 'fr';
  const T = Q_T[lang] || null;
  window.__T = T;
  window.__LANG = lang;
  window.__LOCALE = T ? T.locale : 'fr-FR';
  document.documentElement.lang = lang;

  // construit le sélecteur de langue
  const pills = document.getElementById('lang-pills');
  if (pills) {
    pills.innerHTML = '';
    Object.keys(Q_LANGS).forEach(code => {
      const s = document.createElement('span');
      s.textContent = Q_LANGS[code];
      s.style.cursor = 'pointer';
      if (code === lang) s.classList.add('on');
      s.addEventListener('click', () => {
        if (code === lang) return;
        localStorage.setItem('q_lang', code);
        location.reload();
      });
      pills.appendChild(s);
    });
  }

  if (!T) return; // FR = source, rien à traduire

  const one = (sel, val, html) => { const el = document.querySelector(sel); if (el && val != null) el[html ? 'innerHTML' : 'textContent'] = val; };
  const all = (sel, vals, html) => document.querySelectorAll(sel).forEach((el, i) => { if (vals[i] != null) el[html ? 'innerHTML' : 'textContent'] = vals[i]; });

  document.title = T.title;

  // nav — préserve les marqueurs Q1..Q4 existants
  document.querySelectorAll('nav .links a:not(#nav-boutique)').forEach((a, i) => {
    if (T.nav[i] == null) return;
    const b = a.querySelector('b');
    a.innerHTML = (b ? b.outerHTML : '') + T.nav[i];
  });
  one('#nav-boutique', '<b>◉</b>' + T.boutique, true);
  one('.btn-nav', T.launch);

  // hero
  one('.meta-line .lv', '<span class="dot-live"></span>' + T.live, true);
  one('.hero h1', T.h1, true);
  one('.hero .sub', T.sub, true);
  one('.hero .cta-row .btn.primary', T.ctaDemo);
  one('.hero .cta-row .btn.ghost', T.ctaLive);
  one('.hero .hint', T.hint);
  all('.hud .grid2 .k', T.hud);

  // marquees (avant duplication par le script principal)
  const mk = (items, sep) => items.map(x => '<b>' + x + '</b>').join('<i>' + sep + '</i>') + '<i>' + sep + '</i>';
  one('.marquee:not(.tilt) .track', mk(T.mq1, '/'), true);
  one('.marquee.tilt .track', mk(T.mq2.concat(T.mq2), '◆'), true);

  // 01 système
  one('#systeme .sec-label', T.s01l);
  one('#systeme .sec-title', T.s01t, true);
  one('#systeme .sec-intro', T.s01i);
  one('#systeme .term .tbar', '<span class="lights"><span></span><span></span><span></span></span> ' + T.term, true);
  document.querySelectorAll('#systeme .quad').forEach((q, i) => {
    const d = T.quads[i]; if (!d) return;
    q.querySelector('.num').textContent = d.n;
    q.querySelector('h3').textContent = d.h;
    q.querySelector('p').textContent = d.p;
    q.querySelector('.out').textContent = d.o;
  });

  // 02 livraisons
  one('#livraisons .sec-label', T.s02l);
  one('#livraisons .sec-title', T.s02t, true);
  one('#livraisons .sec-intro', T.s02i);
  document.querySelectorAll('#livraisons .ship').forEach((s, i) => {
    const d = T.ships[i]; if (!d) return;
    s.querySelector('.cat').textContent = d.c;
    s.querySelector('.name').textContent = d.n;
    s.querySelector('.desc').textContent = d.d;
    const st = s.querySelector('.status');
    st.textContent = d.s || (st.classList.contains('prod') ? T.stProd : T.stProto);
  });
  one('.ph-status', T.phoneStatus);
  one('.phone-cap', T.phoneCap);
  one('.ph-input span', T.phoneMsg);

  // 03 capacités
  one('#capacites .sec-label', T.s03l);
  one('#capacites .sec-title', T.s03t, true);
  document.querySelectorAll('#capacites .cap').forEach((c, i) => {
    const d = T.caps[i]; if (!d) return;
    c.querySelector('.st').textContent = d.st;
    c.querySelector('h3').textContent = d.h;
    c.querySelector('p').textContent = d.p;
  });
  one('.caps-hint', T.capsHint);

  // 04 méthode
  one('#methode .sec-label', T.s04l);
  one('#methode .sec-title', T.s04t, true);
  one('#methode .sec-intro', T.s04i);
  document.querySelectorAll('#methode .step').forEach((s, i) => {
    const d = T.steps[i]; if (!d) return;
    s.querySelector('.ph').textContent = d.ph;
    s.querySelector('h3').innerHTML = d.h;
    s.querySelector('p').textContent = d.p;
    s.querySelector('.out').textContent = d.o;
  });

  // stats
  all('.stats .l', T.stats);

  // 06 langues
  one('#langues .sec-label', T.s06l);
  one('#langues .sec-title', T.s06t, true);
  one('#langues .sec-intro', T.s06i);
  document.querySelectorAll('#langues .lang p').forEach((p, i) => { if (T.langCards[i]) p.textContent = T.langCards[i]; });

  // final
  one('.final .sec-label', T.finl);
  one('.final h2', T.fint, true);
  one('.final .sub2', T.fins);
  one('.final .btn.primary', T.finCta);
  one('.final .btn.ghost', T.finLive);
  all('.trust-line span', T.trust);

  // messages WhatsApp préremplis
  const wa = document.querySelectorAll('.wa-link');
  if (wa[0]) wa[0].dataset.msg = T.waMsgs[0];
  if (wa[1]) wa[1].dataset.msg = T.waMsgs[1];
  if (wa[2]) wa[2].dataset.msg = T.waMsgs[1];
})();
