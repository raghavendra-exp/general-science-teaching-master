import { Syllabus } from '../../types';

export const ctetSyllabus: Syllabus = {
  examId: 'ctet',
  examName: 'CTET (Paper I & Paper II)',
  subjects: [
    {
      id: 'ctet-cdp',
      name: 'Child Development and Pedagogy',
      nameHi: 'बाल विकास एवं शिक्षाशास्त्र',
      weightage: '30 Marks (30 Questions)',
      topics: [
        {
          id: 'cdp-child-dev',
          name: 'Child Development (Primary School Child)',
          nameHi: 'बाल विकास (प्राथमिक विद्यालय का बालक)',
          subtopics: [
            'Concept of development and its relationship with learning',
            'Principles of the development of children (Cephalocaudal & Proximodistal)',
            'Influence of Heredity & Environment (Nature vs Nurture)',
            'Socialization processes: Social world & children (Teachers, Parents, Peers)',
            'Piaget (Stages of Cognitive Development: Sensorimotor, Pre-operational, Concrete, Formal)',
            'Kohlberg (Pre-conventional, Conventional, Post-conventional Moral Reasoning)',
            'Vygotsky (Zone of Proximal Development, Scaffolding, More Knowledgeable Other)',
            'Concepts of child-centered and progressive education',
            'Critical perspective of the construct of Intelligence (Spearman, Gardner Multiple Intelligences)',
            'Language & Thought (Vygotskian inner speech vs Piagetian egocentric speech)',
            'Gender as a social construct; gender roles, gender-bias and educational practice',
            'Individual differences among learners based on language, caste, gender, community, religion'
          ],
          ncertMapping: [{ classLevel: 11, chapterName: 'NCERT Psychology Class 11 Chapter 4: Human Development' }],
          pyqFrequency: 'High'
        },
        {
          id: 'cdp-inclusive',
          name: 'Concept of Inclusive Education and Understanding Children with Special Needs',
          nameHi: 'समावेशी शिक्षा की अवधारणा तथा विशेष आवश्यकता वाले बालकों की समझ',
          subtopics: [
            'Addressing learners from diverse backgrounds, including disadvantaged and deprived',
            'Addressing the needs of children with learning difficulties, impairment (Dyslexia, Dysgraphia, Dyscalculia, ADHD, Autism Spectrum)',
            'Addressing the Talented, Creative, Specially abled Learners',
            'Rights of Persons with Disabilities (RPwD) Act 2016 educational provisions'
          ],
          pyqFrequency: 'High'
        },
        {
          id: 'cdp-learning-pedagogy',
          name: 'Learning and Pedagogy',
          nameHi: 'अधिगम और शिक्षाशास्त्र',
          subtopics: [
            'How children think and learn; why children ‘fail’ to achieve success in school performance',
            'Basic processes of teaching and learning; children’s strategies of learning; learning as a social activity',
            'Child as a problem solver and a ‘scientific investigator’',
            'Alternative conceptions of learning in children; understanding children’s ‘errors’ as significant steps in the learning process',
            'Cognition & Emotions; Motivation and learning; Factors contributing to learning - personal & environmental'
          ],
          pyqFrequency: 'High'
        }
      ]
    },
    {
      id: 'ctet-math-science',
      name: 'Mathematics and Science (Paper II)',
      nameHi: 'गणित एवं विज्ञान (पेपर-2)',
      weightage: '60 Marks (30 Math + 30 Science)',
      topics: [
        {
          id: 'ctet-math-content',
          name: 'Mathematics Content & Pedagogy',
          nameHi: 'गणित विषय-वस्तु एवं शिक्षणशास्त्र',
          subtopics: [
            'Number System: Knowing our Numbers, Playing with Numbers, Whole Numbers, Negative Numbers and Integers, Fractions & Decimals',
            'Algebra: Introduction to Algebra, Ratio and Proportion, Linear Equations',
            'Geometry: Basic geometrical ideas (2-D & 3-D), Understanding Elementary Shapes, Triangles, Quadrilaterals, Symmetry, Mensuration',
            'Pedagogical issues: Nature of Mathematics/Logical thinking, Place of Mathematics in Curriculum, Language of Mathematics, Community Mathematics, Evaluation, Remedial Teaching, Problem of Teaching'
          ],
          ncertMapping: [
            { classLevel: 6, chapterName: 'NCERT Math Class 6 Chapters 1 to 14' },
            { classLevel: 7, chapterName: 'NCERT Math Class 7 Chapters 1 to 15' },
            { classLevel: 8, chapterName: 'NCERT Math Class 8 Chapters 1 to 16' }
          ],
          pyqFrequency: 'High'
        },
        {
          id: 'ctet-science-content',
          name: 'Science Content & Pedagogy',
          nameHi: 'विज्ञान विषय-वस्तु एवं शिक्षणशास्त्र',
          subtopics: [
            'Food: Sources of food, Components of food, Cleaning food, Nutrition in plants and animals',
            'Materials: Materials of daily use, Acids, Bases & Salts, Physical and Chemical changes, Metals and Non-metals, Synthetic Fibres & Plastics',
            'The World of the Living: Cell structure & functions, Microorganisms, Reproduction in plants & animals, Reaching the age of adolescence',
            'Moving Things, People and Ideas: Motion, Time, Speed, Force and Pressure, Friction, Sound',
            'How things work: Electric Current and Circuits, Chemical effects of electric current, Magnets and Light (Reflection, Dispersion)',
            'Natural Phenomena & Natural Resources: Rain, Thunder, Lightning, Earthquakes, Stars and the Solar System, Pollution of Air and Water',
            'Pedagogical issues: Nature & Structure of Sciences, Natural Science - Aims & objectives, Understanding & Appreciating Science, Approaches/Integrated approach, Observation/Experiment/Discovery, Innovation, Text Material/Aids, Evaluation, Remedial Teaching'
          ],
          ncertMapping: [
            { classLevel: 6, chapterName: 'NCERT Science Class 6 (All Chapters)' },
            { classLevel: 7, chapterName: 'NCERT Science Class 7 (All Chapters)' },
            { classLevel: 8, chapterName: 'NCERT Science Class 8 (All Chapters)' }
          ],
          pyqFrequency: 'High'
        }
      ]
    },
    {
      id: 'ctet-evs',
      name: 'Environmental Studies (Paper I Content & Pedagogy)',
      nameHi: 'पर्यावरण अध्ययन (पेपर-1)',
      weightage: '30 Marks (15 Content + 15 Pedagogy)',
      topics: [
        {
          id: 'evs-themes',
          name: 'EVS Core Themes',
          nameHi: 'ईवीएस मूल 6 थीम्स',
          subtopics: [
            'Family and Friends (Relationships, Work and Play, Animals, Plants)',
            'Food (Cooking, Preservation, Traditional cuisines, Nutrients)',
            'Shelter (Types of houses across India: Leh, Assam, Rajasthan, Srinagar houseboats)',
            'Water (Sources, Conservation, Water cycle, Waterborne diseases)',
            'Travel (Modes of transport, Braille script, Famous travellers: Al-Biruni, Sunita Williams, Bachendri Pal)',
            'Things We Make and Do (Traditional crafts, Heritage sites, Environmental movements: Chipko, Bishnoi)'
          ],
          ncertMapping: [
            { classLevel: 3, chapterName: 'NCERT EVS Class 3 Looking Around' },
            { classLevel: 4, chapterName: 'NCERT EVS Class 4 Looking Around' },
            { classLevel: 5, chapterName: 'NCERT EVS Class 5 Looking Around' }
          ],
          pyqFrequency: 'High'
        },
        {
          id: 'evs-pedagogy',
          name: 'EVS Pedagogical Issues',
          nameHi: 'ईवीएस शिक्षणशास्त्रीय मुद्दे',
          subtopics: [
            'Concept and scope of EVS; Significance of EVS, integrated EVS approach',
            'Environmental Studies & Environmental Education; Learning Principles',
            'Scope & relation to Science & Social Science; Approaches of presenting concepts',
            'Activities, Experimentation/Practical Work, Discussion, CCE (Continuous and Comprehensive Evaluation)',
            'Teaching material/Aids, Remedial teaching in environmental awareness'
          ],
          pyqFrequency: 'High'
        }
      ]
    },
    {
      id: 'ctet-languages',
      name: 'Language I & II Pedagogy (Hindi / English)',
      nameHi: 'भाषा शिक्षणशास्त्र (हिंदी व अंग्रेजी)',
      weightage: '60 Marks (30 per Language: 15 Comprehension + 15 Pedagogy)',
      topics: [
        {
          id: 'lang-pedagogy',
          name: 'Principles of Language Development',
          nameHi: 'भाषा विकास के सिद्धांत',
          subtopics: [
            'Learning and acquisition (Krashen Acquisition vs Learning Hypothesis, Chomsky LAD)',
            'Principles of language teaching; Role of listening and speaking; function of language and how children use it as a tool',
            'Critical perspective on the role of grammar in learning a language for communicating ideas verbally and in written form',
            'Challenges of teaching language in a diverse classroom: language difficulties, errors and disorders',
            'Language Skills (LSRW: Listening, Speaking, Reading, Writing)',
            'Evaluating language comprehension and proficiency: speaking, listening, reading and writing',
            'Teaching-learning materials: Textbook, multi-media materials, multilingual resource of the classroom',
            'Remedial Teaching'
          ],
          pyqFrequency: 'High'
        }
      ]
    }
  ]
};
