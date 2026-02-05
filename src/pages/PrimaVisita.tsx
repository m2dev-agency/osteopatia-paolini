import { Link } from 'react-router-dom';
import { CTAButtons } from '../components/CTAButtons';
import { FAQItem } from '../components/FAQItem';
import { AnimatedSection, AnimatedText } from '../components/Animate';
import { faqs } from '../data/faq';
import './PrimaVisita.css';

const steps = [
  {
    number: '01',
    title: 'Accoglienza',
    description: 'Ti accolgo personalmente e ti faccio accomodare. Prima della visita, ti chiederò di compilare una breve scheda con i tuoi dati e la tua storia clinica.',
    time: '5-10 min',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Anamnesi',
    description: 'Attraverso un colloquio approfondito, ripercorriamo la tua storia: traumi passati, stile di vita, tipo di lavoro, sport praticati, disturbi attuali e precedenti. Ogni dettaglio può essere importante.',
    time: '15-20 min',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Valutazione osteopatica',
    description: 'Procedo con l\'esame obiettivo: osservazione posturale, test di mobilità, palpazione delle strutture corporee. Questo mi permette di individuare le aree di disfunzione e le loro correlazioni.',
    time: '10-15 min',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Trattamento',
    description: 'Inizio il trattamento osteopatico, utilizzando le tecniche più appropriate per il tuo caso: manipolazioni dolci, tecniche mio-fasciali, cranio-sacrali o viscerali, a seconda delle necessità.',
    time: '20-25 min',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" /><path d="M2 20h20" /><path d="M14 12v.01" /><path d="M10 12v.01" /><path d="M12 8v.01" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Conclusione e piano',
    description: 'Ti spiego cosa ho trovato e il piano terapeutico consigliato: frequenza delle sedute, esercizi da fare a casa, eventuali accorgimenti per la vita quotidiana.',
    time: '5-10 min',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

const prepareItems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
      </svg>
    ),
    text: 'Porta con te eventuali esami diagnostici recenti (radiografie, risonanze, ecografie, analisi del sangue)',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    text: 'Prepara un elenco dei farmaci che assumi regolarmente',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.38 3.46L16 2 12 5.5 8 2l-4.38 1.46a1 1 0 0 0-.62.94v11.06c0 .47.34.88.74 1.12l8.26 4.87 8.26-4.87c.4-.24.74-.65.74-1.12V4.4a1 1 0 0 0-.62-.94z" />
      </svg>
    ),
    text: 'Indossa abbigliamento comodo e intimo (la visita avviene in biancheria intima)',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    text: 'Non fare pasti abbondanti nelle 2 ore precedenti la visita',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    text: 'Arriva 10 minuti prima per compilare la scheda anamnestica con tranquillità',
  },
];

