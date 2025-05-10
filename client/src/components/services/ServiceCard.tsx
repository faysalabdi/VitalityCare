import { motion } from "framer-motion";
import { ServiceType } from "@/data/services";
import { ArrowRight, Heart, HelpingHand, Users, Activity } from "lucide-react";

interface ServiceCardProps {
  service: ServiceType;
  isActive?: boolean;
  onClick?: () => void;
}

const getServiceIcon = (serviceSlug: string, size = 24) => {
  switch(serviceSlug) {
    case 'daily-living':
      return <Heart size={size} />;
    case 'personal-care':
      return <HelpingHand size={size} />;
    case 'community-participation':
      return <Users size={size} />;
    case 'therapy':
      return <Activity size={size} />;
    default:
      return <Activity size={size} />;
  }
};

const ServiceCard = ({ service, isActive = false, onClick }: ServiceCardProps) => {
  return (
    <motion.div 
      id={service.slug}
      className={`bg-white rounded-xl overflow-hidden shadow-md transition-all cursor-pointer ${
        isActive 
          ? 'ring-2 ring-[hsl(var(--vitality-' + service.color + '))] shadow-lg' 
          : 'hover:shadow-lg'
      }`}
      onClick={onClick}
      whileHover={{ scale: onClick ? 1.02 : 1 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Icon badge */}
      <div className={`absolute top-4 left-4 z-10 w-12 h-12 rounded-lg flex items-center justify-center bg-white shadow-md`}>
        <span className={`text-[hsl(var(--vitality-${service.color}))]`}>
          {getServiceIcon(service.slug)}
        </span>
      </div>
      
      <div className={`h-48 bg-[hsl(var(--vitality-${service.color}-75))] relative overflow-hidden`}>
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-transparent`}></div>
        <div className={`absolute bottom-4 left-4 right-4 text-white`}>
          <h3 className="text-xl font-semibold">{service.title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-[hsl(var(--neutral-dark))] mb-4">{service.shortDescription}</p>
        <div className="flex justify-between items-center">
          <button 
            className={`text-[hsl(var(--vitality-${service.color}))] font-medium flex items-center group`}
            onClick={onClick}
          >
            Learn More 
            <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
          
          {isActive && (
            <span className={`inline-flex items-center justify-center px-2 py-1 rounded-full text-xs font-medium bg-[hsl(var(--vitality-${service.color}-10))] text-[hsl(var(--vitality-${service.color}))]`}>
              Selected
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
