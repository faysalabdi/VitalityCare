import { motion } from "framer-motion";

const AccreditationLogos = () => {
  const logos = [
    { 
      src: "/accreditation-logos/Medicare.webp", 
      alt: "Medicare Logo", 
      width: 200
    },
    { 
      src: "/accreditation-logos/Registered-NDIS-Provider.webp", 
      alt: "Registered NDIS Provider Logo", 
      width: 180
    },
    { 
      src: "/accreditation-logos/Aphra.webp", 
      alt: "Aphra & National Boards Logo", 
      width: 200
    },
    { 
      src: "/accreditation-logos/NDIS-Certified-Vitality-NDIS.webp", 
      alt: "NDIS Certified Logo", 
      width: 180
    }
  ];

  return (
    <section className="relative bg-white py-12 -mt-30 overflow-hidden z-10">
      
      {/* Animated scrolling logos - infinite loop with gradient overlays */}
      <div className="relative w-full overflow-hidden py-6">
        {/* Gradient overlay on left */}
        <div className="absolute left-0 top-0 bottom-0 w-40 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        
        {/* Gradient overlay on right */}
        <div className="absolute right-0 top-0 bottom-0 w-40 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        
        <div className="flex items-center justify-center relative">
          <motion.div 
            className="flex gap-16 items-center" 
            animate={{ 
              x: [0, -1800],
            }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <motion.div 
                key={`logo-1-${index}`} 
                className="flex items-center justify-center bg-white p-5 rounded-lg shadow-sm"
                style={{ width: logo.width + 'px', height: '110px' }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </motion.div>
            ))}
            
            {/* Duplicate sets for seamless loop */}
            {[...Array(3)].map((_, setIndex) => (
              logos.map((logo, logoIndex) => (
                <motion.div 
                  key={`logo-${setIndex + 2}-${logoIndex}`} 
                  className="flex items-center justify-center bg-white p-5 rounded-lg shadow-sm"
                  style={{ width: logo.width + 'px', height: '150px' }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </motion.div>
              ))
            ))}
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};

export default AccreditationLogos; 