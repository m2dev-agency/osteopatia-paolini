export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: 'generale' | 'trattamenti' | 'pratico';
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "Cos'è l'osteopatia?",
    answer: "L'osteopatia è una professione sanitaria riconosciuta in Italia dalla Legge n. 3 del 2018. Si basa su un approccio manuale per la diagnosi, il trattamento e la prevenzione di disturbi muscolo-scheletrici e funzionali. L'osteopata considera il corpo come un'unità e cerca di ripristinare l'equilibrio naturale attraverso tecniche manuali specifiche.",
    category: 'generale'
  },
  {
    id: 2,
    question: "Qual è la differenza tra osteopatia e fisioterapia?",
    answer: "Mentre la fisioterapia si concentra spesso sul recupero funzionale di una specifica area del corpo, l'osteopatia adotta un approccio globale, considerando le interconnessioni tra le diverse strutture corporee. L'osteopata cerca la causa primaria del problema, che può trovarsi anche lontano dalla zona sintomatica. Le due discipline sono complementari e in molti casi possono essere integrate.",
    category: 'generale'
  },
  {
    id: 3,
    question: "Quante sedute sono necessarie?",
    answer: "Il numero di sedute varia in base al problema, alla sua cronicità e alla risposta individuale del paziente. Per problemi acuti possono bastare 2-4 sedute, mentre per condizioni croniche può essere necessario un percorso più lungo. Durante la prima visita fornirò una stima personalizzata basata sulla valutazione effettuata.",
    category: 'trattamenti'
  },
  {
    id: 4,
    question: "L'osteopatia è dolorosa?",
    answer: "Le tecniche osteopatiche sono generalmente dolci e non dolorose. Durante il trattamento potresti avvertire una sensazione di tensione o lieve fastidio nelle zone più contratte, ma non un dolore vero e proprio. Nelle 24-48 ore successive alla seduta può comparire un lieve indolenzimento, simile a quello post-attività fisica, che è del tutto normale.",
    category: 'trattamenti'
  },
  {
    id: 5,
    question: "L'osteopatia è adatta ai bambini?",
    answer: "Sì, l'osteopatia pediatrica utilizza tecniche molto dolci e delicate, adatte a neonati e bambini di ogni età. È utile per trattare coliche, plagiocefalie, disturbi del sonno, otiti ricorrenti e problemi posturali. Le tecniche sono assolutamente sicure e non invasive.",
    category: 'trattamenti'
  },
  {
    id: 6,
    question: "Posso fare osteopatia in gravidanza?",
    answer: "Assolutamente sì! L'osteopatia in gravidanza è sicura e può aiutare a gestire i disturbi tipici come mal di schiena, sciatalgia, reflusso gastroesofageo e difficoltà respiratorie. È consigliato iniziare dal secondo trimestre. Le tecniche sono adattate alle esigenze della gestante e del bambino.",
    category: 'trattamenti'
  },
  {
    id: 7,
    question: "Come devo prepararmi alla visita?",
    answer: "Porta con te eventuali esami diagnostici recenti (radiografie, risonanze, ecografie) e un elenco dei farmaci che assumi. Indossa abbigliamento comodo e intimo. È consigliabile non fare pasti abbondanti nelle 2 ore precedenti. Per la prima visita, arriva 10 minuti prima per compilare la scheda anamnestica.",
    category: 'pratico'
  },
  {
    id: 8,
    question: "Quanto dura una seduta?",
    answer: "La prima visita dura circa 60 minuti e comprende l'anamnesi, la valutazione e il primo trattamento. Le sedute successive durano circa 45 minuti. Per alcuni trattamenti specifici come il linfodrenaggio, la durata può essere di 60 minuti.",
    category: 'pratico'
  },
  {
    id: 9,
    question: "Come posso prenotare un appuntamento?",
    answer: "Puoi prenotare tramite WhatsApp, telefonando direttamente allo studio, oppure compilando il modulo di contatto sul sito. Riceverai conferma dell'appuntamento entro poche ore. Lo studio è aperto dal lunedì al venerdì, dalle 9:00 alle 19:00.",
    category: 'pratico'
  },
  {
    id: 10,
    question: "Quali metodi di pagamento accettate?",
    answer: "Accettiamo contanti, carte di credito/debito, Satispay e PayPal. Al termine di ogni trattamento viene rilasciata fattura sanitaria, detraibile fiscalmente nella dichiarazione dei redditi.",
    category: 'pratico'
  },
  {
    id: 11,
    question: "Posso disdire o spostare un appuntamento?",
    answer: "Sì, puoi disdire o spostare l'appuntamento con almeno 24 ore di anticipo senza alcun costo. Per cancellazioni con meno di 24 ore di preavviso o mancata presentazione, potrebbe essere richiesto un contributo. Contattami tramite WhatsApp o telefono per qualsiasi modifica.",
    category: 'pratico'
  }
];
