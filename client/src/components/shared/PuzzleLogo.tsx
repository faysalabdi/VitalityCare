import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

// Import assets
import logoIcon from '@/assets/Vitality CC - Logo01.png';
import logoText from '@/assets/Vitality CC - Logo02.png';
import logoFull from '@/assets/Vitality CC - Logo03.png';

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
        return logoFull;
      case "text":
        return logoText;
      case "icon":
      default:
        return logoIcon;
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
