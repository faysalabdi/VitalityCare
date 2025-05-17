import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import PuzzlePiece from "@/components/shared/PuzzlePiece";
import MultiStepReferral from "@/components/MultiStepReferral";

const Referral = () => {
  return (
    <>
      <Helmet>
        <title>Make a Referral | Vitality Community Care</title>
        <meta name="description" content="Refer someone to Vitality Community Care. Fill out our easy referral form and we'll be in touch promptly." />
        <meta property="og:title" content="Make a Referral | Vitality Community Care" />
        <meta property="og:description" content="Refer someone to our services. We're committed to providing quality care." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Background with color sections */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-[hsl(var(--vitality-blue))] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[hsl(var(--vitality-green))] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(var(--vitality-blue))] text-white">
                <FileText className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Make a Referral</h1>
            <p className="text-lg mb-8">
              Referring someone to Vitality Community Care is a breeze. Just fill out the form below, and a welcoming team member will reach out to you shortly.
            </p>
            
            {/* Decorative elements */}
            <div className="hidden md:block absolute top-10 left-10">
              <PuzzlePiece variant="green" size="sm" className="opacity-20 animate-float" />
            </div>
            <div className="hidden md:block absolute bottom-10 right-10">
              <PuzzlePiece variant="blue" size="sm" className="opacity-20 animate-float-delay" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Referral Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[hsl(var(--neutral-light))] p-8 rounded-xl">
            <MultiStepReferral />
          </div>
        </div>
      </section>
    </>
  );
};

export default Referral; 