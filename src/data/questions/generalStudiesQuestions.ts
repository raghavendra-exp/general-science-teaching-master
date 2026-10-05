import { Question } from '../../types';

export const generalStudiesQuestions: Question[] = [
  {
    id: 'gs-polity-001',
    exam: 'ssc-cgl',
    paper: 'General Studies',
    subject: 'Indian Polity & Constitution',
    topic: 'Fundamental Rights & Writs',
    difficulty: 'Medium',
    question: 'Under Article 32 of the Constitution of India, which writ is issued by the Supreme Court to restrain a person from holding a public office to which he is not legally entitled?',
    questionHi: 'भारतीय संविधान के अनुच्छेद 32 के अंतर्गत, सर्वोच्च न्यायालय द्वारा किसी व्यक्ति को ऐसे सार्वजनिक पद को धारण करने से रोकने हेतु कौन सी रिट जारी की जाती है जिसका वह विधिक रूप से पात्र नहीं है?',
    options: [
      'Habeas Corpus (बंदी प्रत्यक्षीकरण)',
      'Mandamus (परमादेश)',
      'Quo-Warranto (अधिकार-पृच्छा)',
      'Certiorari (उत्प्रेषण)'
    ],
    optionsHi: [
      'बंदी प्रत्यक्षीकरण (Habeas Corpus)',
      'परमादेश (Mandamus)',
      'अधिकार-पृच्छा (Quo-Warranto)',
      'उत्प्रेषण (Certiorari)'
    ],
    answer: 2,
    explanation: 'The writ of Quo-Warranto (literally "by what authority") is issued by high courts and the supreme court to enquire into the legality of a claim which a person asserts to a public office and to oust him if the claim is not well founded.',
    explanationHi: 'अधिकार-पृच्छा (Quo-Warranto) रिट न्यायालय द्वारा यह जांचने के लिए जारी की जाती है कि कोई व्यक्ति किस अधिकार या प्राधिकार से किसी सार्वजनिक पद पर कार्यरत है।',
    sourceType: 'VERIFIED PYQ',
    source: 'SSC CGL / State PSC General Studies',
    year: 2023,
    tags: ['Polity', 'Article 32', 'Writs', 'Constitution']
  },
  {
    id: 'gs-hist-001',
    exam: 'ssc-cgl',
    paper: 'General Studies',
    subject: 'Indian History',
    topic: 'Modern History & Freedom Movement',
    difficulty: 'Easy',
    question: 'During which session of the Indian National Congress was the historic resolution of "Poorna Swaraj" (Complete Independence) passed under the presidency of Jawaharlal Nehru?',
    questionHi: 'जवाहरलाल नेहरू की अध्यक्षता में भारतीय राष्ट्रीय कांग्रेस के किस अधिवेशन में ऐतिहासिक "पूर्ण स्वराज" का प्रस्ताव पारित किया गया था?',
    options: [
      '1924 Belgaum Session',
      '1929 Lahore Session',
      '1931 Karachi Session',
      '1907 Surat Session'
    ],
    optionsHi: [
      '1924 बेलगाम अधिवेशन',
      '1929 लाहौर अधिवेशन',
      '1931 कराची अधिवेशन',
      '1907 सूरत अधिवेशन'
    ],
    answer: 1,
    explanation: 'The historic resolution of Poorna Swaraj was passed at the Lahore session of the Indian National Congress in December 1929 under the presidency of Jawaharlal Nehru, leading to the pledge of independence on 26 January 1930.',
    explanationHi: 'दिसंबर 1929 के लाहौर अधिवेशन में जवाहरलाल नेहरू की अध्यक्षता में कांग्रेस ने पूर्ण स्वराज का प्रस्ताव पारित किया और 26 जनवरी 1930 को प्रथम स्वतंत्रता दिवस मनाने का निर्णय लिया।',
    sourceType: 'VERIFIED PYQ',
    source: 'SSC CGL / UPSC / State PCS History PYQ',
    year: 2023,
    tags: ['History', 'Poorna Swaraj', 'Lahore Session 1929']
  },
  {
    id: 'gs-geo-001',
    exam: 'ssc-cgl',
    paper: 'General Studies',
    subject: 'Geography of India',
    topic: 'Rivers and Tributaries',
    difficulty: 'Medium',
    question: 'Which of the following Indian rivers flows through a rift valley between the Vindhya and Satpura mountain ranges and empties into the Arabian Sea without forming a delta?',
    questionHi: 'निम्नलिखित में से कौन सी भारतीय नदी विंध्य और सतपुड़ा पर्वत श्रेणियों के बीच भ्रंश घाटी (Rift Valley) से होकर बहती है और डेल्टा बनाए बिना अरब सागर में गिरती है?',
    options: [
      'Godavari',
      'Narmada',
      'Mahanadi',
      'Krishna'
    ],
    optionsHi: [
      'गोदावरी',
      'नर्मदा',
      'महानदी',
      'कृष्णा'
    ],
    answer: 1,
    explanation: 'The Narmada River originates from the Amarkantak plateau in Madhya Pradesh, flows westwards in a tectonic rift valley between the Vindhyas (north) and Satpuras (south), and empties into the Gulf of Khambhat (Arabian Sea) creating an estuary rather than a delta.',
    explanationHi: 'नर्मदा नदी विंध्य और सतपुड़ा के मध्य भ्रंश घाटी में पश्चिम की ओर बहते हुए खंभात की खाड़ी (अरब सागर) में ज्वारनदमुख (Estuary) बनाती है।',
    sourceType: 'VERIFIED PYQ',
    source: 'SSC / State PSC Geography',
    year: 2023,
    tags: ['Geography', 'Narmada', 'Rivers of India']
  }
];
