import React from "react";

const Features = () => {
  return (
    <section className="border-t border-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Feature 1 */}
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-5">
              <div className="w-14 h-14 text-[hsl(var(--vitality-green))]">
                {/* Custom arrow/return icon - matching the See Changes icon exactly */}
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M10 23C10 29.5228 15.4772 35 22 35H38" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                  />
                  <path 
                    d="M12 13L4 23L12 33" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </div>
            </div>
            <div>
              <p className="font-medium text-[#333] text-base">
                We match you with a specialist in your local community
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-5">
              <div className="w-14 h-14 text-[hsl(var(--vitality-blue))]">
                {/* Home icon - matching the See Changes icon exactly */}
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M10 21L24 10L38 21V38H10V21Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <path 
                    d="M18 38V26H30V38" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </div>
            </div>
            <div>
              <p className="font-medium text-[#333] text-base">
                Our therapists come to you at home for ultimate convenience
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-5">
              <div className="w-14 h-14 text-[hsl(var(--vitality-green))]">
                {/* Hat/client icon - matching the See Changes icon exactly */}
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M24 12C31.732 12 38 10.209 38 8C38 5.791 31.732 4 24 4C16.268 4 10 5.791 10 8C10 10.209 16.268 12 24 12Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <path 
                    d="M38 8V24C38 26.209 31.732 28 24 28C16.268 28 10 26.209 10 24V8" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <path 
                    d="M24 36V28" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <path 
                    d="M17 36H31" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </div>
            </div>
            <div>
              <p className="font-medium text-[#333] text-base">
                We welcome both NDIS participants and self-funded clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;