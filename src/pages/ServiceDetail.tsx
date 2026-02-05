import { useParams, Link, Navigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { CTAButtons } from '../components/CTAButtons';
import { ServiceCard } from '../components/ServiceCard';
import { getServiceBySlug, services } from '../data/services';
import './ServiceDetail.css';

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/servizi" replace />;
  }

  const relatedServices = services
    .filter(s => s.id !== service.id)
    .slice(0, 3);

  return (
    <main className="service-detail">
      <Hero
        subtitle={service.price}
        title={service.title}
        description={service.shortDescription}
        showCTA={false}
        size="medium"
      />

      <section className="section">
        <div className="container">
          <div className="service-detail__content">
            <div className="service-detail__main">
              <div className="service-detail__icon">{service.icon}</div>
              
              <div className="service-detail__section">
                <h2>Di cosa si tratta</h2>
                <p>{service.description}</p>
              </div>

              <div className="service-detail__section">
                <h2>Benefici del trattamento</h2>
                <ul className="service-detail__list">
                  {service.benefits.map((benefit, i) => (
                    <li key={i}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-detail__section">
                <h2>Per chi è indicato</h2>
                <ul className="service-detail__tags">
                  {service.forWhom.map((who, i) => (
                    <li key={i}>{who}</li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="service-detail__sidebar">
              <div className="service-detail__card">
                <h3>Informazioni</h3>
                <div className="service-detail__info">
                  <div>
                    <span className="label">Prezzo</span>
                    <span className="value">{service.price}</span>
                  </div>
                  <div>
                    <span className="label">Durata</span>
                    <span className="value">{service.duration}</span>
                  </div>
                </div>
                <CTAButtons variant="inline" />
              </div>

              <div className="service-detail__card service-detail__card--light">
                <h4>💡 Lo sapevi?</h4>
                <p>
                  L'osteopatia è una professione sanitaria riconosciuta in Italia dalla Legge n. 3 del 2018. 
                  I trattamenti sono detraibili fiscalmente.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__header">
            <h2 className="section__title">Altri trattamenti</h2>
            <p className="section__description">
              Scopri gli altri servizi che offro nel mio studio.
            </p>
          </div>
          <div className="related-services">
            {relatedServices.map(s => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
          <div className="section__footer">
            <Link to="/servizi" className="btn btn--outline">
              Vedi tutti i servizi
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--cta">
        <div className="container">
          <div className="cta-section">
            <h2>Prenota il tuo {service.title}</h2>
            <p>Contattami per fissare un appuntamento.</p>
            <CTAButtons variant="hero" />
          </div>
        </div>
      </section>
    </main>
  );
}
