import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import ContactForm from "@/components/shared/ContactForm";
import { 
  Briefcase, 
  Banknote, 
  Users, 
  Clock, 
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PuzzlePiece from "@/components/shared/PuzzlePiece";

const featureItems = [
  {
    icon: <Banknote className="w-10 h-10 text-[hsl(var(--vitality-green))]" />,
    title: "Competitive Wages",
    description: "We nurture your growth, offering above-award wages for exceptional work."
  },
  {
    icon: <Users className="w-10 h-10 text-[hsl(var(--vitality-blue))]" />,
    title: "A Sense of Belonging",
    description: "Find your place and feel truly welcome in our supportive and inclusive environment."
  },
  {
    icon: <Clock className="w-10 h-10 text-[hsl(var(--vitality-green))]" />,
    title: "Work-Life Balance",
    description: "We don't confine you to the traditional 9-5. Manage your own schedule and find a work-life balance that suits you."
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-[hsl(var(--vitality-blue))]" />,
    title: "Hands-on Training",
    description: "Worry not—our on-the-job training ensures you're well-equipped for your role. Don't hesitate; we've got you covered!"
  }
];

const Career = () => {
  return (
    <>
      <Helmet>
        <title>Career Opportunities | Vitality Community Care</title>
        <meta name="description" content="Join our team at Vitality Community Care. Explore rewarding career opportunities in disability and aged care services." />
        <meta property="og:title" content="Career Opportunities | Vitality Community Care" />
        <meta property="og:description" content="Join our team today. We're looking for passionate individuals to help us deliver quality care services." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[hsl(var(--vitality-green))] to-[hsl(var(--vitality-blue-75))] text-white pt-20 pb-28 md:pb-32 lg:pb-36 overflow-hidden">
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3N2Zz4=')] opacity-80 z-0"></div>
        
        {/* Decorative patterns */}
        <PuzzlePiece variant="blue" size="lg" className="absolute -top-0 -right-0 opacity-20 animate-rotate" />
        <PuzzlePiece variant="blue" size="md" className="absolute -top-0 -left-0 opacity-20 animate-rotate-reverse" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white bg-opacity-20">
                <Briefcase className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">
              Join Our Team Today!
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Build a rewarding career supporting others and making a real difference in your community.
            </p>
          </motion.div>
        </div>
        
        {/* Wave SVG divider at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
          <svg 
            viewBox="0 0 1200 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="relative block w-full"
            preserveAspectRatio="none"
            style={{ height: '120px', width: '100%' }}
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" 
              fill="white"
            ></path>
          </svg>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold text-[hsl(var(--neutral-dark))] mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg">
              At Vitality Community Care, we understand that every member of our team plays a crucial part in helping our clients achieve the lives they desire. Right from the initial stages of our recruitment, we seek more than just industry knowledge and experience; we're on the lookout for genuine warmth. If you are passionate about working in the NDIS space and are experienced or someone who's just gotten their qualification, we would like to work with you. We couldn't be more proud of the individuals who stand as the face of Vitality Community Care each day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-[hsl(var(--neutral-light))] p-6 rounded-xl"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--neutral-dark))]">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 bg-[hsl(var(--neutral-light))]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-[hsl(var(--neutral-dark))] mb-4">
                Submit Your Application Today
              </h2>
              <p className="text-lg">
                Take the first step towards a rewarding career with Vitality Community Care. Fill out the form below and we'll get back to you soon.
              </p>
            </div>
            
            <ContactForm isCareerForm={true} />
          </div>
        </div>
      </section>

      {/* Referral CTA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-[hsl(var(--neutral-light))] p-8 rounded-xl text-center">
            <h3 className="text-xl font-semibold mb-4">Do You Know Someone Who Needs Our Services?</h3>
            <Button asChild className="rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))]">
              <a href="/referral" className="flex items-center gap-2">
                Make a Referral
                <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career; 