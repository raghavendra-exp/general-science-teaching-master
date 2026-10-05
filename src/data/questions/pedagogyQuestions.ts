import { Question } from '../../types';

export const pedagogyQuestions: Question[] = [
  {
    id: 'ped-th-001',
    exam: 'teaching-pedagogy-master',
    paper: 'Learning Theories',
    subject: 'Educational Psychology',
    topic: 'Thorndike Laws of Learning',
    difficulty: 'Easy',
    question: 'According to E.L. Thorndike’s Connectionism (Trial and Error Theory), which law states that connections are strengthened with practice and weakened when practice is discontinued?',
    questionHi: 'ई. एल. थार्नडाइक के प्रयास एवं त्रुटि (संबंधवाद) सिद्धांत के अनुसार, कौन सा नियम यह बताता है कि अभ्यास करने से संबंध सुदृढ़ होते हैं तथा अभ्यास छोड़ देने पर कमजोर हो जाते हैं?',
    options: [
      'Law of Readiness (तत्परता का नियम)',
      'Law of Exercise (अभ्यास का नियम)',
      'Law of Effect (प्रभाव का नियम)',
      'Law of Attitude (मनोवृत्ति का नियम)'
    ],
    optionsHi: [
      'तत्परता का नियम (Law of Readiness)',
      'अभ्यास का नियम (Law of Exercise)',
      'प्रभाव का नियम (Law of Effect)',
      'मनोवृत्ति का नियम (Law of Attitude)'
    ],
    answer: 1,
    explanation: 'Thorndike’s Law of Exercise comprises the Law of Use (practice strengthens bonds) and Law of Disuse (lack of practice weakens bonds).',
    explanationHi: 'थार्नडाइक का अभ्यास का नियम (Law of Exercise) उपयोग एवं अनुपयोग के नियम में विभाजित है, जिसके अनुसार निरंतर अभ्यास से अधिगम दृढ़ होता है।',
    sourceType: 'VERIFIED PYQ',
    source: 'State TET / CTET Pedagogy Core Question',
    year: 2023,
    tags: ['Thorndike', 'Laws of Learning', 'Pedagogy']
  },
  {
    id: 'ped-th-002',
    exam: 'teaching-pedagogy-master',
    paper: 'Learning Theories',
    subject: 'Educational Psychology',
    topic: 'Bandura Social Learning Theory',
    difficulty: 'Medium',
    question: 'Albert Bandura proposed that observational learning (modeling) involves four consecutive processes. What is the correct sequence of these four processes?',
    questionHi: 'अल्बर्ट बंडूरा के सामाजिक अधिगम (अवलोकनात्मक अधिगम) सिद्धांत के अनुसार चार क्रमिक प्रक्रियाओं का सही क्रम क्या है?',
    options: [
      'Attention → Retention → Reproduction → Motivation',
      'Motivation → Attention → Retention → Reproduction',
      'Retention → Attention → Reproduction → Motivation',
      'Attention → Reproduction → Retention → Motivation'
    ],
    optionsHi: [
      'अवधान (Attention) → धारणा (Retention) → पुनः प्रस्तुतीकरण (Reproduction) → अभिप्रेरणा (Motivation)',
      'अभिप्रेरणा → अवधान → धारणा → पुनः प्रस्तुतीकरण',
      'धारणा → अवधान → पुनः प्रस्तुतीकरण → अभिप्रेरणा',
      'अवधान → पुनः प्रस्तुतीकरण → धारणा → अभिप्रेरणा'
    ],
    answer: 0,
    explanation: 'Bandura’s Social Cognitive model requires: 1. Attention (observing the model), 2. Retention (encoding behavior in memory), 3. Reproduction (motor execution of the behavior), and 4. Motivation (incentive/reinforcement to perform).',
    explanationHi: 'बंडूरा के अवलोकनात्मक अधिगम का सही क्रम है: 1. ध्यान/अवधान (Attention), 2. धारणा/स्मृति (Retention), 3. पुनः उत्पादन (Reproduction), 4. अभिप्रेरणा (Motivation)।',
    sourceType: 'VERIFIED PYQ',
    source: 'KVS / CTET Child Pedagogy',
    year: 2023,
    tags: ['Bandura', 'Social Learning', 'Observational Learning']
  },
  {
    id: 'ped-assess-001',
    exam: 'teaching-pedagogy-master',
    paper: 'Assessment & Evaluation',
    subject: 'Teaching Pedagogy',
    topic: 'Diagnostic and Remedial Teaching',
    difficulty: 'Easy',
    question: 'What is the primary objective of "Diagnostic Testing" in classroom pedagogy?',
    questionHi: 'कक्षा शिक्षण में "निदानात्मक परीक्षण" (Diagnostic Testing) का प्राथमिक उद्देश्य क्या होता है?',
    options: [
      'To provide final grades and ranks at the end of the academic year.',
      'To identify the specific gaps and learning difficulties faced by students in understanding concepts.',
      'To reward high scoring students with scholarships.',
      'To evaluate the effectiveness of school infrastructure.'
    ],
    optionsHi: [
      'सत्र के अंत में अंतिम ग्रेड और रैंक प्रदान करना।',
      'विषय-वस्तु की समझ में छात्रों की विशिष्ट कमियों एवं कठिनाइयों की पहचान करना।',
      'उच्च अंक पाने वाले छात्रों को छात्रवृत्ति प्रदान करना।',
      'विद्यालय के भौतिक बुनियादी ढांचे का मूल्यांकन करना।'
    ],
    answer: 1,
    explanation: 'Diagnostic evaluation aims to pinpoint specific conceptual weaknesses and misconceptions of students so that targeted remedial teaching (उपचारात्मक शिक्षण) can be formulated.',
    explanationHi: 'निदानात्मक परीक्षण का उद्देश्य विद्यार्थियों की सीखने संबंधी कमियों, त्रुटियों और अधिगम बाधाओं को पहचानना है, जिसके बाद उपचारात्मक शिक्षण दिया जाता है।',
    sourceType: 'ORIGINAL',
    source: 'National Pedagogy Framework',
    year: 2024,
    tags: ['Diagnostic Testing', 'Remedial Teaching', 'Evaluation']
  }
];
