import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import PuzzlePiece from "@/components/shared/PuzzlePiece";
import { Phone, Mail, UserPlus } from "lucide-react";
import ndisLogo from "@/assets/LOGO-I-Heart-NDIS-PNG-768x768.png";
import backgroundImage from "@/assets/504973531_1073137401542499_3189903183962444117_n.jpg";

const CTA = () => {
  return (
    <section 
      id="get-started" 
      className="relative bg-gradient-to-br from-[hsl(var(--vitality-blue))] to-[hsl(var(--vitality-blue-75))] text-white -mt-6 md:-mt-21 lg:-mt-20 pt-36 md:pt-40 lg:pt-44 pb-20 md:pb-24 lg:pb-28 overflow-hidden"
    >
      {/* Top curved corners with wave SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden z-0">
        <svg 
          viewBox="0 0 1200 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="relative block w-full"
          preserveAspectRatio="none"
          style={{ height: '60px', width: '100%' }}
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="white"
            opacity="0.25"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            fill="white"
            opacity="0.5"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="white"
            opacity="0.75"
          ></path>
        </svg>
      </div>

      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      ></div>

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3N2Zz4=')] opacity-80 z-0"></div>
      
      {/* Decorative puzzle pieces */}
      <PuzzlePiece variant="green" size="xl" className="absolute -top-12 -left-12 opacity-[0.07] animate-float-slow" />
      <PuzzlePiece variant="green" size="lg" className="absolute bottom-20 right-20 opacity-[0.07] animate-float" />
      <PuzzlePiece variant="blue" size="md" className="absolute top-1/4 right-1/3 opacity-[0.07] animate-float-delay" />

      {/* NDIS badge */}
      <div className="absolute top-6 right-6 z-20">
        <div className="bg-white rounded-full p-2 shadow-lg">
          <img 
            src={ndisLogo} 
            alt="I Heart NDIS" 
            className="h-12 w-12 object-contain"
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Regardless where you are throughout your NDIS journey,
            </h2>
            <p className="text-2xl md:text-3xl font-light italic mb-8 text-white/90">
              we're here to help you.
            </p>
            
            <Button asChild size="lg" className="rounded-full bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 shadow-lg font-medium">
              <Link href="/referral">
                Start Your Referral
              </Link>
            </Button>
          </motion.div>
          
          {/* Right content section with numbered points */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <p className="text-lg font-medium mb-8 text-white/90">
              Wherever you are in your NDIS journey, we're here to help:
            </p>
            
            <div className="space-y-8">
              {/* Point 1 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-white text-[hsl(var(--vitality-blue))] rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">New to the NDIS?</h3>
                  <p className="text-white/80 leading-relaxed">
                    We'll guide you step by step so you feel confident and supported right from the beginning.
                  </p>
                </div>
              </div>
              
              {/* Point 2 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-white text-[hsl(var(--vitality-blue))] rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Preparing for a Plan Review?</h3>
                  <p className="text-white/80 leading-relaxed">
                    Our team will help you get organised, understand your options, and make the most of your plan.
                  </p>
                </div>
              </div>
              
              {/* Point 3 */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-white text-[hsl(var(--vitality-blue))] rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Thinking about changing providers?</h3>
                  <p className="text-white/80 leading-relaxed">
                    We'll make the transition smooth and stress-free, ensuring your supports continue without disruption.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Ready to experience the <span className="text-[hsl(var(--vitality-green))]">Vitality</span> difference?
          </h3>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Take the first step toward personalized, in-home support that empowers you to live your best life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))] text-white px-8 shadow-lg">
              <Link href="/contact" className="flex items-center">
                <Mail size={18} className="mr-2" />
                Contact Us
              </Link>
            </Button>
            <Button asChild size="lg" className="rounded-full bg-white text-[hsl(var(--vitality-blue))] hover:bg-white/90 hover:text-[hsl(var(--vitality-blue))] px-8 shadow-lg">
              <Link href="/referral" className="flex items-center">
                <UserPlus size={18} className="mr-2" />
                Make a Referral
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-white text-black hover:bg-white hover:text-[hsl(var(--vitality-blue))] px-8">
              <a href="tel:1800123456" className="flex items-center">
                <Phone size={18} className="mr-2" />
                Call 1800 123 456
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
