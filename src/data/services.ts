export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  price: string;
  duration: string;
  benefits: string[];
  forWhom: string[];
  slug: string;
}

export const services: Service[] = [
  {
    id: 'prima-visita',
    title: 'Prima Visita Osteopatica',
    shortDescription: 'Valutazione completa con anamnesi dettagliata e primo trattamento personalizzato.',
    description: 'La prima visita osteopatica è un momento fondamentale per comprendere la tua storia clinica e le tue esigenze. Attraverso un\'anamnesi approfondita e una valutazione posturale e funzionale, identifico le cause del tuo disagio e imposto un percorso terapeutico personalizzato.',
    icon: '🩺',
    price: '60€',
    duration: '60 minuti',
    benefits: [
      'Anamnesi completa della storia clinica',
      'Valutazione posturale e funzionale',
      'Primo trattamento osteopatico',
      'Piano terapeutico personalizzato'
    ],
    forWhom: ['Nuovi pazienti', 'Chi cerca una valutazione completa'],
    slug: 'prima-visita'
  },
  {
    id: 'visita-controllo',
    title: 'Visita Osteopatica',
    shortDescription: 'Trattamento osteopatico di controllo per mantenere i risultati ottenuti.',
    description: 'Le visite di controllo sono essenziali per consolidare i miglioramenti raggiunti e prevenire recidive. Ogni seduta è adattata alle tue esigenze del momento.',
    icon: '👐',
    price: 'da 40€',
    duration: '45 minuti',
    benefits: [
      'Valutazione dei progressi',
      'Trattamento manuale specifico',
      'Consigli per la vita quotidiana',
      'Esercizi personalizzati'
    ],
    forWhom: ['Pazienti in trattamento', 'Prevenzione'],
    slug: 'visita-controllo'
  },
  {
    id: 'cervicalgia',
    title: 'Trattamento Cervicalgia',
    shortDescription: 'Sollievo dal dolore cervicale e dalle tensioni del collo attraverso tecniche manuali specifiche.',
    description: 'La cervicalgia è uno dei disturbi più comuni nella popolazione adulta. Il trattamento osteopatico mira a ridurre le tensioni muscolari, migliorare la mobilità delle vertebre cervicali e alleviare i sintomi correlati come mal di testa e vertigini.',
    icon: '🦴',
    price: '40€',
    duration: '45 minuti',
    benefits: [
      'Riduzione del dolore cervicale',
      'Miglioramento della mobilità del collo',
      'Rilascio delle tensioni muscolari',
      'Prevenzione delle recidive'
    ],
    forWhom: ['Chi lavora al computer', 'Chi soffre di torcicollo', 'Chi ha tensioni da stress'],
    slug: 'cervicalgia'
  },
  {
    id: 'lombalgia',
    title: 'Trattamento Lombalgia',
    shortDescription: 'Trattamento del mal di schiena e dei dolori lombari con approccio osteopatico integrato.',
    description: 'Il mal di schiena rappresenta una delle principali cause di disabilità. L\'approccio osteopatico considera la lombalgia nel contesto globale del corpo, trattando non solo la zona dolorosa ma anche le strutture correlate che possono contribuire al problema.',
    icon: '🔙',
    price: '40€',
    duration: '45 minuti',
    benefits: [
      'Sollievo dal dolore lombare',
      'Miglioramento della postura',
      'Ripristino della mobilità',
      'Prevenzione di ernie e protrusioni'
    ],
    forWhom: ['Chi sta molto seduto', 'Chi solleva pesi', 'Chi soffre di sciatica'],
    slug: 'lombalgia'
  },
  {
    id: 'cefalea',
    title: 'Trattamento Cefalea',
    shortDescription: 'Approccio osteopatico per cefalee tensive, emicranie e mal di testa cronici.',
    description: 'Molte forme di cefalea hanno origine da disfunzioni muscolo-scheletriche, in particolare a livello cervicale e craniale. L\'osteopatia può offrire un valido supporto nel trattamento delle cefalee tensive e di alcune forme di emicrania.',
    icon: '🧠',
    price: '40€',
    duration: '45 minuti',
    benefits: [
      'Riduzione frequenza e intensità del mal di testa',
      'Rilascio delle tensioni cranio-cervicali',
      'Miglioramento della qualità del sonno',
      'Approccio naturale senza farmaci'
    ],
    forWhom: ['Chi soffre di cefalea tensiva', 'Chi soffre di emicrania', 'Chi assume troppi analgesici'],
    slug: 'cefalea'
  },
  {
    id: 'gravidanza',
    title: 'Osteopatia in Gravidanza',
    shortDescription: 'Accompagnamento osteopatico durante la gravidanza per il benessere di mamma e bambino.',
    description: 'Durante la gravidanza il corpo femminile affronta profondi cambiamenti. L\'osteopatia può aiutare a gestire i disturbi tipici come mal di schiena, sciatalgia, reflusso e difficoltà respiratorie, preparando il corpo al parto in modo naturale e sicuro.',
    icon: '🤰',
    price: '50€',
    duration: '50 minuti',
    benefits: [
      'Sollievo dai dolori lombari e pelvici',
      'Riduzione del reflusso gastroesofageo',
      'Preparazione al parto',
      'Recupero post-partum'
    ],
    forWhom: ['Donne in gravidanza', 'Neo-mamme', 'Chi pianifica una gravidanza'],
    slug: 'gravidanza'
  },
  {
    id: 'pediatria',
    title: 'Osteopatia Pediatrica',
    shortDescription: 'Trattamenti delicati e sicuri per neonati e bambini di tutte le età.',
    description: 'L\'osteopatia pediatrica utilizza tecniche dolci e non invasive adatte ai più piccoli. Può essere utile per plagiocefalie, coliche, disturbi del sonno, otiti ricorrenti e problemi posturali nell\'età dello sviluppo.',
    icon: '👶',
    price: '45€',
    duration: '40 minuti',
    benefits: [
      'Tecniche dolci e sicure',
      'Supporto allo sviluppo motorio',
      'Trattamento coliche e reflusso',
      'Correzione plagiocefalia'
    ],
    forWhom: ['Neonati', 'Bambini', 'Adolescenti'],
    slug: 'pediatria'
  },
  {
    id: 'postura',
    title: 'Valutazione Posturale',
    shortDescription: 'Analisi approfondita della postura per identificare e correggere gli squilibri.',
    description: 'Una postura scorretta può essere alla base di molti disturbi muscolo-scheletrici. La valutazione posturale permette di identificare gli squilibri e impostare un programma di correzione personalizzato.',
    icon: '🧍',
    price: '50€',
    duration: '60 minuti',
    benefits: [
      'Analisi posturale completa',
      'Identificazione degli squilibri',
      'Programma di esercizi correttivi',
      'Consigli ergonomici'
    ],
    forWhom: ['Chi lavora al videoterminale', 'Sportivi', 'Adolescenti in crescita'],
    slug: 'postura'
  },
  {
    id: 'linfodrenaggio',
    title: 'Linfodrenaggio Manuale',
    shortDescription: 'Tecnica manuale per favorire il drenaggio linfatico e ridurre gonfiori ed edemi.',
    description: 'Il linfodrenaggio manuale è una tecnica delicata che stimola la circolazione linfatica. È particolarmente indicato per edemi, ritenzione idrica, gambe pesanti e nel recupero post-chirurgico.',
    icon: '💧',
    price: '50€',
    duration: '60 minuti',
    benefits: [
      'Riduzione di gonfiori ed edemi',
      'Miglioramento della circolazione',
      'Effetto detox',
      'Sensazione di leggerezza'
    ],
    forWhom: ['Chi soffre di gambe pesanti', 'Post-chirurgia', 'Ritenzione idrica'],
    slug: 'linfodrenaggio'
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(s => s.slug === slug);
};