export function PrimaVisita() {
  const visitaFaqs = faqs.filter(f => 
    f.question.toLowerCase().includes('sedut') || 
    f.question.toLowerCase().includes('prepar') ||
    f.question.toLowerCase().includes('dura')
  );

  return (
    <main className="pv">
      {/* ── Hero ── */}
      <section className="pv-hero">
        <div className="pv-hero__bg">
          <div className="pv-hero__orb pv-hero__orb--1" />
          <div className="pv-hero__orb pv-hero__orb--2" />
          <div className="pv-hero__orb pv-hero__orb--3" />
        </div>
        <div className="pv-hero__content">
          <AnimatedSection animation="fade-down" delay={0.1} triggerOnce>
            <span className="pv-hero__label">Prima Visita</span>
          </AnimatedSection>
          <AnimatedText
            text="Il tuo percorso inizia qui"
            as="h1"
            className="pv-hero__title"
            splitBy="word"
            animation="blur-up"
            staggerDelay={0.07}
            duration={0.8}
            triggerOnce
          />
          <AnimatedSection animation="fade-up" delay={0.5} triggerOnce>
            <p className="pv-hero__desc">
              Cosa aspettarti dal primo incontro: un momento fondamentale per conoscerti
              e impostare il tuo percorso di benessere.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="scale-up" delay={0.7} triggerOnce>
            <div className="pv-hero__metrics">
              <div className="pv-hero__metric">
                <span className="pv-hero__metric-value">60</span>
                <span className="pv-hero__metric-unit">min</span>
                <span className="pv-hero__metric-label">Durata visita</span>
              </div>
              <div className="pv-hero__metric-divider" />
              <div className="pv-hero__metric">
                <span className="pv-hero__metric-value">60</span>
                <span className="pv-hero__metric-unit">€</span>
                <span className="pv-hero__metric-label">Tariffa</span>
              </div>
              <div className="pv-hero__metric-divider" />
              <div className="pv-hero__metric">
                <span className="pv-hero__metric-value">5</span>
                <span className="pv-hero__metric-unit">fasi</span>
                <span className="pv-hero__metric-label">Del percorso</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Timeline Steps ── */}
      <section className="pv-journey section section--alt">
        <div className="container">
          <AnimatedSection animation="fade-up" className="section__header">
            <span className="section__label">Il percorso</span>
            <AnimatedText text="Come si svolge la visita" as="h2" className="section__title" splitBy="word" animation="fade-up" staggerDelay={0.05} />
            <AnimatedText
              text="Analizziamo insieme la tua storia clinica e individuiamo le cause profonde del tuo disagio per definire il percorso terapeutico più efficace."
              as="p"
              className="pv-journey__subtitle"
              splitBy="word"
              animation="blur-up"
              staggerDelay={0.025}
              duration={0.45}
              threshold={0.3}
            />
          </AnimatedSection>

          <div className="pv-timeline">
            <div className="pv-timeline__line" />
            {steps.map((step, i) => (
              <AnimatedSection
                key={step.number}
                animation={i % 2 === 0 ? 'fade-right' : 'fade-left'}
                delay={0.15 * i}
                className={`pv-timeline__item pv-timeline__item--${i % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="pv-timeline__dot">
                  <span>{step.icon}</span>
                </div>
                <div className="pv-timeline__card">
                  <div className="pv-timeline__card-header">
                    <span className="pv-timeline__number">{step.number}</span>
                    <h3 className="pv-timeline__title">{step.title}</h3>
                    <span className="pv-timeline__time">{step.time}</span>
                  </div>
                  <p className="pv-timeline__desc">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Prepare & FAQ ── */}
      <section className="pv-prepare section">
        <div className="container">
          <div className="pv-prepare__grid">
            {/* Prepare card */}
            <AnimatedSection animation="fade-up" delay={0.1} threshold={0.05} className="pv-prepare__card pv-prepare__card--checklist">
              <div className="pv-prepare__card-inner">
                <span className="pv-prepare__icon-accent">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </span>
                <h2 className="pv-prepare__heading">Come prepararti</h2>
                <ul className="pv-prepare__list">
                  {prepareItems.map((item, i) => (
                    <AnimatedSection key={i} animation="fade-right" delay={0.1 + i * 0.08}>
                      <li className="pv-prepare__list-item">
                        <span className="pv-prepare__list-icon">{item.icon}</span>
                        <span>{item.text}</span>
                      </li>
                    </AnimatedSection>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* FAQ card */}
            <AnimatedSection animation="fade-up" delay={0.15} threshold={0.05} className="pv-prepare__card pv-prepare__card--faq">
              <div className="pv-prepare__card-inner">
                <AnimatedSection animation="fade-right" delay={0.05}>
                  <span className="pv-prepare__icon-accent">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  </span>
                  <h2 className="pv-prepare__heading">Domande frequenti</h2>
                </AnimatedSection>
                <AnimatedSection animation="fade-up" delay={0.1}>
                  <p className="pv-prepare__subtext">Hai dubbi sulla prima visita? Ecco le risposte alle domande più comuni:</p>
                </AnimatedSection>
                <div className="pv-prepare__faqs">
                  {visitaFaqs.length > 0 ? (
                    visitaFaqs.map((faq, i) => (
                      <AnimatedSection key={faq.id} animation="fade-right" delay={0.1 + i * 0.08}>
                        <FAQItem faq={faq} />
                      </AnimatedSection>
                    ))
                  ) : (
                    <>
                      <AnimatedSection animation="fade-right" delay={0.1}>
                        <p><strong>Devo portare qualcosa?</strong> Sì, eventuali esami diagnostici e lista farmaci.</p>
                      </AnimatedSection>
                      <AnimatedSection animation="fade-right" delay={0.18}>
                        <p><strong>Come devo vestirmi?</strong> Abbigliamento comodo, la visita avviene in biancheria intima.</p>
                      </AnimatedSection>
                    </>
                  )}
                </div>
                <AnimatedSection animation="fade-up" delay={0.3}>
                  <Link to="/faq" className="pv-prepare__link">
                    Vedi tutte le FAQ
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </Link>
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pv-cta">
        <div className="pv-cta__bg">
          <div className="pv-cta__orb pv-cta__orb--1" />
          <div className="pv-cta__orb pv-cta__orb--2" />
        </div>
        <div className="container">
          <AnimatedSection animation="blur-up" className="pv-cta__inner">
            <span className="pv-cta__label">Inizia ora</span>
            <h2 className="pv-cta__title">Prenota la tua prima visita</h2>
            <p className="pv-cta__desc">
              Inizia il tuo percorso verso il benessere. Ti aspetto nel mio studio a Chieti Scalo.
            </p>
            <CTAButtons variant="hero" />
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
