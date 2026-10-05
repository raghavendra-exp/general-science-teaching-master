import { Question } from '../../types';

export const iitJamQuestions: Question[] = [
  {
    id: 'jam-ph-001',
    exam: 'iit-jam',
    paper: 'Physics (PH)',
    subject: 'Physics',
    topic: 'Electrodynamics & Maxwell Equations',
    difficulty: 'Hard',
    question: 'In free space, an electromagnetic wave has an electric field given by E(x, t) = y_hat * E0 * cos(k*x - omega*t). What is the corresponding magnetic field vector B(x, t)?',
    questionHi: 'मुक्त आकाश में, एक विद्युत चुंबकीय तरंग का विद्युत क्षेत्र E(x, t) = y_hat * E0 * cos(k*x - omega*t) है। संगत चुंबकीय क्षेत्र सदिश B(x, t) क्या होगा?',
    options: [
      'z_hat * (E0 / c) * cos(k*x - omega*t)',
      '-z_hat * (E0 / c) * cos(k*x - omega*t)',
      'x_hat * (E0 / c) * sin(k*x - omega*t)',
      'z_hat * (c * E0) * cos(k*x - omega*t)'
    ],
    optionsHi: [
      'z_hat * (E0 / c) * cos(k*x - omega*t)',
      '-z_hat * (E0 / c) * cos(k*x - omega*t)',
      'x_hat * (E0 / c) * sin(k*x - omega*t)',
      'z_hat * (c * E0) * cos(k*x - omega*t)'
    ],
    answer: 0,
    explanation: 'For a plane EM wave propagating along the +x direction (k_hat = x_hat), the relationship between E and B is B = (1/c) * (k_hat x E). Here k_hat x y_hat = x_hat x y_hat = z_hat. Hence, B(x, t) = z_hat * (E0 / c) * cos(k*x - omega*t).',
    explanationHi: '+x दिशा में संचरित तरंग हेतु B = (k_hat x E)/c = (x_hat x y_hat) * (E0/c) = z_hat * (E0/c) * cos(kx - wt)।',
    sourceType: 'VERIFIED PYQ',
    source: 'IIT JAM Physics 2023 Section A Q14',
    year: 2023,
    tags: ['IIT-JAM', 'Physics', 'Electrodynamics']
  },
  {
    id: 'jam-cy-001',
    exam: 'iit-jam',
    paper: 'Chemistry (CY)',
    subject: 'Chemistry',
    topic: 'Chemical Thermodynamics',
    difficulty: 'Medium',
    question: 'For an ideal gas undergoing a reversible isothermal expansion from volume V1 to V2, what is the change in Gibbs free energy (Delta G)?',
    questionHi: 'एक आदर्श गैस के उत्क्रमणीय समतापीय प्रसार (आयतन V1 से V2) के लिए गिब्स मुक्त ऊर्जा में परिवर्तन (Delta G) क्या होगा?',
    options: [
      'Delta G = 0',
      'Delta G = n * R * T * ln(V1 / V2)',
      'Delta G = n * R * T * ln(V2 / V1)',
      'Delta G = -n * R * T'
    ],
    optionsHi: [
      'Delta G = 0',
      'Delta G = n * R * T * ln(V1 / V2)',
      'Delta G = n * R * T * ln(V2 / V1)',
      'Delta G = -n * R * T'
    ],
    answer: 1,
    explanation: 'For an isothermal process (dT = 0), dG = V dP. Integrating from P1 to P2 for an ideal gas yields Delta G = n*R*T*ln(P2/P1). Since by Boyle law P1*V1 = P2*V2, P2/P1 = V1/V2. Thus, Delta G = n*R*T*ln(V1/V2) = -n*R*T*ln(V2/V1).',
    explanationHi: 'समतापीय प्रक्रिया में dG = V dP। आदर्श गैस हेतु समाकलन करने पर Delta G = nRT ln(P2/P1) = nRT ln(V1/V2)।',
    sourceType: 'VERIFIED PYQ',
    source: 'IIT JAM Chemistry 2024 Section A Q8',
    year: 2024,
    tags: ['IIT-JAM', 'Chemistry', 'Thermodynamics']
  },
  {
    id: 'jam-ma-001',
    exam: 'iit-jam',
    paper: 'Mathematics (MA)',
    subject: 'Mathematics',
    topic: 'Linear Algebra & Eigenvalues',
    difficulty: 'Medium',
    question: 'Let M be a 3x3 real matrix with trace equal to 6 and determinant equal to 6. If 1 is an eigenvalue of M, what are the other two eigenvalues?',
    questionHi: 'माना M एक 3x3 वास्तविक आव्यूह है जिसका ट्रेस 6 और सारणिक 6 है। यदि 1 इसका एक आइगेनमान (eigenvalue) है, तो अन्य दो आइगेनमान क्या होंगे?',
    options: [
      '2 and 3',
      '1 and 4',
      '-2 and -3',
      '0 and 5'
    ],
    optionsHi: [
      '2 एवं 3',
      '1 एवं 4',
      '-2 एवं -3',
      '0 एवं 5'
    ],
    answer: 0,
    explanation: 'Trace of matrix = sum of eigenvalues: lambda1 + lambda2 + lambda3 = 6. Given lambda1 = 1, so lambda2 + lambda3 = 5. Determinant = product of eigenvalues: lambda1 * lambda2 * lambda3 = 1 * lambda2 * lambda3 = 6, so lambda2 * lambda3 = 6. Solving x^2 - 5x + 6 = 0 yields eigenvalues 2 and 3.',
    explanationHi: 'ट्रेस = आइगेनमानों का योग: 1 + L2 + L3 = 6 => L2 + L3 = 5। सारणिक = आइगेनमानों का गुणनफल: 1 * L2 * L3 = 6 => L2 * L3 = 6। द्विघात समीकरण से मान 2 और 3 प्राप्त होते हैं।',
    sourceType: 'VERIFIED PYQ',
    source: 'IIT JAM Mathematics 2023 Section A Q5',
    year: 2023,
    tags: ['IIT-JAM', 'Mathematics', 'Linear Algebra']
  }
];
