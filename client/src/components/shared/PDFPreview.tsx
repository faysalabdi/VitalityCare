import { FileText, Download, Eye, Loader2, ExternalLink, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from 'react-pdf';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFPreviewProps {
  src: string;
  alt: string;
  className?: string;
  showDownloadButton?: boolean;
  title?: string;
}

const PDFPreview = ({ 
  src, 
  alt, 
  className = "", 
  showDownloadButton = true,
  title
}: PDFPreviewProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(400);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showFullPreview) {
        handleCloseFullPreview();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showFullPreview]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(false);
  };

  const onDocumentLoadError = (error: Error) => {
    console.error('PDF load error:', error);
    setLoading(false);
    setError(true);
  };

  const handleDownload = () => {
    console.log('Download clicked:', src);
    try {
      const link = document.createElement('a');
      link.href = src;
      link.download = (title || alt || 'brochure').replace(/\s+/g, '-') + '.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download error:', error);
      // Fallback: open in new tab
      window.open(src, '_blank');
    }
  };

  const handleOpenPDF = () => {
    console.log('Open PDF clicked:', src);
    window.open(src, '_blank');
  };

  const handleOpenFullPreview = () => {
    console.log('Open full preview clicked');
    setShowFullPreview(true);
  };

  const handleCloseFullPreview = () => {
    console.log('Close preview clicked');
    setShowFullPreview(false);
  };

  if (error) {
    return (
      <div className={`relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg overflow-hidden ${className}`}>
        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <div className="relative">
              <FileText size={80} className="text-[hsl(var(--vitality-blue))]" />
              <div className="absolute -top-2 -right-2 bg-[hsl(var(--vitality-green))] text-white text-xs px-2 py-1 rounded-full font-bold">
                PDF
              </div>
            </div>
          </motion.div>
          
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {title || "Property Brochure"}
          </h3>
          
          <p className="text-gray-600 text-sm mb-6 max-w-xs">
            View the complete property brochure with detailed information, floor plans, and photos.
          </p>
          
          <div className="flex flex-col gap-3 w-full max-w-xs">
            <motion.button
              onClick={handleOpenPDF}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-2 bg-[hsl(var(--vitality-blue))] text-white px-6 py-3 rounded-lg hover:bg-[hsl(var(--vitality-blue-75))] transition-colors font-medium"
            >
              <ExternalLink size={18} />
              Open Brochure
            </motion.button>
            
            {showDownloadButton && (
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 bg-white text-[hsl(var(--vitality-blue))] border-2 border-[hsl(var(--vitality-blue))] px-6 py-3 rounded-lg hover:bg-[hsl(var(--vitality-blue))] hover:text-white transition-colors font-medium"
              >
                <Download size={18} />
                Download PDF
              </motion.button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div ref={containerRef} className={`relative bg-white overflow-hidden ${className}`}>
        {!shouldLoad ? (
          <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="text-center">
              <FileText size={48} className="text-[hsl(var(--vitality-blue))] mx-auto mb-2" />
              <p className="text-sm text-gray-600">Loading preview...</p>
            </div>
          </div>
        ) : (
          <>
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 z-10">
                <Loader2 className="animate-spin text-[hsl(var(--vitality-blue))]" size={48} />
              </div>
            )}

            <div className="flex flex-col h-full">
              <Document
                file={src}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={
                  <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100">
                    <Loader2 className="animate-spin text-[hsl(var(--vitality-blue))]" size={48} />
                  </div>
                }
              >
                <div className="relative h-full flex flex-col">
                  <div className="flex-shrink-0 flex items-center justify-center bg-white" style={{ height: 'calc(100% - 60px)' }}>
                    <Page 
                      pageNumber={1} 
                      height={containerRef.current ? containerRef.current.offsetHeight - 60 : 200}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      className="pdf-page"
                    />
                  </div>

                  {/* PDF Badge */}
                  <div className="absolute top-2 right-2 bg-[hsl(var(--vitality-green))] text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg z-10">
                    PDF {numPages && `• ${numPages} pages`}
                  </div>
                  
                  {/* Action buttons below PDF */}
                  <div className="bg-gradient-to-t from-gray-900 to-gray-800 p-3 flex-shrink-0">
                    <div className="flex gap-2 justify-center">
                      <motion.button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleOpenFullPreview();
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-1.5 bg-white text-[hsl(var(--vitality-blue))] px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium shadow-lg cursor-pointer text-sm"
                      >
                        <Eye size={16} />
                        View Full PDF
                      </motion.button>
                      
                      <motion.button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleDownload();
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-1.5 bg-[hsl(var(--vitality-blue))] text-white px-3 py-2 rounded-lg hover:bg-[hsl(var(--vitality-blue-75))] transition-colors font-medium shadow-lg cursor-pointer text-sm"
                      >
                        <Download size={16} />
                        Download
                      </motion.button>
                    </div>
                  </div>
                </div>
              </Document>
            </div>
          </>
        )}
      </div>

      {/* Full Preview Modal - Optimized with Pagination */}
      {showFullPreview && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999] p-6 pt-24"
          onClick={handleCloseFullPreview}
        >
          <div 
            className="bg-white rounded-xl max-w-4xl max-h-[85vh] w-full overflow-hidden flex flex-col relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button (X) - Compact */}
            <button
              onClick={handleCloseFullPreview}
              className="absolute top-3 right-3 z-50 bg-gray-800 text-white p-2 rounded-full hover:bg-red-500 transition-colors shadow-lg"
              aria-label="Close preview"
            >
              <X size={20} />
            </button>

            <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-gray-50 to-gray-100 flex-shrink-0">
              <div className="pr-12">
                <h3 className="text-lg font-bold text-gray-800 truncate">{title || "Property Brochure"}</h3>
                {numPages && <p className="text-xs text-gray-600 mt-0.5">{numPages} pages total</p>}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleOpenPDF();
                  }}
                  className="flex items-center gap-1.5 bg-[hsl(var(--vitality-blue))] text-white px-3 py-2 rounded-lg hover:bg-[hsl(var(--vitality-blue-75))] transition-colors cursor-pointer text-sm"
                >
                  <ExternalLink size={14} />
                  Open
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleDownload();
                  }}
                  className="flex items-center gap-1.5 bg-[hsl(var(--vitality-green))] text-white px-3 py-2 rounded-lg hover:bg-[hsl(var(--vitality-green-75))] transition-colors cursor-pointer text-sm"
                >
                  <Download size={14} />
                  Download
                </button>
              </div>
            </div>
            
            <div className="flex-1 overflow-auto p-6 bg-gray-50">
              <Document
                file={src}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                {numPages && Array.from(new Array(numPages), (el, index) => (
                  <div key={`page_${index + 1}`} className="mb-6 bg-white shadow-md rounded-lg overflow-hidden">
                    <Page 
                      pageNumber={index + 1}
                      width={Math.min(700, window.innerWidth - 200)}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      loading={
                        <div className="flex items-center justify-center h-[500px] bg-gray-100">
                          <Loader2 className="animate-spin text-[hsl(var(--vitality-blue))]" size={28} />
                        </div>
                      }
                    />
                    <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-4 py-2.5 text-center text-xs font-medium text-gray-700 border-t">
                      Page {index + 1} of {numPages}
                    </div>
                  </div>
                ))}
              </Document>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PDFPreview;