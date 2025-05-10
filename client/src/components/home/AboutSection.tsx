import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import PuzzlePiece from "@/components/shared/PuzzlePiece";
import { Users, CheckCircle, Info } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl z-10 relative">
                <img 
                  src="https://images.unsplash.com/photo-1590650046871-92c887180603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Vitality team members supporting community" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[hsl(var(--vitality-green-25))] rounded-lg z-0 transform -rotate-6"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[hsl(var(--vitality-blue-25))] rounded-lg z-0 transform rotate-6"></div>
              <PuzzlePiece 
                className="absolute -top-4 -right-4 w-20 h-20 bg-[hsl(var(--vitality-green))] opacity-20 animate-float" 
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex mb-6">
              <div className="flex items-center justify-center p-3 rounded-lg bg-gradient-to-r from-[hsl(var(--vitality-green))] to-[hsl(var(--vitality-blue))] text-white">
                <Info size={24} />
              </div>
            </div>
            <h2 className="text-3xl font-semibold text-[hsl(var(--neutral-dark))] mb-4">The Vitality Mission</h2>
            <p className="text-lg text-[hsl(var(--neutral-dark))] mb-6">
              Vitality Community Care is a purpose-driven healthcare and support organization committed to empowering individuals through culturally-responsive, person-centered services.
            </p>
            <p className="text-lg text-[hsl(var(--neutral-dark))] mb-6">
              Rooted in trust, respect, and community connection, Vitality stands apart by delivering consistent, high-quality care that nurtures dignity and fosters independence. Our brand reflects a warm, modern, and human-centered approach designed to resonate with diverse communities and support our vision of building a more inclusive and caring future.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-lg bg-[hsl(var(--vitality-green-10))] flex items-center justify-center text-[hsl(var(--vitality-green))]">
                    <Users size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Community Based</h3>
                  <p className="text-[hsl(var(--neutral-dark))]">Providing localized support with practitioners who understand your community.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-lg bg-[hsl(var(--vitality-blue-10))] flex items-center justify-center text-[hsl(var(--vitality-blue))]">
                    <CheckCircle size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Years of Experience</h3>
                  <p className="text-[hsl(var(--neutral-dark))]">Our team brings decades of dedicated service in disability and healthcare support.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button asChild className="rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))]">
                <Link href="/about">More About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
