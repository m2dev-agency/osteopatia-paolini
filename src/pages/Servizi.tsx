import { Hero } from '../components/Hero';
import { ServiceCard } from '../components/ServiceCard';
import { CTAButtons } from '../components/CTAButtons';
import { AnimatedSection, AnimatedText } from '../components/Animate';
import { services } from '../data/services';
import './Servizi.css';

export function Servizi() {
  const trattamenti = services.filter(s => !['prima-visita', 'visita-controllo'].includes(s.id));
  const visite = services.filter(s => ['prima-visita', 'visita-controllo'].includes(s.id));

  return (
    <main className="servizi-page">
      <Hero
        subtitle="Servizi"
        title="Trattamenti osteopatici"
        description="Ogni percorso terapeutico è personalizzato sulle tue esigenze. Scopri i servizi che offro nel mio studio a Chieti Scalo."
        showCTA={false}
        size="medium"
      />

      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-up" className="section__header">
            <AnimatedText text="Visite osteopatiche" as="h2" className="section__title" splitBy="word" animation="fade-up" staggerDelay={0.05} />
            <p className="section__description">
              La prima visita è il momento fondamentale per conoscerci e impostare il percorso terapeutico. 
              Le visite di controllo servono a consolidare i risultati.
            </p>
          </AnimatedSection>
          <div className="servizi-grid servizi-grid--large">
            {visite.map((service, index) => (
              <AnimatedSection key={service.id} animation="scale-up" delay={index * 0.15} className="hover-lift">
                <ServiceCard service={service} featured />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <AnimatedSection animation="fade-up" className="section__header">
            <AnimatedText text="Trattamenti specifici" as="h2" className="section__title" splitBy="word" animation="fade-up" staggerDelay={0.05} />
            <p className="section__description">
              Trattamenti mirati per le problematiche più comuni. Clicca su ciascun servizio 
              per scoprire come posso aiutarti.
            </p>
          </AnimatedSection>
          <div className="servizi-grid">
            {trattamenti.map((service, index) => (
              <AnimatedSection key={service.id} animation="fade-up" delay={index * 0.08} className="hover-lift">
                <ServiceCard service={service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pricing-info">
            <h2>Informazioni sui prezzi</h2>
            <div className="pricing-cards">
              <div className="pricing-card">
                <h3>Prima Visita</h3>
                <div className="pricing-card__price">60€</div>
                <ul>
                  <li>Durata: 60 minuti</li>
                  <li>Anamnesi completa</li>
                  <li>Valutazione posturale</li>
                  <li>Primo trattamento</li>
                  <li>Piano terapeutico</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h3>Visita di Controllo</h3>
                <div className="pricing-card__price">da 40€</div>
                <ul>
                  <li>Durata: 45 minuti</li>
                  <li>Valutazione progressi</li>
                  <li>Trattamento manuale</li>
                  <li>Esercizi personalizzati</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h3>Trattamenti Speciali</h3>
                <div className="pricing-card__price">da 45€</div>
                <ul>
                  <li>Gravidanza: 50€</li>
                  <li>Pediatria: 45€</li>
                  <li>Linfodrenaggio: 50€</li>
                  <li>Valutazione posturale: 50€</li>
                </ul>
              </div>
            </div>
            <div className="pricing-note">
              <p>
                <strong>Metodi di pagamento:</strong> Contanti, Carta, Satispay, PayPal<br/>
                Rilascio fattura sanitaria detraibile.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cta">
        <div className="container">
          <div className="cta-section">
            <h2>Prenota il tuo trattamento</h2>
            <p>Scegli il canale che preferisci per prenotare la tua visita.</p>
            <CTAButtons variant="hero" />
          </div>
        </div>
      </section>
    </main>
  );
}
