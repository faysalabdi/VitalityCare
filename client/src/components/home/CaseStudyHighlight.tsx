import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

const CaseStudyHighlight = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[hsl(var(--vitality-green))] to-[hsl(var(--vitality-blue))] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-8 md:mb-0 md:pr-12"
          >
            <h2 className="text-3xl font-semibold mb-4">From Hospital to Home, Seamlessly.</h2>
            <h3 className="text-xl mb-6">How Vitality bridges the gap in transitional care.</h3>
            <p className="mb-6">
              Discharge doesn't have to mean disruption. We partner with hospitals and health professionals to ensure vulnerable individuals receive timely, high-quality support when they leave medical care.
            </p>
            <Button asChild size="lg" className="bg-white text-[hsl(var(--vitality-green))] hover:bg-opacity-90 hover:text-[hsl(var(--vitality-green))] rounded-full">
              <Link href="/services">View Case Studies</Link>
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500" 
                alt="Hospital to home transition care" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
              
              {/* Puzzle piece decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white opacity-20 rounded-br-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHighlight;
