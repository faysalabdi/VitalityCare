import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Home, Hotel, Users, Clock, Calendar, Bed, ShieldCheck, CheckCircle, HeartHandshake } from "lucide-react";
import PuzzlePiece from "@/components/shared/PuzzlePiece";

const Accommodation = () => {
  return (
    <>
      <Helmet>
        <title>Accommodation Services | Vitality Community Care</title>
        <meta name="description" content="Our accommodation services include Supported Independent Living (SIL) and Respite Care / Short Term Accommodation, providing flexible living arrangements with personalized support." />
        <meta property="og:title" content="Accommodation Services | Vitality Community Care" />
        <meta property="og:description" content="Flexible accommodation options with the right level of support tailored to your needs." />
      </Helmet>

      <section id="services-top" className="relative bg-gradient-to-br from-[hsl(var(--vitality-blue))] to-[hsl(var(--vitality-green-75))] text-white pt-20 pb-28 md:pb-32 lg:pb-36 overflow-hidden">
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3N2Zz4=')] opacity-80 z-0"></div>
        
        {/* Decorative patterns */}
        <PuzzlePiece variant="blue" size="lg" className="absolute -top-10 -right-20 opacity-20 animate-rotate" />
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
                <Home size={28} />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Accommodation Services</h1>
            <p className="text-xl mb-8 opacity-90">
              Vitality Community Care provides flexible accommodation options tailored to your needs,
              from supported independent living to short-term respite care.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white">
                <Home size={16} />
                <span>Supported Independent Living (SIL)</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white">
                <Bed size={16} />
                <span>Respite Care / STA</span>
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

      {/* Benefits Section */}
      <section className="relative bg-white text-[hsl(var(--neutral-dark))] -mt-16 pt-28 md:pt-32 lg:pt-36 pb-20 md:pb-24 lg:pb-28 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[hsl(var(--vitality-green))] font-medium uppercase tracking-wider">NDIS REGISTERED PROVIDER</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">The Benefits of Our Accommodation Services</h2>
            <p className="text-lg max-w-3xl mx-auto opacity-80">
              Our accommodation options are designed to provide the perfect balance of independence and support, 
              all within a comfortable and safe environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center relative shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[hsl(var(--vitality-blue-10))] mb-4">
                <Home className="w-7 h-7 text-[hsl(var(--vitality-blue))]" />
              </div>
              <h3 className="text-xl font-medium mb-2">Personalized Support</h3>
              <p>Tailored care plans designed around your specific needs, preferences, and goals.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl text-center relative shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[hsl(var(--vitality-green-10))] mb-4">
                <Users className="w-7 h-7 text-[hsl(var(--vitality-green))]" />
              </div>
              <h3 className="text-xl font-medium mb-2">Community Connection</h3>
              <p>Opportunities to build relationships and engage with the broader community.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl text-center relative shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[hsl(var(--vitality-blue-10))] mb-4">
                <ShieldCheck className="w-7 h-7 text-[hsl(var(--vitality-blue))]" />
              </div>
              <h3 className="text-xl font-medium mb-2">Safety & Security</h3>
              <p>Safe, secure environments with appropriate supervision and support as needed.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl text-center relative shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[hsl(var(--vitality-green-10))] mb-4">
                <HeartHandshake className="w-7 h-7 text-[hsl(var(--vitality-green))]" />
              </div>
              <h3 className="text-xl font-medium mb-2">Skill Development</h3>
              <p>Support to develop and maintain daily living and independent skills.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl text-center relative shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[hsl(var(--vitality-blue-10))] mb-4">
                <Calendar className="w-7 h-7 text-[hsl(var(--vitality-blue))]" />
              </div>
              <h3 className="text-xl font-medium mb-2">Flexible Options</h3>
              <p>Choose from various accommodation types and support levels to match your needs.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl text-center relative shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[hsl(var(--vitality-green-10))] mb-4">
                <Clock className="w-7 h-7 text-[hsl(var(--vitality-green))]" />
              </div>
              <h3 className="text-xl font-medium mb-2">24/7 Support</h3>
              <p>Access to assistance and care whenever you need it, day or night.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SIL Section */}
      <section id="supported-independent-living" className="py-20 bg-[hsl(var(--neutral-light))]">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-16">
            <div className="md:grid md:grid-cols-5">
              <div className="md:col-span-3 p-8 md:p-12">
                <span className="text-[hsl(var(--vitality-blue))] font-medium uppercase tracking-wider">SUPPORTED ACCOMMODATION</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Supported Independent Living (SIL)</h2>
                <p className="text-lg mb-6">
                  Our Supported Independent Living service provides the assistance you need to live as independently as possible in your own home. Whether you need a few hours of support each week or 24/7 care, our flexible options can be tailored to your unique needs.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle size={18} className="text-[hsl(var(--vitality-green))]" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Daily Living Support</h4>
                      <p className="text-sm">Assistance with household tasks, cooking, shopping, and personal care.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle size={18} className="text-[hsl(var(--vitality-green))]" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Skill Development</h4>
                      <p className="text-sm">Support to learn and enhance skills for greater independence.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle size={18} className="text-[hsl(var(--vitality-green))]" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Health & Wellbeing</h4>
                      <p className="text-sm">Medication management and support for health appointments.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle size={18} className="text-[hsl(var(--vitality-green))]" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Community Access</h4>
                      <p className="text-sm">Support to participate in community activities and build social connections.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle size={18} className="text-[hsl(var(--vitality-green))]" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Flexible Support Levels</h4>
                      <p className="text-sm">From drop-in support to 24/7 care, based on your needs.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle size={18} className="text-[hsl(var(--vitality-green))]" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">NDIS Funded</h4>
                      <p className="text-sm">SIL is typically funded under NDIS plans for eligible participants.</p>
                    </div>
                  </div>
                </div>
                
                <Button asChild size="lg" className="rounded-full bg-[hsl(var(--vitality-blue))] hover:bg-[hsl(var(--vitality-blue-75))]">
                  <a href="/contact">Enquire About SIL <ArrowRight className="ml-2 h-5 w-5" /></a>
                </Button>
              </div>
              <div className="md:col-span-2 hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80" 
                  alt="Supported Independent Living" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Respite Care Section */}
      <section id="respite-care" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-[hsl(var(--neutral-light))] rounded-xl overflow-hidden shadow-lg mb-16">
            <div className="md:grid md:grid-cols-5">
              <div className="md:col-span-2 hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200&q=80" 
                  alt="Respite Care" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-3 p-8 md:p-12">
                <span className="text-[hsl(var(--vitality-green))] font-medium uppercase tracking-wider">SHORT-TERM ACCOMMODATION</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Respite Care / STA</h2>
                <p className="text-lg mb-6">
                  Our Respite Care and Short Term Accommodation (STA) services provide temporary support in a comfortable, safe environment. Whether it's planned respite for carers or emergency accommodation, we ensure a positive experience with quality care.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle size={18} className="text-[hsl(var(--vitality-blue))]" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Carer Relief</h4>
                      <p className="text-sm">Planned breaks for primary carers to rest and recharge.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle size={18} className="text-[hsl(var(--vitality-blue))]" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Emergency Support</h4>
                      <p className="text-sm">Immediate accommodation when primary care arrangements change unexpectedly.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle size={18} className="text-[hsl(var(--vitality-blue))]" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Transitional Care</h4>
                      <p className="text-sm">Support while transitioning between different living arrangements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle size={18} className="text-[hsl(var(--vitality-blue))]" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Skill Building</h4>
                      <p className="text-sm">Opportunity to develop independent living skills in a supportive environment.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle size={18} className="text-[hsl(var(--vitality-blue))]" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Flexible Durations</h4>
                      <p className="text-sm">From overnight stays to several weeks, based on your needs.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle size={18} className="text-[hsl(var(--vitality-blue))]" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">NDIS Funded</h4>
                      <p className="text-sm">STA is typically funded under NDIS plans for eligible participants.</p>
                    </div>
                  </div>
                </div>
                
                <Button asChild size="lg" className="rounded-full bg-[hsl(var(--vitality-green))] hover:bg-[hsl(var(--vitality-green-75))]">
                  <a href="/contact">Enquire About Respite <ArrowRight className="ml-2 h-5 w-5" /></a>
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
            <h2 className="text-3xl font-bold mb-4">Find the Right Accommodation Option for You</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your accommodation needs and discover how our services can provide the perfect balance of independence and support.
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

export default Accommodation; 