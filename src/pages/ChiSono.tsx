import { Link } from 'react-router-dom';
import { CTAButtons } from '../components/CTAButtons';
import { AnimatedSection, AnimatedText } from '../components/Animate';
import './ChiSono.css';

const credentials = [
  { label: 'Formazione', value: 'AIOT Pescara' },
  { label: 'Specializzazione', value: 'Osteopatia & Fisioterapia' },
  { label: 'Pazienti', value: 'Adulti, Bambini, Gravidanza' },
  { label: 'Studio', value: 'Chieti Scalo' },
];

const philosophy = [
  {
    number: '01',
    title: 'Ascolto',
    text: 'Ogni trattamento inizia dall\'ascolto. Dedico tempo a comprendere la tua storia, le tue abitudini e le tue aspettative.',
  },
  {
    number: '02',
    title: 'Visione globale',
    text: 'Non tratto solo il sintomo, ma ricerco la causa profonda del problema, considerando il corpo come un\'unità interconnessa.',
  },
  {
    number: '03',
    title: 'Approccio dolce',
    text: 'Utilizzo tecniche manuali delicate e precise, adattando sempre l\'intensità del trattamento alle esigenze del paziente.',
  },
  {
    number: '04',
    title: 'Formazione continua',
    text: 'Mi aggiorno costantemente attraverso corsi e seminari per offrirti le tecniche più efficaci e basate sull\'evidenza.',
  },
];

const formation = [
  'Diploma in Osteopatia — AIOT Pescara',
  'Laurea in Fisioterapia',
  'Formazione in Osteopatia Pediatrica',
  'Corso di Osteopatia in Gravidanza',
];

const expertise = [
  'Osteopatia strutturale',
  'Osteopatia cranio-sacrale',
  'Osteopatia viscerale',
  'Osteopatia in gravidanza',
  'Osteopatia pediatrica',
  'Fisioterapia',
];

const conditions = [
  'Cervicalgia e lombalgia',
  'Cefalea e emicrania',
  'Sciatalgia e cruralgia',
  'Problemi posturali',
  'Reflusso gastroesofageo',
  'Disturbi dell\'ATM',
  'Coliche del neonato',
];

