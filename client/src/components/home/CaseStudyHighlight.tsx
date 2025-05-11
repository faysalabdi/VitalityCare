import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

const CaseStudyHighlight = () => {
  return (
    <section 
      className="relative bg-[hsl(var(--vitality-blue-10))] text-[hsl(var(--neutral-dark))] -mt-20 md:-mt-28 lg:-mt-32 pt-28 md:pt-36 lg:pt-40 pb-32 md:pb-40 lg:pb-48 overflow-visible"
      style={{
        clipPath: 'ellipse(100% 70% at 50% 30%)', // Curve for its bottom edge
      }}
    >
      {/* Dot pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] opacity-50 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-8 md:mb-0 md:pr-12 text-center md:text-left"
          >
            <span className="text-[hsl(var(--vitality-blue))] font-medium uppercase tracking-wider">SUCCESS STORIES</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">From Hospital to Home, <span className="text-[hsl(var(--vitality-blue))]">Seamlessly</span>.</h2>
            <h3 className="text-xl mb-6 opacity-80">How Vitality bridges the gap in transitional care.</h3>
            <p className="mb-8 opacity-80">
              Discharge doesn't have to mean disruption. We partner with hospitals and health professionals to ensure vulnerable individuals receive timely, high-quality support when they leave medical care.
            </p>
            <Button asChild size="lg" className="rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))] text-white px-8 shadow-lg">
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
                className="rounded-xl shadow-lg w-full h-auto border-4 border-white"
              />
              {/* Optional: Decorative element like DSC if desired */}
              {/* <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[hsl(var(--vitality-green-25))] rounded-lg z-0 transform rotate-6"></div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHighlight;
