import { PedagogyTopic } from '../../types';

export const pedagogyData: PedagogyTopic[] = [
  {
    id: 'ped-piaget',
    category: 'learning_theories',
    title: 'Jean Piaget’s Theory of Cognitive Development',
    titleHi: 'जीन पियाजे का संज्ञानात्मक विकास सिद्धांत',
    description: 'Constructivist stage theory explaining how children construct mental models of the world through adaptation (assimilation & accommodation) and organization.',
    descriptionHi: 'निर्मितिवादी अवस्था सिद्धांत जो व्याख्या करता है कि बच्चे आत्मसातीकरण, समायोजन और साम्यीकरण के माध्यम से संसार का मानसिक प्रतिरूप कैसे निर्मित करते हैं।',
    keyTheorists: ['Jean Piaget'],
    corePrinciples: [
      'Schema: Building blocks of cognitive knowledge representation.',
      'Assimilation: Fitting new information into existing cognitive schemas without altering them.',
      'Accommodation: Modifying existing schemas or creating new ones in response to new environmental data.',
      'Equilibration: The cognitive drive that moves development from disequilibrium to balanced schema.',
      'Four Invariant Developmental Stages: 1. Sensorimotor (0-2 yrs), 2. Pre-operational (2-7 yrs), 3. Concrete Operational (7-11 yrs), 4. Formal Operational (11+ yrs).'
    ],
    classroomApplication: 'Teachers must act as facilitators providing developmentally appropriate physical manipulation and exploratory discovery activities rather than lecturing abstract symbols prematurely.',
    examTips: [
      'Remember: Object Permanence occurs in Sensorimotor stage.',
      'Egocentrism, Animism, and Lack of Conservation characterize Pre-operational stage.',
      'Conservation, Reversibility, and Decentration are mastered in Concrete Operational stage.',
      'Hypothetical-deductive reasoning appears in Formal Operational stage.'
    ]
  },
  {
    id: 'ped-vygotsky',
    category: 'learning_theories',
    title: 'Lev Vygotsky’s Socio-Cultural Theory of Development',
    titleHi: 'लेव वायगोत्स्की का सामाजिक-सांस्कृतिक सिद्धांत',
    description: 'Emphasizes that cognitive development is inherently a socially mediated process where culture, community, and language serve as foundational psychological tools.',
    descriptionHi: 'वायगोत्स्की के अनुसार संज्ञानात्मक विकास सामाजिक अंतःक्रिया पर आधारित होता है, जिसमें भाषा, संस्कृति और समाज प्रमुख मनोवैज्ञानिक उपकरण हैं।',
    keyTheorists: ['Lev Vygotsky'],
    corePrinciples: [
      'Zone of Proximal Development (ZPD): The distance between actual development level determined by independent problem solving and the potential development level achieved through collaborative guidance.',
      'Scaffolding: Temporary, adjustable support provided by a More Knowledgeable Other (MKO) that is systematically dismantled as the child gains competence.',
      'Role of Language: Language transforms from Social Speech (for external communication) -> Private Speech (self-talk for cognitive regulation) -> Inner Speech (silent thinking).'
    ],
    classroomApplication: 'Implement peer tutoring, reciprocal teaching, collaborative group projects, and strategic questioning that nudges learners forward within their ZPD.',
    examTips: [
      'Vygotsky viewed children’s self-talk (Private Speech) positively as an essential self-regulatory cognitive tool, unlike Piaget who termed it immature Egocentric speech.',
      'Learning precedes development in Vygotsky’s view, whereas development precedes learning in Piaget’s view.'
    ]
  },
  {
    id: 'ped-kohlberg',
    category: 'learning_theories',
    title: 'Lawrence Kohlberg’s Stages of Moral Development',
    titleHi: 'लॉरेंस कोहलबर्ग का नैतिक विकास सिद्धांत',
    description: 'Six-stage model organized into three moral levels based on children’s cognitive reasoning in response to hypothetical moral dilemmas (Heinz dilemma).',
    descriptionHi: 'हिंज की दुविधा (Heinz Dilemma) पर आधारित बच्चों के नैतिक तर्क के 3 स्तरों और 6 क्रमिक चरणों का विश्लेषण।',
    keyTheorists: ['Lawrence Kohlberg', 'Carol Gilligan (Critique)'],
    corePrinciples: [
      'Level 1: Pre-Conventional Morality (Stage 1: Punishment and Obedience Orientation; Stage 2: Instrumental Relativist / "You scratch my back, I scratch yours").',
      'Level 2: Conventional Morality (Stage 3: Good Boy / Nice Girl approval seeking; Stage 4: Law and Order / Maintaining Social Order).',
      'Level 3: Post-Conventional Morality (Stage 5: Social Contract and Individual Rights; Stage 6: Universal Ethical Principles).'
    ],
    classroomApplication: 'Facilitate open classroom moral dilemmas that challenge students to articulate reasons for ethical choices, progressing beyond fear of punitive consequences.',
    examTips: [
      'Carol Gilligan criticized Kohlberg’s model for gender bias, arguing that it favored a male "justice orientation" over a female "ethic of care".'
    ]
  },
  {
    id: 'ped-inclusive-disabilities',
    category: 'inclusive_education',
    title: 'Inclusive Education & Specific Learning Disabilities',
    titleHi: 'समावेशी शिक्षा एवं विशिष्ट अधिगम विकार',
    description: 'Educational philosophy and legal mandates ensuring every child—regardless of physical, intellectual, social, or emotional diversity—learns in the regular mainstream classroom with reasonable accommodations.',
    descriptionHi: 'प्रत्येक बालक को बिना किसी भेदभाव के नियमित कक्षा में उसकी विशिष्ट आवश्यकताओं के अनुरूप यथोचित समायोजन देकर शिक्षा प्रदान करना।',
    keyTheorists: ['Salamanca Statement (1994)', 'RPwD Act 2016'],
    corePrinciples: [
      'Rights of Persons with Disabilities (RPwD) Act 2016 recognizes 21 disabilities (increased from 7 in PwD Act 1995).',
      'Dyslexia: Difficulty in reading fluency, phonological decoding, and letter reversal.',
      'Dysgraphia: Fine motor impairment affecting handwriting legibility, letter spacing, and motor coordination.',
      'Dyscalculia: Severe computational and number sense disability.',
      'Dyspraxia: Motor coordination disorder affecting balance and gross motor movement.',
      'ADHD (Attention Deficit Hyperactivity Disorder): Sustained inattention, impulsivity, and motor restlessness.',
      'Autism Spectrum Disorder (ASD): Communication difficulties, repetitive behaviors, and hypersensitivity to sensory inputs.'
    ],
    classroomApplication: 'Use Universal Design for Learning (UDL), multi-sensory teaching aids, extra time for examinations, assistive technology, and flexible seating.',
    examTips: [
      'Inclusive education does NOT mean creating segregated special classrooms; it means adapting the general classroom environment to accommodate diversity.'
    ]
  },
  {
    id: 'ped-assessment-cce',
    category: 'assessment',
    title: 'Continuous and Comprehensive Evaluation & Assessment Types',
    titleHi: 'सतत एवं व्यापक मूल्यांकन (CCE) तथा आकलन के प्रकार',
    description: 'Systematic paradigm shifting assessment from rote memory regurgitation to holistic tracking of scholastic and co-scholastic domains.',
    descriptionHi: 'संज्ञानात्मक, भावात्मक एवं मनोगत्यात्मक पक्षों का निरंतर व समग्र मूल्यांकन जो सुधारात्मक पृष्ठपोषण प्रदान करता है।',
    keyTheorists: ['Benjamin Bloom (Taxonomy)', 'NCF 2005 & 2023'],
    corePrinciples: [
      'Assessment FOR Learning: Formative, ongoing during teaching, diagnostic, qualitative feedback.',
      'Assessment OF Learning: Summative, end-of-term, benchmark grading, certification.',
      'Assessment AS Learning: Metacognitive self-assessment and peer reflection by students themselves.',
      'Bloom’s Revised Taxonomy: Remembering -> Understanding -> Applying -> Analyzing -> Evaluating -> Creating.'
    ],
    classroomApplication: 'Utilize rubrics, portfolios, anecdotal records, checklists, and self-reflection journals to assess progress multidimensionally.',
    examTips: [
      'CTET frequently tests the distinction: Diagnostic tests identify learning gaps; Remedial teaching eliminates identified learning gaps.'
    ]
  },
  {
    id: 'ped-language-chomsky',
    category: 'language_pedagogy',
    title: 'Language Acquisition & Noam Chomsky’s Nativist Model',
    titleHi: 'भाषा अर्जन एवं नोआम चॉम्स्की का जन्मजात सिद्धांत',
    description: 'Nativist perspective establishing that humans possess an innate biological endowment dedicated to language acquisition regardless of environmental deprivation.',
    descriptionHi: 'चॉम्स्की का भाषा विकास सिद्धांत जिसके अनुसार बच्चों में भाषा सीखने की जन्मजात क्षमता (LAD) और सार्वभौमिक व्याकरण (UG) विद्यमान होती है।',
    keyTheorists: ['Noam Chomsky', 'Stephen Krashen'],
    corePrinciples: [
      'Language Acquisition Device (LAD): An innate brain mechanism enabling infants to rapidly deduce the grammatical rules of their native language from ambient speech.',
      'Universal Grammar (UG): Underlying structural principles shared by all human languages.',
      'Acquisition vs Learning: Acquisition is subconscious, implicit, and natural; Learning is formal, conscious, and explicit instruction in rules.',
      'Critical Period Hypothesis: Sensitivity to native accent and syntax is optimal during childhood.'
    ],
    classroomApplication: 'Provide rich communicative print immersion, storytelling, and communicative dialogues rather than drill-based decontextualized grammar exercises.',
    examTips: [
      'B.F. Skinner argued language is learned via imitation and operant conditioning; Chomsky disproved this using the "Poverty of the Stimulus" argument.'
    ]
  }
];

export const getPedagogyByCategory = (category: string): PedagogyTopic[] => {
  return pedagogyData.filter(p => p.category === category);
};
