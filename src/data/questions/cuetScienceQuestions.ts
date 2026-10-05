import { Question } from '../../types';

export const cuetScienceQuestions: Question[] = [
  {
    id: 'cuet-phy-001',
    exam: 'cuet-ug-science',
    paper: 'Domain Physics',
    subject: 'Physics',
    topic: 'Electrostatics & Gauss Law',
    difficulty: 'Easy',
    question: 'A point charge +q is located at the center of an imaginary cube of side a. According to Gauss’s Law, what is the electric flux passing through ANY ONE of the six faces of the cube?',
    questionHi: 'भुजा a वाले एक काल्पनिक घन के केंद्र पर +q बिंदु आवेश स्थित है। गाउस के नियम के अनुसार घन के किसी एक फलक (Face) से गुजरने वाला कुल विद्युत फ्लक्स कितना होगा?',
    options: [
      'q / epsilon_0',
      'q / (6 * epsilon_0)',
      '6 * q / epsilon_0',
      'q / (8 * epsilon_0)'
    ],
    optionsHi: [
      'q / epsilon_0',
      'q / (6 * epsilon_0)',
      '6 * q / epsilon_0',
      'q / (8 * epsilon_0)'
    ],
    answer: 1,
    explanation: 'By Gauss Law, total flux passing through the closed cube is Phi_total = q / epsilon_0. Since the cube has 6 symmetric faces and the charge is at the center, the flux through any single face is Phi_face = Phi_total / 6 = q / (6 * epsilon_0).',
    explanationHi: 'गाउस के नियम से संपूर्ण घन से कुल फ्लक्स = q / epsilon_0 होता है। घन के 6 सममित फलक होने के कारण किसी एक फलक से निर्गत फ्लक्स = q / (6 * epsilon_0) होगा।',
    sourceType: 'VERIFIED PYQ',
    source: 'CUET-UG Physics 2023 Shift 1 Q12',
    year: 2023,
    tags: ['CUET-UG', 'Physics', 'Gauss Law', 'NCERT Class 12']
  },
  {
    id: 'cuet-chem-001',
    exam: 'cuet-ug-science',
    paper: 'Domain Chemistry',
    subject: 'Chemistry',
    topic: 'Solutions & Colligative Properties',
    difficulty: 'Medium',
    question: 'Which of the following 0.1 M aqueous solutions will exhibit the highest boiling point elevation?',
    questionHi: 'निम्नलिखित 0.1 M जलीय विलयनों में से किसका क्वथनांक उन्नयन (Boiling Point Elevation) अधिकतम होगा?',
    options: [
      '0.1 M Glucose (C6H12O6)',
      '0.1 M Sodium Chloride (NaCl)',
      '0.1 M Calcium Chloride (CaCl2)',
      '0.1 M Aluminium Sulfate (Al2(SO4)3)'
    ],
    optionsHi: [
      '0.1 M ग्लूकोज',
      '0.1 M सोडियम क्लोराइड (NaCl)',
      '0.1 M कैल्शियम क्लोराइड (CaCl2)',
      '0.1 M एल्युमिनियम सल्फेट (Al2(SO4)3)'
    ],
    answer: 3,
    explanation: 'Elevation in boiling point is a colligative property given by Delta Tb = i * Kb * m. The Van’t Hoff factor (i) for Glucose = 1, NaCl = 2, CaCl2 = 3, and Al2(SO4)3 = 2 Al(3+) + 3 SO4(2-) = 5. Having the largest i value (5), Al2(SO4)3 produces the highest particle concentration and hence maximum boiling point elevation.',
    explanationHi: 'क्वथनांक उन्नयन Delta Tb = i * Kb * m होता है। वांट हॉफ गुणांक (i) Al2(SO4)3 के लिए सर्वाधिक (i = 5) है, अतः इसका क्वथनांक उन्नयन अधिकतम होगा।',
    sourceType: 'VERIFIED PYQ',
    source: 'CUET-UG Chemistry 2023 Shift 2 Q18',
    year: 2023,
    tags: ['CUET-UG', 'Chemistry', 'Solutions', 'Colligative']
  },
  {
    id: 'cuet-bio-001',
    exam: 'cuet-ug-science',
    paper: 'Domain Biology',
    subject: 'Biology',
    topic: 'Molecular Basis of Inheritance & Operon',
    difficulty: 'Medium',
    question: 'In the Lac Operon model of Escherichia coli proposed by Jacob and Monod, the repressor protein synthesized by the i-gene binds to which specific region to inhibit transcription in the absence of lactose?',
    questionHi: 'जैकब एवं मोनोड द्वारा प्रस्तुत लैक्टोज ऑपेरॉन (Lac Operon) में, i-जीन द्वारा संश्लेषित दमनकारी प्रोटीन (Repressor protein) लैक्टोज की अनुपस्थिति में किस विशिष्ट क्षेत्र से जुड़कर अनुलेखन रोकता है?',
    options: [
      'Promoter region (p)',
      'Operator region (o)',
      'Structural gene z',
      'Terminator site'
    ],
    optionsHi: [
      'प्रमोटर (उन्नायक) स्थल',
      'ऑपरेटर (प्रचालक) स्थल',
      'संरचनात्मक जीन z',
      'समापक स्थल'
    ],
    answer: 1,
    explanation: 'In the absence of inducer (lactose/allolactose), the active repressor protein binds to the operator (o) region, sterically blocking RNA polymerase from transcribing the structural genes z, y, and a.',
    explanationHi: 'लैक्टोज की अनुपस्थिति में रिप्रेशर प्रोटीन ऑपरेटर (प्रचालक) स्थल से जुड़ जाता है, जिससे आरएनए पॉलीमरेज एंजाइम संरचनात्मक जीनों का अनुलेखन नहीं कर पाता।',
    sourceType: 'VERIFIED PYQ',
    source: 'CUET-UG Biology 2024 Shift 1 Q26',
    year: 2024,
    tags: ['CUET-UG', 'Biology', 'Lac Operon', 'Genetics']
  }
];
