import PDFPreview from "./PDFPreview";

interface SmartImageDisplayProps {
  src: string;
  alt: string;
  className?: string;
  title?: string;
}

const SmartImageDisplay = ({ src, alt, className = "", title }: SmartImageDisplayProps) => {
  // Check if the file is a PDF by extension
  const isPDF = src.toLowerCase().endsWith('.pdf');

  if (isPDF) {
    return (
      <PDFPreview 
        src={src} 
        alt={alt} 
        className={className}
        title={title}
      />
    );
  }

  // Regular image for PNG/JPG files
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`w-full h-full object-cover ${className}`}
    />
  );
};

export default SmartImageDisplay;
