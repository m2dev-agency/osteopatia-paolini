import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedText } from './Animate';
import { services } from '../data/services';
import './ServicesShowcase.css';

const featuredServices = services.slice(0, 4);

// Map service index to a visual accent color
const accents = [
  { bg: 'linear-gradient(135deg, #2D5A45 0%, #4A8B6F 100%)' },
  { bg: 'linear-gradient(135deg, #3B6F54 0%, #5CA07A 100%)' },
  { bg: 'linear-gradient(135deg, #1a3d2e 0%, #2D5A45 100%)' },
  { bg: 'linear-gradient(135deg, #4A8B6F 0%, #6BB896 100%)' },
];

export function ServicesShowcase() {
  return (
    <section id="servizi" className="services-showcase">
      {/* Decorative background elements */}
      <div className="services-showcase__bg-shape services-showcase__bg-shape--1" />
      <div className="services-showcase__bg-shape services-showcase__bg-shape--2" />

      <div className="container">
        <AnimatedSection animation="fade-up" className="services-showcase__header">
          <span className="section__label">Servizi</span>
          <AnimatedText
            text="Come posso aiutarti"
            as="h2"
            className="services-showcase__title"
            splitBy="word"
            animation="blur-up"
            staggerDelay={0.06}
          />
          <p className="services-showcase__subtitle">
            Percorsi terapeutici su misura che combinano diverse tecniche 
            osteopatiche per rispondere alle tue esigenze.
          </p>
        </AnimatedSection>

        <div className="services-bento">
          {featuredServices.map((service, index) => {
            const accent = accents[index % accents.length];
            const isLarge = index === 0 || index === 3;

            return (
              <AnimatedSection 
                key={service.id}
                animation="scale-up"
                delay={index * 0.08}
                className={`bento-card ${isLarge ? 'bento-card--large' : ''}`}
              >
                <Link to={`/servizi/${service.slug}`} className="bento-card__inner">
                  {/* Gradient overlay that reveals on hover */}
                  <div 
                    className="bento-card__gradient"
                    style={{ background: accent.bg }}
                  />

                  {/* Card content */}
                  <div className="bento-card__content">
                    <span className="bento-card__number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    
                    <div className="bento-card__icon">{service.icon}</div>
                    
                    <h3 className="bento-card__title">{service.title}</h3>
                    
                    <p className="bento-card__description">
                      {service.shortDescription}
                    </p>

                    <div className="bento-card__footer">
                      <div className="bento-card__meta">
                        <span className="bento-card__price">{service.price}</span>
                        <span className="bento-card__divider">·</span>
                        <span className="bento-card__duration">{service.duration}</span>
                      </div>
                      <span className="bento-card__arrow">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Decorative corner shape */}
                  <svg className="bento-card__corner" viewBox="0 0 100 100" fill="none">
                    <circle cx="100" cy="0" r="80" stroke="currentColor" strokeWidth="0.5" opacity="0.15"/>
                    <circle cx="100" cy="0" r="50" stroke="currentColor" strokeWidth="0.5" opacity="0.1"/>
                  </svg>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection animation="fade-up" delay={0.5} className="services-showcase__cta">
          <Link to="/servizi" className="services-showcase__link">
            <span className="services-showcase__link-text">Esplora tutti i servizi</span>
            <span className="services-showcase__link-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
