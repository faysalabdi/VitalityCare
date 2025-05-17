import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Home, Bed, Bath, Users, MapPin, Shield, HeartHandshake } from "lucide-react";
import housingVacancies from "@/data/housingVacancies";

const SupportedLivingHighlights = () => {
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

  // Get the latest 3 housing vacancies
  const featuredProperties = housingVacancies.slice(0, 3);

  return (
    <section 
      id="supported-living" 
      className="relative bg-white text-[hsl(var(--neutral-dark))] -mt-20 md:-mt-28 lg:-mt-32 pt-28 md:pt-36 lg:pt-40 pb-32 md:pb-40 lg:pb-48 overflow-visible"
      style={{
        clipPath: 'ellipse(100% 70% at 50% 30%)', // Curve for its bottom edge
      }}
    >
      {/* Top wave SVG divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-0 transform rotate-180">
        <svg 
          viewBox="0 0 1200 160" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="relative block w-full"
          preserveAspectRatio="none"
          style={{ height: '80px', transform: 'rotateY(180deg)' }}
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V160H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            fill="hsl(var(--vitality-blue-10))"
          ></path>
        </svg>
      </div>

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wMikiLz48L3N2Zz4=')] opacity-90 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-[hsl(var(--neutral-dark))] mb-4">Supported Independent Living</h2>
          <p className="text-lg text-[hsl(var(--neutral-dark))] max-w-3xl mx-auto">
            Discover our quality housing options designed to promote independence with the right level of support.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(var(--vitality-blue-10))] text-[hsl(var(--vitality-blue))]">
              <Shield size={18} />
              <span>NDIS Registered Provider</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(var(--vitality-green-10))] text-[hsl(var(--vitality-green))]">
              <HeartHandshake size={18} />
              <span>24/7 Support Available</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuredProperties.map((property) => (
            <motion.div 
              key={property.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-60">
                <img 
                  src={property.images[0]} 
                  alt={property.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-[hsl(var(--vitality-green))] text-white font-medium px-4 py-2 rounded-br-lg">
                  SIL Approved
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-[hsl(var(--vitality-blue))]">{property.location}</h3>
                <p className="text-base font-medium mb-1">{property.title}</p>
                <p className="text-sm font-medium text-[hsl(var(--vitality-green))] mb-3">{property.type}</p>
                
                <div className="grid grid-cols-2 gap-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Bed size={16} className="text-[hsl(var(--vitality-green))]" />
                    <span className="text-sm">Bedrooms: {property.features.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath size={16} className="text-[hsl(var(--vitality-green))]" />
                    <span className="text-sm">Bathrooms: {property.features.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-[hsl(var(--vitality-green))]" />
                    <span className="text-sm">Vacancies: {property.features.bedroomsAvailable}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-[hsl(var(--vitality-green))]" />
                    <span className="text-sm">VIC/WA</span>
                  </div>
                </div>
                
                <Button asChild className="w-full rounded-full bg-[hsl(var(--vitality-blue))] hover:bg-[hsl(var(--vitality-blue-75))] text-sm h-9">
                  <Link to={`/accommodation/${property.id}`}>View Details</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="max-w-xl mx-auto bg-[hsl(var(--vitality-blue-5))] rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-3">What is Supported Independent Living?</h3>
            <p className="text-base mb-4">
              SIL provides the support you need to live as independently as possible in a shared home environment. 
              With 24/7 support available, you can focus on developing skills and enjoying community life.
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-2">
                <div className="mt-1">
                  <HeartHandshake size={16} className="text-[hsl(var(--vitality-blue))]" />
                </div>
                <div>
                  <p className="text-sm font-medium">Daily Living Support</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1">
                  <Users size={16} className="text-[hsl(var(--vitality-blue))]" />
                </div>
                <div>
                  <p className="text-sm font-medium">Shared Living</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1">
                  <Home size={16} className="text-[hsl(var(--vitality-blue))]" />
                </div>
                <div>
                  <p className="text-sm font-medium">Quality Housing</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1">
                  <Shield size={16} className="text-[hsl(var(--vitality-blue))]" />
                </div>
                <div>
                  <p className="text-sm font-medium">NDIS Funded</p>
                </div>
              </div>
            </div>
          </div>
          
          <Button asChild variant="default" size="lg" className="rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))]">
            <Link to="/accommodation">View All Properties <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportedLivingHighlights; 