import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";
import { MessageSquareQuote } from "lucide-react";

const Testimonials = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex mb-6">
            <div className="flex items-center justify-center p-3 rounded-lg bg-gradient-to-r from-[hsl(var(--vitality-green))] to-[hsl(var(--vitality-blue))] text-white">
              <MessageSquareQuote size={24} />
            </div>
          </div>
          <h2 className="text-3xl font-semibold text-[hsl(var(--neutral-dark))] mb-4">Client Stories</h2>
          <p className="text-lg text-[hsl(var(--neutral-dark))] max-w-3xl mx-auto">
            Hear from those who have experienced the Vitality difference in their lives.
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              className="bg-[hsl(var(--neutral-light))] p-8 rounded-xl relative"
              variants={item}
            >
              {/* Puzzle piece decorative element */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-[hsl(var(--vitality-${testimonial.color}-25))] puzzle-corner`}></div>
              
              <div className="mb-4">
                <div className={`w-10 h-10 rounded-lg bg-[hsl(var(--vitality-${testimonial.color}-10))] flex items-center justify-center text-[hsl(var(--vitality-${testimonial.color}))]`}>
                  <MessageSquareQuote size={20} />
                </div>
              </div>
              
              <p className="text-[hsl(var(--neutral-dark))] mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-[hsl(var(--neutral-dark))]">{testimonial.name}</h4>
                  <p className="text-sm text-[hsl(var(--neutral-dark))] opacity-75">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
