export interface TeamMemberType {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  profile?: string;
  color: "green" | "blue";
  featured: boolean;
  isLeadership: boolean;
}

export const team: TeamMemberType[] = [
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    role: "Care Coordinator",
    bio: "Sarah specializes in creating personalized care plans that empower clients to achieve their goals.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
    email: "sarah@vitalitycare.com.au",
    profile: "/team#sarah-johnson",
    color: "blue",
    featured: true,
    isLeadership: true
  },
  {
    id: "michael-rodriguez",
    name: "Michael Rodriguez",
    role: "Support Specialist",
    bio: "Michael brings extensive experience in daily living support and community participation programs.",
    image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
    email: "michael@vitalitycare.com.au",
    profile: "/team#michael-rodriguez",
    color: "green",
    featured: true,
    isLeadership: false
  },
  {
    id: "emily-chen",
    name: "Emily Chen",
    role: "Occupational Therapist",
    bio: "Emily specializes in helping clients develop practical skills for independent living and community engagement.",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
    email: "emily@vitalitycare.com.au",
    profile: "/team#emily-chen",
    color: "blue",
    featured: true,
    isLeadership: false
  },
  {
    id: "david-wilson",
    name: "David Wilson",
    role: "Community Support Worker",
    bio: "David focuses on building meaningful connections between clients and their local communities.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
    email: "david@vitalitycare.com.au",
    profile: "/team#david-wilson",
    color: "green",
    featured: true,
    isLeadership: false
  },
  {
    id: "lisa-patel",
    name: "Lisa Patel",
    role: "Executive Director",
    bio: "With over 15 years in disability services, Lisa leads Vitality with a passion for person-centered care.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
    email: "lisa@vitalitycare.com.au",
    profile: "/team#lisa-patel",
    color: "blue",
    featured: false,
    isLeadership: true
  },
  {
    id: "james-nguyen",
    name: "James Nguyen",
    role: "Clinical Services Manager",
    bio: "James oversees our therapeutic services, ensuring high-quality, evidence-based support for all clients.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
    email: "james@vitalitycare.com.au",
    profile: "/team#james-nguyen",
    color: "green",
    featured: false,
    isLeadership: true
  },
  {
    id: "sophia-martinez",
    name: "Sophia Martinez",
    role: "Speech Therapist",
    bio: "Sophia is passionate about helping clients overcome communication barriers to express themselves effectively.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500",
    email: "sophia@vitalitycare.com.au",
    profile: "/team#sophia-martinez",
    color: "blue",
    featured: false,
    isLeadership: false
  }
];
