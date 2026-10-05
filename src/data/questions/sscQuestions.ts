import { Question } from '../../types';

export const sscQuestions: Question[] = [
  {
    id: 'ssc-quant-001',
    exam: 'ssc-cgl',
    paper: 'Tier II',
    subject: 'Quantitative Aptitude',
    topic: 'Compound Interest & Installments',
    difficulty: 'Hard',
    question: 'A loan of Rs. 25,500 is to be paid back in two equal annual installments at the rate of 4% compound interest per annum, compounded annually. What is the value of each annual installment?',
    questionHi: 'रु. 25,500 का एक ऋण 4% वार्षिक चक्रवृद्धि ब्याज की दर से दो समान वार्षिक किस्तों में चुकाया जाना है। प्रत्येक वार्षिक किस्त का मान क्या होगा?',
    options: [
      'Rs. 13,520',
      'Rs. 13,260',
      'Rs. 13,000',
      'Rs. 13,780'
    ],
    optionsHi: [
      'रु. 13,520',
      'रु. 13,260',
      'रु. 13,000',
      'रु. 13,780'
    ],
    answer: 0,
    explanation: 'Rate r = 4% = 4/100 = 1/25. Multiplier = 26/25. Present Value formula: Principal P = Installment x [ 1/(1+r) + 1/(1+r)^2 ]. Here, 25500 = x * [ 25/26 + (25/26)^2 ] = x * [ 25/26 + 625/676 ] = x * [ (650 + 625) / 676 ] = x * [ 1275 / 676 ]. Therefore, x = (25500 * 676) / 1275 = 20 * 676 = Rs. 13,520.',
    explanationHi: 'दर r = 4% = 1/25। किस्त x हेतु: 25500 = x [25/26 + 625/676] = x [1275/676]। अतः x = (25500 * 676) / 1275 = 20 * 676 = रु. 13,520।',
    sourceType: 'VERIFIED PYQ',
    source: 'SSC CGL Tier II Quant Q18',
    year: 2023,
    tags: ['SSC-CGL', 'Compound Interest', 'Installments']
  },
  {
    id: 'ssc-reas-001',
    exam: 'ssc-cgl',
    paper: 'Tier I & II',
    subject: 'Reasoning and General Intelligence',
    topic: 'Coding-Decoding',
    difficulty: 'Easy',
    question: 'In a certain code language, if "FLOWER" is written as "UOLDVI", how will "GARDEN" be written in that same code language?',
    questionHi: 'एक निश्चित कूट भाषा में यदि "FLOWER" को "UOLDVI" लिखा जाता है, तो उसी कूट भाषा में "GARDEN" को क्या लिखा जाएगा?',
    options: [
      'TZIWVM',
      'HZIWVM',
      'TZIUMV',
      'TYIUMW'
    ],
    optionsHi: [
      'TZIWVM',
      'HZIWVM',
      'TZIUMV',
      'TYIUMW'
    ],
    answer: 0,
    explanation: 'The pattern uses opposite alphabetical letters (sum of letter positions = 27): G(7) <-> T(20), A(1) <-> Z(26), R(18) <-> I(9), D(4) <-> W(23), E(5) <-> V(22), N(14) <-> M(13). Result = TZIWVM.',
    explanationHi: 'यह विपरीत वर्णमाला युग्म (योग = 27) का पैटर्न है: G↔T, A↔Z, R↔I, D↔W, E↔V, N↔M = TZIWVM।',
    sourceType: 'VERIFIED PYQ',
    source: 'SSC CGL Tier I Reasoning Q14',
    year: 2023,
    tags: ['SSC-CGL', 'Reasoning', 'Opposite Letters']
  }
];
