import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Brain, Activity, Users } from "lucide-react";

const ServiceHighlights = () => {
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
      id="services" 
      className="relative bg-[hsl(var(--vitality-green-10))] text-[hsl(var(--neutral-dark))] -mt-16 pt-28 md:pt-32 lg:pt-36 pb-20 md:pb-24 lg:pb-28 overflow-hidden"
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
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[hsl(var(--vitality-green))] font-medium uppercase tracking-wider">OUR NDIS SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))] mt-3 mb-6">Empowering Lives with Comprehensive Support</h2>
          <p className="text-lg text-[hsl(var(--neutral-dark))] max-w-3xl mx-auto opacity-80">
            Vitality Community Care offers personalized therapeutic and support services, delivered by our team of friendly practitioners.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.slice(0, 4).map((service) => (
            <motion.div 
              key={service.id}
              id={service.slug}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
              variants={item}
            >
              <div className="p-6 text-center">
                {/* Circular icon container */}
                <div className="mx-auto mb-6">
                  <div className={`w-20 h-20 rounded-full bg-[hsl(var(--vitality-${service.color}-10))] flex items-center justify-center text-[hsl(var(--vitality-${service.color}))] mx-auto`}>
                    {service.slug === 'daily-living' && <Heart size={32} />}
                    {service.slug === 'personal-care' && <Users size={32} />}
                    {service.slug === 'community-participation' && <Activity size={32} />}
                    {service.slug === 'therapy' && <Brain size={32} />}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-[hsl(var(--neutral-dark))] mb-3">{service.title}</h3>
                <p className="text-[hsl(var(--neutral-dark))] mb-6 opacity-80">{service.shortDescription}</p>
                <Button asChild variant="link" className={`text-[hsl(var(--vitality-${service.color}))] font-medium p-0 flex items-center group mx-auto`}>
                  <Link href={`/services#${service.slug}`}>
                    Learn More 
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
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
          <Button asChild size="lg" className="rounded-full bg-[hsl(var(--vitality-blue))] hover:bg-[hsl(var(--vitality-blue-75))] text-white px-8 shadow-lg">
            <Link href="/services" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              View All Services
              <span className="ml-2">&rarr;</span>  
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Wave SVG divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
        <svg 
          viewBox="0 0 1200 185" 
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

export default ServiceHighlights;
