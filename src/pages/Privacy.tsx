import { Hero } from '../components/Hero';
import { contactInfo } from '../data/contact';
import './Legal.css';

export function Privacy() {
  return (
    <main className="legal-page">
      <Hero
        title="Privacy Policy"
        description="Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR)"
        showCTA={false}
        size="small"
      />

      <section className="section">
        <div className="container">
          <article className="legal-content">
            <p className="legal-update">Ultimo aggiornamento: Febbraio 2026</p>

            <h2>1. Titolare del Trattamento</h2>
            <p>
              Il Titolare del trattamento dei dati personali è:<br/>
              <strong>{contactInfo.name}</strong><br/>
              {contactInfo.address.full}<br/>
              Email: {contactInfo.email}<br/>
              Telefono: {contactInfo.phoneDisplay}
            </p>

            <h2>2. Tipologie di dati raccolti</h2>
            <p>
              Tra i dati personali raccolti da questo sito, in modo autonomo o tramite terze parti, ci sono:
            </p>
            <ul>
              <li><strong>Dati di contatto:</strong> nome, cognome, numero di telefono, indirizzo email</li>
              <li><strong>Dati di navigazione:</strong> dati tecnici trasmessi implicitamente nell'uso dei protocolli di comunicazione</li>
              <li><strong>Dati relativi alla salute:</strong> eventuali informazioni sul motivo della richiesta di visita, fornite volontariamente dall'utente</li>
            </ul>
            <p>
              I dati relativi alla salute rientrano nelle "categorie particolari di dati personali" ai sensi dell'art. 9 del GDPR 
              e vengono trattati solo previo consenso esplicito dell'interessato.
            </p>

            <h2>3. Finalità del trattamento</h2>
            <p>I dati personali sono raccolti per le seguenti finalità:</p>
            <ul>
              <li>Rispondere alle richieste di contatto e informazioni</li>
              <li>Gestire le prenotazioni degli appuntamenti</li>
              <li>Adempiere agli obblighi di legge relativi all'attività sanitaria</li>
              <li>Migliorare il servizio offerto</li>
            </ul>

            <h2>4. Base giuridica del trattamento</h2>
            <p>
              Il trattamento dei dati personali si basa su:
            </p>
            <ul>
              <li><strong>Consenso</strong> (art. 6.1.a GDPR) per l'invio di richieste tramite il modulo di contatto</li>
              <li><strong>Consenso esplicito</strong> (art. 9.2.a GDPR) per il trattamento di eventuali dati relativi alla salute</li>
              <li><strong>Esecuzione di un contratto</strong> (art. 6.1.b GDPR) per la gestione degli appuntamenti</li>
              <li><strong>Obblighi legali</strong> (art. 6.1.c GDPR) per gli adempimenti fiscali e sanitari</li>
            </ul>

            <h2>5. Modalità di trattamento</h2>
            <p>
              I dati personali sono trattati con strumenti automatizzati per il tempo strettamente necessario 
              a conseguire gli scopi per cui sono stati raccolti. Sono adottate specifiche misure di sicurezza 
              per prevenire la perdita, usi illeciti o non corretti dei dati.
            </p>

            <h2>6. Conservazione dei dati</h2>
            <p>
              I dati personali saranno conservati per il tempo necessario al conseguimento delle finalità 
              per cui sono stati raccolti e comunque non oltre i termini previsti dalla normativa vigente:
            </p>
            <ul>
              <li>Dati delle richieste di contatto: 12 mesi dalla richiesta</li>
              <li>Dati dei pazienti: 10 anni dall'ultimo trattamento (obblighi legali)</li>
              <li>Dati contabili: 10 anni (obblighi fiscali)</li>
            </ul>

            <h2>7. Comunicazione dei dati</h2>
            <p>
              I dati personali non saranno diffusi e potranno essere comunicati a:
            </p>
            <ul>
              <li>Soggetti a cui la comunicazione è obbligatoria per legge</li>
              <li>Professionisti che gestiscono la contabilità</li>
              <li>Fornitori di servizi tecnici IT (con garanzie adeguate)</li>
            </ul>

            <h2>8. Diritti dell'interessato</h2>
            <p>
              L'interessato ha il diritto di:
            </p>
            <ul>
              <li>Accedere ai propri dati personali</li>
              <li>Chiederne la rettifica o la cancellazione</li>
              <li>Chiedere la limitazione del trattamento</li>
              <li>Opporsi al trattamento</li>
              <li>Richiedere la portabilità dei dati</li>
              <li>Revocare il consenso in qualsiasi momento</li>
              <li>Proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali</li>
            </ul>
            <p>
              Per esercitare i propri diritti, l'interessato può inviare una richiesta a: {contactInfo.email}
            </p>

            <h2>9. Modifiche alla Privacy Policy</h2>
            <p>
              Il Titolare si riserva il diritto di modificare questa Privacy Policy in qualunque momento. 
              Le modifiche saranno pubblicate su questa pagina.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
