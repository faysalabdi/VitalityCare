import { FileText, Download } from "lucide-react";
import { motion } from "framer-motion";

interface PDFDisplayProps {
  src: string;
  alt: string;
  className?: string;
  showDownloadButton?: boolean;
  title?: string;
  showPreview?: boolean;
}

const PDFDisplay = ({ 
  src, 
  alt, 
  className = "", 
  showDownloadButton = true,
  title
}: PDFDisplayProps) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = src;
    link.download = title || alt;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`relative bg-gray-100 rounded-lg overflow-hidden ${className}`}>
      {/* PDF Preview Area */}
      <div className="flex flex-col items-center justify-center h-full p-8 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-4"
        >
          <FileText size={64} className="text-[hsl(var(--vitality-blue))]" />
        </motion.div>
        
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {title || "Property Brochure"}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4">
          Click to view or download the property brochure
        </p>
        
        {showDownloadButton && (
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-[hsl(var(--vitality-blue))] text-white px-4 py-2 rounded-lg hover:bg-[hsl(var(--vitality-blue-75))] transition-colors"
          >
            <Download size={16} />
            Download PDF
          </motion.button>
        )}
      </div>
      
      {/* Click to open PDF overlay */}
      <div 
        className="absolute inset-0 cursor-pointer bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center"
        onClick={() => window.open(src, '_blank')}
      >
        <div className="opacity-0 hover:opacity-100 transition-opacity duration-200 bg-white bg-opacity-90 rounded-full p-3">
          <FileText size={24} className="text-[hsl(var(--vitality-blue))]" />
        </div>
      </div>
    </div>
  );
};

export default PDFDisplay;