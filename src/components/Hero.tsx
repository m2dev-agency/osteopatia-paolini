import { Link } from 'react-router-dom';
import { CTAButtons } from './CTAButtons';
import { AnimatedSection, AnimatedText } from './Animate';
import './Hero.css';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  showCTA?: boolean;
  backgroundImage?: string;
  size?: 'large' | 'medium' | 'small';
}

export function Hero({ 
  title, 
  subtitle, 
  description, 
  showCTA = true, 
  size = 'large' 
}: HeroProps) {
  return (
    <section className={`hero hero--${size}`}>
      <div className="hero__background">
        <div className="hero__gradient"></div>
      </div>
      <div className="hero__container">
        {subtitle && (
          <AnimatedSection animation="fade-down" delay={0.1} triggerOnce>
            <span className="hero__subtitle">{subtitle}</span>
          </AnimatedSection>
        )}
        <AnimatedText 
          text={title} 
          as="h1" 
          className="hero__title"
          splitBy="word"
          animation="blur-up"
          staggerDelay={0.06}
          duration={0.7}
          triggerOnce
        />
        {description && (
          <AnimatedSection animation="fade-up" delay={0.4} triggerOnce>
            <p className="hero__description">{description}</p>
          </AnimatedSection>
        )}
        {showCTA && size === 'large' && (
          <AnimatedSection animation="scale-up" delay={0.6} triggerOnce className="hero__cta">
            <CTAButtons variant="hero" />
          </AnimatedSection>
        )}
        {size === 'large' && (
          <AnimatedSection animation="fade-up" delay={0.8} triggerOnce className="hero__trust">
            <div className="hero__trust-item">
              <span className="hero__trust-icon">⭐</span>
              <span>29 recensioni positive</span>
            </div>
            <div className="hero__trust-item">
              <span className="hero__trust-icon">📍</span>
              <span>Chieti Scalo</span>
            </div>
            <div className="hero__trust-item">
              <span className="hero__trust-icon">🕐</span>
              <span>Lun-Ven 9-19</span>
            </div>
          </AnimatedSection>
        )}
      </div>
      {size === 'large' && (
        <AnimatedSection animation="fade" delay={1.2} triggerOnce className="hero__scroll">
          <Link to="#servizi" aria-label="Scorri per scoprire di più">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </Link>
        </AnimatedSection>
      )}
    </section>
  );
}
