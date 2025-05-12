import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import PuzzlePiece from "@/components/shared/PuzzlePiece";
import { Heart, Clipboard, MessageCircle } from "lucide-react";

// Import assets
import backgroundGraphic from '@/assets/Vitality CC - Logo02.png';
import ndisLogo from '@/assets/IHeartNDIS_2020.svg';
import vcc from '@/assets/vcc.png';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[hsl(var(--vitality-blue))] to-[hsl(var(--vitality-blue-75))] text-white pt-16 pb-20 md:pb-24 lg:pb-28 overflow-hidden">
      {/* Dotted pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3N2Zz4=')] opacity-80 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left content section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 text-left md:pr-8 mb-10 md:mb-0"
          >
            <div className="inline-flex mb-6">
              <img src={ndisLogo} alt="I Heart NDIS" className="h-12" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              <span>Creating Lasting </span>
              <span className="relative">
                <span className="relative z-10">Change</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[hsl(var(--vitality-green))] transform -rotate-1 rounded-full"></span>
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-white mt-3 mb-6 opacity-90">
              With Friendly In-Home Supports
            </h2>
            
            <p className="text-lg md:text-xl mb-8 text-white opacity-80">
              Vitality Community Care brings effective Behaviour Support, Occupational Therapy, Speech Therapy and Support Coordination to communities across Australia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))] text-white px-8 shadow-lg">
                <Link href="/services" className="flex items-center">
                  GET STARTED
                  <span className="ml-2">&rarr;</span>
                </Link>
              </Button>
            </div>
            
            {/* Feature points */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white mr-3">
                  <Heart size={18} />
                </div>
                <span className="text-sm font-medium text-white">Person-Centered Care</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white mr-3">
                  <Clipboard size={18} />
                </div>
                <span className="text-sm font-medium text-white">NDIS Registered</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white mr-3">
                  <MessageCircle size={18} />
                </div>
                <span className="text-sm font-medium text-white">24/7 Support</span>
              </div>
            </div> */}
          </motion.div>
          
          {/* Right image section with circular frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            <div className="relative">
              {/* Circular image container */}
              <div className="relative rounded-full overflow-hidden border-4 border-white shadow-xl aspect-square max-w-[450px] mx-auto">
                <img 
                  src={vcc} 
                  alt="Healthcare professional supporting a client" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <PuzzlePiece 
                variant="green"
                size="lg"
                className="absolute -top-10 -right-10 z-20 animate-rotate"
              />
              <PuzzlePiece 
                variant="green"
                size="md"
                className="absolute -bottom-8 -left-8 z-20 animate-rotate-reverse animate-pulse-glow"
              />
              
              {/* NDIS badge */}
              {/* <div className="absolute -bottom-4 -right-4 md:bottom-10 md:right-0 bg-white rounded-full p-2 shadow-md">
                <img src={ndisLogo} alt="NDIS Registered Provider" className="h-12 w-12" />
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave SVG divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
        <svg 
          viewBox="0 0 1200 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="relative block w-full"
          preserveAspectRatio="none"
          style={{ height: '180px' }}
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            fill="white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
