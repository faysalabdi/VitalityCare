import { HTMLAttributes } from "react";

interface PuzzlePieceProps extends HTMLAttributes<HTMLDivElement> {}

const PuzzlePiece = ({ className, ...props }: PuzzlePieceProps) => {
  return (
    <div 
      className={`rounded-full ${className}`}
      {...props}
    ></div>
  );
};

export default PuzzlePiece;
