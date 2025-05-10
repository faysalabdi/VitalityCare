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
    <section id="services" className="py-16 bg-[hsl(var(--neutral-light))]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex mb-6">
            <div className="flex items-center justify-center p-3 rounded-lg bg-gradient-to-r from-[hsl(var(--vitality-blue))] to-[hsl(var(--vitality-green))] text-white">
              <Activity size={24} />
            </div>
          </div>
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
                
                {/* Service icon */}
                <div className="absolute top-0 left-0 m-4">
                  <div className={`w-12 h-12 rounded-lg bg-white shadow-md flex items-center justify-center text-[hsl(var(--vitality-${service.color}))]`}>
                    {service.slug === 'daily-living' && <Heart size={24} />}
                    {service.slug === 'personal-care' && <Users size={24} />}
                    {service.slug === 'community-participation' && <Activity size={24} />}
                    {service.slug === 'therapy' && <Brain size={24} />}
                  </div>
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent"></div>
                
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[hsl(var(--neutral-dark))] mb-4">{service.shortDescription}</p>
                <Button asChild variant="link" className={`text-[hsl(var(--vitality-${service.color}))] font-medium p-0 flex items-center group`}>
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
          <Button asChild variant="outline" size="lg" className="rounded-full border-[hsl(var(--vitality-blue))] text-[hsl(var(--vitality-blue))] hover:bg-[hsl(var(--vitality-blue))] hover:text-white">
            <Link href="/services" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
