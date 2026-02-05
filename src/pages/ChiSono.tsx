import { Hero } from '../components/Hero';
import { CTAButtons } from '../components/CTAButtons';
import { AnimatedSection, AnimatedText } from '../components/Animate';
import './ChiSono.css';

export function ChiSono() {
  return (
    <main className="chi-sono">
      <Hero
        subtitle="Chi Sono"
        title="Dott.ssa Martina Paolini"
        description="Osteopata e Fisioterapista - Il mio approccio al benessere parte dall'ascolto"
        showCTA={false}
        size="medium"
      />

      <section className="section">
        <div className="container">
          <div className="chi-sono__content">
            <AnimatedSection animation="scale" className="chi-sono__image">
              <div className="chi-sono__placeholder image-reveal">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M4 20c0-4 4-7 8-7s8 3 8 7"/>
                </svg>
                <span>Foto Dott.ssa Paolini</span>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-left" delay={0.2} className="chi-sono__text">
              <h2>La mia storia</h2>
              <p>
                Sono un'osteopata e fisioterapista appassionata del mio lavoro. Mi sono formata presso 
                l'<strong>AIOT (Accademia Italiana di Osteopatia Tradizionale)</strong> di Pescara, 
                una delle scuole più prestigiose in Italia, dove ho acquisito una solida preparazione 
                teorica e pratica.
              </p>
              <p>
                L'osteopatia è stata riconosciuta come professione sanitaria in Italia con la 
                <strong>Legge n. 3 del 2018</strong>, a conferma del suo valore terapeutico e 
                della sua efficacia clinica.
              </p>
              <p>
                Nel mio studio a Chieti Scalo accolgo pazienti di tutte le età: adulti, bambini, 
                donne in gravidanza e anziani. Ogni persona porta con sé una storia unica, 
                e il mio compito è ascoltarla per trovare insieme la strada verso il benessere.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="chi-sono__values">
            <AnimatedSection animation="fade-up" delay={0} className="value-card hover-lift">
              <div className="value-card__icon">👂</div>
              <h3>Ascolto</h3>
              <p>
                Ogni trattamento inizia dall'ascolto. Dedico tempo a comprendere la tua storia, 
                le tue abitudini e le tue aspettative.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={0.1} className="value-card hover-lift">
              <div className="value-card__icon">🔍</div>
              <h3>Visione globale</h3>
              <p>
                Non tratto solo il sintomo, ma ricerco la causa profonda del problema, 
                considerando il corpo come un'unità interconnessa.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={0.2} className="value-card hover-lift">
              <div className="value-card__icon">🤲</div>
              <h3>Approccio dolce</h3>
              <p>
                Utilizzo tecniche manuali delicate e precise, adattando sempre l'intensità 
                del trattamento alle esigenze del paziente.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={0.3} className="value-card hover-lift">
              <div className="value-card__icon">📚</div>
              <h3>Formazione continua</h3>
              <p>
                Mi aggiorno costantemente attraverso corsi e seminari per offrirti 
                le tecniche più efficaci e basate sull'evidenza.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="chi-sono__formation">
            <h2 className="section__title">Formazione e competenze</h2>
            <div className="formation-grid">
              <div className="formation-item">
                <h3>🎓 Formazione</h3>
                <ul>
                  <li>Diploma in Osteopatia - AIOT Pescara</li>
                  <li>Laurea in Fisioterapia</li>
                  <li>Formazione in Osteopatia Pediatrica</li>
                  <li>Corso di Osteopatia in Gravidanza</li>
                </ul>
              </div>
              <div className="formation-item">
                <h3>💼 Aree di competenza</h3>
                <ul>
                  <li>Osteopatia strutturale</li>
                  <li>Osteopatia cranio-sacrale</li>
                  <li>Osteopatia viscerale</li>
                  <li>Osteopatia in gravidanza</li>
                  <li>Osteopatia pediatrica</li>
                  <li>Fisioterapia</li>
                </ul>
              </div>
              <div className="formation-item">
                <h3>🩺 Patologie trattate</h3>
                <ul>
                  <li>Cervicalgia e lombalgia</li>
                  <li>Cefalea e emicrania</li>
                  <li>Sciatalgia e cruralgia</li>
                  <li>Problemi posturali</li>
                  <li>Reflusso gastroesofageo</li>
                  <li>Disturbi dell'ATM</li>
                  <li>Coliche del neonato</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cta">
        <div className="container">
          <div className="cta-section">
            <h2>Prenota una visita</h2>
            <p>Sarò felice di conoscerti e aiutarti a ritrovare il benessere.</p>
            <CTAButtons variant="hero" />
          </div>
        </div>
      </section>
    </main>
  );
}
