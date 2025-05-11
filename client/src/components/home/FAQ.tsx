import { faqs } from "@/data/faqs";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section 
      className="relative bg-[hsl(var(--vitality-green-10))] text-[hsl(var(--neutral-dark))] -mt-20 md:-mt-28 lg:-mt-32 pt-28 md:pt-36 lg:pt-40 pb-32 md:pb-40 lg:pb-48 overflow-visible"
      style={{
        clipPath: 'ellipse(100% 70% at 50% 30%)', // Curve for its bottom edge
      }}
    >
      {/* Dot pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] opacity-50 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[hsl(var(--vitality-green))] font-medium uppercase tracking-wider">NEED HELP?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))] mt-2 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-[hsl(var(--neutral-dark))] max-w-3xl mx-auto opacity-80">
            Got questions? Our FAQ section is loaded with answers to common questions. Learn more about how we can serve you best.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id.toString()}
                className="border-none shadow-sm rounded-lg overflow-hidden"
              >
                <div className="bg-white hover:bg-slate-50 transition-colors">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline focus:outline-none focus:ring-1 focus:ring-[hsl(var(--vitality-green))] font-medium text-[hsl(var(--neutral-dark))] text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-[hsl(var(--neutral-dark))] opacity-80">
                    {faq.answer}
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
