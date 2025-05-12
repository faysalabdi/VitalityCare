import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, CheckCircle, Users } from "lucide-react";

const Features = () => {
  return (
    <section className="relative bg-[hsl(var(--vitality-blue-10))] text-[hsl(var(--neutral-dark))] -mt-24 pt-32 md:pt-36 lg:pt-40 pb-20 md:pb-24 lg:pb-28 overflow-hidden">
      {/* Top wave SVG divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-0 transform rotate-180">
        <svg 
          viewBox="0 0 1200 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="relative block w-full"
          preserveAspectRatio="none"
          style={{ height: '200px', width: '100%', transform: 'rotateY(180deg)' }}
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            fill="white"
          ></path>
        </svg>
      </div>

      {/* Dot pattern overlay - subtle */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wMykiLz48L3N2Zz4=')] opacity-80 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[hsl(var(--vitality-blue))] font-medium uppercase tracking-wider">WHAT SETS US APART</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))] mt-3 mb-6">Exceptional Care Features</h2>
          <p className="text-lg text-[hsl(var(--neutral-dark))] max-w-3xl mx-auto opacity-80">
            Our approach to care is built on key principles that ensure quality, consistency, and excellence in everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 rounded-full bg-[hsl(var(--vitality-blue-25))] flex items-center justify-center text-[hsl(var(--vitality-blue))] mx-auto mb-6">
              <Shield size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
            <p className="text-[hsl(var(--neutral-dark))] opacity-80">
              Rigorous standards and continuous evaluation ensure our services consistently exceed expectations.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 rounded-full bg-[hsl(var(--vitality-blue-25))] flex items-center justify-center text-[hsl(var(--vitality-blue))] mx-auto mb-6">
              <Zap size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Rapid Response</h3>
            <p className="text-[hsl(var(--neutral-dark))] opacity-80">
              Quick action and efficient coordination when you need assistance, with 24/7 support availability.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 rounded-full bg-[hsl(var(--vitality-blue-25))] flex items-center justify-center text-[hsl(var(--vitality-blue))] mx-auto mb-6">
              <CheckCircle size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Certified Experts</h3>
            <p className="text-[hsl(var(--neutral-dark))] opacity-80">
              All our specialists are fully certified, extensively trained, and continuously developing their skills.
            </p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 rounded-full bg-[hsl(var(--vitality-blue-25))] flex items-center justify-center text-[hsl(var(--vitality-blue))] mx-auto mb-6">
              <Users size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Compassionate Care</h3>
            <p className="text-[hsl(var(--neutral-dark))] opacity-80">
              Our focus on genuine human connection creates meaningful relationships that go beyond standard care.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;