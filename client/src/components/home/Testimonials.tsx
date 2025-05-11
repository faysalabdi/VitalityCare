import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";
import { MessageSquareQuote, Star } from "lucide-react";

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
    <section 
      className="relative bg-gradient-to-br from-[hsl(var(--vitality-blue-10))] to-[hsl(var(--vitality-blue-5))] text-[hsl(var(--neutral-dark))] -mt-20 md:-mt-28 lg:-mt-32 pt-28 md:pt-36 lg:pt-40 pb-32 md:pb-40 lg:pb-48 overflow-visible"
      style={{
        clipPath: 'ellipse(100% 70% at 50% 30%)', // Curve for its bottom edge
      }}
    >
      {/* Dot pattern background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] opacity-50 z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[hsl(var(--vitality-blue))] font-medium uppercase tracking-wider">WHAT OUR CLIENTS SAY</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))] mt-3 mb-6">Client Stories</h2>
          <p className="text-lg text-[hsl(var(--neutral-dark))] max-w-3xl mx-auto opacity-80">
            Hear from those who have experienced the Vitality difference in their lives.
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-lg relative"
              variants={item}
            >
              {/* Quote mark */}
              <div className="mb-8 text-[hsl(var(--vitality-blue))] opacity-20">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11L8 13H5V10L8 7H10V11Z" fill="currentColor" />
                  <path d="M19 11L17 13H14V10L17 7H19V11Z" fill="currentColor" />
                </svg>
              </div>
              
              {/* Rating stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[hsl(var(--vitality-green))] fill-[hsl(var(--vitality-green))]" />
                ))}
              </div>
              
              <p className="text-[hsl(var(--neutral-dark))] mb-8 relative z-10 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-[hsl(var(--vitality-blue-10))]">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[hsl(var(--neutral-dark))]">{testimonial.name}</h4>
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
