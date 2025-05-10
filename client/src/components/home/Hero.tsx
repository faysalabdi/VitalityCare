import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import PuzzlePiece from "@/components/shared/PuzzlePiece";
import PuzzleLogo from "@/components/shared/PuzzleLogo";
import { Heart, Clipboard, MessageCircle } from "lucide-react";

// Import assets
import backgroundGraphic from '@/assets/Vitality CC - Graphics05.png';
import ndisLogo from '@/assets/IHeartNDIS_2020.svg';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src={backgroundGraphic} 
          alt="Background gradient" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white opacity-80 rounded-l-[80px] transform -skew-x-6 z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white opacity-80 rounded-tr-[60px] z-10"></div>
      
      {/* Single subtle animated floating puzzle piece */}
      <motion.div 
        className="absolute top-[20%] right-[15%] z-20 opacity-40"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 3, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <PuzzlePiece variant="blue" size="sm" />
      </motion.div>
      
      <div className="container mx-auto px-4 py-16 md:py-28 flex flex-col md:flex-row items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 text-center md:text-left md:pr-8 mb-10 md:mb-0"
        >
          <div className="inline-flex mb-6">
            <img src={ndisLogo} alt="I Heart NDIS" className="h-12" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-[hsl(var(--vitality-blue))]">Creating Lasting </span>
            <span className="relative">
              <span className="relative z-10">Change</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-[hsl(var(--vitality-green-25))] transform -rotate-1 rounded-full"></span>
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[hsl(var(--neutral-dark))] mt-3 mb-6">
            With Friendly In-Home Supports
          </h2>
          
          <p className="text-lg md:text-xl mb-8 text-[hsl(var(--neutral-dark))]">
            Vitality Community Care brings effective Behaviour Support, Occupational Therapy, Speech Therapy and Support Coordination to communities across Australia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button asChild size="lg" className="rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))] px-8 shadow-lg">
              <Link href="/services" className="flex items-center">
                DISCOVER OUR SERVICES
                <span className="ml-2">&rarr;</span>
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="rounded-full border-[hsl(var(--vitality-blue))] text-[hsl(var(--vitality-blue))] hover:bg-[hsl(var(--vitality-blue-10))]">
              <Link href="/contact">CONTACT US</Link>
            </Button>
          </div>
          
          {/* Feature points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--vitality-green-10))] flex items-center justify-center text-[hsl(var(--vitality-green))] mr-3">
                <Heart size={18} />
              </div>
              <span className="text-sm font-medium">Person-Centered Care</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--vitality-blue-10))] flex items-center justify-center text-[hsl(var(--vitality-blue))] mr-3">
                <Clipboard size={18} />
              </div>
              <span className="text-sm font-medium">NDIS Registered</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--vitality-green-10))] flex items-center justify-center text-[hsl(var(--vitality-green))] mr-3">
                <MessageCircle size={18} />
              </div>
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/2 relative"
        >
          {/* Stylized hero image */}
          <div className="relative z-10">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Healthcare professional supporting a client" 
                className="w-full h-auto"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.3)] to-transparent"></div>
              
              {/* Accent dots pattern */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[hsl(var(--vitality-blue))] opacity-20 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[hsl(var(--vitality-green))] opacity-20 rounded-full blur-xl"></div>
            </div>
            
            {/* Decorative elements with puzzle pieces */}
            <PuzzlePiece 
              variant="green"
              size="lg"
              className="absolute -top-10 -right-10 z-20 animate-rotate"
            />
            <PuzzlePiece 
              variant="blue"
              size="md"
              className="absolute -bottom-8 -left-8 z-20 animate-rotate-reverse animate-pulse-glow"
            />
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
