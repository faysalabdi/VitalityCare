export interface FAQType {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQType[] = [
  {
    id: 1,
    question: "Where does Vitality provide its services?",
    answer: "We provide services across various communities, with a focus on in-home support. Our team matches clients with local practitioners whenever possible to ensure culturally-appropriate and community-connected care."
  },
  {
    id: 2,
    question: "How can I begin my journey with Vitality?",
    answer: "Starting with Vitality is simple. You can visit our Get Started page to fill out a form, call our friendly team, or send us an email. We'll guide you through the process and match you with the right support for your needs."
  },
  {
    id: 3,
    question: "What if I don't have an NDIS plan?",
    answer: "We welcome both NDIS participants and self-funded clients. Our team can discuss various funding options and tailor our services to your situation, regardless of how your support is funded."
  },
  {
    id: 4,
    question: "Will my practitioner come to my location?",
    answer: "Yes! Vitality offers a genuine \"we come to you\" model. Our practitioners provide support at your preferred location, whether that's at home, school, work, or in the community, ensuring comfort and convenience."
  },
  {
    id: 5,
    question: "How do you match clients with support practitioners?",
    answer: "We carefully consider factors like expertise, location, cultural background, and personal preferences when matching clients with practitioners. We believe the right match is crucial for effective support, and we'll work with you to find the perfect fit."
  },
  {
    id: 6,
    question: "Can I change my support practitioner if needed?",
    answer: "Absolutely. We understand that sometimes the initial match may not be perfect. If you'd like to try working with a different practitioner, simply let us know and we'll arrange an alternative."
  }
];
