import { FormulaItem } from '../../types';

export const formulaData: FormulaItem[] = [
  // Mathematics & Quantitative Aptitude
  {
    id: 'f-math-ci-installment',
    subject: 'Quantitative Aptitude',
    topic: 'Compound Interest',
    name: 'Compound Interest Equal Installment Formula',
    formula: 'P = x / (1 + r/100) + x / (1 + r/100)^2 + ... + x / (1 + r/100)^n',
    whereClause: 'P = Borrowed Principal, x = Value of each annual installment, r = Annual rate %, n = Number of installments.',
    applicationTip: 'Express (1 + r/100) as a simplified fraction (e.g. 5% = 21/20) and factor out common terms to calculate x rapidly.'
  },
  {
    id: 'f-math-algebra-cubes',
    subject: 'Mathematics',
    topic: 'Algebra Identities',
    name: 'Sum and Difference of Cubes & Conditional Identity',
    formula: 'If a + b + c = 0, then a^3 + b^3 + c^3 = 3abc',
    whereClause: 'Derived from a^3 + b^3 + c^3 - 3abc = (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca).',
    applicationTip: 'Crucial for SSC CGL, GATE, and CSIR Part A algebra questions involving expressions with cycling terms.'
  },
  {
    id: 'f-math-circles-tangents',
    subject: 'Mathematics',
    topic: 'Geometry',
    name: 'Direct & Transverse Common Tangent Lengths',
    formula: 'L_direct = sqrt(d^2 - (r1 - r2)^2) and L_transverse = sqrt(d^2 - (r1 + r2)^2)',
    whereClause: 'd = Distance between circle centers, r1, r2 = Radii of the two circles.',
    applicationTip: 'Direct common tangent is always longer than the transverse common tangent because (r1 - r2) < (r1 + r2).'
  },

  // Physics Formulas
  {
    id: 'f-phy-photoelectric',
    subject: 'Physics',
    topic: 'Modern Physics',
    name: 'Einstein’s Photoelectric Equation',
    formula: 'E = h · nu = Phi_0 + K_max = h · nu_0 + e · V_0',
    whereClause: 'h = Planck’s constant (6.626 x 10^-34 J·s), nu = Incident frequency, Phi_0 = Work function, K_max = Maximum kinetic energy, V_0 = Stopping potential.',
    applicationTip: 'Slope of stopping potential V_0 versus frequency nu graph is strictly (h / e), a universal constant independent of target metal.'
  },
  {
    id: 'f-phy-shm-timeperiod',
    subject: 'Physics',
    topic: 'Oscillations',
    name: 'Time Period of Simple Pendulum & Spring-Mass System',
    formula: 'T_pendulum = 2 · pi · sqrt(L / g) and T_spring = 2 · pi · sqrt(m / k)',
    whereClause: 'L = Effective length of pendulum, g = Acceleration due to gravity, m = Mass, k = Spring force constant.',
    applicationTip: 'Notice that simple pendulum period is completely independent of the mass of the bob, but depends on local g.'
  },

  // Chemistry Formulas
  {
    id: 'f-chem-nernst',
    subject: 'Chemistry',
    topic: 'Electrochemistry',
    name: 'Nernst Equation for Electrode & Cell Potential at 298 K',
    formula: 'E_cell = E^0_cell - (0.0591 / n) · log10(Q)',
    whereClause: 'E^0_cell = Standard cell potential, n = Number of electrons transferred, Q = Reaction quotient [Products]^p / [Reactants]^r.',
    applicationTip: 'At chemical equilibrium, E_cell = 0 and Q = K_eq, giving standard potential E^0_cell = (0.0591 / n) · log10(K_eq).'
  },
  {
    id: 'f-chem-kinetics-first-order',
    subject: 'Chemistry',
    topic: 'Chemical Kinetics',
    name: 'First-Order Integrated Rate Equation & Half-Life',
    formula: 'k = (2.303 / t) · log10([A]_0 / [A]_t) and t_1/2 = 0.693 / k',
    whereClause: '[A]_0 = Initial concentration, [A]_t = Concentration at time t, k = First-order rate constant (s^-1).',
    applicationTip: 'For any first order reaction (e.g. radioactive decay), half life is completely independent of initial reactant concentration.'
  }
];

export const getFormulasBySubject = (subject: string): FormulaItem[] => {
  if (subject === 'all') return formulaData;
  return formulaData.filter(f => f.subject.toLowerCase() === subject.toLowerCase());
};
