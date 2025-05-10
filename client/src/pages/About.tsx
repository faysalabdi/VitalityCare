import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PuzzlePiece from "@/components/shared/PuzzlePiece";
import { team } from "@/data/team";
import TeamMember from "@/components/team/TeamMember";
import { UserCircle, Home, Users, Heart, Award, Compass } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Vitality Community Care</title>
        <meta name="description" content="Learn about Vitality Community Care, our mission, values, and our commitment to providing personalized disability support services." />
        <meta property="og:title" content="About Us | Vitality Community Care" />
        <meta property="og:description" content="Empowering individuals through culturally-responsive, person-centered disability support services." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Background with color sections */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-[hsl(var(--vitality-blue))] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[hsl(var(--vitality-green))] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(var(--vitality-blue))] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">About Vitality Community Care</h1>
            <p className="text-lg mb-8">
              Putting Participants First
            </p>
            
            {/* Decorative elements */}
            <div className="hidden md:block absolute top-10 left-10">
              <PuzzlePiece variant="green" size="sm" className="opacity-20 animate-float" />
            </div>
            <div className="hidden md:block absolute bottom-10 right-10">
              <PuzzlePiece variant="blue" size="sm" className="opacity-20 animate-float-delay" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <div className="rounded-xl overflow-hidden shadow-xl z-10 relative">
                <img 
                  src="https://images.unsplash.com/photo-1590650046871-92c887180603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Vitality team members supporting community" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[hsl(var(--vitality-green-25))] rounded-lg z-0 transform -rotate-6"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[hsl(var(--vitality-blue-25))] rounded-lg z-0 transform rotate-6"></div>
              <PuzzlePiece variant="green" size="sm" className="absolute -top-4 -right-4 opacity-20 animate-float" />
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-[hsl(var(--neutral-dark))] mb-4">What We Do</h2>
              <p className="text-lg mb-6">
                At Vitality Community Care, we are more than just a registered NDIS service provider; we help you in your journey toward a fulfilling, autonomous life. With a presence across Australia's metro areas of Victoria, NSW, Western Australia, South Australia, and Queensland we aim to extend our person-centered, strengths-based support to as many individuals as possible.
              </p>
              <p className="text-lg mb-6">
                Our approach isn't one-size-fits-all. In order to provide support services that are not only efficient but also seamlessly fit into your daily routine, we get to know you, your goals, and your obstacles.
              </p>
              <p className="text-lg mb-6">
                Navigating the complexities of NDIS can often seem overwhelming, so we offer more than care; we offer guidance. Our team is skilled in helping you make sense of the NDIS system, assisting you in defining the outcomes you aim to achieve, and mapping out the steps to get there whilst giving you full choice and control.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start">
                  <div className="mr-4 text-[hsl(var(--vitality-green))]">
                    <Award className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Knowledge</h3>
                    <p className="text-[hsl(var(--neutral-dark))]">Expertise in NDIS and support services to guide you effectively.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-[hsl(var(--vitality-blue))]">
                    <Users className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Experienced</h3>
                    <p className="text-[hsl(var(--neutral-dark))]">Proven track record of delivering quality care across Australia.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-[hsl(var(--vitality-green))]">
                    <Heart className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Compassion</h3>
                    <p className="text-[hsl(var(--neutral-dark))]">Caring deeply about your wellbeing and quality of life.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-[hsl(var(--vitality-blue))]">
                    <Compass className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Supportive</h3>
                    <p className="text-[hsl(var(--neutral-dark))]">Standing by your side every step of your journey.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-[hsl(var(--neutral-light))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-6">Who We Are</h2>
            <p className="text-xl max-w-4xl mx-auto">
              We're Vitality Community Care, your trusted partner in quality home and community care services. Based across all metro cities, we're committed to providing personalized, compassionate care to individuals and families. Our skilled team of certified professionals focuses on improving your well-being and quality of life. We bring healthcare, support, and a touch of home right to your doorstep, making each day brighter and more fulfilling for you and your loved ones.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Purpose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-[hsl(var(--neutral-light))] rounded-xl p-8 relative overflow-hidden shadow-md">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[hsl(var(--vitality-green-25))] rounded-full z-0 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4 text-[hsl(var(--vitality-green))]">Our Mission</h3>
                <p className="text-lg">
                  At Vitality Community Care, our mission extends beyond mere support. We aim to create an enriching atmosphere that empowers our participants, encouraging them to step out of their comfort zones and explore their untapped potential. We make it our responsibility to not just meet the essential needs but also to inspire a spirit of curiosity and self-discovery in each individual we serve.
                </p>
              </div>
            </div>

            <div className="bg-[hsl(var(--neutral-light))] rounded-xl p-8 relative overflow-hidden shadow-md">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[hsl(var(--vitality-blue-25))] rounded-full z-0 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4 text-[hsl(var(--vitality-blue))]">Our Vision</h3>
                <p className="text-lg">
                  Our vision is to provide an experience to our participants where disability is not an impediment but simply another facet of community diversity. In this society, barriers to community engagement, workforce participation, and leisure activities don't exist. We are tirelessly working to make this vision a reality, ensuring that people with disabilities across Australia have equitable opportunities to excel and reach their goals, just like any other community member.
                </p>
              </div>
            </div>

            <div className="bg-[hsl(var(--neutral-light))] rounded-xl p-8 relative overflow-hidden shadow-md">
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[hsl(var(--vitality-green-25))] rounded-full z-0 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4 text-[hsl(var(--vitality-green))]">Our Purpose</h3>
                <p className="text-lg">
                  Vitality Community Care aims to provide people with the resources they need to develop their ability and actively participate in their communities, our person-centered approach aims to improve the everyday lives of those it serves. Whether we work in Victoria, NSW, Western Australia, or South Australia, our goal is always the same: to give our participants the opportunity and assistance they need to live happy, meaningful lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex mb-6">
              <div className="flex items-center justify-center p-3 rounded-lg bg-gradient-to-r from-[hsl(var(--vitality-blue))] to-[hsl(var(--vitality-green))] text-white">
                <UserCircle size={24} />
              </div>
            </div>
            <h2 className="text-3xl font-semibold text-[hsl(var(--neutral-dark))] mb-4">Our Care Team</h2>
            <p className="text-lg text-[hsl(var(--neutral-dark))] max-w-3xl mx-auto">
              Meet our dedicated professionals committed to providing personalized care and support.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {team.filter(member => member.isLeadership).map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>

          <div className="text-center mb-12 mt-16">
            <h3 className="text-2xl font-semibold text-[hsl(var(--neutral-dark))] mb-4">Support Practitioners</h3>
            <p className="text-lg max-w-3xl mx-auto">
              Our practitioners provide direct support and specialized services to our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.filter(member => !member.isLeadership).map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[hsl(var(--neutral-light))]">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[hsl(var(--vitality-green))] to-[hsl(var(--vitality-blue))] rounded-xl p-12 text-white text-center relative overflow-hidden">
            <PuzzlePiece variant="mixed" size="xl" className="absolute -top-12 -left-12 opacity-10" />
            <PuzzlePiece variant="mixed" size="xl" className="absolute -bottom-12 -right-12 opacity-10" />
            
            <h2 className="text-3xl font-semibold mb-4 relative z-10">Get Your Custom Care Plan Today</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto relative z-10">
              Contact our team today to discover how our person-centered support can make a difference in your life or the life of your loved one.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
              <Button asChild size="lg" className="bg-white text-[hsl(var(--vitality-green))] hover:bg-opacity-90 hover:text-[hsl(var(--vitality-green))] rounded-full">
                <a href="/contact">Contact Us Today</a>
              </Button>
              <Button asChild size="lg" className="bg-[hsl(var(--vitality-blue-50))] bg-opacity-25 text-white hover:bg-opacity-40 rounded-full border border-white">
                <a href="/referral">Make a Referral</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
