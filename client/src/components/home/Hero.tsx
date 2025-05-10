import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import PuzzlePiece from "@/components/shared/PuzzlePiece";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-[hsl(var(--vitality-blue-25))] to-[hsl(var(--vitality-green-25))] overflow-hidden">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-[hsl(var(--vitality-blue))] opacity-10"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 z-10 mb-8 md:mb-0"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[hsl(var(--neutral-dark))] leading-tight mb-4">
            Creating Lasting Change With Friendly In-Home Supports
          </h2>
          <p className="text-lg text-[hsl(var(--neutral-dark))] mb-8">
            Vitality Community Care brings effective, personalized support services to diverse communities, empowering individuals through culturally-responsive and person-centered approaches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))]">
              <Link href="/services">Discover Our Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-[hsl(var(--vitality-blue))] text-[hsl(var(--vitality-blue))] hover:bg-[hsl(var(--vitality-blue))] hover:text-white">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Healthcare professional supporting a client" 
              className="w-full h-auto"
            />
          </div>
          
          {/* Decorative puzzle pieces */}
          <PuzzlePiece 
            className="absolute -top-4 -right-4 w-20 h-20 bg-[hsl(var(--vitality-green))] opacity-20 animate-float" 
          />
          <PuzzlePiece 
            className="absolute bottom-8 -left-4 w-12 h-12 bg-[hsl(var(--vitality-blue))] opacity-30 animate-float-delay" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
