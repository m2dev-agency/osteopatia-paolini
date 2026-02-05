import { Link } from 'react-router-dom';
import { contactInfo } from '../data/contact';
import './Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2"/>
                <path d="M20 8C14 10 10 16 10 23C10 30 14 35 20 37C26 35 30 30 30 23C30 16 26 10 20 8Z" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="20" cy="16" r="3" fill="currentColor"/>
                <path d="M16 24Q20 28, 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>{contactInfo.name}</span>
            </div>
            <p className="footer__desc">
              Osteopata e Fisioterapista a Chieti Scalo. Trattamenti personalizzati per adulti, 
              bambini e gravidanza. Il benessere inizia dal movimento.
            </p>
            <div className="footer__social">
              <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__links">
            <h4>Navigazione</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/servizi">Servizi</Link></li>
              <li><Link to="/prima-visita">Prima Visita</Link></li>
              <li><Link to="/chi-sono">Chi Sono</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contatti">Contatti</Link></li>
            </ul>
          </div>

          <div className="footer__links">
            <h4>Trattamenti</h4>
            <ul>
              <li><Link to="/servizi/cervicalgia">Cervicalgia</Link></li>
              <li><Link to="/servizi/lombalgia">Lombalgia</Link></li>
              <li><Link to="/servizi/cefalea">Cefalea</Link></li>
              <li><Link to="/servizi/gravidanza">Osteopatia in Gravidanza</Link></li>
              <li><Link to="/servizi/pediatria">Osteopatia Pediatrica</Link></li>
              <li><Link to="/servizi/postura">Valutazione Posturale</Link></li>
            </ul>
          </div>

          <div className="footer__contact">
            <h4>Contatti</h4>
            <address>
              <p>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {contactInfo.address.full}
              </p>
              <p>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phoneDisplay}</a>
              </p>
              <p>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </p>
            </address>
            <div className="footer__hours">
              <p><strong>{contactInfo.hours.weekdays.days}:</strong> {contactInfo.hours.weekdays.hours}</p>
              <p><strong>{contactInfo.hours.saturday.days}:</strong> {contactInfo.hours.saturday.hours}</p>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {currentYear} Studio di Osteopatia Dott.ssa Martina Paolini. Tutti i diritti riservati.</p>
          <div className="footer__legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/cookie">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
