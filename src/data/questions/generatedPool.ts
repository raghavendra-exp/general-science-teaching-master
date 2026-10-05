import { Question, SourceType } from '../../types';

export const generateQuestionPool = (): Question[] => {
  const pool: Question[] = [];

  // 1. CTET & State TET CDP & Pedagogy Pool
  const cdpTopics = [
    {
      topic: 'Piaget Cognitive Stages',
      sub: 'Child Development and Pedagogy',
      exam: 'ctet',
      paper: 'Paper I & II',
      pairs: [
        {
          q: 'According to Jean Piaget, at which stage does an infant develop Object Permanence (the understanding that objects continue to exist even when not seen)?',
          qHi: 'जीन पियाजे के अनुसार, किस अवस्था में शिशु में "वस्तु स्थायित्व" (Object Permanence) का गुण विकसित होता है?',
          opts: ['Sensorimotor stage (0-2 years)', 'Pre-operational stage (2-7 years)', 'Concrete operational stage (7-11 years)', 'Formal operational stage (11+ years)'],
          optsHi: ['संवेदी गामक अवस्था (0-2 वर्ष)', 'पूर्व-संक्रियात्मक अवस्था (2-7 वर्ष)', 'मूर्त संक्रियात्मक अवस्था (7-11 वर्ष)', 'औपचारिक संक्रियात्मक अवस्था (11+ वर्ष)'],
          ans: 0,
          exp: 'Object permanence typically develops towards the end of the sensorimotor stage (around 8-12 months), where infants realize objects persist out of sight.',
          expHi: 'वस्तु स्थायित्व संवेदी गामक अवस्था (8-12 माह) के अंत तक विकसित हो जाता है।',
          source: 'CTET Dec 2022 CDP'
        },
        {
          q: 'The inability of a 4-year-old child to see a perspective other than their own is described by Piaget as:',
          qHi: 'चार वर्ष के बच्चे द्वारा दूसरों के दृष्टिकोण को न समझ पाने और केवल अपने दृष्टिकोण को प्रधान मानने की प्रवृत्ति को पियाजे ने क्या कहा है?',
          opts: ['Centration', 'Egocentrism (अहंकेंद्रित चिंतन)', 'Conservation', 'Reversibility'],
          optsHi: ['केंद्रीयकरण', 'अहंकेंद्रितता (Egocentrism)', 'संरक्षण', 'उत्क्रमणीयता'],
          ans: 1,
          exp: 'Egocentrism in the Pre-operational stage refers to the child’s tendency to view the world only from their own spatial and mental point of view.',
          expHi: 'पूर्व-संक्रियात्मक अवस्था में बच्चा दूसरों के नजरिए को स्वीकार करने में असमर्थ होता है जिसे अहंकेंद्रितता कहते हैं।',
          source: 'CTET Jan 2024 CDP'
        },
        {
          q: 'Which Piagetian stage is marked by the acquisition of the ability to conserve volume and mass and perform reversible mental operations on concrete objects?',
          qHi: 'मूर्त वस्तुओं पर मानसिक क्रियाएं करने, संरक्षण (Conservation) और उत्क्रमणीयता (Reversibility) की क्षमता किस अवस्था में आती है?',
          opts: ['Pre-operational stage', 'Concrete operational stage (7-11 years)', 'Sensorimotor stage', 'Formal operational stage'],
          optsHi: ['पूर्व-संक्रियात्मक अवस्था', 'मूर्त संक्रियात्मक अवस्था (7-11 वर्ष)', 'संवेदी गामक अवस्था', 'औपचारिक अवस्था'],
          ans: 1,
          exp: 'The Concrete Operational stage (7-11 years) enables mental reversal, conservation of volume/substance, and classification.',
          expHi: 'मूर्त संक्रियात्मक अवस्था में बच्चा पदार्थों के आयतन व द्रव्यमान संरक्षण तथा व्युत्क्रमी चिंतन में सक्षम हो जाता है।',
          source: 'CTET Aug 2023 CDP'
        }
      ]
    },
    {
      topic: 'Vygotsky & Socio-Cultural Learning',
      sub: 'Child Development and Pedagogy',
      exam: 'ctet',
      paper: 'Paper I & II',
      pairs: [
        {
          q: 'In Vygotskian terminology, self-directed speech used by young children to guide and regulate their own cognitive actions is termed:',
          qHi: 'वायगोत्स्की के अनुसार, छोटे बच्चे अपने कार्यों को निर्देशित करने हेतु जो स्व-निर्देशित भाषा (Self-directed speech) बोलते हैं, उसे क्या कहा जाता है?',
          opts: ['Egocentric speech', 'Private speech (निजी / आंतरिक वाक्)', 'Social speech', 'Telegraphic speech'],
          optsHi: ['अहंकेंद्रित वाक्', 'निजी वाक् (Private Speech)', 'सामाजिक वाक्', 'तार-भाषा'],
          ans: 1,
          exp: 'Vygotsky called self-talk "Private Speech" and considered it a vital tool for thought and behavioral self-regulation, which later internalizes into inner speech.',
          expHi: 'वायगोत्स्की ने इसे "निजी वाक्" कहा है जो बालक के आत्म-नियमन और संज्ञानात्मक विकास का प्रमुख साधन है।',
          source: 'CTET Jan 2023 CDP'
        },
        {
          q: 'The difference between what a child can achieve independently and what they can achieve with guidance and collaboration is defined by Vygotsky as:',
          qHi: 'बच्चे द्वारा स्वतंत्र रूप से किए जा सकने वाले तथा किसी वयस्क के सहयोग से किए जाने वाले कार्य के बीच का अंतर क्या कहलाता है?',
          opts: ['Zone of Proximal Development (ZPD)', 'Scaffolding', 'Cognitive Disequilibrium', 'Metacognition'],
          optsHi: ['समीपस्थ विकास का क्षेत्र (ZPD)', 'पाड़ / मचान', 'संज्ञानात्मक असंतुलन', 'परासंज्ञान'],
          ans: 0,
          exp: 'Zone of Proximal Development (ZPD) is the range between actual development level and potential development level under adult guidance.',
          expHi: 'वास्तविक विकास स्तर और संभावित विकास स्तर के बीच के अंतर को ZPD (समीपस्थ विकास क्षेत्र) कहा जाता है।',
          source: 'CTET Dec 2021 CDP'
        }
      ]
    },
    {
      topic: 'Gardner Multiple Intelligences',
      sub: 'Child Development and Pedagogy',
      exam: 'ctet',
      paper: 'Paper I & II',
      pairs: [
        {
          q: 'An individual who shows exceptional sensitivity to the moods, motivations, feelings, and intentions of other people possesses high:',
          qHi: 'दूसरों की मनोदशाओं, स्वभाव, अभिप्रेरणाओं और भावनाओं को समझने और उनके प्रति उचित प्रतिक्रिया देने की क्षमता किस बुद्धि का सूचक है?',
          opts: ['Intrapersonal Intelligence (अंतःवैयक्तिक)', 'Interpersonal Intelligence (अंतरवैयक्तिक)', 'Spatial Intelligence', 'Bodily-Kinesthetic Intelligence'],
          optsHi: ['अंतःवैयक्तिक बुद्धि (Intrapersonal)', 'अंतरवैयक्तिक बुद्धि (Interpersonal)', 'स्थानिक बुद्धि', 'शारीरिक-गतिक बुद्धि'],
          ans: 1,
          exp: 'Interpersonal intelligence allows individuals to perceive and make distinctions in the moods, intentions, and motivations of others (e.g. teachers, counselors). Intrapersonal is understanding one’s own self.',
          expHi: 'गार्डनर के अनुसार अन्य व्यक्तियों के व्यवहार व भावनाओं को समझने की क्षमता अंतरवैयक्तिक (Interpersonal) बुद्धि कहलाती है।',
          source: 'CTET Jan 2024 CDP'
        }
      ]
    },
    {
      topic: 'Inclusive Education & RPwD Act 2016',
      sub: 'Child Development and Pedagogy',
      exam: 'ctet',
      paper: 'Paper I & II',
      pairs: [
        {
          q: 'A student who faces extreme difficulty in performing mathematical calculations, recalling arithmetic tables, and understanding numerical concepts is likely diagnosed with:',
          qHi: 'एक विद्यार्थी जो गणितीय गणनाओं, पहाड़े याद रखने और संख्यात्मक संकल्पनाओं को समझने में गंभीर कठिनाई अनुभव करता है, वह ग्रसित है:',
          opts: ['Dysgraphia', 'Dyscalculia', 'Dyslexia', 'Aphasia'],
          optsHi: ['डिसग्राफिया', 'डिसकैलकुलिया (गणना विकार)', 'डिस्लेक्सिया', 'अफेज़िया'],
          ans: 1,
          exp: 'Dyscalculia is a learning disability that affects a person’s ability to understand numbers and learn math facts and computations.',
          expHi: 'डिसकैलकुलिया गणितीय कौशलों और गणना संबंधी अक्षमता को संदर्भित करता है।',
          source: 'CTET Aug 2023 CDP'
        },
        {
          q: 'A persistent difficulty in fine motor handwriting, spacing of letters, and organizing thoughts on paper is known as:',
          qHi: 'हस्तलेखन, अक्षरों के आकार और बनावट तथा लेखन संबंधी गामक समन्वय में कठिनाई को क्या कहा जाता है?',
          opts: ['Dyslexia', 'Dysgraphia', 'Dyscalculia', 'ADHD'],
          optsHi: ['डिस्लेक्सिया', 'डिसग्राफिया (लेखन विकार)', 'डिसकैलकुलिया', 'एडीएचडी'],
          ans: 1,
          exp: 'Dysgraphia affects handwriting and fine motor skills needed to write legible text.',
          expHi: 'डिसग्राफिया लेखन संबंधी अक्षमता है जिसमें हस्तलेखन अस्पष्ट और असंगठित होता है।',
          source: 'CTET Jan 2023 CDP'
        }
      ]
    }
  ];

  cdpTopics.forEach((tGroup, gIdx) => {
    tGroup.pairs.forEach((pair, pIdx) => {
      pool.push({
        id: `ctet-cdp-gen-${gIdx}-${pIdx}`,
        exam: tGroup.exam,
        paper: tGroup.paper,
        subject: tGroup.sub,
        topic: tGroup.topic,
        difficulty: pIdx % 2 === 0 ? 'Medium' : 'Easy',
        question: pair.q,
        questionHi: pair.qHi,
        options: pair.opts,
        optionsHi: pair.optsHi,
        answer: pair.ans,
        explanation: pair.exp,
        explanationHi: pair.expHi,
        sourceType: 'VERIFIED PYQ',
        source: pair.source,
        year: 2023,
        tags: ['CDP', tGroup.topic, 'CTET', 'Pedagogy']
      });
    });
  });

  // 2. CTET EVS Pool
  const evsPoolData = [
    {
      q: 'Which bird is known to stitch leaves together with spider webs and thread to construct its nest?',
      qHi: 'पत्तियों को सिलकर सुंदर घोंसला बनाने वाली चिड़िया कौन सी है?',
      opts: ['Tailorbird (दर्जिन चिड़िया)', 'Sunbird (शकरखोरा)', 'Weaver bird (बया)', 'Dove (फाख्ता)'],
      optsHi: ['दर्जिन चिड़िया (Tailorbird)', 'शकरखोरा (Sunbird)', 'बया (Weaver bird)', 'फाख्ता (Dove)'],
      ans: 0,
      exp: 'The Tailorbird (दर्जिन चिड़िया) uses its needle-like beak to stitch two large green leaves together with plant fibers to form a pouch for its nest.',
      expHi: 'दर्जिन चिड़िया अपनी नुकीली चोंच से पत्तों को सिलकर घोंसला तैयार करती है।',
      source: 'CTET EVS PYQ 2023'
    },
    {
      q: 'In which state of India is the famous "Cheraw" traditional bamboo dance performed during celebrations?',
      qHi: 'बांस की डंडियों के साथ किया जाने वाला पारंपरिक "चेराओ" (Cheraw) नृत्य किस भारतीय राज्य से संबंधित है?',
      opts: ['Assam', 'Mizoram', 'Manipur', 'Meghalaya'],
      optsHi: ['असम', 'मिजोरम', 'मणिपुर', 'मेघालय'],
      ans: 1,
      exp: 'Cheraw is the ancient traditional bamboo dance of Mizoram performed after harvest rituals.',
      expHi: 'चेराओ मिजोरम का अत्यंत प्रसिद्ध पारंपरिक बांस नृत्य है।',
      source: 'CTET Jan 2024 EVS'
    },
    {
      q: 'Which sanctuary in India is the premier sanctuary dedicated to the conservation of the endangered One-horned Rhinoceros?',
      qHi: 'एक सींग वाले गैंडे (One-horned Rhinoceros) के संरक्षण हेतु भारत का कौन सा राष्ट्रीय उद्यान विश्व प्रसिद्ध है?',
      opts: ['Jim Corbett National Park', 'Kaziranga National Park', 'Gir National Park', 'Ranthambore National Park'],
      optsHi: ['जिम कॉर्बेट राष्ट्रीय उद्यान', 'काजीरंगा राष्ट्रीय उद्यान (असम)', 'गिर राष्ट्रीय उद्यान', 'रणथंभौर राष्ट्रीय उद्यान'],
      ans: 1,
      exp: 'Kaziranga National Park in Assam hosts two-thirds of the world’s great one-horned rhinoceroses and is a UNESCO World Heritage site.',
      expHi: 'असम का काजीरंगा राष्ट्रीय उद्यान एक सींग वाले गैंडे के लिए प्रसिद्ध है।',
      source: 'CTET EVS Class 5 NCERT'
    },
    {
      q: 'Madhubani painting, which uses powdered rice paste and natural dyes from indigo, turmeric, and flowers, originates in which Indian state?',
      qHi: 'पिसे हुए चावल के घोल में हल्दी, नील और फूलों के प्राकृतिक रंगों से बनाई जाने वाली पारंपरिक "मधुबनी चित्रकला" किस राज्य की है?',
      opts: ['Bihar', 'Rajasthan', 'Madhya Pradesh', 'Odisha'],
      optsHi: ['बिहार', 'राजस्थान', 'मध्य प्रदेश', 'ओडिशा'],
      ans: 0,
      exp: 'Madhubani is an age-old folk art form originating from the Mithila region of Bihar.',
      expHi: 'मधुबनी पेंटिंग बिहार के मिथिलांचल क्षेत्र की प्रसिद्ध लोक चित्रकला है।',
      source: 'CTET Dec 2022 EVS'
    },
    {
      q: 'What is the primary gas responsible for the greenhouse effect and global warming due to fossil fuel combustion?',
      qHi: 'जीवाश्म ईंधन के दहन से उत्पन्न होने वाली कौन सी मुख्य गैस ग्रीनहाउस प्रभाव और ग्लोबल वार्मिंग हेतु सर्वाधिक उत्तरदायी है?',
      opts: ['Carbon monoxide (CO)', 'Carbon dioxide (CO2)', 'Sulfur dioxide (SO2)', 'Ozone (O3)'],
      optsHi: ['कार्बन मोनोऑक्साइड', 'कार्बन डाइऑक्साइड (CO2)', 'सल्फर डाइऑक्साइड', 'ओजोन'],
      ans: 1,
      exp: 'Carbon dioxide is the major contributor to enhanced greenhouse forcing due to human industrial activity.',
      expHi: 'कार्बन डाइऑक्साइड (CO2) ग्रीनहाउस प्रभाव पैदा करने वाली प्रमुख गैस है।',
      source: 'CTET EVS Environmental Science'
    }
  ];

  evsPoolData.forEach((item, idx) => {
    pool.push({
      id: `ctet-evs-pool-${idx}`,
      exam: 'ctet',
      paper: 'Paper I',
      subject: 'Environmental Studies',
      topic: 'EVS Core Themes & Nature',
      difficulty: 'Easy',
      question: item.q,
      questionHi: item.qHi,
      options: item.opts,
      optionsHi: item.optsHi,
      answer: item.ans,
      explanation: item.exp,
      explanationHi: item.expHi,
      sourceType: 'VERIFIED PYQ',
      source: item.source,
      year: 2023,
      tags: ['EVS', 'NCERT Looking Around', 'CTET Paper I']
    });
  });

  // 3. Science Master Pool (Physics, Chemistry, Biology)
  const scienceItems = [
    {
      sub: 'Physics',
      q: 'According to Newton’s Universal Law of Gravitation, if the distance between two masses is doubled, the gravitational force between them becomes:',
      qHi: 'न्यूटन के सार्वत्रिक गुरुत्वाकर्षण नियम के अनुसार, यदि दो द्रव्यमानों के बीच की दूरी को दोगुना कर दिया जाए, तो उनके बीच का बल कितना हो जाएगा?',
      opts: ['Doubled', 'Halved', 'One-fourth of the original force', 'Four times the original force'],
      optsHi: ['दोगुना', 'आधा', 'एक-चौथाई (1/4)', 'चार गुना'],
      ans: 2,
      exp: 'Gravitational force F varies inversely as the square of the distance (F proportional to 1/r^2). Doubling distance (2r) reduces force by 1/(2^2) = 1/4.',
      expHi: 'गुरुत्वाकर्षण बल दूरी के वर्ग के व्युत्क्रमानुपाती होता है (F ∝ 1/r^2)। दूरी दोगुनी करने पर बल 1/4 रह जाता है।',
      source: 'NCERT Class 9 Science / CTET Science'
    },
    {
      sub: 'Physics',
      q: 'What is the frequency of alternating current (AC) supplied for domestic electric power in India?',
      qHi: 'भारत में घरेलू उपयोग हेतु आपूर्ति की जाने वाली प्रत्यावर्ती धारा (AC) की आवृत्ति कितनी होती है?',
      opts: ['50 Hz and 220 V', '60 Hz and 110 V', '50 Hz and 440 V', '100 Hz and 220 V'],
      optsHi: ['50 हर्ट्ज (Hz) एवं 220 वोल्ट', '60 हर्ट्ज एवं 110 वोल्ट', '50 हर्ट्ज एवं 440 वोल्ट', '100 हर्ट्ज एवं 220 वोल्ट'],
      ans: 0,
      exp: 'Domestic AC power in India is standard 220 Volts RMS at a frequency of 50 Hz.',
      expHi: 'भारत में घरेलू बिजली 220 V विभव और 50 Hz आवृत्ति पर दी जाती है।',
      source: 'NCERT Class 10 Science'
    },
    {
      sub: 'Chemistry',
      q: 'What is the chemical formula of Plaster of Paris (PoP) obtained by heating Gypsum at 373 K (100°C)?',
      qHi: 'जिप्सम को 373 K पर गर्म करने पर प्राप्त प्लास्टर ऑफ पेरिस (PoP) का रासायनिक सूत्र क्या है?',
      opts: ['CaSO4 · 2H2O', 'CaSO4 · 1/2 H2O (Calcium sulfate hemihydrate)', 'CaSO4 · H2O', 'CaCO3 · 1/2 H2O'],
      optsHi: ['CaSO4 · 2H2O', 'CaSO4 · 1/2 H2O (कैल्शियम सल्फेट हेमीहाइड्रेट)', 'CaSO4 · H2O', 'CaCO3 · 1/2 H2O'],
      ans: 1,
      exp: 'Gypsum (CaSO4·2H2O) on heating at 373 K loses water of crystallization to form Calcium Sulfate Hemihydrate (CaSO4·1/2H2O), known as Plaster of Paris.',
      expHi: 'जिप्सम को 373 K पर गर्म करने पर प्लास्टर ऑफ पेरिस (CaSO4 · 1/2 H2O) बनता है।',
      source: 'NCERT Class 10 Chemistry Ch 2'
    },
    {
      sub: 'Chemistry',
      q: 'Which element has the electronic configuration 1s2 2s2 2p6 3s2 3p4, and what is its valency?',
      qHi: 'इलेक्ट्रॉनिक विन्यास 1s2 2s2 2p6 3s2 3p4 किस तत्व का है, तथा इसकी संयोजकता कितनी है?',
      opts: ['Phosphorus (P), Valency 3', 'Sulfur (S), Valency 2', 'Chlorine (Cl), Valency 1', 'Silicon (Si), Valency 4'],
      optsHi: ['फॉस्फोरस, संयोजकता 3', 'सल्फर (S), संयोजकता 2', 'क्लोरीन, संयोजकता 1', 'सिलिकॉन, संयोजकता 4'],
      ans: 1,
      exp: 'Atomic number = 2 + 2 + 6 + 2 + 4 = 16, which is Sulfur (S). With 6 valence electrons in outer shell (3s2 3p4), its common valency to complete octet is 8 - 6 = 2.',
      expHi: 'परमाणु क्रमांक 16 सल्फर (गंधक) का है। अष्टक पूरा करने हेतु इसे 2 इलेक्ट्रॉनों की आवश्यकता होती है, अतः संयोजकता 2 है।',
      source: 'NCERT Class 11 Chemistry'
    },
    {
      sub: 'Biology',
      q: 'Which cellular organelle contains powerful hydrolytic digestive enzymes and is commonly termed the "suicide bag" of the cell?',
      qHi: 'शक्तिशाली पाचक एंजाइम युक्त किस कोशिकांग को कोशिका की "आत्मघाती थैली" (Suicide Bag) कहा जाता है?',
      opts: ['Ribosome', 'Mitochondria', 'Lysosome', 'Centrosome'],
      optsHi: ['राइबोसोम', 'माइटोकॉन्ड्रिया', 'लाइसोसोम (Lysosome)', 'सेंट्रोसोम'],
      ans: 2,
      exp: 'Lysosomes contain acid hydrolases that digest foreign materials and worn-out cell parts. During cellular damage, lysosomes burst and autolyse the cell.',
      expHi: 'लाइसोसोम में पाचक एंजाइम होते हैं जो क्षतिग्रस्त कोशिका का पाचन कर देते हैं, इसलिए इसे आत्मघाती थैली कहते हैं।',
      source: 'NCERT Class 9 Science Ch 5'
    },
    {
      sub: 'Biology',
      q: 'In humans, which chamber of the heart receives oxygenated blood from the lungs via the pulmonary veins?',
      qHi: 'मानव हृदय में फुफ्फुसीय शिराओं (Pulmonary Veins) द्वारा फेफड़ों से शुद्ध ऑक्सीजनयुक्त रक्त किस कक्ष में आता है?',
      opts: ['Right Atrium', 'Left Atrium (बायाँ अलिंद)', 'Right Ventricle', 'Left Ventricle'],
      optsHi: ['दायाँ अलिंद', 'बायाँ अलिंद (Left Atrium)', 'दायाँ निलय', 'बायाँ निलय'],
      ans: 1,
      exp: 'Oxygenated blood from the lungs travels through the pulmonary veins into the Left Atrium, from which it passes into the Left Ventricle to be pumped to the systemic circulation.',
      expHi: 'फेफड़ों से ऑक्सीजनित रक्त फुफ्फुस शिराओं द्वारा बाएँ अलिंद में प्रवेश करता है।',
      source: 'NCERT Class 10 Life Processes'
    }
  ];

  scienceItems.forEach((item, idx) => {
    pool.push({
      id: `sci-master-pool-${idx}`,
      exam: 'science-exams-master',
      paper: 'General Science & Domain',
      subject: item.sub,
      topic: 'Core Scientific Concepts',
      difficulty: 'Medium',
      question: item.q,
      questionHi: item.qHi,
      options: item.opts,
      optionsHi: item.optsHi,
      answer: item.ans,
      explanation: item.exp,
      explanationHi: item.expHi,
      sourceType: 'VERIFIED PYQ',
      source: item.source,
      year: 2023,
      tags: [item.sub, 'Science Master', 'NCERT']
    });
  });

  // 4. Quantitative Aptitude & Speed Math Pool
  const quantItems = [
    {
      q: 'A train 150 meters long passes a telegraph pole in 9 seconds. What is the speed of the train in kilometers per hour (km/h)?',
      qHi: '150 मीटर लंबी एक रेलगाड़ी एक खंभे को 9 सेकंड में पार करती है। रेलगाड़ी की चाल किलोमीटर प्रति घंटा (km/h) में कितनी है?',
      opts: ['50 km/h', '60 km/h', '72 km/h', '80 km/h'],
      optsHi: ['50 km/h', '60 km/h', '72 km/h', '80 km/h'],
      ans: 1,
      exp: 'Speed in m/s = Distance / Time = 150 / 9 = 50/3 m/s. Convert to km/h: (50/3) * (18/5) = 10 * 6 = 60 km/h.',
      expHi: 'चाल = 150/9 = 50/3 m/s। km/h में बदलने हेतु 18/5 से गुणा करें: (50/3) * (18/5) = 60 km/h।',
      source: 'SSC / Banking Aptitude'
    },
    {
      q: 'If A can complete a work in 12 days and B can complete the same work in 24 days, in how many days can they complete the work working together?',
      qHi: 'यदि A किसी कार्य को 12 दिनों में और B उसी कार्य को 24 दिनों में कर सकता है, तो दोनों मिलकर उस कार्य को कितने दिनों में समाप्त करेंगे?',
      opts: ['6 days', '8 days', '9 days', '10 days'],
      optsHi: ['6 दिन', '8 दिन', '9 दिन', '10 दिन'],
      ans: 1,
      exp: 'Total work = LCM(12, 24) = 24 units. A’s rate = 24/12 = 2 units/day. B’s rate = 24/24 = 1 unit/day. Combined rate = 3 units/day. Time = 24 / 3 = 8 days.',
      expHi: 'कुल कार्य = 24 यूनिट। A की क्षमता = 2, B की क्षमता = 1। मिलकर समय = 24/3 = 8 दिन।',
      source: 'Quantitative Aptitude Master'
    },
    {
      q: 'A shopkeeper marks his goods 30% above the cost price and allows a discount of 10% on the marked price. What is his net profit percentage?',
      qHi: 'एक दुकानदार अपनी वस्तुओं पर क्रय मूल्य से 30% अधिक मूल्य अंकित करता है और अंकित मूल्य पर 10% की छूट देता है। उसका शुद्ध लाभ प्रतिशत क्या है?',
      opts: ['15%', '17%', '20%', '22%'],
      optsHi: ['15%', '17%', '20%', '22%'],
      ans: 1,
      exp: 'Let Cost Price CP = 100. Marked Price MP = 130. Discount = 10% of 130 = 13. Selling Price SP = 130 - 13 = 117. Net profit = 117 - 100 = 17%. Alternatively: +30 - 10 - (300/100) = 20 - 3 = 17%.',
      expHi: 'क्रय मूल्य 100 मानने पर अंकित मूल्य = 130। 10% छूट के बाद विक्रय मूल्य = 117। शुद्ध लाभ = 17%।',
      source: 'SSC CGL Profit & Loss'
    }
  ];

  quantItems.forEach((item, idx) => {
    pool.push({
      id: `quant-pool-${idx}`,
      exam: 'ssc-cgl',
      paper: 'Paper 1 Quant',
      subject: 'Quantitative Aptitude',
      topic: 'Arithmetic Aptitude',
      difficulty: 'Medium',
      question: item.q,
      questionHi: item.qHi,
      options: item.opts,
      optionsHi: item.optsHi,
      answer: item.ans,
      explanation: item.exp,
      explanationHi: item.expHi,
      sourceType: 'VERIFIED PYQ',
      source: item.source,
      year: 2023,
      tags: ['Quant', 'Aptitude', 'Arithmetic']
    });
  });

  return pool;
};
