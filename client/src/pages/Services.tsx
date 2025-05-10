import { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { services } from "@/data/services";
import ServiceCard from "@/components/services/ServiceCard";
import ServiceDetail from "@/components/services/ServiceDetail";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Heart, HelpingHand, Users, Activity, ClipboardCheck, CheckCircle, Info } from "lucide-react";
import PuzzlePiece from "@/components/shared/PuzzlePiece";

const ServiceSelectionGuide = () => {
  return (
    <div className="bg-[hsl(var(--neutral-light))] p-4 rounded-lg mb-8 flex items-start gap-3">
      <div className="text-[hsl(var(--vitality-blue))]">
        <Info size={20} />
      </div>
      <div>
        <h3 className="font-medium mb-1">Service Selection Guide</h3>
        <p className="text-sm text-[hsl(var(--neutral-dark))]">
          Click on any service card above to view its details below. You'll automatically be scrolled to the detailed information.
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [animateDetail, setAnimateDetail] = useState(false);
  const serviceDetailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger animation when service changes
    setAnimateDetail(true);
    const timer = setTimeout(() => setAnimateDetail(false), 500);
    return () => clearTimeout(timer);
  }, [selectedService]);

  const handleServiceSelect = (service: typeof services[0]) => {
    setSelectedService(service);
    
    // Scroll to the service detail section with smooth animation
    setTimeout(() => {
      serviceDetailRef.current?.scrollIntoView({ 
        behavior: "smooth", 
        block: "start"
      });
    }, 100);
  };

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

      {/* Service Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4">How We Deliver Our Services</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Our approach ensures you receive personalized care that respects your choices and meets your unique needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[hsl(var(--neutral-light))] p-8 rounded-xl text-center relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[hsl(var(--vitality-green))] text-white flex items-center justify-center text-xl font-bold">1</div>
              <div className="mt-4 mb-4">
                <ClipboardCheck className="w-12 h-12 mx-auto text-[hsl(var(--vitality-green))]" />
              </div>
              <h3 className="text-xl font-medium mb-2">Initial Consultation</h3>
              <p>We meet to understand your needs, preferences, and goals to create your personalized support plan.</p>
            </div>
            
            <div className="bg-[hsl(var(--neutral-light))] p-8 rounded-xl text-center relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[hsl(var(--vitality-blue))] text-white flex items-center justify-center text-xl font-bold">2</div>
              <div className="mt-4 mb-4">
                <Users className="w-12 h-12 mx-auto text-[hsl(var(--vitality-blue))]" />
              </div>
              <h3 className="text-xl font-medium mb-2">Team Matching</h3>
              <p>We carefully match you with the most suitable support practitioners based on your specific requirements.</p>
            </div>
            
            <div className="bg-[hsl(var(--neutral-light))] p-8 rounded-xl text-center relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[hsl(var(--vitality-green))] text-white flex items-center justify-center text-xl font-bold">3</div>
              <div className="mt-4 mb-4">
                <Activity className="w-12 h-12 mx-auto text-[hsl(var(--vitality-green))]" />
              </div>
              <h3 className="text-xl font-medium mb-2">Service Delivery</h3>
              <p>Our practitioners deliver high-quality support services tailored to your needs, adjusting as required.</p>
            </div>
            
            <div className="bg-[hsl(var(--neutral-light))] p-8 rounded-xl text-center relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[hsl(var(--vitality-blue))] text-white flex items-center justify-center text-xl font-bold">4</div>
              <div className="mt-4 mb-4">
                <CheckCircle className="w-12 h-12 mx-auto text-[hsl(var(--vitality-blue))]" />
              </div>
              <h3 className="text-xl font-medium mb-2">Regular Reviews</h3>
              <p>We conduct ongoing assessments to ensure services remain aligned with your evolving needs and goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-16 bg-[hsl(var(--neutral-light))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Explore Our Services</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Select a service to learn more about how we can support you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service) => (
              <ServiceCard 
                key={service.id}
                service={service}
                isActive={selectedService.id === service.id}
                onClick={() => handleServiceSelect(service)}
              />
            ))}
          </div>

          <div ref={serviceDetailRef} className="scroll-mt-24">
            <ServiceSelectionGuide />
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`relative ${animateDetail ? 'ring-2 ring-[hsl(var(--vitality-green))] ring-opacity-50 rounded-xl' : ''}`}
              >
                <ServiceDetail service={selectedService} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* NDIS Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold mb-6">NDIS Support</h2>
              <p className="text-lg mb-6">
                As a registered NDIS provider, Vitality Community Care offers a range of supports eligible for NDIS funding. Our team can help you navigate the NDIS process and maximize your plan.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-[hsl(var(--vitality-green))]">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Core Supports</h3>
                    <p>Daily personal activities, transport, consumables, and social and community participation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-[hsl(var(--vitality-green))]">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Capacity Building Supports</h3>
                    <p>Support coordination, improved daily living skills, and community participation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-[hsl(var(--vitality-green))]">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Plan Management</h3>
                    <p>Assistance with financial and service delivery aspects of your NDIS plan.</p>
                  </div>
                </div>
              </div>
              
              <Button asChild className="rounded-full bg-[hsl(var(--vitality-blue))] hover:bg-[hsl(var(--vitality-blue-75))]">
                <a href="/contact">Discuss Your NDIS Plan With Us</a>
              </Button>
            </div>
            
            <div className="lg:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1573497019236-61f323342eb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="NDIS support meeting" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[hsl(var(--vitality-blue-25))] rounded-lg z-0 transform rotate-6"></div>
              <PuzzlePiece variant="blue" size="sm" className="absolute -top-4 -left-4 opacity-30 animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[hsl(var(--neutral-light))]">
        <div className="container mx-auto px-4">
          <div className="mt-12 max-w-4xl mx-auto">
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
                  <a href="/contact?inquiry=services">Request More Information</a>
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
