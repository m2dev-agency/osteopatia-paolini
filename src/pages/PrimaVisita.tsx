import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { CTAButtons } from '../components/CTAButtons';
import { FAQItem } from '../components/FAQItem';
import { AnimatedSection, AnimatedText } from '../components/Animate';
import { faqs } from '../data/faq';
import './PrimaVisita.css';

export function PrimaVisita() {
  const visitaFaqs = faqs.filter(f => 
    f.question.toLowerCase().includes('sedut') || 
    f.question.toLowerCase().includes('prepar') ||
    f.question.toLowerCase().includes('dura')
  );

  return (
    <main className="prima-visita">
      <Hero
        subtitle="Prima Visita"
        title="La tua prima visita osteopatica"
        description="Cosa aspettarti dal primo incontro: un momento fondamentale per conoscerti e impostare il tuo percorso di benessere."
        showCTA={false}
        size="medium"
      />

      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-up" className="prima-visita__intro">
            <div className="prima-visita__info">
              <div className="prima-visita__badge">
                <span className="prima-visita__price">60€</span>
                <span className="prima-visita__duration">60 minuti</span>
              </div>
              <p>
                La prima visita è molto più di un semplice trattamento: è il momento in cui costruiamo 
                insieme le basi del tuo percorso verso il benessere. Attraverso un'attenta analisi della 
                tua storia clinica e una valutazione approfondita, identifico le cause profonde del tuo 
                disagio e definisco la strategia terapeutica più efficace per te.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <AnimatedSection animation="fade-up" className="section__header">
            <AnimatedText text="Come si svolge la visita" as="h2" className="section__title" splitBy="word" animation="fade-up" staggerDelay={0.05} />
          </AnimatedSection>
          <div className="prima-visita__steps">
            <AnimatedSection animation="fade-right" delay={0.1} className="pv-step hover-lift">
              <div className="pv-step__header">
                <span className="pv-step__number">1</span>
                <h3>Accoglienza</h3>
              </div>
              <p>
                Ti accolgo personalmente e ti faccio accomodare. Prima della visita, 
                ti chiederò di compilare una breve scheda con i tuoi dati e la tua storia clinica.
              </p>
              <span className="pv-step__time">5-10 min</span>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={0.2} className="pv-step hover-lift">
              <div className="pv-step__header">
                <span className="pv-step__number">2</span>
                <h3>Anamnesi</h3>
              </div>
              <p>
                Attraverso un colloquio approfondito, ripercorriamo la tua storia: traumi passati, 
                stile di vita, tipo di lavoro, sport praticati, disturbi attuali e precedenti. 
                Ogni dettaglio può essere importante.
              </p>
              <span className="pv-step__time">15-20 min</span>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={0.3} className="pv-step hover-lift">
              <div className="pv-step__header">
                <span className="pv-step__number">3</span>
                <h3>Valutazione osteopatica</h3>
              </div>
              <p>
                Procedo con l'esame obiettivo: osservazione posturale, test di mobilità, 
                palpazione delle strutture corporee. Questo mi permette di individuare 
                le aree di disfunzione e le loro correlazioni.
              </p>
              <span className="pv-step__time">10-15 min</span>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={0.4} className="pv-step hover-lift">
              <div className="pv-step__header">
                <span className="pv-step__number">4</span>
                <h3>Trattamento</h3>
              </div>
              <p>
                Inizio il trattamento osteopatico, utilizzando le tecniche più appropriate 
                per il tuo caso: manipolazioni dolci, tecniche mio-fasciali, cranio-sacrali 
                o viscerali, a seconda delle necessità.
              </p>
              <span className="pv-step__time">20-25 min</span>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={0.5} className="pv-step hover-lift">
              <div className="pv-step__header">
                <span className="pv-step__number">5</span>
                <h3>Conclusione e piano</h3>
              </div>
              <p>
                Ti spiego cosa ho trovato e il piano terapeutico consigliato: frequenza 
                delle sedute, esercizi da fare a casa, eventuali accorgimenti per la vita quotidiana.
              </p>
              <span className="pv-step__time">5-10 min</span>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="prima-visita__prepare">
            <AnimatedSection animation="fade-up" delay={0.1} className="prepare-card hover-lift">
              <h2>📋 Come prepararti</h2>
              <ul>
                <li>Porta con te eventuali esami diagnostici recenti (radiografie, risonanze, ecografie, analisi del sangue)</li>
                <li>Prepara un elenco dei farmaci che assumi regolarmente</li>
                <li>Indossa abbigliamento comodo e intimo (la visita avviene in biancheria intima)</li>
                <li>Non fare pasti abbondanti nelle 2 ore precedenti la visita</li>
                <li>Arriva 10 minuti prima per compilare la scheda anamnestica con tranquillità</li>
              </ul>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={0.2} className="prepare-card hover-lift">
              <h2>❓ Domande frequenti</h2>
              <p>Hai dubbi sulla prima visita? Ecco le risposte alle domande più comuni:</p>
              <div className="prepare-faqs">
                {visitaFaqs.length > 0 ? (
                  visitaFaqs.map(faq => <FAQItem key={faq.id} faq={faq} />)
                ) : (
                  <>
                    <p><strong>Devo portare qualcosa?</strong> Sì, eventuali esami diagnostici e lista farmaci.</p>
                    <p><strong>Come devo vestirmi?</strong> Abbigliamento comodo, la visita avviene in biancheria intima.</p>
                  </>
                )}
              </div>
              <Link to="/faq" className="btn btn--outline">
                Vedi tutte le FAQ
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section section--cta">
        <div className="container">
          <AnimatedSection animation="blur-up" className="cta-section">
            <h2>Prenota la tua prima visita</h2>
            <p>Inizia il tuo percorso verso il benessere. Ti aspetto nel mio studio a Chieti Scalo.</p>
            <CTAButtons variant="hero" />
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
