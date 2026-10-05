import { ShortcutItem } from '../../types';

export const shortcutData: ShortcutItem[] = [
  {
    id: 'sc-mixture-alligation',
    subject: 'Quantitative Aptitude',
    topic: 'Mixtures and Alligations',
    title: 'The Alligation Cross Method for Two-Component Blending',
    concept: 'Finding the ratio in which two varieties of different unit costs or percentage concentrations must be mixed to produce a desired mean value.',
    standardMethod: 'Formulate an algebraic equation: (C1 · x + C2 · y) / (x + y) = C_mean. Solve linear equation in two variables for x/y.',
    shortcutMethod: 'Use the Alligation Rule: Ratio of Quantity 1 to Quantity 2 = (Price of Dearer - Mean Price) : (Mean Price - Price of Cheaper) = (d - m) : (m - c).',
    exampleQuestion: 'In what ratio must rice at Rs. 45/kg be mixed with rice at Rs. 60/kg so that the mixture is worth Rs. 54/kg?',
    exampleSolution: 'Cheap (c) = 45, Dear (d) = 60, Mean (m) = 54. Ratio = (60 - 54) : (54 - 45) = 6 : 9 = 2 : 3.',
    timeSaved: 'Reduces solving time from 60 seconds to 8 seconds.'
  },
  {
    id: 'sc-successive-percentage',
    subject: 'Quantitative Aptitude',
    topic: 'Percentages and Discounts',
    title: 'Effective Percentage Change Formula (AB Formula)',
    concept: 'Computing net percentage impact when a quantity increases or decreases successively by a% and then by b%.',
    standardMethod: 'Assume initial value = 100, calculate value after first change 100 * (1 + a/100), then apply second change, and find total difference from 100.',
    shortcutMethod: 'Net % change = [ a + b + (a · b / 100) ] %. (Substitute negative signs for reductions/discounts).',
    exampleQuestion: 'If the length of a rectangle increases by 20% and its breadth decreases by 10%, what is the net change in its area?',
    exampleSolution: 'a = +20, b = -10. Net change = 20 - 10 + (20 · (-10) / 100) = 10 - 2 = +8% increase.',
    timeSaved: 'Solves in 5 seconds without writing intermediate calculations.'
  },
  {
    id: 'sc-relative-speed-trains',
    subject: 'Quantitative Aptitude',
    topic: 'Time, Speed and Distance',
    title: 'Two Trains Crossing in Opposite and Same Directions',
    concept: 'Determining crossing time when two moving bodies of lengths L1 and L2 cross each other.',
    standardMethod: 'Write relative displacement equations and convert individual km/h velocities before computing relative time.',
    shortcutMethod: 'Crossing Time = (L1 + L2) / (Relative Speed). If opposite direction, Relative Speed = (S1 + S2). If same direction, Relative Speed = |S1 - S2|. Multiply km/h by 5/18 for m/s.',
    exampleQuestion: 'Two trains 120 m and 180 m long run on parallel tracks in opposite directions at 42 km/h and 30 km/h. When will they cross?',
    exampleSolution: 'Relative speed = 42 + 30 = 72 km/h = 72 · (5/18) = 20 m/s. Total distance = 120 + 180 = 300 m. Time = 300 / 20 = 15 seconds.',
    timeSaved: 'Calculates answer in under 12 seconds.'
  },
  {
    id: 'sc-phy-projectile-range',
    subject: 'Physics',
    topic: 'Kinematics',
    title: 'Complementary Angle Projectile Range Identity',
    concept: 'Horizontal range of a projectile fired with equal initial speed at angle theta and (90° - theta).',
    standardMethod: 'Compute R1 = (u^2 · sin(2·theta)) / g and R2 = (u^2 · sin(2·(90 - theta))) / g separately using trigonometric expansions.',
    shortcutMethod: 'Range is identical for complementary angles: R(theta) = R(90° - theta). The ratio of maximum heights is H1 / H2 = tan^2(theta), and product of time of flights T1 · T2 = 2R / g.',
    exampleQuestion: 'A ball is launched at 30° with a range of 80 meters. What will be its range if projected with the same speed at 60°?',
    exampleSolution: 'Since 30° and 60° are complementary (30° + 60° = 90°), the horizontal range is identical: 80 meters.',
    timeSaved: 'Instant 1-second answer during competitive exams.'
  }
];
