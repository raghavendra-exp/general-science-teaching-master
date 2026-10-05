import { Question } from '../../types';

export const ctetQuestions: Question[] = [
  {
    id: 'ctet-cdp-001',
    exam: 'ctet',
    paper: 'Paper I & II',
    subject: 'Child Development and Pedagogy',
    topic: 'Piaget Cognitive Development',
    difficulty: 'Medium',
    question: 'According to Jean Piaget, which stage of cognitive development is characterized by the emergence of hypothetical-deductive reasoning and abstract propositional thought?',
    questionHi: 'जीन पियाजे के अनुसार, संज्ञानात्मक विकास की किस अवस्था में परिकल्पनात्मक-निगमनात्मक तर्क और अमूर्त चिंतन का उद्भव होता है?',
    options: [
      'Sensorimotor stage (0 to 2 years)',
      'Pre-operational stage (2 to 7 years)',
      'Concrete operational stage (7 to 11 years)',
      'Formal operational stage (11 years and above)'
    ],
    optionsHi: [
      'संवेदी गामक अवस्था (0 से 2 वर्ष)',
      'पूर्व-संक्रियात्मक अवस्था (2 से 7 वर्ष)',
      'मूर्त संक्रियात्मक अवस्था (7 से 11 वर्ष)',
      'औपचारिक / अमूर्त संक्रियात्मक अवस्था (11 वर्ष एवं उससे ऊपर)'
    ],
    answer: 3,
    explanation: 'In Piaget’s theory, the Formal Operational Stage (11+ years) is when adolescent learners develop the capability for abstract thought, systematic hypothesis testing, and propositional logic.',
    explanationHi: 'पियाजे के सिद्धांत के अनुसार, औपचारिक संक्रियात्मक अवस्था (11 वर्ष से ऊपर) में बालक अमूर्त चिंतन, परिकल्पना निर्माण एवं निगमनात्मक तर्क में सक्षम हो जाता है।',
    sourceType: 'VERIFIED PYQ',
    source: 'CTET Jan 2024 Paper II CDP Q4',
    year: 2024,
    tags: ['Piaget', 'Cognitive Development', 'CDP']
  },
  {
    id: 'ctet-cdp-002',
    exam: 'ctet',
    paper: 'Paper I & II',
    subject: 'Child Development and Pedagogy',
    topic: 'Vygotsky Socio-Cultural Theory',
    difficulty: 'Easy',
    question: 'In Lev Vygotsky’s socio-cultural theory of learning, what is the term used for the temporary assistance provided by a More Knowledgeable Other (MKO) to a child to help master a task?',
    questionHi: 'लेव वायगोत्स्की के सामाजिक-सांस्कृतिक सिद्धांत में, बच्चे को किसी कार्य में दक्षता प्राप्त करने हेतु अधिक ज्ञानी अन्य (MKO) द्वारा दी जाने वाली अस्थायी सहायता को क्या कहा जाता है?',
    options: [
      'Conditioning',
      'Scaffolding (ढांचा / पाड़)',
      'Assimilation',
      'Centration'
    ],
    optionsHi: [
      'अनुबंधन',
      'स्कैफोल्डिंग (पाड़ / ढांचा)',
      'आत्मसातीकरण',
      'केंद्रीयकरण'
    ],
    answer: 1,
    explanation: 'Scaffolding is the supportive structure provided by an adult or competent peer that is gradually removed as the learner becomes capable of independent execution within their Zone of Proximal Development (ZPD).',
    explanationHi: 'स्कैफोल्डिंग (पाड़/ढांचा) वह अस्थायी सहयोग है जो शिक्षक या वयस्क द्वारा बच्चे को उसके समीपस्थ विकास क्षेत्र (ZPD) में लक्ष्य प्राप्ति हेतु दिया जाता है।',
    sourceType: 'VERIFIED PYQ',
    source: 'CTET Aug 2023 Paper I CDP Q8',
    year: 2023,
    tags: ['Vygotsky', 'Scaffolding', 'ZPD']
  },
  {
    id: 'ctet-cdp-003',
    exam: 'ctet',
    paper: 'Paper I & II',
    subject: 'Child Development and Pedagogy',
    topic: 'Kohlberg Moral Reasoning',
    difficulty: 'Hard',
    question: 'A child reasons: "I should not steal the medicine even if my family member is dying, because stealing is against the law and if everyone breaks laws, society cannot function." According to Lawrence Kohlberg, at which stage of moral reasoning is this child?',
    questionHi: 'एक बालक तर्क करता है: "मुझे दवा नहीं चुरानी चाहिए भले ही परिवार का कोई सदस्य बीमार हो, क्योंकि चोरी कानून के विरुद्ध है और यदि सब कानून तोड़ेंगे तो समाज बिखर जाएगा।" कोहलबर्ग के अनुसार बालक किस चरण में है?',
    options: [
      'Punishment and Obedience Orientation (Stage 1)',
      'Good Boy - Nice Girl Orientation (Stage 3)',
      'Law and Order Orientation (Stage 4)',
      'Universal Ethical Principle Orientation (Stage 6)'
    ],
    optionsHi: [
      'दंड एवं आज्ञाकारिता अभिविन्यास (चरण 1)',
      'अच्छा लड़का - अच्छी लड़की अभिविन्यास (चरण 3)',
      'कानून एवं व्यवस्था अभिविन्यास / सामाजिक व्यवस्था बनाए रखना (चरण 4)',
      'सार्वभौमिक नैतिक सिद्धांत अभिविन्यास (चरण 6)'
    ],
    answer: 2,
    explanation: 'Stage 4 (Law and Order / Maintaining Social Order) is characterized by belief that rules and laws maintain social order and must be followed strictly without exception.',
    explanationHi: 'कोहलबर्ग के परंपरागत स्तर के चरण 4 (सामाजिक व्यवस्था बनाए रखने की उन्मुखता) में व्यक्ति कानून, व्यवस्था और सामाजिक नियमों के अक्षरशः पालन को सर्वोच्च प्राथमिकता देता है।',
    sourceType: 'VERIFIED PYQ',
    source: 'CTET Dec 2021 Paper II Q11',
    year: 2021,
    tags: ['Kohlberg', 'Moral Development', 'Stage 4']
  },
  {
    id: 'ctet-cdp-004',
    exam: 'ctet',
    paper: 'Paper I & II',
    subject: 'Child Development and Pedagogy',
    topic: 'Inclusive Education & Disabilities',
    difficulty: 'Medium',
    question: 'A student in a classroom persistently struggles with recognizing printed letters, reversing letters like "b" and "d", and slow reading fluency. Which specific learning disability does this indicate?',
    questionHi: 'कक्षा में एक विद्यार्थी को मुद्रित अक्षरों की पहचान में कठिनाई, "b" और "d" जैसे अक्षरों में भ्रम तथा पढ़ने की गति में निरंतर समस्या होती है। यह किस विशिष्ट अधिगम विकार की ओर संकेत करता है?',
    options: [
      'Dyscalculia',
      'Dyslexia',
      'Dyspraxia',
      'ADHD'
    ],
    optionsHi: [
      'डिसकैलकुलिया (गणितीय विकार)',
      'डिस्लेक्सिया (पठन विकार)',
      'डिस्प्रेक्सिया (गति समन्वय विकार)',
      'एडीएचडी (अतिसक्रियता विकार)'
    ],
    answer: 1,
    explanation: 'Dyslexia is a specific learning disorder characterized by difficulties with accurate and/or fluent word recognition, poor spelling, and decoding abilities (e.g. letter reversals b/d).',
    explanationHi: 'डिस्लेक्सिया पठन से संबंधित अधिगम अक्षमता है जिसमें अक्षरों को पहचानने, वर्तनी और धाराप्रवाह पठन में कठिनाई आती है।',
    sourceType: 'VERIFIED PYQ',
    source: 'CTET Jan 2024 Paper I Q19',
    year: 2024,
    tags: ['Dyslexia', 'Inclusive Education', 'Learning Disabilities']
  },
  {
    id: 'ctet-cdp-005',
    exam: 'ctet',
    paper: 'Paper I & II',
    subject: 'Child Development and Pedagogy',
    topic: 'Progressive Education & Assessment',
    difficulty: 'Medium',
    question: 'Which of the following aligns with the concept of "Assessment for Learning" (formative assessment)?',
    questionHi: 'निम्नलिखित में से कौन सा कथन "सीखने के लिए आकलन" (रचनात्मक आकलन) की संकल्पना से मेल खाता है?',
    options: [
      'Administering standardized end-of-term exams to rank students from highest to lowest score.',
      'Ongoing diagnostic observations and qualitative feedback to adapt instruction during the teaching-learning process.',
      'Using evaluation purely for grading, labeling, and promoting students to the next grade.',
      'Conducting competitive tests to segregate slow learners from high achievers.'
    ],
    optionsHi: [
      'सत्र के अंत में मानकीकृत परीक्षा लेकर छात्रों को उच्च से निम्न श्रेणी में रैंक प्रदान करना।',
      'शिक्षण-अधिगम प्रक्रिया के दौरान निरंतर निदानपरक अवलोकन एवं गुणात्मक प्रतिपुष्टि प्रदान कर शिक्षण को अनुकूलित करना।',
      'आकलन का उपयोग केवल ग्रेडिंग, लेबलिंग और अगली कक्षा में पदोन्नति हेतु करना।',
      'धीमी गति से सीखने वाले बच्चों को पृथक करने हेतु प्रतियोगी परीक्षण आयोजित करना।'
    ],
    answer: 1,
    explanation: 'Assessment for Learning (AfL) is formative and ongoing; its core purpose is providing qualitative feedback to both teacher and learner to modify instruction dynamically.',
    explanationHi: 'सीखने के लिए आकलन (Assessment for Learning) सतत एवं सुधारात्मक होता है, जिसका मुख्य उद्देश्य शिक्षण के दौरान रचनात्मक फीडबैक देकर अधिगम को सुदृढ़ बनाना है।',
    sourceType: 'ORIGINAL',
    source: 'National Curriculum Framework & CTET Pattern Expert Question',
    year: 2025,
    tags: ['Assessment for Learning', 'Formative Assessment', 'Pedagogy']
  },
  {
    id: 'ctet-evs-001',
    exam: 'ctet',
    paper: 'Paper I',
    subject: 'Environmental Studies',
    topic: 'Shelter & Traditional Architecture',
    difficulty: 'Medium',
    question: 'Houses in Leh (Ladakh) have thick stone walls, wooden ceilings, flat roofs made of thick tree trunks, and the ground floor has no windows. Why is the ground floor designed without windows?',
    questionHi: 'लेह (लद्दाख) के घरों में पत्थर की मोटी दीवारें, लकड़ी की छतें और सपाट छतें होती हैं, तथा भूतल (ग्राउंड फ्लोर) में कोई खिड़की नहीं होती। भूतल पर खिड़की न होने का मुख्य कारण क्या है?',
    options: [
      'To prevent dust storms during monsoon season.',
      'To keep animals and essential stored goods protected from extreme cold and winds.',
      'To obey traditional cultural taboos against ground floor windows.',
      'To support the upper multi-storey construction load.'
    ],
    optionsHi: [
      'मानसून के दौरान धूल भरी आंधी से बचने हेतु।',
      'भीषण ठंड और बर्फीली हवाओं से जानवरों व भंडारित सामग्री की सुरक्षा हेतु।',
      'भूतल पर खिड़की न रखने की प्राचीन परंपरा का पालन करने हेतु।',
      'ऊपरी मंजिलों के अत्यधिक भार को सहन करने हेतु।'
    ],
    answer: 1,
    explanation: 'In cold desert Ladakh, the ground floor is used for keeping livestock and storage. Having no windows prevents cold wind penetration, keeping the interior warm during freezing winters.',
    explanationHi: 'लद्दाख में अत्यधिक ठंड से बचाव हेतु भूतल पर खिड़कियां नहीं रखी जाती हैं, जहां पशुओं को रखा जाता है और आवश्यक खाद्य सामग्री का भंडारण किया जाता है।',
    sourceType: 'VERIFIED PYQ',
    source: 'CTET Jan 2023 Paper I EVS Q68',
    year: 2023,
    tags: ['EVS', 'NCERT Class 5 A Shelter So High', 'Ladakh']
  },
  {
    id: 'ctet-evs-002',
    exam: 'ctet',
    paper: 'Paper I',
    subject: 'Environmental Studies',
    topic: 'Food Preservation & Nutrition',
    difficulty: 'Easy',
    question: 'Which of the following groups of foodstuffs is rich in Iron and is recommended by medical professionals to combat Anaemia?',
    questionHi: 'निम्नलिखित में से खाद्य पदार्थों का कौन सा समूह आयरन (लोह तत्व) से भरपूर है और एनीमिया (रक्ताल्पता) को दूर करने हेतु उपयोगी है?',
    options: [
      'Amla, Spinach, Jaggery (आंवला, पालक, गुड़)',
      'Apple, Tomato, Rice',
      'Milk, Banana, Orange',
      'Potato, Lemon, Butter'
    ],
    optionsHi: [
      'आंवला, पालक, गुड़',
      'सेब, टमाटर, चावल',
      'दूध, केला, संतरा',
      'आलू, नींबू, मक्खन'
    ],
    answer: 0,
    explanation: 'Amla (Indian Gooseberry), Spinach, and Jaggery (Gur) are proven rich sources of dietary iron, which increases hemoglobin synthesis and cures iron-deficiency anaemia.',
    explanationHi: 'आंवला, पालक और गुड़ आयरन के प्रचुर प्राकृतिक स्रोत हैं, जो हीमोग्लोबिन स्तर को बढ़ाकर एनीमिया का उपचार करते हैं। (NCERT Class 5 EVS Chapter Treat for Mosquitoes).',
    sourceType: 'VERIFIED PYQ',
    source: 'CTET Dec 2022 Paper I EVS Q72',
    year: 2022,
    tags: ['EVS', 'Anaemia', 'NCERT Food']
  },
  {
    id: 'ctet-sci-001',
    exam: 'ctet',
    paper: 'Paper II',
    subject: 'Science',
    topic: 'Acids, Bases & Indicators',
    difficulty: 'Medium',
    question: 'A student adds China rose (Gudhal) petal extract to two test tubes X and Y. In test tube X, the color changes to dark pink (magenta), while in test tube Y, the color turns green. What are the natures of solutions X and Y?',
    questionHi: 'एक छात्र दो परखनलियों X और Y में गुड़हल की पंखुड़ियों का सूचक (China Rose Indicator) मिलाता है। परखनली X में रंग गहरा गुलाबी (मैजेंटा) तथा Y में हरा हो जाता है। विलयन X और Y की प्रकृति क्या है?',
    options: [
      'X is acidic, Y is basic',
      'X is basic, Y is acidic',
      'Both X and Y are neutral',
      'X is neutral, Y is acidic'
    ],
    optionsHi: [
      'X अम्लीय है तथा Y क्षारीय है',
      'X क्षारीय है तथा Y अम्लीय है',
      'X और Y दोनों उदासीन हैं',
      'X उदासीन है तथा Y अम्लीय है'
    ],
    answer: 0,
    explanation: 'China Rose petal indicator turns acidic solutions into dark pink (magenta) and basic solutions into green. Therefore, X is an acid and Y is a base.',
    explanationHi: 'गुड़हल का सूचक अम्लीय विलयन को गहरा गुलाबी (मैजेंटा) तथा क्षारीय विलयन को हरा कर देता है। अतः X अम्ल और Y क्षार है। (NCERT Science Class 7 Chapter 5).',
    sourceType: 'VERIFIED PYQ',
    source: 'CTET Jan 2024 Paper II Science Q65',
    year: 2024,
    tags: ['Science', 'Acids Bases', 'NCERT Class 7']
  },
  {
    id: 'ctet-sci-002',
    exam: 'ctet',
    paper: 'Paper II',
    subject: 'Science',
    topic: 'Photosynthesis & Respiration in Plants',
    difficulty: 'Medium',
    question: 'During photosynthesis in green leaves, which gas is released as a byproduct, and what is the exact chemical source from which this gas originates?',
    questionHi: 'हरी पत्तियों में प्रकाश संश्लेषण के दौरान कौन सी गैस उप-उत्पाद के रूप में मुक्त होती है, और यह गैस किस रासायनिक घटक के विखंडन से उत्पन्न होती है?',
    options: [
      'Carbon dioxide released from glucose decomposition',
      'Oxygen gas released from the photolysis of water molecules (H2O)',
      'Oxygen gas released from the reduction of carbon dioxide (CO2)',
      'Nitrogen gas released from root nitrates'
    ],
    optionsHi: [
      'ग्लूकोज अपघटन से मुक्त कार्बन डाइऑक्साइड',
      'जल के अणुओं (H2O) के प्रकाशिक अपघटन (Photolysis) से मुक्त ऑक्सीजन',
      'कार्बन डाइऑक्साइड (CO2) के अपचयन से मुक्त ऑक्सीजन',
      'जड़ के नाइट्रेट्स से मुक्त नाइट्रोजन'
    ],
    answer: 1,
    explanation: 'Oxygen (O2) evolved during the light reactions of photosynthesis is derived strictly from the splitting (photolysis) of water molecules, as proved by Ruben and Kamen using 18O isotopic tracing.',
    explanationHi: 'प्रकाश संश्लेषण में मुक्त होने वाली ऑक्सीजन गैस जल के प्रकाश-अपघटन (Photolysis of Water) से प्राप्त होती है, न कि कार्बन डाइऑक्साइड से।',
    sourceType: 'PYQ-STYLE',
    source: 'CTET Standard Science Domain Question',
    year: 2023,
    tags: ['Science', 'Photosynthesis', 'Biology']
  },
  {
    id: 'ctet-math-001',
    exam: 'ctet',
    paper: 'Paper II',
    subject: 'Mathematics',
    topic: 'Number System & Fractions',
    difficulty: 'Medium',
    question: 'If the 7-digit number 134x58y is completely divisible by 72, where x and y are single-digit integers, what is the value of (2x + y)?',
    questionHi: 'यदि 7 अंकों की संख्या 134x58y संख्या 72 से पूर्णतः विभाज्य है, जहाँ x और y एकल अंकीय पूर्णांक हैं, तो (2x + y) का मान क्या होगा?',
    options: [
      '8',
      '10',
      '12',
      '14'
    ],
    optionsHi: [
      '8',
      '10',
      '12',
      '14'
    ],
    answer: 0,
    explanation: 'A number is divisible by 72 if it is divisible by both 8 and 9. For divisibility by 8, last three digits 58y must be divisible by 8: 584 / 8 = 73, hence y = 4. For divisibility by 9, sum of digits 1 + 3 + 4 + x + 5 + 8 + 4 = 25 + x must be a multiple of 9 (27), giving x = 2. Thus, 2x + y = 2(2) + 4 = 8.',
    explanationHi: 'संख्या 72 से विभाज्य होने हेतु 8 और 9 दोनों से विभाज्य होनी चाहिए। 8 से विभाज्यता हेतु अंतिम 3 अंक 58y में y = 4 होगा (584/8 = 73)। 9 से विभाज्यता हेतु अंकों का योग 25 + x = 27 होगा, अतः x = 2। इसलिए (2x + y) = 2(2) + 4 = 8 होगा।',
    sourceType: 'VERIFIED PYQ',
    source: 'CTET Jan 2024 Paper II Mathematics Q37',
    year: 2024,
    tags: ['Mathematics', 'Divisibility Rules', 'Number System']
  }
];
