import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";

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
              
              <div className={`text-[hsl(var(--vitality-${testimonial.color}))] mb-4`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
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
