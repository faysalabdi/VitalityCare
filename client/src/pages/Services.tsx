import { useState } from "react";
import { Helmet } from "react-helmet";
import { services } from "@/data/services";
import ServiceCard from "@/components/services/ServiceCard";
import ServiceDetail from "@/components/services/ServiceDetail";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Heart, HelpingHand, Users, Activity } from "lucide-react";
import PuzzlePiece from "@/components/shared/PuzzlePiece";

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

      <section className="relative py-16 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full bg-[hsl(var(--neutral-light))]"></div>
        <div className="absolute top-0 left-0 w-1/3 h-full bg-[hsl(var(--vitality-blue))] opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[hsl(var(--vitality-green))] opacity-5"></div>
        
        {/* Decorative patterns */}
        <div className="absolute top-10 left-10 opacity-10">
          <PuzzlePiece variant="blue" size="md" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10">
          <PuzzlePiece variant="green" size="md" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex mb-6">
              <div className="flex items-center justify-center p-3 rounded-lg bg-gradient-to-r from-[hsl(var(--vitality-blue))] to-[hsl(var(--vitality-green))] text-white">
                <Activity size={28} />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Our Services</h1>
            <p className="text-lg mb-8">
              Vitality Community Care offers personalized therapeutic and support services,
              delivered by our team of friendly practitioners.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--vitality-green-10))] text-[hsl(var(--vitality-green))]">
                <Heart size={16} />
                <span>Daily Living Support</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--vitality-blue-10))] text-[hsl(var(--vitality-blue))]">
                <HelpingHand size={16} />
                <span>Personal Care</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--vitality-green-10))] text-[hsl(var(--vitality-green))]">
                <Users size={16} />
                <span>Community Participation</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--vitality-blue-10))] text-[hsl(var(--vitality-blue))]">
                <Activity size={16} />
                <span>Therapy Services</span>
              </div>
            </div>
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

          <div className="mt-20 max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[hsl(var(--vitality-green))] opacity-10 rounded-bl-xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[hsl(var(--vitality-blue))] opacity-10 rounded-tr-xl"></div>
              
              <div className="text-center mb-8 relative z-10">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Ready to experience our personalized support?</h3>
                <p className="text-lg text-[hsl(var(--neutral-dark))]">
                  Our friendly team is ready to discuss how our services can be tailored to meet your specific needs.
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
                <Button asChild size="lg" className="rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))] w-full md:w-auto">
                  <a href="/contact" className="flex items-center justify-center gap-2">
                    Get Started With Our Services
                    <ArrowRight size={16} />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-[hsl(var(--vitality-blue))] text-[hsl(var(--vitality-blue))] hover:bg-[hsl(var(--vitality-blue))] hover:text-white w-full md:w-auto">
                  <a href="/team">Meet Our Team</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