export function ChiSono() {
  return (
    <main className="chi-sono">

      {/* Hero — cinematic intro */}
      <section className="chi-sono-hero">
        <div className="chi-sono-hero__bg-shape chi-sono-hero__bg-shape--1" />
        <div className="chi-sono-hero__bg-shape chi-sono-hero__bg-shape--2" />
        <div className="container">
          <div className="chi-sono-hero__grid">
            <div className="chi-sono-hero__content">
              <AnimatedSection animation="fade-down" delay={0.1} triggerOnce>
                <span className="section__label">Chi Sono</span>
              </AnimatedSection>
              <AnimatedText
                text="Dott.ssa Martina Paolini"
                as="h1"
                className="chi-sono-hero__title"
                splitBy="word"
                animation="blur-up"
                staggerDelay={0.06}
                triggerOnce
              />
              <AnimatedSection animation="fade-up" delay={0.4} triggerOnce>
                <p className="chi-sono-hero__role">Osteopata &amp; Fisioterapista</p>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={0.55} triggerOnce>
                <p className="chi-sono-hero__intro">
                  Il mio approccio al benessere parte dall'ascolto. Credo che ogni corpo 
                  racconti una storia unica — il mio compito è comprenderla nella sua interezza 
                  per costruire insieme un percorso di cura.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={0.7} triggerOnce>
                <div className="chi-sono-hero__credentials">
                  {credentials.map((c) => (
                    <div key={c.label} className="chi-sono-hero__credential">
                      <span className="chi-sono-hero__credential-label">{c.label}</span>
                      <span className="chi-sono-hero__credential-value">{c.value}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection animation="scale" delay={0.3} triggerOnce className="chi-sono-hero__portrait">
              <div className="chi-sono-hero__portrait-frame">
                <div className="chi-sono-hero__portrait-placeholder">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M4 20c0-4 4-7 8-7s8 3 8 7"/>
                  </svg>
                  <span>Foto Professionale</span>
                </div>
                {/* Decorative badge */}
                <div className="chi-sono-hero__badge">
                  <span className="chi-sono-hero__badge-text">AIOT</span>
                  <span className="chi-sono-hero__badge-sub">Pescara</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Bio — split layout with editorial feel */}
      <section className="chi-sono-bio">
        <div className="container">
          <div className="chi-sono-bio__grid">
            <AnimatedSection animation="fade-right" delay={0.1} className="chi-sono-bio__left">
              <span className="chi-sono-bio__eyebrow">La mia storia</span>
              <AnimatedText
                text="Cura, passione e dedizione"
                as="h2"
                className="chi-sono-bio__heading"
                splitBy="word"
                animation="fade-up"
                staggerDelay={0.04}
              />
            </AnimatedSection>
            <AnimatedSection animation="fade-left" delay={0.2} className="chi-sono-bio__right">
              <p className="chi-sono-bio__lead">
                Mi sono formata presso l'<strong>AIOT (Accademia Italiana di Osteopatia Tradizionale)</strong> 
                di Pescara, una delle scuole più prestigiose in Italia, dove ho acquisito una solida 
                preparazione teorica e pratica.
              </p>
              <p>
                L'osteopatia è stata riconosciuta come professione sanitaria in Italia con la 
                <strong> Legge n. 3 del 2018</strong>, a conferma del suo valore terapeutico e 
                della sua efficacia clinica.
              </p>
              <p>
                Nel mio studio a Chieti Scalo accolgo pazienti di tutte le età: adulti, bambini, 
                donne in gravidanza e anziani. Ogni persona porta con sé una storia unica, e il mio 
                compito è ascoltarla per trovare insieme la strada verso il benessere.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy — numbered pillars */}
      <section className="chi-sono-philosophy">
        <div className="container">
          <AnimatedSection animation="fade-up" className="chi-sono-philosophy__header">
          <span className="section__label">Il mio approccio</span>
            <AnimatedText
              text="I pilastri del mio lavoro"
              as="h2"
              className="section__title"
              splitBy="word"
              animation="blur-up"
              staggerDelay={0.05}
            />
          </AnimatedSection>
          <div className="chi-sono-philosophy__grid">
            {philosophy.map((item, i) => (
              <AnimatedSection
                key={item.number}
                animation="fade-up"
                delay={i * 0.1}
                className="philosophy-card"
              >
                <span className="philosophy-card__number">{item.number}</span>
                <div className="philosophy-card__line" />
                <h3 className="philosophy-card__title">{item.title}</h3>
                <p className="philosophy-card__text">{item.text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Competenze — editorial 3-column */}
      <section className="chi-sono-competenze">
        <div className="container">
          <AnimatedSection animation="fade-up" className="chi-sono-competenze__header">
            <span className="section__label">Competenze</span>
            <AnimatedText
              text="Formazione e specializzazioni"
              as="h2"
              className="section__title"
              splitBy="word"
              animation="fade-up"
              staggerDelay={0.04}
            />
          </AnimatedSection>
          <div className="competenze-grid">
            <AnimatedSection animation="fade-up" delay={0.1} className="competenze-column">
              <h3 className="competenze-column__title">
                <span className="competenze-column__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5"/></svg>
                </span>
                Formazione
              </h3>
              <ul className="competenze-list">
                {formation.map((item) => (
                  <li key={item} className="competenze-list__item">{item}</li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={0.2} className="competenze-column">
              <h3 className="competenze-column__title">
                <span className="competenze-column__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                </span>
                Aree di competenza
              </h3>
              <ul className="competenze-list">
                {expertise.map((item) => (
                  <li key={item} className="competenze-list__item">{item}</li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={0.3} className="competenze-column">
              <h3 className="competenze-column__title">
                <span className="competenze-column__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><path d="M22 10 A2 2 0 0 1 20 12 A2 2 0 0 1 18 10 A2 2 0 0 1 22 10"/></svg>
                </span>
                Patologie trattate
              </h3>
              <ul className="competenze-list">
                {conditions.map((item) => (
                  <li key={item} className="competenze-list__item">{item}</li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA — refined */}
      <section className="chi-sono-cta">
        <div className="container">
          <AnimatedSection animation="blur-up" className="chi-sono-cta__inner">
            <AnimatedText
              text="Prenota una visita"
              as="h2"
              className="chi-sono-cta__title"
              splitBy="word"
              animation="fade-up"
              staggerDelay={0.04}
            />
            <p className="chi-sono-cta__text">
              Sarò felice di conoscerti e aiutarti a ritrovare il benessere.
            </p>
            <CTAButtons variant="hero" />
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
