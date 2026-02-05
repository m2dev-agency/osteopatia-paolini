import type { Testimonial } from '../data/testimonials';
import './TestimonialCard.css';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="testimonial-card">
      {/* Oversized quote mark */}
      <svg className="testimonial-card__quote" width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path 
          d="M11 7.5C11 4.46 8.54 2 5.5 2S0 4.46 0 7.5c0 4.14 3.36 7.5 7.5 7.5.28 0 .5.22.5.5v1c0 3.04-2.46 5.5-5.5 5.5-.28 0-.5.22-.5.5s.22.5.5.5C6.85 23 11 18.85 11 14.5V7.5zm13 0C24 4.46 21.54 2 18.5 2S13 4.46 13 7.5c0 4.14 3.36 7.5 7.5 7.5.28 0 .5.22.5.5v1c0 3.04-2.46 5.5-5.5 5.5-.28 0-.5.22-.5.5s.22.5.5.5C19.85 23 24 18.85 24 14.5V7.5z" 
          fill="currentColor"
        />
      </svg>

      <blockquote className="testimonial-card__text">
        {testimonial.text}
      </blockquote>

      <div className="testimonial-card__rating">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--color-primary)" stroke="none">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        ))}
      </div>

      <footer className="testimonial-card__footer">
        <div className="testimonial-card__avatar">
          {testimonial.name.charAt(0)}
        </div>
        <div className="testimonial-card__info">
          <cite className="testimonial-card__name">{testimonial.name}</cite>
          <span className="testimonial-card__problem">{testimonial.problem}</span>
        </div>
      </footer>
    </article>
  );
}
