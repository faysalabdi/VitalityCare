import { motion } from "framer-motion";
import PuzzlePiece from "@/components/shared/PuzzlePiece";
import benefitsImage from "@/assets/support.png"; // Using an existing image, replace with a better one if available

const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Personalized Support",
    description: "We match you with specialists who understand your unique needs and community.",
    color: "text-[hsl(var(--vitality-green))]"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "In-Home Services",
    description: "Our team comes to you, providing comfortable support in your own environment.",
    color: "text-[hsl(var(--vitality-blue))]"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "NDIS Support",
    description: "We welcome both NDIS participants and self-funded clients.",
    color: "text-[hsl(var(--vitality-green))]"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Responsive Care",
    description: "Quick response times and flexible scheduling to meet your changing needs.",
    color: "text-[hsl(var(--vitality-blue))]"
  }
];

const Benefits = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative bg-white text-[hsl(var(--neutral-dark))] -mt-16 pt-28 md:pt-32 lg:pt-36 pb-20 md:pb-24 lg:pb-28 overflow-hidden">
      {/* Dot pattern overlay - very subtle */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wMikiLz48L3N2Zz4=')] opacity-90 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-5/12 relative"
          >
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl z-10 relative">
                <img 
                  src={benefitsImage} 
                  alt="Caring support worker helping client" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[hsl(var(--vitality-green-25))] rounded-lg z-0 transform -rotate-6"></div>
              <PuzzlePiece 
                variant="blue"
                size="lg"
                className="absolute -top-10 -right-10 z-20 animate-rotate"
              />
              <PuzzlePiece 
                variant="green"
                size="md"
                className="absolute -bottom-8 -left-8 z-20 animate-rotate-reverse animate-pulse-glow"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-7/12"
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {benefits.slice(0, 4).map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md flex items-start hover:shadow-lg transition-shadow"
                  variants={item}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <div className={`mr-4 ${benefit.color}`}>
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">{benefit.title}</h3>
                    <p className="text-[hsl(var(--neutral-dark))]">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave SVG divider at bottom - larger and stronger */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
        <svg 
          viewBox="0 0 1200 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="relative block w-full"
          preserveAspectRatio="none"
          style={{ height: '120px' }} 
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            fill="hsl(var(--vitality-green-10))"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Benefits;
