import { motion } from "framer-motion";
import { ServiceType } from "@/data/services";

interface ServiceCardProps {
  service: ServiceType;
  isActive?: boolean;
  onClick?: () => void;
}

const ServiceCard = ({ service, isActive = false, onClick }: ServiceCardProps) => {
  return (
    <motion.div 
      id={service.slug}
      className={`bg-white rounded-xl overflow-hidden shadow-md transition-all ${isActive ? 'ring-2 ring-[hsl(var(--vitality-' + service.color + '))]' : 'hover:scale-105'}`}
      onClick={onClick}
      whileHover={{ scale: onClick ? 1.03 : 1 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
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
        <button 
          className={`text-[hsl(var(--vitality-${service.color}))] font-medium flex items-center`}
          onClick={onClick}
        >
          Learn More 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
