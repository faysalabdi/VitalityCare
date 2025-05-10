export interface BlogPostType {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  categoryColor: "green" | "blue";
  excerpt: string;
  image: string;
  content?: string;
}

export const blogPosts: BlogPostType[] = [
  {
    id: "blog-1",
    title: "Person-Centered Care: Building Support Around Individual Needs",
    slug: "person-centered-care",
    date: "May 15, 2023",
    category: "Support",
    categoryColor: "green",
    excerpt: "Discover how tailoring support to individual preferences creates more effective outcomes and greater satisfaction.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "blog-2",
    title: "Building Bridges: The Power of Community Connection",
    slug: "community-connection",
    date: "April 28, 2023",
    category: "Community",
    categoryColor: "blue",
    excerpt: "Explore how meaningful community engagement enhances wellbeing and creates lasting support networks.",
    image: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "blog-3",
    title: "Navigating NDIS: Making the Most of Your Support Plan",
    slug: "navigating-ndis",
    date: "April 10, 2023",
    category: "NDIS",
    categoryColor: "green",
    excerpt: "Practical advice for understanding and maximizing your NDIS funding to achieve your personal goals.",
    image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "blog-4",
    title: "The Importance of Cultural Responsiveness in Disability Support",
    slug: "cultural-responsiveness",
    date: "March 22, 2023",
    category: "Inclusion",
    categoryColor: "blue",
    excerpt: "How understanding cultural backgrounds enhances the quality and effectiveness of support services.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d4d3cce33a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "blog-5",
    title: "Technology and Disability: Tools for Greater Independence",
    slug: "technology-and-disability",
    date: "March 5, 2023",
    category: "Technology",
    categoryColor: "green",
    excerpt: "Exploring the latest technological innovations helping people with disabilities live more independently.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "blog-6",
    title: "Supporting Mental Health in the Disability Community",
    slug: "mental-health-support",
    date: "February 18, 2023",
    category: "Wellbeing",
    categoryColor: "blue",
    excerpt: "Strategies for promoting mental wellbeing and providing holistic support for people with disabilities.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  }
];
