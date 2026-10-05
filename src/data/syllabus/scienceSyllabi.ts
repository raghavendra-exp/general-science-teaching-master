import { Syllabus } from '../../types';

export const iitJamSyllabus: Syllabus = {
  examId: 'iit-jam',
  examName: 'IIT JAM (Physics, Chemistry, Mathematics, Biotechnology)',
  subjects: [
    {
      id: 'jam-ph',
      name: 'Physics (PH)',
      nameHi: 'भौतिकी (PH)',
      weightage: '100 Marks (60 Questions: MCQ, MSQ, NAT)',
      topics: [
        {
          id: 'jam-ph-mech',
          name: 'Mathematical Methods & Mechanics',
          nameHi: 'गणितीय विधियां एवं यांत्रिकी',
          subtopics: [
            'Calculus of single and multiple variables, Partial derivatives, Jacobian, Taylor series, Vector calculus (Divergence, Curl, Stokes theorem, Gauss theorem)',
            'Newton laws of motion, Conservation of linear and angular momentum, Work-energy theorem, Conservative forces and potentials',
            'Gravitational field and potential, Kepler laws, System of particles, Center of mass, Moment of inertia and Principal axes'
          ],
          pyqFrequency: 'High'
        },
        {
          id: 'jam-ph-waves-optics',
          name: 'Oscillations, Waves and Optics',
          nameHi: 'दोलन, तरंगें एवं प्रकाशिकी',
          subtopics: [
            'Differential equation for simple harmonic oscillator and its general solution, Superposition of two or more SHMs, Lissajous figures, Damped and forced oscillators',
            'Fermat Principle, General theory of image formation, Interference of light (Young double slit, Newton rings), Diffraction (Fraunhofer diffraction by single slit, double slit, grating), Polarization'
          ],
          pyqFrequency: 'High'
        },
        {
          id: 'jam-ph-electrodynamics',
          name: 'Electricity and Magnetism',
          nameHi: 'विद्युत एवं चुंबकत्व',
          subtopics: [
            'Coulomb law, Gauss law and its applications, Electric potential, Field due to continuous charge distributions, Method of images, Dielectrics and polarization',
            'Biot-Savart law, Ampere law, Magnetic vector potential, Lorentz force, Faraday law of electromagnetic induction, Maxwell equations in vacuum and matter'
          ],
          pyqFrequency: 'High'
        },
        {
          id: 'jam-ph-modern',
          name: 'Kinetic Theory, Thermodynamics & Modern Physics',
          nameHi: 'ऊष्मागतिकी एवं आधुनिक भौतिकी',
          subtopics: [
            'Elements of Kinetic theory of gases, Maxwell-Boltzmann velocity distribution, Laws of thermodynamics, Zeroth, First, Second and Third law, Entropy, Carnot engine, Maxwell thermodynamic relations',
            'Inertial frames and Galilean invariance, Postulates of special relativity, Lorentz transformations, Length contraction, Time dilation, Relativistic addition of velocities, Mass-energy equivalence',
            'Blackbody radiation, Photoelectric effect, Compton effect, Bohr model of atom, De Broglie hypothesis, Wave-particle duality, Heisenberg uncertainty principle, 1D Schrödinger equation'
          ],
          pyqFrequency: 'High'
        }
      ]
    },
    {
      id: 'jam-cy',
      name: 'Chemistry (CY)',
      nameHi: 'रसायन विज्ञान (CY)',
      weightage: '100 Marks (60 Questions)',
      topics: [
        {
          id: 'jam-cy-physical',
          name: 'Physical Chemistry',
          nameHi: 'भौतिक रसायन',
          subtopics: [
            'Atomic and Molecular Structure: Planck quantum theory, Bohr model, Schrödinger wave equation, Radial and angular distribution functions',
            'Theory of Gases: Kinetic molecular theory, Real gases, Van der Waals equation of state, Critical phenomena',
            'Chemical Thermodynamics: First, Second and Third laws of thermodynamics, Gibbs free energy, Helmholtz energy, Chemical potential',
            'Chemical and Phase Equilibria: Law of mass action, Le Chatelier principle, One and two component systems, Clausius-Clapeyron equation',
            'Electrochemistry: Conductance, Debye-Hückel-Onsager theory, EMF of electrochemical cells, Nernst equation',
            'Chemical Kinetics: Rate laws, Order and molecularity, Arrhenius equation, Catalysis and Enzyme kinetics'
          ],
          pyqFrequency: 'High'
        },
        {
          id: 'jam-cy-organic',
          name: 'Organic Chemistry',
          nameHi: 'कार्बनिक रसायन',
          subtopics: [
            'Basic Concepts in Organic Chemistry: Inductive effect, Resonance, Hyperconjugation, Aromaticity (Hückel rule), Acidity and basicity',
            'Stereochemistry: Chirality, Optical isomerism, Enantiomers, Diastereomers, R/S and E/Z nomenclature, Conformations of acyclic and cyclic systems',
            'Reaction Mechanisms: Nucleophilic substitutions (SN1, SN2), Eliminations (E1, E2), Electrophilic aromatic substitution, Aldol condensation, Cannizzaro, Grignard reagents'
          ],
          pyqFrequency: 'High'
        },
        {
          id: 'jam-cy-inorganic',
          name: 'Inorganic Chemistry',
          nameHi: 'अकार्बनिक रसायन',
          subtopics: [
            'Periodic Table and Periodicity, Chemical Bonding: VSEPR theory, MO theory of homonuclear and heteronuclear diatomics',
            'Main Group Elements (s and p blocks): Hydrides, oxides, oxoacids, halides, interhalogen compounds',
            'Transition Metals (d-block): Coordination compounds, Werner theory, Valence bond theory, Crystal field theory (CFT), Jahn-Teller distortion, Magnetic properties'
          ],
          pyqFrequency: 'High'
        }
      ]
    },
    {
      id: 'jam-ma',
      name: 'Mathematics (MA)',
      nameHi: 'गणित (MA)',
      weightage: '100 Marks (60 Questions)',
      topics: [
        {
          id: 'jam-ma-real',
          name: 'Real Analysis & Multivariable Calculus',
          nameHi: 'वास्तविक विश्लेषण एवं कलन',
          subtopics: [
            'Sequences and Series of Real Numbers: Convergence, Cauchy sequences, Bolzano-Weierstrass theorem, Tests for convergence of series of positive terms',
            'Functions of One Variable: Limits, Continuity, Differentiability, Rolle theorem, Mean Value Theorems, Taylor theorem, Maxima and Minima',
            'Multivariable Calculus: Limits, Continuity, Partial derivatives, Directional derivatives, Gradient, Double and Triple integrals, Change of variables, Green, Stokes and Gauss Divergence theorems'
          ],
          pyqFrequency: 'High'
        },
        {
          id: 'jam-ma-algebra',
          name: 'Linear Algebra & Abstract Algebra (Groups)',
          nameHi: 'रैखिक बीजगणित एवं समूह सिद्धांत',
          subtopics: [
            'Matrices, Rank, Nullity, System of Linear Equations, Eigenvalues and Eigenvectors, Cayley-Hamilton Theorem',
            'Vector Spaces, Subspaces, Linear Dependence and Independence, Basis and Dimension, Linear Transformations, Matrix representation',
            'Groups, Subgroups, Cyclic Groups, Permutation Groups, Lagrange Theorem, Normal Subgroups, Quotient Groups, Group Homomorphisms'
          ],
          pyqFrequency: 'High'
        },
        {
          id: 'jam-ma-ode',
          name: 'Ordinary Differential Equations (ODEs)',
          nameHi: 'साधारण अवकल समीकरण',
          subtopics: [
            'First order ODEs: Integrating factors, Exact differential equations, Separable equations',
            'Linear ODEs with constant coefficients, Method of undetermined coefficients, Variation of parameters, Cauchy-Euler equations'
          ],
          pyqFrequency: 'High'
        }
      ]
    }
  ]
};

