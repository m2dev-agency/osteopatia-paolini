export interface Testimonial {
  id: number;
  name: string;
  age?: string;
  problem: string;
  text: string;
  rating: number;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Maria G.',
    age: '45 anni',
    problem: 'Cervicalgia cronica',
    text: 'Dopo anni di dolore al collo e mal di testa frequenti, la Dott.ssa Paolini ha individuato subito il problema. In poche sedute ho ritrovato una mobilità che non ricordavo più. Professionale e attenta, consiglio vivamente.',
    rating: 5,
    date: '2025-12'
  },
  {
    id: 2,
    name: 'Luca R.',
    age: '38 anni',
    problem: 'Lombalgia',
    text: 'Lavoro tutto il giorno seduto e il mal di schiena era diventato insopportabile. Grazie ai trattamenti osteopatici e ai consigli della dottoressa, ho finalmente risolto il problema. Studio accogliente e professionalità al top.',
    rating: 5,
    date: '2025-11'
  },
  {
    id: 3,
    name: 'Francesca M.',
    problem: 'Gravidanza',
    text: 'Durante la mia gravidanza ho sofferto molto di sciatalgia. La Dott.ssa Paolini mi ha seguita con grande delicatezza e competenza, alleviando il dolore e preparandomi al parto. Un\'esperienza fantastica.',
    rating: 5,
    date: '2025-10'
  },
  {
    id: 4,
    name: 'Giovanni P.',
    age: '52 anni',
    problem: 'Cefalea tensiva',
    text: 'Soffrivo di mal di testa quasi quotidiani. Dopo aver provato di tutto, ho deciso di rivolgermi all\'osteopatia. È stata la scelta migliore: le cefalee sono diminuite drasticamente e ho imparato a gestire lo stress in modo diverso.',
    rating: 5,
    date: '2025-09'
  },
  {
    id: 5,
    name: 'Anna L.',
    problem: 'Coliche neonato',
    text: 'Il mio bimbo soffriva di coliche terribili. Una mia amica mi ha consigliato la Dott.ssa Paolini. Con due sole sedute delicatissime, la situazione è migliorata notevolmente. Finalmente riusciamo a dormire!',
    rating: 5,
    date: '2025-08'
  },
  {
    id: 6,
    name: 'Marco D.',
    age: '29 anni',
    problem: 'Postura e sport',
    text: 'Sono un runner amatoriale e avevo continui problemi muscolari. La valutazione posturale mi ha aperto gli occhi su tanti errori che facevo. Ora corro senza dolori e ho migliorato anche le performance.',
    rating: 5,
    date: '2025-07'
  }
];
