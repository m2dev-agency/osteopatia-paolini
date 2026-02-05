import { useState } from 'react';
import type { FAQ } from '../data/faq';
import './FAQItem.css';

interface FAQItemProps {
  faq: FAQ;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function FAQItem({ faq, isOpen = false, onToggle }: FAQItemProps) {
  const [localOpen, setLocalOpen] = useState(false);
  const open = onToggle ? isOpen : localOpen;
  const toggle = onToggle || (() => setLocalOpen(!localOpen));

  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button 
        className="faq-item__question"
        onClick={toggle}
        aria-expanded={open}
      >
        <span>{faq.question}</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <div className="faq-item__answer">
        <p>{faq.answer}</p>
      </div>
    </div>
  );
}
