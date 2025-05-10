import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { team } from "@/data/team";
import TeamMember from "@/components/team/TeamMember";
import { Button } from "@/components/ui/button";
import PuzzlePiece from "@/components/shared/PuzzlePiece";

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Our Team | Vitality Community Care</title>
        <meta name="description" content="Meet our dedicated team of professionals committed to providing personalized disability support services." />
        <meta property="og:title" content="Our Team | Vitality Community Care" />
        <meta property="og:description" content="Meet the caring professionals behind Vitality Community Care's support services." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[hsl(var(--vitality-blue-25))] to-[hsl(var(--vitality-green-25))] py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Our Care Team</h1>
            <p className="text-lg mb-8">
              Meet our dedicated professionals committed to providing personalized care and support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 bg-[hsl(var(--neutral-light))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[hsl(var(--neutral-dark))] mb-4">Leadership Team</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Our leadership team brings decades of experience in disability support and healthcare services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {team.filter(member => member.isLeadership).map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>

          <div className="text-center mb-12 mt-16">
            <h2 className="text-3xl font-semibold text-[hsl(var(--neutral-dark))] mb-4">Support Practitioners</h2>
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

      {/* Join Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Healthcare professionals in a team meeting" 
                  className="w-full h-auto"
                />
              </div>
              <PuzzlePiece variant="green" size="md" className="absolute -top-4 -right-4 opacity-20 animate-float" />
              <PuzzlePiece variant="blue" size="sm" className="absolute bottom-8 -left-4 opacity-30 animate-float-delay" />
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-[hsl(var(--neutral-dark))] mb-4">Work With Us</h2>
              <p className="text-lg mb-6">
                Be part of a team where your skills don't just build careers; they build brighter futures for the people we support.
              </p>
              <p className="text-lg mb-6">
                As a practitioner with Vitality Community Care, you'll receive ultimate flexibility and support, so you can focus on what you do best — making a difference in people's lives.
              </p>
              
              <div className="bg-[hsl(var(--neutral-light))] p-6 rounded-lg mb-8">
                <h3 className="font-medium text-xl mb-3">Current Openings:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[hsl(var(--vitality-green))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Support Coordinator</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[hsl(var(--vitality-green))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Occupational Therapist</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[hsl(var(--vitality-green))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Behavior Support Practitioner</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[hsl(var(--vitality-green))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Community Support Worker</span>
                  </li>
                </ul>
              </div>
              
              <Button asChild className="rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))]">
                <a href="/contact?careers=true">Join Our Team</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
