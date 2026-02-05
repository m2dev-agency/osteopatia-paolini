import { Hero } from '../components/Hero';
import { contactInfo } from '../data/contact';
import './Legal.css';

export function Cookie() {
  return (
    <main className="legal-page">
      <Hero
        title="Cookie Policy"
        description="Informativa sull'uso dei cookie ai sensi delle Linee guida del Garante Privacy"
        showCTA={false}
        size="small"
      />

      <section className="section">
        <div className="container">
          <article className="legal-content">
            <p className="legal-update">Ultimo aggiornamento: Febbraio 2026</p>

            <h2>1. Cosa sono i cookie</h2>
            <p>
              I cookie sono piccoli file di testo che i siti web visitati inviano al dispositivo dell'utente, 
              dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva.
            </p>

            <h2>2. Cookie utilizzati da questo sito</h2>
            <p>
              Questo sito utilizza esclusivamente <strong>cookie tecnici</strong>, necessari per il corretto 
              funzionamento del sito stesso. Non vengono utilizzati cookie di profilazione o di marketing.
            </p>

            <h3>Cookie tecnici (necessari)</h3>
            <p>
              Questi cookie sono essenziali per il funzionamento del sito e non possono essere disattivati. 
              Non richiedono il consenso dell'utente ai sensi delle Linee guida del Garante.
            </p>
            <table className="cookie-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Scopo</th>
                  <th>Durata</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>session_id</td>
                  <td>Gestione della sessione utente</td>
                  <td>Sessione</td>
                </tr>
              </tbody>
            </table>

            <h2>3. Cookie di terze parti</h2>
            <p>
              Il sito può integrare funzionalità fornite da terze parti che potrebbero impostare propri cookie:
            </p>
            <ul>
              <li>
                <strong>Google Maps:</strong> per la visualizzazione della mappa dello studio. 
                La privacy policy di Google è disponibile su: 
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  policies.google.com/privacy
                </a>
              </li>
            </ul>

            <h2>4. Come gestire i cookie</h2>
            <p>
              È possibile gestire le preferenze relative ai cookie direttamente dal proprio browser. 
              La disabilitazione dei cookie tecnici potrebbe compromettere alcune funzionalità del sito.
            </p>
            <p>
              Istruzioni per i principali browser:
            </p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/it-it/HT201265" target="_blank" rel="noopener noreferrer">Safari</a></li>
              <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
            </ul>

            <h2>5. Titolare del trattamento</h2>
            <p>
              Il Titolare del trattamento è:<br/>
              <strong>{contactInfo.name}</strong><br/>
              {contactInfo.address.full}<br/>
              Email: {contactInfo.email}
            </p>

            <h2>6. Modifiche alla Cookie Policy</h2>
            <p>
              Questa Cookie Policy può essere soggetta a modifiche. La versione aggiornata sarà 
              sempre disponibile su questa pagina.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
