import { Syllabus } from '../../types';

export const sscCglSyllabus: Syllabus = {
  examId: 'ssc-cgl',
  examName: 'SSC CGL (Tier I & Tier II)',
  subjects: [
    {
      id: 'ssc-quant',
      name: 'Quantitative Aptitude / Mathematical Abilities',
      nameHi: 'गणितीय योग्यता',
      weightage: '90 Marks (30 Questions in Tier II Session 1)',
      topics: [
        {
          id: 'quant-arithmetic',
          name: 'Arithmetic Mathematics',
          nameHi: 'अंकगणित',
          subtopics: [
            'Percentages, Profit and Loss, Discount, Simple & Compound Interest',
            'Ratio and Proportion, Partnership Business, Mixture and Alligation, Time and Work, Time, Speed & Distance, Pipes and Cisterns'
          ],
          pyqFrequency: 'High'
        },
        {
          id: 'quant-advanced',
          name: 'Advanced Mathematics',
          nameHi: 'एडवांस्ड गणित',
          subtopics: [
            'Algebra: Elementary algebraic identities, Polynomial factorization, Linear equations, Quadratic equations',
            'Geometry: Triangles (Centres, Congruence, Similarity), Circles (Chords, Tangents, Common tangents), Quadrilaterals',
            'Mensuration 2D & 3D: Areas and perimeters of plane figures, Volume and surface areas of Cylinders, Cones, Spheres, Hemispheres, Prisms, Pyramids',
            'Trigonometry: Trigonometric ratios, Standard angles, Complementary angles, Heights and Distances',
            'Statistics and Probability: Mean, Median, Mode, Standard Deviation, Calculation of simple probabilities'
          ],
          pyqFrequency: 'High'
        }
      ]
    },
    {
      id: 'ssc-reasoning',
      name: 'Reasoning and General Intelligence',
      nameHi: 'तर्कशक्ति एवं सामान्य बुद्धिमत्ता',
      weightage: '90 Marks (30 Questions)',
      topics: [
        {
          id: 'reasoning-verbal',
          name: 'Verbal & Non-Verbal Reasoning',
          nameHi: 'भाषिक एवं अभाषिक तर्कशक्ति',
          subtopics: [
            'Analogies, Classification, Series (Number, Alphabetical, Alpha-numeric)',
            'Coding-Decoding, Blood Relations, Direction Sense Test, Syllogisms',
            'Seating Arrangements, Puzzles, Statement-Assertion-Conclusion',
            'Mirror and Water Images, Paper Folding and Cutting, Embedded Figures, Figure Series'
          ],
          pyqFrequency: 'High'
        }
      ]
    },
    {
      id: 'ssc-english',
      name: 'English Language and Comprehension',
      nameHi: 'अंग्रेजी भाषा एवं बोधगम्यता',
      weightage: '135 Marks (45 Questions in Tier II)',
      topics: [
        {
          id: 'english-grammar-vocab',
          name: 'Grammar, Vocabulary & Reading Comprehension',
          nameHi: 'व्याकरण, शब्दावली एवं बोधगम्यता',
          subtopics: [
            'Spotting Errors, Sentence Improvement, Fill in the Blanks (Prepositions, Tenses, Subject-Verb Agreement)',
            'Active and Passive Voice transformation, Direct and Indirect Speech (Narration)',
            'Synonyms, Antonyms, One Word Substitution, Idioms and Phrases, Spelling corrections',
            'Cloze Test, Para Jumbles (Sentence Rearrangement), Reading Comprehension Passages'
          ],
          pyqFrequency: 'High'
        }
      ]
    },
    {
      id: 'ssc-ga',
      name: 'General Awareness',
      nameHi: 'सामान्य जागरूकता',
      weightage: '75 Marks (25 Questions)',
      topics: [
        {
          id: 'ga-static-current',
          name: 'Static GK, Science & Current Affairs',
          nameHi: 'स्टैटिक जीके, सामान्य विज्ञान व समसामयिकी',
          subtopics: [
            'Indian History (Ancient, Medieval, Modern & Indian National Movement)',
            'Indian Polity and Constitution (Articles, Amendments, President, Parliament, Judiciary, Panchayati Raj)',
            'Geography (Physical Geography, Indian Rivers, Mountains, Climate, Agriculture, Minerals)',
            'Economy (Five Year Plans, RBI, Inflation, National Income, Government Schemes)',
            'General Science (Everyday Physics, Chemistry, Biology up to 10th standard)',
            'Current Events of National and International Importance, Sports, Awards, Summits'
          ],
          pyqFrequency: 'High'
        }
      ]
    }
  ]
};

export const kvsSyllabus: Syllabus = {
  examId: 'kvs-prt-tgt-pgt',
  examName: 'KVS PRT, TGT & PGT',
  subjects: [
    {
      id: 'kvs-pedagogy-leadership',
      name: 'Perspectives on Education and Leadership (40-60 Marks)',
      nameHi: 'शिक्षा एवं नेतृत्व पर दृष्टिकोण',
      weightage: '40 Marks (PRT/TGT) / 60 Marks (PGT)',
      topics: [
        {
          id: 'kvs-learner',
          name: 'Understanding the Learner & Teaching-Learning Process',
          nameHi: 'अधिगमकर्ता की समझ एवं शिक्षण अधिगम प्रक्रिया',
          subtopics: [
            'Growth and development, domains of development, understanding adolescence, institutional challenges',
            'Role of teacher, role of learner, classroom environment, constructivism, experiential learning',
            'Assessment for learning, assessment of learning, design of classroom assessment, holistic progress card'
          ],
          pyqFrequency: 'High'
        },
        {
          id: 'kvs-nep',
          name: 'School Organization, Leadership & National Education Policy 2020',
          nameHi: 'विद्यालय संगठन, नेतृत्व एवं एनईपी 2020',
          subtopics: [
            'Guiding principles of NEP 2020, Early Childhood Care and Education (ECCE), Foundational Literacy and Numeracy (FLN)',
            'School curriculum and pedagogy (5+3+3+4 structure), Vocational education, Inclusive education, Gifted children',
            'Creating conducive learning spaces, Team building, School Development Plan (SDP)'
          ],
          pyqFrequency: 'High'
        }
      ]
    }
  ]
};
