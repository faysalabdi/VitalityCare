import { motion } from "framer-motion";
import { ServiceType } from "@/data/services";
import PuzzlePiece from "@/components/shared/PuzzlePiece";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface ServiceDetailProps {
  service: ServiceType;
}

const ServiceDetail = ({ service }: ServiceDetailProps) => {
  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-xl shadow-md"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/5 relative">
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden"
          >
            <img 
              src={service.detailImage || service.image} 
              alt={service.title} 
              className="w-full h-auto object-cover"
            />
          </motion.div>
          <PuzzlePiece 
            variant={service.color === "blue" ? "blue" : "green"}
            size="md" 
            className="absolute -bottom-4 -right-4 opacity-20 animate-float" 
          />
        </div>
        
        <div className="lg:w-3/5">
          <div className="flex items-center mb-4">
            <div className={`w-10 h-10 rounded-full bg-[hsl(var(--vitality-${service.color}))] flex items-center justify-center text-white mr-3`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {service.icon}
              </svg>
            </div>
            <h2 className="text-2xl font-semibold">{service.title}</h2>
          </div>
          
          <p className="text-[hsl(var(--neutral-dark))] mb-6">{service.description}</p>
          
          <h3 className="text-lg font-medium mb-3">How We Help</h3>
          <ul className="space-y-2 mb-6">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mr-2 mt-1 text-[hsl(var(--vitality-${service.color}))]`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          {service.quote && (
            <div className={`bg-[hsl(var(--vitality-${service.color}-25))] p-4 rounded-lg mb-6 relative`}>
              <div className="absolute top-0 left-0 transform -translate-x-2 -translate-y-2 text-[hsl(var(--vitality-${service.color}))] opacity-20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                </svg>
              </div>
              <p className="text-[hsl(var(--neutral-dark))] italic pl-4">"{service.quote}"</p>
            </div>
          )}
          
          <Button asChild className={`rounded-full bg-[hsl(var(--vitality-${service.color}))] hover:bg-[hsl(var(--vitality-${service.color}-75))]`}>
            <Link href="/contact">Enquire About This Service</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;
