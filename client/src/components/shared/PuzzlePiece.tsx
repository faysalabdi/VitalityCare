import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

// Import the puzzle piece graphics
import blueGraphic from '@/assets/Vitality CC - Graphics04.png';
import greenGraphic from '@/assets/Vitality CC - Graphics02.png';
import mixedGraphic from '@/assets/Vitality CC - Graphics03.png';
import blueAllGraphic from '@/assets/Vitality CC - Graphics01.png';

interface PuzzlePieceProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "blue" | "green" | "mixed" | "blue-all" | "green-all";
  size?: "sm" | "md" | "lg" | "xl";
}

const PuzzlePiece = ({ 
  className, 
  variant = "mixed", 
  size = "md",
  ...props 
}: PuzzlePieceProps) => {
  
  const getImagePath = () => {
    switch(variant) {
      case "blue":
        return blueGraphic;
      case "green":
        return greenGraphic;
      case "blue-all":
        return blueAllGraphic;
      case "green-all":
        return greenGraphic;
      case "mixed":
      default:
        return mixedGraphic;
    }
  };

  const getSizeClass = () => {
    switch(size) {
      case "sm":
        return "w-16 h-16";
      case "lg":
        return "w-32 h-32";
      case "xl":
        return "w-48 h-48";
      case "md":
      default:
        return "w-24 h-24";
    }
  };

  return (
    <div 
      className={cn(
        getSizeClass(),
        "relative",
        className
      )}
      {...props}
    >
      <img 
        src={getImagePath()} 
        alt="Puzzle piece graphic" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default PuzzlePiece;
