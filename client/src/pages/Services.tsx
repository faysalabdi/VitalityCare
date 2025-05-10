import { useState } from "react";
import { Helmet } from "react-helmet";
import { services } from "@/data/services";
import ServiceCard from "@/components/services/ServiceCard";
import ServiceDetail from "@/components/services/ServiceDetail";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Services = () => {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <>
      <Helmet>
        <title>Our Services | Vitality Community Care</title>
        <meta name="description" content="Explore our range of disability support services including daily living support, personal care, community participation, and therapy services." />
        <meta property="og:title" content="Our Services | Vitality Community Care" />
        <meta property="og:description" content="Comprehensive disability support services tailored to your needs." />
      </Helmet>

      <section className="bg-gradient-to-r from-[hsl(var(--vitality-blue-25))] to-[hsl(var(--vitality-green-25))] py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Our Services</h1>
            <p className="text-lg mb-8">
              Vitality Community Care offers personalized therapeutic and support services,
              delivered by our team of friendly practitioners.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[hsl(var(--neutral-light))]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service) => (
              <ServiceCard 
                key={service.id}
                service={service}
                isActive={selectedService.id === service.id}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>

          <ServiceDetail service={selectedService} />

          <div className="mt-16 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full border-[hsl(var(--vitality-blue))] text-[hsl(var(--vitality-blue))] hover:bg-[hsl(var(--vitality-blue))] hover:text-white">
              <a href="/contact">Get Started With Our Services</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
