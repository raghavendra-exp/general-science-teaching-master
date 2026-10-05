import { Syllabus } from '../../types';

export const csirNetSyllabus: Syllabus = {
  examId: 'csir-net',
  examName: 'CSIR-UGC NET (Life, Chemical, Physical & Mathematical Sciences)',
  subjects: [
    {
      id: 'csir-part-a-aptitude',
      name: 'Part A: General Aptitude & Research Methodology',
      nameHi: 'भाग क: सामान्य अभिवृत्ति एवं शोध प्रविधि',
      weightage: '30 Marks (20 Questions, Attempt 15)',
      topics: [
        {
          id: 'csir-apt-reasoning',
          name: 'Numerical Ability & Analytical Reasoning',
          nameHi: 'संख्यात्मक क्षमता एवं विश्लेषणात्मक तर्क',
          subtopics: [
            'Number and Alphabetical Series, Venn Diagrams, Syllogisms',
            'Distance, Speed and Direction, Blood Relations, Seating Arrangement',
            'Permutations, Combinations, Probability, Geometry & Mensuration',
            'Data Interpretation: Bar Charts, Pie Charts, Line Graphs, Scatter Plots'
          ],
          pyqFrequency: 'High'
        },
        {
          id: 'csir-apt-scientific',
          name: 'Scientific Reasoning, Graph Analysis & Scales',
          nameHi: 'वैज्ञानिक तर्क, आलेख विश्लेषण एवं पैमाना',
          subtopics: [
            'Logarithmic and Semi-log graphs, Rate kinetics graph analysis',
            'Observation and Deductive Reasoning from experimental setups',
            'Units, Dimensions, Error Analysis and Propagation in measurements'
          ],
          pyqFrequency: 'High'
        }
      ]
    },
    {
      id: 'csir-life-sciences',
      name: 'Life Sciences (Discipline Code: 03)',
      nameHi: 'जीवन विज्ञान (Life Sciences)',
      weightage: '170 Marks (Part B 70 Marks + Part C 100 Marks)',
      topics: [
        {
          id: 'life-sci-mol-cell',
          name: 'Molecules and their Interaction Relevant to Biology & Cellular Organization',
          nameHi: 'अणुओं की अंतःक्रिया एवं कोशिकीय संगठन',
          subtopics: [
            'Structure of atoms, molecules and chemical bonds; Biomolecules: Proteins, Carbohydrates, Lipids, Nucleic Acids',
            'Bioenergetics, Glycolysis, Oxidative Phosphorylation, Coupled reactions',
            'Membrane structure and function (Lipid bilayer, transport across membranes)',
            'Structural organization and function of intracellular organelles (Nucleus, Mitochondria, Golgi, ER, Lysosomes)',
            'Cell division and cell cycle (Mitosis, Meiosis, Cyclins and CDKs regulation, Apoptosis)'
          ],
          pyqFrequency: 'High'
        },
        {
          id: 'life-sci-fundamental',
          name: 'Fundamental Processes (DNA Replication, Transcription, Translation, Repair)',
          nameHi: 'मूलभूत प्रक्रियाएं (डीएनए प्रतिकृति, अनुलेखन, अनुवाद)',
          subtopics: [
            'DNA replication, repair and recombination (Enzymes, fidelity, homologous recombination)',
            'RNA synthesis and processing (RNA polymerases, capping, polyadenylation, splicing)',
            'Protein synthesis and processing (Ribosome structure, genetic code, translation initiation, elongation, termination)',
            'Control of gene expression at transcription and translation level (Operons, Chromatin remodeling, microRNAs)'
          ],
          pyqFrequency: 'High'
        },
        {
          id: 'life-sci-cell-comm',
          name: 'Cell Communication, Cell Signaling and Immunology',
          nameHi: 'कोशिका संचार, संकेतन एवं प्रतिरक्षा विज्ञान',
          subtopics: [
            'Host-parasite interaction, recognition and entry processes of microbes',
            'Cell signaling pathways (GPCR, Receptor Tyrosine Kinases, MAP Kinase cascade, JAK-STAT)',
            'Cellular communication: Gap junctions, Tight junctions, Integrins, Cadherins',
            'Innate and adaptive immune system: Antigens, Antibodies (IgG, IgM, etc.), MHC molecules, T-cell and B-cell activation'
          ],
          pyqFrequency: 'High'
        },
        {
          id: 'life-sci-dev-physio',
          name: 'Developmental Biology & System Physiology (Plant and Animal)',
          nameHi: 'विकासात्मक जीवविज्ञान एवं कार्यिकी',
          subtopics: [
            'Potency, commitment, specification, induction, competence, embryonic stem cells',
            'Drosophila maternal effect genes, gap genes, pair-rule genes, segment polarity genes, homeotic genes',
            'Photosynthesis (Light reactions, Calvin cycle, C4 and CAM pathways), Nitrogen metabolism, Plant hormones (Auxins, Gibberellins, Cytokinins, ABA, Ethylene)',
            'Blood circulation, cardiovascular system, Respiratory system, Excretory system, Neural control'
          ],
          pyqFrequency: 'High'
        },
        {
          id: 'life-sci-genetics-ecology',
          name: 'Inheritance Biology, Diversity, Ecology and Evolution',
          nameHi: 'आनुवंशिकी, जैव विविधता, पारिस्थितिकी एवं जैव विकास',
          subtopics: [
            'Mendelian principles, Gene mapping, Linkage, Tetrad analysis, Pedigree analysis',
            'Population ecology: r and K selection, Population growth curves, Lotka-Volterra predator-prey model',
            'Ecosystem ecology: Trophic levels, Ecological succession, Biogeochemical cycles',
            'Evolutionary theories: Natural selection, Genetic drift, Hardy-Weinberg equilibrium, Speciation, Molecular clocks'
          ],
          pyqFrequency: 'High'
        },
        {
          id: 'life-sci-methods',
          name: 'Methods in Biology (Recombinant DNA, Biophysical & Statistical Methods)',
          nameHi: 'जीवविज्ञान में आधुनिक विधियाँ (डीएनए तकनीक व बायोफिज़िक्स)',
          subtopics: [
            'Molecular cloning, PCR, RT-PCR, CRISPR-Cas9 genome editing, Next Generation Sequencing (NGS)',
            'Spectroscopy (UV-Vis, CD, Fluorescence, NMR, X-ray crystallography)',
            'Microscopy (Confocal, SEM, TEM, Cryo-EM), Flow cytometry (FACS)',
            'Electrophoresis (SDS-PAGE, Agarose), Chromatography (Gel filtration, Ion exchange, Affinity)'
          ],
          pyqFrequency: 'High'
        }
      ]
    },
    {
      id: 'csir-physical-sciences',
      name: 'Physical Sciences (Discipline Code: 05)',
      nameHi: 'भौतिक विज्ञान (Physical Sciences)',
      weightage: '170 Marks (Part B Core + Part C Advanced)',
      topics: [
        {
          id: 'phy-classical-em',
          name: 'Classical Mechanics & Electromagnetic Theory',
          nameHi: 'चिरसम्मत यांत्रिकी एवं विद्युत चुम्बकीय सिद्धांत',
          subtopics: [
            'Lagrangian and Hamiltonian formulations, Central force motion, Poisson brackets, Small oscillations',
            'Special theory of relativity: Lorentz transformations, relativistic energy and momentum, four-vectors',
            'Electrostatics and Magnetostatics: Poisson and Laplace equations, Boundary value problems',
            'Maxwell equations in vacuum and matter, Gauge invariance, Poynting vector, Electromagnetic wave propagation'
          ],
          pyqFrequency: 'High'
        },
        {
          id: 'phy-quantum',
          name: 'Quantum Mechanics',
          nameHi: 'क्वांटम यांत्रिकी',
          subtopics: [
            'Schrödinger equation, 1D potentials (Harmonic oscillator, Square well, Barrier penetration)',
            'Hydrogen atom, Orbital and Spin angular momentum, Clebsch-Gordan coefficients',
            'Time-independent and time-dependent perturbation theory, Variational method, WKB approximation',
            'Scattering theory: Partial wave analysis, Born approximation, Identical particles and Pauli principle'
          ],
          pyqFrequency: 'High'
        },
        {
          id: 'phy-thermo-condensed',
          name: 'Thermodynamics, Statistical Physics & Condensed Matter Physics',
          nameHi: 'ऊष्मागतिकी, सांख्यिकीय भौतिकी एवं संघनित पदार्थ भौतिकी',
          subtopics: [
            'Ensembles (Microcanonical, Canonical, Grand Canonical), Partition functions, Equipartition theorem',
            'Bose-Einstein and Fermi-Dirac statistics, Blackbody radiation, Bose-Einstein condensation',
            'Bravais lattices, Reciprocal lattice, X-ray diffraction, Band theory of solids, Superconductivity (BCS theory)'
          ],
          pyqFrequency: 'High'
        }
      ]
    },
    {
      id: 'csir-chemical-sciences',
      name: 'Chemical Sciences (Discipline Code: 01)',
      nameHi: 'रासायनिक विज्ञान (Chemical Sciences)',
      weightage: '170 Marks (Part B Core + Part C Advanced)',
      topics: [
        {
          id: 'chem-inorganic',
          name: 'Inorganic Chemistry & Coordination Complexes',
          nameHi: 'अकार्बनिक रसायन एवं उपसहसंयोजन यौगिक',
          subtopics: [
            'Chemical periodicity, Main group chemistry, Molecular symmetry and Group theory',
            'Crystal Field Theory (CFT), Ligand Field Theory, Electronic spectra of transition metal complexes, Tanabe-Sugano diagrams',
            'Organometallic chemistry: 18-electron rule, Catalytic cycles (Wilkinson catalyst, Hydroformylation, Ziegler-Natta)'
          ],
          pyqFrequency: 'High'
        },
        {
          id: 'chem-organic',
          name: 'Organic Chemistry & Reaction Mechanisms',
          nameHi: 'कार्बनिक रसायन एवं अभिक्रिया क्रियाविधियां',
          subtopics: [
            'Stereochemistry, Conformational analysis, Reaction intermediates (Carbocations, Radicals, Carbenes)',
            'Named reactions, Pericyclic reactions (Woodward-Hoffmann rules), Photochemistry',
            'Spectroscopy of organic compounds (1H-NMR, 13C-NMR, IR, Mass Spectrometry)'
          ],
          pyqFrequency: 'High'
        },
        {
          id: 'chem-physical',
          name: 'Physical Chemistry & Quantum Chemistry',
          nameHi: 'भौतिक रसायन एवं क्वांटम रसायन',
          subtopics: [
            'Postulates of Quantum Mechanics, Particle in a box, Harmonic oscillator, Hückel MO theory',
            'Chemical thermodynamics, Phase equilibria, Electrochemistry and Nernst equation',
            'Chemical kinetics: Fast reactions, Transition state theory, Surface chemistry and Catalysis'
          ],
          pyqFrequency: 'High'
        }
      ]
    }
  ]
};
