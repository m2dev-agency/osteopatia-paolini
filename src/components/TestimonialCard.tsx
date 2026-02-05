import type { Testimonial } from '../data/testimonials';
import './TestimonialCard.css';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-card__rating">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="testimonial-card__star">⭐</span>
        ))}
      </div>
      <blockquote className="testimonial-card__text">
        "{testimonial.text}"
      </blockquote>
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
