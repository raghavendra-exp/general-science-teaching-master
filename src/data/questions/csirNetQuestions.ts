import { Question } from '../../types';

export const csirNetQuestions: Question[] = [
  {
    id: 'csir-life-001',
    exam: 'csir-net',
    paper: 'Part B (Life Sciences)',
    subject: 'Life Sciences',
    topic: 'Biochemistry & Enzymes',
    difficulty: 'Medium',
    question: 'In enzyme kinetics obeying the Michaelis-Menten model, what effect does a competitive inhibitor have on the kinetic parameters Vmax and apparent Km?',
    questionHi: 'माइकलिस-मेन्टन मॉडल का पालन करने वाली एंजाइम बलगतिकी में, एक प्रतिस्पर्धी संदमक (Competitive Inhibitor) का Vmax और आभासी Km पर क्या प्रभाव पड़ता है?',
    options: [
      'Vmax decreases, Km remains unchanged',
      'Vmax remains unchanged, apparent Km increases',
      'Both Vmax and Km decrease proportionally',
      'Vmax increases, apparent Km decreases'
    ],
    optionsHi: [
      'Vmax घट जाता है, Km अपरिवर्तित रहता है',
      'Vmax अपरिवर्तित रहता है, आभासी Km बढ़ जाता है',
      'Vmax और Km दोनों समानुपातिक रूप से घटते हैं',
      'Vmax बढ़ता है, आभासी Km घटता है'
    ],
    answer: 1,
    explanation: 'A competitive inhibitor competes directly with the substrate for binding to the active site. Because high substrate concentration can completely displace the inhibitor, Vmax remains unchanged, but a higher substrate concentration is required to reach half Vmax, causing an increase in apparent Km (Km_app = Km * (1 + [I]/Ki)).',
    explanationHi: 'प्रतिस्पर्धी संदमक सक्रिय स्थल के लिए क्रियाधार (Substrate) के साथ प्रतिस्पर्धा करता है। क्रियाधार की सांद्रता बढ़ाकर संदमन को दूर किया जा सकता है, अतः Vmax अपरिवर्तित रहता है जबकि आभासी Km बढ़ जाता है।',
    sourceType: 'VERIFIED PYQ',
    source: 'CSIR-UGC NET Dec 2023 Life Sciences Part B Q24',
    year: 2023,
    tags: ['CSIR-NET', 'Biochemistry', 'Enzyme Kinetics', 'Life Sciences']
  },
  {
    id: 'csir-life-002',
    exam: 'csir-net',
    paper: 'Part C (Life Sciences)',
    subject: 'Life Sciences',
    topic: 'Cell Signaling & GPCR',
    difficulty: 'Hard',
    question: 'Cholera toxin produced by Vibrio cholerae exerts its toxic effect on intestinal epithelial cells by causing which of the following post-translational modifications of the Gs-alpha subunit of heterotrimeric G-proteins?',
    questionHi: 'विब्रियो कोलेरी द्वारा उत्पादित हैजा विष (Cholera Toxin) हेटेरोट्राइमेरिक जी-प्रोटीन के Gs-अल्फा सबयूनिट में निम्नलिखित में से कौन सा पश्च-अनुवाद संशोधन (Post-translational modification) करता है?',
    options: [
      'ADP-ribosylation of an arginine residue, locking Gs-alpha in an active GTP-bound state and leading to persistent adenylyl cyclase activation',
      'Phosphorylation of a serine residue, which permanently deactivates protein kinase A (PKA)',
      'Ubiquitination and rapid proteasomal degradation of the beta-adrenergic receptor',
      'ADP-ribosylation of a cysteine residue of Gi-alpha, preventing GDP release'
    ],
    optionsHi: [
      'आर्जिनिन अवशेष का एडीपी-राइबोसिलीकरण, जिससे Gs-अल्फा सक्रिय GTP-बाध्य अवस्था में बना रहता है और एडेनिलिल साइक्लेज का निरंतर सक्रियण होता है',
      'एक सेरीन अवशेष का फॉस्फोराइलेशन, जो प्रोटीन काइनेज ए (PKA) को स्थायी रूप से निष्क्रिय कर देता है',
      'बीटा-एड्रीनर्जिक रिसेप्टर का प्रोटीसोमल क्षरण',
      'Gi-अल्फा के सिस्टीन अवशेष का एडीपी-राइबोसिलीकरण'
    ],
    answer: 0,
    explanation: 'Cholera toxin catalyzes the ADP-ribosylation of an Arg residue on Gs-alpha, inhibiting its intrinsic GTPase activity. This locks Gs-alpha in the active state, leading to continuous cAMP production, CFTR chloride channel opening, and severe secretory watery diarrhea.',
    explanationHi: 'हैजा विष Gs-अल्फा सबयूनिट के आर्जिनिन अवशेष पर एडीपी-राइबोज समूह जोड़ देता है, जिससे इसकी GTPase गतिविधि समाप्त हो जाती है और यह सक्रिय रहकर अत्यधिक cAMP का निर्माण करता है।',
    sourceType: 'VERIFIED PYQ',
    source: 'CSIR-UGC NET June 2022 Life Sciences Part C Q78',
    year: 2022,
    tags: ['CSIR-NET', 'Cell Signaling', 'GPCR', 'Part C']
  },
  {
    id: 'csir-life-003',
    exam: 'csir-net',
    paper: 'Part C (Life Sciences)',
    subject: 'Life Sciences',
    topic: 'Population Ecology',
    difficulty: 'Hard',
    question: 'In a Mark-Release-Recapture experiment to estimate the population size of a butterfly species, 120 individuals were captured, marked with non-toxic ink, and released. Two weeks later, 100 individuals were captured, of which 20 were found to be marked. Assuming a closed population, what is the estimated population size (N) according to the Lincoln-Petersen index?',
    questionHi: 'तितलियों की आबादी का आकार आंकने हेतु मार्क-रिलीज़-रीकैप्चर विधि में 120 तितलियों को पकड़कर चिन्हित कर छोड़ा गया। दो सप्ताह बाद पकड़ी गई 100 तितलियों में से 20 चिन्हित पाई गईं। लिंकन-पीटरसन सूचकांक के अनुसार कुल आबादी (N) कितनी है?',
    options: [
      '400',
      '600',
      '800',
      '1200'
    ],
    optionsHi: [
      '400',
      '600',
      '800',
      '1200'
    ],
    answer: 1,
    explanation: 'Lincoln-Petersen Index: N = (M * C) / R, where M = initial marked individuals (120), C = total captured in second sample (100), and R = recaptured marked individuals (20). Thus, N = (120 * 100) / 20 = 12000 / 20 = 600.',
    explanationHi: 'लिंकन-पीटरसन सूत्र: N = (M * C) / R = (120 * 100) / 20 = 600।',
    sourceType: 'VERIFIED PYQ',
    source: 'CSIR-UGC NET Dec 2021 Life Sciences Part C Q112',
    year: 2021,
    tags: ['CSIR-NET', 'Ecology', 'Lincoln-Petersen', 'Numerical']
  },
  {
    id: 'csir-phy-001',
    exam: 'csir-net',
    paper: 'Part B (Physical Sciences)',
    subject: 'Physical Sciences',
    topic: 'Quantum Mechanics',
    difficulty: 'Medium',
    question: 'A quantum particle of mass m is trapped in a one-dimensional infinite square potential well with boundaries at x = 0 and x = L. What is the energy difference between the second excited state (n = 3) and the ground state (n = 1)?',
    questionHi: 'एक-विमीय अनंत विभव कूप (0 से L) में द्रव्यमान m का कण परिबद्ध है। द्वितीय उत्तेजित अवस्था (n = 3) और मूल अवस्था (n = 1) के मध्य ऊर्जा अंतराल कितना है?',
    options: [
      '3 * (pi^2 * hbar^2) / (2 * m * L^2)',
      '4 * (pi^2 * hbar^2) / (2 * m * L^2)',
      '8 * (pi^2 * hbar^2) / (2 * m * L^2)',
      '9 * (pi^2 * hbar^2) / (2 * m * L^2)'
    ],
    optionsHi: [
      '3 * (pi^2 * hbar^2) / (2 * m * L^2)',
      '4 * (pi^2 * hbar^2) / (2 * m * L^2)',
      '8 * (pi^2 * hbar^2) / (2 * m * L^2)',
      '9 * (pi^2 * hbar^2) / (2 * m * L^2)'
    ],
    answer: 2,
    explanation: 'The energy levels of a 1D infinite square well are given by En = n^2 * (pi^2 * hbar^2) / (2 * m * L^2). Ground state is n = 1 (E1 = 1 * E0). The second excited state corresponds to n = 3 (E3 = 3^2 * E0 = 9 * E0). The difference delta E = E3 - E1 = (9 - 1) * E0 = 8 * (pi^2 * hbar^2) / (2 * m * L^2).',
    explanationHi: 'ऊर्जा स्तर En = n^2 * E0 होता है। मूल स्तर n = 1 (E1 = E0) तथा द्वितीय उत्तेजित स्तर n = 3 (E3 = 9 E0) है। अतः ऊर्जा अंतराल = 9 - 1 = 8 E0 होगा।',
    sourceType: 'VERIFIED PYQ',
    source: 'CSIR-UGC NET June 2023 Physical Sciences Part B Q32',
    year: 2023,
    tags: ['CSIR-NET', 'Quantum Mechanics', 'Infinite Well']
  },
  {
    id: 'csir-chem-001',
    exam: 'csir-net',
    paper: 'Part B (Chemical Sciences)',
    subject: 'Chemical Sciences',
    topic: 'Coordination Chemistry',
    difficulty: 'Medium',
    question: 'According to Crystal Field Theory, what is the crystal field stabilization energy (CFSE) in terms of Delta_o for a low-spin d6 octahedral complex (such as [Fe(CN)6]4-), ignoring pairing energy?',
    questionHi: 'क्रिस्टल क्षेत्र सिद्धांत के अनुसार, एक निम्न चक्रण (low-spin) d6 अष्टफलकीय संकुल (जैसे [Fe(CN)6]4-) के लिए CFSE का मान Delta_o के पदों में क्या होगा?',
    options: [
      '-0.4 Delta_o',
      '-1.2 Delta_o',
      '-2.4 Delta_o',
      '0.0 Delta_o'
    ],
    optionsHi: [
      '-0.4 Delta_o',
      '-1.2 Delta_o',
      '-2.4 Delta_o',
      '0.0 Delta_o'
    ],
    answer: 2,
    explanation: 'For a low-spin d6 octahedral complex, all 6 electrons occupy the lower energy t2g orbitals: (t2g)^6 (eg)^0. The stabilization for each electron in t2g is -0.4 Delta_o. Thus, CFSE = 6 * (-0.4 Delta_o) = -2.4 Delta_o.',
    explanationHi: 'निम्न चक्रण d6 संकुल में सभी 6 इलेक्ट्रॉन t2g कक्षकों में युग्मित होते हैं (t2g^6 eg^0)। प्रत्येक t2g इलेक्ट्रॉन -0.4 Delta_o ऊर्जा कम करता है, अतः कुल CFSE = 6 * (-0.4) = -2.4 Delta_o होगी।',
    sourceType: 'VERIFIED PYQ',
    source: 'CSIR-UGC NET Dec 2023 Chemical Sciences Part B Q41',
    year: 2023,
    tags: ['CSIR-NET', 'Coordination Chemistry', 'CFSE']
  },
  {
    id: 'csir-apt-001',
    exam: 'csir-net',
    paper: 'Part A',
    subject: 'General Aptitude',
    topic: 'Geometry & Scales',
    difficulty: 'Medium',
    question: 'A solid metallic sphere of radius 6 cm is melted and recast into small spherical balls of radius 1 cm each. How many such small balls can be formed assuming no loss of metal during casting?',
    questionHi: '6 सेमी त्रिज्या वाले एक ठोस धातु के गोले को पिघलाकर 1 सेमी त्रिज्या की छोटी गोलाकार गोलियां बनाई जाती हैं। धातु की कोई हानि न होने पर कितनी गोलियां बनेंगी?',
    options: [
      '36',
      '128',
      '216',
      '512'
    ],
    optionsHi: [
      '36',
      '128',
      '216',
      '512'
    ],
    answer: 2,
    explanation: 'Volume of a sphere = (4/3) * pi * r^3. Number of small balls N = V_large / V_small = (R / r)^3 = (6 / 1)^3 = 216.',
    explanationHi: 'गोले का आयतन = (4/3) * pi * r^3। गोलियों की संख्या = (6/1)^3 = 216।',
    sourceType: 'VERIFIED PYQ',
    source: 'CSIR-UGC NET Part A General Aptitude Q12',
    year: 2023,
    tags: ['CSIR-NET', 'Part A', 'Mensuration']
  }
];
