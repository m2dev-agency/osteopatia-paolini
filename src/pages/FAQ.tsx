import { useState } from 'react';
import { Hero } from '../components/Hero';
import { FAQItem } from '../components/FAQItem';
import { CTAButtons } from '../components/CTAButtons';
import { AnimatedSection } from '../components/Animate';
import { faqs } from '../data/faq';
import './FAQ.css';

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('tutte');

  const categories = [
    { id: 'tutte', label: 'Tutte' },
    { id: 'generale', label: 'Generali' },
    { id: 'trattamenti', label: 'Trattamenti' },
    { id: 'pratico', label: 'Info pratiche' }
  ];

  const filteredFaqs = activeCategory === 'tutte' 
    ? faqs 
    : faqs.filter(f => f.category === activeCategory);

  return (
    <main className="faq-page">
      <Hero
        subtitle="FAQ"
        title="Domande frequenti"
        description="Tutto quello che devi sapere sull'osteopatia e sui miei trattamenti. Non trovi la risposta? Contattami!"
        showCTA={false}
        size="medium"
      />

      <section className="section">
        <div className="container">
          <AnimatedSection animation="fade-up" className="faq-page__filters">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`faq-filter ${activeCategory === cat.id ? 'faq-filter--active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </AnimatedSection>

          <div className="faq-page__list">
            {filteredFaqs.map((faq, index) => (
              <AnimatedSection key={faq.id} animation="fade-left" delay={index * 0.05}>
                <FAQItem 
                  faq={faq} 
                  isOpen={openId === faq.id}
                  onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <AnimatedSection animation="scale-up" className="faq-page__contact">
            <h2>Non hai trovato la risposta?</h2>
            <p>
              Contattami direttamente per qualsiasi domanda o dubbio. 
              Sarò felice di aiutarti!
            </p>
            <CTAButtons variant="section" />
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
