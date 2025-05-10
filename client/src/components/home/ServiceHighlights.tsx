import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

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
    <section id="services" className="py-16 bg-[hsl(var(--neutral-light))]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-[hsl(var(--neutral-dark))] mb-4">Our Services</h2>
          <p className="text-lg text-[hsl(var(--neutral-dark))] max-w-3xl mx-auto">
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
              className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105"
              variants={item}
            >
              <div className={`h-48 bg-[hsl(var(--vitality-${service.color}-75))] relative overflow-hidden`}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-0 right-0 w-16 h-16 bg-[hsl(var(--vitality-${service.color}))]`} style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)", opacity: 0.7 }}></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-[hsl(var(--neutral-dark))] mb-2">{service.title}</h3>
                <p className="text-[hsl(var(--neutral-dark))] mb-4">{service.shortDescription}</p>
                <Button asChild variant="link" className={`text-[hsl(var(--vitality-${service.color}))] font-medium p-0 flex items-center`}>
                  <Link href={`/services#${service.slug}`}>
                    Learn More 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
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
          <Button asChild variant="outline" size="lg" className="rounded-full border-[hsl(var(--vitality-blue))] text-[hsl(var(--vitality-blue))] hover:bg-[hsl(var(--vitality-blue))] hover:text-white">
            <Link href="/services">View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
