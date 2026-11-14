import approachCareImg from '../assets/images/approach_care_1794657303070.jpg';
import servicePregnancyImg from '../assets/images/service_pregnancy_1794657304342.jpg';
import serviceObstetricsImg from '../assets/images/service_obstetrics_suite_1794657325244.jpg';
import serviceGynaecologyImg from '../assets/images/service_gynaecology_1794657304021.jpg';
import serviceHormonalImg from '../assets/images/service_hormonal_1794657304828.jpg';
import serviceMenstrualImg from '../assets/images/service_menstrual_care_1794657326092.jpg';
import servicePreventiveImg from '../assets/images/service_preventive_lounge_1794657327352.jpg';
import finalCtaWalkImg from '../assets/images/final_cta_walk_1794657306697.jpg';

export const CLINIC_INFO = {
  brandShort: 'JIVANTIKA',
  brandSub: "Women's Healthcare",
  doctorName: 'Dr. Swagatika Panda Pal',
  doctorNameBengali: 'ডাঃ স্বাগতিক পান্ডা পাল',
  speciality: 'Obstetrician & Gynaecologist',
  clinicName: 'Jivantika Diagnostic Clinic',
  address:
    '49 Purba Diganta, 23A, opposite Maa Trinayani Restaurant, Purbalok, Mukundapur, Kolkata, West Bengal 700099, India',
  shortAddress: '49 Purba Diganta, 23A, Purbalok, Mukundapur, Kolkata, West Bengal 700099',
  phoneDisplay: '+91 72058 66267',
  phoneHref: 'tel:+917205866267',
  hoursNote: 'Open until 8:00 PM (please call to confirm daily opening hours)',
  plusCode: 'FCW2+M2, Kolkata, West Bengal',
  rating: '4.8',
  reviewCount: '127',
  inclusivity: ['LGBTQ+ friendly', 'Women-owned practice'],
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Jivantika+Diagnostic+Clinic,+49+Purba+Diganta,+23A,+Purbalok,+Mukundapur,+Kolkata,+West+Bengal+700099',
};

export const IMAGES = {
  doctorHero: '/images/doctor-hero.jpg',
  doctorProfile: '/images/doctor-profile.jpg',
  approachCare: approachCareImg,
  servicePregnancy: servicePregnancyImg,
  serviceObstetrics: serviceObstetricsImg,
  serviceGynaecology: serviceGynaecologyImg,
  serviceHormonal: serviceHormonalImg,
  serviceMenstrual: serviceMenstrualImg,
  servicePreventive: servicePreventiveImg,
  finalCtaWalk: finalCtaWalkImg,
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Doctor', href: '#about-doctor' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Our Care', href: '#care' },
  { label: 'Patient Reviews', href: '#reviews' },
  { label: 'FAQs', href: '#faq' },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Book Your Appointment',
    description:
      'Contact the clinic to enquire about consultation availability and schedule a convenient appointment.',
  },
  {
    number: '02',
    title: 'Meet Your Doctor',
    description:
      'Visit Jivantika Diagnostic Clinic and discuss your health concerns, symptoms and medical history with Dr. Swagatika.',
  },
  {
    number: '03',
    title: 'Receive Personalised Guidance',
    description:
      'Get appropriate medical advice, treatment recommendations and follow-up guidance based on your individual healthcare needs.',
  },
];

