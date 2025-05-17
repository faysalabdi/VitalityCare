import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface ServicePageButtonProps {
  serviceId?: string;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  children?: React.ReactNode;
}

/**
 * A smart button that navigates to either the NDIS or Aged Care page based on the service type
 */
const ServicePageButton = ({ 
  serviceId, 
  className = "", 
  size = "default",
  variant = "default",
  children = "View All Services"
}: ServicePageButtonProps) => {
  // Determine the page URL based on service ID
  const getPageUrl = () => {
    // Set of NDIS service IDs
    const ndisServiceIds = [
      "daily-living", 
      "personal-care", 
      "community-participation", 
      "therapy", 
      "support-coordination",
      "supported-independent-living",
      "transport",
      "cleaning",
      "early-childhood"
    ];
    
    // Set of Aged Care service IDs
    const agedCareServiceIds = [
      "home-care-package", 
      "chsp", 
      "private-care"
    ];
    
    if (!serviceId) {
      // Default to NDIS when no service provided
      return "/ndis#service-list";
    }
    
    if (ndisServiceIds.includes(serviceId)) {
      return "/ndis#service-list";
    }
    
    if (agedCareServiceIds.includes(serviceId)) {
      return "/aged-care#service-list";
    }
    
    // Default to NDIS for any other service
    return "/ndis#service-list";
  };

  return (
    <Button 
      asChild 
      size={size} 
      variant={variant} 
      className={`rounded-full ${className}`}
    >
      <Link 
        href={getPageUrl()}
        onClick={() => {
          // Ensure smooth scrolling for hash navigation
          setTimeout(() => {
            const element = document.getElementById('service-list');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 100);
        }}
      >
        {children}
        {!children.toString().includes("ArrowRight") && <ArrowRight className="ml-2 h-5 w-5" />}
      </Link>
    </Button>
  );
};

export default ServicePageButton; 