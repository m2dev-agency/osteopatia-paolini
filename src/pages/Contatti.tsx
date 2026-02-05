import { Hero } from '../components/Hero';
import { ContactForm } from '../components/ContactForm';
import { AnimatedSection, AnimatedText } from '../components/Animate';
import { contactInfo } from '../data/contact';
import './Contatti.css';

export function Contatti() {
  return (
    <main className="contatti-page">
      <Hero
        subtitle="Contatti"
        title="Contattami"
        description="Hai domande o vuoi prenotare una visita? Scegli il canale che preferisci per metterti in contatto con me."
        showCTA={false}
        size="medium"
      />

      <section className="section">
        <div className="container">
          <div className="contatti__grid">
            <div className="contatti__info">
              <AnimatedSection animation="fade-up" delay={0} className="contatti__card hover-lift">
                <h2>📍 Dove trovarmi</h2>
                <address>
                  <p><strong>{contactInfo.studio}</strong></p>
                  <p>{contactInfo.name}</p>
                  <p>{contactInfo.address.street}</p>
                  <p>{contactInfo.address.cap} {contactInfo.address.city} ({contactInfo.address.province})</p>
                </address>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contatti__directions"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                  </svg>
                  Indicazioni stradali
                </a>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0.1} className="contatti__card hover-lift">
                <h2>📞 Contatti diretti</h2>
                <div className="contatti__methods">
                  <a href={`tel:${contactInfo.phone}`} className="contatti__method">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span>{contactInfo.phoneDisplay}</span>
                  </a>
                  <a 
                    href={`https://wa.me/${contactInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contatti__method contatti__method--whatsapp"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                  <a href={`mailto:${contactInfo.email}`} className="contatti__method">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <span>{contactInfo.email}</span>
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0.2} className="contatti__card hover-lift">
                <h2>🕐 Orari di apertura</h2>
                <div className="contatti__hours">
                  <div>
                    <span>{contactInfo.hours.weekdays.days}</span>
                    <strong>{contactInfo.hours.weekdays.hours}</strong>
                  </div>
                  <div>
                    <span>{contactInfo.hours.saturday.days}</span>
                    <strong>{contactInfo.hours.saturday.hours}</strong>
                  </div>
                  <div>
                    <span>{contactInfo.hours.sunday.days}</span>
                    <strong>{contactInfo.hours.sunday.hours}</strong>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0.3} className="contatti__card hover-lift">
                <h2>💳 Metodi di pagamento</h2>
                <div className="contatti__payments">
                  {contactInfo.payments.map((p, i) => (
                    <span key={i} className="contatti__payment">{p}</span>
                  ))}
                </div>
                <p className="contatti__note">
                  Rilascio fattura sanitaria detraibile.
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fade-left" delay={0.2} className="contatti__form-wrapper">
              <h2>✉️ Invia un messaggio</h2>
              <p>Compila il modulo per richiedere informazioni o prenotare un appuntamento.</p>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <AnimatedSection animation="fade-up" className="contatti__map-section">
            <AnimatedText text="Come raggiungermi" as="h2" className="section__title" splitBy="word" animation="fade-up" staggerDelay={0.05} />
            <p className="contatti__parking">{contactInfo.parking}</p>
            <div className="contatti__map">
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
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
