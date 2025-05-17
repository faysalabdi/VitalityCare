import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PuzzlePiece from "@/components/shared/PuzzlePiece";
import { team } from "@/data/team";
import TeamMember from "@/components/team/TeamMember";
import { UserCircle, Home, Users, Heart, Award, Compass } from "lucide-react";
import { Link } from "wouter";

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
      <section className="relative bg-gradient-to-br from-[hsl(var(--vitality-green))] to-[hsl(var(--vitality-blue-75))] text-white pt-20 pb-28 md:pb-32 lg:pb-36 overflow-hidden">
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3N2Zz4=')] opacity-80 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 text-white">
                <Users className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">About Vitality Community Care</h1>
            <p className="text-xl mb-8 opacity-90">
              Putting Participants First
            </p>
            
            {/* Decorative elements */}
            <PuzzlePiece variant="green" size="lg" className="absolute -top-10 -right-20 opacity-20 animate-rotate" />
            <PuzzlePiece variant="green" size="md" className="absolute -bottom-8 -left-16 opacity-20 animate-rotate-reverse" />
          </motion.div>
        </div>

        {/* Wave SVG divider at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
          <svg 
            viewBox="0 0 1200 135" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="relative block w-full"
            preserveAspectRatio="none"
            style={{ height: '200px', width: '100%' }}
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" 
              fill="white"
            ></path>
          </svg>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative bg-white text-[hsl(var(--neutral-dark))] -mt-16 pt-28 md:pt-32 lg:pt-36 pb-20 md:pb-24 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
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
              <PuzzlePiece variant="green" size="md" className="absolute -top-4 -right-4 opacity-80 animate-float" />
            </div>
            
            <div className="lg:w-1/2">
              <span className="text-[hsl(var(--vitality-blue))] font-medium uppercase tracking-wider">OUR APPROACH</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-[hsl(var(--neutral-dark))] mt-2 mb-6">What We Do</h2>
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
      <section className="relative bg-[hsl(var(--vitality-blue-10))] text-[hsl(var(--neutral-dark))] -mt-16 pt-28 md:pt-32 lg:pt-36 pb-20 md:pb-24 lg:pb-28 overflow-hidden">
        {/* Top wave SVG divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden z-0 transform rotate-180">
          <svg 
            viewBox="0 0 1200 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="relative block w-full"
            preserveAspectRatio="none"
            style={{ height: '200px', width: '100%', transform: 'rotateY(180deg)' }}
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" 
              fill="white"
            ></path>
          </svg>
        </div>

        {/* Dot pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] opacity-50 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="text-[hsl(var(--vitality-blue))] font-medium uppercase tracking-wider">WHO WE ARE</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2 mb-6">Our Story</h2>
            <p className="text-xl max-w-4xl mx-auto">
              We're Vitality Community Care, your trusted partner in quality home and community care services. Based across all metro cities, we're committed to providing personalized, compassionate care to individuals and families. Our skilled team of certified professionals focuses on improving your well-being and quality of life. We bring healthcare, support, and a touch of home right to your doorstep, making each day brighter and more fulfilling for you and your loved ones.
            </p>
          </div>
        </div>

        {/* Wave SVG divider at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
          <svg 
            viewBox="0 0 1200 160" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="relative block w-full"
            preserveAspectRatio="none"
            style={{ height: '200px', width: '100%' }}
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" 
              fill="white"
            ></path>
          </svg>
        </div>
      </section>

      {/* Mission, Vision, Purpose Section */}
      <section className="relative bg-white text-[hsl(var(--neutral-dark))] -mt-16 pt-28 md:pt-32 lg:pt-36 pb-20 md:pb-24 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[hsl(var(--vitality-green))] font-medium uppercase tracking-wider">OUR FOUNDATIONS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">What Drives Us</h2>
            <p className="text-lg max-w-3xl mx-auto opacity-80">
              Our mission, vision, and purpose form the foundation of everything we do at Vitality Community Care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-[hsl(var(--vitality-green-10))] rounded-xl p-8 relative overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[hsl(var(--vitality-green-25))] rounded-full z-0 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4 text-[hsl(var(--vitality-green))]">Our Mission</h3>
                <p className="text-lg">
                  At Vitality Community Care, our mission extends beyond mere support. We aim to create an enriching atmosphere that empowers our participants, encouraging them to step out of their comfort zones and explore their untapped potential. We make it our responsibility to not just meet the essential needs but also to inspire a spirit of curiosity and self-discovery in each individual we serve.
                </p>
              </div>
            </div>

            <div className="bg-[hsl(var(--vitality-blue-10))] rounded-xl p-8 relative overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[hsl(var(--vitality-blue-25))] rounded-full z-0 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4 text-[hsl(var(--vitality-blue))]">Our Vision</h3>
                <p className="text-lg">
                  Our vision is to provide an experience to our participants where disability is not an impediment but simply another facet of community diversity. In this society, barriers to community engagement, workforce participation, and leisure activities don't exist. We are tirelessly working to make this vision a reality, ensuring that people with disabilities across Australia have equitable opportunities to excel and reach their goals, just like any other community member.
                </p>
              </div>
            </div>

            <div className="bg-[hsl(var(--vitality-green-10))] rounded-xl p-8 relative overflow-hidden shadow-md hover:shadow-lg transition-shadow">
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

        {/* Wave SVG divider at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
          <svg 
            viewBox="0 0 1200 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="relative block w-full"
            preserveAspectRatio="none"
            style={{ height: '200px', width: '100%' }}
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" 
              fill="white"
            ></path>
          </svg>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-[hsl(var(--vitality-blue))] to-[hsl(var(--vitality-blue-75))] text-white -mt-16 pt-36 md:pt-40 lg:pt-44 pb-20 md:pb-24 lg:pb-28 overflow-hidden">
        {/* Top curved corners with wave SVG */}
        <div className="absolute top-0 left-0 w-full overflow-hidden z-0">
          <svg 
            viewBox="0 0 1200 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="relative block w-full"
            preserveAspectRatio="none"
            style={{ height: '60px', width: '100%' }}
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              fill="white"
              opacity="0.25"
            ></path>
            <path 
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              fill="white"
              opacity="0.5"
            ></path>
            <path 
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
              fill="white"
              opacity="0.75"
            ></path>
          </svg>
        </div>

        {/* Dot pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3N2Zz4=')] opacity-80 z-0"></div>
        
        {/* Decorative puzzle pieces */}
        <PuzzlePiece variant="green" size="xl" className="absolute -top-12 -left-12 opacity-[0.07] animate-float-slow" />
        <PuzzlePiece variant="green" size="lg" className="absolute bottom-20 right-20 opacity-[0.07] animate-float" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Get Your Custom <span className="text-[hsl(var(--vitality-green))]">Care Plan</span> Today</h2>
                <p className="text-lg md:text-xl mb-10 opacity-90 max-w-3xl mx-auto">
                  Contact our team today to discover how our person-centered support can make a difference in your life or the life of your loved one.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))] text-white px-8 shadow-lg">
                    <Link href="/contact" className="flex items-center">
                      Contact Us
                      <span className="ml-2">&rarr;</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-white text-black hover:bg-white hover:text-[hsl(var(--vitality-blue))] px-8">
                    <Link href="/referral" className="flex items-center">
                      Make a Referral
                      <span className="ml-2">&rarr;</span>
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
