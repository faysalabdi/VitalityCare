import { motion } from "framer-motion";

interface PuzzleLogoProps {
  size?: "sm" | "md" | "lg";
}

const PuzzleLogo = ({ size = "md" }: PuzzleLogoProps) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10 md:w-12 md:h-12",
    lg: "w-14 h-14 md:w-16 md:h-16"
  };

  const sizeClass = sizes[size];

  return (
    <motion.div 
      className={`${sizeClass} relative`}
      whileHover={{ rotate: 10 }}
      transition={{ duration: 0.2 }}
    >
      {/* Circle base with puzzle pieces */}
      <div className="absolute inset-0 bg-[hsl(var(--vitality-blue))] rounded-full" style={{ clipPath: "circle(50% at 50% 50%)" }}>
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-[hsl(var(--vitality-green))]" style={{ clipPath: "polygon(50% 0%, 100% 35%, 100% 100%, 50% 100%, 0% 100%, 0% 35%)" }}></div>
      </div>
    </motion.div>
  );
};

export default PuzzleLogo;
