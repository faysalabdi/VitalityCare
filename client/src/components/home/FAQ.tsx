import { faqs } from "@/data/faqs";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section 
      className="relative bg-[hsl(var(--vitality-green-10))] text-[hsl(var(--neutral-dark))] -mt-16 pt-24 md:pt-28 lg:pt-32 pb-20 md:pb-24 lg:pb-28 overflow-hidden"
    >
      {/* Top wave SVG divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-0 transform rotate-180">
        <svg 
          viewBox="0 0 1200 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="relative block w-full"
          preserveAspectRatio="none"
          style={{ height: '150px', transform: 'rotateY(180deg)' }}
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            fill="white"
          ></path>
        </svg>
      </div>
      
      {/* Dot pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] opacity-50 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="text-[hsl(var(--vitality-green))] font-medium uppercase tracking-wider">NEED HELP?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))] mt-2 mb-3">Frequently Asked Questions</h2>
          <p className="text-base md:text-lg text-[hsl(var(--neutral-dark))] max-w-3xl mx-auto opacity-80">
            Got questions? We have answers to help you understand our services.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id.toString()}
                className="border-none shadow-sm rounded-lg overflow-hidden"
              >
                <div className="bg-white hover:bg-slate-50 transition-colors">
                  <AccordionTrigger className="px-5 py-3 hover:no-underline focus:outline-none focus:ring-1 focus:ring-[hsl(var(--vitality-green))] font-medium text-[hsl(var(--neutral-dark))] text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-3 text-[hsl(var(--neutral-dark))] opacity-80">
                    {faq.answer}
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
      
      {/* Wave SVG divider at bottom - larger and stronger */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
        <svg 
          viewBox="0 0 1200 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="relative block w-full"
          preserveAspectRatio="none"
          style={{ height: '180px' }}
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            fill="white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default FAQ;
