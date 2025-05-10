import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import PuzzlePiece from "@/components/shared/PuzzlePiece";
import { Users, CheckCircle, Heart } from "lucide-react";

// Import relationship image
import relationshipImage from "@/assets/relationship.png";

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
                  src={relationshipImage} 
                  alt="More than a service, a relationship - caregiver helping client with art" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative elements - reduced number for cleaner look */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[hsl(var(--vitality-blue-25))] rounded-lg z-0 transform rotate-6"></div>
              <PuzzlePiece 
                variant="green"
                size="md"
                className="absolute -bottom-6 -left-6 z-10 animate-float-delay opacity-70" 
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
                <Heart size={24} />
              </div>
            </div>
            <h2 className="text-3xl font-semibold text-[hsl(var(--neutral-dark))] mb-4">More Than a Service, a Relationship</h2>
            <p className="text-lg text-[hsl(var(--neutral-dark))] mb-6">
              Why human connection is at the heart of real care. At Vitality Community Care, we believe in creating lasting relationships built on trust, understanding, and genuine compassion.
            </p>
            <p className="text-lg text-[hsl(var(--neutral-dark))] mb-6">
              Our support workers don't just provide assistance; they become trusted allies in your journey. We take the time to match you with specialists who understand your unique needs and preferences, ensuring a meaningful connection that goes beyond standard care.
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
