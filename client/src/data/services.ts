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
    description: "Our Daily Living Support service helps individuals develop essential life skills and maintain independence. We provide personalized assistance with everyday tasks, from meal preparation to household management, all tailored to your unique needs and preferences.",
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
    description: "Our Personal Care service provides dignified, respectful support with personal hygiene, dressing, and daily health routines. Our trained support workers understand the importance of privacy and personal preferences while delivering professional care.",
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
    description: "Our Community Participation service helps individuals connect with their local communities, develop social skills, and engage in meaningful activities. We support participation in social events, recreational activities, and community groups based on your interests.",
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
    shortDescription: "Specialized therapy and intervention to develop skills and enhance quality of life.",
    description: "Our Therapy Services include specialized interventions delivered by qualified professionals. We offer occupational therapy, speech therapy, behavior support, and more, all designed to enhance skills, address challenges, and improve quality of life.",
    color: "blue",
    image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    features: [
      "Occupational therapy for daily living skills",
      "Speech therapy for communication development",
      "Behavior support and positive intervention strategies",
      "Sensory processing assessment and intervention",
      "Motor skills development",
      "Specialized assessments and tailored therapy plans"
    ],
    quote: "The therapy team really understood my needs and developed strategies that work for me. I've seen real progress in areas I've struggled with for years.",
    icon: "<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' />"
  },
  {
    id: "support-coordination",
    title: "Support Coordination",
    slug: "support-coordination",
    shortDescription: "Expert guidance to navigate the NDIS and connect with the right service providers.",
    description: "Our Support Coordination service helps you navigate the NDIS and maximize your plan. We connect you with the best service providers, monitor your budget, and ensure your supports are working effectively to help you achieve your goals.",
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
  }
];
