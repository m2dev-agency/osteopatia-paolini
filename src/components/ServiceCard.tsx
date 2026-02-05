import { Link } from 'react-router-dom';
import type { Service } from '../data/services';
import './ServiceCard.css';

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  return (
    <Link 
      to={`/servizi/${service.slug}`} 
      className={`service-card ${featured ? 'service-card--featured' : ''}`}
    >
      <div className="service-card__icon">{service.icon}</div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__description">{service.shortDescription}</p>
      <div className="service-card__meta">
        <span className="service-card__price">{service.price}</span>
        <span className="service-card__duration">{service.duration}</span>
      </div>
      <span className="service-card__link">
        Scopri di più
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </span>
    </Link>
  );
}
