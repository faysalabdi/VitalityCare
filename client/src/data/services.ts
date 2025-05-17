export interface ServiceType {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  color: "green" | "blue";
  image: string;
  detailImage?: string;
  features: string[];
  quote?: string;
  icon: string;
}

export const services: ServiceType[] = [
  {
    id: "daily-living",
    title: "Daily Living Support",
    slug: "daily-living",
    shortDescription: "Assistance with daily tasks, building independence and life skills development.",
    description: "Our Daily Living Support service helps individuals develop essential life skills and maintain independence. We provide personalized assistance with everyday tasks, from meal preparation to household management, all tailored to your unique needs and preferences to empower your life.",
    color: "green",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    detailImage: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [
      "Meal planning and preparation assistance",
      "Household management skills development",
      "Shopping and community access support",
      "Personal organization and planning skills",
      "Budgeting and financial management assistance",
      "Technology use and digital literacy support"
    ],
    quote: "The daily living support has transformed my independence. I've learned skills I never thought possible with staff who truly care about my progress.",
    icon: "<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />"
  },
  {
    id: "personal-care",
    title: "Personal Care",
    slug: "personal-care",
    shortDescription: "Dignified assistance with personal hygiene, dressing, and daily health routines.",
    description: "Our Personal Care service provides dignified, respectful support with personal hygiene, dressing, and daily health routines. Our trained support workers understand the importance of privacy and personal preferences while delivering professional care tailored to your individual needs.",
    color: "blue",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    features: [
      "Assistance with personal hygiene routines",
      "Support with dressing and grooming",
      "Medication reminders and monitoring",
      "Mobility support and transfers",
      "Continence management",
      "Health condition monitoring"
    ],
    quote: "The personal care team at Vitality treats me with such dignity and respect. They've made what could be uncomfortable situations feel completely natural.",
    icon: "<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />"
  },
  {
    id: "community-participation",
    title: "Community Participation",
    slug: "community-participation",
    shortDescription: "Support to engage in social activities and build meaningful community connections.",
    description: "Our Community Participation service helps individuals connect with their local communities, develop social skills, and engage in meaningful activities. We support participation in social events, recreational activities, and community groups based on your interests to foster genuine community inclusion.",
    color: "green",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    detailImage: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [
      "Support to attend community events and activities",
      "Assistance developing and maintaining social connections",
      "Transportation and mobility support in the community",
      "Skill building for social interaction and communication",
      "Support to engage in sports, arts, and recreational activities",
      "Help to identify and connect with community groups matching your interests"
    ],
    quote: "Community participation support has opened up a whole new world for me. I've made friends and discovered activities I love with the perfect amount of support.",
    icon: "<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />"
  },
  {
    id: "therapy",
    title: "Therapy Services",
    slug: "therapy",
    shortDescription: "Specialized therapeutic interventions to support your health and development goals.",
    description: "Our Therapy Services provide specialized interventions to help you achieve your health, wellbeing, and developmental goals. Our qualified therapists work collaboratively with you to design personalized therapy plans that address your specific needs and aspirations.",
    color: "blue",
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    detailImage: "https://images.unsplash.com/photo-1576669801775-ff43c5ab079d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [
      "Occupational therapy for daily living skills",
      "Speech therapy for communication development",
      "Physiotherapy for mobility and physical function",
      "Behavioral therapy for positive behavior support",
      "Group therapy sessions for social skills",
      "In-home and community-based therapy options"
    ],
    quote: "The therapy team at Vitality helped me achieve goals I didn't think were possible. They're patient, encouraging, and incredibly skilled at what they do.",
    icon: "<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />"
  },
  {
    id: "support-coordination",
    title: "Support Coordination",
    slug: "support-coordination",
    shortDescription: "Expert guidance to navigate the NDIS and connect with the right service providers.",
    description: "Our Support Coordination service helps you navigate the NDIS and maximize your plan. We connect you with the best service providers, monitor your budget, and ensure your supports are working effectively to help you achieve your goals and get the most from your NDIS funding.",
    color: "green",
    image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    features: [
      "NDIS plan understanding and implementation",
      "Service provider research and connection",
      "Budget tracking and management",
      "Regular plan reviews and adjustments",
      "Crisis management and troubleshooting",
      "Advocacy and liaison with the NDIA"
    ],
    quote: "Having a support coordinator made all the difference in understanding and using my NDIS plan effectively. They found services I didn't even know existed!",
    icon: "<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' />"
  },
  {
    id: "supported-independent-living",
    title: "Supported Independent Living",
    slug: "supported-independent-living",
    shortDescription: "Assistance to live independently in your own home with the right level of support.",
    description: "Our Supported Independent Living (SIL) service provides personalized support for individuals who want to live independently in their own home. We offer varying levels of support based on your needs, from a few hours a day to 24/7 care, ensuring you have the right balance of independence and assistance.",
    color: "blue",
    image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    detailImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [
      "Personalized support plans tailored to individual needs",
      "Assistance with household tasks and daily living activities",
      "Medication management and health support",
      "Support to develop independent living skills",
      "Help with social engagement and community access",
      "24/7 support options available for those who need it"
    ],
    quote: "The SIL program has completely changed my life. I have my own space and independence, but also the support I need exactly when I need it.",
    icon: "<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />"
  },
  {
    id: "transport",
    title: "Transport",
    slug: "transport",
    shortDescription: "Reliable transportation services to help you access the community and appointments.",
    description: "Our NDIS Transport service empowers your mobility needs with reliable and accessible transportation solutions. We help you navigate your community, attend appointments, and participate in activities with dependable transport options tailored to your specific requirements.",
    color: "green",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    detailImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [
      "Transportation to medical appointments",
      "Access to community activities and events",
      "Shopping and errand assistance",
      "Wheelchair accessible vehicles where needed",
      "Reliable and punctual service",
      "Professional, patient, and friendly drivers"
    ],
    quote: "The transport service has been a game-changer for me. I can now get to my appointments and activities without stress or worry.",
    icon: "<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' />"
  },
  {
    id: "cleaning",
    title: "Cleaning",
    slug: "cleaning",
    shortDescription: "Professional cleaning services to maintain a healthy and comfortable living environment.",
    description: "Our NDIS Cleaning service delivers unparalleled excellence in maintaining a clean, hygienic, and organized living space. Our dedicated team ensures your home environment supports your wellbeing through thorough and personalized cleaning services.",
    color: "blue",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    detailImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [
      "Regular household cleaning",
      "Deep cleaning services",
      "Kitchen and bathroom sanitization",
      "Laundry and ironing assistance",
      "Organization and decluttering help",
      "Specialized cleaning for specific health requirements"
    ],
    quote: "The cleaning team understands my specific needs and always leaves my home spotless. It's made such a difference to my daily life and wellbeing.",
    icon: "<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />"
  },
  {
    id: "early-childhood",
    title: "Early Childhood",
    slug: "early-childhood",
    shortDescription: "Specialized support services for young children to promote development and wellbeing.",
    description: "Our Early Childhood services focus on nurturing development during these critical formative years. We provide support, intervention, and education that helps children build essential skills and reach important developmental milestones in a nurturing environment.",
    color: "green",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    detailImage: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [
      "Early intervention programs",
      "Developmental assessments and monitoring",
      "Communication and language development",
      "Social skills and play-based learning",
      "Family support and education",
      "School readiness preparation"
    ],
    quote: "The early childhood program has been transformative for our family. The progress we've seen in our child's development has exceeded all our expectations.",
    icon: "<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />"
  },
  {
    id: "home-care-package",
    title: "Home Care Package",
    slug: "home-care-package",
    shortDescription: "Government-funded support to help seniors remain independent in their own home.",
    description: "Our Home Care Package (HCP) services provide government-funded support to help you remain independent in your own home. We work with you to make the most of your funding, delivering personalized care that enhances your quality of life and addresses your specific needs.",
    color: "blue",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    detailImage: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [
      "Personal care assistance",
      "Household cleaning and maintenance",
      "Meal preparation and nutrition",
      "Social support and companionship",
      "Transportation services",
      "Medication management"
    ],
    quote: "The Home Care Package has allowed me to stay in my own home with dignity. The support I receive is personalized and professional.",
    icon: "<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />"
  },
  {
    id: "chsp",
    title: "Commonwealth Home Support Programme",
    slug: "chsp",
    shortDescription: "Entry-level support services for older Australians who need assistance to continue living independently.",
    description: "The Commonwealth Home Support Programme (CHSP) offers streamlined care for elders through entry-level support services designed to help older Australians continue living independently at home and participate in their community, with access to basic support tailored to individual needs.",
    color: "green",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    detailImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [
      "Domestic assistance",
      "Personal care",
      "Home maintenance",
      "Home modifications",
      "Social support",
      "Transport assistance"
    ],
    quote: "CHSP services have helped me maintain my independence. The team is always reliable and a pleasure to have in my home.",
    icon: "<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />"
  },
  {
    id: "private-care",
    title: "Private Care",
    slug: "private-care",
    shortDescription: "Flexible, pay-as-you-go support tailored to your exact requirements without eligibility restrictions.",
    description: "For those who don't qualify for government funding or need additional services beyond what's covered, our private care options provide flexible, pay-as-you-go support tailored to your exact requirements with no eligibility criteria or waiting periods.",
    color: "blue",
    image: "https://images.unsplash.com/photo-1544126592-807ade215a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    detailImage: "https://images.unsplash.com/photo-1544126592-807ade215a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    features: [
      "Fully customizable care plans",
      "No eligibility requirements",
      "Flexible scheduling options",
      "No waiting periods",
      "Transparent pricing",
      "Short or long-term options"
    ],
    quote: "The private care options give me exactly what I need, when I need it. The flexibility is perfect for my changing schedule.",
    icon: "<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' />"
  }
];