export const cuetUgScienceSyllabus: Syllabus = {
  examId: 'cuet-ug-science',
  examName: 'CUET-UG Science (Class 12 Domain Core)',
  subjects: [
    {
      id: 'cuet-phy',
      name: 'Physics (Class 12 Board + CUET Syllabus)',
      nameHi: 'भौतिकी (12वीं स्तर)',
      weightage: '200 Marks (50 Questions, Attempt 40)',
      topics: [
        {
          id: 'cuet-phy-electrostatics',
          name: 'Electrostatics & Current Electricity',
          nameHi: 'स्थिरवैद्युतिकी एवं धारा विद्युत',
          subtopics: [
            'Electric Charges and Fields, Gauss Law and its applications',
            'Electrostatic Potential and Capacitance (Series and Parallel combinations, Dielectric slabs)',
            'Ohm Law, Drift velocity, Electrical resistivity and conductivity, Kirchhoff Laws, Wheatstone bridge, Potentiometer principles'
          ],
          ncertMapping: [
            { classLevel: 12, chapterName: 'Physics Part 1 Chapters 1, 2, 3' }
          ],
          pyqFrequency: 'High'
        },
        {
          id: 'cuet-phy-magnetism',
          name: 'Magnetic Effects of Current, Magnetism & EMI/AC',
          nameHi: 'विद्युत धारा के चुंबकीय प्रभाव एवं प्रत्यावर्ती धारा',
          subtopics: [
            'Biot-Savart law, Ampere circuital law, Force on a moving charge in magnetic field (Cyclotron formula), Moving coil galvanometer',
            'Faraday law of electromagnetic induction, Lenz law, Eddy currents, Self and mutual inductance',
            'Alternating Currents: Peak and RMS values, LCR series circuit, Resonance, Power in AC circuits, Transformers'
          ],
          ncertMapping: [
            { classLevel: 12, chapterName: 'Physics Part 1 Chapters 4, 5, 6, 7' }
          ],
          pyqFrequency: 'High'
        },
        {
          id: 'cuet-phy-optics-modern',
          name: 'Optics, Dual Nature of Radiation & Modern Physics',
          nameHi: 'प्रकाशिकी एवं आधुनिक भौतिकी',
          subtopics: [
            'Ray Optics: Reflection, Refraction, Total internal reflection, Lens maker formula, Microscopes and Telescopes',
            'Wave Optics: Huygens principle, Wavefront, Interference (Young double slit experiment), Diffraction (Single slit)',
            'Dual Nature of Matter and Radiation: Photoelectric effect, Einstein photoelectric equation, De Broglie relation',
            'Atoms & Nuclei: Rutherford and Bohr models, Mass defect, Binding energy per nucleon, Nuclear fission and fusion',
            'Semiconductor Electronics: Intrinsic and extrinsic semiconductors, p-n junction diode, I-V characteristics, Rectifier, Logic gates'
          ],
          ncertMapping: [
            { classLevel: 12, chapterName: 'Physics Part 2 Chapters 9 to 14' }
          ],
          pyqFrequency: 'High'
        }
      ]
    },
    {
      id: 'cuet-chem',
      name: 'Chemistry (Class 12 Core)',
      nameHi: 'रसायन विज्ञान (12वीं स्तर)',
      weightage: '200 Marks (50 Questions, Attempt 40)',
      topics: [
        {
          id: 'cuet-chem-physical',
          name: 'Solutions, Electrochemistry & Chemical Kinetics',
          nameHi: 'विलयन, वैद्युतरसायन एवं रासायनिक बलगतिकी',
          subtopics: [
            'Types of solutions, Raoult law, Colligative properties (Elevation of BP, Depression of FP, Osmotic pressure), Van’t Hoff factor',
            'Redox reactions, Conductance, Kohlrausch law, Galvanic cells, Nernst equation, Batteries and Fuel cells',
            'Rate of a reaction, Factors affecting rates, Order and molecularity, Integrated rate equations for zero and first order, Arrhenius equation'
          ],
          ncertMapping: [{ classLevel: 12, chapterName: 'Chemistry Part 1 Chapters 1, 2, 3' }],
          pyqFrequency: 'High'
        },
        {
          id: 'cuet-chem-inorganic',
          name: 'd and f Block Elements & Coordination Compounds',
          nameHi: 'd एवं f ब्लॉक तत्व तथा उपसहसंयोजन यौगिक',
          subtopics: [
            'General characteristics of transition elements, Oxidation states, Color, Catalytic properties, Lanthanoid contraction',
            'Coordination compounds: IUPAC nomenclature, Werner theory, Valence Bond Theory, Crystal Field Theory, Isomerism'
          ],
          ncertMapping: [{ classLevel: 12, chapterName: 'Chemistry Part 1 Chapters 4, 5' }],
          pyqFrequency: 'High'
        },
        {
          id: 'cuet-chem-organic',
          name: 'Haloalkanes, Alcohols, Carbonyl Compounds & Biomolecules',
          nameHi: 'कार्बनिक यौगिक एवं जैव-अणु',
          subtopics: [
            'Haloalkanes and Haloarenes: Mechanism of nucleophilic substitutions (SN1, SN2)',
            'Alcohols, Phenols and Ethers: Preparation, Properties, Kolbe reaction, Reimer-Tiemann reaction',
            'Aldehydes, Ketones and Carboxylic Acids: Nucleophilic addition, Aldol condensation, Cannizzaro reaction',
            'Amines and Diazonium Salts',
            'Biomolecules: Carbohydrates (Glucose, Fructose), Proteins (Amino acids, Peptide bond), Nucleic Acids (DNA & RNA structure)'
          ],
          ncertMapping: [{ classLevel: 12, chapterName: 'Chemistry Part 2 Chapters 6 to 10' }],
          pyqFrequency: 'High'
        }
      ]
    },
    {
      id: 'cuet-bio',
      name: 'Biology (Botany & Zoology - Class 12)',
      nameHi: 'जीव विज्ञान (वनस्पति एवं प्राणी विज्ञान)',
      weightage: '200 Marks (50 Questions, Attempt 40)',
      topics: [
        {
          id: 'cuet-bio-reproduction',
          name: 'Reproduction in Organisms, Flowering Plants & Humans',
          nameHi: 'जीवों, पुष्पी पादपों एवं मानव में जनन',
          subtopics: [
            'Sexual reproduction in flowering plants: Pollination, Double fertilization, Endosperm and embryo development, Apomixis and Polyembryony',
            'Human reproduction: Male and female reproductive systems, Gametogenesis, Menstrual cycle, Fertilization, Embryonic development, Parturition',
            'Reproductive health: Contraceptive methods, Medical Termination of Pregnancy (MTP), Sexually Transmitted Infections (STIs), Assisted Reproductive Technologies (IVF, ZIFT, GIFT)'
          ],
          ncertMapping: [{ classLevel: 12, chapterName: 'Biology Chapters 1, 2, 3' }],
          pyqFrequency: 'High'
        },
        {
          id: 'cuet-bio-genetics',
          name: 'Genetics and Evolution',
          nameHi: 'आनुवंशिकी एवं जैव विकास',
          subtopics: [
            'Mendelian inheritance, Deviations from Mendelism (Incomplete dominance, Codominance, Multiple alleles, Pleiotropy), Chromosomal theory of inheritance',
            'Sex determination in humans, birds and honeybees, Sex-linked inheritance (Haemophilia, Color blindness), Mendelian disorders (Sickle cell anemia, Thalassemia, Phenylketonuria), Chromosomal disorders (Down syndrome, Turner syndrome, Klinefelter syndrome)',
            'Molecular basis of inheritance: DNA as genetic material, Structure of DNA and RNA, DNA replication, Transcription, Genetic code, Translation, Lac operon, Human Genome Project (HGP), DNA fingerprinting',
            'Evolution: Origin of life, Biological evolution and evidences, Darwin contribution, Modern synthetic theory, Hardy-Weinberg principle, Adaptive radiation, Human evolution'
          ],
          ncertMapping: [{ classLevel: 12, chapterName: 'Biology Chapters 4, 5, 6' }],
          pyqFrequency: 'High'
        },
        {
          id: 'cuet-bio-biotech-ecology',
          name: 'Biotechnology & Ecology / Environment',
          nameHi: 'जैव प्रौद्योगिकी एवं पारिस्थितिकी',
          subtopics: [
            'Principles and processes of Biotechnology: Recombinant DNA technology, Restriction enzymes, Cloning vectors, PCR, Bioreactors',
            'Applications of Biotechnology in Health and Agriculture: Genetically Modified (GM) organisms, Bt cotton, RNA interference (RNAi), Insulin production, Gene therapy, Biopiracy',
            'Organisms and Populations: Habitat and niche, Population interactions (Mutualism, Competition, Predation, Parasitism)',
            'Ecosystem: Productivity, Decomposition, Energy flow, Ecological pyramids',
            'Biodiversity and Conservation: Hotspots, In-situ and Ex-situ conservation, IUCN Red Data book'
          ],
          ncertMapping: [{ classLevel: 12, chapterName: 'Biology Chapters 7 to 13' }],
          pyqFrequency: 'High'
        }
      ]
    }
  ]
};
