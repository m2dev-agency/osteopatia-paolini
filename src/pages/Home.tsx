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

      {/* Lo Studio */}
      <section className="studio-section">
        <div className="studio-section__map-wrap">
          <iframe
            src={contactInfo.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, pointerEvents: 'none' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa Studio Osteopatia Paolini"
          />
          <div className="studio-section__map-fade" />
        </div>

        <div className="container">
          <div className="studio-section__content">
            <AnimatedSection animation="fade-up" className="studio-section__cta">
              <AnimatedText 
                text="Pronto a ritrovare il benessere?" 
                as="h2"
                className="studio-section__title"
                splitBy="word"
                animation="blur-up"
                staggerDelay={0.06}
              />
              <p className="studio-section__subtitle">
                <span>
                  Prenota la tua visita osteopatica e inizia il tuo percorso verso una vita senza dolore.
                </span>
              </p>
            </AnimatedSection>


            <div className="studio-cards">
              <AnimatedSection animation="fade-up" delay={0.1} className="studio-card">
                <div className="studio-card__left">
                  <div className="studio-card__icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="studio-card__body">
                    <h3>Indirizzo</h3>
                    <p>{contactInfo.address.full}</p>
                    <p style={{ marginTop: '0.25rem' }}>
                      <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                    </p>
                  </div>
                </div>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(contactInfo.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="studio-card__directions btn-prenota"
                  aria-label="Apri indicazioni stradali"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                  </svg>
                  <span>Indicazioni</span>
                </a>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0.2} className="studio-card">
                <div className="studio-card__left">
                  <div className="studio-card__icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div className="studio-card__body">
                    <h3>Orari</h3>
                    <p><strong>{contactInfo.hours.weekdays.days}</strong> — {contactInfo.hours.weekdays.hours}</p>
                    <p><strong>{contactInfo.hours.saturday.days}</strong> — {contactInfo.hours.saturday.hours}</p>
                  </div>
                </div>
                <Link
                  to="/prenota"
                  className="studio-card__directions btn-prenota"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span>Prenota</span>
                </Link>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={0.3} className="studio-card">
                <div className="studio-card__left">
                  <div className="studio-card__icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className="studio-card__body">
                    <h3>Contatti</h3>
                    <p><a href={`tel:${contactInfo.phone}`}>{contactInfo.phoneDisplay}</a></p>
                    <p><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
                  </div>
                </div>
                <div className="studio-card__actions">
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent('Buongiorno, vorrei prenotare un appuntamento.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="studio-card__directions studio-card__directions--whatsapp"
                  >
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                   </svg>
                  </a>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="studio-card__directions"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
