import { ScienceConcept } from '../../types';

export const scienceConceptsData: ScienceConcept[] = [
  // Physics Concepts
  {
    id: 'sci-phy-mechanics',
    discipline: 'physics',
    title: 'Classical Mechanics & Laws of Motion',
    titleHi: 'चिरसम्मत यांत्रिकी एवं गति के नियम',
    summary: 'Foundational principles governing macroscopic motion, inertia, conservation laws, work-energy theorem, and rotational dynamics.',
    summaryHi: 'न्यूटन के गति नियम, संवेग व ऊर्जा संरक्षण के सिद्धांत, जड़त्व आघूर्ण और घूर्णी गतििकी के मूल सिद्धांत।',
    formulas: [
      { name: 'Newton’s Second Law', formula: 'F = dp/dt = m · a', note: 'Valid for constant mass system.' },
      { name: 'Work-Energy Theorem', formula: 'W_net = Delta K = 1/2 m(v^2 - u^2)', note: 'Net work done equals change in kinetic energy.' },
      { name: 'Law of Conservation of Linear Momentum', formula: 'Sum(p_initial) = Sum(p_final)', note: 'Valid when net external force is zero.' },
      { name: 'Rotational Kinetic Energy', formula: 'K_rot = 1/2 I · omega^2', note: 'I is moment of inertia, omega is angular velocity.' }
    ],
    keyReactionsOrLaws: [
      'Newton’s First Law (Law of Inertia)',
      'Newton’s Universal Gravitation: F = G · (m1 · m2) / r^2',
      'Kepler’s Three Laws of Planetary Motion',
      'Parallel and Perpendicular Axis Theorems'
    ],
    targetExams: ['CSIR-NET Physical Sciences', 'IIT JAM Physics', 'GATE PH', 'CUET-UG Physics', 'KVS PGT Physics']
  },
  {
    id: 'sci-phy-thermodynamics',
    discipline: 'physics',
    title: 'Thermodynamics & Kinetic Theory of Gases',
    titleHi: 'ऊष्मागतिकी एवं गैसों का अणुगति सिद्धांत',
    summary: 'Macroscopic and statistical descriptions of heat, work, entropy, thermodynamic potentials, and microscopic molecular collisions.',
    summaryHi: 'ऊष्मागतिकी के नियम, कार्नो इंजन की दक्षता, एन्ट्रॉपी, गिब्स ऊर्जा और मैक्सवेल संबंध।',
    formulas: [
      { name: 'First Law of Thermodynamics', formula: 'Delta Q = Delta U + Delta W = Delta U + P Delta V', note: 'Conservation of energy principle.' },
      { name: 'Carnot Engine Efficiency', formula: 'eta = 1 - (T_cold / T_hot) = (W / Q_in)', note: 'Maximum theoretical thermal efficiency.' },
      { name: 'Entropy Definition', formula: 'dS = dQ_rev / T', note: 'dS >= 0 for isolated spontaneous systems.' },
      { name: 'Ideal Gas Equation', formula: 'P · V = n · R · T = N · k_B · T', note: 'R = 8.314 J/(mol·K), k_B = 1.38 x 10^-23 J/K.' }
    ],
    keyReactionsOrLaws: [
      'Zeroth Law (Thermal Equilibrium & Temperature)',
      'Second Law (Clausius & Kelvin-Planck Statements)',
      'Third Law of Thermodynamics (Nernst Heat Theorem: S -> 0 as T -> 0 K)',
      'Maxwell Thermodynamic Relations'
    ],
    targetExams: ['CSIR-NET Physical Sciences', 'IIT JAM Physics/Chemistry', 'GATE PH/CY', 'CUET-UG Physics']
  },
  {
    id: 'sci-phy-optics',
    discipline: 'physics',
    title: 'Wave Optics & Interference, Diffraction, Polarization',
    titleHi: 'तरंग प्रकाशिकी: व्यतिकरण, विवर्तन एवं ध्रुवण',
    summary: 'Wave behavior of light including Huygens wave theory, Young’s double slit interference, single slit Fraunhofer diffraction, and polarization.',
    summaryHi: 'हाइगेन्स का तरंग सिद्धांत, यंग का द्विक-छिद्र प्रयोग, फ्रौनहोफर विवर्तन और ब्रूस्टर का नियम।',
    formulas: [
      { name: 'Young’s Double Slit Fringe Width', formula: 'beta = (lambda · D) / d', note: 'D is screen distance, d is slit separation.' },
      { name: 'Diffraction Minima (Single Slit)', formula: 'a · sin(theta) = m · lambda (m = 1, 2, ...)', note: 'a is slit width.' },
      { name: 'Brewster’s Law of Polarization', formula: 'tan(i_p) = mu', note: 'Reflected ray is completely plane polarized.' },
      { name: 'Malus’s Law', formula: 'I = I_0 · cos^2(theta)', note: 'Transmitted intensity through analyzer.' }
    ],
    keyReactionsOrLaws: [
      'Huygens Principle of Secondary Wavelets',
      'Constructive Interference: Delta x = n · lambda',
      'Destructive Interference: Delta x = (2n - 1) · lambda / 2',
      'Rayleigh Criterion for Resolving Power'
    ],
    targetExams: ['CSIR Physical Sciences', 'IIT JAM Physics', 'CUET-UG Physics', 'NEST', 'IAT']
  },

  // Chemistry Concepts
  {
    id: 'sci-chem-coordination',
    discipline: 'chemistry',
    title: 'Coordination Chemistry & Crystal Field Theory (CFT)',
    titleHi: 'उपसहसंयोजन रसायन एवं क्रिस्टल क्षेत्र सिद्धांत',
    summary: 'Bonding, electronic configuration, d-orbital splitting, magnetic properties, and isomerism in transition metal complexes.',
    summaryHi: 'संक्रमण धातुओं के संकुलों में d-कक्षकों का विपाटन (t2g एवं eg), क्रिस्टल क्षेत्र स्थायीकरण ऊर्जा (CFSE) और वर्णक्रम।',
    formulas: [
      { name: 'CFSE (Octahedral Complex)', formula: 'CFSE = [-0.4 · n(t2g) + 0.6 · n(eg)] · Delta_o + m · P', note: 'P is electron pairing energy.' },
      { name: 'Tetrahedral vs Octahedral Splitting', formula: 'Delta_t = 4/9 · Delta_o', note: 'Tetrahedral complexes are almost always high spin.' },
      { name: 'Spin-Only Magnetic Moment', formula: 'mu_s = sqrt(n(n + 2)) Bohr Magnetons (BM)', note: 'n is the number of unpaired electrons.' }
    ],
    keyReactionsOrLaws: [
      'Spectrochemical Series of Ligands (CO > CN- > NO2- > en > NH3 > H2O > F- > OH- > Cl- > Br- > I-)',
      'Jahn-Teller Distortion in d9 and high-spin d4 octahedral systems',
      'Werner’s Theory of Primary and Secondary Valency',
      '18-Electron Rule in Organometallics'
    ],
    targetExams: ['CSIR-NET Chemical Sciences', 'IIT JAM Chemistry', 'GATE CY', 'CUET-PG Chemistry']
  },
  {
    id: 'sci-chem-organic-reactions',
    discipline: 'chemistry',
    title: 'Organic Reaction Mechanisms & Stereochemistry',
    titleHi: 'कार्बनिक अभिक्रिया क्रियाविधियां एवं त्रिविम रसायन',
    summary: 'Nucleophilic substitution, elimination, electrophilic additions, carbonyl chemistry, and stereochemical relationships.',
    summaryHi: 'SN1, SN2, E1, E2 क्रियाविधियां, एरोमैटिक इलेक्ट्रॉनस्नेही प्रतिस्थापन और प्रकाशीय समावयवता।',
    formulas: [
      { name: 'Arrhenius Rate Equation', formula: 'k = A · e^(-E_a / (R · T))', note: 'ln(k2/k1) = (Ea/R) · (1/T1 - 1/T2).' },
      { name: 'Optical Activity & Specific Rotation', formula: '[alpha]^T_lambda = alpha / (l · c)', note: 'l in decimeters, c in g/mL.' }
    ],
    keyReactionsOrLaws: [
      'SN1 (Carbocation intermediate, racemization with partial inversion) vs SN2 (Walden inversion, bimolecular concerted)',
      'Saytzeff Rule (most substituted alkene is major) vs Hofmann Elimination',
      'Markovnikov Addition vs Anti-Markovnikov (Peroxide Effect / Kharasch effect)',
      'Hückel Rule for Aromaticity (4n + 2 pi electrons, planar, conjugated)'
    ],
    targetExams: ['CSIR-NET Chemical Sciences', 'IIT JAM Chemistry', 'GATE CY', 'CUET-UG Chemistry']
  },

  // Biology Concepts
  {
    id: 'sci-bio-molecular',
    discipline: 'biology',
    title: 'Molecular Biology & Recombinant DNA Technology',
    titleHi: 'आणविक जीवविज्ञान एवं पुनर्योगज डीएनए तकनीक',
    summary: 'The Central Dogma of molecular biology, gene expression regulation, PCR amplification, cloning vectors, and CRISPR genome editing.',
    summaryHi: 'डीएनए प्रतिकृति, अनुलेखन, अनुवाद, आनुवंशिक कोड, पीसीआर (PCR) और प्रतिबंध एंजाइम (Restriction Enzymes)।',
    formulas: [
      { name: 'PCR DNA Yield Formula', formula: 'N_n = N_0 · 2^n', note: 'N_0 is starting template copy, n is cycle count.' },
      { name: 'Chargaff’s Base Pairing Rule', formula: '%A = %T and %G = %C; (A+G) = (T+C)', note: 'Applicable strictly to double-stranded DNA.' }
    ],
    keyReactionsOrLaws: [
      'Central Dogma: DNA -> (Transcription) -> mRNA -> (Translation) -> Polypeptide',
      'Meselson-Stahl Experiment proving semiconservative DNA replication',
      'Genetic Code Characteristics: Triplet, Universal, Degenerate, Non-overlapping, Wobble hypothesis',
      'Lac Operon Regulation: Negative regulation by LacI, Positive regulation by cAMP-CAP complex'
    ],
    targetExams: ['CSIR-NET Life Sciences', 'IIT JAM Biotechnology', 'GATE XL/BT', 'CUET-UG Biology']
  },
  {
    id: 'sci-bio-genetics',
    discipline: 'biology',
    title: 'Genetics, Inheritance Patterns & Population Genetics',
    titleHi: 'आनुवंशिकी एवं जनसंख्या आनुवंशिकी',
    summary: 'Mendelian genetics, chromosomal linkage, sex determination, genetic disorders, and Hardy-Weinberg equilibrium.',
    summaryHi: 'मेंडेल के नियम, सहलग्नता, वंशावली विश्लेषण और हार्डी-वीनबर्ग संतुलन (p^2 + 2pq + q^2 = 1)।',
    formulas: [
      { name: 'Hardy-Weinberg Equation', formula: 'p^2 + 2pq + q^2 = 1 and p + q = 1', note: 'p = dominant allele freq, q = recessive allele freq.' },
      { name: 'Recombination Frequency', formula: 'RF = (Number of Recombinants / Total Progeny) x 100 cM', note: '1% recombination = 1 centiMorgan (cM).' }
    ],
    keyReactionsOrLaws: [
      'Mendel’s Law of Segregation (Purity of Gametes) - Monohybrid 3:1 phenotypic, 1:2:1 genotypic ratio',
      'Mendel’s Law of Independent Assortment - Dihybrid 9:3:3:1 phenotypic ratio',
      'Non-Mendelian Inheritance: Incomplete Dominance (Snapdragon 1:2:1), Codominance (ABO blood groups)',
      'Sex-Linked Recessive Inheritance: Haemophilia, Red-Green Color Blindness'
    ],
    targetExams: ['CSIR-NET Life Sciences', 'IIT JAM Biotechnology', 'CUET-UG Biology', 'KVS PGT Biology']
  },

  // Mathematics Concepts
  {
    id: 'sci-math-calculus',
    discipline: 'mathematics',
    title: 'Differential Calculus & Integral Theorems',
    titleHi: 'अवकलन, समाकलन एवं सदिश कलन प्रमेय',
    summary: 'Limits, continuity, derivatives, Taylor series, multiple integrals, and fundamental vector calculus theorems (Green, Stokes, Gauss).',
    summaryHi: 'सीमा, सातत्य, टेलर प्रमेय, बहु-समाकलन और ग्रीन, स्टोक्स व गाउस अपसरण प्रमेय।',
    formulas: [
      { name: 'Taylor Series Expansion', formula: 'f(x) = Sum_{n=0}^infinity [f^(n)(a) / n!] · (x - a)^n', note: 'Expansion about point a.' },
      { name: 'Gauss Divergence Theorem', formula: 'TripleIntegral_V (div F) dV = SurfaceIntegral_S (F · n_hat) dS', note: 'Converts volume integral to closed surface flux.' },
      { name: 'Stokes’s Theorem', formula: 'SurfaceIntegral_S (curl F · n_hat) dS = LineIntegral_C (F · dr)', note: 'Converts surface curl to closed contour circulation.' }
    ],
    keyReactionsOrLaws: [
      'Rolle’s Theorem and Mean Value Theorem (Lagrange MVT: f’(c) = [f(b)-f(a)] / (b-a))',
      'L’Hôpital’s Rule for 0/0 and infinity/infinity indeterminate limits',
      'Leibniz Rule for differentiation under the integral sign'
    ],
    targetExams: ['IIT JAM Mathematics', 'GATE MA', 'CSIR Mathematical Sciences', 'CUET-UG Math']
  }
];

export const getScienceConceptsByDiscipline = (discipline: string): ScienceConcept[] => {
  return scienceConceptsData.filter(c => c.discipline === discipline);
};
