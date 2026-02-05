import { useState, type FormEvent } from 'react';
import './ContactForm.css';

interface FormData {
  nome: string;
  telefono: string;
  email: string;
  servizio: string;
  messaggio: string;
  privacy: boolean;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    telefono: '',
    email: '',
    servizio: '',
    messaggio: '',
    privacy: false
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulazione invio - in produzione collegare a un backend
    setTimeout(() => {
      setStatus('success');
      setFormData({
        nome: '',
        telefono: '',
        email: '',
        servizio: '',
        messaggio: '',
        privacy: false
      });
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="contact-form__success">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <h3>Messaggio inviato!</h3>
        <p>Ti ricontatteremo al più presto per confermare l'appuntamento.</p>
        <button onClick={() => setStatus('idle')} className="contact-form__reset">
          Invia un altro messaggio
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="nome">Nome e Cognome *</label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            placeholder="Mario Rossi"
          />
        </div>
        <div className="contact-form__field">
          <label htmlFor="telefono">Telefono *</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            required
            value={formData.telefono}
            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
            placeholder="333 123 4567"
          />
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="mario@email.it"
          />
        </div>
        <div className="contact-form__field">
          <label htmlFor="servizio">Tipo di visita</label>
          <select
            id="servizio"
            name="servizio"
            value={formData.servizio}
            onChange={(e) => setFormData({ ...formData, servizio: e.target.value })}
          >
            <option value="">Seleziona...</option>
            <option value="prima-visita">Prima Visita Osteopatica</option>
            <option value="controllo">Visita di Controllo</option>
            <option value="cervicalgia">Cervicalgia</option>
            <option value="lombalgia">Lombalgia</option>
            <option value="cefalea">Cefalea</option>
            <option value="gravidanza">Osteopatia in Gravidanza</option>
            <option value="pediatria">Osteopatia Pediatrica</option>
            <option value="altro">Altro</option>
          </select>
        </div>
      </div>

      <div className="contact-form__field">
        <label htmlFor="messaggio">Breve descrizione del motivo della visita</label>
        <textarea
          id="messaggio"
          name="messaggio"
          rows={4}
          value={formData.messaggio}
          onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
          placeholder="Descrivi brevemente il tuo problema o le tue esigenze..."
        />
      </div>

      <div className="contact-form__privacy">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          required
          checked={formData.privacy}
          onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
        />
        <label htmlFor="privacy">
          Ho letto e accetto la <a href="/privacy" target="_blank">Privacy Policy</a>. 
          Acconsento al trattamento dei miei dati personali per essere ricontattato/a. *
        </label>
      </div>

      <button 
        type="submit" 
        className="contact-form__submit"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? (
          <>
            <span className="contact-form__spinner"></span>
            Invio in corso...
          </>
        ) : (
          <>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            Invia Richiesta
          </>
        )}
      </button>
    </form>
  );
}
