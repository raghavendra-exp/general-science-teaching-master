export interface GkItem {
  id: string;
  category: 'Polity' | 'History' | 'Geography' | 'Economy' | 'Static GK';
  title: string;
  titleHi: string;
  content: string;
  contentHi: string;
  keyFacts: string[];
  keyFactsHi?: string[];
  examRelevance: string[];
}

export const gkAndGsData: GkItem[] = [
  {
    id: 'gk-polity-fundamental-rights',
    category: 'Polity',
    title: 'Fundamental Rights (Articles 12 to 35, Part III of the Constitution)',
    titleHi: 'मौलिक अधिकार (अनुच्छेद 12 से 35, भाग III)',
    content: 'Enshrined in Part III of the Indian Constitution (often described as the Magna Carta of India), these rights are justiciable and enforceable by the Supreme Court (Art 32) and High Courts (Art 226).',
    contentHi: 'भारतीय संविधान के भाग III में वर्णित मौलिक अधिकार वाद-योग्य हैं, जिनकी रक्षा हेतु अनुच्छेद 32 के तहत सर्वोच्च न्यायालय और अनुच्छेद 226 के तहत उच्च न्यायालय रिट जारी करते हैं।',
    keyFacts: [
      'Right to Equality: Articles 14 to 18 (Art 14 Equality before law, Art 17 Abolition of Untouchability, Art 18 Abolition of Titles).',
      'Right to Freedom: Articles 19 to 22 (Art 19 Six basic freedoms, Art 21 Right to Life and Personal Liberty, Art 21A Right to Free and Compulsory Education for 6-14 years added by 86th Amendment 2002).',
      'Right against Exploitation: Articles 23 & 24 (Art 23 Prohibition of human trafficking & forced labor, Art 24 Prohibition of child labor below 14 years).',
      'Right to Freedom of Religion: Articles 25 to 28.',
      'Cultural and Educational Rights of Minorities: Articles 29 & 30.',
      'Right to Constitutional Remedies: Article 32 (Described by Dr. B.R. Ambedkar as the "Heart and Soul" of the Constitution).'
    ],
    examRelevance: ['SSC CGL', 'UPPSC PCS', 'CTET Social Science', 'KVS PRT/TGT', 'DSSSB']
  },
  {
    id: 'gk-polity-writs',
    category: 'Polity',
    title: 'Constitutional Writs under Articles 32 and 226',
    titleHi: 'संवैधानिक रिटें (अनुच्छेद 32 एवं 226)',
    content: 'Five prerogative writs issued by the judiciary to protect citizens against infringement of fundamental rights.',
    contentHi: 'नागरिकों के मौलिक अधिकारों के संरक्षण हेतु जारी की जाने वाली पांच प्रकार की न्यायिक रिटें।',
    keyFacts: [
      '1. Habeas Corpus: ("To have the body of") - Protects against illegal unlawful detention; commands the detaining authority to produce the person.',
      '2. Mandamus: ("We Command") - Orders a public official or statutory body to perform an official duty which they have failed or refused to perform.',
      '3. Prohibition: Issued by a higher court to a lower court or tribunal to prevent it from exceeding its jurisdiction.',
      '4. Certiorari: ("To be certified") - Issued to quash an order already passed by a lower court/tribunal that acted without or in excess of jurisdiction.',
      '5. Quo-Warranto: ("By what authority") - Prevents unlawful usurpation of a public office by an unqualified person.'
    ],
    examRelevance: ['SSC CGL', 'State PSC', 'DSSSB General Awareness']
  },
  {
    id: 'gk-hist-freedom-struggle',
    category: 'History',
    title: 'Indian National Movement & Major Milestones (1885–1947)',
    titleHi: 'भारतीय राष्ट्रीय आंदोलन के प्रमुख पड़ाव (1885-1947)',
    content: 'The organized struggle for Indian independence from British colonial rule leading to freedom on August 15, 1947.',
    contentHi: '1885 में भारतीय राष्ट्रीय कांग्रेस की स्थापना से लेकर 1947 में भारत की स्वतंत्रता तक का कालखंड।',
    keyFacts: [
      '1885: Formation of Indian National Congress (INC) in Bombay by A.O. Hume; W.C. Bonnerjee was first President.',
      '1905: Partition of Bengal by Lord Curzon; Swadeshi and Boycott Movement launched.',
      '1911: Annulment of Partition of Bengal; Imperial capital shifted from Calcutta to Delhi.',
      '1919: Rowlatt Act passed; Jallianwala Bagh Massacre (13 April 1919) ordered by General Dyer in Amritsar.',
      '1920-1922: Non-Cooperation Movement launched by Mahatma Gandhi; suspended after Chauri Chaura incident (Feb 1922).',
      '1929: Lahore Session under Jawaharlal Nehru adopts resolution of "Poorna Swaraj" (Complete Independence).',
      '1930: Dandi Salt March (12 March to 6 April 1930); Civil Disobedience Movement launched.',
      '1942: Quit India Movement launched (8 August 1942 at Gowalia Tank, Bombay) with the slogan "Do or Die" (करो या मरो).'
    ],
    examRelevance: ['SSC CGL/CHSL', 'UPPSC', 'CTET Social Science', 'KVS GA']
  },
  {
    id: 'gk-geo-national-parks',
    category: 'Geography',
    title: 'Major National Parks & Biosphere Reserves of India',
    titleHi: 'भारत के प्रमुख राष्ट्रीय उद्यान एवं जैवमंडल आरक्षित क्षेत्र',
    content: 'Protected in-situ wildlife conservation networks across various biogeographic zones in India.',
    contentHi: 'भारत के विभिन्न राज्यों में स्थित वन्यजीव संरक्षण हेतु प्रमुख राष्ट्रीय उद्यान एवं बायोस्फीयर रिजर्व।',
    keyFacts: [
      'Jim Corbett National Park (Uttarakhand): First national park of India (established in 1936 as Hailey National Park); launch of Project Tiger in 1973.',
      'Kaziranga National Park (Assam): World-famous for the Great Indian One-Horned Rhinoceros; located along the Brahmaputra River.',
      'Keibul Lamjao National Park (Manipur): The world’s only floating national park on Loktak Lake; habitat of the endangered Sangai brow-antlered deer.',
      'Hemis National Park (Ladakh): Largest national park in India; premier sanctuary for the elusive Snow Leopard.',
      'Sundarbans National Park (West Bengal): World’s largest mangrove forest delta (Ganga-Brahmaputra); habitat of the Royal Bengal Tiger; UNESCO World Heritage site.',
      'Gir National Park (Gujarat): The sole remaining natural habitat of the Asiatic Lion in the wild.'
    ],
    examRelevance: ['CTET EVS & Paper II', 'SSC CGL', 'State PSC', 'Science Exams']
  },
  {
    id: 'gk-static-dances',
    category: 'Static GK',
    title: 'Classical & Folk Dances of India',
    titleHi: 'भारत के शास्त्रीय एवं लोक नृत्य',
    content: 'Rich heritage of traditional performing arts recognized by Sangeet Natak Akademi.',
    contentHi: 'संगीत नाटक अकादमी द्वारा मान्यता प्राप्त 8 शास्त्रीय नृत्य एवं विभिन्न राज्यों के प्रसिद्ध लोक नृत्य।',
    keyFacts: [
      'Bharatnatyam: Tamil Nadu (Ancient temple dance of Devadasis; Rukmini Devi Arundale).',
      'Kathak: Uttar Pradesh / North India (Storytelling through fast pirouettes and footwork; Birju Maharaj).',
      'Kathakali: Kerala (Elaborate facial makeup, green face "Pacha", high drama).',
      'Mohiniyattam: Kerala (Graceful solo dance of the enchantress).',
      'Kuchipudi: Andhra Pradesh (Named after Kuchelapuram village; brass plate dancing).',
      'Odissi: Odisha (Tribhanga posture; Kelucharan Mohapatra).',
      'Manipuri: Manipur (Raas Leela depicting Radha and Krishna).',
      'Sattriya: Assam (Introduced by the great Vaishnavite reformer Srimanta Sankardev in the 15th century).'
    ],
    examRelevance: ['SSC CGL', 'DSSSB', 'CTET', 'KVS GA']
  }
];

export const getGkByCategory = (cat: string): GkItem[] => {
  if (cat === 'all') return gkAndGsData;
  return gkAndGsData.filter(g => g.category.toLowerCase() === cat.toLowerCase());
};
