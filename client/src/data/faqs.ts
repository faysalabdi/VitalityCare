export interface FAQType {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQType[] = [
  {
    id: 1,
    question: "What services does Vitality Community Care offer under the NDIS?",
    answer: "We deliver a full suite of supports, including personal care, community participation, supported independent living (SIL), specialist disability accommodation (SDA), respite, short-term accommodation, allied health, behavioural support, and travel assistance — all tailored to your NDIS goals."
  },
  {
    id: 2,
    question: "How do I know if I'm eligible for NDIS funding?",
    answer: "To be eligible, participants must: • Be under 65, reside in Australia, and hold Australian citizenship or permanent residency, • Have a permanent and significant disability affecting daily life. Vitality can work with you or your LAC to confirm eligibility and guide you through the Access Request process."
  },
  {
    id: 3,
    question: "How is support coordination different from other services?",
    answer: "Support Coordination helps you understand and implement your NDIS Plan — from choosing the right supports to liaising with providers and navigating bookings. It's different from direct services like therapy or SIL because it focuses on helping you make the most of your plan."
  },
  {
    id: 4,
    question: "How do I get supported accommodation with Vitality Community Care?",
    answer: "We can help you explore Supported Independent Living (SIL) and Specialist Disability Accommodation (SDA) options. Our team works with you, your family, and your support coordinator to match you with the right housing, whether that's a shared home, purpose-built SDA, or short-term respite. We'll support you through every step — from referral and assessment to moving in."
  },
  {
    id: 5,
    question: "What's the difference between registered and unregistered providers?",
    answer: "• Registered providers, like Vitality Community Care, meet NDIA quality and safeguarding standards. • Unregistered providers may still deliver services, but they lack NDIA oversight. Your choice depends on how your plan is managed (self-managed, plan-managed, or NDIA-managed)."
  },
  {
    id: 6,
    question: "What can I do if I want to change providers?",
    answer: "Switching providers is your right. We'll ensure the transition is smooth and your supports continue without gaps. Contact us any time — we'll handle the coordination and paperwork with your support coordinator or LAC."
  },
  {
    id: 7,
    question: "How does Vitality Community Care support families and guardians?",
    answer: "We work collaboratively with participants, families, LACs, and support coordinators to ensure planning is clear, support is meaningful, and service delivery is seamless — empowering independence while keeping families informed every step of the way."
  },
  {
    id: 8,
    question: "How do you ensure quality and compliance with NDIS standards?",
    answer: "As a registered NDIS provider, Vitality follows the NDIS Quality and Safeguards Commission guidelines — including regular audits, staff screening, and compliance training — to ensure safety, high standards, and peace of mind for participants."
  }
];