export const SERVICES_LIST = [
  {
    index: '01.',
    eyebrow: 'MATERNAL MONITORING & SUPPORT',
    title: 'Pregnancy & Antenatal Care',
    description:
      'Support and medical guidance throughout pregnancy, including antenatal consultations and maternal health monitoring.',
    highlights: [
      'Regular antenatal consultation check-ins',
      'Maternal health monitoring and guidance',
      'Supportive care tailored to each trimester',
    ],
    cta: 'Book a Consultation',
    image: IMAGES.servicePregnancy,
    imageAlt: 'Expectant mother in a warm, sunlit modern maternity lounge',
  },
  {
    index: '02.',
    eyebrow: 'THE JOURNEY OF MOTHERHOOD',
    title: 'Obstetrics & Maternity Care',
    description:
      'Professional guidance and care throughout the journey of motherhood.',
    highlights: [
      'Individualised obstetric consultations',
      'Clear communication for expectant families',
      'Thoughtful follow-up and continuity of care',
    ],
    cta: 'Explore Care',
    image: IMAGES.serviceObstetrics,
    imageAlt: 'Serene private maternity consultation room at the clinic',
  },
  {
    index: '03.',
    eyebrow: 'REPRODUCTIVE WELLBEING',
    title: 'Gynaecological Consultations',
    description:
      "Medical consultations for women's reproductive and gynaecological health concerns.",
    highlights: [
      'Unrushed, private clinical discussions',
      'Assessment of general gynaecological concerns',
      'Respectful, patient-centred medical advice',
    ],
    cta: 'Book a Consultation',
    image: IMAGES.serviceGynaecology,
    imageAlt: 'Calm private gynaecological consultation desk in natural morning light',
  },
  {
    index: '04.',
    eyebrow: 'ENDOCRINE & CYCLE BALANCE',
    title: 'PCOS & Hormonal Health',
    description:
      'Assessment and guidance for PCOS, menstrual irregularities and related hormonal concerns.',
    highlights: [
      'Guidance for PCOS-related concerns',
      'Evaluation of hormonal health patterns',
      'Practical next steps discussed clearly',
    ],
    cta: 'Explore Care',
    image: IMAGES.serviceHormonal,
    imageAlt: 'Warm sunlit herbal wellness scene representing hormonal balance',
  },
  {
    index: '05.',
    eyebrow: 'CYCLE CARE & COMFORT',
    title: 'Menstrual Health',
    description:
      'Consultations regarding irregular periods, painful menstruation and other menstrual health concerns.',
    highlights: [
      'Support for irregular or painful cycles',
      'Thorough review of menstrual history',
      'Compassionate, judgement-free listening',
    ],
    cta: 'Book a Consultation',
    image: IMAGES.serviceMenstrual,
    imageAlt: 'Calm sunlit wellness nook with folded organic cotton towels and chamomile',
  },
  {
    index: '06.',
    eyebrow: 'PROACTIVE WELLNESS',
    title: "Women's Preventive Healthcare",
    description:
      'Routine gynaecological consultations, health assessments and preventive care guidance.',
    highlights: [
      'Routine gynaecological check-up consultations',
      'Preventive women’s healthcare discussions',
      'Support across every stage of womanhood',
    ],
    cta: 'Explore Care',
    image: IMAGES.servicePreventive,
    imageAlt: 'Welcoming sunlit clinic reception and lounge area',
  },
];

export interface ConditionCategory {
  id: string;
  label: string;
  count: string;
  items: string[];
  detail: string;
}

export const CONDITION_CATEGORIES: ConditionCategory[] = [
  {
    id: 'all',
    label: 'All women’s health concerns',
    count: '07',
    items: [
      'Pregnancy-related concerns',
      'Menstrual irregularities',
      'PCOS-related concerns',
      'Hormonal health concerns',
      "Women's reproductive health",
      'General gynaecological concerns',
      "Preventive women's healthcare",
    ],
    detail:
      'Consultations at Jivantika Diagnostic Clinic give you time to ask questions openly, understand your symptoms, and receive individualised medical guidance.',
  },
  {
    id: 'pregnancy',
    label: 'Pregnancy & maternity',
    count: '03',
    items: [
      'Pregnancy-related concerns',
      "Women's reproductive health",
      "Preventive women's healthcare",
    ],
    detail:
      'Antenatal consultations and maternal monitoring focused on keeping expectant mothers informed, supported, and comfortable throughout pregnancy.',
  },
  {
    id: 'gynaecology',
    label: 'Hormonal & gynaecological',
    count: '04',
    items: [
      'Menstrual irregularities',
      'PCOS-related concerns',
      'Hormonal health concerns',
      'General gynaecological concerns',
    ],
    detail:
      'Thoughtful evaluation for menstrual patterns, PCOS, and everyday gynaecological concerns in a respectful, welcoming clinical environment.',
  },
];

