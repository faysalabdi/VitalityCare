import React from "react";
import { motion } from "framer-motion";
import seamlesslyImage from "@/assets/support.png";

const Features = () => {
  return (
    <section className="relative bg-[hsl(var(--vitality-green-10))] text-[hsl(var(--neutral-dark))] py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Dot pattern overlay - subtle */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wMykiLz48L3N2Zz4=')] opacity-80 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* From Hospital to Home Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex mb-6 items-center px-3 py-1 rounded-full bg-[hsl(var(--vitality-blue-10))] text-[hsl(var(--vitality-blue))]">
              <span className="text-sm font-medium">#vitality_warm_care</span>
            </div>
            
            <h2 className="text-4xl font-bold text-[hsl(var(--neutral-dark))] mb-6">
              From Hospital to Home, <span className="text-[hsl(var(--vitality-blue))]">Seamlessly</span>.
            </h2>
            
            <p className="text-lg text-[hsl(var(--neutral-dark))] mb-8">
              We partner with hospitals and health professionals to ensure vulnerable individuals receive timely, high-quality support when they leave medical care.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-5">
                  <div className="w-12 h-12 rounded-lg bg-[hsl(var(--vitality-green-10))] flex items-center justify-center text-[hsl(var(--vitality-green))]">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                      <path 
                        d="M10 23C10 29.5228 15.4772 35 22 35H38" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                      />
                      <path 
                        d="M12 13L4 23L12 33" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Local Specialists</h3>
                  <p className="text-[hsl(var(--neutral-dark))]">We match you with specialists in your local community for consistent care.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-5">
                  <div className="w-12 h-12 rounded-lg bg-[hsl(var(--vitality-blue-10))] flex items-center justify-center text-[hsl(var(--vitality-blue))]">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                      <path 
                        d="M10 21L24 10L38 21V38H10V21Z" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                      <path 
                        d="M18 38V26H30V38" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Home Convenience</h3>
                  <p className="text-[hsl(var(--neutral-dark))]">Our therapists come to your home, eliminating transportation stress.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img 
                src={seamlesslyImage} 
                alt="From Hospital to Home, Seamlessly" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Additional Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-gray-200 pt-16">
          {/* Feature 1 */}
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-5">
              <div className="w-14 h-14 text-[hsl(var(--vitality-green))]">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M24 12C31.732 12 38 10.209 38 8C38 5.791 31.732 4 24 4C16.268 4 10 5.791 10 8C10 10.209 16.268 12 24 12Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <path 
                    d="M38 8V24C38 26.209 31.732 28 24 28C16.268 28 10 26.209 10 24V8" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <path 
                    d="M24 36V28" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <path 
                    d="M17 36H31" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Funding Options</h3>
              <p className="text-[hsl(var(--neutral-dark))] text-base">
                We welcome both NDIS participants and self-funded clients with flexible payment options.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-5">
              <div className="w-14 h-14 text-[hsl(var(--vitality-blue))]">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <path 
                    d="M18 24L22 28L30 20" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Quality Assurance</h3>
              <p className="text-[hsl(var(--neutral-dark))] text-base">
                All our care specialists undergo rigorous training and continuous professional development.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-5">
              <div className="w-14 h-14 text-[hsl(var(--vitality-green))]">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M16 5L24 13L32 5" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <path 
                    d="M24 13V33" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <path 
                    d="M10 33H38" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <path 
                    d="M10 41H38" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Comprehensive Support</h3>
              <p className="text-[hsl(var(--neutral-dark))] text-base">
                From daily living assistance to specialized therapy, we offer a full spectrum of services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave SVG divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
        <svg 
          viewBox="0 0 1200 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="relative block w-full"
          preserveAspectRatio="none"
          style={{ height: '70px' }}
        >
          <path 
            d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V120H0V27.35a600.21 600.21 0 00321.39 29.09z" 
            fill="white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Features;