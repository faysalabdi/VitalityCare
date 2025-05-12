import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import ContactForm from "@/components/shared/ContactForm";
import { useLocation } from "wouter";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Users,
  FileText
} from "lucide-react";
import PuzzlePiece from "@/components/shared/PuzzlePiece";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(location.split('?')[1] || '');
  const careerInquiry = searchParams.get('careers') === 'true';

  return (
    <>
      <Helmet>
        <title>Contact Us | Vitality Community Care</title>
        <meta name="description" content="Get in touch with Vitality Community Care for personalized disability support services or to join our team." />
        <meta property="og:title" content="Contact Us | Vitality Community Care" />
        <meta property="og:description" content="Reach out to learn about our services or to schedule a consultation." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[hsl(var(--vitality-green))] to-[hsl(var(--vitality-blue-75))] text-white pt-20 pb-28 md:pb-32 lg:pb-36 overflow-hidden">
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xNSkiLz48L3N2Zz4=')] opacity-80 z-0"></div>
        
        {/* Decorative patterns */}
        <PuzzlePiece variant="blue" size="lg" className="absolute -top-0 -right-0 opacity-20 animate-rotate" />
        <PuzzlePiece variant="blue" size="md" className="absolute -top-0 -left-0 opacity-20 animate-rotate-reverse" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Icon badge */}
            <div className="inline-flex mb-6">
              <div className="flex items-center justify-center p-3 rounded-lg bg-white bg-opacity-20 text-white">
                {careerInquiry ? <Briefcase size={28} /> : <MessageCircle size={28} />}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">
              {careerInquiry ? "Join Our Team" : "Contact Us"}
            </h1>
            <p className="text-xl mb-8 opacity-90">
              {careerInquiry 
                ? "Interested in a rewarding career supporting others? Get in touch with us today." 
                : "Get in touch with us today! Whether it's a quick query or a detailed discussion, we're just a call or email away."}
            </p>
            
            {/* Quick contact buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="tel:1300395852" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors">
                <Phone size={16} />
                <span>1300 395 852</span>
              </a>
              <a href="mailto:contact@vitalitycommunitycare.com.au" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors">
                <Mail size={16} />
                <span>Email Us</span>
              </a>
              <a href="#location" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors">
                <MapPin size={16} />
                <span>Find Us</span>
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Wave SVG divider at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0">
          <svg 
            viewBox="0 0 1200 120" 
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

      {/* Contact Section */}
      <section className="relative py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-[hsl(var(--neutral-dark))] mb-4">
                {careerInquiry ? "Work With Vitality" : "Our Contact Details"}
              </h2>
              <p className="text-lg mb-8">
                {careerInquiry
                  ? "Join our team of dedicated professionals making a difference in the lives of the people we support."
                  : "Our friendly team is here to answer your questions and help you find the right support for your needs."}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-medium text-lg text-[hsl(var(--neutral-dark))] mb-4 flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[hsl(var(--vitality-green-10))] text-[hsl(var(--vitality-green))] mr-2">
                      <Users size={16} />
                    </div>
                    Contact Information
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start group">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-[hsl(var(--vitality-green-10))] flex items-center justify-center text-[hsl(var(--vitality-green))] group-hover:bg-[hsl(var(--vitality-green))] group-hover:text-white transition-colors">
                          <Phone size={18} />
                        </div>
                      </div>
                      <div>
                        <p className="text-[hsl(var(--neutral-dark))] text-sm mb-1">Phone</p>
                        <a href="tel:1300395852" className="font-medium text-lg hover:text-[hsl(var(--vitality-green))] transition-colors">1300 395 852</a>
                      </div>
                    </li>
                    <li className="flex items-start group">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-10 h-10 rounded-full bg-[hsl(var(--vitality-blue-10))] flex items-center justify-center text-[hsl(var(--vitality-blue))] group-hover:bg-[hsl(var(--vitality-blue))] group-hover:text-white transition-colors">
                          <Mail size={18} />
                        </div>
                      </div>
                      <div>
                        <p className="text-[hsl(var(--neutral-dark))] text-sm mb-1">Email</p>
                        <a href="mailto:contact@vitalitycommunitycare.com.au" className="font-medium text-lg hover:text-[hsl(var(--vitality-blue))] transition-colors break-all">contact@vitalitycommunitycare.com.au</a>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg text-[hsl(var(--neutral-dark))] mb-4 flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[hsl(var(--vitality-blue-10))] text-[hsl(var(--vitality-blue))] mr-2">
                      <Clock size={16} />
                    </div>
                    Opening Hours
                  </h3>
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-[hsl(var(--vitality-green-10))] flex items-center justify-center text-[hsl(var(--vitality-green))] mr-3">
                            <span className="text-xs font-semibold">M-F</span>
                          </div>
                          <span className="text-[hsl(var(--neutral-dark))]">Monday - Friday</span>
                        </div>
                        <span className="font-medium bg-[hsl(var(--vitality-green-5))] text-[hsl(var(--vitality-green))] px-3 py-1 rounded-full text-sm">9:00am - 5:00pm</span>
                      </li>
                      <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-[hsl(var(--vitality-blue-10))] flex items-center justify-center text-[hsl(var(--vitality-blue))] mr-3">
                            <span className="text-xs font-semibold">SA</span>
                          </div>
                          <span className="text-[hsl(var(--neutral-dark))]">Saturday</span>
                        </div>
                        <span className="font-medium bg-[hsl(var(--vitality-blue-5))] text-[hsl(var(--vitality-blue))] px-3 py-1 rounded-full text-sm">9:00am - 5:00pm</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-[hsl(var(--vitality-blue-10))] flex items-center justify-center text-[hsl(var(--vitality-blue))] mr-3">
                            <span className="text-xs font-semibold">SU</span>
                          </div>
                          <span className="text-[hsl(var(--neutral-dark))]">Sunday</span>
                        </div>
                        <span className="font-medium bg-[hsl(var(--vitality-blue-5))] text-[hsl(var(--vitality-blue))] px-3 py-1 rounded-full text-sm">9:00am - 5:00pm</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-medium text-lg text-[hsl(var(--neutral-dark))] mb-4 flex items-center">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[hsl(var(--vitality-green-10))] text-[hsl(var(--vitality-green))] mr-2">
                    <Users size={16} />
                  </div>
                  Connect With Us
                </h3>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#" 
                    className="group relative bg-gradient-to-r from-[hsl(var(--vitality-green-75))] to-[hsl(var(--vitality-green))] text-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm transition-all hover:shadow-md hover:-translate-y-1" 
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                    <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[hsl(var(--vitality-green))] text-xs px-1.5 py-0.5 rounded shadow-sm">
                      FB
                    </div>
                  </a>
                  <a 
                    href="#" 
                    className="group relative bg-gradient-to-r from-[hsl(var(--vitality-blue-75))] to-[hsl(var(--vitality-blue))] text-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm transition-all hover:shadow-md hover:-translate-y-1" 
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                    <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[hsl(var(--vitality-blue))] text-xs px-1.5 py-0.5 rounded shadow-sm">
                      TW
                    </div>
                  </a>
                  <a 
                    href="#" 
                    className="group relative bg-gradient-to-r from-[hsl(var(--vitality-green-75))] to-[hsl(var(--vitality-green))] text-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm transition-all hover:shadow-md hover:-translate-y-1" 
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                    <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[hsl(var(--vitality-green))] text-xs px-1.5 py-0.5 rounded shadow-sm">
                      IG
                    </div>
                  </a>
                  <a 
                    href="#" 
                    className="group relative bg-gradient-to-r from-[hsl(var(--vitality-blue-75))] to-[hsl(var(--vitality-blue))] text-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm transition-all hover:shadow-md hover:-translate-y-1" 
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                    <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[hsl(var(--vitality-blue))] text-xs px-1.5 py-0.5 rounded shadow-sm">
                      IN
                    </div>
                  </a>
                </div>
                <p className="mt-4 text-sm text-[hsl(var(--neutral-dark))]">
                  Follow us on social media for updates, helpful resources, and community stories.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-medium text-lg mb-4 flex items-center">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[hsl(var(--vitality-blue-10))] text-[hsl(var(--vitality-blue))] mr-2">
                    <MapPin size={16} />
                  </div>
                  Our Locations
                </h3>
                <p className="mb-4 text-[hsl(var(--neutral-dark))]">We proudly serve communities throughout Australia:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center bg-[hsl(var(--vitality-green-5))] p-3 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-[hsl(var(--vitality-green-10))] flex items-center justify-center text-[hsl(var(--vitality-green))] mr-3">
                      <CheckCircle size={16} />
                    </div>
                    <span className="font-medium">Melbourne (Head Office)</span>
                  </div>
                  <div className="flex items-center bg-[hsl(var(--vitality-blue-5))] p-3 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-[hsl(var(--vitality-blue-10))] flex items-center justify-center text-[hsl(var(--vitality-blue))] mr-3">
                      <CheckCircle size={16} />
                    </div>
                    <span className="font-medium">Perth (WA)</span>
                  </div>
                  <div className="flex items-center bg-[hsl(var(--vitality-green-5))] p-3 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-[hsl(var(--vitality-green-10))] flex items-center justify-center text-[hsl(var(--vitality-green))] mr-3">
                      <CheckCircle size={16} />
                    </div>
                    <span className="font-medium">Adelaide (SA)</span>
                  </div>
                  <div className="flex items-center bg-[hsl(var(--vitality-blue-5))] p-3 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-[hsl(var(--vitality-blue-10))] flex items-center justify-center text-[hsl(var(--vitality-blue))] mr-3">
                      <CheckCircle size={16} />
                    </div>
                    <span className="font-medium">Brisbane (QLD)</span>
                  </div>
                  <div className="flex items-center bg-[hsl(var(--vitality-green-5))] p-3 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-[hsl(var(--vitality-green-10))] flex items-center justify-center text-[hsl(var(--vitality-green))] mr-3">
                      <CheckCircle size={16} />
                    </div>
                    <span className="font-medium">Sydney (NSW)</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-[hsl(var(--vitality-green))] mt-0.5 mr-2">
                    <MapPin size={14} />
                  </div>
                  <p className="text-sm text-[hsl(var(--neutral-dark))]">
                    Contact us to check availability in your location.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-[hsl(var(--neutral-light))] p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-[hsl(var(--neutral-dark))] mb-6">
                  {careerInquiry ? "Apply to Join Our Team" : "Let's Get In Touch"}
                </h3>
                
                <ContactForm isCareerForm={careerInquiry} />
              </div>
            </div>
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
            style={{ height: '200px', width: '100%' }}
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" 
              fill="hsl(var(--vitality-blue-10))"
            ></path>
          </svg>
        </div>
      </section>

      {/* Map Section */}
      <section id="location" className="relative py-16 bg-[hsl(var(--vitality-blue-10))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[hsl(var(--vitality-blue))] font-medium uppercase tracking-wider">OUR LOCATIONS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Find Us Nearby</h2>
            <p className="text-lg max-w-3xl mx-auto opacity-80">
              Visit our offices or contact us to arrange an in-home consultation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Melbourne (Head Office)</h3>
                <p className="text-[hsl(var(--neutral-dark))]">Corporate One, 84 Hotham St, Preston, 3072</p>
                <a href="https://maps.google.com/?q=84+Hotham+St+Preston+VIC+3072" target="_blank" rel="noopener noreferrer" className="text-sm text-[hsl(var(--vitality-blue))] font-medium flex items-center mt-4">
                  Get Directions
                  <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Perth (Western Australia)</h3>
                <p className="text-[hsl(var(--neutral-dark))]">2232B Albany Hwy, Gosnells, 6110 WA</p>
                <a href="https://maps.google.com/?q=2232B+Albany+Hwy+Gosnells+WA+6110" target="_blank" rel="noopener noreferrer" className="text-sm text-[hsl(var(--vitality-blue))] font-medium flex items-center mt-4">
                  Get Directions
                  <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Adelaide (South Australia)</h3>
                <p className="text-[hsl(var(--neutral-dark))]">33 Warwick St, Walkerville, 5081 SA</p>
                <a href="https://maps.google.com/?q=33+Warwick+St+Walkerville+SA+5081" target="_blank" rel="noopener noreferrer" className="text-sm text-[hsl(var(--vitality-blue))] font-medium flex items-center mt-4">
                  Get Directions
                  <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Brisbane (Queensland)</h3>
                <p className="text-[hsl(var(--neutral-dark))]">477 Boundary St, Spring Hill, 4000 QLD</p>
                <a href="https://maps.google.com/?q=477+Boundary+St+Spring+Hill+QLD+4000" target="_blank" rel="noopener noreferrer" className="text-sm text-[hsl(var(--vitality-blue))] font-medium flex items-center mt-4">
                  Get Directions
                  <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sydney (NSW)</h3>
                <p className="text-[hsl(var(--neutral-dark))]">8 Parramatta Square, Parramatta, 2150 NSW</p>
                <a href="https://maps.google.com/?q=8+Parramatta+Square+Parramatta+NSW+2150" target="_blank" rel="noopener noreferrer" className="text-sm text-[hsl(var(--vitality-blue))] font-medium flex items-center mt-4">
                  Get Directions
                  <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 relative">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 z-10 bg-white p-3 rounded-lg shadow-md flex items-center space-x-2">
              <MapPin className="text-[hsl(var(--vitality-green))]" size={16} />
              <span className="font-medium">Vitality Community Care</span>
            </div>
            
            <div className="aspect-w-16 aspect-h-9 w-full h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.5909581695236!2d138.60876729999998!3d-34.9056151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ced687a3c9c9%3A0xe1f9eae4a4b17f48!2s84%20Hotham%20St%2C%20Preston%20VIC%203072!5e0!3m2!1sen!2sau!4v1623903498717!5m2!1sen!2sau" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Vitality Community Care head office location"
              ></iframe>
            </div>
            
            <div className="p-4 bg-white border-t border-gray-100 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-[hsl(var(--vitality-blue))]">
                  <Phone size={16} className="mr-1" />
                  <span className="text-sm font-medium">1300 395 852</span>
                </div>
                <span className="text-gray-300">|</span>
                <div className="flex items-center text-[hsl(var(--vitality-green))]">
                  <Mail size={16} className="mr-1" />
                  <span className="text-sm font-medium">contact@vitalitycommunitycare.com.au</span>
                </div>
              </div>
            </div>
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
            style={{ height: '200px', width: '100%' }}
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" 
              fill="white"
            ></path>
          </svg>
        </div>
      </section>

      {/* Referral Note Section */}
      <section className="relative py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[hsl(var(--vitality-blue))] to-[hsl(var(--vitality-green))] p-8 rounded-xl relative overflow-hidden shadow-lg">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-white opacity-5 rounded-full"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-white opacity-5 rounded-full"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Looking to Refer Someone?</h3>
                <p className="text-white mb-4 opacity-90">
                  If you're a healthcare professional, support coordinator, or family member looking to refer someone to our services, you can use our dedicated referral form.
                </p>
                <Button asChild className="rounded-full bg-white text-[hsl(var(--vitality-green))] hover:bg-opacity-90">
                  <a href="/referral" className="flex items-center gap-2">
                    Go to Referral Form
                    <ArrowRight size={16} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