export const DOCTOR_TRUST_POINTS = [
  {
    title: 'Personalised patient consultations',
    description: 'Every visit takes time to listen carefully to your concerns and medical history.',
  },
  {
    title: "Compassionate women's healthcare",
    description: 'Respectful, reassuring care tailored to support women across every chapter of life.',
  },
  {
    title: 'Pregnancy and gynaecological care',
    description: 'Obstetric, antenatal, hormonal, and general gynaecological consultations.',
  },
  {
    title: 'Patient-focused communication',
    description: 'Clear explanations of available healthcare options so you feel confident and informed.',
  },
  {
    title: 'A welcoming clinical environment',
    description: 'LGBTQ+ friendly and women-owned clinic in Purbalok, Mukundapur, Kolkata.',
  },
];

export const SUPPLIED_REVIEWS = [
  {
    initials: 'GS',
    quote: "Overall satisfactory experience, all staff's behaviour also good.",
    author: 'Verified Patient Feedback',
    context: 'Jivantika Diagnostic Clinic · Google Review',
  },
  {
    initials: 'GK',
    quote: 'Good service, best gyno Dr in Kolkata location.',
    author: 'Verified Patient Feedback',
    context: 'Obstetrics & Gynaecology · Google Review',
  },
  {
    initials: 'KR',
    quote: 'As a doctor, she is extremely knowledgeable, experienced and reassuring.',
    author: 'Verified Patient Feedback',
    context: 'Patient Consultation · Google Review',
  },
  {
    initials: 'GD',
    quote:
      "Dr. Swagatika guided me in delivery with high GDM.....& My baby weight is 4.2 for her guide..best doctor❤️🥰..I'm satisfied.....",
    author: 'Verified Motherhood Story',
    context: 'Pregnancy & Delivery Care · Google Review',
  },
];

export const NAMED_REVIEW_REFERENCES = [
  {
    name: 'Srabasti Mallick',
    highlight: 'A Wonderful Pregnancy Journey with Dr. Swagatika Panda Pal and Jivantika Diagnostic Centre.',
  },
  {
    name: 'Rahul Gupta',
    highlight: 'Excellent Doctor & Wonderful Experience.',
  },
  {
    name: 'Aayati Panda',
    highlight: 'Exceptional Care.',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'How can I book an appointment with Dr. Swagatika Panda Pal?',
    answer:
      'You can contact Jivantika Diagnostic Clinic directly at +91 72058 66267 to enquire about available consultation slots.',
  },
  {
    question: 'Where is Jivantika Diagnostic Clinic located?',
    answer:
      'The clinic is located at 49 Purba Diganta, 23A, opposite Maa Trinayani Restaurant, Purbalok, Mukundapur, Kolkata, West Bengal 700099.',
  },
  {
    question: 'What healthcare services are available?',
    answer:
      'Consultations cover obstetrics, pregnancy-related care and gynaecological health concerns. Contact the clinic to confirm specific services.',
  },
  {
    question: 'Can I visit for pregnancy-related consultations?',
    answer:
      'Yes, the clinic provides obstetric and pregnancy-related consultations. Please contact the clinic to arrange an appointment.',
  },
  {
    question: "What are the clinic's consultation hours?",
    answer:
      'The available listing indicates the clinic closes at 8 PM. Please contact the clinic to confirm the daily schedule.',
  },
  {
    question: 'How can I reach the clinic?',
    answer:
      'You can call the clinic or use the Get Directions button to access its Google Maps location.',
  },
];
