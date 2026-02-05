import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ServicesShowcase } from '../components/ServicesShowcase';
import { TestimonialCard } from '../components/TestimonialCard';
import { FAQItem } from '../components/FAQItem';
import { CTAButtons } from '../components/CTAButtons';
import { AnimatedSection, AnimatedText } from '../components/Animate';
import { testimonials } from '../data/testimonials';
import { faqs } from '../data/faq';
import { contactInfo } from '../data/contact';
import './Home.css';

export function Home() {
  const mainFaqs = faqs.slice(0, 4);

  return (
    <main className="home">
      <Hero
        subtitle="Osteopatia a Chieti Scalo"
        title="Ti aiuto a ritrovare il benessere attraverso il movimento"
        description="Trattamenti osteopatici personalizzati per adulti, bambini e gravidanza. 
        Risolvi dolori, tensioni e blocchi con un approccio naturale e professionale."
        showCTA={true}
        size="large"
      />

      {/* Servizi Principali */}
      <ServicesShowcase />

      {/* Cosa Aspettarsi */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection animation="fade-up" className="section__header">
            <AnimatedText 
              text="Cosa aspettarsi dalla visita" 
              as="h2" 
              className="section__title"
              splitBy="word"
              animation="fade-up"
              staggerDelay={0.05}
            />
          </AnimatedSection>
          <div className="steps">
            <AnimatedSection animation="fade-right" delay={0.1} className="step">
              <div className="step__number">1</div>
              <h3 className="step__title">Anamnesi e Ascolto</h3>
              <p className="step__text">
                Iniziamo con un colloquio approfondito per comprendere la tua storia clinica, 
                il tuo stile di vita e le tue aspettative.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-right" delay={0.2} className="step">
              <div className="step__number">2</div>
              <h3 className="step__title">Valutazione e Diagnosi</h3>
              <p className="step__text">
                Attraverso test specifici e palpazione, identifico le aree di disfunzione 
                e le cause profonde del tuo disagio.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-right" delay={0.3} className="step">
              <div className="step__number">3</div>
              <h3 className="step__title">Trattamento Manuale</h3>
              <p className="step__text">
                Utilizzo tecniche manuali dolci e precise per ripristinare la mobilità 
                e favorire i naturali processi di guarigione.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-right" delay={0.4} className="step">
              <div className="step__number">4</div>
              <h3 className="step__title">Piano Personalizzato</h3>
              <p className="step__text">
                Ti fornisco indicazioni ed esercizi da fare a casa, 
                oltre a un piano di trattamento per raggiungere i tuoi obiettivi.
              </p>
            </AnimatedSection>
          </div>
          <AnimatedSection animation="fade-up" delay={0.5} className="section__footer">
            <Link to="/prima-visita" className="btn btn--primary">
              Scopri la prima visita
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Chi Sono - Intro */}
      <section className="section">
        <div className="container">
          <div className="about-intro">
            <AnimatedSection animation="fade-right" className="about-intro__content">
              <AnimatedText 
                text="Dott.ssa Martina Paolini" 
                as="h2" 
                className="section__title"
                splitBy="word"
                animation="blur-up"
                staggerDelay={0.06}
              />
              <p className="about-intro__subtitle">Osteopata e Fisioterapista</p>
              <p className="about-intro__text">
                Sono un'osteopata e fisioterapista formata presso l'AIOT (Accademia Italiana di Osteopatia Tradizionale) 
                di Pescara. Il mio approccio si basa sull'ascolto del paziente e sulla visione globale del corpo: 
                ogni sintomo racconta una storia che va compresa nella sua interezza.
              </p>
              <p className="about-intro__text">
                Nel mio studio a Chieti Scalo accolgo adulti, bambini e donne in gravidanza, 
                offrendo un ambiente sereno dove prendersi cura del proprio benessere.
              </p>
              <Link to="/chi-sono" className="btn btn--outline">
                Scopri di più su di me
              </Link>
            </AnimatedSection>
            <AnimatedSection animation="scale" delay={0.2} className="about-intro__image">
              <div className="about-intro__placeholder image-reveal">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M4 20c0-4 4-7 8-7s8 3 8 7"/>
                </svg>
                <span>Foto Dott.ssa Paolini</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonianze */}
      <section className="testimonials-section">
        <div className="testimonials-section__bg-shape" />
        <div className="container">
          <AnimatedSection animation="fade-up" className="testimonials-section__header">
            <AnimatedText 
              text="Cosa dicono i pazienti" 
              as="h2" 
              className="testimonials-section__title"
              splitBy="word"
              animation="blur-up"
              staggerDelay={0.05}
            />
            <p className="testimonials-section__subtitle">
              La soddisfazione di chi si è affidato a me è la migliore conferma del mio lavoro.
            </p>
          </AnimatedSection>

          <div className="testimonials-masonry">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <AnimatedSection
                key={testimonial.id}
                animation="fade-up"
                delay={index * 0.12}
                className="testimonial-item"
              >
                <TestimonialCard testimonial={testimonial} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={0.5} className="testimonials-section__footer">
            <div className="testimonials-trust">
              <div className="testimonials-trust__stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--color-primary)" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <span className="testimonials-trust__text">
                <strong>29 recensioni</strong> su MioDottore
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-up" className="section__header">
            <AnimatedText 
              text="Hai delle domande?" 
              as="h2" 
              className="section__title"
              splitBy="word"
              animation="fade-up"
              staggerDelay={0.06}
            />
          </AnimatedSection>
          <div className="faq-preview">
            {mainFaqs.map((faq, index) => (
              <AnimatedSection key={faq.id} animation="fade-left" delay={index * 0.1}>
                <FAQItem faq={faq} />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection animation="fade-up" delay={0.4} className="section__footer">
            <Link to="/faq" className="btn btn--outline">
              Vedi tutte le FAQ
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Dove Siamo */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection animation="fade-up" className="section__header">
            <AnimatedText 
              text="Lo studio a Chieti Scalo" 
              as="h2" 
              className="section__title"
              splitBy="word"
              animation="fade-up"
              staggerDelay={0.05}
            />
          </AnimatedSection>
          <div className="location">
            <div className="location__info">
              <AnimatedSection animation="fade-up" delay={0.1} className="location__card hover-lift">
                <h3>Indirizzo</h3>
                <p>{contactInfo.address.full}</p>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={0.2} className="location__card hover-lift">
                <h3>Orari</h3>
                <p><strong>{contactInfo.hours.weekdays.days}:</strong> {contactInfo.hours.weekdays.hours}</p>
                <p><strong>{contactInfo.hours.saturday.days}:</strong> {contactInfo.hours.saturday.hours}</p>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={0.3} className="location__card hover-lift">
                <h3>Contatti</h3>
                <p><a href={`tel:${contactInfo.phone}`}>{contactInfo.phoneDisplay}</a></p>
                <p><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={0.4} className="location__card hover-lift">
                <h3>Parcheggio</h3>
                <p>{contactInfo.parking}</p>
              </AnimatedSection>
            </div>
            <AnimatedSection animation="clip-left" delay={0.2} className="location__map">
              <iframe
                src={contactInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Studio Osteopatia Paolini"
              ></iframe>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Finale */}
      <section className="section section--cta">
        <div className="container">
          <AnimatedSection animation="blur-up" className="cta-section">
            <AnimatedText 
              text="Pronto a ritrovare il benessere?" 
              as="h2"
              splitBy="word"
              animation="fade-up"
              staggerDelay={0.04}
            />
            <p>Prenota la tua visita osteopatica e inizia il tuo percorso verso una vita senza dolore.</p>
            <CTAButtons variant="hero" />
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
