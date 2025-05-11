import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import PuzzlePiece from "@/components/shared/PuzzlePiece";
import { Phone } from "lucide-react";

const CTA = () => {
  return (
    <section 
      id="get-started" 
      className="relative bg-[hsl(var(--vitality-blue))] text-white -mt-20 md:-mt-28 lg:-mt-32 pt-28 md:pt-36 lg:pt-40 pb-20 md:pb-28 lg:pb-32 overflow-hidden"
    >
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3N2Zz4=')] opacity-80 z-0"></div>
      
      {/* Decorative puzzle pieces - adjusted opacity for solid background */}
      <PuzzlePiece variant="green" size="xl" className="absolute -top-12 -left-12 opacity-[0.07]" />
      <PuzzlePiece variant="blue" size="lg" className="absolute -bottom-16 -right-16 opacity-[0.07]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to experience the <span className="text-[hsl(var(--vitality-green))]">Vitality</span> difference?</h2>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            Take the first step toward personalized, in-home support that empowers you to live your best life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))] text-white px-8 shadow-lg">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-white text-white hover:bg-white hover:text-[hsl(var(--vitality-blue))] px-8">
              <a href="tel:1800123456" className="flex items-center">
                <Phone size={18} className="mr-2" />
                Call 1800 123 456
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
