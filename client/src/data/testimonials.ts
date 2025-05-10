export interface TestimonialType {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
  color: "green" | "blue";
}

export const testimonials: TestimonialType[] = [
  {
    id: "testimonial-1",
    name: "Rebecca M.",
    role: "Daily Living Support Client",
    quote: "Vitality's support has transformed my daily life. Their personalized approach and caring team have helped me gain confidence and independence I never thought possible.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    color: "green"
  },
  {
    id: "testimonial-2",
    name: "James T.",
    role: "Transitional Care Client",
    quote: "The transition from hospital to home was seamless thanks to Vitality. Their team provided the perfect blend of professional care and emotional support during a challenging time.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    color: "blue"
  },
  {
    id: "testimonial-3",
    name: "Lisa K.",
    role: "Parent of Community Support Client",
    quote: "My son's confidence has grown tremendously since working with Vitality. Their community participation program has opened doors to new friendships and experiences we never thought possible.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    color: "green"
  }
];
