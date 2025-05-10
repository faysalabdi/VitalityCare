import { motion } from "framer-motion";
import { ServiceType } from "@/data/services";
import PuzzlePiece from "@/components/shared/PuzzlePiece";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";

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
      className={`bg-white p-8 rounded-xl shadow-md border-t-4 border-[hsl(var(--vitality-${service.color}))]`}
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/5 relative">
          <motion.div
            initial={{ scale: 0.95, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden shadow-lg"
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
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center mb-4"
          >
            <div className={`w-12 h-12 rounded-full bg-[hsl(var(--vitality-${service.color}))] flex items-center justify-center text-white mr-3 shadow-md`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {service.icon}
              </svg>
            </div>
            <h2 className="text-3xl font-semibold">{service.title}</h2>
          </motion.div>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[hsl(var(--neutral-dark))] mb-6 text-lg"
          >
            {service.description}
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-medium mb-4 flex items-center">
              <span className={`inline-block w-8 h-1 mr-3 bg-[hsl(var(--vitality-${service.color}))]`}></span>
              How We Help
            </h3>
            <ul className="space-y-3 mb-8">
              {service.features.map((feature, index) => (
                <motion.li 
                  key={index} 
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                  className="flex items-start"
                >
                  <div className={`p-1 rounded-full bg-[hsl(var(--vitality-${service.color}-10))] mr-3 mt-0.5`}>
                    <Check className={`h-4 w-4 text-[hsl(var(--vitality-${service.color}))]`} />
                  </div>
                  <span className="text-[hsl(var(--neutral-dark))]">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {service.quote && (
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className={`bg-[hsl(var(--vitality-${service.color}-10))] p-5 rounded-lg mb-8 relative`}
            >
              <div className="absolute top-0 left-0 transform -translate-x-2 -translate-y-2 text-[hsl(var(--vitality-${service.color}))] opacity-20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                </svg>
              </div>
              <p className="text-[hsl(var(--neutral-dark))] italic pl-4 text-lg">"{service.quote}"</p>
            </motion.div>
          )}
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild className={`rounded-full bg-[hsl(var(--vitality-${service.color}))] hover:bg-[hsl(var(--vitality-${service.color}-75))]`}>
              <Link href="/contact" className="flex items-center gap-2">
                Enquire About This Service
                <ArrowRight size={16} />
              </Link>
            </Button>
            <Button asChild variant="outline" className={`rounded-full border-[hsl(var(--vitality-${service.color}))] text-[hsl(var(--vitality-${service.color}))] hover:bg-[hsl(var(--vitality-${service.color}))] hover:text-white`}>
              <Link href="/services">View All Services</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;
