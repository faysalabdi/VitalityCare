import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles, Clock, Home, FileText, ClipboardCheck, CheckCircle, Info, Calendar, Briefcase } from "lucide-react";
import PuzzlePiece from "@/components/shared/PuzzlePiece";

const AgedCare = () => {
  return (
    <>
      <Helmet>
        <title>Aged Care Services | Vitality Community Care</title>
        <meta name="description" content="We provide high-quality aged care services including Home Care Packages, Commonwealth Home Support Programme, and private care options." />
        <meta property="og:title" content="Aged Care Services | Vitality Community Care" />
        <meta property="og:description" content="Comprehensive aged care services to support independent living for seniors." />
      </Helmet>

      <section id="services-top" className="relative bg-gradient-to-br from-[hsl(var(--vitality-blue))] to-[hsl(var(--vitality-green-75))] text-white pt-20 pb-28 md:pb-32 lg:pb-36 overflow-hidden">
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3N2Zz4=')] opacity-80 z-0"></div>
        
        {/* Decorative patterns */}
        <PuzzlePiece variant="green" size="lg" className="absolute -top-10 -right-20 opacity-20 animate-rotate" />
        <PuzzlePiece variant="green" size="md" className="absolute -top-0 -left-1 opacity-20 animate-rotate-reverse" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 text-white">
                <Heart size={28} />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Aged Care Services</h1>
            <p className="text-xl mb-8 opacity-90">
              Vitality Community Care offers personalized aged care services
              to help seniors maintain their independence and quality of life.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white">
                <Home size={16} />
                <span>Home Care Package</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white">
                <Calendar size={16} />
                <span>CHSP</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white">
                <Sparkles size={16} />
                <span>Private Care</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Wave SVG divider at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
          <svg 
            viewBox="0 0 1200 135" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="relative block w-full"
            preserveAspectRatio="none"
            style={{ height: '200px', width: '100%' }}
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" 
              fill="white"
            ></path>
          </svg>
        </div>
      </section>

      {/* Aged Care Overview Section */}
      <section className="relative bg-white text-[hsl(var(--neutral-dark))] -mt-16 pt-28 md:pt-32 lg:pt-36 pb-20 md:pb-24 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[hsl(var(--vitality-blue))] font-medium uppercase tracking-wider">AGED CARE PROVIDER</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Personalized Support for Seniors</h2>
            <p className="text-lg max-w-3xl mx-auto opacity-80">
              We provide comprehensive aged care services designed to help seniors maintain their independence 
              while receiving the support they need to live comfortably at home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl text-center relative shadow-md hover:shadow-lg transition-shadow">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[hsl(var(--vitality-blue))] text-white flex items-center justify-center text-xl font-bold">1</div>
              <div className="mt-4 mb-4">
                <ClipboardCheck className="w-12 h-12 mx-auto text-[hsl(var(--vitality-blue))]" />
              </div>
              <h3 className="text-xl font-medium mb-2">Assessment</h3>
              <p>We thoroughly assess your needs and preferences to develop a personalized care plan.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl text-center relative shadow-md hover:shadow-lg transition-shadow">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[hsl(var(--vitality-green))] text-white flex items-center justify-center text-xl font-bold">2</div>
              <div className="mt-4 mb-4">
                <FileText className="w-12 h-12 mx-auto text-[hsl(var(--vitality-green))]" />
              </div>
              <h3 className="text-xl font-medium mb-2">Care Planning</h3>
              <p>We develop a tailored care plan that addresses your specific needs and goals.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl text-center relative shadow-md hover:shadow-lg transition-shadow">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[hsl(var(--vitality-blue))] text-white flex items-center justify-center text-xl font-bold">3</div>
              <div className="mt-4 mb-4">
                <Heart className="w-12 h-12 mx-auto text-[hsl(var(--vitality-blue))]" />
              </div>
              <h3 className="text-xl font-medium mb-2">Caregiver Matching</h3>
              <p>We carefully match you with compassionate and skilled caregivers suited to your preferences.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl text-center relative shadow-md hover:shadow-lg transition-shadow">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[hsl(var(--vitality-green))] text-white flex items-center justify-center text-xl font-bold">4</div>
              <div className="mt-4 mb-4">
                <CheckCircle className="w-12 h-12 mx-auto text-[hsl(var(--vitality-green))]" />
              </div>
              <h3 className="text-xl font-medium mb-2">Ongoing Support</h3>
              <p>We provide regular check-ins and plan reviews to ensure your care adapts to your changing needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types Section */}
      <section className="py-20 bg-[hsl(var(--neutral-light))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Aged Care Services</h2>
            <p className="text-lg max-w-3xl mx-auto">
              We offer a range of aged care services to meet your specific needs and preferences.
            </p>
          </div>

          {/* Home Care Package */}
          <div className="mb-16 bg-white rounded-xl overflow-hidden shadow-md">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80" 
                  alt="Home Care Package" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[hsl(var(--vitality-blue))] text-white">
                    <Home size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-[hsl(var(--vitality-blue))]">Home Care Package</h3>
                </div>
                <p className="mb-6 text-lg">
                  Our Home Care Package (HCP) services provide government-funded support to help you remain independent in your own home. We work with you to make the most of your funding, delivering personalized care that enhances your quality of life.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[hsl(var(--vitality-green))] mt-1 flex-shrink-0" />
                    <span>Personal care assistance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[hsl(var(--vitality-green))] mt-1 flex-shrink-0" />
                    <span>Household cleaning and maintenance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[hsl(var(--vitality-green))] mt-1 flex-shrink-0" />
                    <span>Meal preparation and nutrition</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[hsl(var(--vitality-green))] mt-1 flex-shrink-0" />
                    <span>Social support and companionship</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[hsl(var(--vitality-green))] mt-1 flex-shrink-0" />
                    <span>Transportation services</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[hsl(var(--vitality-green))] mt-1 flex-shrink-0" />
                    <span>Medication management</span>
                  </div>
                </div>
                <Button asChild className="rounded-full bg-[hsl(var(--vitality-blue))] hover:bg-[hsl(var(--vitality-blue-75))]">
                  <a href="/contact">Learn More <ArrowRight className="ml-2 h-5 w-5" /></a>
                </Button>
              </div>
            </div>
          </div>

          {/* Commonwealth Home Support Programme */}
          <div className="mb-16 bg-white rounded-xl overflow-hidden shadow-md">
            <div className="md:flex flex-row-reverse">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80" 
                  alt="Commonwealth Home Support Programme" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[hsl(var(--vitality-green))] text-white">
                    <Calendar size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-[hsl(var(--vitality-green))]">Commonwealth Home Support Programme (CHSP)</h3>
                </div>
                <p className="mb-6 text-lg">
                  The Commonwealth Home Support Programme (CHSP) offers entry-level support services for older Australians who need assistance to continue living independently at home and in their community.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[hsl(var(--vitality-blue))] mt-1 flex-shrink-0" />
                    <span>Domestic assistance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[hsl(var(--vitality-blue))] mt-1 flex-shrink-0" />
                    <span>Personal care</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[hsl(var(--vitality-blue))] mt-1 flex-shrink-0" />
                    <span>Home maintenance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[hsl(var(--vitality-blue))] mt-1 flex-shrink-0" />
                    <span>Home modifications</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[hsl(var(--vitality-blue))] mt-1 flex-shrink-0" />
                    <span>Social support</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[hsl(var(--vitality-blue))] mt-1 flex-shrink-0" />
                    <span>Transport assistance</span>
                  </div>
                </div>
                <Button asChild className="rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))]">
                  <a href="/contact">Learn More <ArrowRight className="ml-2 h-5 w-5" /></a>
                </Button>
              </div>
            </div>
          </div>

          {/* Private Care */}
          <div className="mb-10 bg-white rounded-xl overflow-hidden shadow-md">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1544126592-807ade215a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80" 
                  alt="Private Care" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[hsl(var(--vitality-blue))] text-white">
                    <Sparkles size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-[hsl(var(--vitality-blue))]">Private Care</h3>
                </div>
                <p className="mb-6 text-lg">
                  For those who don't qualify for government funding or need additional services beyond what's covered, our private care options provide flexible, pay-as-you-go support tailored to your exact requirements.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[hsl(var(--vitality-green))] mt-1 flex-shrink-0" />
                    <span>Fully customizable care plans</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[hsl(var(--vitality-green))] mt-1 flex-shrink-0" />
                    <span>No eligibility requirements</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[hsl(var(--vitality-green))] mt-1 flex-shrink-0" />
                    <span>Flexible scheduling options</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[hsl(var(--vitality-green))] mt-1 flex-shrink-0" />
                    <span>No waiting periods</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[hsl(var(--vitality-green))] mt-1 flex-shrink-0" />
                    <span>Transparent pricing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-[hsl(var(--vitality-green))] mt-1 flex-shrink-0" />
                    <span>Short or long-term options</span>
                  </div>
                </div>
                <Button asChild className="rounded-full bg-[hsl(var(--vitality-blue))] hover:bg-[hsl(var(--vitality-blue-75))]">
                  <a href="/contact">Learn More <ArrowRight className="ml-2 h-5 w-5" /></a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[hsl(var(--vitality-blue-5))]">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Discuss Your Aged Care Needs?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to learn how our aged care services can help you or your loved one maintain independence and quality of life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))]">
                <a href="/contact">Contact Us <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-[hsl(var(--vitality-blue))] text-[hsl(var(--vitality-blue))]">
                <a href="/referral">Make a Referral</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgedCare; 