import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PuzzlePiece from "@/components/shared/PuzzlePiece";
import { Shield, Lock, FileCheck, UserCheck } from "lucide-react";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy & Dignity Policy | Vitality Community Care</title>
        <meta name="description" content="Learn about our commitment to safeguarding your personal information and upholding your individual rights." />
        <meta property="og:title" content="Privacy & Dignity Policy | Vitality Community Care" />
        <meta property="og:description" content="Our approach to privacy, confidentiality, and respecting the dignity of all participants." />
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
                <Shield className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Privacy & Dignity Policy</h1>
            <p className="text-lg mb-8">
              A Commitment to Safeguarding Your Personal Information and Upholding Your Individual Rights.
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

      {/* Main Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl">
                Vitality Community Care is committed to implementing a system to ensure each participant will receive quality services and supports that respect and protect their dignity and right to privacy.
              </p>

              <h2 className="text-2xl font-semibold mt-10 mb-6 flex items-center text-[hsl(var(--vitality-green))]">
                <Lock className="mr-3 h-6 w-6" />
                Vitality Community Care Ensures:
              </h2>

              <ul className="space-y-4 list-disc pl-6">
                <li>
                  Consistent processes and practices are in place that respect and protect the personal privacy and dignity of each participant.
                </li>
                <li>
                  Each participant is advised of confidentiality policies using the language, mode of communication, and terms that the participant is most likely to understand.
                </li>
                <li>
                  Each participant understands and agrees to what personal information will be collected and the reason, including recorded material in audio and/or visual format.
                </li>
              </ul>

              <div className="bg-[hsl(var(--neutral-light))] p-6 rounded-xl my-10">
                <p className="mb-0">
                  At Vitality Community Care, we will ensure each participant will receive quality services and support that respect and protect their dignity and right to privacy by complying with the 'Privacy Act 1988' and the 'NDIS Quality and Safeguarding Framework requirements and other legal obligations.
                </p>
              </div>

              <p>
                To ensure privacy for the Participant when discussing sensitive or personal matters, Vitality Community Care will only collect personal information that is necessary for the provision of services and support and given voluntarily to the Provider.
              </p>

              <p>
                'Privacy & Confidentiality Policy' and 'Participant Consent Policy' have been documented in the 'Participant Handbook' and will be communicated with each participant during the initial assessment process.
              </p>

              <p>
                Vitality Community Care will make sure that each participant understands and acknowledges what type of personal information, including recorded material in audio and/or visual format will be collected and for what reason.
              </p>

              <p>
                All personal and confidential information will only be collected, used, retained, and disclosed by obtaining the Participant's consent. Please refer to the 'Privacy & Confidentiality Policy' in this 'Participant Handbook'.
              </p>

              <p>
                Vitality Community Care will provide an interpreter if required for communication with the participant and respect to work with the participant's interpreter or representatives. Regular communications with participants have been planned and performed in a way that is identified during the initial assessment process and documented in the 'Initial Assessment & Support Plan'.
              </p>

              <p>
                Participants' dignity and right to privacy are also referred to in the 'Service Agreement'.
              </p>

              <p>
                A copy of the 'Service Agreement' and 'Participant Handbook' will be provided to each participant.
              </p>

              <p>
                Employees and workers are trained and inducted regarding the privacy and dignity policy. They have read, understood, and acknowledged this policy as well as the organizational requirements outlined in the 'Worker Handbook' through the induction process.
              </p>
            </div>
            
            <div className="border-t border-gray-200 pt-12 mt-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center text-[hsl(var(--vitality-blue))]">
                <UserCheck className="mr-3 h-6 w-6" />
                Our Commitment to You
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-[hsl(var(--neutral-light))] p-6 rounded-xl">
                  <h3 className="text-lg font-medium mb-3 text-[hsl(var(--vitality-green))]">Respect</h3>
                  <p className="text-[hsl(var(--neutral-dark))]">
                    We treat all participants with respect and dignity, honoring their individual preferences and needs.
                  </p>
                </div>
                
                <div className="bg-[hsl(var(--neutral-light))] p-6 rounded-xl">
                  <h3 className="text-lg font-medium mb-3 text-[hsl(var(--vitality-green))]">Confidentiality</h3>
                  <p className="text-[hsl(var(--neutral-dark))]">
                    We maintain strict confidentiality of all personal information that is shared with us.
                  </p>
                </div>
                
                <div className="bg-[hsl(var(--neutral-light))] p-6 rounded-xl">
                  <h3 className="text-lg font-medium mb-3 text-[hsl(var(--vitality-green))]">Transparency</h3>
                  <p className="text-[hsl(var(--neutral-dark))]">
                    We are clear about how we collect, use, and store personal information.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-12 mt-12">
              <h2 className="text-2xl font-semibold mb-6 flex items-center text-[hsl(var(--vitality-blue))]">
                <FileCheck className="mr-3 h-6 w-6" />
                Questions About Our Policy?
              </h2>
              
              <p className="mb-6">
                If you have any questions or concerns about our privacy practices, please don't hesitate to contact us.
              </p>
              
              <Button asChild size="lg" className="bg-gradient-to-r from-[hsl(var(--vitality-green))] to-[hsl(var(--vitality-blue))] hover:opacity-90 text-white rounded-full">
                <a href="/contact">Contact Our Team</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy; 