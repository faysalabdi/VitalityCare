import { testimonials } from "@/data/testimonials";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareQuote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section 
      className="relative bg-[hsl(var(--vitality-blue-10))] text-[hsl(var(--neutral-dark))] -mt-16 pt-28 md:pt-32 lg:pt-36 pb-20 md:pb-24 lg:pb-28 overflow-hidden"
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
      
      {/* Dot pattern background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] opacity-50 z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))] mb-4">What Our Clients & Partners Have To Say</h2>
          </div>
          
          <div className="relative">
            {/* Navigation buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--vitality-green))] -ml-4 lg:-ml-8"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-[hsl(var(--vitality-green))]" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--vitality-green))] -mr-4 lg:-mr-8"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-[hsl(var(--vitality-green))]" />
            </button>
            
            {/* Testimonial carousel */}
            <div className="overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={current}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-8 md:p-10 rounded-xl shadow-lg relative"
                >
                  {/* Quote mark */}
                  <div className="mb-8 text-[hsl(var(--vitality-blue))] opacity-20 absolute top-6 right-8">
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
                  
                  <p className="text-[hsl(var(--neutral-dark))] mb-8 relative z-10 italic text-lg md:text-xl">
                    "{testimonials[current].quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[hsl(var(--vitality-blue-10))]">
                      <img 
                        src={testimonials[current].image} 
                        alt={testimonials[current].name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-[hsl(var(--neutral-dark))] text-lg">{testimonials[current].name}</h4>
                      <p className="text-sm text-[hsl(var(--neutral-dark))] opacity-75">{testimonials[current].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full focus:outline-none ${
                  index === current ? 'bg-[hsl(var(--vitality-green))]' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
{/* Wave SVG divider at bottom */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
        <svg 
          viewBox="0 0 1200 0" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="relative block w-full"
          preserveAspectRatio="none"
          style={{ height: '150px' }}
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

export default Testimonials;
