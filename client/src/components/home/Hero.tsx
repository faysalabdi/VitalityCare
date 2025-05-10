import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import PuzzlePiece from "@/components/shared/PuzzlePiece";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Blue background section on the left */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-[hsl(var(--vitality-blue))]"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 z-10 mb-8 md:mb-0"
        >
          {/* Hero image with stylized border and decorations */}
          <div className="relative mx-auto md:ml-0 max-w-md">
            <div className="absolute top-0 left-0 w-full h-full bg-[hsl(var(--vitality-blue))] transform -translate-x-6 -translate-y-6 rounded-xl"></div>
            <div className="relative rounded-xl overflow-hidden border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Healthcare professional supporting a client" 
                className="w-full h-auto"
              />
              
              {/* Sun icon overlay */}
              <div className="absolute top-4 right-4">
                <svg viewBox="0 0 36 36" className="w-12 h-12 text-yellow-300">
                  <circle cx="18" cy="18" r="8" fill="currentColor" />
                  <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="4" x2="18" y2="8" />
                    <line x1="18" y1="28" x2="18" y2="32" />
                    <line x1="4" y1="18" x2="8" y2="18" />
                    <line x1="28" y1="18" x2="32" y2="18" />
                    <line x1="7.5" y1="7.5" x2="10.5" y2="10.5" />
                    <line x1="25.5" y1="25.5" x2="28.5" y2="28.5" />
                    <line x1="7.5" y1="28.5" x2="10.5" y2="25.5" />
                    <line x1="25.5" y1="10.5" x2="28.5" y2="7.5" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 md:pl-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[hsl(var(--vitality-blue))] leading-tight mb-2">
            Creating Lasting Change
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[hsl(var(--neutral-dark))] leading-tight mb-4">
            With Friendly In-Home Supports
          </h2>
          <p className="text-lg text-[hsl(var(--neutral-dark))] mb-8">
            Vitality Community Care brings effective Behaviour Support, Occupational Therapy, Speech Therapy and Support Coordination to communities across Australia.
          </p>
          
          <div className="mt-8">
            <Button asChild size="lg" className="rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))] px-8">
              <Link href="/services">DISCOVER OUR SERVICES &rarr;</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom features section with icons */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center">
            <div className="mr-4 text-[hsl(var(--vitality-green))]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <p className="text-base font-medium">We match you with a specialist in your local community</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="mr-4 text-[hsl(var(--vitality-blue))]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div>
              <p className="text-base font-medium">Our therapists come to you at home for ultimate convenience</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="mr-4 text-[hsl(var(--vitality-green))]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="text-base font-medium">We welcome both NDIS participants and self-funded clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
