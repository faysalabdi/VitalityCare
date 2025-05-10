import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PuzzlePiece from "@/components/shared/PuzzlePiece";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Vitality Community Care</title>
        <meta name="description" content="Learn about Vitality Community Care, our mission, values, and our commitment to providing personalized disability support services." />
        <meta property="og:title" content="About Us | Vitality Community Care" />
        <meta property="og:description" content="Empowering individuals through culturally-responsive, person-centered disability support services." />
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">About Vitality Community Care</h1>
            <p className="text-lg mb-8">
              A purpose-driven healthcare and support organization committed to making a difference.
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

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <div className="rounded-xl overflow-hidden shadow-xl z-10 relative">
                <img 
                  src="https://images.unsplash.com/photo-1590650046871-92c887180603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Vitality team members supporting community" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[hsl(var(--vitality-green-25))] rounded-lg z-0 transform -rotate-6"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[hsl(var(--vitality-blue-25))] rounded-lg z-0 transform rotate-6"></div>
              <PuzzlePiece variant="green" size="sm" className="absolute -top-4 -right-4 opacity-20 animate-float" />
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-[hsl(var(--neutral-dark))] mb-4">Our Mission & Values</h2>
              <p className="text-lg mb-6">
                Vitality Community Care is a purpose-driven healthcare and support organization committed to empowering individuals through culturally-responsive, person-centered services.
              </p>
              <p className="text-lg mb-6">
                Rooted in trust, respect, and community connection, Vitality stands apart by delivering consistent, high-quality care that nurtures dignity and fosters independence. Our brand reflects a warm, modern, and human-centered approach designed to resonate with diverse communities and support our vision of building a more inclusive and caring future.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start">
                  <div className="mr-4 text-[hsl(var(--vitality-green))]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Person-Centered Approach</h3>
                    <p className="text-[hsl(var(--neutral-dark))]">We tailor our support to each individual's unique needs, preferences, and goals.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-[hsl(var(--vitality-blue))]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Cultural Responsiveness</h3>
                    <p className="text-[hsl(var(--neutral-dark))]">We honor and respect diverse backgrounds, customs, and communication styles.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-[hsl(var(--vitality-green))]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Community Connection</h3>
                    <p className="text-[hsl(var(--neutral-dark))]">We build meaningful links between individuals and their local communities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-[hsl(var(--vitality-blue))]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Quality & Consistency</h3>
                    <p className="text-[hsl(var(--neutral-dark))]">We deliver reliable, high-standard care that clients can depend on.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-[hsl(var(--neutral-light))]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">Our Journey</h2>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative w-24 h-24 flex items-center justify-center bg-[hsl(var(--vitality-green))] rounded-full">
                    <span className="text-white text-2xl font-bold">2018</span>
                    <div className="absolute h-full w-1 bg-[hsl(var(--vitality-green-50))] top-full left-1/2 transform -translate-x-1/2"></div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-medium mb-2">Foundation</h3>
                  <p>Vitality Community Care was established with a vision to provide culturally responsive care to diverse communities, starting with a small team of dedicated professionals.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative w-24 h-24 flex items-center justify-center bg-[hsl(var(--vitality-blue))] rounded-full">
                    <span className="text-white text-2xl font-bold">2020</span>
                    <div className="absolute h-full w-1 bg-[hsl(var(--vitality-blue-50))] top-full left-1/2 transform -translate-x-1/2"></div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-medium mb-2">Expansion</h3>
                  <p>We expanded our service offerings to include comprehensive NDIS supports and established partnerships with local healthcare providers to create a seamless care experience.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative w-24 h-24 flex items-center justify-center bg-[hsl(var(--vitality-green))] rounded-full">
                    <span className="text-white text-2xl font-bold">2023</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-medium mb-2">Today</h3>
                  <p>Today, Vitality Community Care serves diverse communities with a team of specialists passionate about empowering individuals through personalized, respectful support that nurtures independence and dignity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[hsl(var(--vitality-green))] to-[hsl(var(--vitality-blue))] rounded-xl p-12 text-white text-center relative overflow-hidden">
            <PuzzlePiece variant="mixed" size="xl" className="absolute -top-12 -left-12 opacity-10" />
            <PuzzlePiece variant="mixed" size="xl" className="absolute -bottom-12 -right-12 opacity-10" />
            
            <h2 className="text-3xl font-semibold mb-4 relative z-10">Ready to learn more about our approach?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto relative z-10">
              Contact our team today to discover how our person-centered support can make a difference in your life or the life of your loved one.
            </p>
            
            <Button asChild size="lg" className="bg-white text-[hsl(var(--vitality-green))] hover:bg-opacity-90 hover:text-[hsl(var(--vitality-green))] rounded-full">
              <a href="/contact">Contact Us Today</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
