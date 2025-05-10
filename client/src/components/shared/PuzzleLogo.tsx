import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

interface PuzzleLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "icon" | "full" | "text";
  animated?: boolean;
  className?: string;
  href?: string;
}

const PuzzleLogo = ({ 
  size = "md", 
  variant = "icon",
  animated = true,
  className,
  href
}: PuzzleLogoProps) => {
  const sizes = {
    sm: "h-8",
    md: "h-10 md:h-12",
    lg: "h-14 md:h-16",
    xl: "h-20 md:h-24"
  };

  const getLogoSrc = () => {
    switch(variant) {
      case "full":
        return "/assets/images/Vitality CC - Logo03.png";
      case "text":
        return "/assets/images/Vitality CC - Logo02.png";
      case "icon":
      default:
        return "/assets/images/Vitality CC - Logo01.png";
    }
  };

  const Logo = (
    <motion.div 
      className={cn(
        sizes[size],
        "relative",
        className
      )}
      whileHover={animated ? { scale: 1.05 } : {}}
      transition={{ duration: 0.2 }}
    >
      <img 
        src={getLogoSrc()} 
        alt="Vitality Community Care" 
        className="h-full w-auto object-contain"
      />
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href}>
        {Logo}
      </Link>
    );
  }

  return Logo;
};

export default PuzzleLogo;
